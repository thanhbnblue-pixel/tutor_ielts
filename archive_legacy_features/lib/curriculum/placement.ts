export interface Question {
  id: number;
  level: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const PLACEMENT_IELTS: Question[] = [
  {
    "id": 1,
    "level": "A1",
    "category": "Grammar",
    "question": "She ___ a student at the university.",
    "options": [
      "is",
      "are",
      "am",
      "be"
    ],
    "correctAnswer": 0,
    "explanation": "Chủ ngữ là ngôi thứ ba số ít 'She' nên đi với động từ to be là 'is'."
  },
  {
    "id": 2,
    "level": "A1",
    "category": "Vocabulary",
    "question": "I usually ___ breakfast at 7 AM every day.",
    "options": [
      "eat",
      "play",
      "go",
      "do"
    ],
    "correctAnswer": 0,
    "explanation": "Cụm từ chỉ việc ăn sáng là 'eat breakfast' hoặc 'have breakfast'."
  },
  {
    "id": 3,
    "level": "A1",
    "category": "Grammar",
    "question": "There are three ___ on the table.",
    "options": [
      "book",
      "books",
      "bookes",
      "booki"
    ],
    "correctAnswer": 1,
    "explanation": "Sau số từ chỉ số nhiều như 'three', danh từ phải được thêm 's' để chuyển thành dạng số nhiều."
  },
  {
    "id": 4,
    "level": "A1",
    "category": "Vocabulary",
    "question": "What is the opposite of 'hot'?",
    "options": [
      "Cold",
      "Big",
      "Fast",
      "New"
    ],
    "correctAnswer": 0,
    "explanation": "Từ trái nghĩa với 'hot' (nóng) là 'cold' (lạnh)."
  },
  {
    "id": 5,
    "level": "A1",
    "category": "Grammar",
    "question": "___ do you live? - I live in Hanoi.",
    "options": [
      "What",
      "Where",
      "When",
      "Who"
    ],
    "correctAnswer": 1,
    "explanation": "Để hỏi về địa điểm/nơi chốn, ta dùng từ để hỏi 'Where'."
  },
  {
    "id": 6,
    "level": "A2",
    "category": "Grammar",
    "question": "He ___ to London last year.",
    "options": [
      "go",
      "goes",
      "went",
      "gone"
    ],
    "correctAnswer": 2,
    "explanation": "Trạng thái thời gian 'last year' chỉ quá khứ đơn, dạng quá khứ của 'go' là 'went'."
  },
  {
    "id": 7,
    "level": "A2",
    "category": "Vocabulary",
    "question": "Choose the synonym of 'difficult' in academic contexts:",
    "options": [
      "Easy",
      "Complex",
      "Simple",
      "Clear"
    ],
    "correctAnswer": 1,
    "explanation": "'Complex' (phức tạp) là từ đồng nghĩa học thuật với 'difficult' (khó khăn)."
  },
  {
    "id": 8,
    "level": "A2",
    "category": "Grammar",
    "question": "This is ___ book I have ever read.",
    "options": [
      "the most interesting",
      "more interesting",
      "interesting",
      "as interesting"
    ],
    "correctAnswer": 0,
    "explanation": "Cấu trúc so sánh nhất với tính từ dài 'interesting' là 'the most interesting'."
  },
  {
    "id": 9,
    "level": "A2",
    "category": "Vocabulary",
    "question": "You must ___ your homework before going out.",
    "options": [
      "make",
      "do",
      "take",
      "give"
    ],
    "correctAnswer": 1,
    "explanation": "Collocation đúng với bài tập về nhà là 'do homework'."
  },
  {
    "id": 10,
    "level": "A2",
    "category": "Grammar",
    "question": "If it rains tomorrow, we ___ at home.",
    "options": [
      "stay",
      "will stay",
      "stayed",
      "would stay"
    ],
    "correctAnswer": 1,
    "explanation": "Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra ở tương lai: If + hiện tại đơn, mệnh đề chính dùng S + will + V-infinitive."
  },
  {
    "id": 11,
    "level": "B1",
    "category": "Vocabulary",
    "question": "The government is trying to ___ the use of renewable energy.",
    "options": [
      "promote",
      "prevent",
      "prohibit",
      "postpone"
    ],
    "correctAnswer": 0,
    "explanation": "'Promote' có nghĩa là thúc đẩy, quảng bá, phù hợp với ngữ cảnh khuyến khích sử dụng năng lượng tái tạo."
  },
  {
    "id": 12,
    "level": "B1",
    "category": "Grammar",
    "question": "She has lived in this city ___ five years.",
    "options": [
      "since",
      "for",
      "during",
      "from"
    ],
    "correctAnswer": 1,
    "explanation": "'For' đi kèm với một khoảng thời gian (five years), trong khi 'since' đi với mốc thời gian."
  },
  {
    "id": 13,
    "level": "B1",
    "category": "Reading",
    "question": "Read the sentence: 'Despite the heavy rain, the event was a huge success.' What does 'Despite' mean?",
    "options": [
      "Because of",
      "In spite of",
      "Instead of",
      "As a result of"
    ],
    "correctAnswer": 1,
    "explanation": "'Despite' đồng nghĩa với 'In spite of' (mặc dù)."
  },
  {
    "id": 14,
    "level": "B1",
    "category": "Grammar",
    "question": "The car ___ by my father yesterday.",
    "options": [
      "repaired",
      "was repaired",
      "is repairing",
      "has repaired"
    ],
    "correctAnswer": 1,
    "explanation": "Chủ ngữ 'The car' nhận hành động, câu ở thì quá khứ đơn nên dùng cấu trúc bị động 'was/were + V3/ed'."
  },
  {
    "id": 15,
    "level": "B1",
    "category": "Vocabulary",
    "question": "Choose the academic synonym for 'show' or 'prove':",
    "options": [
      "Demonstrate",
      "Hide",
      "Confuse",
      "Ignore"
    ],
    "correctAnswer": 0,
    "explanation": "'Demonstrate' là từ học thuật thường dùng trong IELTS để chỉ việc chứng minh hoặc minh họa điều gì."
  },
  {
    "id": 16,
    "level": "B1",
    "category": "Grammar",
    "question": "I wish I ___ more time to finish the project.",
    "options": [
      "have",
      "had",
      "will have",
      "have had"
    ],
    "correctAnswer": 1,
    "explanation": "Câu ước cho hiện tại (wish + quá khứ đơn) dùng 'had'."
  },
  {
    "id": 17,
    "level": "B1",
    "category": "Vocabulary",
    "question": "Rapid economic growth has led to a significant increase in urban ___.",
    "options": [
      "population",
      "popular",
      "populous",
      "populate"
    ],
    "correctAnswer": 0,
    "explanation": "Cần danh từ sau tính từ 'urban' để chỉ dân số đô thị: 'urban population'."
  },
  {
    "id": 18,
    "level": "B1",
    "category": "Grammar",
    "question": "He is the person ___ helped me when I was in trouble.",
    "options": [
      "which",
      "whom",
      "whose",
      "who"
    ],
    "correctAnswer": 3,
    "explanation": "Đại từ quan hệ thay thế cho chủ ngữ chỉ người 'the person' là 'who'."
  },
  {
    "id": 19,
    "level": "B1",
    "category": "Reading",
    "question": "In academic writing, the word 'furthermore' is used to ___.",
    "options": [
      "introduce a contrast",
      "add another point",
      "show a result",
      "give an example"
    ],
    "correctAnswer": 1,
    "explanation": "'Furthermore' (hơn nữa, ngoài ra) dùng để bổ sung thêm một ý kiến hoặc thông tin mới."
  },
  {
    "id": 20,
    "level": "B1",
    "category": "Vocabulary",
    "question": "The company decided to ___ its operations to overseas markets.",
    "options": [
      "expand",
      "reduce",
      "limit",
      "shrink"
    ],
    "correctAnswer": 0,
    "explanation": "'Expand' có nghĩa là mở rộng quy mô hoạt động sang thị trường nước ngoài."
  },
  {
    "id": 21,
    "level": "B2",
    "category": "Vocabulary",
    "question": "The implementation of the new policy resulted in a/an ___ drop in unemployment rates.",
    "options": [
      "negligible",
      "substantial",
      "superficial",
      "ambiguous"
    ],
    "correctAnswer": 1,
    "explanation": "'Substantial' (đáng kể, lớn) đi cùng với 'drop' để chỉ mức giảm mạnh mẽ, mang tính học thuật cao trong IELTS Reading/Writing."
  },
  {
    "id": 22,
    "level": "B2",
    "category": "Grammar",
    "question": "Hardly had she entered the room ___ the telephone started ringing.",
    "options": [
      "than",
      "when",
      "then",
      "before"
    ],
    "correctAnswer": 1,
    "explanation": "Cấu trúc đảo ngữ: Hardly had + S + V3/ed + WHEN + S + V(past) (Ngay khi... thì...)."
  },
  {
    "id": 23,
    "level": "B2",
    "category": "Reading",
    "question": "What is the closest synonym for 'ubiquitous' often found in IELTS texts?",
    "options": [
      "Rare",
      "Omnipresent",
      "Ancient",
      "Harmful"
    ],
    "correctAnswer": 1,
    "explanation": "'Ubiquitous' có nghĩa là có mặt ở khắp mọi nơi, đồng nghĩa với 'omnipresent'."
  },
  {
    "id": 24,
    "level": "B2",
    "category": "Grammar",
    "question": "It is essential that every candidate ___ their application before Friday.",
    "options": [
      "submits",
      "submit",
      "submitted",
      "will submit"
    ],
    "correctAnswer": 1,
    "explanation": "Đây là cấu trúc giả định (Subjunctive) sau các tính từ như 'essential', động từ theo sau ở dạng nguyên thể không chia ('submit')."
  },
  {
    "id": 25,
    "level": "B2",
    "category": "Vocabulary",
    "question": "Instead of solving the root cause, they only found a temporary ___ to the problem.",
    "options": [
      "diagnosis",
      "remedy",
      "catalyst",
      "symptom"
    ],
    "correctAnswer": 1,
    "explanation": "'Temporary remedy' là giải pháp tạm thời cho một vấn đề."
  },
  {
    "id": 26,
    "level": "C1",
    "category": "Vocabulary",
    "question": "His meticulous attention to detail and rigorous methodology are ___ of top-tier academic research.",
    "options": [
      "indicative",
      "detrimental",
      "ambivalent",
      "redundant"
    ],
    "correctAnswer": 0,
    "explanation": "'Indicative of' có nghĩa là biểu thị, là dấu hiệu của điều gì đó, phù hợp với văn phong học thuật nâng cao."
  },
  {
    "id": 27,
    "level": "C1",
    "category": "Grammar",
    "question": "Not only ___ a profound impact on the local economy, but it also transformed the social fabric.",
    "options": [
      "did the tourism boom leave",
      "the tourism boom left",
      "has the tourism boom left",
      "had left the tourism boom"
    ],
    "correctAnswer": 0,
    "explanation": "Đảo ngữ với 'Not only' đứng đầu câu ở thì quá khứ đơn: Not only + did + S + V-infinitive..."
  },
  {
    "id": 28,
    "level": "C1",
    "category": "Reading",
    "question": "In an academic passage, if an author describes a theory as 'spurious', they mean it is ___.",
    "options": [
      "authentic and valid",
      "fake or false based on faulty reasoning",
      "extremely complex and unclear",
      "widely accepted by scientists"
    ],
    "correctAnswer": 1,
    "explanation": "'Spurious' có nghĩa là giả mạo, ngụy biện, không có thật hoặc dựa trên suy luận sai lầm."
  },
  {
    "id": 29,
    "level": "C1",
    "category": "Vocabulary",
    "question": "The committee decided to ___ the controversial clause from the final draft of the treaty.",
    "options": [
      "expunge",
      "augment",
      "foster",
      "bolster"
    ],
    "correctAnswer": 0,
    "explanation": "'Expunge' có nghĩa là xóa bỏ, loại bỏ hoàn toàn (một chi tiết, điều khoản) khỏi tài liệu."
  },
  {
    "id": 30,
    "level": "C1",
    "category": "Grammar",
    "question": "___ financial support from the government, the cutting-edge scientific project would have been aborted.",
    "options": [
      "Had it not been for",
      "If it wasn't for",
      "Unless there is",
      "Without having"
    ],
    "correctAnswer": 0,
    "explanation": "Cấu trúc đảo ngữ câu điều kiện loại 3 ẩn 'If': 'Had it not been for + N' đồng nghĩa với 'If it hadn't been for'."
  }
];

export const PLACEMENT_TOEIC: Question[] = [
  {
    "id": 1,
    "level": "A1",
    "category": "Grammar",
    "question": "Mr. Tanaka ___ in the marketing department.",
    "options": [
      "work",
      "works",
      "working",
      "is work"
    ],
    "correctAnswer": 1,
    "explanation": "Chủ ngữ 'Mr. Tanaka' là ngôi thứ ba số ít ở thì hiện tại đơn, động từ phải thêm 's' (works)."
  },
  {
    "id": 2,
    "level": "A1",
    "category": "Vocabulary",
    "question": "Please read the ___ before using the new printer.",
    "options": [
      "instructions",
      "desks",
      "chairs",
      "windows"
    ],
    "correctAnswer": 0,
    "explanation": "'Instructions' có nghĩa là hướng dẫn sử dụng, phù hợp với ngữ cảnh đọc trước khi dùng máy in mới."
  },
  {
    "id": 3,
    "level": "A1",
    "category": "Grammar",
    "question": "Where is the meeting room? It is ___ the second floor.",
    "options": [
      "in",
      "at",
      "on",
      "under"
    ],
    "correctAnswer": 2,
    "explanation": "Đối với tầng nhà, chúng ta dùng giới từ 'on' (trên tầng hai)."
  },
  {
    "id": 4,
    "level": "A1",
    "category": "Vocabulary",
    "question": "Could you please send me the financial ___ by Friday?",
    "options": [
      "report",
      "pen",
      "desk",
      "phone"
    ],
    "correctAnswer": 0,
    "explanation": "'Financial report' là báo cáo tài chính, một cụm từ thông dụng trong môi trường công sở."
  },
  {
    "id": 5,
    "level": "A1",
    "category": "Grammar",
    "question": "Ms. Davis didn't ___ the email yesterday.",
    "options": [
      "receive",
      "received",
      "receives",
      "receiving"
    ],
    "correctAnswer": 0,
    "explanation": "Trong câu phủ định ở quá khứ với 'did not' (didn't), động từ chính phải giữ nguyên thể không chia."
  },
  {
    "id": 6,
    "level": "A2",
    "category": "Grammar",
    "question": "All employees must submit ___ travel expenses by the end of the month.",
    "options": [
      "they",
      "them",
      "their",
      "theirs"
    ],
    "correctAnswer": 2,
    "explanation": "Cần một tính từ sở hữu đứng trước danh từ 'travel expenses', đáp án đúng là 'their'."
  },
  {
    "id": 7,
    "level": "A2",
    "category": "Vocabulary",
    "question": "We need to ___ a new manager for the sales team.",
    "options": [
      "hire",
      "buy",
      "sell",
      "borrow"
    ],
    "correctAnswer": 0,
    "explanation": "'Hire' có nghĩa là tuyển dụng, phù hợp khi nói về việc tìm quản lý mới cho đội ngũ bán hàng."
  },
  {
    "id": 8,
    "level": "A2",
    "category": "Grammar",
    "question": "Mr. Lee will call you back as soon as he ___ the meeting.",
    "options": [
      "finish",
      "finishes",
      "will finish",
      "finished"
    ],
    "correctAnswer": 1,
    "explanation": "Trong mệnh đề thời gian bắt đầu bằng 'as soon as' ở thì hiện tại đơn để chỉ tương lai, chủ ngữ ngôi thứ ba số ít dùng 'finishes'."
  },
  {
    "id": 9,
    "level": "A2",
    "category": "Vocabulary",
    "question": "The office supply closet is ___ on the third floor.",
    "options": [
      "located",
      "situated",
      "placed",
      "found"
    ],
    "correctAnswer": 0,
    "explanation": "'Be located' là cụm từ rất phổ biến để chỉ vị trí của một phòng ban hoặc đồ vật trong tòa nhà."
  },
  {
    "id": 10,
    "level": "A2",
    "category": "Grammar",
    "question": "The printer in room 4B is broken, so please use the one on the ___ floor.",
    "options": [
      "other",
      "others",
      "another",
      "second"
    ],
    "correctAnswer": 3,
    "explanation": "'Second floor' có nghĩa là tầng hai, dùng để chỉ định vị trí cụ thể của cái máy in thay thế."
  },
  {
    "id": 11,
    "level": "B1",
    "category": "Grammar",
    "question": "If the flight is delayed, Mr. Baker ___ the client to reschedule the appointment.",
    "options": [
      "will call",
      "called",
      "would call",
      "calls"
    ],
    "correctAnswer": 0,
    "explanation": "Đây là câu điều kiện loại 1: If + hiện tại đơn, tương lai đơn (will + V)."
  },
  {
    "id": 12,
    "level": "B1",
    "category": "Vocabulary",
    "question": "Due to unforeseen circumstances, the conference has been ___ until next month.",
    "options": [
      "postponed",
      "advanced",
      "accelerated",
      "promoted"
    ],
    "correctAnswer": 0,
    "explanation": "'Postponed' có nghĩa là bị hoãn lại, phù hợp với ngữ cảnh hội nghị bị hoãn tới tháng sau."
  },
  {
    "id": 13,
    "level": "B1",
    "category": "Grammar",
    "question": "Ms. Taylor was promoted ___ her hard work and dedication to the project.",
    "options": [
      "because",
      "because of",
      "although",
      "despite"
    ],
    "correctAnswer": 1,
    "explanation": "Sau chỗ trống là một cụm danh từ ('her hard work...'), nên ta dùng 'because of' thay vì 'because' (đi với mệnh đề)."
  },
  {
    "id": 14,
    "level": "B1",
    "category": "Vocabulary",
    "question": "The human resources department is currently reviewing all job ___.",
    "options": [
      "applications",
      "applicants",
      "applicants'",
      "apply"
    ],
    "correctAnswer": 0,
    "explanation": "'Job applications' là đơn xin việc, phù hợp với việc bộ phận nhân sự đang xem xét."
  },
  {
    "id": 15,
    "level": "B1",
    "category": "Grammar",
    "question": "All visitors must wear their identification badges ___ they are in the building.",
    "options": [
      "during",
      "while",
      "for",
      "unless"
    ],
    "correctAnswer": 1,
    "explanation": "Sau chỗ trống là một mệnh đề 'they are in the building', ta dùng liên từ 'while' (trong khi)."
  },
  {
    "id": 16,
    "level": "B1",
    "category": "Vocabulary",
    "question": "We need to find a way to reduce production ___ without lowering quality.",
    "options": [
      "costs",
      "prices",
      "fees",
      "fares"
    ],
    "correctAnswer": 0,
    "explanation": "'Production costs' là chi phí sản xuất, cụm từ chuyên ngành phổ biến trong kinh doanh."
  },
  {
    "id": 17,
    "level": "B1",
    "category": "Grammar",
    "question": "The new software program is much ___ than the previous version.",
    "options": [
      "user-friendly",
      "more user-friendly",
      "most user-friendly",
      "user-friendlier"
    ],
    "correctAnswer": 1,
    "explanation": "'User-friendly' là tính từ dài, khi so sánh hơn ta dùng 'more user-friendly'."
  },
  {
    "id": 18,
    "level": "B1",
    "category": "Vocabulary",
    "question": "Clients are requested to provide feedback regarding our customer ___.",
    "options": [
      "service",
      "servant",
      "servicing",
      "serve"
    ],
    "correctAnswer": 0,
    "explanation": "'Customer service' là dịch vụ chăm sóc khách hàng."
  },
  {
    "id": 19,
    "level": "B1",
    "category": "Grammar",
    "question": "The quarterly report ___ by the finance director before the meeting starts.",
    "options": [
      "must review",
      "must be reviewed",
      "must reviewing",
      "must be reviewing"
    ],
    "correctAnswer": 1,
    "explanation": "Chủ ngữ là 'The quarterly report' (báo cáo hàng quý) chịu tác động của hành động nên phải dùng thể bị động: must be + V3/ed."
  },
  {
    "id": 20,
    "level": "B1",
    "category": "Vocabulary",
    "question": "Please make sure to ___ your reservation at least 24 hours in advance.",
    "options": [
      "confirm",
      "conclude",
      "contain",
      "confess"
    ],
    "correctAnswer": 0,
    "explanation": "'Confirm a reservation' có nghĩa là xác nhận đặt chỗ."
  },
  {
    "id": 21,
    "level": "B2",
    "category": "Grammar",
    "question": "Had the marketing team started the campaign earlier, they ___ better results.",
    "options": [
      "will achieve",
      "would achieve",
      "would have achieved",
      "had achieved"
    ],
    "correctAnswer": 2,
    "explanation": "Đây là câu điều kiện loại 3 đảo ngữ (Had + S + V3), mệnh đề chính dùng 'would have + V3'."
  },
  {
    "id": 22,
    "level": "B2",
    "category": "Vocabulary",
    "question": "The company's latest marketing strategy resulted in a significant ___ in sales.",
    "options": [
      "surge",
      "surgeons",
      "surpass",
      "surrounding"
    ],
    "correctAnswer": 0,
    "explanation": "'Surge' (danh từ) có nghĩa là sự tăng vọt, phù hợp với ngữ cảnh doanh số tăng mạnh nhờ chiến lược mới."
  },
  {
    "id": 23,
    "level": "B2",
    "category": "Grammar",
    "question": "No sooner had the manager entered the office ___ the phone began to ring.",
    "options": [
      "than",
      "when",
      "then",
      "after"
    ],
    "correctAnswer": 0,
    "explanation": "Cấu trúc đảo ngữ cố định: No sooner + had + S + V3/ed + THAN + S + V2/ed."
  },
  {
    "id": 24,
    "level": "B2",
    "category": "Vocabulary",
    "question": "We are seeking a candidate with extensive ___ in international logistics.",
    "options": [
      "experience",
      "experiment",
      "expert",
      "expertly"
    ],
    "correctAnswer": 0,
    "explanation": "'Extensive experience' có nghĩa là kinh nghiệm phong phú/dày dặn, thường dùng trong tuyển dụng."
  },
  {
    "id": 25,
    "level": "B2",
    "category": "Grammar",
    "question": "___ of the two candidates has the necessary qualifications for the senior accountant position.",
    "options": [
      "Neither",
      "None",
      "Any",
      "All"
    ],
    "correctAnswer": 0,
    "explanation": "Vì có 'of the two candidates' (hai ứng viên) và động từ 'has' ở số ít, 'Neither' là từ chính xác để chỉ cả hai không ai có."
  },
  {
    "id": 26,
    "level": "C1",
    "category": "Grammar",
    "question": "Scarcely had the board of directors approved the merger ___ opposition arose from the shareholders.",
    "options": [
      "when",
      "than",
      "then",
      "before"
    ],
    "correctAnswer": 0,
    "explanation": "Cấu trúc đảo ngữ với Scarcely: Scarcely had + S + V3/ed + WHEN + S + V2/ed."
  },
  {
    "id": 27,
    "level": "C1",
    "category": "Vocabulary",
    "question": "The CEO's speech was so ___ that all employees felt motivated to improve productivity.",
    "options": [
      "inspiring",
      "inspires",
      "inspiration",
      "inspired"
    ],
    "correctAnswer": 0,
    "explanation": "Cần một tính từ mang nghĩa chủ động ('inspiring' - truyền cảm hứng) để mô tả bài phát biểu của CEO khiến nhân viên có động lực."
  },
  {
    "id": 28,
    "level": "C1",
    "category": "Grammar",
    "question": "Should you require any further assistance regarding your contract, please do not ___ to contact our legal department.",
    "options": [
      "hesitate",
      "hesitation",
      "hesitating",
      "hesitantly"
    ],
    "correctAnswer": 0,
    "explanation": "Cấu trúc 'do not hesitate to do something' (đừng ngần ngại làm gì) là một mẫu câu trang trọng rất phổ biến trong email công sở."
  },
  {
    "id": 29,
    "level": "C1",
    "category": "Vocabulary",
    "question": "The firm implemented strict protocols to ___ potential risks associated with data security.",
    "options": [
      "mitigate",
      "magnify",
      "migrate",
      "mobilize"
    ],
    "correctAnswer": 0,
    "explanation": "'Mitigate' có nghĩa là giảm nhẹ, làm dịu bớt (rủi ro), hoàn toàn phù hợp khi nói về việc giảm thiểu rủi ro bảo mật dữ liệu."
  },
  {
    "id": 30,
    "level": "C1",
    "category": "Reading",
    "question": "Based on the memo, what is the primary objective of the new policy? -> 'To streamline administrative procedures and eliminate redundant approval steps across all branches.'",
    "options": [
      "To increase the number of staff members",
      "To simplify office procedures and remove unnecessary approvals",
      "To open new branches globally",
      "To raise administrative fees"
    ],
    "correctAnswer": 1,
    "explanation": "'Streamline administrative procedures' đồng nghĩa với 'simplify office procedures' và 'eliminate redundant approval steps' tương ứng với 'remove unnecessary approvals'."
  }
];

export const PLACEMENT_VSTEP: Question[] = [
  {
    "id": 1,
    "level": "A1",
    "category": "Grammar",
    "question": "She ___ a student at this university.",
    "options": [
      "am",
      "is",
      "are",
      "be"
    ],
    "correctAnswer": 1,
    "explanation": "Chủ ngữ 'She' ngôi thứ 3 số ít đi với động từ 'to be' là 'is'."
  },
  {
    "id": 2,
    "level": "A1",
    "category": "Vocabulary",
    "question": "What time do you usually ___ up in the morning?",
    "options": [
      "get",
      "go",
      "take",
      "make"
    ],
    "correctAnswer": 0,
    "explanation": "Cụm từ cố định 'get up' có nghĩa là thức dậy."
  },
  {
    "id": 3,
    "level": "A1",
    "category": "Grammar",
    "question": "There are three ___ on the table.",
    "options": [
      "book",
      "books",
      "a book",
      "an book"
    ],
    "correctAnswer": 1,
    "explanation": "Sau số từ 'three' cần dùng danh từ số nhiều, thêm 's' vào sau 'book'."
  },
  {
    "id": 4,
    "level": "A1",
    "category": "Vocabulary",
    "question": "My father is a ___. He works in a hospital and helps sick people.",
    "options": [
      "teacher",
      "doctor",
      "engineer",
      "driver"
    ],
    "correctAnswer": 1,
    "explanation": "Làm việc trong bệnh viện và chữa bệnh cho người ốm là bác sĩ (doctor)."
  },
  {
    "id": 5,
    "level": "A1",
    "category": "Grammar",
    "question": "Do you like ___ English?",
    "options": [
      "learn",
      "learning",
      "to learning",
      "learned"
    ],
    "correctAnswer": 1,
    "explanation": "Sau động từ 'like' ta có thể dùng V-ing để chỉ sở thích chung."
  },
  {
    "id": 6,
    "level": "A2",
    "category": "Grammar",
    "question": "Last year, we ___ to Da Nang for our summer vacation.",
    "options": [
      "go",
      "goes",
      "went",
      "gone"
    ],
    "correctAnswer": 2,
    "explanation": "Trạng ngữ 'Last year' chỉ quá khứ đơn, động từ 'go' chuyển thành 'went'."
  },
  {
    "id": 7,
    "level": "A2",
    "category": "Vocabulary",
    "question": "The weather today is much ___ than it was yesterday.",
    "options": [
      "good",
      "well",
      "better",
      "best"
    ],
    "correctAnswer": 2,
    "explanation": "Câu so sánh hơn với tính từ 'good' chuyển thành 'better'."
  },
  {
    "id": 8,
    "level": "A2",
    "category": "Grammar",
    "question": "You ___ smoke in the hospital. It is against the rules.",
    "options": [
      "mustn't",
      "don't have to",
      "should",
      "can"
    ],
    "correctAnswer": 0,
    "explanation": "'Mustn't' dùng để chỉ sự cấm đoán, không được phép làm gì."
  },
  {
    "id": 9,
    "level": "A2",
    "category": "Vocabulary",
    "question": "Could you please turn ___ the lights when you leave the room?",
    "options": [
      "on",
      "off",
      "up",
      "down"
    ],
    "correctAnswer": 1,
    "explanation": "Cụm động từ 'turn off' có nghĩa là tắt (đèn, thiết bị điện)."
  },
  {
    "id": 10,
    "level": "A2",
    "category": "Grammar",
    "question": "She was cooking dinner ___ her husband was cleaning the house.",
    "options": [
      "while",
      "when",
      "during",
      "until"
    ],
    "correctAnswer": 0,
    "explanation": "'While' dùng để chỉ hai hành động diễn ra song song trong quá khứ."
  },
  {
    "id": 11,
    "level": "B1",
    "category": "Grammar",
    "question": "If I ___ enough money, I would buy a new laptop.",
    "options": [
      "have",
      "had",
      "will have",
      "would have"
    ],
    "correctAnswer": 1,
    "explanation": "Câu điều kiện loại 2 diễn tả giả định không có thực ở hiện tại, mệnh đề 'if' dùng quá khứ đơn ('had')."
  },
  {
    "id": 12,
    "level": "B1",
    "category": "Vocabulary",
    "question": "The company decided to ___ a new marketing strategy to increase sales.",
    "options": [
      "adopt",
      "adapt",
      "adept",
      "add"
    ],
    "correctAnswer": 0,
    "explanation": "'Adopt a strategy' có nghĩa là áp dụng, thông qua một chiến lược."
  },
  {
    "id": 13,
    "level": "B1",
    "category": "Grammar",
    "question": "English ___ in many countries around the world.",
    "options": [
      "speaks",
      "is speaking",
      "is spoken",
      "has spoken"
    ],
    "correctAnswer": 2,
    "explanation": "Câu bị động ở thì hiện tại đơn với chủ ngữ 'English': 'is spoken'."
  },
  {
    "id": 14,
    "level": "B1",
    "category": "Vocabulary",
    "question": "Regular exercise is ___ to your overall health and well-being.",
    "options": [
      "beneficial",
      "harmful",
      "detrimental",
      "useless"
    ],
    "correctAnswer": 0,
    "explanation": "'Beneficial' có nghĩa là có lợi, phù hợp với ngữ cảnh sức khỏe."
  },
  {
    "id": 15,
    "level": "B1",
    "category": "Grammar",
    "question": "She asked me where ___.",
    "options": [
      "do I live",
      "did I live",
      "I live",
      "I lived"
    ],
    "correctAnswer": 3,
    "explanation": "Câu gián tiếp không đảo ngữ, và lùi thì từ hiện tại đơn sang quá khứ đơn ('I lived')."
  },
  {
    "id": 16,
    "level": "B1",
    "category": "Reading",
    "question": "Read the sign: 'CAUTION: WET FLOOR'. What does it mean?",
    "options": [
      "You should clean the floor.",
      "The floor is slippery, be careful.",
      "Do not walk into this building.",
      "Water is running out of the pipe."
    ],
    "correctAnswer": 1,
    "explanation": "Biển báo 'Sàn ướt, thận trọng' cảnh báo khu vực trơn trượt."
  },
  {
    "id": 17,
    "level": "B1",
    "category": "Vocabulary",
    "question": "Despite the heavy rain, they decided to ___ with the outdoor event.",
    "options": [
      "carry on",
      "give up",
      "put off",
      "take off"
    ],
    "correctAnswer": 0,
    "explanation": "'Carry on' đồng nghĩa với 'continue' (tiếp tục)."
  },
  {
    "id": 18,
    "level": "B1",
    "category": "Grammar",
    "question": "This is the best movie I ___ seen.",
    "options": [
      "have ever",
      "had ever",
      "ever have",
      "was ever"
    ],
    "correctAnswer": 0,
    "explanation": "Cấu trúc so sánh nhất với 'the best' thường đi với thì hiện tại hoàn thành ('have ever seen')."
  },
  {
    "id": 19,
    "level": "B1",
    "category": "Vocabulary",
    "question": "Could you please give me a brief ___ of the report?",
    "options": [
      "summary",
      "addition",
      "development",
      "creation"
    ],
    "correctAnswer": 0,
    "explanation": "'Brief summary' có nghĩa là bản tóm tắt ngắn gọn."
  },
  {
    "id": 20,
    "level": "B1",
    "category": "Grammar",
    "question": "He drives much ___ than his brother.",
    "options": [
      "careful",
      "more carefully",
      "carefully",
      "most carefully"
    ],
    "correctAnswer": 1,
    "explanation": "Trạng từ bổ nghĩa cho động từ 'drives', dạng so sánh hơn của trạng từ dài là 'more carefully'."
  },
  {
    "id": 21,
    "level": "B2",
    "category": "Grammar",
    "question": "Hardly had I stepped out of the house ___ it started to rain heavily.",
    "options": [
      "when",
      "than",
      "then",
      "after"
    ],
    "correctAnswer": 0,
    "explanation": "Cấu trúc đảo ngữ: 'Hardly had S + V3/ed WHEN S + V2/ed'."
  },
  {
    "id": 22,
    "level": "B2",
    "category": "Vocabulary",
    "question": "The government is taking measures to ___ the impact of climate change.",
    "options": [
      "mitigate",
      "magnify",
      "ignite",
      "provoke"
    ],
    "correctAnswer": 0,
    "explanation": "'Mitigate' có nghĩa là giảm nhẹ, làm dịu bớt (tác động tiêu cực)."
  },
  {
    "id": 23,
    "level": "B2",
    "category": "Grammar",
    "question": "It is crucial that every candidate ___ their application before Friday.",
    "options": [
      "submit",
      "submits",
      "submitted",
      "will submit"
    ],
    "correctAnswer": 0,
    "explanation": "Thức giả định (Subjunctive) sau tính từ chỉ sự quan trọng ('crucial that + S + V nguyên thể')."
  },
  {
    "id": 24,
    "level": "B2",
    "category": "Vocabulary",
    "question": "Her fluency in English gives her a distinct ___ over other applicants.",
    "options": [
      "advantage",
      "benefit",
      "profit",
      "dominance"
    ],
    "correctAnswer": 0,
    "explanation": "'Give someone an advantage' có nghĩa là tạo cho ai đó một lợi thế."
  },
  {
    "id": 25,
    "level": "B2",
    "category": "Grammar",
    "question": "Not until he failed the exam ___ the importance of self-study.",
    "options": [
      "he realized",
      "did he realize",
      "he has realized",
      "realized he"
    ],
    "correctAnswer": 1,
    "explanation": "Đảo ngữ với 'Not until' ở đầu câu: 'Not until + time/clause + trợ động từ + S + V'."
  },
  {
    "id": 26,
    "level": "C1",
    "category": "Grammar",
    "question": "___ of the economic crisis, the company managed to post a record profit.",
    "options": [
      "Despite",
      "Although",
      "Because",
      "Unless"
    ],
    "correctAnswer": 0,
    "explanation": "'Despite' đi với danh từ/cụm danh từ ('the economic crisis') để chỉ sự nhượng bộ."
  },
  {
    "id": 27,
    "level": "C1",
    "category": "Vocabulary",
    "question": "The politician's vague answers only served to ___ the confusion among the public.",
    "options": [
      "compound",
      "comprise",
      "compact",
      "compensate"
    ],
    "correctAnswer": 0,
    "explanation": "'Compound' (v) trong ngữ cảnh này có nghĩa là làm trầm trọng thêm, làm phức tạp thêm."
  },
  {
    "id": 28,
    "level": "C1",
    "category": "Grammar",
    "question": "Had the management been more transparent, the strike ___ avoided.",
    "options": [
      "could have been",
      "would be",
      "will be",
      "had been"
    ],
    "correctAnswer": 0,
    "explanation": "Đảo ngữ câu điều kiện loại 3 diễn tả giả định trái ngược quá khứ: 'Had S + V3/ed, S + could/would have + V3/ed'."
  },
  {
    "id": 29,
    "level": "C1",
    "category": "Vocabulary",
    "question": "The scientist's groundbreaking research provided ___ evidence to support the new theory.",
    "options": [
      "empirical",
      "superficial",
      "artificial",
      "beneficial"
    ],
    "correctAnswer": 0,
    "explanation": "'Empirical evidence' là một thuật ngữ học thuật chỉ bằng chứng thực nghiệm."
  },
  {
    "id": 30,
    "level": "C1",
    "category": "Grammar",
    "question": "Only by working collaboratively ___ able to finish the project on time.",
    "options": [
      "we were",
      "were we",
      "we are",
      "are we"
    ],
    "correctAnswer": 1,
    "explanation": "Đảo ngữ với trạng ngữ chỉ phương thức 'Only by + V-ing' đứng đầu câu: 'Only by... + trợ động từ + S + V'."
  }
];

export const PLACEMENT_GENERAL: Question[] = [
  {
    "id": 1,
    "level": "A1",
    "category": "Grammar",
    "question": "Hello, what ___ your name?",
    "options": [
      "is",
      "are",
      "am",
      "be"
    ],
    "correctAnswer": 0,
    "explanation": "Chủ ngữ 'what' và danh từ số ít 'name' đi với động từ to be là 'is'."
  },
  {
    "id": 2,
    "level": "A1",
    "category": "Vocabulary",
    "question": "I have a brother and a ___. Her name is Anna.",
    "options": [
      "brother",
      "sister",
      "uncle",
      "father"
    ],
    "correctAnswer": 1,
    "explanation": "Đại từ chỉ định 'Her name' (Tên của cô ấy) cho thấy đáp án phải là giống cái: 'sister' (chị/em gái)."
  },
  {
    "id": 3,
    "level": "A1",
    "category": "Grammar",
    "question": "She ___ to work by bus every day.",
    "options": [
      "go",
      "goes",
      "going",
      "gone"
    ],
    "correctAnswer": 1,
    "explanation": "Thì hiện tại đơn với chủ ngữ ngôi thứ 3 số ít 'She', động từ 'go' phải thêm 'es' thành 'goes'."
  },
  {
    "id": 4,
    "level": "A1",
    "category": "Vocabulary",
    "question": "What time is it? - It's half ___ three.",
    "options": [
      "past",
      "to",
      "over",
      "in"
    ],
    "correctAnswer": 0,
    "explanation": "Cấu trúc nói giờ hơn trong tiếng Anh dùng 'half past' (rưỡi)."
  },
  {
    "id": 5,
    "level": "A1",
    "category": "Grammar",
    "question": "Are there ___ apples in the fridge?",
    "options": [
      "some",
      "any",
      "a",
      "an"
    ],
    "correctAnswer": 1,
    "explanation": "Trong câu hỏi với danh từ đếm được số ít/nhiều (apples), ta dùng 'any'."
  },
  {
    "id": 6,
    "level": "A2",
    "category": "Grammar",
    "question": "Yesterday, I ___ to the supermarket to buy some food.",
    "options": [
      "go",
      "goed",
      "went",
      "gone"
    ],
    "correctAnswer": 2,
    "explanation": "Dấu hiệu 'Yesterday' chỉ thì quá khứ đơn, dạng quá khứ của 'go' là 'went'."
  },
  {
    "id": 7,
    "level": "A2",
    "category": "Vocabulary",
    "question": "The weather is very nice today. It's warm and ___.",
    "options": [
      "rain",
      "sunny",
      "cloud",
      "snow"
    ],
    "correctAnswer": 1,
    "explanation": "Tính từ miêu tả thời tiết ấm áp và có nắng là 'sunny'."
  },
  {
    "id": 8,
    "level": "A2",
    "category": "Grammar",
    "question": "My house is ___ than yours.",
    "options": [
      "big",
      "bigger",
      "biggest",
      "more big"
    ],
    "correctAnswer": 1,
    "explanation": "So sánh hơn với tính từ ngắn 'big' ta gấp đôi phụ âm cuối và thêm '-er' (bigger)."
  },
  {
    "id": 9,
    "level": "A2",
    "category": "Vocabulary",
    "question": "You should take an umbrella. It looks like it's going to ___.",
    "options": [
      "rain",
      "wind",
      "sun",
      "hot"
    ],
    "correctAnswer": 0,
    "explanation": "Cần mang ô vì trời sắp 'rain' (mưa)."
  },
  {
    "id": 10,
    "level": "A2",
    "category": "Grammar",
    "question": "How ___ do you visit your grandparents? - Once a month.",
    "options": [
      "long",
      "often",
      "much",
      "many"
    ],
    "correctAnswer": 1,
    "explanation": "Câu trả lời là tần suất (Once a month), nên câu hỏi phải bắt đầu bằng 'How often'."
  },
  {
    "id": 11,
    "level": "B1",
    "category": "Grammar",
    "question": "If I win the lottery, I ___ a big house.",
    "options": [
      "buy",
      "bought",
      "will buy",
      "would buy"
    ],
    "correctAnswer": 2,
    "explanation": "Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra ở hiện tại hoặc tương lai: If + Present Simple, S + will + V-infinitive."
  },
  {
    "id": 12,
    "level": "B1",
    "category": "Vocabulary",
    "question": "Could you please ___ up the music? It's too loud.",
    "options": [
      "turn",
      "look",
      "get",
      "bring"
    ],
    "correctAnswer": 0,
    "explanation": "Cụm động từ 'turn down' có nghĩa là giảm âm lượng."
  },
  {
    "id": 13,
    "level": "B1",
    "category": "Grammar",
    "question": "She has lived in this city ___ five years.",
    "options": [
      "since",
      "for",
      "during",
      "from"
    ],
    "correctAnswer": 1,
    "explanation": "Khoảng thời gian 'five years' đi với giới từ 'for' trong thì hiện tại hoàn thành."
  },
  {
    "id": 14,
    "level": "B1",
    "category": "Vocabulary",
    "question": "I am looking forward to ___ you soon.",
    "options": [
      "see",
      "seeing",
      "saw",
      "seen"
    ],
    "correctAnswer": 1,
    "explanation": "Cấu trúc 'look forward to + V-ing' (mong chờ làm gì đó)."
  },
  {
    "id": 15,
    "level": "B1",
    "category": "Grammar",
    "question": "This book ___ by J.K. Rowling.",
    "options": [
      "wrote",
      "is written",
      "was written",
      "has written"
    ],
    "correctAnswer": 2,
    "explanation": "Câu bị động ở quá khứ đơn vì tác giả đã hoàn thành cuốn sách trong quá khứ (was written)."
  },
  {
    "id": 16,
    "level": "B1",
    "category": "Vocabulary",
    "question": "The meeting was ___ because the manager was ill.",
    "options": [
      "put off",
      "taken off",
      "turned off",
      "set off"
    ],
    "correctAnswer": 0,
    "explanation": "'Put off' đồng nghĩa với 'cancel' (hoãn lại)."
  },
  {
    "id": 17,
    "level": "B1",
    "category": "Grammar",
    "question": "You ___ smoke in the hospital. It's strictly prohibited.",
    "options": [
      "don't have to",
      "mustn't",
      "shouldn't",
      "needn't"
    ],
    "correctAnswer": 1,
    "explanation": "Biển cấm hoặc quy định nghiêm ngặt dùng 'mustn't' (không được phép)."
  },
  {
    "id": 18,
    "level": "B1",
    "category": "Vocabulary",
    "question": "He didn't get the job ___ he had a lot of experience.",
    "options": [
      "although",
      "because",
      "despite",
      "however"
    ],
    "correctAnswer": 0,
    "explanation": "'Although' + mệnh đề dùng để chỉ sự nhượng bộ (Mặc dù anh ấy có nhiều kinh nghiệm...)."
  },
  {
    "id": 19,
    "level": "B1",
    "category": "Grammar",
    "question": "I wish I ___ a bigger apartment.",
    "options": [
      "have",
      "had",
      "will have",
      "would have"
    ],
    "correctAnswer": 1,
    "explanation": "Câu ước không có thật ở hiện tại dùng thì quá khứ đơn (had)."
  },
  {
    "id": 20,
    "level": "B1",
    "category": "Vocabulary",
    "question": "Can you lend me some money? I am completely ___ of cash right now.",
    "options": [
      "out",
      "short",
      "lack",
      "empty"
    ],
    "correctAnswer": 1,
    "explanation": "Cụm từ 'short of cash' có nghĩa là đang túng thiếu tiền mặt."
  },
  {
    "id": 21,
    "level": "B2",
    "category": "Vocabulary",
    "question": "Despite her initial hesitation, she finally agreed to ___ the challenge.",
    "options": [
      "take on",
      "take off",
      "take up",
      "take over"
    ],
    "correctAnswer": 0,
    "explanation": "'Take on a challenge' có nghĩa là nhận lấy thử thách."
  },
  {
    "id": 22,
    "level": "B2",
    "category": "Grammar",
    "question": "Hardly had I arrived home ___ it started to rain heavily.",
    "options": [
      "than",
      "when",
      "then",
      "after"
    ],
    "correctAnswer": 1,
    "explanation": "Cấu trúc đảo ngữ: Hardly had S + V(p.p) + WHEN + S + V(past simple)."
  },
  {
    "id": 23,
    "level": "B2",
    "category": "Vocabulary",
    "question": "The company's new marketing strategy resulted ___ a significant increase in sales.",
    "options": [
      "in",
      "from",
      "to",
      "with"
    ],
    "correctAnswer": 0,
    "explanation": "Cụm từ 'result in' có nghĩa là dẫn đến kết quả gì."
  },
  {
    "id": 24,
    "level": "B2",
    "category": "Grammar",
    "question": "It is essential that every candidate ___ the application form in person.",
    "options": [
      "submits",
      "submit",
      "submitted",
      "will submit"
    ],
    "correctAnswer": 1,
    "explanation": "Thức giả định (Subjunctive) sau tính từ chỉ sự bắt buộc (essential, important...) dùng động từ nguyên mẫu không chia."
  },
  {
    "id": 25,
    "level": "B2",
    "category": "Vocabulary",
    "question": "He has a very ___ lifestyle, rarely eating vegetables and never exercising.",
    "options": [
      "healthy",
      "sedentary",
      "active",
      "dynamic"
    ],
    "correctAnswer": 1,
    "explanation": "'Sedentary lifestyle' chỉ lối sống ít vận động, tĩnh tại."
  },
  {
    "id": 26,
    "level": "C1",
    "category": "Vocabulary",
    "question": "The politician's vague speech failed to ___ any real commitment to reform.",
    "options": [
      "convey",
      "convince",
      "convene",
      "confess"
    ],
    "correctAnswer": 0,
    "explanation": "'Convey' có nghĩa là truyền đạt, truyền tải (thông điệp, cam kết)."
  },
  {
    "id": 27,
    "level": "C1",
    "category": "Grammar",
    "question": "Scarcely had the announcement been made ___ the protesters began shouting.",
    "options": [
      "than",
      "when",
      "that",
      "before"
    ],
    "correctAnswer": 1,
    "explanation": "Cấu trúc đảo ngữ với 'Scarcely' luôn đi với từ nối 'when'."
  },
  {
    "id": 28,
    "level": "C1",
    "category": "Vocabulary",
    "question": "The negotiations reached an ___ when neither side was willing to compromise.",
    "options": [
      "impasse",
      "implementation",
      "impediment",
      "implication"
    ],
    "correctAnswer": 0,
    "explanation": "'Impasse' có nghĩa là tình trạng bế tắc trong đàm phán."
  },
  {
    "id": 29,
    "level": "C1",
    "category": "Grammar",
    "question": "Had I known about the severe traffic congestion, I ___ another route.",
    "options": [
      "will take",
      "would take",
      "would have taken",
      "had taken"
    ],
    "correctAnswer": 2,
    "explanation": "Đảo ngữ câu điều kiện loại 3 diễn tả giả định trái ngược với quá khứ: Had S + V(p.p), S + would have + V(p.p)."
  },
  {
    "id": 30,
    "level": "C1",
    "category": "Vocabulary",
    "question": "Her constant complaints eventually began to ___ on the patience of her colleagues.",
    "options": [
      "wear thin",
      "break ice",
      "fall flat",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": " Thành ngữ 'wear thin' chỉ sự kiên nhẫn hoặc sức chịu đựng đang cạn kiệt dần."
  }
];

