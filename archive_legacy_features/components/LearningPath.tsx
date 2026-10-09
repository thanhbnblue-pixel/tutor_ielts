'use client';

import React, { useState, useEffect } from 'react';
import { STAGES, StageData } from '@/lib/curriculum';
import { Check, Lock, Play, Star } from 'lucide-react';
import { getProgress, saveProgress } from '@/lib/storage';
import LessonPlayer from './LessonPlayer';
import CheckpointModal from './CheckpointModal';
import { addXP } from '@/lib/gamification';
import { sounds } from '@/lib/sounds';

interface LearningPathProps {
  lang: 'vi' | 'en';
  slotId: number;
}

export default function LearningPath({ lang, slotId }: LearningPathProps) {
  const [progress, setProgress] = useState(getProgress(slotId));
  const [activeLesson, setActiveLesson] = useState<{ stageId: string; unitId: string } | null>(null);
  const [showCheckpoint, setShowCheckpoint] = useState<{ stageId: string; stageIndex: number } | null>(null);
  const [targetExam, setTargetExam] = useState<string>('ielts');

  useEffect(() => {
    setProgress(getProgress(slotId));
    
    const fetchTargetExam = () => {
      import('@/lib/storage').then(({ getProfiles }) => {
        const profiles = getProfiles();
        const myProfile = profiles.find(p => p.slot_id === slotId);
        if (myProfile?.target_exam) {
          setTargetExam(myProfile.target_exam);
        }
      });
    };
    
    fetchTargetExam();

    const handleStorage = (e: any) => {
      let key = e.key;
      if (e instanceof CustomEvent) key = e.detail?.key;
      
      if (key === 'ielts_student_profiles' || key === 'ielts_active_slot') {
        fetchTargetExam();
      }
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('profile_updated', handleStorage as any);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('profile_updated', handleStorage as any);
    };
  }, [slotId]);

  const handleUnitComplete = () => {
    if (!activeLesson) return;
    const { stageId, unitId } = activeLesson;

    const newProgress = { ...progress };
    if (!newProgress[stageId]) {
      newProgress[stageId] = { completedUnits: [], isPassed: false, score: 0 };
    }

    if (!newProgress[stageId].completedUnits.includes(unitId)) {
      newProgress[stageId].completedUnits.push(unitId);
      addXP(50); // XP for completing a unit
      sounds.playComplete();
    }

    saveProgress(newProgress, slotId);
    setProgress(newProgress);
    setActiveLesson(null);
  };

  const handleCheckpointPass = (score: number) => {
    if (!showCheckpoint) return;
    const { stageId } = showCheckpoint;

    const newProgress = { ...progress };
    if (!newProgress[stageId]) {
      newProgress[stageId] = { completedUnits: [], isPassed: false, score: 0 };
    }

    newProgress[stageId].isPassed = true;
    newProgress[stageId].score = score;
    addXP(200); // XP for passing checkpoint
    sounds.playComplete();

    saveProgress(newProgress, slotId);
    setProgress(newProgress);
    setShowCheckpoint(null);
  };

  // Filter STAGES for current track
  const filteredStages = STAGES.filter(s => {
    if (targetExam === 'ielts') {
      return ['stage1', 'stage2', 'stage3', 'stage4'].includes(s.id);
    }
    if (targetExam === 'general') {
      return ['stage1', 'stage2'].includes(s.id); 
      // User says "phát triển từ chương trình cơ bản", we can show stage1, stage2 for now
    }
    if (targetExam === 'toeic') {
      return ['stage1', 'stage2', 'toeic_stage1', 'toeic_stage2'].includes(s.id);
    }
    if (targetExam === 'vstep') {
      return ['stage1', 'stage2', 'vstep_stage1', 'vstep_stage2'].includes(s.id);
    }
    return false;
  }).map(s => {
    // Override titles for shared foundational stages
    if (s.id === 'stage1') return { ...s, name: 'Chặng 1: Nền Tảng Cơ Bản A1' };
    if (s.id === 'stage2') return { ...s, name: 'Chặng 2: Nền Tảng Cơ Bản A2' };
    // Override numbering for TOEIC/VSTEP to continue from Stage 3
    if (s.id === 'toeic_stage1') return { ...s, name: 'Chặng 3: TOEIC Nền Tảng (B1)' };
    if (s.id === 'toeic_stage2') return { ...s, name: 'Chặng 4: TOEIC Mục Tiêu (B2+)' };
    if (s.id === 'vstep_stage1') return { ...s, name: 'Chặng 3: VSTEP Bậc 3 (B1)' };
    if (s.id === 'vstep_stage2') return { ...s, name: 'Chặng 4: VSTEP Bậc 4 (B2)' };
    return s;
  });

  if (activeLesson) {
    const stage = filteredStages.find(s => s.id === activeLesson.stageId);
    const unit = stage?.units.find(u => u.id === activeLesson.unitId);
    if (!unit) return null;
    
    return (
      <LessonPlayer
        lang={lang}
        unit={unit}
        onClose={() => setActiveLesson(null)}
        onComplete={(unitId, score) => handleUnitComplete()}
      />
    );
  }

  // Determine the highest unlocked stage (0-indexed)
  let highestUnlockedStageIndex = 0;
  for (let i = 0; i < filteredStages.length; i++) {
    const stage = filteredStages[i];
    if (progress[stage.id]?.isPassed) {
      highestUnlockedStageIndex = i + 1;
    } else {
      break;
    }
  }

  return (
    <div className="max-w-md mx-auto pb-32">
      {filteredStages.map((stage, stageIndex) => {
        // Hide future stages completely
        if (slotId !== 999 && stageIndex > highestUnlockedStageIndex) return null;

        const isStageUnlocked = slotId === 999 || stageIndex <= highestUnlockedStageIndex;
        const stageProgress = progress[stage.id] || { completedUnits: [], isPassed: false, score: 0 };
        const isStagePassed = stageProgress.isPassed || slotId === 999;
        const allUnitsCompleted = stage.units.every((u) => stageProgress.completedUnits.includes(u.id)) || slotId === 999;

        return (
          <div key={stage.id} className="mb-12">
            {/* Stage Header */}
            <div className={`mb-8 p-6 rounded-3xl text-white shadow-sm flex items-center justify-between ${isStagePassed ? 'bg-emerald-600' : 'bg-blue-600'}`}>
              <div>
                <h2 className="text-xl font-black">{stage.name}</h2>
                <p className="text-sm opacity-90">{stage.description}</p>
              </div>
              {isStagePassed && (
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                </div>
              )}
            </div>

            {/* Units Bubble Path */}
            <div className="relative py-4 flex flex-col items-center">
              {/* Path connecting line */}
              <div className="absolute top-0 bottom-0 w-24 border-l-4 border-r-4 border-transparent">
                {/* SVG curve could go here, for now we use CSS zig-zag */}
              </div>

              {stage.units.length === 0 && (
                <div className="text-center py-8 px-4 bg-slate-100 dark:bg-slate-800/50 rounded-2xl w-full border border-dashed border-slate-300 dark:border-slate-700">
                  <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-6 h-6 text-slate-400" />
                  </div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Chặng này đang được biên soạn</h3>
                  <p className="text-xs text-slate-500">Vui lòng quay lại Stage 1 để tiếp tục học. Nội dung mới sẽ sớm ra mắt.</p>
                </div>
              )}

              {stage.units.map((unit, index) => {
                const isCompleted = stageProgress.completedUnits.includes(unit.id) || slotId === 999;
                // The current unit is the first uncompleted unit in the current stage
                const isCurrent = !isCompleted && 
                  (index === 0 || stageProgress.completedUnits.includes(stage.units[index - 1].id) || slotId === 999) &&
                  isStageUnlocked;
                const isLocked = !isCompleted && !isCurrent && slotId !== 999;

                // Zig-zag offset: 0 -> center, 1 -> right, 2 -> center, 3 -> left
                const pattern = index % 4;
                let translateClass = '';
                if (pattern === 1) translateClass = 'translate-x-12';
                else if (pattern === 3) translateClass = '-translate-x-12';

                return (
                  <div key={unit.id} className={`relative mb-8 ${translateClass} transition-transform duration-500`}>
                    <button
                      onClick={() => !isLocked && setActiveLesson({ stageId: stage.id, unitId: unit.id })}
                      disabled={isLocked}
                      className={`
                        w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center relative
                        border-b-[6px] transition-all active:translate-y-1 active:border-b-0
                        ${isCompleted ? 'bg-emerald-500 border-emerald-700 text-white' : ''}
                        ${isCurrent ? 'bg-blue-500 border-blue-700 text-white animate-bounce' : ''}
                        ${isLocked ? 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-400' : ''}
                      `}
                    >
                      {/* Decorative rings for current */}
                      {isCurrent && (
                        <>
                          <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-ping opacity-75"></div>
                          <div className="absolute inset-[-12px] rounded-full border-4 border-blue-200 dark:border-blue-900"></div>
                        </>
                      )}
                      
                      {isCompleted && <Check className="w-8 h-8" strokeWidth={3} />}
                      {isCurrent && <Play className="w-8 h-8 ml-1" fill="currentColor" />}
                      {isLocked && <Lock className="w-6 h-6" />}
                    </button>
                    {/* Unit Label tooltip */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-32 text-center">
                      <p className={`text-xs font-bold ${isLocked ? 'text-slate-400' : 'text-slate-700 dark:text-slate-300'}`}>
                        {unit.title}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Checkpoint Node */}
              <div className="mt-12 w-full flex justify-center relative">
                {(() => {
                  const isCheckpointMock = stage.checkpoint.questions.length === 1 && stage.checkpoint.questions[0].question.includes('cập nhật');
                  const canAccessCheckpoint = (allUnitsCompleted || isStagePassed) && !isCheckpointMock;
                  return (
                    <>
                    <button
                      onClick={() => setShowCheckpoint({ stageId: stage.id, stageIndex })}
                      disabled={!canAccessCheckpoint}
                      className={`
                    w-24 h-24 rounded-2xl rotate-45 flex items-center justify-center relative
                    border-b-[8px] transition-all active:translate-y-2 active:border-b-0
                    ${isStagePassed ? 'bg-yellow-400 border-yellow-600' : ''}
                    ${allUnitsCompleted && !isStagePassed ? 'bg-orange-500 border-orange-700 animate-pulse' : ''}
                    ${!allUnitsCompleted && !isStagePassed ? 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700' : ''}
                  `}
                >
                  <div className="-rotate-45 text-center flex flex-col items-center">
                    {isStagePassed ? (
                      <Star className="w-10 h-10 text-white fill-white" />
                    ) : !allUnitsCompleted ? (
                      <Lock className="w-8 h-8 text-slate-400" />
                    ) : (
                      <div className="font-black text-white text-lg">TEST</div>
                    )}
                  </div>
                    </button>
                    <div className="absolute top-[110px] text-center w-full">
                      <p className="text-sm font-black text-slate-700 dark:text-slate-300">
                        {stage.checkpoint.title}
                        {isCheckpointMock && <span className="block text-xs font-normal text-red-500 mt-1">(Đang cập nhật)</span>}
                      </p>
                    </div>
                  </>
                  );
                })()}
              </div>
            </div>
          </div>
        );
      })}

      {showCheckpoint && (
        <CheckpointModal
          checkpoint={STAGES.find(s => s.id === showCheckpoint.stageId)!.checkpoint}
          onClose={() => setShowCheckpoint(null)}
          onPass={() => handleCheckpointPass(100)}
        />
      )}
    </div>
  );
}
