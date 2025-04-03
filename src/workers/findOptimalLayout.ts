// Type definitions remain the same
type ColorName = 'Black' | 'Red' | 'Orange' | 'Blue' | 'Grey' | 'Purple';
interface Item {
  id: number;
  colors: ColorName[];
}
interface LayoutResult {
  message: string;
  arrangement?: Item[];
  score?: number;
}

const REQUIRED_ITEMS_FOR_LAYOUT = 7;
const MAX_COMBINATIONS_PER_CHUNK = 1000; // Limit combinations processed at once
const ADJACENCY = [
  [0, 0, 1, 3], // Center to Top-Right
  [0, 1, 2, 4], // Center to Right
  [0, 2, 3, 5], // Center to Bottom-Right
  [0, 3, 4, 0], // Center to Bottom-Left
  [0, 4, 5, 1], // Center to Left
  [0, 5, 6, 2], // Center to Top-Left
  [1, 2, 2, 5], // Top-Right to Right
  [2, 3, 3, 0], // Right to Bottom-Right
  [3, 4, 4, 1], // Bottom-Right to Bottom-Left
  [4, 5, 5, 2], // Bottom-Left to Left
  [5, 0, 6, 3], // Left to Top-Left
  [6, 1, 1, 4] // Top-Left to Top-Right
];

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
    return score + (borderLookup[posA][borderA] === borderLookup[posB][borderB] ? 1 : 0);
  }, 0);
}

async function findOptimalLayout(itemList: Item[]): Promise<LayoutResult> {
  if (itemList.length < REQUIRED_ITEMS_FOR_LAYOUT) {
    return { message: `Need at least ${REQUIRED_ITEMS_FOR_LAYOUT} items.` };
  }

  let overallBestScore = -1;
  let overallBestArrangement: Item[] | null = null;
  let permutationsChecked = 0;
  const startTime = Date.now();

  // Process combinations in chunks
  for (const combinationChunk of combinationsInChunks(itemList, REQUIRED_ITEMS_FOR_LAYOUT)) {
    for (const combination of combinationChunk) {
      // Process permutations in chunks
      for (const permutationChunk of permutationsInChunks(combination)) {
        for (const permutation of permutationChunk) {
          permutationsChecked++;
          const currentScore = calculateScore(permutation);

          if (currentScore > overallBestScore) {
            overallBestScore = currentScore;
            overallBestArrangement = [...permutation];

            // Report progress
            if (permutationsChecked % 1000 === 0) {
              self.postMessage({
                type: 'progress',
                message: `Checked ${permutationsChecked} permutations. Current best score: ${overallBestScore}`,
                progress: permutationsChecked
              });
            }

            // Optional: Break if perfect score found
            if (overallBestScore === ADJACENCY.length) {
              return {
                message: `Perfect layout found! Score: ${overallBestScore}. (${permutationsChecked} permutations checked)`,
                arrangement: overallBestArrangement,
                score: overallBestScore
              };
            }
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

  return overallBestArrangement
    ? {
        message: `Optimal layout found! Score: ${overallBestScore}. (${permutationsChecked} permutations checked in ${timeElapsed.toFixed(
          1
        )}s)`,
        arrangement: overallBestArrangement,
        score: overallBestScore
      }
    : {
        message: 'Could not determine an optimal layout.'
      };
}

// Web Worker implementation
self.onmessage = async function (e) {
  const { itemList, requestId } = e.data;

  try {
    const result = await findOptimalLayout(itemList);
    self.postMessage({ ...result, requestId });
  } catch (error) {
    self.postMessage({
      message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      requestId
    });
  }
};
