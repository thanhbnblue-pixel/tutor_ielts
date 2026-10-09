'use client';

import React, { useState, useEffect } from 'react';
import { getSRSItems, saveSRSItems, getActiveSlotId } from '@/lib/storage';
import { SRSItem, getDueItems, calculateNextReview } from '@/lib/srs-engine';
import { CheckCircle2, RotateCw, XCircle, BrainCircuit, Sparkles } from 'lucide-react';

export default function FlashcardReview({ onFinish }: { onFinish: () => void }) {
  const [srsItems, setSrsItems] = useState<SRSItem[]>([]);
  const [dueItems, setDueItems] = useState<SRSItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const items = getSRSItems(getActiveSlotId());
    setSrsItems(items);
    setDueItems(getDueItems(items));
  }, []);

  const handleRate = (quality: number) => {
    const currentItem = dueItems[currentIndex];
    const updatedItem = calculateNextReview(currentItem, quality);
    
    // Update global list
    const newAll = srsItems.map(i => i.id === updatedItem.id ? updatedItem : i);
    setSrsItems(newAll);
    saveSRSItems(getActiveSlotId(), newAll);

    // If quality is < 4 (Hard or Forgot), push to end of due queue
    if (quality < 4) {
      setDueItems(prev => [...prev, updatedItem]);
    }

    // Go next
    setIsFlipped(false);
    setCurrentIndex(prev => prev + 1);
  };

  if (dueItems.length === 0) {
    return (
      <div className="max-w-md mx-auto p-8 text-center space-y-6">
        <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-12 h-12 text-emerald-500" />
        </div>
        <h2 className="text-2xl font-black">Hoàn Thành!</h2>
        <p className="text-slate-500">Bạn đã ôn tập xong tất cả từ vựng hôm nay. Trí nhớ của bạn đang được củng cố rất tốt!</p>
        <button 
          onClick={onFinish}
          className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold"
        >
          Trở về Trang Chủ
        </button>
      </div>
    );
  }

  if (currentIndex >= dueItems.length) {
    return (
      <div className="max-w-md mx-auto p-8 text-center space-y-6">
        <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-12 h-12 text-emerald-500" />
        </div>
        <h2 className="text-2xl font-black">Xong phiên ôn tập!</h2>
        <button 
          onClick={onFinish}
          className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold"
        >
          Trở về Trang Chủ
        </button>
      </div>
    );
  }

  const word = dueItems[currentIndex].id;

  return (
    <div className="max-w-md mx-auto pb-24 space-y-6 p-4">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
          <BrainCircuit className="w-6 h-6" />
          <span className="font-bold">SRS Flashcard</span>
        </div>
        <span className="font-bold text-slate-500">{currentIndex + 1} / {dueItems.length}</span>
      </div>

      <div 
        className="w-full aspect-[4/3] relative perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(true)}
      >
        <div 
          className="absolute inset-0 w-full h-full rounded-3xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex flex-col items-center justify-center p-8 text-center transition-all duration-500"
          style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
        >
          {/* Front */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center p-8 backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <h2 className="text-4xl font-black mb-2">{word}</h2>
            <p className="text-slate-400 text-sm mt-4 italic">Chạm để lật mặt sau</p>
          </div>

          {/* Back */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-blue-50 dark:bg-blue-900/20 rounded-3xl backface-hidden"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <h2 className="text-2xl font-bold mb-4">{word}</h2>
            <p className="text-slate-500">Đã lật (Để nâng cấp sau này, bạn có thể gọi API dịch từ này hoặc lấy từ curriculum)</p>
          </div>
        </div>
      </div>

      {isFlipped && (
        <div className="grid grid-cols-4 gap-2 pt-6">
          <button onClick={(e) => { e.stopPropagation(); handleRate(0); }} className="flex flex-col items-center p-3 rounded-xl bg-red-100 text-red-700 dark:bg-red-900/40">
            <XCircle className="w-6 h-6 mb-1" />
            <span className="text-xs font-bold">Quên</span>
          </button>
          <button onClick={(e) => { e.stopPropagation(); handleRate(3); }} className="flex flex-col items-center p-3 rounded-xl bg-orange-100 text-orange-700 dark:bg-orange-900/40">
            <RotateCw className="w-6 h-6 mb-1" />
            <span className="text-xs font-bold">Khó</span>
          </button>
          <button onClick={(e) => { e.stopPropagation(); handleRate(4); }} className="flex flex-col items-center p-3 rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-900/40">
            <CheckCircle2 className="w-6 h-6 mb-1" />
            <span className="text-xs font-bold">Ổn</span>
          </button>
          <button onClick={(e) => { e.stopPropagation(); handleRate(5); }} className="flex flex-col items-center p-3 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40">
            <Sparkles className="w-6 h-6 mb-1" />
            <span className="text-xs font-bold">Dễ</span>
          </button>
        </div>
      )}
    </div>
  );
}
