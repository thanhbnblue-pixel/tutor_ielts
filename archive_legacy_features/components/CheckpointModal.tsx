'use client';

import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { CheckpointTest } from '@/lib/curriculum';

interface CheckpointModalProps {
  checkpoint: CheckpointTest;
  onPass: (checkpointId: number) => void;
  onClose: () => void;
}

const TIME_LIMIT = 10 * 60; // 10 minutes

export default function CheckpointModal({ checkpoint, onPass, onClose }: CheckpointModalProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);

  const totalQuestions = checkpoint.questions.length;

  const calculateScore = () => {
    let correct = 0;
    checkpoint.questions.forEach((q) => {
      if (answers[q.id] === q.correct_answer) correct++;
    });
    return Math.round((correct / totalQuestions) * 100);
  };

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = () => {
    const score = calculateScore();
    setIsSubmitted(true);
    if (score >= checkpoint.passing_score) {
      onPass(checkpoint.id);
    }
  };

  const scorePercentage = isSubmitted ? calculateScore() : 0;
  const isPassed = scorePercentage >= checkpoint.passing_score;

  useEffect(() => {
    if (isSubmitted) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {isSubmitted && isPassed && (
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
      <div
        className="w-full max-w-3xl max-h-[92vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
          color: 'var(--text-primary)',
        }}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 bg-amber-500/10">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Milestone Assessment
              </span>
              <h3 className="text-base sm:text-lg font-black">{checkpoint.title}</h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {!isSubmitted && (
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold text-sm ${timeLeft <= 60 ? 'bg-red-50 dark:bg-red-950/30 text-red-600 border-red-200 dark:border-red-800 animate-pulse' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'}`}>
                <Clock className="w-4 h-4" />
                {formatTime(timeLeft)}
              </div>
            )}
            <button
              onClick={onClose}
              className="w-11 h-11 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Test Questions List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {!isSubmitted ? (
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
              📌 Bài thi gồm <strong>{totalQuestions} câu hỏi</strong> tổng hợp kiến thức từ các Unit 1, 2 và 3. Bạn cần đạt từ <strong>{checkpoint.passing_score}%</strong> (7/10 câu) để chính thức vượt qua chặng này!
            </div>
          ) : (
            <div
              className={`p-6 rounded-2xl text-center space-y-2 border ${
                isPassed
                  ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800'
                  : 'bg-red-50 dark:bg-red-950/30 border-red-300 dark:border-red-800'
              }`}
            >
              <div className="text-4xl font-black">
                {scorePercentage}%
              </div>
              <h4 className="font-bold text-base">
                {isPassed ? '🎉 Chúc Mừng! Bạn Đã Vượt Qua Checkpoint' : 'Chưa Đạt Yêu Cầu (Cần $\ge$ 70%)'}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {isPassed
                  ? 'Hệ thống đã ghi nhận kết quả và mở khóa các bài học chặng tiếp theo.'
                  : 'Hãy xem lại các câu sai bên dưới và làm lại bài thi để củng cố kiến thức.'}
              </p>
            </div>
          )}

          <div className="space-y-4">
            {checkpoint.questions.map((q, idx) => {
              const userAns = answers[q.id];
              const isCorrect = userAns === q.correct_answer;

              return (
                <div
                  key={q.id}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex-1 leading-relaxed">
                      <span className="mr-2">Câu {idx + 1}:</span>
                      {q.question}
                      {q.is_cambridge_trap && (
                        <span className="inline-flex items-center gap-1 ml-2 px-1.5 py-0.5 rounded text-[10px] bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400 font-bold uppercase tracking-wider align-middle">
                          <AlertTriangle className="w-3 h-3" /> Bẫy Cambridge
                        </span>
                      )}
                    </span>
                    {isSubmitted && (
                      <span>
                        {isCorrect ? (
                          <span className="text-xs text-green-600 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Đúng
                          </span>
                        ) : (
                          <span className="text-xs text-red-500 font-bold flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> Sai
                          </span>
                        )}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = userAns === optIdx;
                      let btnClass = 'border-slate-200 dark:border-slate-800 hover:border-slate-400';

                      if (isSubmitted) {
                        if (optIdx === q.correct_answer) {
                          btnClass = 'border-green-500 bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 font-bold';
                        } else if (isSelected) {
                          btnClass = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 line-through';
                        }
                      } else if (isSelected) {
                        btnClass = 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold';
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => {
                            if (!isSubmitted) setAnswers((p) => ({ ...p, [q.id]: optIdx }));
                          }}
                          className={`w-full p-2.5 rounded-lg border text-left text-xs font-medium cursor-pointer transition-all ${btnClass}`}
                        >
                          <span className="font-bold mr-1.5">{String.fromCharCode(65 + optIdx)}.</span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {isSubmitted && (
                    <div className="space-y-2 mt-2">
                      <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[11px] text-blue-700 dark:text-blue-300">
                        💡 <strong>Giải thích:</strong> {q.explanation_vi}
                      </div>
                      {q.is_cambridge_trap && q.trap_explanation && (
                        <div className="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/40 text-[11px] text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900/50">
                          🚨 <strong>Phân tích bẫy Cambridge:</strong> {q.trap_explanation}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Speaking & Writing Micro-tasks */}
          {(checkpoint.speaking_prompt || checkpoint.writing_prompt) && (
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
              {checkpoint.speaking_prompt && (
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2">
                  <span className="text-[11px] font-bold text-amber-600 uppercase">Micro-Speaking Checkpoint</span>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {checkpoint.speaking_prompt}
                  </div>
                  {isSubmitted && checkpoint.speaking_sample_idea && (
                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 text-[11px] text-slate-600 dark:text-slate-400 italic">
                      💡 Gợi ý: {checkpoint.speaking_sample_idea}
                    </div>
                  )}
                </div>
              )}
              {checkpoint.writing_prompt && (
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2">
                  <span className="text-[11px] font-bold text-indigo-600 uppercase">Micro-Writing Checkpoint</span>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {checkpoint.writing_prompt}
                  </div>
                  {isSubmitted && checkpoint.writing_model_sentence && (
                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 text-[11px] text-slate-600 dark:text-slate-400">
                      ✍️ Câu mẫu: "{checkpoint.writing_model_sentence}"
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < totalQuestions}
              className="w-full py-3 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl transition-all cursor-pointer shadow-md shadow-amber-500/20"
            >
              Nộp Bài Checkpoint ({Object.keys(answers).length}/{totalQuestions} câu)
            </button>
          ) : (
            <div className="w-full flex items-center justify-between">
              <button
                onClick={() => {
                  setAnswers({});
                  setIsSubmitted(false);
                  setTimeLeft(TIME_LIMIT);
                }}
                className="px-4 py-2 border rounded-xl text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Làm lại bài thi
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-700 cursor-pointer"
              >
                Hoàn tất & Đóng
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
