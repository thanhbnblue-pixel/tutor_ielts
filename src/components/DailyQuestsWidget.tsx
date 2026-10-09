'use client';

import React from 'react';
import { useDailyQuests } from '@/hooks/useDailyQuests';
import { CheckCircle2, Circle, ExternalLink } from 'lucide-react';

export default function DailyQuestsWidget() {
  const { streak, tasks, completedTaskIds, toggleTask, mounted } = useDailyQuests();

  if (!mounted) return null;

  const progress = tasks.length > 0 ? Math.round((completedTaskIds.length / tasks.length) * 100) : 0;
  const isAllDone = progress === 100;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
            Nhiệm vụ hôm nay
            {isAllDone && <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Hoàn thành!</span>}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Tiến độ: {progress}%</p>
        </div>
        <div className="w-12 h-12 relative flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-slate-100 dark:text-slate-700"
              strokeWidth="3"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-blue-600 transition-all duration-500 ease-out"
              strokeDasharray={`${progress}, 100`}
              strokeWidth="3"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">🔥 {streak}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mt-4">
        {tasks.length > 0 ? (
          tasks.map(task => {
            const isCompleted = completedTaskIds.includes(task.id);
            return (
              <button
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`w-full flex items-start gap-3 p-3 rounded-xl border transition-all text-left ${
                  isCompleted
                    ? 'bg-blue-50/50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800/50'
                    : 'bg-white border-slate-100 hover:border-slate-300 dark:bg-slate-800 dark:border-slate-700 dark:hover:border-slate-600'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600 shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <span
                    className={`block text-sm font-medium ${
                      isCompleted
                        ? 'text-slate-500 line-through dark:text-slate-400'
                        : 'text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {task.title}
                  </span>
                  {task.description && (
                    <span className={`block text-xs mt-0.5 leading-relaxed ${isCompleted ? 'text-slate-400 dark:text-slate-500' : 'text-slate-500 dark:text-slate-400'}`}>
                      {task.description}
                    </span>
                  )}
                </div>
                {task.link && (
                  <a 
                    href={task.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => e.stopPropagation()} 
                    className="p-2 -mr-2 -mt-1 text-slate-400 hover:text-blue-500 transition-colors shrink-0"
                    title="Mở tài liệu học"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </button>
            );
          })
        ) : (
          <p className="text-sm text-slate-500 text-center py-2">Hôm nay không có nhiệm vụ nào!</p>
        )}
      </div>
    </div>
  );
}
