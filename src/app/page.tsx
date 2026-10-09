'use client';

import React, { useState, useEffect } from 'react';
import { Bot, PenTool, Mic, BarChart2, Settings } from 'lucide-react';
import { Language } from '@/lib/i18n';
import { getActiveSlotId } from '@/lib/storage';

import WritingEditor from '@/components/WritingEditor';
import SpeakingExaminer from '@/components/SpeakingExaminer';
import StatsDashboard from '@/components/StatsDashboard';
import ProfilePage from '@/components/ProfilePage';
import DailyQuestsWidget from '@/components/DailyQuestsWidget';
import HeaderStreak from '@/components/HeaderStreak';

export default function Home() {
  const [lang, setLang] = useState<Language>('vi');
  const [activeSlot, setActiveSlot] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'writing' | 'speaking' | 'stats' | 'profile'>('writing');
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('ielts_lang') as Language;
    if (savedLang === 'vi' || savedLang === 'en') setLang(savedLang);

    const savedTab = localStorage.getItem('ielts_ai_tutor_tab') as any;
    if (savedTab && ['writing', 'speaking', 'stats', 'profile'].includes(savedTab)) {
      setActiveTab(savedTab);
    }

    const currentSlot = getActiveSlotId();
    setActiveSlot(currentSlot);
    setMounted(true);

    const handleStorageChange = (e: Event) => {
      let key = '';
      let newValue: string | null = null;
      if (e instanceof StorageEvent) {
        key = e.key || '';
        newValue = e.newValue;
      } else if (e instanceof CustomEvent) {
        key = e.detail?.key || '';
      }

      if (key === 'ielts_lang' && (newValue === 'vi' || newValue === 'en')) {
        setLang(newValue as Language);
      }
      if (key === 'ielts_active_slot') {
        const newSlot = Number(newValue) || 1;
        setActiveSlot(newSlot);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('profile_updated', handleStorageChange as any);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('profile_updated', handleStorageChange as any);
    };
  }, []);

  const handleTabChange = (tab: typeof activeTab) => {
    setActiveTab(tab);
    localStorage.setItem('ielts_ai_tutor_tab', tab);
  };

  const toggleLang = () => {
    const nextLang: Language = lang === 'vi' ? 'en' : 'vi';
    setLang(nextLang);
    localStorage.setItem('ielts_lang', nextLang);
  };

  if (!mounted) {
    return <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }} />;
  }

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-200"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-40 border-b backdrop-blur-md"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
        }}
      >
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
              <Bot className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-slate-800 dark:text-white leading-tight">
                AI Tutor 
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wider">
                Personal English Assistant
              </span>
            </div>
          </div>
          <HeaderStreak />
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 pb-24 overflow-x-hidden">
        {/* Widget Quests - Hiển thị ở tất cả các tab hoặc có thể tuỳ chỉnh tuỳ ý */}
        <DailyQuestsWidget />
        
        {activeTab === 'writing' && <WritingEditor lang={lang} slotId={activeSlot} />}
        {activeTab === 'speaking' && <SpeakingExaminer lang={lang} slotId={activeSlot} />}
        {activeTab === 'stats' && <StatsDashboard lang={lang} slotId={activeSlot} />}
        {activeTab === 'profile' && <ProfilePage lang={lang} onSlotChange={setActiveSlot} onLangToggle={toggleLang} />}
      </main>

      {/* Desktop/Tablet Sidebar / Mobile Bottom Nav replacement */}
      <div 
        className="fixed bottom-0 left-0 right-0 border-t backdrop-blur-md z-40 pb-safe"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
        }}
      >
        <div className="max-w-5xl mx-auto px-2 h-16 flex items-center justify-around">
          <button
            onClick={() => handleTabChange('writing')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
              activeTab === 'writing' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <PenTool className={`w-6 h-6 ${activeTab === 'writing' ? 'fill-blue-100 dark:fill-blue-900/30' : ''}`} />
            <span className="text-[10px] font-medium">{lang === 'vi' ? 'Viết' : 'Writing'}</span>
          </button>
          
          <button
            onClick={() => handleTabChange('speaking')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
              activeTab === 'speaking' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <Mic className={`w-6 h-6 ${activeTab === 'speaking' ? 'fill-blue-100 dark:fill-blue-900/30' : ''}`} />
            <span className="text-[10px] font-medium">{lang === 'vi' ? 'Nói' : 'Speaking'}</span>
          </button>

          <button
            onClick={() => handleTabChange('stats')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
              activeTab === 'stats' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <BarChart2 className={`w-6 h-6 ${activeTab === 'stats' ? 'fill-blue-100 dark:fill-blue-900/30' : ''}`} />
            <span className="text-[10px] font-medium">{lang === 'vi' ? 'Lỗi sai' : 'Errors'}</span>
          </button>

          <button
            onClick={() => handleTabChange('profile')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
              activeTab === 'profile' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <Settings className={`w-6 h-6 ${activeTab === 'profile' ? 'fill-blue-100 dark:fill-blue-900/30' : ''}`} />
            <span className="text-[10px] font-medium">{lang === 'vi' ? 'Cài đặt' : 'Settings'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
