export type ExamTrack = 'general' | 'ielts' | 'toeic' | 'vstep';
export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export interface StudentProfile {
  slot_id: number; // 1 to 5
  name: string;
  pin_hash: string; // SHA-256 hex string
  target_band_raw: number; // int multiplied by 10 (e.g., 65 for 6.5)
  target_exam?: ExamTrack;
  target_score?: string;
  current_level?: CEFRLevel;
  streak_days?: number;
  last_study_date?: string; // ISO 8601
  created_at: string; // ISO 8601
}

export interface WritingCorrection {
  original: string;
  corrected: string;
  type: 'grammar' | 'vocab' | 'spelling' | 'cohesion';
  explanation: string;
}

export interface WritingSubmission {
  id: string;
  slot_id: number;
  task_type: 1 | 2;
  prompt_title: string;
  essay_text: string;
  word_count: number; // int
  duration_seconds: number; // int
  overall_band_raw: number; // int multiplied by 10 (e.g., 55 for 5.5)
  sub_scores_raw: {
    tr: number; // int x 10
    cc: number; // int x 10
    lr: number; // int x 10
    gra: number; // int x 10
  };
  feedback: {
    tr: string;
    cc: string;
    lr: string;
    gra: string;
  };
  corrections: WritingCorrection[];
  upgraded_essay: string;
  created_at: string; // ISO 8601 string
}

export interface SpeakingSubmission {
  id: string;
  slot_id: number;
  part: number; // 1, 2, 3
  topic: string;
  question: string;
  transcript: string;
  duration_seconds: number; // int
  words_per_minute: number; // int
  overall_band_raw: number; // int x 10 (e.g., 60 for 6.0)
  sub_scores_raw: {
    fc: number; // Fluency & Coherence (int x 10)
    pr: number; // Pronunciation (int x 10)
    lr: number; // Lexical Resource (int x 10)
    gra: number; // Grammatical Range & Accuracy (int x 10)
  };
  feedback: {
    fc: string;
    pr: string;
    lr: string;
    gra: string;
  };
  hesitations: string[];
  area_upgrade: {
    answer: string;
    reason: string;
    example: string;
    alternative: string;
  };
  created_at: string; // ISO 8601 string
}

export interface ReadingSubmission {
  id: string;
  slot_id: number;
  passage_title: string;
  score: number;
  total_questions: number;
  duration_seconds: number;
  created_at: string; // ISO 8601
}

export interface ListeningSubmission {
  id: string;
  slot_id: number;
  passage_title: string;
  score: number;
  total_questions: number;
  duration_seconds: number;
  created_at: string; // ISO 8601
}

const DEFAULT_PROFILES: StudentProfile[] = [
  { slot_id: 1, name: 'Học viên 1', pin_hash: 'a4753cdbf6b66c993183a8a3de18429531c636b72e6816aa8a698bfae1c1ffbe', target_band_raw: 65, created_at: '2026-09-26T00:00:00Z' }, // PIN: 1234
  { slot_id: 2, name: 'Học viên 2', pin_hash: 'a4753cdbf6b66c993183a8a3de18429531c636b72e6816aa8a698bfae1c1ffbe', target_band_raw: 65, created_at: '2026-09-26T00:00:00Z' },
  { slot_id: 3, name: 'Học viên 3', pin_hash: 'a4753cdbf6b66c993183a8a3de18429531c636b72e6816aa8a698bfae1c1ffbe', target_band_raw: 65, created_at: '2026-09-26T00:00:00Z' },
  { slot_id: 4, name: 'Học viên 4', pin_hash: 'a4753cdbf6b66c993183a8a3de18429531c636b72e6816aa8a698bfae1c1ffbe', target_band_raw: 65, created_at: '2026-09-26T00:00:00Z' },
  { slot_id: 999, name: 'Admin (Unlock All)', pin_hash: 'a4753cdbf6b66c993183a8a3de18429531c636b72e6816aa8a698bfae1c1ffbe', target_band_raw: 99, target_exam: 'ielts', created_at: '2026-09-26T00:00:00Z' }, // PIN: 1234
];

