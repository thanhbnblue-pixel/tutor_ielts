'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  AlertCircle,
  Mic,
  MicOff,
  Volume2,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Send,
  HelpCircle,
  Activity,
  Award,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { Language, t } from '@/lib/i18n';
import { SpeakingSubmission } from '@/lib/storage';

import { saveSpeakingSubmission, formatBandScore, getProfiles } from '@/lib/storage';
import { useDailyQuests } from '@/hooks/useDailyQuests';

interface SpeakingExaminerProps {
  lang: 'vi' | 'en';
  slotId: number;
  onSubmissionSuccess?: () => void;
}

interface SpeakingTopic {
  id: string;
  topic: string;
  question: string;
  suggested_points: string[];
}

const DEFAULT_TOPICS: SpeakingTopic[] = [
  {
    id: 'ielts-p1-1',
    topic: 'IELTS Part 1: Hometown',
    question: 'Let\'s talk about your hometown. Where is your hometown? What do you like most about it?',
    suggested_points: ['Location', 'People', 'Food', 'Scenery']
  },
  {
    id: 'ielts-p2-1',
    topic: 'IELTS Part 2: A Memorable Trip',
    question: 'Describe a memorable trip you took. You should say: where you went, who you went with, what you did, and explain why it was memorable.',
    suggested_points: ['Destination', 'Companions', 'Activities', 'Feelings']
  },
  {
    id: 'general-1',
    topic: 'General: Daily Routine',
    question: 'Can you describe your typical daily routine?',
    suggested_points: ['Morning habits', 'Work/Study', 'Evening relaxation']
  }
];

