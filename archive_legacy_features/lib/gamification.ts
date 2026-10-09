import { getActiveSlotId } from './storage';

export interface StreakData {
  current_streak: number;
  longest_streak: number;
  last_study_date: string;
  streak_freeze: number;
  total_xp: number;
  level: number;
  today_xp: number;
  daily_goal: number;
}

const DEFAULT_STREAK: StreakData = {
  current_streak: 0,
  longest_streak: 0,
  last_study_date: '',
  streak_freeze: 1,
  total_xp: 0,
  level: 1,
  today_xp: 0,
  daily_goal: 50,
};

// XP Required for each level
const LEVEL_THRESHOLDS = [0, 100, 500, 1500, 3000, 5000, 8000, 12000, 18000, 25000];

export const getStreakData = (slotId: number = getActiveSlotId()): StreakData => {
  if (typeof window === 'undefined') return DEFAULT_STREAK;
  const data = localStorage.getItem(`ielts_streak_${slotId}`);
  if (!data) return DEFAULT_STREAK;
  try {
    return JSON.parse(data);
  } catch {
    return DEFAULT_STREAK;
  }
};

export const saveStreakData = (data: StreakData, slotId: number = getActiveSlotId()) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`ielts_streak_${slotId}`, JSON.stringify(data));
  window.dispatchEvent(new Event('storage')); // Trigger update across components
};

export const calculateLevel = (xp: number): number => {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) return i + 1;
  }
  return 1;
};

export const getNextLevelXP = (level: number): number => {
  if (level >= LEVEL_THRESHOLDS.length) return LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
  return LEVEL_THRESHOLDS[level];
};

export const checkAndUpdateStreak = () => {
  const data = getStreakData();
  const today = new Date().toISOString().split('T')[0];
  
  if (data.last_study_date === today) {
    return; // Already studied today
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  if (data.last_study_date === yesterdayStr) {
    // Studied yesterday, streak continues! Wait, streak increments when they ACTUALLY study (gain XP).
    // So here we just reset today_xp.
    data.today_xp = 0;
  } else if (data.last_study_date !== '') {
    // Missed a day
    if (data.streak_freeze > 0) {
      data.streak_freeze -= 1;
      // Streak preserved, just reset today xp
      data.today_xp = 0;
      data.last_study_date = yesterdayStr; // Pretend they used the freeze yesterday
    } else {
      // Streak broken
      data.current_streak = 0;
      data.today_xp = 0;
    }
  }

  saveStreakData(data);
};

export const addXP = (amount: number) => {
  const data = getStreakData();
  const today = new Date().toISOString().split('T')[0];

  if (data.last_study_date !== today) {
    // First XP of the day!
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    if (data.last_study_date === yesterdayStr) {
      data.current_streak += 1;
    } else if (data.last_study_date !== '') {
       if (data.streak_freeze > 0) {
          data.streak_freeze -= 1;
          data.current_streak += 1; // Used freeze, so streak continues
       } else {
          data.current_streak = 1; // New streak
       }
    } else {
      data.current_streak = 1; // Very first day
    }
    
    if (data.current_streak > data.longest_streak) {
      data.longest_streak = data.current_streak;
    }
    data.today_xp = 0;
  }

  data.last_study_date = today;
  data.today_xp += amount;
  data.total_xp += amount;
  
  const newLevel = calculateLevel(data.total_xp);
  if (newLevel > data.level) {
    data.level = newLevel;
    // We could trigger a global event here for Level Up UI
    if (typeof window !== 'undefined') {
       window.dispatchEvent(new CustomEvent('level_up', { detail: { level: newLevel } }));
    }
  }

  saveStreakData(data);
};

export const LEVEL_TITLES = [
  'Người Mới Bắt Đầu',
  'Học Viên Chăm Chỉ',
  'Chiến Binh Từ Vựng',
  'Thợ Săn Band',
  'Nhà Ngữ Pháp',
  'Bậc Thầy Reading',
  'Phù Thủy Writing',
  'IELTS Fighter',
  'Band Master',
  'Huyền Thoại 9.0'
];

export const getLevelTitle = (level: number) => {
  return LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)];
};
