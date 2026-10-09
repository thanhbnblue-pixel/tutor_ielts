'use client';

import React, { useEffect, useState } from 'react';
import { getErrorLogs, ErrorLogEntry } from '@/lib/storage';
import { AlertTriangle, TrendingDown, BookOpen } from 'lucide-react';

export default function WeaknessDashboard({ slotId }: { slotId: number }) {
  const [logs, setLogs] = useState<ErrorLogEntry[]>([]);

  useEffect(() => {
    setLogs(getErrorLogs(slotId));
  }, [slotId]);

  // Aggregate errors
  const errors = logs.filter(l => !l.is_correct);
  const totalErrors = errors.length;

  const categoryCount = errors.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const subCategoryCount = errors.reduce((acc, curr) => {
    acc[curr.sub_category] = (acc[curr.sub_category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const sortedSubCategories = Object.entries(subCategoryCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5); // Top 5 weaknesses

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
        <TrendingDown className="text-red-500 w-6 h-6" />
        <h2 className="text-xl font-bold">Phân Tích Điểm Yếu</h2>
      </div>

      {totalErrors === 0 ? (
        <div className="text-center p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl text-slate-500">
          <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-20" />
          <p>Chưa có đủ dữ liệu. Hãy tiếp tục làm bài tập!</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(categoryCount).map(([cat, count]) => (
              <div key={cat} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="text-xs uppercase font-bold text-slate-500">{cat}</div>
                <div className="text-2xl font-black mt-1">{count} lỗi</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm">Top 5 chủ đề hay sai nhất:</h3>
            <div className="space-y-2">
              {sortedSubCategories.map(([subCat, count], idx) => (
                <div key={subCat} className="flex items-center justify-between p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-red-500">#{idx + 1}</span>
                    <span className="font-medium">{subCat}</span>
                  </div>
                  <span className="text-red-600 dark:text-red-400 font-bold">{count} lần</span>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => alert("Đang tổng hợp bài tập từ ngân hàng đề... Tính năng này sẽ sớm ra mắt!")}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl flex items-center justify-center gap-2"
          >
            <AlertTriangle className="w-5 h-5" />
            Tạo Bài Test Khắc Phục Lỗi
          </button>
        </div>
      )}
    </div>
  );
}
