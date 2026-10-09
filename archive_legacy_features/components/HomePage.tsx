'use client';

import React, { useEffect, useState } from 'react';
import { getStreakData, StreakData, getLevelTitle, getNextLevelXP } from '@/lib/gamification';
import { Flame, Star, Trophy, ArrowRight, PlayCircle, Zap } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface HomePageProps {
  lang: Language;
  onNavigate: (tab: string) => void;
}

export default function HomePage({ lang, onNavigate }: HomePageProps) {
  const [streak, setStreak] = useState<StreakData | null>(null);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setStreak(getStreakData());
    const handleStorage = () => setStreak(getStreakData());
    window.addEventListener('storage', handleStorage);
    
    // Check if warning has been seen
    if (!localStorage.getItem('ielts_has_seen_warning')) {
      setShowWarning(true);
    }
    
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  if (!streak) return null;

  const handleDismissWarning = () => {
    localStorage.setItem('ielts_has_seen_warning', 'true');
    setShowWarning(false);
  };

  const nextLevelXp = getNextLevelXP(streak.level);
  const currentLevelStartXp = getNextLevelXP(streak.level - 1);
  const progressToNextLevel = Math.min(100, Math.max(0, ((streak.total_xp - currentLevelStartXp) / (nextLevelXp - currentLevelStartXp)) * 100));

  const dailyProgress = Math.min(100, Math.max(0, (streak.today_xp / streak.daily_goal) * 100));

  return (
    <div className="space-y-6 max-w-2xl mx-auto pb-24 relative">
      
      {/* Data Loss Warning Modal */}
      {showWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-amber-200 dark:border-amber-900">
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-center mb-3 text-slate-900 dark:text-white">
              Cảnh báo quan trọng!
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-center text-sm leading-relaxed mb-6">
              Ứng dụng này hoạt động độc lập và lưu trữ toàn bộ tiến trình học tập của bạn <strong>trực tiếp trên thiết bị (trình duyệt)</strong>. <br /><br />
              Vui lòng <strong>không xóa Cache hoặc Dữ liệu web</strong> của trình duyệt để tránh mất toàn bộ tiến trình học tập của bạn.
            </p>
            <button
              onClick={handleDismissWarning}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98]"
            >
              Tôi đã hiểu
            </button>
          </div>
        </div>
      )}

      {/* Welcome Banner */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <Zap className="w-32 h-32" />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-black mb-1">Chào Bạn! 👋</h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 bg-white/20 px-2.5 py-1 rounded-xl text-sm font-bold backdrop-blur-sm">
              <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
              {streak.current_streak} ngày
            </span>
            <span className="inline-flex items-center gap-1 bg-white/20 px-2.5 py-1 rounded-xl text-sm font-bold backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              Lv.{streak.level} {getLevelTitle(streak.level)}
            </span>
          </div>
        </div>
      </div>

      {/* Daily Goal */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Mục Tiêu Hôm Nay</h3>
          <span className="text-sm font-bold text-slate-500">{streak.today_xp} / {streak.daily_goal} XP</span>
        </div>
        <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
          <div 
            className="h-full bg-orange-500 transition-all duration-1000 ease-out rounded-full"
            style={{ width: `${dailyProgress}%` }}
          />
        </div>
        <p className="text-sm text-slate-500">
          {streak.today_xp >= streak.daily_goal 
            ? 'Tuyệt vời! Bạn đã hoàn thành mục tiêu hôm nay! 🎉' 
            : `Còn ${streak.daily_goal - streak.today_xp} XP nữa để đạt mục tiêu.`}
        </p>
      </div>

      {/* Continue Learning CTA */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => onNavigate('path')}
          className="bg-white dark:bg-slate-800 rounded-3xl p-1 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-all group text-left"
        >
          <div className="flex flex-col items-center gap-3 p-4">
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center flex-shrink-0">
              <PlayCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">Học Bài Mới</h4>
              <p className="text-xs text-slate-500">Tiếp tục lộ trình</p>
            </div>
          </div>
        </button>

        <button 
          onClick={() => onNavigate('flashcard')}
          className="bg-white dark:bg-slate-800 rounded-3xl p-1 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-orange-500 transition-all group text-left"
        >
          <div className="flex flex-col items-center gap-3 p-4">
            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/50 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Flame className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors">Ôn Tập Từ Vựng</h4>
              <p className="text-xs text-slate-500">Thuật toán SRS</p>
            </div>
          </div>
        </button>
      </div>

      {/* XP Level Progress */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <h3 className="font-bold text-lg">Tiến Trình Cấp Độ</h3>
        </div>
        <div className="flex justify-between text-sm font-bold mb-2">
          <span className="text-blue-600 dark:text-blue-400">Lv.{streak.level}</span>
          <span className="text-slate-500">Lv.{streak.level + 1}</span>
        </div>
        <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
          <div 
            className="h-full bg-blue-500 transition-all duration-1000 ease-out rounded-full"
            style={{ width: `${progressToNextLevel}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 text-center">
          {streak.total_xp} / {nextLevelXp} XP tổng
        </p>
      </div>
    </div>
  );
}
