# 📁 BÀI BÀN GIAO DỰ ÁN ENGLISH APP (Handoff Document v1.0)
**Ngày tạo:** 2026-10-05
**Dự án:** All-in-One English App (Client-side, Offline-first)

---

## 1. Cấu trúc Kiến trúc (Architectural Structure)
- **Kiến trúc Tổng thể:** 100% Client-Side application (Next.js/React). Không sử dụng Backend Database (như Supabase hay Postgres). Dữ liệu, tiến trình học (progress), lịch sử, và điểm số được lưu cục bộ qua \localStorage\. Hỗ trợ PWA (cài đặt ứng dụng trực tiếp từ trình duyệt).
- **Hệ thống Multi-Profile:** Hỗ trợ tới 5 học viên trên cùng 1 thiết bị. Xác thực bằng mã PIN mã hóa SHA-256 + salt (không lưu PIN gốc).
- **Bảo mật & Quản lý Dữ liệu:**
  - *Session Bypass Protection:* Sử dụng Token động (băm kết hợp mã PIN và ngày hiện tại) để ngăn user gian lận qua F12 Console.
  - *Data Backup:* Có tính năng Backup/Restore dữ liệu ra file JSON. Đi kèm cảnh báo chống xóa cache trình duyệt.
- **Hệ thống AI Grading (Chấm điểm thông minh):** 
  - Gọi API Server-side ẩn (routes \/api/writing/grade\, \/api/speaking/grade\, \/api/qa\). 
  - Model sử dụng: \gemini-1.5-flash\ (Chấm thi) và \gemini-flash-lite-latest\ (Sinh dữ liệu lớn).
  - Bảo vệ qua cơ chế Rate Limiter (max 10 req/60s/IP) và giới hạn payload size (4000 từ). API key chỉ lưu trên server (\.env\).
- **Giao diện (UI/UX):** Mobile-first (màn hình chuẩn 375px), Dark Mode với CSS Variables, Bottom Navigation 5 tab (Home | Học Tập | Luyện Thi | Thống Kê | Tôi).

---

## 2. Các Quyết định Thiết kế Cốt lõi (Core Design Decisions)
- **Tiêu chuẩn UI/UX Khắt khe:** 
  - Bắt buộc dùng giao diện **Split-Screen** (chia đôi màn hình) cho các bài Reading.
  - Checkpoint Test không có nút Pause (phải làm liên tục với đếm ngược) để duy trì tính kỷ luật.
  - Bắt buộc xử lý lỗi thiết bị (try-catch cho Microphone, có fallback thân thiện khi bị từ chối quyền).
- **Bảo mật Prompt (AI Guardrails):** Toàn bộ input của user phải được làm sạch (vd: biến \sanitized_essay\) trước khi nối vào Prompt để chặn Prompt Injection.
- **Nguyên tắc Sư phạm & Sinh Dữ Liệu (ELT Standards):**
  - *4-Skills Coverage:* Giáo trình phải luân phiên phân bổ đủ Reading và Listening. Không được phép tạo dữ liệu 100% Reading.
  - *Question Density:* Mỗi đoạn văn/audio phải có tối thiểu 4-5 câu hỏi, chấm dứt việc sinh placeholder (2 câu/đoạn).
  - *Grammar Sequencing:* Logic bài học tuân theo chuẩn sư phạm EFL (ví dụ: bắt buộc học Present Continuous trước khi học cấu trúc Like + V-ing).
- **Chấm điểm theo Chứng chỉ:** 
  - IELTS: Áp dụng prompt "Anti-Memorization" (phạt nặng văn mẫu, chú trọng tính tự nhiên).
  - VSTEP: Áp dụng prompt "Template-Friendly" (chấp nhận form mẫu).
  - TOEIC: Đánh giá cao khả năng Paraphrasing trong ngữ cảnh văn phòng hiện đại (Teams, Slack).

---

## 3. Tiến độ Hiện tại (Current Progress)
- **Module UI (LessonPlayer):** Đã hoàn thiện luồng học 4 bước chuẩn: Từ Vựng (Flashcard) -> Ngữ Pháp (Lý thuyết + Quiz) -> Luyện Kỹ Năng -> Ôn Tập.
- **Tiến độ Nội dung Giáo trình (Curriculum):**
  - **IELTS Stage 1 (A1-A2):** 10/10 units đã hoàn chỉnh. Đã vượt qua khâu kiểm duyệt sư phạm (thêm 5 bài Listening, nâng lên 4 câu/unit, fix lỗi ngữ pháp ngược). Checkpoint thật đã hoạt động. -> **Sẵn sàng cho Beta Launch**.
  - **IELTS Stage 2, 3, 4:** Toàn bộ dữ liệu khổng lồ (>100KB mỗi file) đã được AI sinh thành công, chạy compile TypeScript không lỗi.
  - **TOEIC Stage 1 & 2:** 20 units trọn vẹn, nội dung sát format ETS hiện đại. Các Checkpoint không còn lỗi placeholder (đã chứa 10 câu hỏi thực tế).
  - **VSTEP Stage 1 & 2:** Track hoàn thiện và chi tiết nhất (file >110KB). Context hóa xuất sắc với văn hóa Việt Nam (Tết, Phở, Đà Nẵng). -> **Sẵn sàng cho Beta Launch**.
- **Khu vực Luyện thi (Practice Hub):**
  - Đề thi Nói (SpeakingExaminer) đã mở rộng kho đề lên **15 Topics** (bao gồm Part 1, 2, 3).
  - Đề thi Viết (WritingEditor) đã mở rộng lên **14 Prompts** (phủ đầy đủ các dạng Task 1, Task 2 của IELTS, và Email của TOEIC/VSTEP).

---

## 4. Các Lỗi & Vấn đề Chưa Fix (Unfixed Bugs & Known Issues)
Mặc dù các lỗi Technical nghiêm trọng (P0, P1) đã được khắc phục, một số vấn đề liên quan đến UX và dạng đề thi mở rộng vẫn còn tồn đọng:

1. **[KI-3] Hạn chế của Listening Practice:** 
   - Phần luyện nghe độc lập chưa có file Audio thực tế, hiện đang dùng Web Speech API (TTS - Text-to-Speech) để đọc transcript tĩnh. Kho bài nghe chưa phong phú (cần bổ sung thêm 4 bài nữa để đạt tiêu chuẩn).
2. **[KI-4] Reading Practice tĩnh:**
   - Bài đọc học thuật (Academic Reading) đang bị hardcode 1 bài tĩnh, chưa thể tự động xoay vòng (rotate) dựa theo tiến độ của người dùng.
3. **[KI-7] Placement Test (Bài test đầu vào):**
   - Các câu hỏi thuộc nhóm trình độ nâng cao (C1) khả năng cao vẫn đang là placeholder. Cần kiểm tra lại toàn bộ 30 câu hỏi của Placement Test.
4. **[KI-8] UI Từ Vựng (Vocabulary):**
   - Thiếu bảng Hướng dẫn phát âm (Pronunciation Guide) trực quan tại tab Từ vựng.
5. **[TOEIC Missing Features]:**
   - Chưa phát triển được UI cho dạng bài Photograph (Part 1), Question-Response (Part 2), và Điền từ vào đoạn văn (Part 6) do giới hạn của bộ khung Quiz hiện tại.
6. **[VSTEP Missing Features]:**
   - Chưa có UI/Prompt chấm điểm dành riêng cho Speaking Part 2 (Dạng Cue Card: chuẩn bị 1 phút, độc thoại 2 phút).
