export interface VocabularyItem {
  word: string;
  ipa: string;
  part_of_speech: string;
  meaning_vi: string;
  example_en: string;
  example_vi: string;
}

export interface QuizQuestion {
  id: number;
  type?: string;
  question: string;
  options: string[];
  correct_answer: number;
  explanation_vi: string;
  is_cambridge_trap?: boolean;
  trap_explanation?: string;
}

export interface GrammarLesson {
  point?: string;
  structure?: string;
  example_en?: string;
  example_vi?: string;
  
  // Legacy fields
  title?: string;
  formula?: string;
  explanation_vi: string;
  examples?: Array<{ en: string; vi: string }>;
  quiz?: QuizQuestion[];
}

export interface MicroSkillsPractice {
  type?: string;
  title?: string;
  content?: string;
  questions?: QuizQuestion[];

  // Legacy fields
  reading_title?: string;
  reading_text?: string;
  reading_question?: string;
  reading_options?: string[];
  reading_answer?: number;
  reading_explanation?: string;
  listening_prompt?: string;
  listening_transcript?: string;
  speaking_prompt?: string;
  speaking_sample_idea?: string;
  writing_prompt?: string;
  writing_model_sentence?: string;
}

export type ExamTrack = 'general' | 'ielts' | 'toeic' | 'vstep';
export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export interface CourseUnit {
  id: string;
  stage?: 1 | 2 | 3 | 4; 
  track?: ExamTrack;
  cefr_level?: CEFRLevel;
  can_do_statements?: string[];
  prerequisite_units?: string[];
  title: string;
  topic?: string;
  description_vi?: string;
  description?: string;
  vocabulary: VocabularyItem[];
  grammar: GrammarLesson;
  skills_practice: MicroSkillsPractice;
  unit_review_quiz?: QuizQuestion[];
  quiz?: QuizQuestion[];
}

export interface CheckpointTest {
  id: number; 
  title: string;
  description?: string;
  target_units: number[];
  passing_score: number;
  questions: QuizQuestion[];
  speaking_prompt?: string;
  speaking_sample_idea?: string;
  writing_prompt?: string;
  writing_model_sentence?: string;
}

export interface StageData {
  id: string;
  name: string;
  description: string;
  units: CourseUnit[];
  checkpoint: CheckpointTest;
}
