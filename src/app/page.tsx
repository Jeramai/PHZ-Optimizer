'use client';

import HexagonCreator from '@/components/Creator';
import HexagonList from '@/components/List';
import HexagonOptimalLayout from '@/components/OptimalLayout';
import ThemeToggle from '@/components/ThemeToggle';
import { BuffType } from '@/lib/enums';
import { ColorOption, Item } from '@/lib/types';
import { debounce } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';

const LOCAL_STORAGE_KEY = 'phzOptimizerItems';

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  const generateUniqueId = useCallback(() => {
    return crypto.randomUUID();
  }, []);

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
    (name: string, buffType: BuffType, colors: ColorOption[]) => {
      setItems((prevItems) => [
        ...prevItems,
        {
          id: generateUniqueId(),
          name: name,
          buffType,
          colors
        }
      ]);
    },
    [generateUniqueId]
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
  const memoizedItems = useMemo(() => items, [items]);
  const memoizedItemsFiltered = useMemo(() => {
    const filteredItems = items.filter((item) => {
      // If no buff types are selected, include all items
      if (selectedBuffTypes.size === 0) return true;
      return selectedBuffTypes.has(item.buffType);
    });

    // If we have less than 7 items, add empty placeholder items
    if (filteredItems.length < 7) {
      const emptyItems = Array(7 - filteredItems.length)
        .fill(null)
        .map(
          (_, index) =>
            ({
              id: `empty-${index}`,
              name: ` `,
              buffType: BuffType.BASIC,
              colors: ['Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black']
            } as Item)
        );
      return [...filteredItems, ...emptyItems];
    }

    return filteredItems;
  }, [items, selectedBuffTypes]);

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
              <HexagonCreator onAddItem={handleAddItem} />
              <HexagonList
                items={memoizedItems}
                onRemoveItem={handleRemoveItem}
                selectedBuffTypes={selectedBuffTypes}
                handleBuffTypeChange={handleBuffTypeChange}
              />
            </div>
            <div className='lg:w-1/2'>
              <HexagonOptimalLayout itemList={memoizedItemsFiltered} hasItems={!!items.length} />
            </div>
          </div>
        </div>
      </main>
      <footer className='mb-1 text-[8pt] flex justify-center gap-3'>
        <span>
          <span>Made with {'🍕'} by </span>
          <a href='https://jeramai.github.io' target='_blank'>
            Jeram.ai
          </a>
        </span>
        <span>|</span>
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
