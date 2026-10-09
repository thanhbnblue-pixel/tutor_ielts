// Theme system using CSS Custom Properties per AGENT_WISDOM.md Rule 4
export type ThemeName = 'light' | 'dark';

export interface ThemeColors {
  '--bg-primary': string;
  '--bg-secondary': string;
  '--bg-card': string;
  '--text-primary': string;
  '--text-secondary': string;
  '--accent-primary': string;
  '--accent-hover': string;
  '--border-color': string;
  '--error-bg': string;
  '--error-text': string;
  '--success-bg': string;
  '--success-text': string;
  '--warning-bg': string;
  '--warning-text': string;
}

export const THEMES: Record<ThemeName, ThemeColors> = {
  light: {
    '--bg-primary': '#f8fafc',
    '--bg-secondary': '#f1f5f9',
    '--bg-card': '#ffffff',
    '--text-primary': '#0f172a',
    '--text-secondary': '#475569',
    '--accent-primary': '#2563eb',
    '--accent-hover': '#1d4ed8',
    '--border-color': '#e2e8f0',
    '--error-bg': '#fef2f2',
    '--error-text': '#dc2626',
    '--success-bg': '#f0fdf4',
    '--success-text': '#16a34a',
    '--warning-bg': '#fffbeb',
    '--warning-text': '#d97706',
  },
  dark: {
    '--bg-primary': '#090d16',
    '--bg-secondary': '#111827',
    '--bg-card': '#1a2234',
    '--text-primary': '#f8fafc',
    '--text-secondary': '#94a3b8',
    '--accent-primary': '#3b82f6',
    '--accent-hover': '#60a5fa',
    '--border-color': '#2a3449',
    '--error-bg': '#450a0a',
    '--error-text': '#f87171',
    '--success-bg': '#052e16',
    '--success-text': '#4ade80',
    '--warning-bg': '#451a03',
    '--warning-text': '#fbbf24',
  },
};

export function applyTheme(name: ThemeName): void {
  if (typeof window === 'undefined') return;
  const theme = THEMES[name] ?? THEMES.light;
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
  document.documentElement.classList.toggle('dark', name === 'dark');
  localStorage.setItem('ielts_theme', name);
}

export function getInitialTheme(): ThemeName {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('ielts_theme') as ThemeName;
  if (saved && (saved === 'light' || saved === 'dark')) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
