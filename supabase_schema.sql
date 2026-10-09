-- ====================================================================
-- IELTS MASTER 6.5 - SUPABASE DATABASE SCHEMA (0 ĐỒNG)
-- Tuân thủ Rule 9 AGENT_WISDOM.md: Lưu trữ kiểu dữ liệu nguyên thủy (int, timestamptz)
-- ====================================================================

-- 1. BẢNG HỒ SƠ 5 HỌC VIÊN
CREATE TABLE IF NOT EXISTS public.profiles (
    slot_id INT PRIMARY KEY CHECK (slot_id BETWEEN 1 AND 5),
    name TEXT NOT NULL,
    pin_hash TEXT NOT NULL,
    target_band_raw INT NOT NULL DEFAULT 65, -- Lưu 65 thay vì 6.5
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Dữ liệu khởi tạo mặc định cho 5 slot (PIN mặc định: 1234)
INSERT INTO public.profiles (slot_id, name, pin_hash, target_band_raw)
VALUES 
    (1, 'Học viên 1', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 65),
    (2, 'Học viên 2', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 65),
    (3, 'Học viên 3', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 65),
    (4, 'Học viên 4', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 65),
    (5, 'Học viên 5', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 65)
ON CONFLICT (slot_id) DO NOTHING;

-- 2. BẢNG BÀI NỘP VIẾT (WRITING SUBMISSIONS)
CREATE TABLE IF NOT EXISTS public.submissions_writing (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slot_id INT NOT NULL REFERENCES public.profiles(slot_id) ON DELETE CASCADE,
    task_type INT NOT NULL CHECK (task_type IN (1, 2)),
    prompt_title TEXT NOT NULL,
    essay_text TEXT NOT NULL,
    word_count INT NOT NULL,
    duration_seconds INT NOT NULL,
    overall_band_raw INT NOT NULL, -- 55 = Band 5.5
    sub_scores_raw JSONB NOT NULL, -- {"tr": 55, "cc": 55, "lr": 50, "gra": 50}
    feedback JSONB NOT NULL,
    corrections JSONB NOT NULL DEFAULT '[]'::jsonb,
    upgraded_essay TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3. BẢNG BÀI NỘP NÓI (SPEAKING SUBMISSIONS)
CREATE TABLE IF NOT EXISTS public.submissions_speaking (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slot_id INT NOT NULL REFERENCES public.profiles(slot_id) ON DELETE CASCADE,
    part INT NOT NULL DEFAULT 1,
    topic TEXT NOT NULL,
    question TEXT NOT NULL,
    transcript TEXT NOT NULL,
    duration_seconds INT NOT NULL,
    words_per_minute INT NOT NULL,
    overall_band_raw INT NOT NULL, -- 60 = Band 6.0
    sub_scores_raw JSONB NOT NULL, -- {"fc": 60, "pr": 55, "lr": 60, "gra": 60}
    feedback JSONB NOT NULL,
    hesitations JSONB NOT NULL DEFAULT '[]'::jsonb,
    area_upgrade JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 4. BẢNG KẾT QUẢ PLACEMENT TEST
CREATE TABLE IF NOT EXISTS public.placement_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slot_id INT NOT NULL REFERENCES public.profiles(slot_id) ON DELETE CASCADE,
    correct_answers_count INT NOT NULL,
    total_questions INT NOT NULL DEFAULT 15,
    estimated_band_raw INT NOT NULL,
    assigned_stage TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 5. BẢO MẬT ROW LEVEL SECURITY (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.submissions_writing ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.submissions_speaking ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.placement_results ENABLE ROW LEVEL SECURITY;

-- Policy cho phép truy cập theo Slot công khai hoặc với session token
CREATE POLICY "Cho phép đọc profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Cho phép cập nhật profile theo slot" ON public.profiles FOR UPDATE USING (true);
CREATE POLICY "Cho phép đọc writing theo slot" ON public.submissions_writing FOR SELECT USING (true);
CREATE POLICY "Cho phép thêm writing" ON public.submissions_writing FOR INSERT WITH CHECK (true);
CREATE POLICY "Cho phép đọc speaking theo slot" ON public.submissions_speaking FOR SELECT USING (true);
CREATE POLICY "Cho phép thêm speaking" ON public.submissions_speaking FOR INSERT WITH CHECK (true);
CREATE POLICY "Cho phép đọc placement test" ON public.placement_results FOR SELECT USING (true);
CREATE POLICY "Cho phép thêm placement test" ON public.placement_results FOR INSERT WITH CHECK (true);
