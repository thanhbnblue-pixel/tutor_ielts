'use client';

import React, { useEffect, useState } from 'react';

export default function HeaderStreak() {
  const [streak, setStreak] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initial load
    const loadStreak = () => {
      const saved = localStorage.getItem('ielts_streak_data');
      if (saved) {
        try {
          const data = JSON.parse(saved);
          setStreak(data.streak || 0);
        } catch (e) {}
      }
    };
    
    loadStreak();
    setMounted(true);

    // Listen for custom event from DailyQuestsWidget
    const handleStreakUpdate = (e: any) => {
      setStreak(e.detail);
    };

    window.addEventListener('streak_updated', handleStreakUpdate);
    return () => window.removeEventListener('streak_updated', handleStreakUpdate);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-1.5 bg-orange-50 dark:bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-100 dark:border-orange-500/20">
      <span className="text-orange-500 text-sm">🔥</span>
      <span className="font-bold text-orange-600 dark:text-orange-500 text-sm">{streak}</span>
    </div>
  );
}
