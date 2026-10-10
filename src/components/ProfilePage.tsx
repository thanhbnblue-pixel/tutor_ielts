'use client';

import React, { useRef } from 'react';
import { Language } from '@/lib/i18n';
import ProfileSwitcher from './ProfileSwitcher';
import ThemeToggle from './ThemeToggle';
import { sounds } from '@/lib/sounds';
import { Volume2, VolumeX, Download, Upload } from 'lucide-react';

interface ProfilePageProps {
  lang: Language;
  onSlotChange: (id: number) => void;
  onLangToggle: () => void;
  onStartQuiz: () => void;
}

export default function ProfilePage({ lang, onSlotChange, onLangToggle, onStartQuiz }: ProfilePageProps) {
  const [soundEnabled, setSoundEnabled] = React.useState(sounds.isEnabled());
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleSound = () => {
    setSoundEnabled(sounds.toggleSound());
  };

  const handleExport = () => {
    try {
      const data: Record<string, string> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          data[key] = localStorage.getItem(key) || '';
        }
      }
      
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ielts_app_backup_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Export failed", e);
      alert("Xuất dữ liệu thất bại!");
    }
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (typeof data !== 'object' || data === null) throw new Error("Invalid format");
        
        if (confirm("Cảnh báo: Dữ liệu hiện tại sẽ bị ghi đè. Bạn có chắc chắn muốn khôi phục?")) {
          // Xóa localStorage hiện tại và ghi đè
          localStorage.clear();
          Object.keys(data).forEach(key => {
            localStorage.setItem(key, data[key]);
          });
          alert("Khôi phục dữ liệu thành công! Ứng dụng sẽ tải lại.");
          window.location.reload();
        }
      } catch (err) {
        console.error("Import failed", err);
        alert("File dữ liệu không hợp lệ hoặc bị lỗi!");
      }
    };
    reader.readAsText(file);
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-24">
      <h2 className="text-2xl font-black px-2">Hồ Sơ Của Tôi</h2>
      
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 space-y-6">
        <div>
          <h3 className="font-bold text-lg mb-4 text-slate-700 dark:text-slate-300">Tài Khoản (Offline)</h3>
          <ProfileSwitcher lang={lang} onProfileChange={onSlotChange} />
        </div>

        <div className="h-px bg-slate-100 dark:bg-slate-700 w-full" />

        <div>
          <h3 className="font-bold text-lg mb-4 text-slate-700 dark:text-slate-300">Cài Đặt</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Chế độ Sáng/Tối</span>
              <ThemeToggle />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="font-medium">Ngôn ngữ</span>
              <button 
                onClick={onLangToggle}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-xl font-bold"
              >
                {lang === 'vi' ? 'Tiếng Việt' : 'English'}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium flex items-center gap-2">
                Hiệu ứng âm thanh
              </span>
              <button 
                onClick={toggleSound}
                className={`p-2 rounded-xl transition-colors ${soundEnabled ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}
              >
                {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-100 dark:bg-slate-700 w-full" />

        <div>
          <h3 className="font-bold text-lg mb-4 text-slate-700 dark:text-slate-300">Adaptive Testing</h3>
          <p className="text-sm text-slate-500 mb-4">Take a quick test to automatically adjust your learning path based on your current level.</p>
          <button 
            onClick={onStartQuiz}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-xl font-bold hover:bg-green-200 transition-colors"
          >
            Take Level Test
          </button>
        </div>

        <div className="h-px bg-slate-100 dark:bg-slate-700 w-full" />

        <div>
          <h3 className="font-bold text-lg mb-4 text-slate-700 dark:text-slate-300">Sao lưu Dữ liệu</h3>
          <p className="text-sm text-slate-500 mb-4">Lưu lại tiến trình học tập của bạn để phòng ngừa việc xóa Cache hoặc muốn chuyển sang thiết bị khác.</p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={handleExport}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-xl font-bold hover:bg-blue-200 transition-colors"
            >
              <Download className="w-5 h-5" />
              Tải xuống Backup
            </button>
            
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-200 transition-colors"
            >
              <Upload className="w-5 h-5" />
              Khôi phục Backup
            </button>
            <input 
              type="file" 
              accept=".json"
              ref={fileInputRef}
              onChange={handleImport}
              className="hidden" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
