export type ExamType = 'ielts' | 'toeic' | 'vstep';

export interface QuestionBankItem {
  id: string;
  exam: ExamType;
  skill: 'reading' | 'listening' | 'writing' | 'speaking';
  part_or_task: string;
  content: any; // Dynamic content based on skill
  difficulty?: 'easy' | 'medium' | 'hard';
}
