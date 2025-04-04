'use client';

import HexagonCreator from '@/components/Creator';
import HexagonList from '@/components/List';
import HexagonOptimalLayout from '@/components/OptimalLayout';
import ThemeToggle from '@/components/ThemeToggle';
import { Attribute, Buff, BuffType, Grade, TOYZ } from '@/lib/toyz';
import { ColorOption, Item } from '@/lib/types';
import { debounce } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';

const LOCAL_STORAGE_KEY = 'phzOptimizerItems';

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  const [isEditing, setIsEditing] = useState<boolean | string>(false);
  const selectedItem = items.find((item) => item.id === isEditing) || undefined;

  const generateUniqueId = useCallback(() => crypto.randomUUID(), []);

  // Create the save function outside of debounce
  const saveToStorage = useCallback((items: Item[]) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving items to localStorage:', error);
    }
  }, []);

  // Create the debounced version using useMemo
  const debouncedSaveToStorage = useMemo(() => debounce(saveToStorage, 1000), [saveToStorage]);
  useEffect(() => {
    try {
      const storedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedItems) {
        const parsedItems = JSON.parse(storedItems);
        if (
          Array.isArray(parsedItems) &&
          parsedItems.every((item) => typeof item === 'object' && 'id' in item && 'colors' in item && Array.isArray(item.colors))
        ) {
          setItems(parsedItems);
        }
      }
    } catch (error) {
      console.error('Error loading items from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    debouncedSaveToStorage(items);
    return () => {
      debouncedSaveToStorage.flush();
    };
  }, [items, debouncedSaveToStorage]);

  const handleAddItem = useCallback(
    (image: string, colors: ColorOption[]) => {
      //  Update the item
      if (isEditing) {
        setItems((prevItems) => {
          const itemIndex = prevItems.findIndex((item) => item.id === isEditing);
          if (itemIndex === -1) return prevItems;

          const updatedItems = [...prevItems];
          updatedItems[itemIndex] = {
            ...prevItems[itemIndex],
            image,
            colors
          };

          return updatedItems;
        });
        setIsEditing(false);
      }
      // Add the item
      else {
        setItems((prevItems) => [
          ...prevItems,
          {
            id: generateUniqueId(),
            image,
            colors
          }
        ]);
      }
    },
    [isEditing, generateUniqueId]
  );
  const handleRemoveItem = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const [selectedBuffTypes, setSelectedBuffTypes] = useState<Set<BuffType>>(new Set());
  const handleBuffTypeChange = (buffType: BuffType) => {
    setSelectedBuffTypes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(buffType)) {
        newSet.delete(buffType);
      } else {
        newSet.add(buffType);
      }
      return newSet;
    });
  };
  const [selectedGradeTypes, setSelectedGradeTypes] = useState<Set<Grade>>(new Set());
  const handleGradeTypeChange = (gradeType: Grade) => {
    setSelectedGradeTypes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(gradeType)) {
        newSet.delete(gradeType);
      } else {
        newSet.add(gradeType);
      }
      return newSet;
    });
  };
  const [selectedAttributes, setSelectedAttributes] = useState<Set<Attribute>>(new Set());
  const handleAttributeChange = (attribute: Attribute) => {
    setSelectedAttributes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(attribute)) {
        newSet.delete(attribute);
      } else {
        newSet.add(attribute);
      }
      return newSet;
    });
  };

  const memoizedItems = useMemo(() => items, [items]);
  const memoizedItemsFiltered = useMemo(() => {
    const filteredItems = items.filter((_item) => {
      // If no buff types are selected, include all items
      if (selectedBuffTypes.size === 0 && selectedGradeTypes.size === 0 && selectedAttributes.size === 0) return true;

      // See if any item.buffs.type is found in the selectedBuffTypes
      const item = TOYZ[_item.image];

      let isDisabled = selectedBuffTypes.size > 0 && selectedGradeTypes.size > 0 && selectedAttributes.size > 0;
      if (!isDisabled) {
        const buffFoundInItem =
          selectedBuffTypes.size > 0 && !item.buffs.some((buff: Buff) => selectedBuffTypes.has(buff.type as BuffType));
        const gradeFoundItem = selectedGradeTypes.size > 0 && !selectedGradeTypes.has(item.grade);
        const attributeFoundInItem =
          selectedAttributes.size > 0 && !item.buffs.some((buff: Buff) => selectedAttributes.has(buff.type as Attribute));

        isDisabled = buffFoundInItem || gradeFoundItem || attributeFoundInItem;
      }

      return !isDisabled;
    });

    // If we have less than 7 items, add empty placeholder items
    if (filteredItems.length < 7) {
      const emptyItems = Array(7 - filteredItems.length)
        .fill(null)
        .map(
          (_, index) =>
            ({
              id: `empty-${index}`,
              image: '',
              name: ` `,
              buffType: 'Basic',
              colors: ['Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black']
            } as Item)
        );
      return [...filteredItems, ...emptyItems];
    }

    return filteredItems;
  }, [items, selectedBuffTypes, selectedGradeTypes, selectedAttributes]);

  const handleCopy = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans min-h-screen'>
      <main className='p-4 md:p-8'>
        <div className='container mx-auto bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-xl max-w-6xl'>
          <div className='relative'>
            <h1 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center'>ToyZ Layout Optimizer</h1>
            <div className='absolute top-0 right-0'>
              <ThemeToggle />
            </div>
          </div>
          <div className='flex flex-col lg:flex-row gap-6'>
            <div className='flex flex-col gap-6 lg:w-1/2'>
              <HexagonCreator onAddItem={handleAddItem} selectedItem={selectedItem} setIsEditing={setIsEditing} />
              <HexagonList
                items={memoizedItems}
                onRemoveItem={handleRemoveItem}
                selectedBuffTypes={selectedBuffTypes}
                handleBuffTypeChange={handleBuffTypeChange}
                selectedGradeTypes={selectedGradeTypes}
                handleGradeTypeChange={handleGradeTypeChange}
                selectedAttributes={selectedAttributes}
                handleAttributeChange={handleAttributeChange}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
              />
            </div>
            <div className='lg:w-1/2'>
              <HexagonOptimalLayout itemList={memoizedItemsFiltered} hasItems={!!items.length} forcedItem={selectedItem} />
            </div>
          </div>
        </div>
      </main>
      <footer className='mb-1 text-[8pt] flex flex-col-reverse md:flex-row justify-center items-center gap-1 md:gap-3'>
        <span>
          <span>Made with {'🍕'} by </span>
          <a href='https://jeramai.github.io' target='_blank'>
            Jeram.ai
          </a>
        </span>
        <span className='hidden md:block'>|</span>
        <span>
          <span>{`Donations: `}</span>
          <button onClick={() => handleCopy('0xB6506425609473dFc00eb1C4085850582438f0D0')} className='cursor-pointer'>
            <code className='text-green-700 dark:text-green-600'>0xB6506425609473dFc00eb1C4085850582438f0D0</code>
          </button>
        </span>
      </footer>
    </div>
  );
}
