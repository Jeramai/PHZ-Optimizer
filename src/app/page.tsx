'use client';

import HexagonCreator from '@/components/Creator';
import HexagonList from '@/components/List';
import HexagonOptimalLayout from '@/components/OptimalLayout';
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
    (name: string, colors: ColorOption[]) => {
      setItems((prevItems) => [
        ...prevItems,
        {
          id: generateUniqueId(),
          name: name,
          colors
        }
      ]);
    },
    [generateUniqueId]
  );

  const handleRemoveItem = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const memoizedItems = useMemo(() => items, [items]);

  return (
    <main className='bg-gray-100 font-sans p-4 md:p-8 min-h-screen'>
      <div className='container mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-xl max-w-6xl'>
        <h1 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800'>ToyZ Layout Optimizer</h1>
        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='flex flex-col gap-6 lg:w-1/2'>
            <HexagonCreator onAddItem={handleAddItem} />
            <HexagonList items={memoizedItems} onRemoveItem={handleRemoveItem} />
          </div>
          <div className='lg:w-1/2'>
            <HexagonOptimalLayout itemList={memoizedItems} />
          </div>
        </div>
      </div>
    </main>
  );
}
