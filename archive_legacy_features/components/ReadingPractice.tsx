'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Search,
  Eye,
} from 'lucide-react';
import { Language } from '@/lib/i18n';
import { getActiveSlotId, saveReadingSubmission, saveErrorLog } from '@/lib/storage';

interface ReadingQuestion {
  id: number;
  questionText: string;
  type: 'TFNG' | 'MCQ';
  options: string[];
  correctAnswer: number; // index
  evidenceSentence: string;
  paraphrasePairs: { questionWord: string; passageWord: string }[];
  explanation: string;
}

const SAMPLE_PASSAGE = {
  title: 'The Rise of Vertical and Urban Farming',
  paragraphs: [
    {
      id: 'p1',
      text: 'By the year 2050, nearly 70% of the Earth’s population is projected to reside in urban centers. Feeding this swelling urban populace represents one of the most formidable logistical and ecological hurdles of the modern era. Traditional agriculture consumes immense tracts of arable land and accounts for nearly 70% of global freshwater withdrawals. In response to these pressing constraints, researchers and urban designers are increasingly looking upward, championing the concept of vertical farming.',
    },
    {
      id: 'p2',
      text: 'Vertical farming involves cultivating crops in vertically stacked layers, often integrated into skyscrapers, repurposed shipping containers, or abandoned warehouses. Unlike conventional open-field farms that are vulnerable to droughts, hailstorms, and seasonal shifts, indoor vertical facilities maintain an entirely controlled environment. Temperature, humidity, light wavelengths, and nutrient delivery are strictly modulated via algorithmic automation.',
    },
    {
      id: 'p3',
      text: 'Chief among the ecological benefits of vertical farming is water conservation. Through closed-loop aeroponic and hydroponic systems, plant roots receive misted nutrients while excess moisture is captured, condensed, and recycled. Consequently, a commercial vertical farm requires up to 95% less water than traditional arable acreage. Furthermore, because crops grow inside sterile, pest-free enclosures, synthetic chemical pesticides are rendered entirely redundant.',
    },
    {
      id: 'p4',
      text: 'Nevertheless, significant impediments hinder the universal adoption of vertical agriculture. Primary among these is the staggering expenditure on electricity needed to power artificial LED grow lights around the clock. Unless facilities are powered by dedicated renewable energy installations, their carbon footprint can paradoxically exceed that of field-grown produce transported from rural regions. Economic analysts also point out that high real estate prices in downtown city cores make growing low-margin staple crops like wheat and rice financially unviable.',
    },
  ],
};

const SAMPLE_QUESTIONS: ReadingQuestion[] = [
  {
    id: 1,
    questionText: 'By 2050, traditional agriculture will completely stop consuming global freshwater.',
    type: 'TFNG',
    options: ['TRUE', 'FALSE', 'NOT GIVEN'],
    correctAnswer: 1, // FALSE
    evidenceSentence: 'Traditional agriculture consumes immense tracts of arable land and accounts for nearly 70% of global freshwater withdrawals.',
    paraphrasePairs: [
      { questionWord: 'completely stop consuming', passageWord: 'accounts for nearly 70% (mâu thuẫn)' },
    ],
    explanation: 'Bài đọc nêu nông nghiệp truyền thống hiện chiếm 70% lượng nước ngọt, không có thông tin nào nói nó sẽ "hoàn toàn ngừng tiêu thụ" vào năm 2050. Mệnh đề mâu thuẫn trực tiếp -> Chọn FALSE.',
  },
  {
    id: 2,
    questionText: 'Vertical farms protect crops from extreme meteorological events.',
    type: 'TFNG',
    options: ['TRUE', 'FALSE', 'NOT GIVEN'],
    correctAnswer: 0, // TRUE
    evidenceSentence: 'Unlike conventional open-field farms that are vulnerable to droughts, hailstorms, and seasonal shifts, indoor vertical facilities maintain an entirely controlled environment.',
    paraphrasePairs: [
      { questionWord: 'extreme meteorological events', passageWord: 'droughts, hailstorms, and seasonal shifts' },
      { questionWord: 'protect crops', passageWord: 'maintain an entirely controlled environment' },
    ],
    explanation: 'Bài đọc xác nhận nông trại thẳng đứng kiểm soát hoàn toàn môi trường, không bị ảnh hưởng bởi hạn hán và mưa đá -> Chọn TRUE.',
  },
  {
    id: 3,
    questionText: 'Commercial vertical farms reduce water usage primarily by using:',
    type: 'MCQ',
    options: [
      'Chemical pesticides that absorb moisture',
      'Closed-loop systems that condense and reuse moisture',
      'Natural rainfall collected from skyscraper rooftops',
      'Synthetic soil imported from rural areas',
    ],
    correctAnswer: 1,
    evidenceSentence: 'Through closed-loop aeroponic and hydroponic systems, plant roots receive misted nutrients while excess moisture is captured, condensed, and recycled.',
    paraphrasePairs: [
      { questionWord: 'reduce water usage', passageWord: 'requires up to 95% less water' },
      { questionWord: 'closed-loop systems', passageWord: 'excess moisture is captured, condensed, and recycled' },
    ],
    explanation: 'Đoạn 3 khẳng định hệ thống khép kín (closed-loop aeroponic and hydroponic) thu hồi, ngưng tụ và tái chế hơi nước dư thừa -> Phương án B đúng.',
  },
  {
    id: 4,
    questionText: 'What is highlighted as a major financial obstacle to growing staple crops like wheat in vertical farms?',
    type: 'MCQ',
    options: [
      'Lack of skilled agricultural laborers in cities',
      'Strict municipal zoning laws regarding plant height',
      'Exorbitant real estate costs in urban centers',
      'The complete refusal of consumers to purchase indoor produce',
    ],
    correctAnswer: 2,
    evidenceSentence: 'Economic analysts also point out that high real estate prices in downtown city cores make growing low-margin staple crops like wheat and rice financially unviable.',
    paraphrasePairs: [
      { questionWord: 'major financial obstacle', passageWord: 'financially unviable' },
      { questionWord: 'exorbitant real estate costs', passageWord: 'high real estate prices in downtown city cores' },
    ],
    explanation: 'Đoạn 4 chỉ rõ giá bất động sản đắt đỏ tại trung tâm đô thị khiến việc trồng các loại cây lương thực giá rẻ như lúa mì không có lãi -> Phương án C đúng.',
  },
];

