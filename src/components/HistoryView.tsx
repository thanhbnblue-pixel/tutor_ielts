'use client';

import React, { useState, useEffect } from 'react';
import { History, Calendar, Clock, FileText, Mic, ChevronRight, ChevronDown } from 'lucide-react';
import { Language, t } from '@/lib/i18n';
import {
  WritingSubmission,
  SpeakingSubmission,
  ReadingSubmission,
  ListeningSubmission,
  getWritingSubmissions,
  getSpeakingSubmissions,
  getReadingSubmissions,
  getListeningSubmissions,
  formatBandScore,
  syncHistoryWithSupabase,
} from '@/lib/storage';

interface HistoryViewProps {
  lang: Language;
  slotId: number;
}

export default function HistoryView({ lang, slotId }: HistoryViewProps) {
  const [writingSubs, setWritingSubs] = useState<WritingSubmission[]>([]);
  const [speakingSubs, setSpeakingSubs] = useState<SpeakingSubmission[]>([]);
  const [readingSubs, setReadingSubs] = useState<ReadingSubmission[]>([]);
  const [listeningSubs, setListeningSubs] = useState<ListeningSubmission[]>([]);
  const [filterType, setFilterType] = useState<'all' | 'writing' | 'speaking' | 'reading' | 'listening'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    // Immediately load from cache to avoid flicker
    setWritingSubs(getWritingSubmissions(slotId));
    setSpeakingSubs(getSpeakingSubmissions(slotId));
    setReadingSubs(getReadingSubmissions(slotId));
    setListeningSubs(getListeningSubmissions(slotId));

    // Sync with Supabase then fetch from local storage
    syncHistoryWithSupabase(slotId).then(() => {
      setWritingSubs(getWritingSubmissions(slotId));
      setSpeakingSubs(getSpeakingSubmissions(slotId));
    });
  }, [slotId]);

  const totalCount = writingSubs.length + speakingSubs.length + readingSubs.length + listeningSubs.length;

  if (totalCount === 0) {
    return (
      <div
        className="rounded-2xl p-12 border text-center space-y-3"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
        }}
      >
        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
          <History className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-base">{t(lang, 'empty_history')}</h3>
        <p className="text-xs text-slate-500 max-w-sm mx-auto">
          Mỗi khi hoàn thành một bài thi 4 kỹ năng, điểm số sẽ được lưu lại tại đây.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header and filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <History className="w-5 h-5 text-blue-500" />
          Nhật ký làm bài ({totalCount} bài đã nộp)
        </h3>

        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 text-xs font-semibold">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filterType === 'all'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Tất cả ({totalCount})
          </button>
          <button
            onClick={() => setFilterType('reading')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filterType === 'reading'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Đọc ({readingSubs.length})
          </button>
          <button
            onClick={() => setFilterType('listening')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filterType === 'listening'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Nghe ({listeningSubs.length})
          </button>
          <button
            onClick={() => setFilterType('writing')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filterType === 'writing'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Viết ({writingSubs.length})
          </button>
          <button
            onClick={() => setFilterType('speaking')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filterType === 'speaking'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Nói ({speakingSubs.length})
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {/* Render Writing Submissions */}
        {(filterType === 'all' || filterType === 'writing') &&
          writingSubs.map((sub) => {
            const isExpanded = expandedId === sub.id;
            const dateStr = new Date(sub.created_at).toLocaleDateString([], {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            });

            return (
              <div
                key={sub.id}
                className="rounded-2xl border transition-all overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div
                  onClick={() => setExpandedId(isExpanded ? null : sub.id)}
                  className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/50 dark:border-blue-900/50 flex flex-col items-center justify-center">
                      <span className="text-[10px] text-slate-500 font-semibold">WRITING</span>
                      <span className="text-base font-black text-blue-600 dark:text-blue-400 leading-none">
                        {formatBandScore(sub.overall_band_raw)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{sub.prompt_title}</h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {dateStr}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="w-3.5 h-3.5" /> {sub.word_count} từ
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {Math.round(sub.duration_seconds / 60)} phút
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3">
                    <div className="flex gap-1 text-xs">
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                        TR: {formatBandScore(sub.sub_scores_raw.tr)}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                        CC: {formatBandScore(sub.sub_scores_raw.cc)}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                        LR: {formatBandScore(sub.sub_scores_raw.lr)}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                        GRA: {formatBandScore(sub.sub_scores_raw.gra)}
                      </span>
                    </div>
                    <div className="text-slate-400">
                      {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 space-y-3">
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Bài viết của bạn:</h5>
                      <p className="font-serif text-sm leading-relaxed p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 whitespace-pre-wrap">
                        {sub.essay_text}
                      </p>
                    </div>
                    {sub.upgraded_essay && (
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5">
                          Bản nâng cấp Band 6.5:
                        </h5>
                        <p className="font-serif text-sm leading-relaxed p-3.5 rounded-xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/40 whitespace-pre-wrap">
                          {sub.upgraded_essay}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

        {/* Render Speaking Submissions */}
        {(filterType === 'all' || filterType === 'speaking') &&
          speakingSubs.map((sub) => {
            const isExpanded = expandedId === sub.id;
            const dateStr = new Date(sub.created_at).toLocaleDateString([], {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            });

            return (
              <div
                key={sub.id}
                className="rounded-2xl border transition-all overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div
                  onClick={() => setExpandedId(isExpanded ? null : sub.id)}
                  className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/50 dark:border-amber-900/50 flex flex-col items-center justify-center">
                      <span className="text-[10px] text-amber-700 dark:text-amber-400 font-semibold">SPEAKING</span>
                      <span className="text-base font-black text-amber-600 dark:text-amber-400 leading-none">
                        {formatBandScore(sub.overall_band_raw)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{sub.question}</h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {dateStr}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {sub.duration_seconds}s
                        </span>
                        <span className="flex items-center gap-1">
                          <Mic className="w-3.5 h-3.5" /> {sub.words_per_minute} WPM
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3">
                    <div className="flex gap-1 text-xs">
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                        FC: {formatBandScore(sub.sub_scores_raw.fc)}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                        PR: {formatBandScore(sub.sub_scores_raw.pr)}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                        LR: {formatBandScore(sub.sub_scores_raw.lr)}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                        GRA: {formatBandScore(sub.sub_scores_raw.gra)}
                      </span>
                    </div>
                    <div className="text-slate-400">
                      {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 space-y-3">
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Văn bản đã nói (STT):</h5>
                      <p className="font-serif text-sm leading-relaxed p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        &ldquo;{sub.transcript}&rdquo;
                      </p>
                    </div>

                    {sub.area_upgrade && (
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1.5">
                          Mẫu trả lời A.R.E.A Band 6.5:
                        </h5>
                        <div className="space-y-1.5 text-xs font-serif p-3.5 rounded-xl bg-amber-50/30 dark:bg-amber-950/20 border border-amber-200/40 dark:border-amber-900/30">
                          <div><strong>[A] Answer:</strong> {sub.area_upgrade.answer}</div>
                          <div><strong>[R] Reason:</strong> {sub.area_upgrade.reason}</div>
                          <div><strong>[E] Example:</strong> {sub.area_upgrade.example}</div>
                          <div><strong>[A] Alternative:</strong> {sub.area_upgrade.alternative}</div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

        {/* Render Reading Submissions */}
        {(filterType === 'all' || filterType === 'reading') &&
          readingSubs.map((sub) => {
            const dateStr = new Date(sub.created_at).toLocaleDateString([], {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            });

            return (
              <div
                key={sub.id}
                className="rounded-2xl border transition-all overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-default hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-900/50 flex flex-col items-center justify-center">
                      <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">READING</span>
                      <span className="text-base font-black text-emerald-600 dark:text-emerald-400 leading-none">
                        {sub.score}/{sub.total_questions}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{sub.passage_title}</h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {dateStr}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {Math.round(sub.duration_seconds / 60)} phút
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="w-3.5 h-3.5" /> {Math.round((sub.score / sub.total_questions) * 100)}% đúng
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        {/* Render Listening Submissions */}
        {(filterType === 'all' || filterType === 'listening') &&
          listeningSubs.map((sub) => {
            const dateStr = new Date(sub.created_at).toLocaleDateString([], {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            });

            return (
              <div
                key={sub.id}
                className="rounded-2xl border transition-all overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-default hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-900/50 flex flex-col items-center justify-center">
                      <span className="text-[10px] text-purple-700 dark:text-purple-400 font-semibold">LISTENING</span>
                      <span className="text-base font-black text-purple-600 dark:text-purple-400 leading-none">
                        {sub.score}/{sub.total_questions}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{sub.passage_title}</h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {dateStr}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {Math.round(sub.duration_seconds / 60)} phút
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="w-3.5 h-3.5" /> {Math.round((sub.score / sub.total_questions) * 100)}% đúng
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
