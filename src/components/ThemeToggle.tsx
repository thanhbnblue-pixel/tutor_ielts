'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { applyTheme, getInitialTheme, ThemeName } from '@/lib/theme';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeName>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const nextTheme: ThemeName = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  if (!mounted) {
    return <div className="w-11 h-11" />;
  }

  return (
    <button
      onClick={toggle}
      className="p-2.5 rounded-xl border flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-color)',
        color: 'var(--text-primary)',
      }}
      aria-label="Toggle Theme"
      title={theme === 'light' ? 'Chuyển sang giao diện Tối' : 'Chuyển sang giao diện Sáng'}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-slate-700" />
      ) : (
        <Sun className="w-5 h-5 text-amber-400" />
      )}
    </button>
  );
}
