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
}

interface HexagonListProps {
  items: Item[];
  onRemoveItem: (id: string) => void;
}

const CONTAINER_CLASSES = 'p-4 sm:p-5 border border-gray-200 rounded-lg bg-gray-50 shadow-sm';
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

const HexagonItem = React.memo(({ item, onRemoveItem }: HexagonItemProps) => (
  <div className='item-preview-container relative'>
    <HexagonPreview colors={item.colors} text={item.id} />
    <RemoveButton id={item.id} onRemoveItem={onRemoveItem} />
  </div>
));
HexagonItem.displayName = 'HexagonItem';

const HexagonList = React.memo(({ items, onRemoveItem }: HexagonListProps) => {
  const itemCount = items.length;

  return (
    <div id='item-list' className={CONTAINER_CLASSES}>
      <h2 className='text-lg sm:text-xl font-semibold mb-2 text-gray-700'>Item List ({itemCount} items)</h2>
      <p id='list-message' className='text-sm text-gray-600 mb-4 min-h-[20px]'>
        {itemCount < 7
          ? 'Add items using the creator above. At least 7 items are needed.'
          : itemCount > 13
          ? 'It will take longer to find the optimal layout.'
          : ''}
      </p>
      <div className={GRID_CLASSES}>
        {items.map((item) => (
          <HexagonItem key={item.id} item={item} onRemoveItem={onRemoveItem} />
        ))}
      </div>
    </div>
  );
});
HexagonList.displayName = 'HexagonList';

export default HexagonList;
