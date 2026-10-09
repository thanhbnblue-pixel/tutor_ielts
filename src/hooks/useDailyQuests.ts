import { useState, useEffect } from 'react';
import actionPlanData from '@/data/action_plan.json';

export type Task = { id: string; title: string; description?: string; link?: string };

type StreakData = {
  currentDay: string;
  completedTaskIds: string[];
  lastCompletedDate: string; // YYYY-MM-DD
  previousCompletedDate?: string;
  streak: number;
};

const getTodayStr = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export function useDailyQuests() {
  const [streak, setStreak] = useState(0);
  const [currentDay, setCurrentDay] = useState('day1');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [exam, setExam] = useState<any>(null);
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('ielts_streak_data');
    const todayStr = getTodayStr();

    let data: StreakData = saved
      ? JSON.parse(saved)
      : { streak: 0, lastCompletedDate: '', currentDay: 'day1', completedTaskIds: [] };

    // Migrate from old structure if necessary
    if (!(data as any).currentDay) {
      data.currentDay = 'day1';
      data.completedTaskIds = (data as any).dailyProgress?.tasks || [];
      delete (data as any).dailyProgress;
    }

    if (data.lastCompletedDate) {
      const lastDate = new Date(data.lastCompletedDate);
      const todayDate = new Date(todayStr);
      lastDate.setHours(0, 0, 0, 0);
      todayDate.setHours(0, 0, 0, 0);
      
      const diffTime = todayDate.getTime() - lastDate.getTime();
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays > 1) {
        data.streak = 0;
      }
      
      const currentDayTasks = (actionPlanData as any)[data.currentDay]?.tasks || [];
      if (currentDayTasks.length > 0 && data.completedTaskIds.length === currentDayTasks.length && diffDays > 0) {
        // Advanced to next day
        const dayNum = parseInt(data.currentDay.replace('day', '')) || 1;
        const nextDayNum = dayNum + 1;
        const nextDayStr = `day${nextDayNum}`;
        
        if ((actionPlanData as any)[nextDayStr]) {
          data.currentDay = nextDayStr;
        } else {
          // Loop back to day1 if finished all days
          data.currentDay = 'day1';
        }
        data.completedTaskIds = [];
      }
    }

    setStreak(data.streak);
    setCurrentDay(data.currentDay);
    setTasks((actionPlanData as any)[data.currentDay]?.tasks || []);
    setExam((actionPlanData as any)[data.currentDay]?.exam || null);
    setCompletedTaskIds(data.completedTaskIds);
    setMounted(true);
    
    localStorage.setItem('ielts_streak_data', JSON.stringify(data));
  }, []);

  const toggleTask = (taskId: string) => {
    setCompletedTaskIds(prev => {
      const isCompleted = prev.includes(taskId);
      const newCompleted = isCompleted ? prev.filter(id => id !== taskId) : [...prev, taskId];
      
      const saved = localStorage.getItem('ielts_streak_data');
      if (saved) {
        const data: StreakData = JSON.parse(saved);
        if (!(data as any).currentDay) data.currentDay = currentDay;
        
        data.completedTaskIds = newCompleted;
        const todayStr = getTodayStr();
        const currentDayTasks = (actionPlanData as any)[data.currentDay]?.tasks || [];
        
        if (newCompleted.length === currentDayTasks.length && currentDayTasks.length > 0) {
          if (data.lastCompletedDate !== todayStr) {
            data.streak += 1;
            data.previousCompletedDate = data.lastCompletedDate;
            data.lastCompletedDate = todayStr;
          }
        } else {
          if (data.lastCompletedDate === todayStr) {
            data.streak = Math.max(0, data.streak - 1);
            data.lastCompletedDate = data.previousCompletedDate || ''; 
          }
        }
        
        setStreak(data.streak);
        localStorage.setItem('ielts_streak_data', JSON.stringify(data));
        window.dispatchEvent(new CustomEvent('streak_updated', { detail: data.streak }));
      }
      
      return newCompleted;
    });
  };

  const markTaskCompleted = (taskId: string) => {
    setCompletedTaskIds(prev => {
      if (prev.includes(taskId)) return prev;
      
      const newCompleted = [...prev, taskId];
      const saved = localStorage.getItem('ielts_streak_data');
      if (saved) {
        const data: StreakData = JSON.parse(saved);
        if (!(data as any).currentDay) data.currentDay = currentDay;
        
        data.completedTaskIds = newCompleted;
        const todayStr = getTodayStr();
        const currentDayTasks = (actionPlanData as any)[data.currentDay]?.tasks || [];
        
        if (newCompleted.length === currentDayTasks.length && currentDayTasks.length > 0) {
          if (data.lastCompletedDate !== todayStr) {
            data.streak += 1;
            data.previousCompletedDate = data.lastCompletedDate;
            data.lastCompletedDate = todayStr;
          }
        }
        
        setStreak(data.streak);
        localStorage.setItem('ielts_streak_data', JSON.stringify(data));
        window.dispatchEvent(new CustomEvent('streak_updated', { detail: data.streak }));
      }
      return newCompleted;
    });
  };

  return { streak, currentDay, tasks, exam, completedTaskIds, toggleTask, markTaskCompleted, mounted };
}
