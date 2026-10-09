'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Headphones,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Clock,
  Volume2,
  HelpCircle,
  Compass,
} from 'lucide-react';
import { Language } from '@/lib/i18n';

interface ListeningQuestion {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: number;
  timestampSeconds: number; // For Audio Timestamp Sync
  transcriptSnippet: string;
  explanation: string;
}

const SAMPLE_LISTENING_DATA = {
  title: 'Cambridge Section 1: Community Sports Club Enquiry',
  audioDurationSeconds: 80,
  fullTranscript: `Receptionist: Good morning, City Sports Centre, how can I help you today?
Customer: Hello! I'm calling to enquire about the weekend badminton sessions for adults. Could you tell me what time they commence?
Receptionist: Certainly! The adult badminton club meets every Saturday morning at 9:30 AM sharp, and each session runs for two hours until 11:30.
Customer: That sounds great. And what is the entrance fee for non-members?
Receptionist: For registered members, it's 5 pounds, but for casual non-members, the admission fee is 8 pounds per session.
Customer: Wonderful. Do I need to bring my own equipment, or do you provide racquets?
Receptionist: We have racquets available for free hire, but players are strictly required to bring their own non-marking footwear. Clean trainers with white soles are mandatory to protect the polished timber floor.
Customer: Understood. And where is the nearest parking facility located?
Receptionist: There is a multi-storey car park located on King Street, approximately three minutes' walk from our main entrance.`,
  questions: [
    {
      id: 1,
      questionText: 'What time does the Saturday adult badminton session start?',
      options: ['8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM'],
      correctAnswer: 2,
      timestampSeconds: 15,
      transcriptSnippet: 'The adult badminton club meets every Saturday morning at 9:30 AM sharp.',
      explanation: 'Người tiếp tân nói rõ: "meets every Saturday morning at 9:30 AM sharp" -> 9:30 AM là đáp án chính xác.',
    },
    {
      id: 2,
      questionText: 'How much does a casual non-member have to pay per session?',
      options: ['5 pounds', '8 pounds', '11 pounds', '15 pounds'],
      correctAnswer: 1,
      timestampSeconds: 32,
      transcriptSnippet: "For registered members, it's 5 pounds, but for casual non-members, the admission fee is 8 pounds per session.",
      explanation: 'Bẫy số tiền: 5 pounds là dành cho hội viên (members), còn khách vãng lai (non-members) phải trả 8 pounds.',
    },
    {
      id: 3,
      questionText: 'What item must players bring with them?',
      options: ['Badminton racquets', 'Shuttlecocks', 'Non-marking shoes', 'A membership card'],
      correctAnswer: 2,
      timestampSeconds: 50,
      transcriptSnippet: 'We have racquets available for free hire, but players are strictly required to bring their own non-marking footwear.',
      explanation: 'Vợt được mượn miễn phí, nhưng giày đế mềm không để lại vết (non-marking footwear) là bắt buộc phải tự mang theo.',
    },
    {
      id: 4,
      questionText: 'Where is the car park situated?',
      options: ['King Street', 'Queen Road', 'Market Square', 'High Avenue'],
      correctAnswer: 0,
      timestampSeconds: 68,
      transcriptSnippet: 'There is a multi-storey car park located on King Street, approximately three minutes’ walk.',
      explanation: 'Bãi đỗ xe nhiều tầng nằm ở phố King Street -> Chọn phương án King Street.',
    },
  ],
};

interface ListeningPracticeProps {
  lang: Language;
}

