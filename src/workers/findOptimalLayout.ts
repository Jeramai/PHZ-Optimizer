import { ADJACENCY } from '@/lib/enums';
import { Item, LayoutResult } from '@/lib/types';

const REQUIRED_ITEMS_FOR_LAYOUT = 7;
const MAX_COMBINATIONS_PER_CHUNK = 1000; // Limit combinations processed at once

// Optimized combinations generator that yields chunks
function* combinationsInChunks(arr: Item[], k: number): Generator<Item[][]> {
  if (k < 0 || k > arr.length) return;
  if (k === 0) {
    yield [[]];
    return;
  }
  if (k === arr.length) {
    yield [arr];
    return;
  }

  let currentChunk: Item[][] = [];

  function* generateCombinations(start: number, current: Item[]): Generator<void> {
    if (current.length === k) {
      currentChunk.push([...current]);
      if (currentChunk.length >= MAX_COMBINATIONS_PER_CHUNK) {
        yield;
        currentChunk = [];
      }
      return;
    }

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      yield* generateCombinations(i + 1, current);
      current.pop();
    }
  }

  const generator = generateCombinations(0, []);
  let result = generator.next();

  while (!result.done) {
    if (currentChunk.length > 0) {
      yield currentChunk;
      currentChunk = [];
    }
    result = generator.next();
  }

  if (currentChunk.length > 0) {
    yield currentChunk;
  }
}

// Optimized permutation generator that yields chunks
function* permutationsInChunks(arr: Item[]): Generator<Item[][]> {
  const used = new Array(arr.length).fill(false);
  const current: Item[] = [];
  let currentChunk: Item[][] = [];

  function* generate(): Generator<void> {
    if (current.length === arr.length) {
      currentChunk.push([...current]);
      if (currentChunk.length >= MAX_COMBINATIONS_PER_CHUNK) {
        yield;
        currentChunk = [];
      }
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!used[i]) {
        used[i] = true;
        current.push(arr[i]);
        yield* generate();
        current.pop();
        used[i] = false;
      }
    }
  }

  const generator = generate();
  let result = generator.next();

  while (!result.done) {
    if (currentChunk.length > 0) {
      yield currentChunk;
      currentChunk = [];
    }
    result = generator.next();
  }

  if (currentChunk.length > 0) {
    yield currentChunk;
  }
}

function calculateScore(arrangement: Item[]): number {
  if (!arrangement || arrangement.length !== REQUIRED_ITEMS_FOR_LAYOUT) return 0;

  const borderLookup = new Array(arrangement.length);
  for (let i = 0; i < arrangement.length; i++) {
    borderLookup[i] = arrangement[i].colors;
  }

  return ADJACENCY.reduce((score, [posA, borderA, posB, borderB]) => {
    const colorA = borderLookup[posA][borderA];
    const colorB = borderLookup[posB][borderB];

    // Skip if either side is black
    if (colorA === 'Black' || colorB === 'Black') {
      return score;
    }

    return score + (colorA === colorB ? 1 : 0);
  }, 0);
}

// Add a new parameter to specify the forced item
async function findOptimalLayout(itemList: Item[], forcedItem?: Item): Promise<LayoutResult> {
  if (itemList.length < REQUIRED_ITEMS_FOR_LAYOUT) {
    return { message: `Need at least ${REQUIRED_ITEMS_FOR_LAYOUT} items.` };
  }

  // If we have a forced item, remove it from the item list if it exists there
  let workingItemList = [...itemList];
  if (forcedItem) {
    workingItemList = workingItemList.filter((item) => item !== forcedItem);
    if (workingItemList.length < REQUIRED_ITEMS_FOR_LAYOUT - 1) {
      return { message: `Need at least ${REQUIRED_ITEMS_FOR_LAYOUT - 1} additional items.` };
    }
  }

  let overallBestScore = -1;
  let bestArrangements: Item[][] = [];
  let permutationsChecked = 0;
  const startTime = Date.now();

  // Process combinations in chunks
  for (const combinationChunk of combinationsInChunks(
    workingItemList,
    forcedItem ? REQUIRED_ITEMS_FOR_LAYOUT - 1 : REQUIRED_ITEMS_FOR_LAYOUT
  )) {
    for (const combination of combinationChunk) {
      // If we have a forced item, add it at the beginning of each combination
      const fullCombination = forcedItem ? [forcedItem, ...combination] : combination;

      // Only permute positions 1-6 if we have a forced item
      const itemsToPermute = forcedItem ? fullCombination.slice(1) : fullCombination;

      // Process permutations in chunks
      for (const permutationChunk of permutationsInChunks(itemsToPermute)) {
        for (const permutation of permutationChunk) {
          // Reconstruct the full arrangement with the forced item
          const fullArrangement = forcedItem ? [forcedItem, ...permutation] : permutation;

          permutationsChecked++;
          const currentScore = calculateScore(fullArrangement);

          if (currentScore > overallBestScore) {
            overallBestScore = currentScore;
            bestArrangements = [[...fullArrangement]];
          } else if (currentScore === overallBestScore) {
            bestArrangements.push([...fullArrangement]);
          }

          // Report progress
          if (permutationsChecked % 1000 === 0) {
            self.postMessage({
              type: 'progress',
              message: `Checked ${permutationsChecked} permutations. Current best score: ${overallBestScore} (${bestArrangements.length} arrangements)`,
              progress: permutationsChecked
            });
          }
        }

        // Allow event loop to process and prevent blocking
        if (permutationsChecked % 5000 === 0) {
          await new Promise((resolve) => setTimeout(resolve, 0));
        }
      }
    }
  }

  const timeElapsed = (Date.now() - startTime) / 1000;

  return bestArrangements.length > 0
    ? {
        message: `Found ${bestArrangements.length} optimal layout${
          bestArrangements.length > 1 ? 's' : ''
        }! Score: ${overallBestScore}. (${permutationsChecked} permutations checked in ${timeElapsed.toFixed(1)}s)`,
        arrangements: bestArrangements,
        score: overallBestScore
      }
    : {
        message: 'Could not determine an optimal layout.'
      };
}

// Update the Web Worker implementation
self.onmessage = async function (e) {
  const { itemList, forcedItem, requestId } = e.data;

  try {
    const result = await findOptimalLayout(itemList, forcedItem);
    self.postMessage({ ...result, requestId });
  } catch (error) {
    self.postMessage({
      message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      requestId
    });
  }
};
