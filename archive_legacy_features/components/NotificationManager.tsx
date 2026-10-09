'use client';

import { useEffect } from 'react';
import { getStreakData } from '@/lib/gamification';

export default function NotificationManager() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if notifications are supported and permitted
    const checkNotification = () => {
      if (!('Notification' in window)) return;
      
      if (Notification.permission === 'granted') {
        const streak = getStreakData();
        const today = new Date().toISOString().split('T')[0];
        
        if (streak.last_study_date !== today) {
          // Hasn't studied today, send reminder if it's evening (e.g. after 18:00)
          const now = new Date();
          if (now.getHours() >= 18) {
            new Notification('Tới giờ học IELTS rồi! ⏰', {
              body: `Bạn đang có chuỗi ${streak.current_streak} ngày. Đừng để đứt chuỗi nhé! 🔥`,
              icon: '/favicon.ico'
            });
          }
        }
      }
    };

    // Ask for permission if default
    if ('Notification' in window && Notification.permission === 'default') {
      // Best practice is to ask on user interaction, but we'll request it on load for demo
      setTimeout(() => {
        Notification.requestPermission();
      }, 5000); // Ask after 5 seconds
    }

    // Check every hour while app is open
    const interval = setInterval(checkNotification, 1000 * 60 * 60);
    checkNotification(); // check immediately

    return () => clearInterval(interval);
  }, []);

  return null; // This is a headless component
}
