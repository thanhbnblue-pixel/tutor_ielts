import { CEFRLevel } from './types';

export interface CanDoStatement {
  id: string;
  level: CEFRLevel;
  skill: 'listening' | 'reading' | 'speaking' | 'writing' | 'grammar' | 'vocabulary';
  description_vi: string;
}

export const CEFR_CAN_DO_MATRIX: Record<CEFRLevel, CanDoStatement[]> = {
  A1: [
    { id: 'a1_l_1', level: 'A1', skill: 'listening', description_vi: 'Hiểu được các từ và cụm từ quen thuộc về bản thân, gia đình và môi trường xung quanh khi người khác nói chậm và rõ.' },
    { id: 'a1_r_1', level: 'A1', skill: 'reading', description_vi: 'Hiểu các tên riêng quen thuộc, các từ và những câu đơn giản (ví dụ: trên biển báo, áp phích hoặc trong catalogue).' },
    { id: 'a1_s_1', level: 'A1', skill: 'speaking', description_vi: 'Có thể giao tiếp đơn giản nếu người đối thoại sẵn sàng nói chậm lại và giúp diễn đạt. Có thể đặt và trả lời các câu hỏi về những chủ đề rất quen thuộc.' },
    { id: 'a1_w_1', level: 'A1', skill: 'writing', description_vi: 'Viết được một bưu thiếp ngắn, đơn giản. Điền được các thông tin cá nhân cơ bản vào form mẫu.' },
    { id: 'a1_g_1', level: 'A1', skill: 'grammar', description_vi: 'Nắm vững thì hiện tại đơn (Present Simple) và cấu trúc câu khẳng định cơ bản (S + V + O).' },
    { id: 'a1_v_1', level: 'A1', skill: 'vocabulary', description_vi: 'Sử dụng ~500 từ vựng cơ bản thuộc các chủ đề giao tiếp hàng ngày.' }
  ],
  A2: [
    { id: 'a2_l_1', level: 'A2', skill: 'listening', description_vi: 'Hiểu các cụm từ và từ vựng phổ biến nhất liên quan đến các lĩnh vực cá nhân (như thông tin cá nhân, mua sắm, việc làm).' },
    { id: 'a2_r_1', level: 'A2', skill: 'reading', description_vi: 'Đọc hiểu các đoạn văn bản ngắn, đơn giản. Có thể tìm thông tin trong quảng cáo, thực đơn, lịch trình.' },
    { id: 'a2_s_1', level: 'A2', skill: 'speaking', description_vi: 'Giao tiếp trong các tình huống hàng ngày với yêu cầu trao đổi thông tin trực tiếp về các chủ đề quen thuộc.' },
    { id: 'a2_w_1', level: 'A2', skill: 'writing', description_vi: 'Viết được các ghi chú, tin nhắn đơn giản. Viết một bức thư cá nhân ngắn (ví dụ cảm ơn ai đó).' },
    { id: 'a2_g_1', level: 'A2', skill: 'grammar', description_vi: 'Làm chủ thì quá khứ đơn (Past Simple), hiện tại hoàn thành (Present Perfect) và câu so sánh.' },
    { id: 'a2_v_1', level: 'A2', skill: 'vocabulary', description_vi: 'Mở rộng vốn từ lên ~1000 từ, có khả năng kết hợp các từ phổ biến.' }
  ],
  B1: [
    { id: 'b1_l_1', level: 'B1', skill: 'listening', description_vi: 'Hiểu những điểm chính của bài nói chuẩn về các chủ đề quen thuộc (công việc, trường học, giải trí).' },
    { id: 'b1_r_1', level: 'B1', skill: 'reading', description_vi: 'Hiểu các văn bản có ngôn ngữ xuất hiện thường xuyên hoặc liên quan đến công việc. Hiểu được cảm xúc trong thư từ cá nhân.' },
    { id: 'b1_s_1', level: 'B1', skill: 'speaking', description_vi: 'Xử lý hầu hết các tình huống phát sinh khi đi du lịch. Tham gia vào cuộc trò chuyện mà không cần chuẩn bị trước.' },
    { id: 'b1_w_1', level: 'B1', skill: 'writing', description_vi: 'Viết một văn bản liên kết đơn giản về các chủ đề quen thuộc hoặc được quan tâm cá nhân.' },
    { id: 'b1_g_1', level: 'B1', skill: 'grammar', description_vi: 'Nắm vững câu điều kiện (Loại 1, 2), câu bị động cơ bản, và câu tường thuật.' },
    { id: 'b1_v_1', level: 'B1', skill: 'vocabulary', description_vi: 'Mở rộng vốn từ lên ~2000 từ (bao gồm từ vựng nền tảng của TOEIC/IELTS/VSTEP).' }
  ],
  B2: [
    { id: 'b2_l_1', level: 'B2', skill: 'listening', description_vi: 'Hiểu các bài diễn thuyết và bài giảng dài, theo dõi được các lập luận phức tạp nếu chủ đề tương đối quen thuộc.' },
    { id: 'b2_r_1', level: 'B2', skill: 'reading', description_vi: 'Đọc các bài báo và báo cáo về các vấn đề hiện tại mà người viết thể hiện một thái độ hoặc quan điểm cụ thể.' },
    { id: 'b2_s_1', level: 'B2', skill: 'speaking', description_vi: 'Tương tác lưu loát và tự nhiên với người bản xứ. Chủ động thảo luận trong các bối cảnh quen thuộc, giải thích bảo vệ quan điểm.' },
    { id: 'b2_w_1', level: 'B2', skill: 'writing', description_vi: 'Viết bài luận văn rõ ràng, chi tiết. Đánh giá thông tin và tổng hợp lý do ủng hộ hoặc chống lại một quan điểm cụ thể.' },
    { id: 'b2_g_1', level: 'B2', skill: 'grammar', description_vi: 'Kiểm soát tốt câu điều kiện hỗn hợp, mệnh đề phân từ, đảo ngữ và các cấu trúc nhấn mạnh.' },
    { id: 'b2_v_1', level: 'B2', skill: 'vocabulary', description_vi: 'Mở rộng vốn từ lên ~4000 từ học thuật và chuyên ngành, có khả năng paraphrase linh hoạt.' }
  ],
  C1: [
    { id: 'c1_l_1', level: 'C1', skill: 'listening', description_vi: 'Hiểu diễn ngôn mở rộng ngay cả khi không được cấu trúc rõ ràng và mối quan hệ giữa các ý chỉ được ngụ ý.' },
    { id: 'c1_r_1', level: 'C1', skill: 'reading', description_vi: 'Hiểu các văn bản dài và phức tạp (văn học và phi văn học), đánh giá được phong cách viết.' },
    { id: 'c1_s_1', level: 'C1', skill: 'speaking', description_vi: 'Diễn đạt bản thân trôi chảy, linh hoạt. Sử dụng ngôn ngữ linh hoạt cho các mục đích xã hội và nghề nghiệp.' },
    { id: 'c1_w_1', level: 'C1', skill: 'writing', description_vi: 'Viết văn bản rõ ràng, có cấu trúc chặt chẽ, thể hiện khả năng kiểm soát các khuôn mẫu, từ nối.' },
    { id: 'c1_g_1', level: 'C1', skill: 'grammar', description_vi: 'Duy trì mức độ kiểm soát ngữ pháp cao ở mọi cấu trúc, hầu như không mắc lỗi.' },
    { id: 'c1_v_1', level: 'C1', skill: 'vocabulary', description_vi: 'Vốn từ vựng dồi dào, bao gồm thành ngữ, cụm động từ đa nghĩa và từ lóng.' }
  ]
};
