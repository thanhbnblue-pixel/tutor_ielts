'use client';

import React, { useEffect, useState } from 'react';
import { Home, BookOpen, PenTool, BarChart2, User } from 'lucide-react';
import { t, Language } from '@/lib/i18n';

interface BottomNavProps {
  activeTab: string;
  onChange: (tab: string) => void;
  lang: Language;
}

export default function BottomNav({ activeTab, onChange, lang }: BottomNavProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const tabs = [
    { id: 'home', icon: Home, label: 'Trang Chủ' },
    { id: 'path', icon: BookOpen, label: 'Học Tập' },
    { id: 'practice', icon: PenTool, label: 'Luyện Thi' },
    { id: 'stats', icon: BarChart2, label: 'Thống Kê' },
    { id: 'profile', icon: User, label: 'Tôi' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pb-safe">
      <div className="max-w-5xl mx-auto flex items-center justify-around h-[60px] px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className="relative flex flex-col items-center justify-center w-16 h-full min-h-[44px]"
              aria-label={tab.label}
            >
              <div
                className={`flex flex-col items-center justify-center w-full h-full rounded-2xl transition-all duration-200 ${
                  isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {isActive && (
                  <span className="absolute -top-1 w-8 h-1 bg-blue-600 dark:bg-blue-400 rounded-b-full"></span>
                )}
                <Icon className={`w-6 h-6 mb-1 transition-transform ${isActive ? 'scale-110' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-[10px] font-bold ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                  {tab.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
