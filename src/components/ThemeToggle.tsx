'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled on initial load
    if (document.body.classList.contains('dark')) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.classList.remove('dark');
      setDarkMode(false);
    } else {
      document.body.classList.add('dark');
      setDarkMode(true);
    }
  };

  return (
    <button onClick={toggleDarkMode} className='p-2 rounded-full bg-gray-100 dark:bg-gray-800 cursor-pointer'>
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
}
