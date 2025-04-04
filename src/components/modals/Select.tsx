import { TOYZ, ToyZData } from '@/lib/toyz';
import Image from 'next/image';
import { memo, useCallback } from 'react';

interface ToyZSelectModalProps {
  show: boolean;
  onHide: () => void;
  image: string;
  setImage: (id: string) => void;
  setName: (id: string) => void;
}
interface ToyButtonProps {
  toyID: string;
  toyData: ToyZData;
  isSelected: boolean;
  onSelect: (id: string, name: string) => void;
}

const ToyButton = memo(({ toyID, toyData, isSelected, onSelect }: ToyButtonProps) => (
  <button
    onClick={() => onSelect(toyID, toyData.name)}
    className={`flex flex-col items-center justify-center p-2 border rounded-md cursor-pointer duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
      isSelected ? 'bg-blue-100 dark:bg-blue-700 border-blue-500' : 'border-gray-300 dark:border-gray-600'
    }`}
  >
    <Image
      src={`https://assets.pixelheroes.tips/images/ToyZ/${toyID}.webp`}
      alt={toyData.name}
      className='object-contain'
      loading='lazy'
      width={64}
      height={64}
    />
    <span className='text-xs text-gray-600 dark:text-gray-300 mt-1'>{toyData.name}</span>
  </button>
));

ToyButton.displayName = 'ToyButton';

const ToyZSelectModal = ({ show, onHide, image, setImage, setName }: ToyZSelectModalProps) => {
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onHide();
    },
    [onHide]
  );

  const handleToySelect = useCallback(
    (id: string, name: string) => {
      setImage(id);
      setName(name);
      onHide();
    },
    [setImage, setName, onHide]
  );

  if (!show) return null;
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-5'>
      <button className='fixed w-full h-full bg-black/50' onClick={handleBackdropClick} />

      <div className='relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh] z-[51]'>
        {/* Fixed Header */}
        <div className='flex justify-between px-6 py-4 border-b dark:border-gray-700'>
          <h3 className='text-lg font-semibold text-gray-700 dark:text-gray-200'>Select a ToyZ</h3>
          <button
            onClick={onHide}
            className='cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            aria-label='Close modal'
          >
            <svg
              className='w-5 h-5'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className='flex-1 overflow-auto px-6 my-3'>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4'>
            {Object.entries(TOYZ).map(([toyID, toyData]) => (
              <ToyButton key={toyID} toyID={toyID} toyData={toyData} isSelected={image === toyID} onSelect={handleToySelect} />
            ))}
          </div>
        </div>

        {/* Fixed Footer */}
        <div className='px-6 py-4 border-t dark:border-gray-700'>
          <div className='flex justify-end'>
            <button
              onClick={onHide}
              className='px-4 py-2 text-sm font-medium cursor-pointer text-gray-700 bg-gray-200 
                dark:bg-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ToyZSelectModal);