export default function SpeakingExaminer({ lang, slotId, onSubmissionSuccess }: SpeakingExaminerProps) {
  const [targetExam, setTargetExam] = useState<string>('ielts');
  const [topics, setTopics] = useState<SpeakingTopic[]>(DEFAULT_TOPICS);
  const [selectedTopic, setSelectedTopic] = useState<SpeakingTopic | null>(DEFAULT_TOPICS[0]);

  const { exam, markTaskCompleted, mounted } = useDailyQuests();

  useEffect(() => {
    const profiles = getProfiles();
    const myProfile = profiles.find(p => p.slot_id === slotId);
    const examTarget = myProfile?.target_exam || 'ielts';
    setTargetExam(examTarget);
  }, [slotId]);

  useEffect(() => {
    if (mounted && exam?.speaking) {
      setTopics([exam.speaking, ...DEFAULT_TOPICS]);
      setSelectedTopic(exam.speaking);
    } else {
      setTopics(DEFAULT_TOPICS);
      setSelectedTopic(DEFAULT_TOPICS[0]);
    }
  }, [exam, mounted]);

const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordSeconds, setRecordSeconds] = useState<number>(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlayingRecorded, setIsPlayingRecorded] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitDuration, setSubmitDuration] = useState<number>(0);
  const [result, setResult] = useState<SpeakingSubmission | null>(null);
  const [volumeLevel, setVolumeLevel] = useState<number>(0);
  const [isSpeakingQuestion, setIsSpeakingQuestion] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [micError, setMicError] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Native browser Text-to-Speech for Examiner question (100% 0 VND)
  const speakQuestion = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    if (isSpeakingQuestion) {
      window.speechSynthesis.cancel();
      setIsSpeakingQuestion(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance((selectedTopic?.question || ""));
    utterance.lang = 'en-GB'; // British English for IELTS flavor
    utterance.rate = 0.95;
    utterance.onstart = () => setIsSpeakingQuestion(true);
    utterance.onend = () => setIsSpeakingQuestion(false);
    utterance.onerror = () => setIsSpeakingQuestion(false);

    window.speechSynthesis.speak(utterance);
  };

  // Start Web Audio Recording with live frequency analyzer
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicError(null);
      audioChunksRef.current = [];

      // Determine supported mime-type (iOS Safari prefers mp4, Chrome prefers webm)
      let mimeType = 'audio/webm;codecs=opus';
      if (!MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
        if (MediaRecorder.isTypeSupported('audio/mp4')) {
          mimeType = 'audio/mp4';
        } else if (MediaRecorder.isTypeSupported('audio/webm')) {
          mimeType = 'audio/webm';
        } else {
          mimeType = '';
        }
      }

      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;

      // Audio analysis for real-time visualizer waveform
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      audioContextRef.current = audioCtx;
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
      source.connect(analyser);
      analyserRef.current = analyser;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      const updateVolume = () => {
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) sum += dataArray[i];
        const avg = sum / dataArray.length;
        setVolumeLevel(Math.min(100, Math.round((avg / 128) * 100)));
        animFrameRef.current = requestAnimationFrame(updateVolume);
      };
      updateVolume();

      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const finalBlob = new Blob(audioChunksRef.current, { type: recorder.mimeType || 'audio/webm' });
        setAudioBlob(finalBlob);
        const url = URL.createObjectURL(finalBlob);
        setAudioUrl(url);

        // Stop all tracks to turn off mic indicator
        stream.getTracks().forEach((track) => track.stop());
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        setVolumeLevel(0);
      };

      recorder.start(250); // Slice every 250ms
      setIsRecording(true);
      setRecordSeconds(0);
      setResult(null);

      timerIntervalRef.current = setInterval(() => {
        setRecordSeconds((prev) => {
          if (prev >= 60) {
            stopRecording();
            return 60;
          }
          return prev + 1;
        });
      }, 1000);
    } catch (err: unknown) {
      console.error('Mic access error:', err);
      setMicError('Không thể truy cập Microphone. Vui lòng cấp quyền trong cài đặt trình duyệt để tiếp tục luyện nói.');
      alert('Không thể mở micro. Vui lòng cấp quyền truy cập micro cho trình duyệt trên thiết bị của bạn!');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
  };

  const togglePlayRecorded = () => {
    if (!audioPlayerRef.current || !audioUrl) return;
    if (isPlayingRecorded) {
      audioPlayerRef.current.pause();
      setIsPlayingRecorded(false);
    } else {
      audioPlayerRef.current.play();
      setIsPlayingRecorded(true);
    }
  };

  const handleSubmit = async () => {
    if (!audioBlob && recordSeconds < 3) {
      alert('Đoạn ghi âm quá ngắn (tối thiểu 3 giây).');
      return;
    }

    setIsSubmitting(true);
    setApiError(null);
    setSubmitDuration(0);
    const interval = setInterval(() => setSubmitDuration((prev) => prev + 1), 1000);

    try {
      let base64Audio = '';
      if (audioBlob) {
        const arrayBuffer = await audioBlob.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);
        let binary = '';
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        base64Audio = btoa(binary);
      }

      const res = await fetch('/api/speaking/grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: (selectedTopic?.topic || ""),
          question: (selectedTopic?.question || ""),
          duration_seconds: recordSeconds,
          audio_base64: base64Audio,
          mime_type: audioBlob?.type || 'audio/webm',
        }),
      });

      const data = await res.json();
      clearInterval(interval);
      setIsSubmitting(false);

      if (!res.ok) {
        throw new Error(data.error || 'Lỗi server');
      }

      const submission: SpeakingSubmission = {
        id: 'spk_' + Date.now(),
        slot_id: slotId,
        part: 1,
        topic: (selectedTopic?.topic || ""),
        question: (selectedTopic?.question || ""),
        transcript: data.transcript || '',
        duration_seconds: recordSeconds,
        words_per_minute: data.words_per_minute || 110,
        overall_band_raw: Math.round((data.overall_band || 5.5) * 10),
        sub_scores_raw: {
          fc: Math.round((data.sub_scores?.fc || 5.5) * 10),
          pr: Math.round((data.sub_scores?.pr || 5.0) * 10),
          lr: Math.round((data.sub_scores?.lr || 5.5) * 10),
          gra: Math.round((data.sub_scores?.gra || 5.5) * 10),
        },
        feedback: data.feedback || { fc: '', pr: '', lr: '', gra: '' },
        hesitations: data.hesitations || [],
        area_upgrade: data.area_upgrade || { answer: '', reason: '', example: '', alternative: '' },
        created_at: new Date().toISOString(),
      };

      saveSpeakingSubmission(submission);
      setResult(submission);
      
      // Auto-complete daily quest if applicable
      if (exam?.speaking?.taskId && selectedTopic?.id === exam.speaking.id) {
        markTaskCompleted(exam.speaking.taskId);
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

  const copyAreaUpgrade = () => {
    if (!result?.area_upgrade) return;
    const fullText = `${result.area_upgrade.answer} ${result.area_upgrade.reason} ${result.area_upgrade.example} ${result.area_upgrade.alternative}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Question Card */}
      <div
        className="rounded-2xl p-6 border shadow-sm"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-800">
              IELTS Speaking Part 1 AI Examiner
            </span>
            <h2 className="text-lg sm:text-xl font-bold mt-2">Chủ đề: {(selectedTopic?.topic || "")}</h2>
          </div>
          <select
            value={(selectedTopic?.id || "")}
            onChange={(e) => {
              const found = topics.find((t) => t.id === e.target.value);
              if (found) {
                setSelectedTopic(found);
                setAudioBlob(null);
                setAudioUrl(null);
                setResult(null);
                setApiError(null);
              }
            }}
            disabled={!!exam?.speaking}
            className="px-3 py-2 text-sm rounded-xl border bg-transparent font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed"
            style={{ borderColor: 'var(--border-color)' }}
          >
            {topics.map((t) => (
              <option key={t.id} value={t.id} className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900">
                {t.topic}
              </option>
            ))}
          </select>
        </div>

        {/* Examiner Question & TTS button */}
        <div className="my-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4">
          <p className="font-serif text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed italic">
            &ldquo;{(selectedTopic?.question || "")}&rdquo;
          </p>
          <button
            onClick={speakQuestion}
            className={`p-3 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
              isSpeakingQuestion
                ? 'bg-amber-500 text-white animate-pulse'
                : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
            style={{ borderColor: 'var(--border-color)' }}
            title="Nghe giọng giám khảo đọc câu hỏi"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>

        {/* Suggested Points */}
        <div className="text-xs text-slate-500 flex flex-wrap items-center gap-2">
          <span className="font-semibold">Gợi ý ý tưởng:</span>
          {(selectedTopic?.suggested_points || []).map((pt, i) => (
            <span key={i} className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              • {pt}
            </span>
          ))}
        </div>
      </div>

      {/* Recording Studio & Waveform Visualizer */}
      <div
        className="rounded-2xl p-8 border shadow-sm text-center space-y-6"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
        }}
      >
        {micError && (
          <div className="text-sm font-medium text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20 text-left flex items-start gap-2">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p>{micError}</p>
          </div>
        )}

        {apiError && (
          <div className="text-sm font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 p-4 rounded-xl border border-amber-200 dark:border-amber-800 text-left flex items-start gap-2 animate-in fade-in zoom-in duration-300">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p>{apiError}</p>
          </div>
        )}
        
        {/* Animated Waveform Visualizer */}
        <div className="h-16 flex items-center justify-center gap-1.5 max-w-xs mx-auto">
          {[...Array(16)].map((_, i) => {
            const barHeight = isRecording
              ? Math.max(8, Math.min(60, (volumeLevel * (Math.sin(i * 0.5 + Date.now() * 0.005) + 1.2))))
              : 6;
            return (
              <div
                key={i}
                className="w-1.5 rounded-full transition-all duration-75"
                style={{
                  height: `${barHeight}px`,
                  backgroundColor: isRecording ? '#ef4444' : 'var(--border-color)',
                }}
              />
            );
          })}
        </div>

        {/* Big Touch-Friendly Mic Button (>= 56px per Rule 8) */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`w-20 h-20 rounded-full flex items-center justify-center text-white transition-all shadow-xl cursor-pointer ${
              isRecording
                ? 'bg-red-500 hover:bg-red-600 ring-8 ring-red-500/20 animate-pulse'
                : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
            }`}
            aria-label={isRecording ? 'Dừng thu âm' : 'Bắt đầu thu âm'}
          >
            {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
          </button>

          <div className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300">
            {isRecording ? (
              <span className="text-red-500 flex items-center gap-1.5 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Đang thu âm: 00:{recordSeconds.toString().padStart(2, '0')} / 00:60
              </span>
            ) : audioBlob ? (
              <span className="text-green-600 dark:text-green-400 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Đã thu âm ({recordSeconds}s)
              </span>
            ) : (
              'Bấm vào micro để bắt đầu nói'
            )}
          </div>
        </div>

        {/* Audio playback controls when recording is done */}
        {audioUrl && !isRecording && (
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <audio
              ref={audioPlayerRef}
              src={audioUrl}
              onEnded={() => setIsPlayingRecorded(false)}
              className="hidden"
            />
            <button
              onClick={togglePlayRecorded}
              className="px-4 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              style={{ borderColor: 'var(--border-color)' }}
            >
              {isPlayingRecorded ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlayingRecorded ? 'Tạm dừng nghe lại' : 'Nghe lại giọng của bạn'}
            </button>
            <button
              onClick={() => {
                setAudioBlob(null);
                setAudioUrl(null);
                setRecordSeconds(0);
              }}
              className="px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <RotateCcw className="w-3.5 h-3.5" /> Thu âm lại
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Đang phân tích ({submitDuration}s)...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Chấm điểm bài nói
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Speaking Evaluation Result */}
      {result && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Score Overview Card */}
          <div
            className="rounded-2xl p-6 border shadow-sm"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase">IELTS Speaking Official Evaluation</span>
                <h3 className="text-2xl font-black mt-1 flex items-center gap-2">
                  Overall: Band {formatBandScore(result.overall_band_raw)}
                </h3>
                <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-500" />
                  Tốc độ nói: <strong className="text-slate-800 dark:text-slate-200">{result.words_per_minute} WPM</strong>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600">
                    {result.words_per_minute >= 110 && result.words_per_minute <= 145 ? 'Chuẩn Cambridge' : 'Cần tối ưu nhịp điệu'}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="text-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 min-w-16">
                  <div className="text-xs text-slate-500 font-semibold">FC</div>
                  <div className="text-base font-bold text-blue-600 dark:text-blue-400">
                    {formatBandScore(result.sub_scores_raw.fc)}
                  </div>
                </div>
                <div className="text-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 min-w-16">
                  <div className="text-xs text-slate-500 font-semibold">PR</div>
                  <div className="text-base font-bold text-blue-600 dark:text-blue-400">
                    {formatBandScore(result.sub_scores_raw.pr)}
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

            {/* Spoken Transcript Card */}
            <div className="my-5 p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Văn bản đã nhận diện (Speech-to-Text):
              </div>
              <p className="font-serif text-base leading-relaxed text-slate-800 dark:text-slate-200">
                &ldquo;{result.transcript}&rdquo;
              </p>
              {result.hesitations && result.hesitations.length > 0 && (
                <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Phát hiện từ chêm / khoảng ngập ngừng: {result.hesitations.join(', ')}
                </div>
              )}
            </div>

            {/* 4 Criteria Feedback Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                  Độ trôi chảy & Mạch lạc (FC): Band {formatBandScore(result.sub_scores_raw.fc)}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{result.feedback.fc}</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                  Phát âm & Ngữ điệu (PR): Band {formatBandScore(result.sub_scores_raw.pr)}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{result.feedback.pr}</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                  Vốn từ vựng (LR): Band {formatBandScore(result.sub_scores_raw.lr)}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{result.feedback.lr}</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                  Ngữ pháp & Độ chính xác (GRA): Band {formatBandScore(result.sub_scores_raw.gra)}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{result.feedback.gra}</p>
              </div>
            </div>
          </div>

          {/* Model Answer Upgrade according to A.R.E.A framework */}
          <div
            className="rounded-2xl p-6 border shadow-sm space-y-4"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
            }}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  Câu Trả Lời Nâng Cấp Band 6.5 (Mô hình A.R.E.A)
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Phát triển ý tưởng của bạn theo cấu trúc 4 bước chuẩn Cambridge: Answer - Reason - Example - Alternative
                </p>
              </div>
              <button
                onClick={copyAreaUpgrade}
                className="px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                style={{ borderColor: 'var(--border-color)' }}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Đã sao chép' : 'Sao chép'}
              </button>
            </div>

            <div className="space-y-3 font-serif text-sm">
              <div className="p-3.5 rounded-xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/40">
                <span className="font-bold text-xs uppercase px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-sans mr-2">
                  [A] Answer
                </span>
                <span className="text-slate-800 dark:text-slate-200">{result.area_upgrade.answer}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/40">
                <span className="font-bold text-xs uppercase px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-sans mr-2">
                  [R] Reason
                </span>
                <span className="text-slate-800 dark:text-slate-200">{result.area_upgrade.reason}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/40">
                <span className="font-bold text-xs uppercase px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 font-sans mr-2">
                  [E] Example
                </span>
                <span className="text-slate-800 dark:text-slate-200">{result.area_upgrade.example}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/40">
                <span className="font-bold text-xs uppercase px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-sans mr-2">
                  [A] Alternative
                </span>
                <span className="text-slate-800 dark:text-slate-200">{result.area_upgrade.alternative}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
