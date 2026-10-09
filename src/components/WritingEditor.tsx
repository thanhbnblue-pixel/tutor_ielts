'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  PenTool,
  Clock,
  Send,
  Sparkles,
  AlertCircle,
  CheckCircle,
  RotateCcw,
  BookOpen,
  HelpCircle,
  Copy,
  Check,
} from 'lucide-react';
import { Language, t } from '@/lib/i18n';
import {
  WritingSubmission,
  WritingCorrection,
  saveWritingSubmission,
  getWritingDraft,
  saveWritingDraft,
  formatBandScore,
} from '@/lib/storage';

import { getProfiles } from '@/lib/storage';
import { useDailyQuests } from '@/hooks/useDailyQuests';

interface WritingEditorProps {
  lang: 'vi' | 'en';
  slotId: number;
  onSubmissionSuccess?: () => void;
}

interface WritingPrompt {
  id: string;
  type: 1 | 2;
  title: string;
  description: string;
  min_words: number;
}

const DEFAULT_PROMPTS: WritingPrompt[] = [
  {
    id: 'ielts-t2-1',
    type: 2,
    title: 'IELTS Task 2: Education',
    description: 'Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?',
    min_words: 250
  },
  {
    id: 'ielts-t1-1',
    type: 1,
    title: 'IELTS Task 1: Bar Chart',
    description: 'The chart below shows the number of men and women in further education in Britain in three periods and whether they were studying full-time or part-time. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    min_words: 150
  },
  {
    id: 'general-1',
    type: 2,
    title: 'General: Work-Life Balance',
    description: 'In many countries, people are working longer hours. What are the reasons for this? Is this a positive or negative development?',
    min_words: 250
  },
  {
    id: 'custom',
    type: 2,
    title: 'Custom Topic / Tự do',
    description: 'Write about any topic of your choice. Paste your prompt here or simply write freely.',
    min_words: 100
  }
];

