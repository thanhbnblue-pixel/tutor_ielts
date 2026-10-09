'use client';

import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import {
  CheckSquare,
  Award,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Compass,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
} from 'lucide-react';
import { Language, t } from '@/lib/i18n';
import { getProfiles, saveProfiles, formatBandScore } from '@/lib/storage';


import { Question, PLACEMENT_IELTS, PLACEMENT_TOEIC, PLACEMENT_VSTEP, PLACEMENT_GENERAL } from '@/lib/curriculum/placement';

interface PlacementTestProps {
  lang: Language;
  slotId: number;
  onFinish?: (band: number) => void;
}

export default function PlacementTest({ lang, slotId, onFinish }: PlacementTestProps) {
  const [step, setStep] = useState<'goal_setting' | 'test'>('goal_setting');
  const [targetExam, setTargetExam] = useState<string>('');
  
  const [currentIdx, setCurrentIdx] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`placement_idx_${slotId}`);
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });
  
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`placement_answers_${slotId}`);
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });
  
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false);

  const TIME_LIMIT = 10 * 60;
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`placement_time_${slotId}`);
      return saved ? parseInt(saved, 10) : TIME_LIMIT;
    }
    return TIME_LIMIT;
  });

  const currentQuestions = 
    targetExam === 'ielts' ? PLACEMENT_IELTS :
    targetExam === 'toeic' ? PLACEMENT_TOEIC :
    targetExam === 'vstep' ? PLACEMENT_VSTEP :
    targetExam === 'general' ? PLACEMENT_GENERAL :
    PLACEMENT_IELTS;

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Save state on change
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`placement_idx_${slotId}`, currentIdx.toString());
      localStorage.setItem(`placement_answers_${slotId}`, JSON.stringify(selectedAnswers));
      localStorage.setItem(`placement_time_${slotId}`, timeLeft.toString());
    }
  }, [currentIdx, selectedAnswers, timeLeft, slotId]);

  // Clear state on complete
  React.useEffect(() => {
    if (isCompleted && typeof window !== 'undefined') {
      localStorage.removeItem(`placement_idx_${slotId}`);
      localStorage.removeItem(`placement_answers_${slotId}`);
      localStorage.removeItem(`placement_time_${slotId}`);
    }
  }, [isCompleted, slotId]);

  React.useEffect(() => {
    if (step !== 'test' || isCompleted || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearInterval(timer);
  }, [step, timeLeft, isCompleted]);

  React.useEffect(() => {
    if (!isCompleted && timeLeft <= 0) {
      calculateResult();
    }
  }); // run after render, calculateResult will have latest state

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = currentQuestions[currentIdx];
  const totalQuestions = currentQuestions.length;

  const handleSelectAnswer = (optionIdx: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIdx,
    }));
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    let correctCount = 0;
    currentQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    setIsCompleted(true);

    // Estimate band from score
    let estimatedBand = 3.0;
    let cefrLevel = 'A1';
    if (correctCount >= 26) { estimatedBand = 7.0; cefrLevel = 'C1'; }
    else if (correctCount >= 22) { estimatedBand = 6.0; cefrLevel = 'B2'; }
    else if (correctCount >= 16) { estimatedBand = 5.0; cefrLevel = 'B1'; }
    else if (correctCount >= 10) { estimatedBand = 4.0; cefrLevel = 'A2'; }
    else if (correctCount >= 5) { estimatedBand = 3.5; cefrLevel = 'A2'; }
    else { estimatedBand = 2.5; cefrLevel = 'A1'; }

    // Persist target/current band into profiles
    const profiles = getProfiles();
    const updated = profiles.map((p) =>
      p.slot_id === slotId ? { 
        ...p, 
        target_band_raw: 65, 
        target_exam: targetExam as any,
        current_level: cefrLevel as any
      } : p
    );
    saveProfiles(updated);

    // Removed automatic onFinish trigger. User must click "Vào Lộ Trình Học Ngay"
  };

  const resetTest = () => {
    setCurrentIdx(0);
    setSelectedAnswers({});
    setIsCompleted(false);
    setShowReview(false);
    setTimeLeft(TIME_LIMIT);
  };

  // Compute metrics if completed
  let correctCount = 0;
  if (isCompleted) {
    currentQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) correctCount++;
    });
  }

  let bandScore = 3.0;
  let cefrLevelDisplay = 'A1';
  let stageTitle = 'Chặng 1: Xây Nền (Foundation)';
  let stageDesc = 'Tập trung phát âm chuẩn, từ vựng cốt lõi và ngữ pháp cơ bản.';
  let stageColor = 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20';

  if (correctCount >= 26) {
    bandScore = 7.0;
    cefrLevelDisplay = 'C1';
    stageTitle = 'Chặng 4: Tối Ưu Nâng Cao (Mastery)';
    stageDesc = 'Xử lý bẫy khó, từ vựng học thuật C1 và cấu trúc phức tạp.';
    stageColor = 'border-amber-500 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20';
  } else if (correctCount >= 22) {
    bandScore = 6.0;
    cefrLevelDisplay = 'B2';
    stageTitle = 'Chặng 3: Bứt Phá (Upper Intermediate)';
    stageDesc = 'Tập trung tư duy phản biện, phản xạ giao tiếp tự nhiên và kỹ thuật Paraphrasing.';
    stageColor = 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20';
  } else if (correctCount >= 16) {
    bandScore = 5.0;
    cefrLevelDisplay = 'B1';
    stageTitle = 'Chặng 2: Nâng Cao (Intermediate)';
    stageDesc = 'Làm quen dạng đề thật, kỹ năng đọc hiểu nhanh và nghe hội thoại.';
    stageColor = 'border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/20';
  } else if (correctCount >= 10) {
    bandScore = 4.0;
    cefrLevelDisplay = 'A2';
  } else if (correctCount >= 5) {
    bandScore = 3.5;
    cefrLevelDisplay = 'A2';
  }

  if (step === 'goal_setting') {
    return (
      <div className="max-w-xl mx-auto space-y-6 p-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-blue-600">Mục tiêu của bạn là gì?</h2>
          <p className="text-slate-500">Chọn chứng chỉ bạn muốn chinh phục, chúng tôi sẽ xây dựng lộ trình riêng cho bạn.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { id: 'ielts', title: 'IELTS', desc: 'Du học, định cư, xét tuyển Đại học', icon: '🎓' },
            { id: 'toeic', title: 'TOEIC', desc: 'Ra trường, đi làm doanh nghiệp', icon: '💼' },
            { id: 'vstep', title: 'VSTEP', desc: 'Công chức, viên chức, thạc sĩ', icon: '📜' },
            { id: 'general', title: 'Tiếng Anh Giao Tiếp', desc: 'Học nền tảng cơ bản', icon: '📚' }
          ].map(exam => (
            <button
              key={exam.id}
              onClick={() => {
                setTargetExam(exam.id);
                setStep('test');
              }}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all text-center gap-3 active:scale-95"
              style={{ borderBottomWidth: '4px' }}
            >
              <div className="text-4xl">{exam.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{exam.title}</h3>
                <p className="text-xs text-slate-500">{exam.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Test Header */}
      <div
        className="rounded-2xl p-6 border shadow-sm"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
              Adaptive Placement Test (10 Phút)
            </span>
            <h2 className="text-lg sm:text-xl font-bold mt-2">
              Đánh Giá Trình Độ Đầu Vào & Xếp Lộ Trình 0 &rarr; 6.5
            </h2>
          </div>

          {!isCompleted && (
            <div className="flex flex-col items-end gap-2">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold text-sm ${timeLeft <= 60 ? 'bg-red-50 dark:bg-red-950/30 text-red-600 border-red-200 dark:border-red-800 animate-pulse' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'}`}>
                <Clock className="w-4 h-4" />
                {formatTime(timeLeft)}
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span>Tiến độ:</span>
                <div className="w-28 h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
                <span>
                  {currentIdx + 1}/{totalQuestions}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Test Body (Questions flow) */}
        {!isCompleted ? (
          <div className="py-6 space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 font-bold">
                Câu {currentIdx + 1} • Cấp độ {currentQ.level} ({currentQ.category})
              </span>
              <span>1 câu đúng = 1 điểm</span>
            </div>

            <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
              {currentQ.question}
            </h3>

            {/* 4 Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt, i) => {
                const isSelected = selectedAnswers[currentQ.id] === i;
                return (
                  <button
                    key={i}
                    onClick={() => handleSelectAnswer(i)}
                    className={`w-full p-4 rounded-xl border text-left font-medium text-sm transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 ring-2 ring-blue-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                          isSelected
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span>{opt}</span>
                    </div>
                    {isSelected && <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setCurrentIdx((p) => Math.max(0, p - 1))}
                disabled={currentIdx === 0}
                className="px-4 py-2 min-h-[44px] rounded-xl border text-xs font-semibold disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                style={{ borderColor: 'var(--border-color)' }}
              >
                Câu trước
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswers[currentQ.id] === undefined}
                className="px-6 py-2.5 min-h-[44px] bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-md shadow-blue-500/20"
              >
                {currentIdx === totalQuestions - 1 ? 'Nộp bài & Xem kết quả' : 'Câu tiếp theo'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Test Results & Personalized Pathway Dashboard */
          <div className="py-6 space-y-6 animate-in fade-in duration-300">
            {isCompleted && (
              <div className="fixed inset-0 z-[60] pointer-events-none">
                <Confetti
                  width={windowSize.width}
                  height={windowSize.height}
                  recycle={false}
                  numberOfPieces={500}
                  gravity={0.15}
                />
              </div>
            )}
            {/* Main Score Card */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 border border-blue-200/50 dark:border-blue-900/40 space-y-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Kết Quả Phân Loại Trình Độ
              </span>
              <div className="text-5xl font-black text-blue-600 dark:text-blue-400">
                Trình độ: {cefrLevelDisplay}
              </div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Bạn trả lời đúng <strong>{correctCount}/{totalQuestions}</strong> câu hỏi.
              </p>
            </div>

            {/* Assigned Roadmap Stage */}
            <div className={`p-6 rounded-2xl border ${stageColor} space-y-2`}>
              <div className="flex items-center gap-2 font-bold text-base">
                <Compass className="w-5 h-5" />
                Lộ Trình Đề Xuất Dành Riêng Cho Bạn:
              </div>
              <h4 className="text-lg font-black">{stageTitle}</h4>
              <p className="text-sm leading-relaxed">{stageDesc}</p>
            </div>

            {/* Detailed Action Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">Bước 1: Luyện Tập Đều Đặn</div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Dành ra ít nhất 30 phút mỗi ngày để hoàn thành các Unit theo đúng lộ trình đã đề xuất.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">Bước 2: Sử Dụng AI Tutor</div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Tận dụng AI để chấm điểm kỹ năng Viết và Nói, giúp bạn cải thiện ngay lập tức sau mỗi lỗi sai.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">Bước 3: Ôn Tập Từ Vựng</div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Hệ thống Flashcard SRS sẽ giúp bạn ghi nhớ từ vựng cốt lõi một cách tự nhiên và lâu dài.
                </p>
              </div>
            </div>

            {/* Answer Key Review Button & Test Reset */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setShowReview(!showReview)}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer flex items-center justify-center gap-1.5"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  <HelpCircle className="w-4 h-4 text-blue-500" />
                  {showReview ? 'Ẩn đáp án chi tiết' : 'Xem giải thích chi tiết'}
                </button>

                <button
                  onClick={resetTest}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer flex items-center justify-center gap-1.5"
                  style={{ borderColor: 'var(--border-color)' }}
                  title="Làm lại bài test"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  if (onFinish) onFinish(bandScore);
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-500/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Vào Lộ Trình Học Ngay
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Review List */}
            {showReview && (
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300">
                  Giải thích đáp án & Nguyên tắc ngữ pháp:
                </h4>
                {currentQuestions.map((q, idx) => {
                  const userAns = selectedAnswers[q.id];
                  const isCorrect = userAns === q.correctAnswer;
                  return (
                    <div
                      key={q.id}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-700 dark:text-slate-300">
                          Câu {idx + 1}: {q.question}
                        </span>
                        {isCorrect ? (
                          <span className="text-green-600 dark:text-green-400 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Đúng
                          </span>
                        ) : (
                          <span className="text-red-500 font-bold flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> Sai
                          </span>
                        )}
                      </div>
                      <div className="text-slate-600 dark:text-slate-400">
                        Đáp án đúng: <strong>{q.options[q.correctAnswer]}</strong>
                      </div>
                      <div className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 p-2.5 rounded-lg">
                        💡 <strong>Giải thích:</strong> {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
