import { CEFRLevel } from './types';

export interface GrammarNode {
  id: string;
  level: CEFRLevel;
  title_vi: string;
  title_en: string;
  prerequisites: string[]; // List of grammar node IDs that must be learned before this
}

export const GRAMMAR_PROGRESSION: GrammarNode[] = [
  // A1 Level
  { id: 'g_a1_1', level: 'A1', title_vi: 'Thì hiện tại đơn với động từ To Be', title_en: 'Present Simple with To Be', prerequisites: [] },
  { id: 'g_a1_2', level: 'A1', title_vi: 'Đại từ nhân xưng & Tính từ sở hữu', title_en: 'Subject Pronouns & Possessive Adjectives', prerequisites: ['g_a1_1'] },
  { id: 'g_a1_3', level: 'A1', title_vi: 'Thì hiện tại đơn với Động từ thường', title_en: 'Present Simple with Action Verbs', prerequisites: ['g_a1_1', 'g_a1_2'] },
  { id: 'g_a1_4', level: 'A1', title_vi: 'Danh từ số ít & số nhiều', title_en: 'Singular & Plural Nouns', prerequisites: [] },
  { id: 'g_a1_5', level: 'A1', title_vi: 'Thì hiện tại tiếp diễn', title_en: 'Present Continuous', prerequisites: ['g_a1_3'] },
  
  // A2 Level
  { id: 'g_a2_1', level: 'A2', title_vi: 'Thì quá khứ đơn (To Be & Action Verbs)', title_en: 'Past Simple', prerequisites: ['g_a1_3', 'g_a1_5'] },
  { id: 'g_a2_2', level: 'A2', title_vi: 'Thì quá khứ tiếp diễn', title_en: 'Past Continuous', prerequisites: ['g_a2_1'] },
  { id: 'g_a2_3', level: 'A2', title_vi: 'Câu so sánh hơn & so sánh nhất', title_en: 'Comparatives & Superlatives', prerequisites: ['g_a1_4'] },
  { id: 'g_a2_4', level: 'A2', title_vi: 'Thì hiện tại hoàn thành', title_en: 'Present Perfect', prerequisites: ['g_a2_1'] },
  { id: 'g_a2_5', level: 'A2', title_vi: 'Động từ khuyết thiếu cơ bản (can, could, should)', title_en: 'Basic Modal Verbs', prerequisites: ['g_a1_3'] },

  // B1 Level
  { id: 'g_b1_1', level: 'B1', title_vi: 'Thì quá khứ hoàn thành', title_en: 'Past Perfect', prerequisites: ['g_a2_4'] },
  { id: 'g_b1_2', level: 'B1', title_vi: 'Câu bị động (Hiện tại & Quá khứ)', title_en: 'Passive Voice (Present & Past)', prerequisites: ['g_a1_3', 'g_a2_1'] },
  { id: 'g_b1_3', level: 'B1', title_vi: 'Câu điều kiện Loại 0 & Loại 1', title_en: 'Conditionals Type 0 & 1', prerequisites: ['g_a1_3'] },
  { id: 'g_b1_4', level: 'B1', title_vi: 'Câu điều kiện Loại 2', title_en: 'Conditionals Type 2', prerequisites: ['g_b1_3', 'g_a2_1'] },
  { id: 'g_b1_5', level: 'B1', title_vi: 'Mệnh đề quan hệ xác định', title_en: 'Defining Relative Clauses', prerequisites: [] },

  // B2 Level
  { id: 'g_b2_1', level: 'B2', title_vi: 'Câu điều kiện Loại 3 & Hỗn hợp', title_en: 'Conditionals Type 3 & Mixed', prerequisites: ['g_b1_4', 'g_b1_1'] },
  { id: 'g_b2_2', level: 'B2', title_vi: 'Câu bị động (Nâng cao & Khách quan)', title_en: 'Advanced Passive Voice', prerequisites: ['g_b1_2'] },
  { id: 'g_b2_3', level: 'B2', title_vi: 'Mệnh đề quan hệ không xác định & Rút gọn', title_en: 'Non-defining & Reduced Relative Clauses', prerequisites: ['g_b1_5'] },
  { id: 'g_b2_4', level: 'B2', title_vi: 'Cấu trúc đảo ngữ', title_en: 'Inversion', prerequisites: ['g_b1_1'] },
  { id: 'g_b2_5', level: 'B2', title_vi: 'Câu giả định', title_en: 'Subjunctive Mood', prerequisites: ['g_a2_5'] }
];