export default function WritingEditor({ lang, slotId, onSubmissionSuccess }: WritingEditorProps) {
  const [targetExam, setTargetExam] = useState<string>('ielts');
  const [prompts, setPrompts] = useState<WritingPrompt[]>(DEFAULT_PROMPTS);
  const [selectedPrompt, setSelectedPrompt] = useState<WritingPrompt | null>(DEFAULT_PROMPTS[0]);

  const { exam, markTaskCompleted, mounted } = useDailyQuests();

  useEffect(() => {
    const profiles = getProfiles();
    const myProfile = profiles.find(p => p.slot_id === slotId);
    const examTarget = myProfile?.target_exam || 'ielts';
    setTargetExam(examTarget);
  }, [slotId]);

  useEffect(() => {
    if (mounted && exam?.writing) {
      setPrompts([exam.writing, ...DEFAULT_PROMPTS]);
      setSelectedPrompt(exam.writing);
    } else {
      setPrompts(DEFAULT_PROMPTS);
      setSelectedPrompt(DEFAULT_PROMPTS[0]);
    }
  }, [exam, mounted]);

  const [essayText, setEssayText] = useState<string>('');
  const [blockPaste, setBlockPaste] = useState<boolean>(true);
  const [timerSeconds, setTimerSeconds] = useState<number>(40 * 60);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [autoSaveMsg, setAutoSaveMsg] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitDuration, setSubmitDuration] = useState<number>(0);
  const [result, setResult] = useState<WritingSubmission | null>(null);
  const [activeTab, setActiveTab] = useState<'editor' | 'diff' | 'upgrade'>('editor');
  const [selectedCorrection, setSelectedCorrection] = useState<WritingCorrection | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const autoSaveRef = useRef<NodeJS.Timeout | null>(null);

  // Load draft when slot or prompt changes
  useEffect(() => {
    const draft = getWritingDraft(slotId, (selectedPrompt?.id || ""));
    if (draft) {
      setEssayText(draft);
      setAutoSaveMsg(t(lang, 'draft_restored'));
    } else {
      setEssayText('');
      setAutoSaveMsg('');
    }
    setTimerSeconds((selectedPrompt?.type || 2) === 2 ? 40 * 60 : 20 * 60);
    setTimerRunning(false);
    setResult(null);
    setActiveTab('editor');
    setApiError(null);
  }, [slotId, (selectedPrompt?.id || ""), (selectedPrompt?.type || 2), lang]);

  // Countdown timer
  useEffect(() => {
    if (timerRunning) {
      timerRef.current = setInterval(() => {
        setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerRunning]);

  // Auto-save draft every 5 seconds per requirements
  useEffect(() => {
    if (autoSaveRef.current) clearInterval(autoSaveRef.current);
    autoSaveRef.current = setInterval(() => {
      if (essayText.trim()) {
        saveWritingDraft(slotId, (selectedPrompt?.id || ""), essayText);
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        setAutoSaveMsg(t(lang, 'auto_saved', { time: timeStr }));
      }
    }, 5000);

    return () => {
      if (autoSaveRef.current) clearInterval(autoSaveRef.current);
    };
  }, [essayText, slotId, (selectedPrompt?.id || ""), lang]);

  const countWords = (text: string): number => {
    const trimmed = text.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  };

  const wordCount = countWords(essayText);
  const isWordTargetMet = wordCount >= (selectedPrompt?.min_words || 150);

  const handlePaste = (e: React.ClipboardEvent) => {
    if (blockPaste) {
      e.preventDefault();
      alert('Chế độ thi thật đang bật (Khóa tính năng Paste). Bạn hãy trực tiếp gõ bài để rèn luyện tốc độ làm bài thi!');
    }
  };

  const formatTimer = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async () => {
    if (wordCount < 20) {
      alert('Bài viết quá ngắn (tối thiểu 20 từ). Hãy gõ thêm ý để AI có đủ dữ liệu chấm điểm!');
      return;
    }

    setIsSubmitting(true);
    setApiError(null);
    setSubmitDuration(0);
    const interval = setInterval(() => setSubmitDuration((prev) => prev + 1), 1000);

    try {
      const { getProfiles } = await import('@/lib/storage');
      const profile = getProfiles().find(p => p.slot_id === slotId);
      const targetExam = profile?.target_exam || 'ielts';

      const res = await fetch('/api/writing/grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task_type: (selectedPrompt?.type || 2),
          prompt_title: (selectedPrompt?.title || ""),
          essay_text: essayText,
          word_count: wordCount,
          exam_track: targetExam,
        }),
      });

      const data = await res.json();
      clearInterval(interval);
      setIsSubmitting(false);

      if (!res.ok) {
        throw new Error(data.error || 'Lỗi server');
      }

      // Convert scores to primitive raw integer values (multiply by 10) per Rule 9
      const submission: WritingSubmission = {
        id: 'sub_' + Date.now(),
        slot_id: slotId,
        task_type: (selectedPrompt?.type || 2),
        prompt_title: (selectedPrompt?.title || ""),
        essay_text: essayText,
        word_count: wordCount,
        duration_seconds: ((selectedPrompt?.type || 2) === 2 ? 40 * 60 : 20 * 60) - timerSeconds,
        overall_band_raw: Math.round((data.overall_band || 5.0) * 10),
        sub_scores_raw: {
          tr: Math.round((data.sub_scores?.tr || 5.0) * 10),
          cc: Math.round((data.sub_scores?.cc || 5.0) * 10),
          lr: Math.round((data.sub_scores?.lr || 5.0) * 10),
          gra: Math.round((data.sub_scores?.gra || 5.0) * 10),
        },
        feedback: data.detailed_feedback || { tr: '', cc: '', lr: '', gra: '' },
        corrections: data.corrections || [],
        upgraded_essay: data.upgraded_essay || '',
        created_at: new Date().toISOString(),
      };

      saveWritingSubmission(submission);
      setResult(submission);
      setActiveTab('diff');
      
      // Auto-complete daily quest if applicable
      if (exam?.writing?.taskId && selectedPrompt?.id === exam.writing.id) {
        markTaskCompleted(exam.writing.taskId);
      }
      
      if (onSubmissionSuccess) onSubmissionSuccess();
    } catch (err: unknown) {
      clearInterval(interval);
      setIsSubmitting(false);
      const msg = err instanceof Error ? err.message : 'Lỗi kết nối';
      if (msg.includes('429') || msg.toLowerCase().includes('quota') || msg.toLowerCase().includes('limit')) {
        setApiError('Rất tiếc, AI Tutor đang quá tải do vượt quá giới hạn lượt chấm bài miễn phí của Gemini (20 requests/ngày). Hãy quay lại vào ngày mai để AI tiếp tục chấm bài nhé!');
      } else {
        setApiError('Không thể chấm bài lúc này: ' + msg);
      }
    }
  };

  const handleCopyUpgrade = () => {
    if (!result?.upgraded_essay) return;
    navigator.clipboard.writeText(result.upgraded_essay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Prompt Selection */}
      <div
        className="rounded-2xl p-5 border shadow-sm"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
              {t(lang, 'writing_title')}
            </span>
            <h2 className="text-lg sm:text-xl font-bold mt-2">{(selectedPrompt?.title || "")}</h2>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={(selectedPrompt?.id || "")}
              onChange={(e) => {
                const found = prompts.find((p) => p.id === e.target.value);
                if (found) setSelectedPrompt(found);
              }}
              disabled={!!exam?.writing}
              className="px-3 py-2 text-sm rounded-xl border bg-transparent font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ borderColor: 'var(--border-color)' }}
            >
              {prompts.map((p) => (
                <option key={p.id} value={p.id} className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900">
                  {p.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Prompt description */}
        <p className="text-sm mt-4 text-slate-700 dark:text-slate-300 leading-relaxed font-serif bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800">
          {(selectedPrompt?.description || "")}
        </p>

        {/* Toolbar: Timer, Word Count, Paste Blocker */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-2">
          {/* Word counter */}
          <div className="flex items-center gap-2 text-sm">
            <PenTool className="w-4 h-4 text-blue-500" />
            <span className="font-medium">
              Số từ: <span className={`font-bold text-base ${isWordTargetMet ? 'text-green-500' : 'text-amber-500'}`}>{wordCount}</span> / {(selectedPrompt?.min_words || 150)}
            </span>
            {isWordTargetMet ? (
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Đạt chuẩn
              </span>
            ) : (
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400">
                Cần thêm {(selectedPrompt?.min_words || 150) - wordCount} từ
              </span>
            )}
          </div>

          {/* Timer */}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-500" />
            <span className="font-mono font-bold text-sm">{formatTimer(timerSeconds)}</span>
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all cursor-pointer"
            >
              {timerRunning ? t(lang, 'btn_pause_timer') : t(lang, 'btn_start_timer')}
            </button>
          </div>

          {/* Paste blocker checkbox */}
          <label className="flex items-center gap-2 text-xs font-medium cursor-pointer select-none text-slate-600 dark:text-slate-400">
            <input
              type="checkbox"
              checked={blockPaste}
              onChange={(e) => setBlockPaste(e.target.checked)}
              className="w-4 h-4 rounded text-blue-600"
            />
            {t(lang, 'block_paste_label')}
          </label>
        </div>
      </div>

      {/* Tabs navigation if result exists */}
      {result && (
        <div className="flex border-b border-slate-200 dark:border-slate-800 gap-4">
          <button
            onClick={() => setActiveTab('editor')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'editor'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Trình soạn thảo
          </button>
          <button
            onClick={() => setActiveTab('diff')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'diff'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Điểm số & Sửa lỗi chi tiết
            <span className="ml-1 px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs">
              Band {formatBandScore(result.overall_band_raw)}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('upgrade')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'upgrade'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Bài mẫu nâng cấp Band 6.5
          </button>
        </div>
      )}

      {/* Tab 1: Editor View */}
      {activeTab === 'editor' && (
        <div
          className="rounded-2xl p-5 border shadow-sm space-y-4"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <textarea
            value={essayText}
            onChange={(e) => setEssayText(e.target.value)}
            onPaste={handlePaste}
            placeholder="Type your essay here in English... (Gõ bài viết của bạn tại đây bằng tiếng Anh)"
            rows={14}
            className="w-full p-4 rounded-xl border bg-transparent font-serif text-base leading-relaxed resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
          />

          {apiError && (
            <div className="p-4 rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 text-sm font-medium flex items-start gap-2 animate-in fade-in zoom-in duration-300">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>{apiError}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <span className="text-xs text-slate-500">{autoSaveMsg}</span>
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  if (confirm('Bạn có chắc muốn xóa bài viết hiện tại để làm lại từ đầu không?')) {
                    setEssayText('');
                  }
                }}
                className="px-4 py-2.5 text-xs font-semibold rounded-xl border hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer flex items-center gap-1.5"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <RotateCcw className="w-4 h-4" /> Làm lại
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || wordCount < 20}
                className="flex-1 sm:flex-none px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t(lang, 'btn_submitting', { sec: submitDuration })}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t(lang, 'btn_submit_writing')}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Detailed Results & Inline Diff */}
      {activeTab === 'diff' && result && (
        <div className="space-y-6">
          {/* Cambridge Score Overview Card */}
          <div
            className="rounded-2xl p-6 border shadow-sm"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase">IELTS Writing Official Assessment</span>
                <h3 className="text-2xl font-black mt-1 flex items-center gap-2">
                  Overall: Band {formatBandScore(result.overall_band_raw)}
                </h3>
              </div>
              <div className="flex gap-2">
                <div className="text-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 min-w-16">
                  <div className="text-xs text-slate-500 font-semibold">TR</div>
                  <div className="text-base font-bold text-blue-600 dark:text-blue-400">
                    {formatBandScore(result.sub_scores_raw.tr)}
                  </div>
                </div>
                <div className="text-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 min-w-16">
                  <div className="text-xs text-slate-500 font-semibold">CC</div>
                  <div className="text-base font-bold text-blue-600 dark:text-blue-400">
                    {formatBandScore(result.sub_scores_raw.cc)}
                  </div>
                </div>
                <div className="text-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 min-w-16">
                  <div className="text-xs text-slate-500 font-semibold">LR</div>
                  <div className="text-base font-bold text-blue-600 dark:text-blue-400">
                    {formatBandScore(result.sub_scores_raw.lr)}
                  </div>
                </div>
                <div className="text-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 min-w-16">
                  <div className="text-xs text-slate-500 font-semibold">GRA</div>
                  <div className="text-base font-bold text-blue-600 dark:text-blue-400">
                    {formatBandScore(result.sub_scores_raw.gra)}
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Criteria Explanations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                  Task Response (TR): Band {formatBandScore(result.sub_scores_raw.tr)}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {result.feedback.tr}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                  Coherence & Cohesion (CC): Band {formatBandScore(result.sub_scores_raw.cc)}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {result.feedback.cc}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                  Lexical Resource (LR): Band {formatBandScore(result.sub_scores_raw.lr)}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {result.feedback.lr}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                  Grammar Range & Accuracy (GRA): Band {formatBandScore(result.sub_scores_raw.gra)}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {result.feedback.gra}
                </p>
              </div>
            </div>
          </div>

          {/* Inline Diff & Error Corrections */}
          <div
            className="rounded-2xl p-6 border shadow-sm"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
            }}
          >
            <h4 className="text-lg font-bold flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              {t(lang, 'inline_diff_title')}
            </h4>
            <p className="text-xs text-slate-500 mb-6">{t(lang, 'inline_diff_desc')}</p>

            {result.corrections.length === 0 ? (
              <div className="p-6 text-center text-sm text-green-600 bg-green-50 dark:bg-green-950/20 rounded-xl">
                {t(lang, 'no_errors_found')}
              </div>
            ) : (
              <div className="space-y-3">
                {result.corrections.map((corr, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedCorrection(corr)}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold flex items-center justify-center text-slate-500">
                        {idx + 1}
                      </span>
                      <div className="text-sm">
                        <span className="line-through text-red-500 font-semibold mr-2">{corr.original}</span>
                        <span className="text-slate-400 mr-2">➔</span>
                        <span className="text-green-600 dark:text-green-400 font-bold">{corr.corrected}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 capitalize">
                        {corr.type}
                      </span>
                      <span className="text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1 font-medium">
                        <HelpCircle className="w-3.5 h-3.5" /> Giải thích
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Model Essay Upgrade Band 6.5 */}
      {activeTab === 'upgrade' && result && (
        <div
          className="rounded-2xl p-6 border shadow-sm space-y-4"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h4 className="text-lg font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                {t(lang, 'upgraded_essay_title')}
              </h4>
              <p className="text-xs text-slate-500 mt-1">{t(lang, 'upgraded_essay_desc')}</p>
            </div>
            <button
              onClick={handleCopyUpgrade}
              className="px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              style={{ borderColor: 'var(--border-color)' }}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Đã sao chép' : 'Sao chép bài mẫu'}
            </button>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 font-serif text-base leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-wrap">
            {result.upgraded_essay}
          </div>
        </div>
      )}

      {/* Modal popup for grammar explanation */}
      {selectedCorrection && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className="w-full max-w-md rounded-2xl p-6 border shadow-2xl animate-in fade-in zoom-in duration-200"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 capitalize">
                Lỗi {selectedCorrection.type}
              </span>
              <button
                onClick={() => setSelectedCorrection(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 mb-4">
              <div className="text-xs text-slate-500 mb-1">Cụm từ gốc của bạn:</div>
              <div className="line-through text-red-500 font-serif font-bold text-base">
                {selectedCorrection.original}
              </div>
              <div className="text-xs text-slate-500 mt-2 mb-1">Sửa lại chuẩn học thuật:</div>
              <div className="text-green-600 dark:text-green-400 font-serif font-bold text-base">
                {selectedCorrection.corrected}
              </div>
            </div>

            <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-blue-50/50 dark:bg-blue-950/20 p-4 rounded-xl border border-blue-200/50 dark:border-blue-900/40">
              <div className="font-bold text-xs text-blue-600 dark:text-blue-400 mb-1">Quy tắc & Giải thích:</div>
              {selectedCorrection.explanation}
            </div>

            <button
              onClick={() => setSelectedCorrection(null)}
              className="w-full mt-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all cursor-pointer"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
