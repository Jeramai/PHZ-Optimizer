import { Grade } from '@/lib/toyz';
import { ColorOption } from '@/lib/types';
import { useMemo } from 'react';

const DEFAULT_COLOR = '#000000';
const DEFAULT_SIZE = 28;

interface Point {
  x: number;
  y: number;
}

interface HexagonPreviewProps {
  colors: ColorOption[];
  size?: number;
  text?: string;
  image?: string;
  grade?: Grade;
  lineThickness?: number;
  onClick?: () => void;
}

export default function HexagonPreview({
  colors,
  size = DEFAULT_SIZE,
  text = '',
  image = '',
  grade = 'Common',
  lineThickness = 4,
  onClick = undefined
}: Readonly<HexagonPreviewProps>) {
  // Memoize vertices calculation
  const vertices: Point[] = useMemo(() => {
    // Adjust the size to account for line thickness
    const adjustedSize = size - lineThickness / 2;
    const cx: number = size;
    const cy: number = size;
    const points: Point[] = [];

    for (let i = 0; i < 6; i++) {
      const angleDeg: number = 60 * i - 150;
      const angleRad: number = (Math.PI / 180) * angleDeg;
      points.push({
        x: cx + adjustedSize * Math.cos(angleRad),
        y: cy + adjustedSize * Math.sin(angleRad)
      });
    }
    return points;
  }, [size, lineThickness]);

  const getTextConfiguration = (text: string, size: number) => {
    const fontSize = size * 0.35;
    const maxLength = 4;

    const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

    // Add title element for tooltip if text is truncated
    const titleElement = text.length > maxLength ? `<title>${text}</title>` : '';

    return `<g>
      ${titleElement}
      <text 
        x="${size}" 
        y="${size}" 
        font-size="${fontSize}px" 
        fill="#333" 
        text-anchor="middle" 
        dominant-baseline="middle"
        class="fill-gray-900 dark:fill-gray-100"
        font-weight="bold">${truncatedText}</text>
    </g>`;
  };
  const backgroundColor = useMemo(() => {
    let returnValue = 'fill-[#9ca3af]/50';

    switch (grade) {
      case 'Rare':
        returnValue = 'fill-[#16a34a]/50';
        break;
      case 'Epic':
        returnValue = 'fill-[#9333ea]/50';
        break;
      case 'Legendary':
        returnValue = 'fill-[#d97706]/50';
        break;
      case 'Mythic':
        returnValue = 'fill-[#e11d48]/50';
        break;

      default:
        break;
    }

    return returnValue;
  }, [grade]);

  // Memoize the SVG generation
  const hexagonSVG: string = useMemo(() => {
    const points: string = vertices.map((p: Point): string => `${p.x},${p.y}`).join(' ');

    const basePolygon: string = `<polygon points="${points}" class="${backgroundColor}"  stroke-width="0.5"/>`;

    // Create borders in a single iteration
    const borders: string = vertices
      .map((p1: Point, i: number): string => {
        const p2: Point = vertices[(i + 1) % 6];
        const color: ColorOption = colors[i] || DEFAULT_COLOR;
        return `<line 
          class="border-line" 
          data-border-index="${i}" 
          x1="${p1.x}" 
          y1="${p1.y}" 
          x2="${p2.x}" 
          y2="${p2.y}" 
          stroke="${color}"
          stroke-width="${lineThickness}" 
          stroke-linecap="round"
          />`;
      })
      .join('');

    const textElement: string = text ? getTextConfiguration(text, size) : '';

    const imageElement: string = image
      ? `<image 
            x="${size * 0.2}"
            y="${size * 0.2}"
            width="${size * 1.6}"
            height="${size * 1.6}"
            href="https://assets.pixelheroes.tips/images/ToyZ/${image}.webp" 
            class="z-0"
          />`
      : '';

    const groupIdAttr: string = text !== '' ? `data-item-id="${text}"` : '';

    return `<g class="hexagon-item" ${groupIdAttr}>${basePolygon}${imageElement || textElement}${borders}</g>`;
  }, [vertices, colors, size, text, image, lineThickness, backgroundColor]);

  return (
    <svg
      viewBox={`0 0 ${size * 2} ${size * 2}`}
      dangerouslySetInnerHTML={{ __html: hexagonSVG }}
      onClick={onClick}
      className={onClick ? 'cursor-pointer' : ''}
    />
  );
}
