import { memo, useCallback, useState } from 'react';
import HexagonPreview from './Preview';

interface BorderColors {
  [key: string]: string;
}

const BORDER_COLORS: BorderColors = {
  Black: '#000000',
  Red: '#FF0000',
  Orange: '#FFA500',
  Blue: '#0000FF',
  Grey: '#808080',
  Purple: '#800080'
} as const;

const DEFAULT_COLORS = ['Red', 'Orange', 'Blue', 'Grey', 'Purple', 'Black'] as const;

type ColorOption = keyof typeof BORDER_COLORS;

interface HexagonCreatorProps {
  onAddItem: (colors: ColorOption[]) => void;
}

interface SelectBorderColorProps {
  color: ColorOption;
  index: number;
  handleColorChange: (index: number, color: ColorOption) => void;
}

export default function HexagonCreator({ onAddItem }: Readonly<HexagonCreatorProps>) {
  const [selectedColors, setSelectedColors] = useState<ColorOption[]>(DEFAULT_COLORS);

  const handleColorChange = useCallback((index: number, color: ColorOption) => {
    setSelectedColors((prev) => {
      const newColors = [...prev];
      newColors[index] = color;
      return newColors;
    });
  }, []);

  const handleAddItem = useCallback(() => {
    onAddItem(selectedColors);
  }, [onAddItem, selectedColors]);

  return (
    <div className='p-4 sm:p-5 border border-gray-200 rounded-lg bg-gray-50 shadow-sm'>
      <h2 className='text-lg sm:text-xl font-semibold mb-5 text-gray-700'>Create New Item</h2>
      <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-6'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 flex-grow'>
          {selectedColors.map((color, index) => (
            <SelectBorderColor key={index} color={color} index={index} handleColorChange={handleColorChange} />
          ))}
        </div>
        <div className='flex flex-col items-center mt-4 md:mt-0 flex-shrink-0'>
          <span className='block text-sm font-medium text-gray-500 mb-2'>Preview</span>
          <HexagonPreview colors={selectedColors.map((color) => BORDER_COLORS[color])} text='Name' />
        </div>
      </div>
      <div className='text-center mt-6'>
        <button
          onClick={handleAddItem}
          className='bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer'
        >
          Add Item to List
        </button>
      </div>
    </div>
  );
}

const SelectBorderColor = memo(function SelectBorderColor({ color, index, handleColorChange }: SelectBorderColorProps) {
  return (
    <div className='flex flex-col items-center'>
      <label htmlFor={`color-select-${index}`} className='block text-xs font-medium text-gray-500 mb-1'>
        Border {index + 1}
      </label>
      <div className='relative w-full'>
        <select
          id={`color-select-${index}`}
          value={color}
          onChange={(e) => handleColorChange(index, e.target.value as ColorOption)}
          className='appearance-none w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer '
          style={{
            backgroundColor: BORDER_COLORS[color] + '20', // Adding 20% opacity
            borderColor: BORDER_COLORS[color]
          }}
        >
          {Object.entries(BORDER_COLORS).map(([name, hex]) => (
            <option
              key={name}
              value={name}
              className='text-gray-900 bg-white hover:bg-gray-100'
              style={{
                backgroundColor: 'white',
                color: hex
              }}
            >
              {name}
            </option>
          ))}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
          <svg className='h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
    </div>
  );
});
