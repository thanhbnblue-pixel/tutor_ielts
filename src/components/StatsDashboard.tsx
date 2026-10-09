'use client';

import React, { useEffect, useState } from 'react';
import { Language } from '@/lib/i18n';
import HistoryView from './HistoryView';
import { getErrorLogs, ErrorLogEntry } from '@/lib/storage';

interface StatsDashboardProps {
  lang: Language;
  slotId: number;
}

export default function StatsDashboard({ lang, slotId }: StatsDashboardProps) {
  const [stats, setStats] = useState({
    grammar: 50,
    vocab: 50,
    reading: 50,
    listening: 50,
    writing: 50,
    speaking: 50
  });

  useEffect(() => {
    const logs = getErrorLogs(slotId);
    if (logs.length === 0) return;

    const calc = (cat: string) => {
      const catLogs = logs.filter(l => l.category === cat);
      if (catLogs.length === 0) return 50; // Default baseline
      const correct = catLogs.filter(l => l.is_correct).length;
      return Math.round((correct / catLogs.length) * 100);
    };

    setStats({
      grammar: calc('grammar'),
      vocab: calc('vocab'),
      reading: calc('reading'),
      listening: calc('listening'),
      writing: calc('writing'), // AI grades can be normalized, but here it's binary if we logged them, or default
      speaking: calc('speaking')
    });
  }, [slotId]);

  // SVG Radar Chart math
  const categories = [
    { key: 'vocab', label: lang === 'vi' ? 'Từ vựng' : 'Vocabulary' },
    { key: 'grammar', label: lang === 'vi' ? 'Ngữ pháp' : 'Grammar' },
    { key: 'reading', label: lang === 'vi' ? 'Đọc' : 'Reading' },
    { key: 'writing', label: lang === 'vi' ? 'Viết' : 'Writing' },
    { key: 'speaking', label: lang === 'vi' ? 'Nói' : 'Speaking' },
    { key: 'listening', label: lang === 'vi' ? 'Nghe' : 'Listening' }
  ];

  const size = 300;
  const center = size / 2;
  const radius = (size - 60) / 2;

  const getPoint = (value: number, index: number, total: number) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const distance = (value / 100) * radius;
    return {
      x: center + distance * Math.cos(angle),
      y: center + distance * Math.sin(angle)
    };
  };

  const polygonPoints = categories.map((cat, i) => {
    const pt = getPoint(stats[cat.key as keyof typeof stats], i, categories.length);
    return `${pt.x},${pt.y}`;
  }).join(' ');

  const gridPolygons = [20, 40, 60, 80, 100].map(level => {
    return categories.map((_, i) => {
      const pt = getPoint(level, i, categories.length);
      return `${pt.x},${pt.y}`;
    }).join(' ');
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-24">
      <h2 className="text-2xl font-black px-2">{lang === 'vi' ? 'Thống Kê Học Tập' : 'Learning Stats'}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
        {/* Radar Chart */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center">
          <h3 className="font-bold text-lg mb-6 w-full text-left">{lang === 'vi' ? 'Phân tích Kỹ năng' : 'Skills Analysis'}</h3>
          <div className="relative" style={{ width: size, height: size }}>
            <svg width={size} height={size}>
              {/* Grid */}
              {gridPolygons.map((points, i) => (
                <polygon key={i} points={points} fill="none" stroke="currentColor" className="text-slate-200 dark:text-slate-700" strokeWidth="1" />
              ))}
              {/* Axes */}
              {categories.map((_, i) => {
                const pt = getPoint(100, i, categories.length);
                return <line key={i} x1={center} y1={center} x2={pt.x} y2={pt.y} stroke="currentColor" className="text-slate-200 dark:text-slate-700" strokeWidth="1" />;
              })}
              {/* Data Polygon */}
              <polygon points={polygonPoints} fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" className="transition-all duration-500" />
              {/* Data Points */}
              {categories.map((cat, i) => {
                const pt = getPoint(stats[cat.key as keyof typeof stats], i, categories.length);
                return <circle key={i} cx={pt.x} cy={pt.y} r="4" fill="#3b82f6" />;
              })}
              {/* Labels */}
              {categories.map((cat, i) => {
                const pt = getPoint(120, i, categories.length); // slightly outside
                return (
                  <text key={i} x={pt.x} y={pt.y} textAnchor="middle" dominantBaseline="middle" className="text-xs font-medium fill-slate-600 dark:fill-slate-300">
                    {cat.label} ({stats[cat.key as keyof typeof stats]}%)
                  </text>
                );
              })}
            </svg>
          </div>
          <p className="text-sm text-slate-500 text-center mt-4">
            {lang === 'vi' ? 'Biểu đồ thể hiện tỷ lệ phần trăm độ chính xác của bạn trong từng kỹ năng.' : 'Chart shows your accuracy percentage across skills.'}
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <h3 className="font-bold text-lg mb-4">{lang === 'vi' ? 'Tổng quan' : 'Overview'}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-2xl">
                <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
                  {Math.round(Object.values(stats).reduce((a, b) => a + b, 0) / 6)}%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{lang === 'vi' ? 'Độ chính xác trung bình' : 'Avg Accuracy'}</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-2xl">
                <div className="text-2xl font-black text-green-600 dark:text-green-400">
                  {getErrorLogs(slotId).length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{lang === 'vi' ? 'Câu hỏi đã làm' : 'Questions Answered'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="font-bold text-lg mb-4 px-2">{lang === 'vi' ? 'Lịch Sử Làm Bài' : 'Activity History'}</h3>
        <HistoryView lang={lang} slotId={slotId} />
      </div>
    </div>
  );
}
