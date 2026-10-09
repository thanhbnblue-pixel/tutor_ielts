import { useState, useEffect } from 'react';
import actionPlanData from '@/data/action_plan.json';

export type Task = { id: string; title: string };

type StreakData = {
  streak: number;
  lastCompletedDate: string; // YYYY-MM-DD
  dailyProgress: {
    date: string; // YYYY-MM-DD
    tasks: string[]; // completed task IDs
  };
};

const getTodayStr = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const getDayOfWeek = () => new Date().getDay().toString();

export function useDailyQuests() {
  const [streak, setStreak] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Load today's tasks
    const dayOfWeek = getDayOfWeek();
    const todayTasks = (actionPlanData.week1 as any)[dayOfWeek] || [];
    setTasks(todayTasks);

    // 2. Load and validate streak data from localStorage
    const saved = localStorage.getItem('ielts_streak_data');
    const todayStr = getTodayStr();

    let data: StreakData = saved
      ? JSON.parse(saved)
      : { streak: 0, lastCompletedDate: '', dailyProgress: { date: todayStr, tasks: [] } };

    // Reset daily progress if it's a new day
    if (data.dailyProgress.date !== todayStr) {
      data.dailyProgress = { date: todayStr, tasks: [] };
    }

    // Check streak reset logic
    if (data.lastCompletedDate) {
      const lastDate = new Date(data.lastCompletedDate);
      const todayDate = new Date(todayStr);
      // Reset hours to 0 to only compare dates
      lastDate.setHours(0, 0, 0, 0);
      todayDate.setHours(0, 0, 0, 0);
      
      const diffTime = Math.abs(todayDate.getTime() - lastDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      // If gap is more than 1 day, reset streak
      if (diffDays > 1) {
        data.streak = 0;
        data.lastCompletedDate = '';
      }
    }

    setStreak(data.streak);
    setCompletedTaskIds(data.dailyProgress.tasks);
    setMounted(true);
    
    // Save validated state back
    localStorage.setItem('ielts_streak_data', JSON.stringify(data));
  }, []);

  const toggleTask = (taskId: string) => {
    setCompletedTaskIds(prev => {
      const isCompleted = prev.includes(taskId);
      const newCompleted = isCompleted ? prev.filter(id => id !== taskId) : [...prev, taskId];
      
      // Compute new streak logic
      const saved = localStorage.getItem('ielts_streak_data');
      if (saved) {
        const data: StreakData = JSON.parse(saved);
        const todayStr = getTodayStr();
        
        data.dailyProgress.tasks = newCompleted;
        
        // If 100% completed today
        if (newCompleted.length === tasks.length && tasks.length > 0) {
          if (data.lastCompletedDate !== todayStr) {
            data.streak += 1;
            data.lastCompletedDate = todayStr;
          }
        } else {
          // If un-checked and was marked completed today
          if (data.lastCompletedDate === todayStr) {
            data.streak = Math.max(0, data.streak - 1);
            data.lastCompletedDate = ''; 
          }
        }
        
        setStreak(data.streak);
        localStorage.setItem('ielts_streak_data', JSON.stringify(data));
        
        // Notify other components (Header) via storage event trick or custom event
        window.dispatchEvent(new CustomEvent('streak_updated', { detail: data.streak }));
      }
      
      return newCompleted;
    });
  };

  return { streak, tasks, completedTaskIds, toggleTask, mounted };
}
