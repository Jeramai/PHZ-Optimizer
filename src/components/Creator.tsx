import { BORDER_COLORS, BuffType, DEFAULT_COLORS } from '@/lib/enums';
import { TOYZ } from '@/lib/toyz';
import { memo, useCallback, useState } from 'react';
import HexagonPreview from './Preview';

type ColorOption = keyof typeof BORDER_COLORS;

interface HexagonCreatorProps {
  onAddItem: (name: string, image: string, buffType: BuffType, colors: ColorOption[]) => void;
}
interface SelectBorderColorProps {
  color: ColorOption;
  index: number;
  handleColorChange: (index: number, color: ColorOption) => void;
}

export default function HexagonCreator({ onAddItem }: Readonly<HexagonCreatorProps>) {
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [buffType, setBuffType] = useState<BuffType>(BuffType.BASIC);
  const [selectedColors, setSelectedColors] = useState<ColorOption[]>([...DEFAULT_COLORS]);
  const [toyZSelectModal, setToyZSelectModal] = useState<boolean>(false);

  const handleColorChange = useCallback((index: number, color: ColorOption) => {
    setSelectedColors((prev) => {
      const newColors = [...prev];
      newColors[index] = color;
      return newColors;
    });
  }, []);

  const handleAddItem = useCallback(() => {
    // Spread to create a new mutable array
    onAddItem(name, image, buffType, [...selectedColors]);

    // Reset after
    setName('');
    setImage('');
  }, [onAddItem, name, image, buffType, selectedColors]);

  return (
    <>
      <div className='p-4 sm:p-5 border border-gray-200 rounded-lg bg-gray-50 shadow-sm dark:border-gray-900 dark:bg-gray-800'>
        <h2 className='text-lg sm:text-xl font-semibold mb-5 text-gray-700 dark:text-gray-300'>Create New Item</h2>
        <div className='flex flex-col mb-5'>
          <span className='block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1'>Select ToyZ</span>
          <div className='relative w-full flex gap-3 items-center'>
            <button
              onClick={() => setToyZSelectModal(true)}
              className='px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 cursor-pointer
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            >
              Select ToyZ
            </button>
          </div>
        </div>

        <div className='flex flex-col mb-5'>
          <label htmlFor='buffType' className='block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1'>
            Buff Type
          </label>
          <div className='relative w-full'>
            <select
              id='buffType'
              value={buffType}
              onChange={(e) => setBuffType(e.target.value as BuffType)}
              className='appearance-none w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer'
            >
              {Object.values(BuffType).map((type) => (
                <option
                  key={type}
                  value={type}
                  className='text-gray-900 bg-white hover:bg-gray-100 dark:text-gray-200 dark:bg-gray-800 hover:dark:bg-gray-700'
                  style={{ color: '#1e2939' }}
                >
                  {type}
                </option>
              ))}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300'>
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

        <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-6'>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 flex-grow'>
            {selectedColors.map((color, index) => (
              <SelectBorderColor key={index} color={color} index={index} handleColorChange={handleColorChange} />
            ))}
          </div>
          <div className='flex flex-col items-center mt-4 md:mt-0 flex-shrink-0 w-full md:w-[100px]'>
            <span className='block text-sm font-medium text-gray-500 mb-2'>Preview</span>
            <div className='aspect-square h-[100px]'>
              <HexagonPreview colors={selectedColors.map((color) => BORDER_COLORS[color])} text={name || 'ToyZ'} image={image} />
            </div>
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

      <ToyZSelectModal
        show={toyZSelectModal}
        onHide={() => setToyZSelectModal(false)}
        image={image}
        setImage={setImage}
        setName={setName}
      />
    </>
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
          className='appearance-none w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 dark:text-gray-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer '
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
const ToyZSelectModal = ({
  show,
  onHide,
  image,
  setImage,
  setName
}: {
  show: boolean;
  onHide: () => void;
  image: string;
  setImage: (id: string) => void;
  setName: (id: string) => void;
}) => {
  if (!show) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center  p-5'>
      <button className='fixed w-full h-full bg-black/50' onClick={(e) => e.target === e.currentTarget && onHide()} />
      <div className='bg-white dark:bg-gray-800 px-6 py-4 rounded-lg shadow-xl w-full max-w-md max-h-full overflow-auto z-[51]'>
        <h3 className='text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4'>Select a ToyZ</h3>
        <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
          {Object.entries(TOYZ).map((toy) => {
            const toyID = toy[0];
            const toyData = toy[1];
            return (
              <button
                key={toyID}
                onClick={() => {
                  setImage(toyID);
                  setName(toyData.name);
                  onHide();
                }}
                className={`flex flex-col items-center justify-center p-2 border rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  image === toyID ? 'bg-blue-100 dark:bg-blue-700 border-blue-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                <img
                  src={`https://assets.pixelheroes.tips/images/ToyZ/${toyID}.webp`}
                  alt={toyData.name}
                  className='w-16 h-16 object-contain'
                />
                <span className='text-xs text-gray-600 dark:text-gray-300 mt-1'>{toyData.name}</span>
              </button>
            );
          })}
        </div>
        <div className='mt-6 flex justify-end'>
          <button
            onClick={onHide}
            className='px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
