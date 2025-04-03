import { ADJACENCY } from '@/lib/enums';
import { Item } from '@/lib/types';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface HexagonOptimalLayoutProps {
  itemList: Array<Item>;
}

const HEX_SIZE = 25;
const LAYOUT_GRID_RADIUS = HEX_SIZE * 2.2;
const REQUIRED_ITEMS_FOR_LAYOUT = 7;

// Precalculated values
const ANGLES = Array.from({ length: 6 }).map((_, i) => ({
  deg: 60 * i - 150,
  rad: (Math.PI / 180) * (60 * i - 150)
}));
const HEX_VERTICES = ANGLES.map(({ rad }) => ({
  cos: Math.cos(rad),
  sin: Math.sin(rad)
}));
const POSITIONS = (() => {
  const centerX = 100;
  const centerY = 100;
  const positions = [{ x: centerX, y: centerY }];

  for (let i = 0; i < 6; i++) {
    const angleDeg = 60 * i - 120;
    const angleRad = (Math.PI / 180) * angleDeg;
    positions.push({
      x: centerX + LAYOUT_GRID_RADIUS * Math.cos(angleRad),
      y: centerY + LAYOUT_GRID_RADIUS * Math.sin(angleRad)
    });
  }
  return positions;
})();

const HexagonOptimalLayout = React.memo(({ itemList }: Readonly<HexagonOptimalLayoutProps>) => {
  const workerRef = useRef<Worker | null>(null);

  const [message, setMessage] = useState<string>('');
  const [svgLayout, setSvgLayout] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [currentArrangement, setCurrentArrangement] = useState<number>(0);
  const [arrangements, setArrangements] = useState<Item[][]>([]);

  // Memoized border midpoint calculation
  const memoizedCalculateBorderMidpoint = useMemo(() => {
    const cache = new Map();
    return (center: { x: number; y: number }, borderIndex: number, size: number) => {
      const key = `${center.x}-${center.y}-${borderIndex}-${size}`;
      if (cache.has(key)) return cache.get(key);

      const angleRad1 = (Math.PI / 180) * (60 * borderIndex - 150);
      const angleRad2 = (Math.PI / 180) * (60 * ((borderIndex + 1) % 6) - 150);
      const x1 = center.x + size * Math.cos(angleRad1);
      const y1 = center.y + size * Math.sin(angleRad1);
      const x2 = center.x + size * Math.cos(angleRad2);
      const y2 = center.y + size * Math.sin(angleRad2);
      const result = { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
      cache.set(key, result);
      return result;
    };
  }, []);
  const createConnectionLine = useMemo(
    () => (start: { x: number; y: number }, end: { x: number; y: number }, color: string) =>
      `<line 
        class="connection-line" 
        x1="${start.x}" 
        y1="${start.y}" 
        x2="${end.x}" 
        y2="${end.y}" 
        stroke="${color}" 
        stroke-width='4' 
        stroke-linecap="round"
        stroke-opacity="0.5">
          <animate
            attributeName="stroke-opacity"
            values="0.5;0.8;0.5"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>`,
    []
  );
  const getTextConfiguration = useMemo(
    () => (text: string, cx: number, cy: number, size: number) => {
      const fontSize = size * 0.35;
      const maxLength = 4;

      const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

      // Add title element for tooltip if text is truncated
      const titleElement = text.length > maxLength ? `<title>${text}</title>` : '';

      return `<g>
      ${titleElement}
      <text 
        x="${cx}" 
        y="${cy}" 
        font-size="${fontSize}px" 
        fill="#333" 
        text-anchor="middle" 
        dominant-baseline="middle"
        font-weight="bold">${truncatedText}</text>
    </g>`;
    },
    []
  );
  const createHexagonSVG = useMemo(() => {
    return (colors: string[], cx: number, cy: number, size: number, displayId?: string) => {
      const vertices = HEX_VERTICES.map(({ cos, sin }) => ({
        x: cx + size * cos,
        y: cy + size * sin
      }));

      const points = vertices.reduce((acc, p) => acc + p.x + ',' + p.y + ' ', '').trim();

      let svg = '<g class="hexagon-item"';
      if (displayId !== undefined) {
        svg += ' data-item-id="' + displayId + '"';
      }
      svg += '><polygon points="' + points + '" fill="#f8f8f8" stroke="#aaa" stroke-width="0.5"/>';

      // Add borders
      for (let i = 0; i < 6; i++) {
        const p1 = vertices[i];
        const p2 = vertices[(i + 1) % 6];
        const color = colors[i] || '#000000';
        svg += `<line 
          class="border-line" 
          data-border-index="${i}" 
          x1="${p1.x}" 
          y1="${p1.y}" 
          x2="${p2.x}" 
          y2="${p2.y}" 
          stroke="${color}" 
          stroke-width='4' 
          stroke-linecap="round"
        />`;
      }

      // Add text if displayId is provided
      if (displayId !== undefined) {
        svg += getTextConfiguration(displayId, cx, cy, size);
      }

      svg += '</g>';
      return svg;
    };
  }, [getTextConfiguration]);
  const drawLayout = useCallback(
    (arrangement: Array<Item>) => {
      if (!arrangement || arrangement.length !== REQUIRED_ITEMS_FOR_LAYOUT) {
        setSvgLayout('<text x="100" y="100" text-anchor="middle" fill="#9ca3af">No layout to display</text>');
        return;
      }

      // Use RequestAnimationFrame only when necessary
      const svgParts = [];

      // Add hexagons
      svgParts.push('<g id="hexagon-group">');
      arrangement.forEach((item: Item, index) => {
        if (item) {
          const pos = POSITIONS[index];
          svgParts.push(createHexagonSVG(item.colors as string[], pos.x, pos.y, HEX_SIZE, item.name || item.id));
        }
      });
      svgParts.push('</g>');

      // Add connections
      svgParts.push('<g id="connection-lines">');
      ADJACENCY.forEach(([posIndexA, borderA, posIndexB, borderB]) => {
        const itemA = arrangement[posIndexA];
        const itemB = arrangement[posIndexB];
        if (itemA?.colors[borderA] && itemB?.colors[borderB] && itemA.colors[borderA] === itemB.colors[borderB]) {
          const start = memoizedCalculateBorderMidpoint(POSITIONS[posIndexA], borderA, HEX_SIZE);
          const end = memoizedCalculateBorderMidpoint(POSITIONS[posIndexB], borderB, HEX_SIZE);
          svgParts.push(createConnectionLine(start, end, itemA.colors[borderA] as string));
        }
      });
      svgParts.push('</g>');

      setSvgLayout(svgParts.join(''));
    },
    [createConnectionLine, createHexagonSVG, memoizedCalculateBorderMidpoint]
  );

  // Store request ID in a ref to prevent unnecessary re-renders
  const currentRequestIdRef = useRef(0);

  // Separate worker initialization into its own effect
  useEffect(() => {
    const worker = new Worker(new URL('../workers/findOptimalLayout.ts', import.meta.url));

    worker.onmessage = (e) => {
      const { arrangements, message, requestId } = e.data;
      // Only process latest request
      if (requestId === currentRequestIdRef.current) {
        setArrangements(arrangements);
        setMessage(message);
        setIsLoading(false);
      }
    };

    workerRef.current = worker;

    return () => {
      worker.terminate();
    };
  }, []);

  // Separate debounced item list processing
  useEffect(() => {
    if (!workerRef.current || itemList.length === 0) return;

    const requestId = ++currentRequestIdRef.current;
    const debounceTimeout = setTimeout(() => {
      setIsLoading(true);
      setMessage('Finding the optimal layout..');

      workerRef.current?.postMessage({ itemList, requestId });
    }, 150);

    return () => clearTimeout(debounceTimeout);
  }, [itemList]);

  // Render the selected arrangement
  useEffect(() => {
    if (arrangements?.length > 0) {
      drawLayout(arrangements[currentArrangement]);
    }
  }, [currentArrangement, arrangements, drawLayout]);

  return (
    <div id='optimalLayout' className='p-4 sm:p-5 border border-gray-200 rounded-lg bg-gray-50 shadow-sm h-full flex flex-col'>
      <h2 className='text-lg sm:text-xl font-semibold mb-4 text-gray-700 text-center'>Optimal Layout</h2>

      <div className='flex flex-col items-center justify-center gap-6 flex-grow'>
        <div className='relative w-full flex justify-center items-center'>
          <svg
            id='layout-display-svg'
            className={isLoading ? 'grayscale opacity-20' : ''}
            viewBox='0 0 200 200'
            dangerouslySetInnerHTML={{ __html: svgLayout }}
          />
          {isLoading && (
            <div className='absolute inset-0 flex justify-center items-center'>
              <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
            </div>
          )}
        </div>

        {!isLoading && arrangements?.length > 1 ? (
          <div className='flex gap-3'>
            <button
              className='bg-gray-200 rounded-full text-gray-800 px-3 py-1 cursor-pointer disabled:opacity-25 disabled:cursor-default'
              disabled={currentArrangement === 0}
              onClick={() => setCurrentArrangement((ca) => ca - 1)}
            >
              PREV
            </button>
            <button
              className='bg-gray-200 rounded-full text-gray-800 px-3 py-1 cursor-pointer disabled:opacity-25 disabled:cursor-default'
              disabled={currentArrangement === arrangements.length - 1}
              onClick={() => setCurrentArrangement((ca) => ca + 1)}
            >
              NEXT
            </button>
          </div>
        ) : null}
        <div className='text-center'>
          <p
            id='layout-message'
            className={`text-sm mt-3 min-h-[40px] ${
              message.startsWith('Calculating')
                ? 'text-blue-600'
                : message.startsWith('Found')
                ? 'text-green-600'
                : message.startsWith('Need')
                ? 'text-red-600'
                : 'text-gray-600'
            }`}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
});
HexagonOptimalLayout.displayName = 'HexagonOptimalLayout';

export default HexagonOptimalLayout;
