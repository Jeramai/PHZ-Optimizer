import { BuffType } from '@/lib/enums';
import { Item } from '@/lib/types';
import React from 'react';
import HexagonPreview from './Preview';

interface RemoveButtonProps {
  id: string;
  onRemoveItem: (id: string) => void;
}

interface HexagonItemProps {
  item: Item;
  onRemoveItem: (id: string) => void;
  disabled: boolean;
}

interface HexagonListProps {
  items: Item[];
  onRemoveItem: (id: string) => void;
  selectedBuffTypes: Set<BuffType>;
  handleBuffTypeChange: (buffType: BuffType) => void;
}

const CONTAINER_CLASSES =
  'p-4 sm:p-5 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-900 shadow-sm';
const GRID_CLASSES = 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2';

const RemoveButton = React.memo(({ id, onRemoveItem }: RemoveButtonProps) => (
  <button
    className='absolute top-0 right-0 bg-red-400 text-white rounded-full w-[20px] h-[20px] flex justify-center items-center outline outline-white shadow-sm cursor-pointer'
    onClick={() => onRemoveItem(id)}
    aria-label='Remove item'
  >
    &times;
  </button>
));
RemoveButton.displayName = 'RemoveButton';

const HexagonItem = React.memo(({ item, onRemoveItem, disabled = false }: HexagonItemProps) => (
  <div className={`item-preview-container relative ${disabled ? 'grayscale-75' : ''}`}>
    <HexagonPreview colors={item.colors} text={item.name || item.id} />
    <RemoveButton id={item.id} onRemoveItem={onRemoveItem} />
  </div>
));
HexagonItem.displayName = 'HexagonItem';

const HexagonList = React.memo(({ items, onRemoveItem, selectedBuffTypes, handleBuffTypeChange }: HexagonListProps) => {
  const itemCount = items.length;

  return (
    <div id='item-list' className={CONTAINER_CLASSES}>
      <h2 className='text-lg sm:text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200'>Item List ({itemCount} items)</h2>
      {itemCount < 7 ? (
        <p id='list-message' className='text-sm text-gray-600 dark:text-gray-300 mb-4 min-h-[20px]'>
          Add items using the creator above. At least 7 items are needed.
        </p>
      ) : itemCount > 13 ? (
        <p id='list-message' className='text-sm text-gray-600 dark:text-gray-300 mb-4 min-h-[20px]'>
          It will take longer to find the optimal layout.
        </p>
      ) : null}

      <div className='flex flex-wrap justify-between gap-2 p-3 border border-gray-300 rounded-md bg-white dark:border-gray-700 dark:bg-gray-700 shadow-sm mb-8'>
        {Object.entries(BuffType).map((value) => (
          <label
            key={value[0]}
            className='flex items-center space-x-2 cursor-pointer hover:bg-gray-50 hover:dark:bg-gray-800 px-2 py-1 rounded'
          >
            <input
              type='checkbox'
              name={value[0]}
              checked={selectedBuffTypes.has(value[1])}
              onChange={() => handleBuffTypeChange(value[1])}
              className='w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
            />
            <span className='text-sm text-gray-700 dark:text-gray-200 select-none'>{value[1]}</span>
          </label>
        ))}
      </div>
      <div className={GRID_CLASSES}>
        {items.map((item) => (
          <HexagonItem
            key={item.id}
            item={item}
            onRemoveItem={onRemoveItem}
            disabled={selectedBuffTypes.size > 0 && !selectedBuffTypes.has(item.buffType)}
          />
        ))}
      </div>
    </div>
  );
});
HexagonList.displayName = 'HexagonList';

export default HexagonList;
