'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Volume2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCw,
  Sparkles,
  Award,
  Layers,
  FileText,
  Check,
} from 'lucide-react';
import { CourseUnit, VocabularyItem } from '@/lib/curriculum';
import { Language } from '@/lib/i18n';
import AITutorChat from './AITutorChat';
import { getSRSItems, saveSRSItems } from '@/lib/storage';
import { SRSItem } from '@/lib/srs-engine';
import { getActiveSlotId } from '@/lib/storage';

interface LessonPlayerProps {
  unit: CourseUnit;
  lang: Language;
  onComplete: (unitId: string, scorePercentage: number) => void;
  onClose: () => void;
}

export default function LessonPlayer({ unit, lang, onComplete, onClose }: LessonPlayerProps) {
  const [activeTab, setActiveTab] = useState<'vocab' | 'grammar' | 'skills' | 'review'>('vocab');
  
  // Vocabulary Flashcard state
  const [vocabIdx, setVocabIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  
  // Grammar Quiz state
  const [grammarAnswers, setGrammarAnswers] = useState<Record<number, number>>({});
  
  // Skills practice state
  const [skillsReadingAnswer, setSkillsReadingAnswer] = useState<number | null>(null);

  // Unit Review Quiz state
  const [reviewAnswers, setReviewAnswers] = useState<Record<number, number>>({});
  const [isReviewSubmitted, setIsReviewSubmitted] = useState<boolean>(false);

  const currentVocab: VocabularyItem = unit.vocabulary[vocabIdx] || unit.vocabulary[0];

  // Native Speech Synthesis for pronunciation (0 VND)
  const playAudio = (word: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-GB';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleReviewSubmit = () => {
    let correct = 0;
    const reviewQuiz = unit.unit_review_quiz || unit.quiz || [];
    reviewQuiz.forEach((q) => {
      if (reviewAnswers[q.id] === q.correct_answer) correct++;
    });
    const percentage = Math.round((correct / reviewQuiz.length) * 100);
    setIsReviewSubmitted(true);

    if (percentage >= 70) {
      // Phase 3 HM-7: Add all vocab from this unit to SRS engine
      const slotId = getActiveSlotId();
      const currentSrs = getSRSItems(slotId);
      const newItems: SRSItem[] = unit.vocabulary.map(v => ({
        id: v.word,
        interval: 1,
        repetition: 0,
        efactor: 2.5,
        next_review_date: new Date().toISOString(),
        status: 'new'
      }));
      
      // Merge ignoring duplicates
      const merged = [...currentSrs];
      for (const item of newItems) {
        if (!merged.find(m => m.id === item.id)) {
          merged.push(item);
        }
      }
      saveSRSItems(slotId, merged);

      onComplete(unit.id, percentage);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        className="w-full max-w-4xl max-h-[92vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
          color: 'var(--text-primary)',
        }}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-900/50">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
              Bài Học Tuyến Tính • {unit.title.split(':')[0]}
            </span>
            <h2 className="text-base sm:text-lg font-black mt-1 line-clamp-1">{unit.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-11 h-11 min-w-[44px] rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer transition-colors"
          >
            ✕
          </button>
        </div>

        {/* 4 Steps Navigation Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto text-xs font-bold bg-white dark:bg-slate-900 scrollbar-none">
          <button
            onClick={() => setActiveTab('vocab')}
            className={`flex-none min-w-max py-3 px-4 text-center border-b-2 transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'vocab'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50/30 dark:bg-blue-950/20'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            1. Từ Vựng ({unit.vocabulary.length} từ)
          </button>

          <button
            onClick={() => setActiveTab('grammar')}
            className={`flex-none min-w-max py-3 px-4 text-center border-b-2 transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'grammar'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50/30 dark:bg-blue-950/20'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            2. Ngữ Pháp Cốt Lõi
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`flex-none min-w-max py-3 px-4 text-center border-b-2 transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'skills'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50/30 dark:bg-blue-950/20'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            3. Áp Dụng 4 Kỹ Năng
          </button>

          <button
            onClick={() => setActiveTab('review')}
            className={`flex-none min-w-max py-3 px-4 text-center border-b-2 transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'review'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50/30 dark:bg-blue-950/20'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Award className="w-4 h-4" />
            4. Ôn Tập Unit
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 w-full bg-slate-100 dark:bg-slate-800">
          <div 
            className="h-full bg-blue-600 transition-all duration-300" 
            style={{ width: `${(activeTab === 'vocab' ? 25 : activeTab === 'grammar' ? 50 : activeTab === 'skills' ? 75 : 100)}%` }}
          />
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* TAB 1: FLASHCARDS VOCABULARY */}
          {activeTab === 'vocab' && (
            <div className="space-y-6 max-w-xl mx-auto text-center">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Thẻ từ vựng thông minh (Interactive Flashcard)</span>
                <span>
                  {vocabIdx + 1} / {unit.vocabulary.length}
                </span>
              </div>

              {/* Flashcard Box 3D */}
              <div className="relative w-full min-h-[260px] [perspective:1000px]" onClick={() => setIsFlipped(!isFlipped)}>
                <div className={`w-full h-full min-h-[260px] p-6 sm:p-8 rounded-3xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950/30 shadow-lg cursor-pointer flex flex-col items-center justify-center transition-all duration-500 [transform-style:preserve-3d] select-none hover:border-blue-500 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                  
                  {/* Front side */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 space-y-3 [backface-visibility:hidden]">
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      [{currentVocab.part_of_speech}]
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400">
                      {currentVocab.word}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-slate-500 text-sm font-mono">
                      <span>{currentVocab.ipa}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playAudio(currentVocab.word);
                        }}
                        className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 hover:scale-110 transition-transform"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-400 italic pt-2">
                      (Bấm vào thẻ để lật xem nghĩa tiếng Việt & câu ví dụ)
                    </p>
                  </div>
                  </div>

                  {/* Back side */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 space-y-3 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-500">
                      Nghĩa Tiếng Việt
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">
                      {currentVocab.meaning_vi}
                    </h3>
                    <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 text-xs text-left space-y-1 font-serif">
                      <p className="text-slate-800 dark:text-slate-200">&ldquo;{currentVocab.example_en}&rdquo;</p>
                      <p className="text-slate-500 italic">&rarr; {currentVocab.example_vi}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setVocabIdx((p) => Math.max(0, p - 1));
                  }}
                  disabled={vocabIdx === 0}
                  className="px-4 py-2 min-h-[44px] rounded-xl border text-xs font-semibold disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" /> Từ trước
                </button>

                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="px-4 py-2 min-h-[44px] rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold hover:bg-slate-200 cursor-pointer flex items-center gap-1.5"
                >
                  <RotateCw className="w-3.5 h-3.5" /> Lật thẻ
                </button>

                {vocabIdx < unit.vocabulary.length - 1 ? (
                  <button
                    onClick={() => {
                      setIsFlipped(false);
                      setVocabIdx((p) => p + 1);
                    }}
                    className="px-4 py-2 min-h-[44px] rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 cursor-pointer flex items-center gap-1"
                  >
                    Từ kế tiếp <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveTab('grammar')}
                    className="px-4 py-2 min-h-[44px] rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 cursor-pointer flex items-center gap-1"
                  >
                    Sang bài Ngữ pháp &rarr;
                  </button>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: GRAMMAR LESSON */}
          {activeTab === 'grammar' && (
            <div className="space-y-6">
              {/* Theory Explanation */}
              <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Lý Thuyết Ngữ Pháp
                </span>
                <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">
                  {unit.grammar.title || unit.grammar.point}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {unit.grammar.explanation_vi}
                </p>

                {/* Formula Box */}
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900 font-mono text-xs text-blue-700 dark:text-blue-300 font-bold">
                  Công thức: {unit.grammar.formula || unit.grammar.structure}
                </div>
              </div>

              {/* Examples List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Ví dụ minh họa thực tế:
                </h4>
                {(unit.grammar.examples || [{ en: unit.grammar.example_en || '', vi: unit.grammar.example_vi || '' }]).map((ex, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-serif space-y-1"
                  >
                    <p className="font-semibold text-slate-800 dark:text-slate-200">&bull; {ex.en}</p>
                    <p className="text-slate-500 italic font-sans">&rarr; {ex.vi}</p>
                  </div>
                ))}
              </div>

              {/* Practice Quiz */}
              {unit.grammar.quiz && unit.grammar.quiz.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Bài tập củng cố ngữ pháp ({unit.grammar.quiz.length} câu):
                  </h4>
                  {unit.grammar.quiz.map((q, idx) => {
                    const userAns = grammarAnswers[q.id];
                    const hasAnswered = userAns !== undefined;

                    return (
                      <div
                        key={q.id}
                        className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2.5"
                      >
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          Câu {idx + 1}: {q.question}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = userAns === optIdx;
                            let btnStyle = 'border-slate-200 dark:border-slate-800 hover:border-slate-400';

                            if (hasAnswered) {
                              if (optIdx === q.correct_answer) {
                                btnStyle = 'border-green-500 bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 font-bold';
                              } else if (isSelected) {
                                btnStyle = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 line-through';
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => setGrammarAnswers((p) => ({ ...p, [q.id]: optIdx }))}
                                className={`p-2.5 rounded-lg border text-left text-xs font-medium cursor-pointer transition-all ${btnStyle}`}
                              >
                                <span className="font-bold mr-1.5">{String.fromCharCode(65 + optIdx)}.</span>
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {hasAnswered && (
                          <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[11px] text-blue-700 dark:text-blue-300">
                            💡 <strong>Giải thích:</strong> {q.explanation_vi}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: MICRO-SKILLS PRACTICE */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              {/* Reading Micro-practice */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                  {unit.skills_practice.type || 'Micro-Reading (Đọc Hiểu Đoạn Ngắn)'}
                </span>
                <h4 className="font-bold text-sm">{unit.skills_practice.reading_title || unit.skills_practice.title}</h4>
                <p className="font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                  {unit.skills_practice.reading_text || unit.skills_practice.content}
                </p>

                {(unit.skills_practice.questions || [{
                  id: 1, 
                  question: unit.skills_practice.reading_question || '', 
                  options: unit.skills_practice.reading_options || [], 
                  correct_answer: unit.skills_practice.reading_answer || 0, 
                  explanation_vi: unit.skills_practice.reading_explanation || ''
                }]).map((q, qIndex) => (
                  <div className="space-y-2 pt-2" key={q.id}>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {q.question}
                    </div>
                    <div className="space-y-1.5">
                      {q.options.map((opt, i) => {
                        const isSelected = skillsReadingAnswer === (qIndex * 10 + i);
                        const isCorrect = i === q.correct_answer;

                        let optStyle = 'border-slate-200 dark:border-slate-800 hover:border-slate-400';
                        if (skillsReadingAnswer !== null) {
                          if (isCorrect) optStyle = 'border-green-500 bg-green-50 text-green-700 font-bold';
                          else if (isSelected) optStyle = 'border-red-500 bg-red-50 text-red-700 line-through';
                        }

                        return (
                          <button
                            key={i}
                            onClick={() => {
                              // We only support saving answer for 1 question realistically, but let's just trigger answer display
                              setSkillsReadingAnswer(qIndex * 10 + i);
                            }}
                            className={`w-full p-2.5 rounded-lg border text-left text-xs font-medium cursor-pointer transition-all ${optStyle}`}
                          >
                            <span className="font-bold mr-1.5">{String.fromCharCode(65 + i)}.</span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {skillsReadingAnswer !== null && (
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[11px] text-blue-700 dark:text-blue-300">
                        💡 {q.explanation_vi}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Speaking & Writing Micro-tasks */}
              {(unit.skills_practice.speaking_prompt || unit.skills_practice.writing_prompt) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {unit.skills_practice.speaking_prompt && (
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2">
                      <span className="text-[11px] font-bold text-amber-600 uppercase">Micro-Speaking</span>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {unit.skills_practice.speaking_prompt}
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 text-[11px] text-slate-600 dark:text-slate-400 italic">
                        Gợi ý: {unit.skills_practice.speaking_sample_idea}
                      </div>
                    </div>
                  )}

                  {unit.skills_practice.writing_prompt && (
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2">
                      <span className="text-[11px] font-bold text-indigo-600 uppercase">Micro-Writing</span>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {unit.skills_practice.writing_prompt}
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 text-[11px] text-slate-600 dark:text-slate-400">
                        Câu mẫu: &ldquo;{unit.skills_practice.writing_model_sentence}&rdquo;
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: UNIT REVIEW QUIZ */}
          {activeTab === 'review' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-800 dark:text-amber-300">
                ⭐ <strong>Yêu cầu hoàn thành:</strong> Đạt từ <strong>70% điểm</strong> trở lên để chính thức hoàn thành Unit này và mở khóa bài học tiếp theo trên lộ trình!
              </div>

              <div className="space-y-4">
                {(unit.unit_review_quiz || unit.quiz || []).map((q, idx) => {
                  const userAns = reviewAnswers[q.id];
                  const hasAnswered = userAns !== undefined;

                  return (
                    <div
                      key={q.id}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2.5"
                    >
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Câu {idx + 1}: {q.question}
                      </div>

                      <div className="space-y-1.5">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = userAns === optIdx;
                          let btnStyle = 'border-slate-200 dark:border-slate-800 hover:border-slate-400';

                          if (isReviewSubmitted) {
                            if (optIdx === q.correct_answer) {
                              btnStyle = 'border-green-500 bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 font-bold';
                            } else if (isSelected) {
                              btnStyle = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 line-through';
                            }
                          } else if (isSelected) {
                            btnStyle = 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold';
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => {
                                if (!isReviewSubmitted) {
                                  setReviewAnswers((p) => ({ ...p, [q.id]: optIdx }));
                                }
                              }}
                              className={`w-full p-2.5 rounded-lg border text-left text-xs font-medium cursor-pointer transition-all ${btnStyle}`}
                            >
                              <span className="font-bold mr-1.5">{String.fromCharCode(65 + optIdx)}.</span>
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {isReviewSubmitted && (
                        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[11px] text-blue-700 dark:text-blue-300">
                          💡 {q.explanation_vi}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit Review Button */}
              <div className="pt-2">
                {!isReviewSubmitted ? (
                  <button
                    onClick={handleReviewSubmit}
                    disabled={Object.keys(reviewAnswers).length < (unit.unit_review_quiz?.length || 0)}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl transition-all cursor-pointer shadow-md shadow-blue-500/20"
                  >
                    Nộp Bài Ôn Tập & Mở Khóa Bài Học ({Object.keys(reviewAnswers).length}/{(unit.unit_review_quiz?.length || 0)} câu)
                  </button>
                ) : (
                  <div className="text-center p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                    <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-300">
                      Chúc mừng! Bạn đã hoàn thành Unit này.
                    </h4>
                    <button
                      onClick={onClose}
                      className="px-6 py-2 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 cursor-pointer"
                    >
                      Đóng & Trở Về Lộ Trình
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <AITutorChat contextText={`Bài học hiện tại: ${unit.title}. ${unit.description_vi}. Tab đang mở: ${activeTab}. Từ vựng: ${currentVocab.word} (${currentVocab.meaning_vi}). Ngữ pháp: ${unit.grammar.title}`} />
    </div>
  );
}
