'use client';

import React from 'react';
import { PenTool, Mic, BookOpen, Headphones } from 'lucide-react';
import { Language } from '@/lib/i18n';
import WeaknessDashboard from './WeaknessDashboard';

interface PracticeHubProps {
  lang: Language;
  onSelect: (type: 'writing' | 'speaking' | 'reading' | 'listening') => void;
  slotId: number;
}

export default function PracticeHub({ lang, onSelect, slotId }: PracticeHubProps) {
  const options = [
    { id: 'writing' as const, icon: PenTool, title: 'Writing', desc: 'Chấm điểm AI', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30' },
    { id: 'speaking' as const, icon: Mic, title: 'Speaking', desc: 'Luyện phản xạ', color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30' },
    { id: 'reading' as const, icon: BookOpen, title: 'Reading', desc: 'Đọc hiểu', color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30' },
    { id: 'listening' as const, icon: Headphones, title: 'Listening', desc: 'Nghe hiểu', color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30' },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-24">
      <h2 className="text-2xl font-black px-2">Khu Vực Luyện Thi</h2>
      <div className="grid grid-cols-2 gap-4">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-all text-center gap-3 active:scale-95"
            style={{ borderBottomWidth: '4px' }}
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${opt.color}`}>
              <opt.icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{opt.title}</h3>
              <p className="text-xs text-slate-500">{opt.desc}</p>
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-8 border border-slate-200 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900 overflow-hidden">
        <WeaknessDashboard slotId={slotId} />
      </div>
    </div>
  );
}
