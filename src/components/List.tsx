import { ATTRIBUTES, BUFFS, GRADES } from '@/lib/enums';
import { Attribute, Buff, BuffType, Grade, TOYZ } from '@/lib/toyz';
import { Item } from '@/lib/types';
import React, { useState } from 'react';
import HexagonPreview from './Preview';

interface RemoveButtonProps {
  id: string;
  onRemoveItem: (id: string) => void;
}

interface HexagonItemProps {
  item: Item;
  onRemoveItem: (id: string) => void;
  disabled: boolean;
  isEditing: boolean | string;
  onClick: () => void;
}

interface HexagonListProps {
  items: Item[];
  onRemoveItem: (id: string) => void;
  selectedBuffTypes: Set<BuffType>;
  handleBuffTypeChange: (e: BuffType) => void;
  selectedGradeTypes: Set<Grade>;
  handleGradeTypeChange: (e: Grade) => void;
  selectedAttributes: Set<Attribute>;
  handleAttributeChange: (e: Attribute) => void;
  isEditing: boolean | string;
  setIsEditing: (id: string) => void;
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

const HexagonItem = React.memo(({ item, onRemoveItem, disabled, isEditing, onClick }: HexagonItemProps) => (
  <div className={`item-preview-container relative ${disabled ? 'grayscale-75' : ''}`}>
    <HexagonPreview colors={item.colors} text={item.name ?? item.id} image={item.image} grade={item.grade} onClick={onClick} />
    {isEditing === item.id ? null : <RemoveButton id={item.id} onRemoveItem={onRemoveItem} />}
  </div>
));
HexagonItem.displayName = 'HexagonItem';

const HexagonList = React.memo(
  ({
    items,
    onRemoveItem,
    selectedBuffTypes,
    handleBuffTypeChange,
    selectedGradeTypes,
    handleGradeTypeChange,
    selectedAttributes,
    handleAttributeChange,
    isEditing,
    setIsEditing
  }: HexagonListProps) => {
    const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);

    const itemCount = items.length;

    return (
      <div id='item-list' className={CONTAINER_CLASSES}>
        <h2 className='text-lg sm:text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200'>Item List ({itemCount} items)</h2>

        <p id='list-message' className='text-sm text-gray-600 dark:text-gray-300 mb-4 min-h-[20px]'>
          Add items using the creator above.{' '}
          {itemCount >= 13 ? 'Adding more items will take longer to find the optimal layout.' : null}
        </p>

        <div className='flex flex-col justify-between gap-2 p-1 border border-gray-300 rounded-md bg-white dark:border-gray-700 dark:bg-gray-700 shadow-sm mb-8'>
          <div className='flex flex-col gap-2'>
            <button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className='flex items-center justify-between w-full p-2 hover:bg-gray-50 hover:dark:bg-gray-800 rounded cursor-pointer duration-300'
            >
              <span className='font-medium'>Filters</span>
              <span
                className='transform transition-transform duration-200'
                style={{ transform: isFiltersOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                ▼
              </span>
            </button>

            {isFiltersOpen && (
              <>
                <hr />

                <div className='flex flex-wrap gap-2'>
                  {Object.entries(BUFFS).map((value) => (
                    <label
                      key={value[0]}
                      className='flex items-center space-x-2 cursor-pointer hover:bg-gray-50 hover:dark:bg-gray-800 px-2 py-1 rounded duration-300'
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

                <hr />

                <div className='flex flex-wrap gap-2'>
                  {Object.entries(ATTRIBUTES).map((value) => (
                    <label
                      key={value[0]}
                      className='flex items-center space-x-2 cursor-pointer hover:bg-gray-50 hover:dark:bg-gray-800 px-2 py-1 rounded duration-300'
                    >
                      <input
                        type='checkbox'
                        name={value[0]}
                        checked={selectedAttributes.has(value[1])}
                        onChange={() => handleAttributeChange(value[1])}
                        className='w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                      />
                      <span className='text-sm text-gray-700 dark:text-gray-200 select-none'>{value[1]}</span>
                    </label>
                  ))}
                </div>

                <hr />

                <div className='flex flex-wrap gap-2'>
                  {Object.entries(GRADES).map((value) => (
                    <label
                      key={value[0]}
                      className='flex items-center space-x-2 cursor-pointer hover:bg-gray-50 hover:dark:bg-gray-800 px-2 py-1 rounded duration-300'
                    >
                      <input
                        type='checkbox'
                        name={value[0]}
                        checked={selectedGradeTypes.has(value[1])}
                        onChange={() => handleGradeTypeChange(value[1])}
                        className='w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                      />
                      <span className='text-sm text-gray-700 dark:text-gray-200 select-none'>{value[1]}</span>
                    </label>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className={GRID_CLASSES}>
          {items.map((_item) => {
            const toyZItem = TOYZ?.[_item.image];
            const item = {
              id: _item.id,
              colors: _item.colors,
              image: _item.image,
              name: toyZItem.name,
              buffs: toyZItem.buffs,
              grade: toyZItem.grade
            };

            let isDisabled = selectedBuffTypes.size > 0 && selectedGradeTypes.size > 0 && selectedAttributes.size > 0;
            if (!isDisabled) {
              const buffFoundInItem =
                selectedBuffTypes.size > 0 && !item.buffs.some((buff: Buff) => selectedBuffTypes.has(buff.type as BuffType));
              const gradeFoundItem = selectedGradeTypes.size > 0 && !selectedGradeTypes.has(item.grade);
              const attributeFoundInItem =
                selectedAttributes.size > 0 && !item.buffs.some((buff: Buff) => selectedAttributes.has(buff.type as Attribute));

              isDisabled = buffFoundInItem || gradeFoundItem || attributeFoundInItem;
            }

            return (
              <HexagonItem
                key={item.id}
                item={item}
                onRemoveItem={onRemoveItem}
                disabled={isDisabled}
                isEditing={isEditing}
                onClick={() => setIsEditing(item.id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
);
HexagonList.displayName = 'HexagonList';

export default HexagonList;