interface ReadingPracticeProps {
  lang: Language;
}

export default function ReadingPractice({ lang }: ReadingPracticeProps) {
  const [mobileTab, setMobileTab] = useState<'passage' | 'questions'>('questions');
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [activeEvidence, setActiveEvidence] = useState<ReadingQuestion | null>(null);

  const [startTime] = useState<number>(Date.now());

  const handleSelect = (qId: number, optIdx: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    SAMPLE_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const score = calculateScore();
    const slotId = getActiveSlotId();
    const durationSeconds = Math.floor((Date.now() - startTime) / 1000);
    
    // Save to History
    saveReadingSubmission({
      id: `reading_${Date.now()}`,
      slot_id: slotId,
      passage_title: SAMPLE_PASSAGE.title,
      score,
      total_questions: SAMPLE_QUESTIONS.length,
      duration_seconds: durationSeconds,
      created_at: new Date().toISOString(),
    });

    // Save to Error Log for Radar Chart
    SAMPLE_QUESTIONS.forEach((q) => {
      saveErrorLog(slotId, {
        question_id: `reading_${q.id}`,
        category: 'reading',
        sub_category: q.type,
        is_correct: userAnswers[q.id] === q.correctAnswer,
        timestamp: new Date().toISOString(),
        exam_track: 'ielts'
      });
    });
  };

  const handleHighlightEvidence = (q: ReadingQuestion) => {
    setActiveEvidence(q);
    // Switch to passage view on mobile so user sees the highlighted text
    setMobileTab('passage');
  };

  const score = calculateScore();

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div
        className="rounded-2xl p-6 border shadow-sm"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
              IELTS Academic Reading • Split-Screen Engine
            </span>
            <h2 className="text-lg sm:text-xl font-bold mt-2">{SAMPLE_PASSAGE.title}</h2>
          </div>

          {/* Mobile view toggle (375px baseline per Rule 8) */}
          <div className="flex sm:hidden p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold w-full">
            <button
              onClick={() => setMobileTab('passage')}
              className={`flex-1 py-2 rounded-lg transition-all ${
                mobileTab === 'passage'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Đọc Bài Văn
            </button>
            <button
              onClick={() => setMobileTab('questions')}
              className={`flex-1 py-2 rounded-lg transition-all ${
                mobileTab === 'questions'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Câu Hỏi ({Object.keys(userAnswers).length}/{SAMPLE_QUESTIONS.length})
            </button>
          </div>
        </div>

        {/* Desktop & Mobile Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
          {/* Left Column: Passage Pane (Always visible on desktop, tabbed on mobile) */}
          <div
            className={`lg:col-span-7 space-y-4 rounded-xl p-5 border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/30 overflow-y-auto max-h-[620px] font-serif leading-relaxed text-sm sm:text-base text-slate-800 dark:text-slate-200 ${
              mobileTab === 'passage' ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="sticky top-0 pb-2 mb-2 bg-slate-50/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 text-xs font-sans font-bold text-slate-500 flex items-center justify-between">
              <span>Đoạn văn học thuật Cambridge (450 từ)</span>
              {activeEvidence && (
                <button
                  onClick={() => setActiveEvidence(null)}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Xóa highlight
                </button>
              )}
            </div>

            {SAMPLE_PASSAGE.paragraphs.map((p) => {
              const containsEvidence = activeEvidence && p.text.includes(activeEvidence.evidenceSentence);

              return (
                <p key={p.id} className="text-justify indent-4">
                  {containsEvidence ? (
                    <>
                      {p.text.split(activeEvidence.evidenceSentence)[0]}
                      <mark className="bg-amber-300 dark:bg-amber-500/40 text-slate-950 dark:text-amber-100 px-1 py-0.5 rounded font-bold transition-all shadow-sm">
                        {activeEvidence.evidenceSentence}
                      </mark>
                      {p.text.split(activeEvidence.evidenceSentence)[1]}
                    </>
                  ) : (
                    p.text
                  )}
                </p>
              );
            })}
          </div>

          {/* Right Column: Questions Pane */}
          <div
            className={`lg:col-span-5 space-y-4 overflow-y-auto max-h-[620px] pr-1 ${
              mobileTab === 'questions' ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="space-y-4">
              {SAMPLE_QUESTIONS.map((q, idx) => {
                const isSelected = userAnswers[q.id] !== undefined;
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-sans font-bold text-xs text-blue-600 dark:text-blue-400">
                        Câu {idx + 1} ({q.type})
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

                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {q.questionText}
                    </h4>

                    {/* Options */}
                    <div className="space-y-1.5">
                      {q.options.map((opt, i) => {
                        const checked = userAns === i;
                        let optionStyle = 'border-slate-200 dark:border-slate-800 hover:border-slate-400';

                        if (isSubmitted) {
                          if (i === q.correctAnswer) {
                            optionStyle = 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300 font-bold';
                          } else if (checked && !isCorrect) {
                            optionStyle = 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 line-through';
                          }
                        } else if (checked) {
                          optionStyle = 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold';
                        }

                        return (
                          <div
                            key={i}
                            onClick={() => handleSelect(q.id, i)}
                            className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all flex items-center gap-2 ${optionStyle}`}
                          >
                            <span className="w-5 h-5 rounded flex items-center justify-center font-bold text-[10px] bg-slate-100 dark:bg-slate-800">
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span>{opt}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Evidence & Explanation Card (shown after submit) */}
                    {isSubmitted && (
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                        <button
                          onClick={() => handleHighlightEvidence(q)}
                          className="w-full py-1.5 px-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-[11px] font-bold text-amber-700 dark:text-amber-300 flex items-center justify-center gap-1.5 cursor-pointer hover:bg-amber-100"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          Định vị manh mối trong bài đọc (Evidence Locator)
                        </button>

                        <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-[11px] text-slate-600 dark:text-slate-300 space-y-1">
                          <div className="font-bold text-blue-600 dark:text-blue-400">💡 Giải thích chi tiết:</div>
                          <p>{q.explanation}</p>
                          <div className="font-semibold text-slate-500 pt-1">Bảng từ đồng nghĩa (Paraphrase):</div>
                          {q.paraphrasePairs.map((pair, pIdx) => (
                            <div key={pIdx} className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                              &ldquo;{pair.questionWord}&rdquo; ➔ &ldquo;{pair.passageWord}&rdquo;
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Submit Toolbar */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              {!isSubmitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={Object.keys(userAnswers).length === 0}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer shadow-md shadow-blue-500/20"
                >
                  Nộp bài & Chấm điểm ({Object.keys(userAnswers).length}/{SAMPLE_QUESTIONS.length} câu)
                </button>
              ) : (
                <div className="w-full flex items-center justify-between">
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                    Kết quả: {score}/{SAMPLE_QUESTIONS.length} câu đúng
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setUserAnswers({});
                      setActiveEvidence(null);
                    }}
                    className="px-3 py-1.5 rounded-lg border text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer flex items-center gap-1"
                    style={{ borderColor: 'var(--border-color)' }}
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Làm lại
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