export async function hashPin(pin: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(pin + '_ielts_salt_2026');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export function getProfiles(): StudentProfile[] {
  if (typeof window === 'undefined') return DEFAULT_PROFILES;
  try {
    const data = localStorage.getItem('ielts_student_profiles');
    if (data) {
      const profiles: StudentProfile[] = JSON.parse(data);
      let needsSave = false;
      // Auto-inject or patch admin profile
      const adminProfile = profiles.find(p => p.slot_id === 999);
      if (!adminProfile) {
        profiles.push(DEFAULT_PROFILES.find(p => p.slot_id === 999)!);
        needsSave = true;
      } else if (adminProfile.pin_hash !== 'a4753cdbf6b66c993183a8a3de18429531c636b72e6816aa8a698bfae1c1ffbe') {
        adminProfile.pin_hash = 'a4753cdbf6b66c993183a8a3de18429531c636b72e6816aa8a698bfae1c1ffbe';
        needsSave = true;
      }
      
      // Also patch slot 1 to 4 if they have the old wrong hash
      profiles.forEach(p => {
        if (p.pin_hash === '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4') {
          p.pin_hash = 'a4753cdbf6b66c993183a8a3de18429531c636b72e6816aa8a698bfae1c1ffbe';
          needsSave = true;
        }
      });

      if (needsSave) {
        saveProfiles(profiles);
      }
      return profiles;
    }
  } catch (e) {
    console.error('Failed to load profiles:', e);
  }
  return DEFAULT_PROFILES;
}

export function saveProfiles(profiles: StudentProfile[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('ielts_student_profiles', JSON.stringify(profiles));
}

export function getActiveSlotId(): number {
  if (typeof window === 'undefined') return 1;
  const val = localStorage.getItem('ielts_active_slot');
  return val ? parseInt(val, 10) : 1;
}

export function setActiveSlotId(slotId: number): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('ielts_active_slot', slotId.toString());
}

function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(16);
}

export function getSessionVerified(slotId: number): boolean {
  if (typeof window === 'undefined') return false;
  const token = localStorage.getItem(`ielts_session_verified_${slotId}`);
  if (!token) return false;
  
  const profiles = getProfiles();
  const profile = profiles.find(p => p.slot_id === slotId);
  if (!profile) return false;
  
  const dateStr = new Date().toISOString().split('T')[0];
  const expectedToken = simpleHash(profile.pin_hash + dateStr);
  
  return token === expectedToken;
}

export function setSessionVerified(slotId: number, verified: boolean): void {
  if (typeof window === 'undefined') return;
  if (verified) {
    const profiles = getProfiles();
    const profile = profiles.find(p => p.slot_id === slotId);
    if (profile) {
      const dateStr = new Date().toISOString().split('T')[0];
      const token = simpleHash(profile.pin_hash + dateStr);
      localStorage.setItem(`ielts_session_verified_${slotId}`, token);
    }
  } else {
    localStorage.removeItem(`ielts_session_verified_${slotId}`);
  }
}

export function getWritingSubmissions(slotId: number): WritingSubmission[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(`ielts_writing_submissions_slot_${slotId}`);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read submissions:', e);
  }
  return [];
}

export function saveWritingSubmission(submission: WritingSubmission): void {
  if (typeof window === 'undefined') return;
  const current = getWritingSubmissions(submission.slot_id);
  const updated = [submission, ...current];
  localStorage.setItem(`ielts_writing_submissions_slot_${submission.slot_id}`, JSON.stringify(updated));
  
  // Async sync to Supabase
  import('./supabase').then(({ supabase }) => {
    supabase.from('submissions_writing').insert([submission]).then(({ error }) => {
      if (error) console.error('Failed to sync writing to Supabase:', error);
    });
  }).catch(e => console.error('Failed to load supabase client', e));
}

export function getWritingDraft(slotId: number, promptId: string): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(`ielts_draft_slot_${slotId}_prompt_${promptId}`) || '';
}

export function saveWritingDraft(slotId: number, promptId: string, text: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`ielts_draft_slot_${slotId}_prompt_${promptId}`, text);
}

export function getSpeakingSubmissions(slotId: number): SpeakingSubmission[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(`ielts_speaking_submissions_slot_${slotId}`);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read speaking submissions:', e);
  }
  return [];
}

export function saveSpeakingSubmission(submission: SpeakingSubmission): void {
  if (typeof window === 'undefined') return;
  const current = getSpeakingSubmissions(submission.slot_id);
  const updated = [submission, ...current];
  localStorage.setItem(`ielts_speaking_submissions_slot_${submission.slot_id}`, JSON.stringify(updated));
  
  // Async sync to Supabase
  import('./supabase').then(({ supabase }) => {
    supabase.from('submissions_speaking').insert([submission]).then(({ error }) => {
      if (error) console.error('Failed to sync speaking to Supabase:', error);
    });
  }).catch(e => console.error('Failed to load supabase client', e));
}