export default function ListeningPractice({ lang }: ListeningPracticeProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [activeSyncTimestamp, setActiveSyncTimestamp] = useState<number | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const duration = SAMPLE_LISTENING_DATA.audioDurationSeconds;

  // Custom audio playback simulation
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000 / playbackRate);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackRate, duration]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const seek = (seconds: number) => {
    setCurrentTime(Math.max(0, Math.min(duration, seconds)));
  };

  const jumpToTimestamp = (seconds: number) => {
    seek(seconds);
    setActiveSyncTimestamp(seconds);
    setIsPlaying(true);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const calculateScore = () => {
    let score = 0;
    SAMPLE_LISTENING_DATA.questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const score = calculateScore();

  return (
    <div className="space-y-6">
      {/* Header Card with Audio Player */}
      <div
        className="rounded-2xl p-6 border shadow-sm space-y-5"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-300 dark:border-indigo-800">
              IELTS Listening • Audio Timestamp Sync Engine
            </span>
            <h2 className="text-lg sm:text-xl font-bold mt-2">{SAMPLE_LISTENING_DATA.title}</h2>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> Thời lượng: 01:20
          </div>
        </div>

        {/* Custom Audio Controller */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
          {/* Progress bar */}
          <div className="space-y-1">
            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={(e) => seek(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer h-1.5 rounded-lg"
            />
            <div className="flex justify-between text-xs font-mono text-slate-500">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2">
              <button
                onClick={() => seek(currentTime - 5)}
                className="px-2.5 py-1.5 rounded-lg border text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
                title="Lùi 5 giây"
              >
                -5s
              </button>

              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-all cursor-pointer shadow-md shadow-blue-500/20"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>

              <button
                onClick={() => seek(currentTime + 5)}
                className="px-2.5 py-1.5 rounded-lg border text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
                title="Tua tới 5 giây"
              >
                +5s
              </button>
            </div>

            {/* Playback speed selector */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-slate-500 font-semibold">Tốc độ:</span>
              {[0.8, 1.0, 1.2].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setPlaybackRate(rate)}
                  className={`px-2 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                    playbackRate === rate
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4 pt-2">
          {SAMPLE_LISTENING_DATA.questions.map((q, idx) => {
            const userAns = userAnswers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            const isSyncActive = activeSyncTimestamp === q.timestampSeconds;

            return (
              <div
                key={q.id}
                className={`p-5 rounded-xl border transition-all ${
                  isSyncActive
                    ? 'border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    Câu {idx + 1} (Thời điểm audio: ~{formatTime(q.timestampSeconds)})
                  </span>
                  {isSubmitted && (
                    <span>
                      {isCorrect ? (
                        <span className="text-xs text-green-600 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Đúng
                        </span>
                      ) : (
                        <span className="text-xs text-red-500 font-bold flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> Sai
                        </span>
                      )}
                    </span>
                  )}
                </div>

                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {q.questionText}
                </h4>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, i) => {
                    const isChecked = userAns === i;
                    let optClass = 'border-slate-200 dark:border-slate-800 hover:border-slate-400';

                    if (isSubmitted) {
                      if (i === q.correctAnswer) {
                        optClass = 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300 font-bold';
                      } else if (isChecked && !isCorrect) {
                        optClass = 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 line-through';
                      }
                    } else if (isChecked) {
                      optClass = 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold';
                    }

                    return (
                      <div
                        key={i}
                        onClick={() => {
                          if (!isSubmitted) setUserAnswers((p) => ({ ...p, [q.id]: i }));
                        }}
                        className={`p-3 rounded-lg border text-xs cursor-pointer transition-all flex items-center gap-2 ${optClass}`}
                      >
                        <span className="w-5 h-5 rounded flex items-center justify-center font-bold text-[10px] bg-slate-100 dark:bg-slate-800">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span>{opt}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Audio Timestamp Sync and Explanation */}
                {isSubmitted && (
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <button
                      onClick={() => jumpToTimestamp(q.timestampSeconds)}
                      className="py-1.5 px-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5 cursor-pointer hover:bg-indigo-100"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      Tua audio đến đoạn trả lời ({formatTime(q.timestampSeconds)})
                    </button>

                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                      <div className="font-serif italic text-slate-800 dark:text-slate-200">
                        &ldquo;{q.transcriptSnippet}&rdquo;
                      </div>
                      <div className="text-blue-600 dark:text-blue-400 font-sans pt-1">
                        💡 <strong>Giải thích:</strong> {q.explanation}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit Action */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          {!isSubmitted ? (
            <button
              onClick={() => setIsSubmitted(true)}
              disabled={Object.keys(userAnswers).length === 0}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer shadow-md shadow-blue-500/20"
            >
              Nộp bài & Kiểm tra đáp án ({Object.keys(userAnswers).length}/{SAMPLE_LISTENING_DATA.questions.length} câu)
            </button>
          ) : (
            <div className="w-full flex items-center justify-between">
              <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                Kết quả nghe: {score}/{SAMPLE_LISTENING_DATA.questions.length} câu đúng
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setUserAnswers({});
                  setActiveSyncTimestamp(null);
                  seek(0);
                }}
                className="px-3 py-1.5 rounded-lg border text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer flex items-center gap-1"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <RotateCcw className="w-3.5 h-3.5" /> Nghe & làm lại
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
