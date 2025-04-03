'use client';

import HexagonCreator from '@/components/Creator';
import HexagonList from '@/components/List';
import HexagonOptimalLayout from '@/components/OptimalLayout';
import { useCallback, useEffect, useMemo, useState } from 'react';

const LOCAL_STORAGE_KEY = 'phzOptimizerItems';

interface Item {
  id: string;
  colors: string[];
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  // Load items only once on mount
  useEffect(() => {
    try {
      const storedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error('Error loading items from localStorage:', error);
    }
  }, []);

  // Memoize the storage effect
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving items to localStorage:', error);
    }
  }, [items]);

  // Memoize callback functions
  const handleAddItem = useCallback((colors: string[]) => {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: generateUniqueId(),
        colors
      }
    ]);
  }, []);

  const handleRemoveItem = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  // Memoize the generateUniqueId function
  const generateUniqueId = useMemo(
    () => () => {
      return `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;
    },
    []
  );

  return (
    <main className='bg-gray-100 font-sans p-4 md:p-8 h-screen w-screen'>
      <div className='container mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-xl max-w-6xl'>
        <h1 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800'>ToyZ Layout Optimizer</h1>
        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='flex flex-col gap-6 lg:w-1/2'>
            <HexagonCreator onAddItem={handleAddItem} />
            <HexagonList items={items} onRemoveItem={handleRemoveItem} />
          </div>
          <div className='lg:w-1/2'>
            <HexagonOptimalLayout itemList={items} />
          </div>
        </div>
      </div>
    </main>
  );
}
