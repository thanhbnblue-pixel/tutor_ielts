// Centralized i18n object per AGENT_WISDOM.md Rule 5
export type Language = 'vi' | 'en';

export const I18N = {
  vi: {
    app_title: 'IELTS Master 6.5',
    app_tagline: 'Lộ trình cá nhân hóa từ mất gốc (0) lên 6.5 IELTS',
    switch_profile: 'Đổi hồ sơ',
    slot_label: 'Học viên {id}',
    active_user: 'Đang học: {name}',
    pin_prompt: 'Nhập mã PIN 4 số của bạn',
    pin_submit: 'Vào học ngay',
    pin_incorrect: 'Mã PIN chưa chính xác, vui lòng thử lại',
    select_slot: 'Chọn Hồ Sơ Học Tập (Dành cho nhóm 5 người)',
    slot_desc: 'Mỗi học viên có không gian lưu trữ và lịch sử làm bài độc lập.',
    change_pin: 'Đổi mã PIN',
    
    // Tabs
    tab_path: 'Lộ Trình Học (Curriculum)',
    tab_writing: 'Luyện Viết (Writing)',
    tab_speaking: 'Luyện Nói (Speaking)',
    tab_reading: 'Luyện Đọc (Reading)',
    tab_listening: 'Luyện Nghe (Listening)',
    tab_placement: 'Kiểm Tra Đầu Vào',
    tab_history: 'Lịch Sử Tiến Độ',
    
    // Writing Editor
    writing_title: 'IELTS Writing AI Scorer',
    writing_subtitle: 'Chấm điểm Task 1 & Task 2 chuẩn Cambridge kèm sửa lỗi trực tiếp',
    select_prompt: 'Chọn Đề Bài Luyện Tập',
    custom_prompt: 'Hoặc tự nhập đề bài của bạn...',
    target_words: 'Mục tiêu: {min} từ',
    word_count: 'Số từ hiện tại: {count}',
    time_remaining: 'Thời gian còn lại: {min}:{sec}',
    btn_start_timer: 'Bắt đầu bấm giờ',
    btn_pause_timer: 'Tạm dừng',
    btn_submit_writing: 'Nộp bài & Chấm điểm AI',
    btn_submitting: 'AI đang phân tích bài viết ({sec}s)...',
    auto_saved: 'Đã lưu nháp lúc {time}',
    block_paste_label: 'Khóa dán văn bản (Mô phỏng phòng thi thật)',
    draft_restored: 'Đã khôi phục bài viết đang làm dở của bạn',
    
    // Writing Results
    result_overall_band: 'Điểm Overall Band',
    result_criteria: '4 Tiêu chí Cambridge',
    crit_tr: 'Task Response / Achievement',
    crit_cc: 'Coherence & Cohesion',
    crit_lr: 'Lexical Resource',
    crit_gra: 'Grammatical Range & Accuracy',
    inline_diff_title: 'Chi tiết Sửa Lỗi Ngữ Pháp & Từ Vựng (Inline Diff)',
    inline_diff_desc: 'Bấm vào từng từ bị gạch đỏ để xem nguyên tắc ngữ pháp và cách sửa.',
    upgraded_essay_title: 'Bản Nâng Cấp Band 6.5 (Personalized Upgrade)',
    upgraded_essay_desc: 'Được viết lại từ chính luận điểm của bạn với từ nối và cấu trúc học thuật tự nhiên.',
    no_errors_found: 'Tuyệt vời! Không phát hiện lỗi ngữ pháp nghiêm trọng.',
    
    // General
    status_ready: 'Sẵn sàng',
    badge_mvp: 'Bản Thử Nghiệm Ver 1 (Chi Phí 0đ)',
    empty_history: 'Chưa có bài nộp nào. Hãy thử nộp một bài viết đầu tiên!',
    band_score_fmt: 'Band {score}',
  },
  en: {
    app_title: 'IELTS Master 6.5',
    app_tagline: 'Personalized pathway from 0 to 6.5 IELTS',
    switch_profile: 'Switch Profile',
    slot_label: 'Student {id}',
    active_user: 'Studying: {name}',
    pin_prompt: 'Enter your 4-digit PIN',
    pin_submit: 'Start Learning',
    pin_incorrect: 'Incorrect PIN, please try again',
    select_slot: 'Select Student Profile (Max 5 Slots)',
    slot_desc: 'Each student has an independent learning history and storage space.',
    change_pin: 'Change PIN',
    
    // Tabs
    tab_path: 'Learning Path (Curriculum)',
    tab_writing: 'Writing Practice',
    tab_speaking: 'Speaking Practice',
    tab_reading: 'Reading Practice',
    tab_listening: 'Listening Practice',
    tab_placement: 'Placement Test',
    tab_history: 'Progress History',
    
    // Writing Editor
    writing_title: 'IELTS Writing AI Scorer',
    writing_subtitle: 'Grade Task 1 & Task 2 with Cambridge Rubrics & Inline Corrections',
    select_prompt: 'Select Practice Prompt',
    custom_prompt: 'Or enter your own prompt...',
    target_words: 'Target: {min} words',
    word_count: 'Current Words: {count}',
    time_remaining: 'Time remaining: {min}:{sec}',
    btn_start_timer: 'Start Timer',
    btn_pause_timer: 'Pause',
    btn_submit_writing: 'Submit & AI Grade',
    btn_submitting: 'AI Analyzing Essay ({sec}s)...',
    auto_saved: 'Draft auto-saved at {time}',
    block_paste_label: 'Disable Paste (Simulate real exam conditions)',
    draft_restored: 'Restored your in-progress draft',
    
    // Writing Results
    result_overall_band: 'Overall Band Score',
    result_criteria: '4 Cambridge Criteria',
    crit_tr: 'Task Response / Achievement',
    crit_cc: 'Coherence & Cohesion',
    crit_lr: 'Lexical Resource',
    crit_gra: 'Grammatical Range & Accuracy',
    inline_diff_title: 'Detailed Grammar & Vocab Corrections (Inline Diff)',
    inline_diff_desc: 'Click on strikethrough words to see grammatical rules and corrections.',
    upgraded_essay_title: 'Band 6.5 Personalized Upgrade',
    upgraded_essay_desc: 'Rewritten from your exact arguments using natural academic cohesive devices.',
    no_errors_found: 'Excellent! No severe grammatical errors detected.',
    
    // General
    status_ready: 'Ready',
    badge_mvp: 'Ver 1 Trial (0 VND Cost)',
    empty_history: 'No submissions yet. Submit your first essay to see your history!',
    band_score_fmt: 'Band {score}',
  },
};

export function t(lang: Language, key: keyof typeof I18N['vi'], vars: Record<string, string | number> = {}): string {
  const dictionary = I18N[lang] ?? I18N.vi;
  let str = (dictionary[key] ?? I18N.vi[key] ?? key) as string;
  Object.entries(vars).forEach(([k, v]) => {
    str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
  });
  return str;
}