export async function syncHistoryWithSupabase(slotId: number): Promise<void> {
  if (typeof window === 'undefined') return;
  try {
    const { supabase } = await import('./supabase');
    const [writingRes, speakingRes] = await Promise.all([
      supabase.from('submissions_writing').select('*').eq('slot_id', slotId).order('created_at', { ascending: false }),
      supabase.from('submissions_speaking').select('*').eq('slot_id', slotId).order('created_at', { ascending: false })
    ]);

    if (writingRes.data && writingRes.data.length > 0) {
      localStorage.setItem(`ielts_writing_submissions_slot_${slotId}`, JSON.stringify(writingRes.data));
    }
    if (speakingRes.data && speakingRes.data.length > 0) {
      localStorage.setItem(`ielts_speaking_submissions_slot_${slotId}`, JSON.stringify(speakingRes.data));
    }
  } catch (err) {
    console.error('Failed to sync history from Supabase:', err);
  }
}

export function getReadingSubmissions(slotId: number): ReadingSubmission[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(`ielts_reading_submissions_slot_${slotId}`);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read reading submissions:', e);
  }
  return [];
}

export function saveReadingSubmission(submission: ReadingSubmission): void {
  if (typeof window === 'undefined') return;
  const current = getReadingSubmissions(submission.slot_id);
  const updated = [submission, ...current];
  localStorage.setItem(`ielts_reading_submissions_slot_${submission.slot_id}`, JSON.stringify(updated));
}

export function getListeningSubmissions(slotId: number): ListeningSubmission[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(`ielts_listening_submissions_slot_${slotId}`);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read listening submissions:', e);
  }
  return [];
}

export function saveListeningSubmission(submission: ListeningSubmission): void {
  if (typeof window === 'undefined') return;
  const current = getListeningSubmissions(submission.slot_id);
  const updated = [submission, ...current];
  localStorage.setItem(`ielts_listening_submissions_slot_${submission.slot_id}`, JSON.stringify(updated));
}

// Format raw primitive score into UI display string (Rule 9)
export function formatBandScore(raw: number): string {
  return (raw / 10).toFixed(1);
}

export interface StudentProgress {
  slot_id: number;
  completed_units: number[];
  active_unit_id: number;
  passed_checkpoints: number[];
  unit_scores: Record<number, number>;
}

export function getStudentProgress(slotId: number): StudentProgress {
  const defaultProgress: StudentProgress = {
    slot_id: slotId,
    completed_units: [],
    active_unit_id: 1,
    passed_checkpoints: [],
    unit_scores: {},
  };
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const raw = localStorage.getItem(`ielts_student_progress_slot_${slotId}`);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read progress:', e);
  }
  return defaultProgress;
}

export function saveStudentProgress(slotId: number, progress: StudentProgress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`ielts_student_progress_slot_${slotId}`, JSON.stringify(progress));
}

export interface StageProgress {
  completedUnits: string[];
  isPassed: boolean;
  score: number;
}

export function getProgress(slotId: number): Record<string, StageProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const data = localStorage.getItem(`ielts_progress_v2_${slotId}`);
    if (data) return JSON.parse(data);
  } catch (e) {}
  return {};
}

export function saveProgress(progress: Record<string, StageProgress>, slotId: number) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`ielts_progress_v2_${slotId}`, JSON.stringify(progress));
}

export interface ErrorLogEntry {
  question_id: string;
  category: 'grammar' | 'vocab' | 'reading' | 'listening' | 'writing' | 'speaking';
  sub_category: string;
  is_correct: boolean;
  timestamp: string; // ISO 8601
  exam_track: string;
}

export function getErrorLogs(slotId: number): ErrorLogEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(`ielts_error_log_${slotId}`);
    if (data) return JSON.parse(data);
  } catch (e) {}
  return [];
}

export function saveErrorLog(slotId: number, entry: ErrorLogEntry) {
  if (typeof window === 'undefined') return;
  const current = getErrorLogs(slotId);
  current.push(entry);
  localStorage.setItem(`ielts_error_log_${slotId}`, JSON.stringify(current));
}



export function getSRSItems(slotId: number): any[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(`ielts_srs_${slotId}`);
    if (data) return JSON.parse(data);
  } catch (e) {}
  return [];
}

export function saveSRSItems(slotId: number, items: any[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`ielts_srs_${slotId}`, JSON.stringify(items));
}
