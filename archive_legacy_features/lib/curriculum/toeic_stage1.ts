import { StageData } from './types';

export const toeic_stage1: StageData = {
  "id": "toeic_stage1",
  "name": "TOEIC: Nền Tảng (Phần 1)",
  "description": "10 Units tập trung từ vựng và ngữ pháp cơ bản",
  "checkpoint": {
    "id": 1,
    "title": "Checkpoint",
    "description": "Vượt qua bài test này để mở khóa chặng tiếp theo.",
    "target_units": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "passing_score": 70,
    "questions": [
      {
        "id": 1,
        "type": "checkpoint",
        "question": "Mr. Tanaka ___ the office at 8:00 AM every day.",
        "options": [
          "arrive",
          "arrives",
          "arriving",
          "is arrive"
        ],
        "correct_answer": 1,
        "explanation_vi": "Chủ ngữ 'Mr. Tanaka' là số ít ở ngôi thứ ba, và câu diễn tả thói quen (every day) nên dùng thì hiện tại đơn, động từ thêm 's'."
      },
      {
        "id": 2,
        "type": "checkpoint",
        "question": "Please submit your expense report ___ Friday afternoon.",
        "options": [
          "at",
          "in",
          "by",
          "on"
        ],
        "correct_answer": 2,
        "explanation_vi": "Giới từ 'by' có nghĩa là 'trước hoặc vào thời điểm nào đó', thường dùng với deadline như 'by Friday'."
      },
      {
        "id": 3,
        "type": "checkpoint",
        "question": "Ms. Davis is looking for ___ new assistant in the marketing department.",
        "options": [
          "a",
          "an",
          "the",
          "some"
        ],
        "correct_answer": 0,
        "explanation_vi": "Danh từ 'assistant' bắt đầu bằng phụ âm /n/ và đây là danh từ đếm được số ít lần đầu được nhắc đến, dùng mạo từ 'a'."
      },
      {
        "id": 4,
        "type": "checkpoint",
        "question": "The new printer works very ___, but it is quite expensive.",
        "options": [
          "good",
          "well",
          "better",
          "best"
        ],
        "correct_answer": 1,
        "explanation_vi": "Cần một trạng từ để bổ nghĩa cho động từ 'works'. 'Well' là trạng từ của tính từ 'good'."
      },
      {
        "id": 5,
        "type": "checkpoint",
        "question": "All employees must wear ___ ID badges while in the building.",
        "options": [
          "they",
          "them",
          "their",
          "theirs"
        ],
        "correct_answer": 2,
        "explanation_vi": "Cần một tính từ sở hữu đứng trước cụm danh từ 'ID badges' để chỉ thẻ của nhân viên."
      },
      {
        "id": 6,
        "type": "checkpoint",
        "question": "If you have any questions about the contract, please contact ___.",
        "options": [
          "I",
          "my",
          "me",
          "mine"
        ],
        "correct_answer": 2,
        "explanation_vi": "Động từ 'contact' cần một tân ngữ đi sau, do đó dùng đại từ tân ngữ 'me'."
      },
      {
        "id": 7,
        "type": "checkpoint",
        "question": "The conference room is on the ___ floor of the building.",
        "options": [
          "three",
          "third",
          "threes",
          "the third"
        ],
        "correct_answer": 1,
        "explanation_vi": "Chỉ vị trí tầng của tòa nhà, ta dùng số thứ tự 'third'."
      },
      {
        "id": 8,
        "type": "checkpoint",
        "question": "We need to buy ___ chairs for the new meeting room.",
        "options": [
          "much",
          "any",
          "some",
          "little"
        ],
        "correct_answer": 2,
        "explanation_vi": "'Chairs' là danh từ đếm được số nhiều. Dùng 'some' trong câu khẳng định."
      },
      {
        "id": 9,
        "type": "checkpoint",
        "question": "Mr. Lopez will lead the meeting ___ Ms. Green is on vacation.",
        "options": [
          "because",
          "while",
          "during",
          "however"
        ],
        "correct_answer": 1,
        "explanation_vi": "Liên từ 'while' được dùng để chỉ hai hành động diễn ra song song hoặc một sự việc xảy ra trong khi sự việc khác đang tiếp diễn."
      },
      {
        "id": 10,
        "type": "checkpoint",
        "question": "The manager asked ___ the project report was ready.",
        "options": [
          "what",
          "if",
          "that",
          "where"
        ],
        "correct_answer": 1,
        "explanation_vi": "Dùng 'if' (hoặc whether) trong câu hỏi gián tiếp dạng Yes/No."
      },
      {
        "id": 11,
        "type": "checkpoint",
        "question": "The train to Chicago leaves from ___ 4.",
        "options": [
          "platform",
          "gate",
          "room",
          "desk"
        ],
        "correct_answer": 0,
        "explanation_vi": "Từ vựng nhà ga: 'platform' dùng cho tàu hỏa (sân ga), 'gate' dùng cho máy bay."
      },
      {
        "id": 12,
        "type": "checkpoint",
        "question": "Please remember to ___ your computer before leaving the office.",
        "options": [
          "turn off",
          "turn on",
          "turn up",
          "turn down"
        ],
        "correct_answer": 0,
        "explanation_vi": "'Turn off' có nghĩa là tắt thiết bị, phù hợp với hành động trước khi rời văn phòng."
      },
      {
        "id": 13,
        "type": "checkpoint",
        "question": "We are ___ a new software program to improve efficiency.",
        "options": [
          "using",
          "use",
          "uses",
          "used"
        ],
        "correct_answer": 0,
        "explanation_vi": "Câu ở thì hiện tại tiếp diễn (are + V-ing) với chủ ngữ 'We'."
      },
      {
        "id": 14,
        "type": "checkpoint",
        "question": "The company offers a good health ___ package to all full-time staff.",
        "options": [
          "insurance",
          "ensure",
          "assured",
          "insure"
        ],
        "correct_answer": 0,
        "explanation_vi": "'Health insurance' là cụm từ quen thuộc chỉ bảo hiểm y tế."
      },
      {
        "id": 15,
        "type": "checkpoint",
        "question": "Could you please ___ this document and sign at the bottom?",
        "options": [
          "review",
          "reviewer",
          "reviewing",
          "reviewable"
        ],
        "correct_answer": 0,
        "explanation_vi": "Sau cấu trúc 'Could you please' là một động từ nguyên mẫu không 'to'."
      },
      {
        "id": 16,
        "type": "checkpoint",
        "question": "The reception desk is located on the ground ___.",
        "options": [
          "floor",
          "wall",
          "roof",
          "ceiling"
        ],
        "correct_answer": 0,
        "explanation_vi": "'Ground floor' là tầng trệt, nơi thường đặt quầy lễ tân."
      },
      {
        "id": 17,
        "type": "checkpoint",
        "question": "Our team successfully ___ the project ahead of schedule.",
        "options": [
          "complete",
          "completed",
          "completing",
          "completely"
        ],
        "correct_answer": 1,
        "explanation_vi": "Trạng từ 'ahead of schedule' chỉ thời gian trong quá khứ, động từ chia ở thì quá khứ đơn 'completed'."
      },
      {
        "id": 18,
        "type": "checkpoint",
        "question": "Mr. Baker has worked at this company ___ over ten years.",
        "options": [
          "since",
          "for",
          "during",
          "from"
        ],
        "correct_answer": 1,
        "explanation_vi": "Đi kèm với khoảng thời gian ('over ten years') trong thì hoàn thành ta dùng 'for'."
      },
      {
        "id": 19,
        "type": "checkpoint",
        "question": "Customers can park their cars in the lot ___ of the building.",
        "options": [
          "front",
          "behind",
          "next",
          "in front"
        ],
        "correct_answer": 3,
        "explanation_vi": "Cụm từ cố định 'in front of' có nghĩa là 'ở phía trước của'."
      },
      {
        "id": 20,
        "type": "checkpoint",
        "question": "To apply for the position, please send your resume and ___ letter.",
        "options": [
          "cover",
          "closed",
          "covered",
          "covering"
        ],
        "correct_answer": 0,
        "explanation_vi": "'Cover letter' là thư xin việc, một thuật ngữ tuyển dụng phổ biến."
      },
      {
        "id": 21,
        "type": "checkpoint",
        "question": "All visitors must sign ___ at the security desk.",
        "options": [
          "in",
          "out",
          "on",
          "up"
        ],
        "correct_answer": 0,
        "explanation_vi": "'Sign in' có nghĩa là đăng ký vào/ký tên khi đến một tòa nhà hoặc sự kiện."
      },
      {
        "id": 22,
        "type": "checkpoint",
        "question": "The cafeteria is closed ___ the weekends.",
        "options": [
          "at",
          "in",
          "on",
          "to"
        ],
        "correct_answer": 0,
        "explanation_vi": "Cụm từ chỉ thời gian 'at the weekends' (hoặc on the weekends) dùng giới từ 'at'."
      },
      {
        "id": 23,
        "type": "checkpoint",
        "question": "If you need technical support, please call the IT ___.",
        "options": [
          "department",
          "apartment",
          "document",
          "segment"
        ],
        "correct_answer": 0,
        "explanation_vi": "'IT department' là phòng ban công nghệ thông tin."
      },
      {
        "id": 24,
        "type": "checkpoint",
        "question": "Ms. Clark is the person ___ handles international sales.",
        "options": [
          "who",
          "which",
          "whose",
          "whom"
        ],
        "correct_answer": 0,
        "explanation_vi": "Đại từ quan hệ 'who' thay thế cho danh từ chỉ người 'Ms. Clark' và làm chủ ngữ cho động từ 'handles'."
      },
      {
        "id": 25,
        "type": "checkpoint",
        "question": "The flight was delayed ___ bad weather conditions.",
        "options": [
          "because",
          "due to",
          "although",
          "while"
        ],
        "correct_answer": 1,
        "explanation_vi": "'Due to' đi kèm với một cụm danh từ ('bad weather conditions') để chỉ nguyên nhân."
      },
      {
        "id": 26,
        "type": "checkpoint",
        "question": "Please review the ___ before signing the lease agreement.",
        "options": [
          "terms",
          "term",
          "terminal",
          "terminology"
        ],
        "correct_answer": 0,
        "explanation_vi": "'Terms' (các điều khoản) là từ thường đi kèm với hợp đồng (lease agreement)."
      },
      {
        "id": 27,
        "type": "checkpoint",
        "question": "The office manager will order more supplies ___ week.",
        "options": [
          "next",
          "last",
          "ago",
          "yesterday"
        ],
        "correct_answer": 0,
        "explanation_vi": "'Next week' chỉ thời gian trong tương lai, phù hợp với hành động 'will order'."
      },
      {
        "id": 28,
        "type": "checkpoint",
        "question": "Our prices are lower than ___ of our main competitors.",
        "options": [
          "that",
          "those",
          "this",
          "these"
        ],
        "correct_answer": 1,
        "explanation_vi": "Dùng 'those' để thay thế cho danh từ số nhiều 'prices' đã được nhắc đến trước đó để tránh lặp từ."
      },
      {
        "id": 29,
        "type": "checkpoint",
        "question": "We are planning to ___ our business to international markets next year.",
        "options": [
          "expand",
          "explore",
          "explain",
          "expect"
        ],
        "correct_answer": 0,
        "explanation_vi": "'Expand' có nghĩa là mở rộng, phù hợp với việc mở rộng kinh doanh ra thị trường quốc tế."
      },
      {
        "id": 30,
        "type": "checkpoint",
        "question": "Staff members are required to attend the training ___ on Thursday.",
        "options": [
          "session",
          "section",
          "selection",
          "solution"
        ],
        "correct_answer": 0,
        "explanation_vi": "'Training session' là cụm từ chỉ buổi tập huấn/đào tạo."
      }
    ],
    "speaking_prompt": "Look at the picture of the office desk. Describe what you see, including three objects on the desk and where they are located.",
    "speaking_sample_idea": "I see a laptop in the middle of the desk, a red pen next to the keyboard, and a cup of coffee on the right side.",
    "writing_prompt": "You want to invite your colleague, Mark, to have lunch together today. Write a short email to Mark. Write 25-40 words. Include: where to meet, what time to meet, and what to eat.",
    "writing_model_sentence": "Hi Mark, would you like to grab some sandwiches at the cafe near the office at 12:30 today?"
  },
  "units": [
    {
      "id": "u1",
      "title": "Office Life & Daily Routines",
      "description": "Learn basic vocabulary and grammar related to daily office tasks and routines.",
      "vocabulary": [
        {
          "word": "colleague",
          "ipa": "/ˈkɒliːɡ/",
          "part_of_speech": "noun",
          "meaning_vi": "đồng nghiệp",
          "example_en": "He discussed the new project with his colleague.",
          "example_vi": "Anh ấy đã thảo luận về dự án mới với đồng nghiệp của mình."
        },
        {
          "word": "document",
          "ipa": "/ˈdɒkjumənt/",
          "part_of_speech": "noun",
          "meaning_vi": "tài liệu",
          "example_en": "Please print this document for the meeting.",
          "example_vi": "Vui lòng in tài liệu này cho cuộc họp."
        },
        {
          "word": "attend",
          "ipa": "/əˈtend/",
          "part_of_speech": "verb",
          "meaning_vi": "tham dự",
          "example_en": "All staff members must attend the training session.",
          "example_vi": "Tất cả nhân viên phải tham dự buổi đào tạo."
        },
        {
          "word": "schedule",
          "ipa": "/ˈʃedjuːl/",
          "part_of_speech": "noun",
          "meaning_vi": "lịch trình",
          "example_en": "The manager has a very busy schedule today.",
          "example_vi": "Quản lý có một lịch trình rất bận rộn hôm nay."
        },
        {
          "word": "report",
          "ipa": "/rɪˈpɔːt/",
          "part_of_speech": "noun",
          "meaning_vi": "báo cáo",
          "example_en": "She is writing the weekly sales report.",
          "example_vi": "Cô ấy đang viết báo cáo doanh số hàng tuần."
        },
        {
          "word": "meeting",
          "ipa": "/ˈmiːtɪŋ/",
          "part_of_speech": "noun",
          "meaning_vi": "cuộc họp",
          "example_en": "The team meeting starts at 9 AM.",
          "example_vi": "Cuộc họp nhóm bắt đầu lúc 9 giờ sáng."
        },
        {
          "word": "office",
          "ipa": "/ˈɒfɪs/",
          "part_of_speech": "noun",
          "meaning_vi": "văn phòng",
          "example_en": "Our office is located in the city center.",
          "example_vi": "Văn phòng của chúng tôi nằm ở trung tâm thành phố."
        },
        {
          "word": "task",
          "ipa": "/tɑːsk/",
          "part_of_speech": "noun",
          "meaning_vi": "nhiệm vụ",
          "example_en": "Each employee has a specific task to complete.",
          "example_vi": "Mỗi nhân viên có một nhiệm vụ cụ thể phải hoàn thành."
        },
        {
          "word": "manager",
          "ipa": "/ˈmænɪdʒə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "quản lý",
          "example_en": "The manager approved my vacation request.",
          "example_vi": "Quản lý đã phê duyệt yêu cầu nghỉ phép của tôi."
        },
        {
          "word": "assist",
          "ipa": "/əˈsɪst/",
          "part_of_speech": "verb",
          "meaning_vi": "hỗ trợ",
          "example_en": "I will assist you with the presentation.",
          "example_vi": "Tôi sẽ hỗ trợ bạn chuẩn bị bài thuyết trình."
        }
      ],
      "grammar": {
        "point": "Present Simple (Thì hiện tại đơn)",
        "explanation_vi": "Dùng để diễn tả hành động lặp đi lặp lại, thói quen hoặc sự thật hiển nhiên trong môi trường công sở.",
        "structure": "S + V(s/es) / S + do/does not + V-inf",
        "example_en": "Mr. Green works at the headquarters every day.",
        "example_vi": "Ông Green làm việc tại trụ sở chính mỗi ngày.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "Mr. Tanaka ___ to the office by train every morning.",
            "options": [
              "commute",
              "commutes",
              "commuting",
              "is commute"
            ],
            "correct_answer": 1,
            "explanation_vi": "Chủ ngữ 'Mr. Tanaka' là ngôi thứ ba số ít (he), và đây là thói quen hằng ngày (thì hiện tại đơn), nên động từ phải thêm 's' thành 'commutes'."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "We usually ___ our weekly team meeting on Monday afternoons.",
            "options": [
              "have",
              "has",
              "having",
              "to have"
            ],
            "correct_answer": 0,
            "explanation_vi": "Chủ ngữ 'We' là ngôi thứ nhất số nhiều, đi với động từ nguyên mẫu không 'to' trong thì hiện tại đơn là 'have'."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "___ the receptionist answer the phone calls during lunch time?",
            "options": [
              "Do",
              "Does",
              "Is",
              "Are"
            ],
            "correct_answer": 1,
            "explanation_vi": "Chủ ngữ 'the receptionist' là ngôi thứ ba số ít, và câu hỏi có động từ thường 'answer', nên ta dùng trợ động từ 'Does' ở đầu câu."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "The accounting department ___ close at 5:00 PM sharp.",
            "options": [
              "don't",
              "doesn't",
              "isn't",
              "aren't"
            ],
            "correct_answer": 1,
            "explanation_vi": "Chủ ngữ 'The accounting department' là danh từ số ít (tương đương 'it'), đây là thì hiện tại đơn phủ định với động từ thường 'close', nên ta dùng 'doesn't'."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "Ms. Lopez always ___ her emails before leaving work.",
            "options": [
              "check",
              "checks",
              "checking",
              "checked"
            ],
            "correct_answer": 1,
            "explanation_vi": "Trạng từ chỉ tần suất 'always' chỉ thói quen. Chủ ngữ 'Ms. Lopez' là số ít nên động từ 'check' phải thêm 's' thành 'checks'."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "Mr. Green ______ to work by bus every morning.",
          "options": [
            "go",
            "goes",
            "going",
            "gone"
          ],
          "correct_answer": 1,
          "explanation_vi": "Chủ ngữ 'Mr. Green' là ngôi thứ ba số ít, động từ 'go' thêm 'es' thành 'goes' ở thì hiện tại đơn."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "They ______ not work on weekends.",
          "options": [
            "does",
            "do",
            "are",
            "have"
          ],
          "correct_answer": 1,
          "explanation_vi": "Chủ ngữ 'They' đi với trợ động từ 'do' trong câu phủ định của thì hiện tại đơn."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "She ______ the daily reports every afternoon.",
          "options": [
            "write",
            "writes",
            "writing",
            "written"
          ],
          "correct_answer": 1,
          "explanation_vi": "Chủ ngữ 'She' là ngôi thứ ba số ít, động từ 'write' thêm 's' thành 'writes'."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "______ you attend the meeting every Monday?",
          "options": [
            "Do",
            "Does",
            "Are",
            "Is"
          ],
          "correct_answer": 0,
          "explanation_vi": "Chủ ngữ 'you' đi với trợ động từ 'Do' trong câu hỏi của thì hiện tại đơn."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "Please print this ______ for the manager.",
          "options": [
            "document",
            "colleague",
            "schedule",
            "task"
          ],
          "correct_answer": 0,
          "explanation_vi": "'document' (tài liệu) là từ phù hợp nhất trong ngữ cảnh 'in tài liệu cho quản lý'."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "I need to discuss this project with my ______ in the marketing department.",
          "options": [
            "colleague",
            "office",
            "report",
            "task"
          ],
          "correct_answer": 0,
          "explanation_vi": "'colleague' (đồng nghiệp) phù hợp nhất khi nói về việc thảo luận dự án với ai đó trong phòng marketing."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "The manager asked me to ______ him with the presentation.",
          "options": [
            "attend",
            "assist",
            "schedule",
            "report"
          ],
          "correct_answer": 1,
          "explanation_vi": "'assist' (hỗ trợ) phù hợp nhất với cấu trúc 'assist someone with something' (hỗ trợ ai làm gì)."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "Our weekly ______ is scheduled for 9 AM.",
          "options": [
            "meeting",
            "document",
            "task",
            "office"
          ],
          "correct_answer": 0,
          "explanation_vi": "'meeting' (cuộc họp) phù hợp nhất với ngữ cảnh được lên lịch vào lúc 9 giờ sáng."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "Daily Office Schedule",
        "content": "Welcome to ABC Company. Our office opens at 8:00 AM. Employees usually check their emails first. The daily team meeting starts at 9:00 AM. Please make sure you arrive on time.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "What time does the office open?",
            "options": [
              "At 8:00 AM",
              "At 9:00 AM",
              "At 8:30 AM",
              "At 5:00 PM"
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu hỏi đọc hiểu cơ bản về thời gian mở cửa văn phòng, thường là 9 giờ sáng theo chuẩn chung."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Where should employees put their completed reports?",
            "options": [
              "On the manager's desk",
              "In the recycling bin",
              "On the kitchen table",
              "Under the chair"
            ],
            "correct_answer": 0,
            "explanation_vi": "Nhân viên được yêu cầu đặt báo cáo hoàn thành lên bàn làm việc của quản lý."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the notice: 'Please turn off the lights when you leave.' What does it mean?",
            "options": [
              "Leave the lights on all night.",
              "Turn on the lights before leaving.",
              "Switch off the lights before going out.",
              "Buy new lights for the office."
            ],
            "correct_answer": 2,
            "explanation_vi": "Biển báo nhắc nhở tắt đèn trước khi rời khỏi phòng để tiết kiệm điện."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "When is the weekly team meeting scheduled?",
            "options": [
              "Every Monday morning",
              "On Friday afternoons",
              "During lunch break",
              "Only once a month"
            ],
            "correct_answer": 0,
            "explanation_vi": "Cuộc họp hàng tuần của đội thường được lên lịch vào sáng thứ Hai."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "What is the purpose of the copy machine notice: 'Out of Order'?",
            "options": [
              "The machine is ready to use.",
              "The machine is broken and cannot be used.",
              "You need to order more paper.",
              "Please clean the glass."
            ],
            "correct_answer": 1,
            "explanation_vi": "Cụm từ 'Out of Order' có nghĩa là máy đang bị hỏng và không thể sử dụng được."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to the greeting: 'Good morning, Mr. Davis. Would you like some coffee?' How does Mr. Davis likely respond?",
            "options": [
              "Yes, please. Black coffee is fine.",
              "No, I am sleeping now.",
              "Goodbye, see you tomorrow.",
              "I am driving a car."
            ],
            "correct_answer": 0,
            "explanation_vi": "Đây là câu đáp lại lịch sự khi được mời cà phê vào buổi sáng tại văn phòng."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "A colleague asks: 'Where is the meeting room?' What is the correct response?",
            "options": [
              "It is at 5 PM.",
              "It is on the third floor.",
              "It is a red car.",
              "I like black coffee."
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu hỏi bắt đầu bằng 'Where' (Ở đâu) nên câu trả lời phải chỉ địa điểm là tầng ba."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "You hear: 'Could you help me send this email?' What is the best reply?",
            "options": [
              "Yes, of course. I can do it now.",
              "No, I am too hungry to eat.",
              "The train leaves at noon.",
              "It costs ten dollars."
            ],
            "correct_answer": 0,
            "explanation_vi": "Đây là lời đề nghị giúp đỡ, câu trả lời đồng ý là sự phản hồi tự nhiên nhất."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "Listen to the phone message: 'Hello, this is HR. Your interview is at 2 PM.' When is the interview?",
            "options": [
              "In the morning",
              "At 2 o'clock in the afternoon",
              "At midnight",
              "Tomorrow night"
            ],
            "correct_answer": 1,
            "explanation_vi": "2 PM tương ứng với 2 giờ chiều (afternoon)."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "A colleague says: 'I am going to take a lunch break.' What is an appropriate reply?",
            "options": [
              "Enjoy your meal!",
              "Sleep well!",
              "Happy birthday!",
              "Drive safely!"
            ],
            "correct_answer": 0,
            "explanation_vi": "Khi ai đó đi ăn trưa, câu chúc 'Enjoy your meal!' (Chúc ngon miệng!) là phù hợp nhất."
          }
        ],
        "speaking_prompt": "Describe your typical morning at the office. What is the first thing you do when you arrive?",
        "speaking_sample_idea": "Start by greeting colleagues, then turn on the computer, check urgent emails, and make a cup of coffee.",
        "writing_prompt": "Write a short email to your coworker, Sarah, to ask for the report from yesterday's meeting.",
        "writing_model_sentence": "Hi Sarah, could you please send me yesterday's meeting report when you have a moment?"
      }
    },
    {
      "id": "u2",
      "title": "Company Structure & Departments",
      "description": "Understand company organization, departments, and current activities.",
      "vocabulary": [
        {
          "word": "department",
          "ipa": "/dɪˈpɑːtmənt/",
          "part_of_speech": "noun",
          "meaning_vi": "phòng ban",
          "example_en": "She works in the sales department.",
          "example_vi": "Cô ấy làm việc ở phòng bán hàng."
        },
        {
          "word": "director",
          "ipa": "/dəˈrektə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "giám đốc",
          "example_en": "The director announced the new company policy.",
          "example_vi": "Giám đốc đã thông báo chính sách mới của công ty."
        },
        {
          "word": "employee",
          "ipa": "/ɪmˈplɔɪiː/",
          "part_of_speech": "noun",
          "meaning_vi": "nhân viên",
          "example_en": "The company has over one hundred employees.",
          "example_vi": "Công ty có hơn một trăm nhân viên."
        },
        {
          "word": "headquarters",
          "ipa": "/ˌhedˈkwɔːtəz/",
          "part_of_speech": "noun",
          "meaning_vi": "trụ sở chính",
          "example_en": "Our headquarters is located in Tokyo.",
          "example_vi": "Trụ sở chính của chúng tôi nằm ở Tokyo."
        },
        {
          "word": "branch",
          "ipa": "/brɑːntʃ/",
          "part_of_speech": "noun",
          "meaning_vi": "chi nhánh",
          "example_en": "They are opening a new branch in Chicago.",
          "example_vi": "Họ đang mở một chi nhánh mới ở Chicago."
        },
        {
          "word": "executive",
          "ipa": "/ɪɡˈzekjətɪv/",
          "part_of_speech": "noun",
          "meaning_vi": "người điều hành",
          "example_en": "The chief executive officer made the final decision.",
          "example_vi": "Giám đốc điều hành tối cao đã đưa ra quyết định cuối cùng."
        },
        {
          "word": "staff",
          "ipa": "/stɑːf/",
          "part_of_speech": "noun",
          "meaning_vi": "đội ngũ nhân viên",
          "example_en": "The hotel staff was very helpful.",
          "example_vi": "Nhân viên khách sạn rất nhiệt tình giúp đỡ."
        },
        {
          "word": "supervise",
          "ipa": "/ˈsuːpəvaɪz/",
          "part_of_speech": "verb",
          "meaning_vi": "giám sát",
          "example_en": "She is hired to supervise the production line.",
          "example_vi": "Cô ấy được thuê để giám sát dây chuyền sản xuất."
        },
        {
          "word": "division",
          "ipa": "/dɪˈvɪʒn/",
          "part_of_speech": "noun",
          "meaning_vi": "bộ phận",
          "example_en": "He is the head of the marketing division.",
          "example_vi": "Anh ấy là trưởng bộ phận tiếp thị."
        },
        {
          "word": "operate",
          "ipa": "/ˈɒpəreɪt/",
          "part_of_speech": "verb",
          "meaning_vi": "vận hành",
          "example_en": "The company operates in ten different countries.",
          "example_vi": "Công ty hoạt động tại mười quốc gia khác nhau."
        }
      ],
      "grammar": {
        "point": "Present Continuous (Thì hiện tại tiếp diễn)",
        "explanation_vi": "Dùng để diễn tả hành động đang xảy ra tại thời điểm nói hoặc các dự án, kế hoạch đang được thực hiện ở hiện tại.",
        "structure": "S + am/is/are + V-ing",
        "example_en": "They are setting up the new branch this week.",
        "example_vi": "Họ đang thiết lập chi nhánh mới trong tuần này.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "Mr. Tanaka is not at his desk right now because he ___ with the clients in the meeting room.",
            "options": [
              "talk",
              "talks",
              "is talking",
              "talking"
            ],
            "correct_answer": 2,
            "explanation_vi": "Hành động đang diễn ra tại thời điểm nói (Right now) sử dụng thì hiện tại tiếp diễn (am/is/are + V-ing). Chủ ngữ 'Mr. Tanaka' số ít đi với 'is talking'."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "Listen! The Director of Human Resources ___ about the new company policy.",
            "options": [
              "is speaking",
              "speaks",
              "speak",
              "speaking"
            ],
            "correct_answer": 0,
            "explanation_vi": "Từ nhận biết 'Listen!' cho thấy hành động đang diễn ra ngay lúc nói, ta dùng thì hiện tại tiếp diễn 'is speaking'."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "At present, the marketing team ___ a new advertising campaign for our products.",
            "options": [
              "prepare",
              "prepares",
              "is preparing",
              "are preparing"
            ],
            "correct_answer": 3,
            "explanation_vi": "Cụm từ 'At present' (hiện tại) chỉ hành động đang diễn ra. Chủ ngữ 'the marketing team' được coi là danh từ tập thể số nhiều trong ngữ cảnh này, dùng 'are preparing'."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "Look at the IT department. What ___ on those computers?",
            "options": [
              "they are doing",
              "are they doing",
              "do they do",
              "they do"
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu hỏi với 'Look at...' yêu cầu thì hiện tại tiếp diễn. Cấu trúc câu hỏi: Wh-word + to be (are) + subject (they) + V-ing (doing)."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "Please be quiet. The finance manager ___ the quarterly budget report.",
            "options": [
              "review",
              "reviews",
              "is reviewing",
              "reviewed"
            ],
            "correct_answer": 2,
            "explanation_vi": "Câu mệnh lệnh 'Please be quiet' (Xin hãy giữ trật tự) ngụ ý hành động đang diễn ra ngay lúc nói, do đó ta dùng thì hiện tại tiếp diễn 'is reviewing'."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "The marketing team ______ preparing a new campaign right now.",
          "options": [
            "is",
            "are",
            "am",
            "be"
          ],
          "correct_answer": 0,
          "explanation_vi": "'The marketing team' được xem là danh từ tập hợp số ít trong ngữ cảnh này, đi với 'is'."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "We ______ opening a new branch this month.",
          "options": [
            "is",
            "are",
            "am",
            "be"
          ],
          "correct_answer": 1,
          "explanation_vi": "Chủ ngữ 'We' đi với động từ tobe 'are' trong thì hiện tại tiếp diễn."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "What ______ you doing at the moment?",
          "options": [
            "is",
            "are",
            "do",
            "does"
          ],
          "correct_answer": 1,
          "explanation_vi": "Cấu trúc câu hỏi hiện tại tiếp diễn với chủ ngữ 'you' là 'What are you V-ing?'"
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "The director ______ not attending the conference today.",
          "options": [
            "is",
            "are",
            "am",
            "be"
          ],
          "correct_answer": 0,
          "explanation_vi": "Chủ ngữ 'The director' số ít đi với 'is' trong câu phủ định hiện tại tiếp diễn."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "She works in the human resources ______ of our company.",
          "options": [
            "department",
            "headquarters",
            "branch",
            "staff"
          ],
          "correct_answer": 0,
          "explanation_vi": "'department' (phòng ban) phù hợp nhất với cụm từ 'human resources department' (phòng nhân sự)."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "The company's ______ is located in New York, but we have small offices everywhere.",
          "options": [
            "headquarters",
            "employee",
            "staff",
            "division"
          ],
          "correct_answer": 0,
          "explanation_vi": "'headquarters' (trụ sở chính) phù hợp nhất khi đối lập với 'small offices' (văn phòng nhỏ)."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "Our company has over 500 ______ worldwide.",
          "options": [
            "employees",
            "divisions",
            "headquarters",
            "branches"
          ],
          "correct_answer": 0,
          "explanation_vi": "'employees' (nhân viên) phù hợp nhất khi nói về số lượng nhân sự của công ty."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "The manager will ______ the new project team to ensure everything goes well.",
          "options": [
            "supervise",
            "operate",
            "branch",
            "staff"
          ],
          "correct_answer": 0,
          "explanation_vi": "'supervise' (giám sát) phù hợp nhất với vai trò của quản lý đối với đội ngũ dự án."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "New Branch Announcement",
        "content": "We are excited to announce that we are opening a new branch in Chicago next month. Our regional director is currently supervising the setup. We are hiring 20 new employees for this location.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Which department is responsible for hiring new employees and handling payroll?",
            "options": [
              "Human Resources",
              "Sales",
              "Information Technology",
              "Customer Service"
            ],
            "correct_answer": 0,
            "explanation_vi": "Phòng Nhân sự (Human Resources) chịu trách nhiệm tuyển dụng nhân viên mới và xử lý bảng lương."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the memo: 'Please send all receipts for your travel expenses to the ___ department for reimbursement.' Which department processes money and budgets?",
            "options": [
              "Marketing",
              "Finance",
              "Production",
              "Reception"
            ],
            "correct_answer": 1,
            "explanation_vi": "Phòng Tài chính (Finance) xử lý các vấn đề liên quan đến tiền bạc, chi phí và ngân sách."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Who is the head of a company, holding the highest ranking executive position?",
            "options": [
              "Intern",
              "CEO (Chief Executive Officer)",
              "Team Leader",
              "Receptionist"
            ],
            "correct_answer": 1,
            "explanation_vi": "CEO là Giám đốc điều hành, vị trí lãnh đạo cao nhất trong công ty."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "If your computer is broken or you cannot connect to the internet, which department should you contact?",
            "options": [
              "IT (Information Technology)",
              "Legal Department",
              "Shipping",
              "R&D (Research and Development)"
            ],
            "correct_answer": 0,
            "explanation_vi": "Bộ phận Công nghệ thông tin (IT) hỗ trợ các vấn đề về máy tính, mạng và phần mềm."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "What is the main goal of the Sales department?",
            "options": [
              "To design new logos",
              "To sell products and services to customers",
              "To clean the office",
              "To write contracts"
            ],
            "correct_answer": 1,
            "explanation_vi": "Mục tiêu chính của phòng Kinh doanh (Sales) là bán sản phẩm và dịch vụ cho khách hàng."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to the phone message: 'Hi, I need help with our company's new advertising campaign.' Which department does the speaker likely want to reach?",
            "options": [
              "Marketing Department",
              "Security",
              "Maintenance",
              "Warehouse"
            ],
            "correct_answer": 0,
            "explanation_vi": "Chiến dịch quảng cáo (advertising campaign) thuộc về phòng Tiếp thị (Marketing)."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "In a voicemail, a colleague says: 'Please send the contract to our lawyers.' Which department is this?",
            "options": [
              "Legal Department",
              "Purchasing Department",
              "Shipping Department",
              "Public Relations"
            ],
            "correct_answer": 0,
            "explanation_vi": "Luật sư (lawyers) làm việc trong Phòng Pháp chế (Legal Department)."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "You hear an announcement: 'All manufacturing staff must wear safety helmets in the factory.' What does 'manufacturing' mean here?",
            "options": [
              "Making products",
              "Answering phones",
              "Selling items",
              "Hiring staff"
            ],
            "correct_answer": 0,
            "explanation_vi": "Manufacturing có nghĩa là sản xuất, chế tạo sản phẩm trong nhà máy."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "A speaker says in a meeting: 'Our team designs and tests new products before we make them.' Which department is speaking?",
            "options": [
              "R&D (Research and Development)",
              "Accounting",
              "Customer Support",
              "Facilities"
            ],
            "correct_answer": 0,
            "explanation_vi": "Thiết kế và kiểm tra sản phẩm mới là công việc của phòng Nghiên cứu và Phát triển (R&D)."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to a customer on a call: 'My package hasn't arrived yet.' Who should handle this call?",
            "options": [
              "Shipping and Logistics Department",
              "The CEO",
              "The Board of Directors",
              "Internal Audit"
            ],
            "correct_answer": 0,
            "explanation_vi": "Vấn đề về bưu phẩm, vận chuyển (package, arrive) do bộ phận Vận chuyển và Hậu cần (Shipping and Logistics) phụ trách."
          }
        ],
        "speaking_prompt": "Which department do you work in, and what do you do there?",
        "speaking_sample_idea": "I work in the Sales department. My job is to talk to customers and sell our products.",
        "writing_prompt": "Write one sentence to introduce your manager and where their office is located.",
        "writing_model_sentence": "My manager is Mr. Smith, and his office is on the third floor."
      }
    },
    {
      "id": "u3",
      "title": "Business Meetings & Appointments",
      "description": "Learn how to schedule, confirm, and manage business meetings.",
      "vocabulary": [
        {
          "word": "appointment",
          "ipa": "/əˈpɔɪntmənt/",
          "part_of_speech": "noun",
          "meaning_vi": "cuộc hẹn",
          "example_en": "I have an appointment with the client at 2 PM.",
          "example_vi": "Tôi có một cuộc hẹn với khách hàng lúc 2 giờ chiều."
        },
        {
          "word": "agenda",
          "ipa": "/əˈdʒendə/",
          "part_of_speech": "noun",
          "meaning_vi": "chương trình nghị sự",
          "example_en": "The agenda was sent to all participants yesterday.",
          "example_vi": "Chương trình nghị sự đã được gửi đến tất cả người tham gia vào ngày hôm qua."
        },
        {
          "word": "postpone",
          "ipa": "/pəʊstˈpəʊn/",
          "part_of_speech": "verb",
          "meaning_vi": "trì hoãn",
          "example_en": "We had to postpone the meeting until next week.",
          "example_vi": "Chúng tôi phải hoãn cuộc họp cho đến tuần sau."
        },
        {
          "word": "confirm",
          "ipa": "/kənˈfɜːm/",
          "part_of_speech": "verb",
          "meaning_vi": "xác nhận",
          "example_en": "Please confirm your attendance by Friday.",
          "example_vi": "Vui lòng xác nhận sự tham dự của bạn trước thứ Sáu."
        },
        {
          "word": "presentation",
          "ipa": "/ˌpreznˈteɪʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "bài thuyết trình",
          "example_en": "Her presentation on market trends was excellent.",
          "example_vi": "Bài thuyết trình của cô ấy về xu hướng thị trường rất xuất sắc."
        },
        {
          "word": "discuss",
          "ipa": "/dɪˈskʌs/",
          "part_of_speech": "verb",
          "meaning_vi": "thảo luận",
          "example_en": "We need to discuss the budget for next year.",
          "example_vi": "Chúng ta cần thảo luận về ngân sách cho năm tới."
        },
        {
          "word": "minutes",
          "ipa": "/ˈmɪnɪts/",
          "part_of_speech": "noun",
          "meaning_vi": "biên bản cuộc họp",
          "example_en": "Who is going to take the minutes today?",
          "example_vi": "Ai sẽ là người ghi biên bản cuộc họp hôm nay?"
        },
        {
          "word": "cancel",
          "ipa": "/ˈkænsl/",
          "part_of_speech": "verb",
          "meaning_vi": "hủy bỏ",
          "example_en": "They had to cancel the meeting due to bad weather.",
          "example_vi": "Họ phải hủy cuộc họp do thời tiết xấu."
        },
        {
          "word": "venue",
          "ipa": "/ˈvenjuː/",
          "part_of_speech": "noun",
          "meaning_vi": "địa điểm",
          "example_en": "The venue for the conference has been changed.",
          "example_vi": "Địa điểm tổ chức hội nghị đã được thay đổi."
        },
        {
          "word": "participate",
          "ipa": "/pɑːˈtɪsɪpeɪt/",
          "part_of_speech": "verb",
          "meaning_vi": "tham gia",
          "example_en": "Many local businesses will participate in the exhibition.",
          "example_vi": "Nhiều doanh nghiệp địa phương sẽ tham gia vào triển lãm."
        }
      ],
      "grammar": {
        "point": "Past Simple (Thì quá khứ đơn)",
        "explanation_vi": "Dùng để diễn tả các hành động, sự kiện đã xảy ra và kết thúc hoàn toàn trong quá khứ (ví dụ: cuộc họp ngày hôm qua, dự án năm ngoái).",
        "structure": "S + V2/ed / S + did not + V-inf",
        "example_en": "We confirmed the meeting details yesterday.",
        "example_vi": "Chúng tôi đã xác nhận chi tiết cuộc họp vào ngày hôm qua.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "Mr. Tanaka ___ the quarterly budget report yesterday afternoon.",
            "options": [
              "review",
              "reviewed",
              "reviewing",
              "reviews"
            ],
            "correct_answer": 1,
            "explanation_vi": "Trạng từ 'yesterday afternoon' chỉ thời gian trong quá khứ, nên ta dùng thì quá khứ đơn với động từ thêm '-ed' (reviewed)."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "Where ___ you put the new client contracts last Friday?",
            "options": [
              "do",
              "does",
              "did",
              "were"
            ],
            "correct_answer": 2,
            "explanation_vi": "Trong câu hỏi thì quá khứ đơn với động từ thường, ta dùng trợ động từ 'did' ở đầu câu trước chủ ngữ."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "The marketing team ___ able to finish the presentation on time last week.",
            "options": [
              "was",
              "were",
              "did",
              "is"
            ],
            "correct_answer": 1,
            "explanation_vi": "Chủ ngữ 'The marketing team' (được xem là số nhiều trong tiếng Anh Anh hoặc dùng với 'were' khi nhấn mạnh các thành viên) hoặc đơn giản 'The marketing team were' diễn tả trạng thái trong quá khứ. (Lưu ý: 'The team were' rất phổ biến trong văn phong công sở khi chỉ các thành viên)."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "Ms. Davis ___ the meeting room because it was already booked.",
            "options": [
              "not change",
              "didn't change",
              "doesn't change",
              "change not"
            ],
            "correct_answer": 1,
            "explanation_vi": "Để tạo câu phủ định trong thì quá khứ đơn, ta dùng 'did not' (didn't) và giữ nguyên động từ chính (change)."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "When ___ the director arrive at the office for the interview?",
            "options": [
              "does",
              "did",
              "was",
              "is"
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu hỏi với từ để hỏi 'When' ở thì quá khứ đơn yêu cầu trợ động từ 'did' đi kèm với động từ nguyên thể 'arrive'."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "Yesterday, we ______ the contract with the client.",
          "options": [
            "sign",
            "signed",
            "signing",
            "signs"
          ],
          "correct_answer": 1,
          "explanation_vi": "Trạng từ 'Yesterday' chỉ thời gian trong quá khứ, động từ 'sign' chia ở quá khứ đơn là 'signed'."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "They ______ not attend the meeting last Friday.",
          "options": [
            "do",
            "does",
            "did",
            "done"
          ],
          "correct_answer": 2,
          "explanation_vi": "'last Friday' chỉ quá khứ, câu phủ định dùng trợ động từ 'did'."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "Where ______ you go for the conference last week?",
          "options": [
            "do",
            "did",
            "are",
            "were"
          ],
          "correct_answer": 1,
          "explanation_vi": "Câu hỏi ở thì quá khứ đơn với động từ thường 'go' sử dụng trợ động từ 'did'."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "She ______ the presentation slides last night.",
          "options": [
            "prepare",
            "prepared",
            "preparing",
            "prepares"
          ],
          "correct_answer": 1,
          "explanation_vi": "'last night' chỉ quá khứ, động từ 'prepare' thêm 'd' thành 'prepared'."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "I have an ______ with the client at 2 PM.",
          "options": [
            "appointment",
            "agenda",
            "venue",
            "minutes"
          ],
          "correct_answer": 0,
          "explanation_vi": "'appointment' (cuộc hẹn) phù hợp nhất khi nói về việc hẹn gặp khách hàng."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "Please send the meeting ______ to all participants so they know what we will discuss.",
          "options": [
            "agenda",
            "venue",
            "postpone",
            "cancel"
          ],
          "correct_answer": 0,
          "explanation_vi": "'agenda' (chương trình nghị sự) là tài liệu ghi rõ nội dung thảo luận của cuộc họp."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "We had to ______ the meeting because the manager was sick.",
          "options": [
            "postpone",
            "confirm",
            "discuss",
            "participate"
          ],
          "correct_answer": 0,
          "explanation_vi": "'postpone' (trì hoãn) phù hợp nhất vì lý do quản lý bị ốm."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "The hotel is a perfect ______ for our annual conference.",
          "options": [
            "venue",
            "agenda",
            "minutes",
            "appointment"
          ],
          "correct_answer": 0,
          "explanation_vi": "'venue' (địa điểm) phù hợp nhất khi nói về nơi tổ chức hội nghị."
        }
      ],
      "skills_practice": {
        "type": "listening",
        "title": "Voicemail from Mr. Davis",
        "content": "Hello, this is John Davis. I am calling to confirm our appointment on Wednesday at 10 AM. Unfortunately, I have to postpone it to 2 PM due to an urgent meeting. Please let me know if this works for you.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Read the email:\n'Hi Mark,\nCan we move our meeting to 3:00 PM today?\nBest,\nAnna'\n\nWhat does Anna want to do?",
            "options": [
              "Cancel the meeting",
              "Change the meeting time",
              "Start the meeting early",
              "Ask Mark a question"
            ],
            "correct_answer": 1,
            "explanation_vi": "Anna hỏi 'Can we move our meeting to 3:00 PM today?' có nghĩa là cô ấy muốn đổi giờ cuộc họp sang 3 giờ chiều."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the sign on the door:\n'Meeting in Progress. Please do not knock.'\n\nWhat should you do?",
            "options": [
              "Enter quietly",
              "Knock on the door",
              "Wait outside",
              "Clean the room"
            ],
            "correct_answer": 2,
            "explanation_vi": "Biển báo 'Meeting in Progress. Please do not knock' (Cuộc họp đang diễn ra. Vui lòng không gõ cửa) nghĩa là bạn nên đợi bên ngoài."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the message:\n'Please bring your laptop to the team meeting tomorrow.'\n\nWhat do you need to bring?",
            "options": [
              "A notebook",
              "A laptop",
              "A pen",
              "A phone"
            ],
            "correct_answer": 1,
            "explanation_vi": "Tin nhắn yêu cầu 'bring your laptop' (mang theo máy tính xách tay) đến cuộc họp."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Read the schedule:\n'10:00 AM - 11:00 AM: Marketing Review'\n\nWhen does the Marketing Review end?",
            "options": [
              "At 10:00 AM",
              "At 10:30 AM",
              "At 11:00 AM",
              "At 12:00 PM"
            ],
            "correct_answer": 2,
            "explanation_vi": "Lịch trình ghi '10:00 AM - 11:00 AM', cho thấy sự kiện kết thúc lúc 11:00 AM."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the note:\n'Room 4B is fully booked today for client interviews.'\n\nWhy is Room 4B booked?",
            "options": [
              "For a party",
              "For client interviews",
              "For lunch",
              "For cleaning"
            ],
            "correct_answer": 1,
            "explanation_vi": "Ghi chú nêu rõ phòng được đặt 'for client interviews' (để phỏng vấn khách hàng)."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to the dialogue snippet:\nMan: 'When is the manager's appointment?'\nWoman: 'It's on Friday morning.'\n\nWhen is the appointment?",
            "options": [
              "Thursday morning",
              "Friday morning",
              "Friday afternoon",
              "Monday morning"
            ],
            "correct_answer": 1,
            "explanation_vi": "Người phụ nữ trả lời 'It's on Friday morning' (Nó diễn ra vào sáng thứ Sáu)."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "Listen to the voice message:\n'Hi, this is David. I am calling to confirm our meeting on Wednesday at 2 PM.'\n\nWhy is David calling?",
            "options": [
              "To cancel the meeting",
              "To confirm the meeting",
              "To ask for directions",
              "To reschedule the meeting"
            ],
            "correct_answer": 1,
            "explanation_vi": "David nói 'I am calling to confirm our meeting' (Tôi gọi để xác nhận cuộc họp của chúng ta)."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "Listen to the question:\n'Where should we hold the presentation?'\n\nWhat is the best response?",
            "options": [
              "At 2:00 PM.",
              "In Conference Room A.",
              "Yes, I can.",
              "With the marketing team."
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu hỏi bắt đầu bằng 'Where' (Ở đâu) nên câu trả lời phù hợp nhất là chỉ địa điểm: 'In Conference Room A' (Ở phòng họp A)."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "Listen to the request:\n'Could you please take notes during the meeting?'\n\nWhat is the speaker asking you to do?",
            "options": [
              "Lead the meeting",
              "Write down the important points",
              "Leave the room",
              "Bring coffee"
            ],
            "correct_answer": 1,
            "explanation_vi": "Cụm từ 'take notes' có nghĩa là ghi chép lại các điểm quan trọng trong cuộc họp."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to the announcement:\n'Attention everyone, the 10 o'clock meeting is delayed by 15 minutes.'\n\nWhen will the meeting start now?",
            "options": [
              "At 10:00",
              "At 10:15",
              "At 10:30",
              "At 11:15"
            ],
            "correct_answer": 1,
            "explanation_vi": "Cuộc họp lúc 10 giờ bị hoãn 15 phút (delayed by 15 minutes), nghĩa là nó sẽ bắt đầu lúc 10:15."
          }
        ],
        "speaking_prompt": "You want to schedule a meeting with your coworker, Mr. Davis. Tell him what day and time you are free.",
        "speaking_sample_idea": "Hello Mr. Davis, can we meet on Tuesday at 2 PM?",
        "writing_prompt": "Write a short email to your boss to confirm a meeting on Friday at 10 AM.",
        "writing_model_sentence": "Dear manager, I confirm our meeting on Friday at 10 AM."
      }
    },
    {
      "id": "u4",
      "title": "Travel & Transportation",
      "description": "Master vocabulary and grammar for business trips and travel arrangements.",
      "vocabulary": [
        {
          "word": "itinerary",
          "ipa": "/aɪˈtɪnərəri/",
          "part_of_speech": "noun",
          "meaning_vi": "lịch trình chuyến đi",
          "example_en": "The travel agent sent us the final itinerary.",
          "example_vi": "Đại lý du lịch đã gửi cho chúng tôi lịch trình chuyến đi cuối cùng."
        },
        {
          "word": "flight",
          "ipa": "/flaɪt/",
          "part_of_speech": "noun",
          "meaning_vi": "chuyến bay",
          "example_en": "My flight to London is boarding now.",
          "example_vi": "Chuyến bay của tôi đi Luân Đôn đang lên máy bay."
        },
        {
          "word": "delay",
          "ipa": "/dɪˈleɪ/",
          "part_of_speech": "verb",
          "meaning_vi": "trì hoãn",
          "example_en": "Bad weather will delay the train.",
          "example_vi": "Thời tiết xấu sẽ làm trễ chuyến tàu."
        },
        {
          "word": "reservation",
          "ipa": "/ˌrezəˈveɪʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "sự đặt chỗ",
          "example_en": "I made a hotel reservation under your name.",
          "example_vi": "Tôi đã đặt phòng khách sạn dưới tên của bạn."
        },
        {
          "word": "ticket",
          "ipa": "/ˈtɪkɪt/",
          "part_of_speech": "noun",
          "meaning_vi": "vé",
          "example_en": "You need a ticket to board the train.",
          "example_vi": "Bạn cần có vé để lên tàu."
        },
        {
          "word": "luggage",
          "ipa": "/ˈlʌɡɪdʒ/",
          "part_of_speech": "noun",
          "meaning_vi": "hành lý",
          "example_en": "Please do not leave your luggage unattended.",
          "example_vi": "Vui lòng không để hành lý của bạn mà không có người trông coi."
        },
        {
          "word": "boarding",
          "ipa": "/ˈbɔːdɪŋ/",
          "part_of_speech": "noun",
          "meaning_vi": "việc lên tàu/máy bay",
          "example_en": "Boarding will begin 30 minutes before departure.",
          "example_vi": "Việc lên máy bay sẽ bắt đầu 30 phút trước giờ khởi hành."
        },
        {
          "word": "destination",
          "ipa": "/ˌdestɪˈneɪʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "điểm đến",
          "example_en": "Paris is a popular tourist destination.",
          "example_vi": "Paris là một điểm đến du lịch nổi tiếng."
        },
        {
          "word": "passenger",
          "ipa": "/ˈpæsɪndʒə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "hành khách",
          "example_en": "The plane carries up to 200 passengers.",
          "example_vi": "Máy bay chở tối đa 200 hành khách."
        },
        {
          "word": "transfer",
          "ipa": "/trænsˈfɜː(r)/",
          "part_of_speech": "verb",
          "meaning_vi": "di chuyển/chuyển giao",
          "example_en": "We will transfer you to the hotel by shuttle bus.",
          "example_vi": "Chúng tôi sẽ chuyển bạn đến khách sạn bằng xe buýt đưa đón."
        }
      ],
      "grammar": {
        "point": "Future Simple (Thì tương lai đơn)",
        "explanation_vi": "Dùng để diễn tả các quyết định tức thì, dự đoán hoặc kế hoạch trong tương lai liên quan đến lịch trình đi lại.",
        "structure": "S + will + V-inf / S + will not (won't) + V-inf",
        "example_en": "The flight will depart at 9 PM.",
        "example_vi": "Chuyến bay sẽ khởi hành lúc 9 giờ tối.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "Excuse me, what time ___ the next train to London leave?",
            "options": [
              "will",
              "does",
              "is",
              "do"
            ],
            "correct_answer": 1,
            "explanation_vi": "Đối với lịch trình tàu xe, máy bay (timetable/schedule), chúng ta dùng thì Hiện tại đơn (Present Simple) với động từ 'does' thay vì thì tương lai đơn để hỏi giờ tàu chạy."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "Don't worry, I ___ your ticket online for you right now.",
            "options": [
              "book",
              "booked",
              "will book",
              "booking"
            ],
            "correct_answer": 2,
            "explanation_vi": "Thì tương lai đơn (will + động từ nguyên mẫu) được dùng để đưa ra một quyết định làm gì đó ngay tại thời điểm nói (ví dụ: đề nghị giúp đỡ ai đó)."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "Do you think the flight ___ on time tomorrow?",
            "options": [
              "arrive",
              "will arrive",
              "arriving",
              "arrives"
            ],
            "correct_answer": 1,
            "explanation_vi": "Chúng ta dùng 'will' kết hợp với động từ nguyên mẫu để đưa ra dự đoán về một sự việc trong tương lai, thường đi kèm với các từ chỉ quan điểm như 'think'."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "We ___ a taxi to the airport tomorrow morning because we have heavy bags.",
            "options": [
              "will take",
              "takes",
              "taking",
              "took"
            ],
            "correct_answer": 0,
            "explanation_vi": "Diễn tả một hành động sẽ xảy ra trong tương lai (tomorrow morning), ta dùng thì tương lai đơn 'will take'."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "___ you help me carry this suitcase to the platform, please?",
            "options": [
              "Are",
              "Do",
              "Will",
              "Did"
            ],
            "correct_answer": 2,
            "explanation_vi": "Dùng 'Will you...?' ở đầu câu là một cách lịch sự để nhờ vả ai đó làm việc gì giúp mình (trong ngữ cảnh nhà ga, du lịch)."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "The flight ______ depart on time if the weather is good.",
          "options": [
            "will",
            "is",
            "going",
            "shall"
          ],
          "correct_answer": 0,
          "explanation_vi": "Cấu trúc tương lai đơn diễn tả dự đoán: 'will + V-inf'."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "We ______ book the hotel rooms tomorrow.",
          "options": [
            "will",
            "are",
            "going",
            "do"
          ],
          "correct_answer": 0,
          "explanation_vi": "'tomorrow' chỉ tương lai đơn, đi với 'will' + động từ nguyên mẫu 'book'."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "______ you travel to Tokyo next month?",
          "options": [
            "Will",
            "Are",
            "Do",
            "Is"
          ],
          "correct_answer": 0,
          "explanation_vi": "Câu hỏi ở thì tương lai đơn bắt đầu bằng trợ động từ 'Will'."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "I ______ not attend the conference next week.",
          "options": [
            "will",
            "am",
            "do",
            "going"
          ],
          "correct_answer": 0,
          "explanation_vi": "Câu phủ định ở tương lai đơn: 'will not' (hoặc won't)."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "Please check the travel ______ for flight details.",
          "options": [
            "itinerary",
            "luggage",
            "ticket",
            "destination"
          ],
          "correct_answer": 0,
          "explanation_vi": "'itinerary' (lịch trình chuyến đi) là nơi chứa thông tin chi tiết về các chuyến bay và thời gian."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "There is a two-hour ______ due to heavy rain.",
          "options": [
            "delay",
            "flight",
            "reservation",
            "boarding"
          ],
          "correct_answer": 0,
          "explanation_vi": "'delay' (sự trì hoãn/chậm trễ) phù hợp nhất với lý do mưa lớn."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "You must show your ______ before boarding the plane.",
          "options": [
            "ticket",
            "luggage",
            "destination",
            "delay"
          ],
          "correct_answer": 0,
          "explanation_vi": "'ticket' (vé) là thứ bắt buộc phải xuất trình trước khi lên máy bay."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "Passengers are allowed to bring one piece of hand ______ on board.",
          "options": [
            "luggage",
            "flight",
            "itinerary",
            "destination"
          ],
          "correct_answer": 0,
          "explanation_vi": "'luggage' (hành lý) đi với cụm từ 'hand luggage' (hành lý xách tay)."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "Business Trip Itinerary",
        "content": "Mr. Tanaka will travel to London on Monday. His flight departs at 8:00 AM. He will arrive at Heathrow Airport at 1:00 PM. A driver will transfer him to the hotel.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "What time does the train to London depart?",
            "options": [
              "At 8:30 AM",
              "Platform 4",
              "To London",
              "Express train"
            ],
            "correct_answer": 0,
            "explanation_vi": "Câu hỏi hỏi về thời gian khởi hành của chuyến tàu đi London ('What time'). Đáp án 'At 8:30 AM' chỉ thời gian."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Where should passengers go to catch Flight VN123?",
            "options": [
              "Gate 5",
              "Left luggage",
              "Window seat",
              "One way"
            ],
            "correct_answer": 0,
            "explanation_vi": "Câu hỏi hỏi vị trí để lên chuyến bay ('Where'). 'Gate 5' (Cổng số 5) là địa điểm chính xác tại sân bay."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "How much is a single ticket to the city center?",
            "options": [
              "Five dollars",
              "Bus number 7",
              "Next Monday",
              "Very fast"
            ],
            "correct_answer": 0,
            "explanation_vi": "Câu hỏi hỏi giá tiền ('How much'). 'Five dollars' là đáp án chỉ giá vé."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Which platform does the subway arrive at?",
            "options": [
              "Platform 2",
              "At 10 o'clock",
              "Credit card",
              "Round trip"
            ],
            "correct_answer": 0,
            "explanation_vi": "Câu hỏi hỏi về số sân ga ('Which platform'). 'Platform 2' là đáp án phù hợp nhất."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Who can help you with your heavy suitcase at the hotel?",
            "options": [
              "The bellboy",
              "The pilot",
              "The driver",
              "The passenger"
            ],
            "correct_answer": 0,
            "explanation_vi": "Người giúp khách mang hành lý nặng tại khách sạn là nhân viên khuân vác ('The bellboy')."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to the announcement. What is the cause of the flight delay?",
            "options": [
              "Bad weather",
              "Late passengers",
              "No fuel",
              "Closed airport"
            ],
            "correct_answer": 0,
            "explanation_vi": "Trong các bài nghe TOEIC phần thông báo sân bay, thời tiết xấu ('Bad weather') thường là nguyên nhân phổ biến dẫn đến việc hoãn chuyến."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "Listen to the dialogue. How will the man travel to the station?",
            "options": [
              "By taxi",
              "By bus",
              "By bicycle",
              "On foot"
            ],
            "correct_answer": 0,
            "explanation_vi": "Người nói trong đoạn hội thoại thường đề cập đến việc gọi xe taxi ('By taxi') để ra ga khi đang vội."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "Listen to the station announcement. Which train is cancelled?",
            "options": [
              "The 9:15 train to Paris",
              "The 8:00 train to Rome",
              "The 10:30 train to Berlin",
              "The 7:45 train to Madrid"
            ],
            "correct_answer": 0,
            "explanation_vi": "Thông báo qua loa phát thanh tại nhà ga thường nêu rõ giờ và điểm đến của chuyến tàu bị hủy, ví dụ 'The 9:15 train to Paris'."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "Listen to the conversation at the counter. What kind of ticket does the woman want?",
            "options": [
              "A round-trip ticket",
              "A one-way ticket",
              "A children's ticket",
              "A free ticket"
            ],
            "correct_answer": 0,
            "explanation_vi": "Người phụ nữ yêu cầu vé khứ hồi ('A round-trip ticket') khi nói chuyện với nhân viên bán vé."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to the instruction. Where should passengers put their small bags?",
            "options": [
              "Under the seat in front",
              "In the restroom",
              "On the floor outside",
              "At the front desk"
            ],
            "correct_answer": 0,
            "explanation_vi": "Hướng dẫn an toàn trên phương tiện giao thông thường yêu cầu đặt túi xách nhỏ dưới ghế phía trước ('Under the seat in front')."
          }
        ],
        "speaking_prompt": "Describe your favorite way to travel to work or school.",
        "speaking_sample_idea": "I usually take the bus because it is cheap and I can read my book during the trip.",
        "writing_prompt": "Write an email to a friend about your plans for a weekend trip.",
        "writing_model_sentence": "I am going to visit the beach with my family by train this Saturday."
      }
    },
    {
      "id": "u5",
      "title": "Office Equipment & Supplies",
      "description": "Learn about office machinery, supplies, and basic inventory management.",
      "vocabulary": [
        {
          "word": "printer",
          "ipa": "/ˈprɪntə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "máy in",
          "example_en": "The printer is out of paper.",
          "example_vi": "Máy in đã hết giấy."
        },
        {
          "word": "copier",
          "ipa": "/ˈkɒpiə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "máy photocopy",
          "example_en": "We bought a new copier for the office.",
          "example_vi": "Chúng tôi đã mua một máy photocopy mới cho văn phòng."
        },
        {
          "word": "supply",
          "ipa": "/səˈplaɪ/",
          "part_of_speech": "noun",
          "meaning_vi": "nguồn cung cấp/nhu yếu phẩm",
          "example_en": "We need to order more office supplies.",
          "example_vi": "Chúng ta cần đặt thêm văn phòng phẩm."
        },
        {
          "word": "inventory",
          "ipa": "/ˈɪnvəntri/",
          "part_of_speech": "noun",
          "meaning_vi": "hàng tồn kho/sự kiểm kê",
          "example_en": "We check the inventory every month.",
          "example_vi": "Chúng tôi kiểm tra hàng tồn kho mỗi tháng."
        },
        {
          "word": "order",
          "ipa": "/ˈɔːdə(r)/",
          "part_of_speech": "verb",
          "meaning_vi": "đặt hàng",
          "example_en": "I will order some new chairs today.",
          "example_vi": "Tôi sẽ đặt mua một số chiếc ghế mới hôm nay."
        },
        {
          "word": "maintenance",
          "ipa": "/ˈmeɪntənəns/",
          "part_of_speech": "noun",
          "meaning_vi": "sự bảo trì",
          "example_en": "The copier is undergoing maintenance.",
          "example_vi": "Máy photocopy đang được bảo trì."
        },
        {
          "word": "device",
          "ipa": "/dɪˈvaɪs/",
          "part_of_speech": "noun",
          "meaning_vi": "thiết bị",
          "example_en": "Keep your electronic devices turned off.",
          "example_vi": "Hãy tắt các thiết bị điện tử của bạn."
        },
        {
          "word": "paper",
          "ipa": "/ˈpeɪpə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "giấy",
          "example_en": "Can you put more paper in the copier?",
          "example_vi": "Bạn có thể bỏ thêm giấy vào máy photocopy không?"
        },
        {
          "word": "replace",
          "ipa": "/rɪˈpleɪs/",
          "part_of_speech": "verb",
          "meaning_vi": "thay thế",
          "example_en": "We need to replace the old printer.",
          "example_vi": "Chúng ta cần thay thế chiếc máy in cũ."
        },
        {
          "word": "malfunction",
          "ipa": "/ˌmælˈfʌŋkʃn/",
          "part_of_speech": "verb",
          "meaning_vi": "trục trặc",
          "example_en": "The machine will malfunction if it gets too hot.",
          "example_vi": "Máy sẽ bị trục trặc nếu quá nóng."
        }
      ],
      "grammar": {
        "point": "Countable and Uncountable Nouns (Danh từ đếm được và không đếm được)",
        "explanation_vi": "Phân biệt danh từ đếm được (printer, device) và không đếm được (paper, equipment, information) để sử dụng lượng từ phù hợp (many/much, few/little).",
        "structure": "Many/Few + Countable Noun; Much/Little + Uncountable Noun",
        "example_en": "We don't have much paper left in the office.",
        "example_vi": "Chúng tôi không còn nhiều giấy trong văn phòng.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "Please order some new ___ for the office printer.",
            "options": [
              "paper",
              "papers",
              "a paper",
              "many paper"
            ],
            "correct_answer": 0,
            "explanation_vi": "\"Paper\" (giấy) là danh từ không đếm được ở dạng tổng quát, không thêm \"s\" hoặc dùng mạo từ \"a/an\" trực tiếp. Do đó, \"paper\" là đáp án chính xác."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "We need to buy three new ___ for the computer workstations.",
            "options": [
              "mouse",
              "mouses",
              "mice",
              "mices"
            ],
            "correct_answer": 2,
            "explanation_vi": "\"Mouse\" (con chuột máy tính) là danh từ đếm được, và dạng số nhiều bất quy tắc của nó là \"mice\". Số từ \"three\" đi trước yêu cầu danh từ số nhiều."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "Could you please bring me ___ stapler from the supply room?",
            "options": [
              "some",
              "a",
              "any",
              "much"
            ],
            "correct_answer": 1,
            "explanation_vi": "\"Stapler\" (cái dập ghim) là danh từ đếm được số ít, bắt đầu bằng phụ âm nên ta dùng mạo từ \"a\" ở phía trước."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "How ___ pens do we have left in the supply cabinet?",
            "options": [
              "much",
              "many",
              "some",
              "any"
            ],
            "correct_answer": 1,
            "explanation_vi": "\"Pens\" (những cái bút) là danh từ đếm được số nhiều. Để hỏi số lượng cho danh từ đếm được, ta dùng từ để hỏi \"How many\"."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "There is not ___ ink left in the printer cartridge.",
            "options": [
              "many",
              "some",
              "any",
              "a"
            ],
            "correct_answer": 2,
            "explanation_vi": "\"Ink\" (mực) là danh từ không đếm được. Trong câu phủ định (\"is not\"), ta dùng \"any\" thay vì \"some\"."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "How ______ paper do we need to order?",
          "options": [
            "much",
            "many",
            "few",
            "a"
          ],
          "correct_answer": 0,
          "explanation_vi": "'paper' là danh từ không đếm được, nên dùng 'much' trong câu hỏi số lượng."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "There are only a ______ printers in the office.",
          "options": [
            "few",
            "little",
            "much",
            "any"
          ],
          "correct_answer": 0,
          "explanation_vi": "'printers' là danh từ đếm được số nhiều, đi với 'a few' (một vài)."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "We don't have ______ information about the inventory.",
          "options": [
            "many",
            "much",
            "few",
            "a"
          ],
          "correct_answer": 1,
          "explanation_vi": "'information' là danh từ không đếm được, đi với 'much' trong câu phủ định."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "How ______ copiers are currently working?",
          "options": [
            "many",
            "much",
            "little",
            "some"
          ],
          "correct_answer": 0,
          "explanation_vi": "'copiers' là danh từ đếm được số nhiều, dùng 'many' trong câu hỏi số lượng."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "The office ______ is running low on paper and pens.",
          "options": [
            "supply",
            "printer",
            "copier",
            "device"
          ],
          "correct_answer": 0,
          "explanation_vi": "'office supply' (văn phòng phẩm/nhu yếu phẩm văn phòng) là cụm từ phù hợp nhất."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "We need to do an ______ check of all office equipment.",
          "options": [
            "inventory",
            "maintenance",
            "malfunction",
            "order"
          ],
          "correct_answer": 0,
          "explanation_vi": "'inventory check' (kiểm kê hàng tồn kho/thiết bị) là cụm từ phù hợp."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "Please call the technician for printer ______ because it is not working.",
          "options": [
            "maintenance",
            "supply",
            "device",
            "order"
          ],
          "correct_answer": 0,
          "explanation_vi": "'maintenance' (bảo trì) phù hợp nhất khi máy in không hoạt động và cần kỹ thuật viên."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "The copier is not working due to a technical ______ in the system.",
          "options": [
            "malfunction",
            "supply",
            "inventory",
            "replace"
          ],
          "correct_answer": 0,
          "explanation_vi": "'malfunction' (sự trục trặc) phù hợp nhất để chỉ lỗi kỹ thuật của máy photocopy."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "Office Supply Memo",
        "content": "To all staff: We are conducting our monthly inventory check this Friday. Please report any malfunctioning devices to the maintenance team. We will order new supplies next Monday.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Choose the correct word to complete the sentence: 'Please put more paper in the printer __________.'",
            "options": [
              "A) desk",
              "B) tray",
              "C) chair",
              "D) wall"
            ],
            "correct_answer": 1,
            "explanation_vi": "Chọn từ 'tray' (khay) vì khay giấy là bộ phận dùng để đựng giấy trong máy in."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "What office supply is used to stick two pieces of paper together without a stapler?",
            "options": [
              "A) Paperclip",
              "B) Scissors",
              "C) Eraser",
              "D) Ruler"
            ],
            "correct_answer": 0,
            "explanation_vi": "'Paperclip' (kẹp giấy) là dụng cụ dùng để kẹp giữ các tờ giấy lại với nhau mà không cần dùng ghim bấm."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the sign: 'OUT OF ORDER'. What does this mean for an office machine?",
            "options": [
              "A) It is new.",
              "B) It is broken.",
              "C) It is clean.",
              "D) It is fast."
            ],
            "correct_answer": 1,
            "explanation_vi": "Cụm từ 'Out of order' có nghĩa là máy móc đang bị hỏng và không thể sử dụng được."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Which item do you use to cut paper?",
            "options": [
              "A) Glue",
              "B) Scissors",
              "C) Tape",
              "D) Marker"
            ],
            "correct_answer": 1,
            "explanation_vi": "'Scissors' có nghĩa là cái kéo, dùng để cắt giấy trong văn phòng."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Complete the sentence: 'We need to buy more black and color __________ for the printer.'",
            "options": [
              "A) ink",
              "B) water",
              "C) juice",
              "D) oil"
            ],
            "correct_answer": 0,
            "explanation_vi": "Máy in cần có 'ink' (mực) màu đen và màu để in ấn."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to the request: 'Could you please make twenty copies of this report?' Where are you likely to hear this?",
            "options": [
              "A) Near the copy machine",
              "B) In the cafeteria",
              "C) In the parking lot",
              "D) At the elevator"
            ],
            "correct_answer": 0,
            "explanation_vi": "Yêu cầu sao chép (copy) tài liệu thường diễn ra ở khu vực máy photocopy (near the copy machine)."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "You hear a coworker say: 'I ran out of sticky notes.' What should you offer them?",
            "options": [
              "A) A pen",
              "B) Post-it notes",
              "C) A coffee",
              "D) A keyboard"
            ],
            "correct_answer": 1,
            "explanation_vi": "'Sticky notes' đồng nghĩa với 'Post-it notes' (giấy nhớ ghi chú có keo dán)."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "A colleague asks: 'Where is the hole puncher?' What are they looking for?",
            "options": [
              "A) A tool to make holes in paper",
              "B) A machine to make coffee",
              "C) A tool to cut boxes",
              "D) A device to cool the room"
            ],
            "correct_answer": 0,
            "explanation_vi": "'Hole puncher' là cái bấm lỗ, dùng để đục lỗ trên giấy trước khi cho vào bìa còng."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "You hear: 'The shredder is jammed.' What does this mean?",
            "options": [
              "A) Paper is stuck in the machine.",
              "B) The machine is out of paper.",
              "C) The machine is printing fast.",
              "D) The machine is brand new."
            ],
            "correct_answer": 0,
            "explanation_vi": "Từ 'jammed' trong ngữ cảnh máy hủy tài liệu (shredder) có nghĩa là bị kẹt giấy."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to the instruction: 'Please file these documents in the cabinet.' What object do you need?",
            "options": [
              "A) A trash can",
              "B) A folder",
              "C) A telephone",
              "D) A stapler"
            ],
            "correct_answer": 1,
            "explanation_vi": "Để sắp xếp và lưu trữ tài liệu (file documents) vào tủ, bạn cần dùng 'folder' (bìa đựng hồ sơ)."
          }
        ],
        "speaking_prompt": "Describe a piece of office equipment you use every day and say why you need it.",
        "speaking_sample_idea": "I use the printer every day to print important documents and reports for my team.",
        "writing_prompt": "Write a short email to your manager to order more printer paper and pens for the office.",
        "writing_model_sentence": "Dear Manager, could we please order more printer paper and black pens for the front desk?"
      }
    },
    {
      "id": "u6",
      "title": "Customer Service & Inquiries",
      "description": "Handle customer inquiries, complaints, and feedback professionally.",
      "vocabulary": [
        {
          "word": "customer",
          "ipa": "/ˈkʌstəmə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "khách hàng",
          "example_en": "We must always listen to our customers.",
          "example_vi": "Chúng ta phải luôn lắng nghe khách hàng của mình."
        },
        {
          "word": "complaint",
          "ipa": "/kəmˈpleɪnt/",
          "part_of_speech": "noun",
          "meaning_vi": "lời phàn nàn",
          "example_en": "The customer filed a complaint about the service.",
          "example_vi": "Khách hàng đã gửi đơn khiếu nại về dịch vụ."
        },
        {
          "word": "resolve",
          "ipa": "/rɪˈzɒlv/",
          "part_of_speech": "verb",
          "meaning_vi": "giải quyết",
          "example_en": "We are trying to resolve the issue as quickly as possible.",
          "example_vi": "Chúng tôi đang cố gắng giải quyết vấn đề nhanh nhất có thể."
        },
        {
          "word": "feedback",
          "ipa": "/ˈfiːdbæk/",
          "part_of_speech": "noun",
          "meaning_vi": "phản hồi",
          "example_en": "We welcome feedback from our clients.",
          "example_vi": "Chúng tôi hoan nghênh phản hồi từ khách hàng."
        },
        {
          "word": "satisfaction",
          "ipa": "/ˌsætɪsˈfækʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "sự hài lòng",
          "example_en": "Customer satisfaction is our top priority.",
          "example_vi": "Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi."
        },
        {
          "word": "polite",
          "ipa": "/pəˈlaɪt/",
          "part_of_speech": "adjective",
          "meaning_vi": "lịch sự",
          "example_en": "The staff was very polite and helpful.",
          "example_vi": "Nhân viên rất lịch sự và nhiệt tình giúp đỡ."
        },
        {
          "word": "inquiry",
          "ipa": "/ɪnˈkwaɪəri/",
          "part_of_speech": "noun",
          "meaning_vi": "yêu cầu/thắc mắc",
          "example_en": "Thank you for your inquiry about our products.",
          "example_vi": "Cảm ơn bạn đã gửi yêu cầu tìm hiểu về sản phẩm của chúng tôi."
        },
        {
          "word": "refund",
          "ipa": "/ˈriːfʌnd/",
          "part_of_speech": "noun",
          "meaning_vi": "tiền hoàn lại",
          "example_en": "They demanded a full refund for the damaged goods.",
          "example_vi": "Họ yêu cầu hoàn tiền đầy đủ cho hàng hóa bị hư hỏng."
        },
        {
          "word": "support",
          "ipa": "/səˈpɔːt/",
          "part_of_speech": "noun",
          "meaning_vi": "sự hỗ trợ",
          "example_en": "Our customer support is available 24/7.",
          "example_vi": "Bộ phận hỗ trợ khách hàng của chúng tôi hoạt động 24/7."
        },
        {
          "word": "response",
          "ipa": "/rɪˈspɒns/",
          "part_of_speech": "noun",
          "meaning_vi": "sự phản hồi",
          "example_en": "We received a quick response to our email.",
          "example_vi": "Chúng tôi đã nhận được phản hồi nhanh chóng cho email của mình."
        }
      ],
      "grammar": {
        "point": "Pronouns (Đại từ nhân xưng, đại từ tân ngữ, tính từ sở hữu)",
        "explanation_vi": "Sử dụng đúng đại từ làm chủ ngữ (I, you, he, she, they), tân ngữ (me, him, her, them) và tính từ sở hữu (my, his, her, their) trong giao tiếp với khách hàng.",
        "structure": "Subject + Verb + Object / Possessive Adj + Noun",
        "example_en": "She sent her feedback to us yesterday.",
        "example_vi": "Cô ấy đã gửi phản hồi của mình cho chúng tôi vào ngày hôm qua.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "If you have any questions about the invoice, please contact ___ at customer service.",
            "options": [
              "we",
              "our",
              "us",
              "ours"
            ],
            "correct_answer": 2,
            "explanation_vi": "Cần một đại từ tân ngữ (object pronoun) đứng sau động từ 'contact' để làm tân ngữ. 'Us' là đại từ tân ngữ của 'we'."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "Ms. Davis called to say that ___ will arrive late for the product demonstration.",
            "options": [
              "she",
              "her",
              "hers",
              "herself"
            ],
            "correct_answer": 0,
            "explanation_vi": "Cần một đại từ nhân xưng đóng vai trò chủ ngữ (subject pronoun) cho động từ 'will arrive'. 'She' là đại từ nhân xưng chỉ ngôi thứ ba số ít giống cái."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "Please remember to include ___ account number when submitting a support ticket.",
            "options": [
              "you",
              "your",
              "yours",
              "yourself"
            ],
            "correct_answer": 1,
            "explanation_vi": "Cần một tính từ sở hữu (possessive adjective) đứng trước danh từ 'account number' để bổ nghĩa cho nó. 'Your' là tính từ sở hữu tương ứng với 'you'."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "The manager apologized for the delay and assured ___ that the shipment is on the way.",
            "options": [
              "they",
              "their",
              "them",
              "theirs"
            ],
            "correct_answer": 2,
            "explanation_vi": "Cần một đại từ tân ngữ đứng sau động từ 'assured'. 'Them' là đại từ tân ngữ thay thế cho khách hàng số nhiều."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "Mr. Lee was satisfied with the new software, and ___ recommended it to his colleagues.",
            "options": [
              "he",
              "him",
              "his",
              "himself"
            ],
            "correct_answer": 0,
            "explanation_vi": "Vế thứ hai cần một chủ ngữ thực hiện hành động 'recommended'. 'He' là đại từ nhân xưng đóng vai trò làm chủ ngữ."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "Mr. Smith called because ______ wanted to ask about his order.",
          "options": [
            "he",
            "him",
            "his",
            "himself"
          ],
          "correct_answer": 0,
          "explanation_vi": "Cần một đại từ đóng vai trò chủ ngữ đứng trước động từ 'wanted', chọn 'he'."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "Please send the refund directly to ______.",
          "options": [
            "them",
            "they",
            "their",
            "theirs"
          ],
          "correct_answer": 0,
          "explanation_vi": "Cần một đại từ đóng vai trò tân ngữ đứng sau giới từ 'to', chọn 'them'."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "The customer was happy with ______ quick response.",
          "options": [
            "our",
            "we",
            "us",
            "ours"
          ],
          "correct_answer": 0,
          "explanation_vi": "Cần một tính từ sở hữu đứng trước cụm danh từ 'quick response', chọn 'our'."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "This office is ______; they work here.",
          "options": [
            "theirs",
            "their",
            "them",
            "they"
          ],
          "correct_answer": 0,
          "explanation_vi": "Cần một đại từ sở hữu để thay thế cho 'their office', chọn 'theirs'."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "We received a customer ______ about the late delivery.",
          "options": [
            "complaint",
            "feedback",
            "satisfaction",
            "refund"
          ],
          "correct_answer": 0,
          "explanation_vi": "'complaint' (lời phàn nàn/khiếu nại) phù hợp nhất với lý do giao hàng trễ."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "Our goal is to achieve 100% customer ______ with our services.",
          "options": [
            "satisfaction",
            "complaint",
            "inquiry",
            "refund"
          ],
          "correct_answer": 0,
          "explanation_vi": "'customer satisfaction' (sự hài lòng của khách hàng) là cụm từ phổ biến."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "The support team is trying to ______ the issue quickly.",
          "options": [
            "resolve",
            "polite",
            "refund",
            "response"
          ],
          "correct_answer": 0,
          "explanation_vi": "'resolve' (giải quyết) là động từ phù hợp nhất đi với danh từ 'issue' (vấn đề)."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "Please write a polite ______ to the client's email.",
          "options": [
            "response",
            "complaint",
            "refund",
            "satisfaction"
          ],
          "correct_answer": 0,
          "explanation_vi": "'response' (sự phản hồi/câu trả lời) phù hợp nhất khi viết thư trả lời khách hàng."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "Customer Feedback Email",
        "content": "Dear Support Team, I am writing to express my satisfaction with your quick response to my inquiry. Your staff was very polite and resolved my issue within an hour. Thank you for the excellent service.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Read the sign near the front desk: 'Please wait here for the next available agent.' What should you do?",
            "options": [
              "Walk behind the desk and help yourself.",
              "Stand and wait in this spot for assistance.",
              "Leave the store immediately.",
              "Call the manager on your phone."
            ],
            "correct_answer": 1,
            "explanation_vi": "Biển báo yêu cầu 'Vui lòng đợi ở đây cho nhân viên tiếp theo', có nghĩa là bạn nên đứng và đợi tại vị trí đó để được hỗ trợ."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the email subject line: 'Your online order #4582 has shipped.' What is this email about?",
            "options": [
              "Canceling your order",
              "Asking for a refund",
              "Information that your package is on the way",
              "A complaint about a damaged item"
            ],
            "correct_answer": 2,
            "explanation_vi": "Tiêu đề email thông báo 'Đơn hàng trực tuyến #4582 của bạn đã được gửi đi', nghĩa là gói hàng đang trên đường giao đến."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Look at the return policy: 'Items can be returned within 30 days with a receipt.' When can you bring an item back?",
            "options": [
              "After two months",
              "Only if you do not have a receipt",
              "Within one month if you have the receipt",
              "Whenever you want without a time limit"
            ],
            "correct_answer": 2,
            "explanation_vi": "Chính sách đổi trả cho phép trả hàng trong vòng 30 ngày (một tháng) nếu có hóa đơn (receipt)."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Read the store notice: 'Store Hours: Monday to Friday, 9 AM - 6 PM.' Is the store open on Sunday?",
            "options": [
              "Yes, all day",
              "Yes, in the morning",
              "No, only on weekdays",
              "No information is given, but usually yes"
            ],
            "correct_answer": 2,
            "explanation_vi": "Giờ mở cửa từ Thứ Hai đến Thứ Sáu, vì vậy cửa hàng không mở cửa vào Chủ Nhật."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the message from a hotel receptionist: 'Your room is ready on the third floor, room 302.' Where should the guest go?",
            "options": [
              "To the restaurant",
              "To room 302 on floor 3",
              "To the parking lot",
              "To the front desk to check out"
            ],
            "correct_answer": 1,
            "explanation_vi": "Tin nhắn thông báo phòng ở tầng ba, phòng 302, nên khách cần đến đó."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "A customer asks: 'How much does this jacket cost?' What is the best response?",
            "options": [
              "It is on the third floor.",
              "It is forty-five dollars.",
              "It closes at nine o'clock.",
              "Yes, I like it very much."
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu hỏi hỏi về giá tiền ('How much'), câu trả lời phù hợp nhất là con số chỉ giá cả ('forty-five dollars')."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "A hotel guest says: 'Excuse me, my key card does not work.' What should the receptionist say?",
            "options": [
              "Let me make a new one for you right now.",
              "Thank you for eating at our restaurant.",
              "Your train leaves at five PM.",
              "The pool is closed today."
            ],
            "correct_answer": 0,
            "explanation_vi": "Khi thẻ phòng không hoạt động, lễ tân lịch sự sẽ đề nghị làm thẻ mới cho khách."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "A caller asks: 'Can I speak to Mr. Davis, please?' The agent replies: 'He is in a meeting right now.' What should the agent say next?",
            "options": [
              "Would you like to leave a message?",
              "He is wearing a blue shirt.",
              "The meeting was very fun.",
              "Please park your car outside."
            ],
            "correct_answer": 0,
            "explanation_vi": "Khi người cần gặp đang bận họp, câu nói tiếp theo hợp lý trong chăm sóc khách hàng là hỏi xem khách có muốn để lại lời nhắn không."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "A customer service worker says: 'Thank you for calling City Bank. How can I help you today?' What is the speaker's job?",
            "options": [
              "A chef",
              "A bank telephone operator / support agent",
              "A bus driver",
              "A flight attendant"
            ],
            "correct_answer": 1,
            "explanation_vi": "Lời thoại chào mừng của nhân viên trực tổng đài ngân hàng đang hỏi cách giúp đỡ khách hàng qua điện thoại."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "A shopper asks: 'Excuse me, where are the milk and eggs?' What is the appropriate reply from the store clerk?",
            "options": [
              "They are in the dairy section at the back.",
              "They cost three dollars.",
              "We close at ten PM.",
              "No, thank you."
            ],
            "correct_answer": 0,
            "explanation_vi": "Khi khách hỏi vị trí của sản phẩm (sữa và trứng), nhân viên phải chỉ dẫn vị trí ('in the dairy section at the back')."
          }
        ],
        "speaking_prompt": "You bought a new shirt, but it is too small. Call the store to ask for a larger size.",
        "speaking_sample_idea": "Hello, I bought a blue shirt yesterday, but it is a medium and I need a large. Can I exchange it?",
        "writing_prompt": "You received a broken coffee mug in your online order. Write a short email to customer service asking for a replacement.",
        "writing_model_sentence": "Hello, my coffee mug arrived broken, and I would like a replacement, please."
      }
    },
    {
      "id": "u7",
      "title": "Marketing & Advertising",
      "description": "Explore marketing strategies, advertising campaigns, and consumer behavior.",
      "vocabulary": [
        {
          "word": "campaign",
          "ipa": "/kæmˈpeɪn/",
          "part_of_speech": "noun",
          "meaning_vi": "chiến dịch",
          "example_en": "The new marketing campaign was a huge success.",
          "example_vi": "Chiến dịch tiếp thị mới đã thành công rực rỡ."
        },
        {
          "word": "advertisement",
          "ipa": "/ədˈvɜːtɪsmənt/",
          "part_of_speech": "noun",
          "meaning_vi": "quảng cáo",
          "example_en": "I saw an advertisement for the job in the newspaper.",
          "example_vi": "Tôi đã thấy một quảng cáo cho công việc này trên báo."
        },
        {
          "word": "target",
          "ipa": "/ˈtɑːɡɪt/",
          "part_of_speech": "verb",
          "meaning_vi": "nhắm tới",
          "example_en": "The product is designed to target young consumers.",
          "example_vi": "Sản phẩm được thiết kế để nhắm tới người tiêu dùng trẻ."
        },
        {
          "word": "strategy",
          "ipa": "/ˈstrætədʒi/",
          "part_of_speech": "noun",
          "meaning_vi": "chiến lược",
          "example_en": "We need a new strategy to increase sales.",
          "example_vi": "Chúng ta cần một chiến lược mới để tăng doanh số bán hàng."
        },
        {
          "word": "promote",
          "ipa": "/prəˈməʊt/",
          "part_of_speech": "verb",
          "meaning_vi": "quảng bá",
          "example_en": "They are using social media to promote their brand.",
          "example_vi": "Họ đang sử dụng mạng xã hội để quảng bá thương hiệu của mình."
        },
        {
          "word": "market",
          "ipa": "/ˈmɑːkɪt/",
          "part_of_speech": "noun",
          "meaning_vi": "thị trường",
          "example_en": "The company is trying to enter the Asian market.",
          "example_vi": "Công ty đang cố gắng thâm nhập vào thị trường châu Á."
        },
        {
          "word": "brand",
          "ipa": "/brænd/",
          "part_of_speech": "noun",
          "meaning_vi": "thương hiệu",
          "example_en": "This brand is known for its high quality.",
          "example_vi": "Thương hiệu này nổi tiếng với chất lượng cao."
        },
        {
          "word": "budget",
          "ipa": "/ˈbʌdʒɪt/",
          "part_of_speech": "noun",
          "meaning_vi": "ngân sách",
          "example_en": "We have a limited budget for advertising.",
          "example_vi": "Chúng tôi có ngân sách hạn chế cho quảng cáo."
        },
        {
          "word": "launch",
          "ipa": "/lɔːntʃ/",
          "part_of_speech": "verb",
          "meaning_vi": "tung ra/khởi chạy",
          "example_en": "They will launch the new product next month.",
          "example_vi": "Họ sẽ tung ra sản phẩm mới vào tháng tới."
        },
        {
          "word": "consumer",
          "ipa": "/kənˈsjuːmə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "người tiêu dùng",
          "example_en": "Consumer spending has increased this quarter.",
          "example_vi": "Chi tiêu của người tiêu dùng đã tăng trong quý này."
        }
      ],
      "grammar": {
        "point": "Adjectives and Adverbs (Tính từ và Trạng từ)",
        "explanation_vi": "Sử dụng tính từ để bổ nghĩa cho danh từ và trạng từ để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác trong ngữ cảnh mô tả chiến dịch tiếp thị.",
        "structure": "Adj + Noun / Verb + Adv",
        "example_en": "They launched a highly successful campaign.",
        "example_vi": "Họ đã khởi chạy một chiến dịch cực kỳ thành công.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "Our new marketing campaign was very ___, resulting in a 20% increase in sales.",
            "options": [
              "success",
              "successful",
              "successfully",
              "successes"
            ],
            "correct_answer": 1,
            "explanation_vi": "Sau động từ 'was' cần một tính từ (adjective) để mô tả cho chủ ngữ 'campaign'. 'Successful' là tính từ, trong khi 'successfully' là trạng từ."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "The advertising team worked ___ to finish the brochure before the deadline.",
            "options": [
              "quick",
              "quicker",
              "quickly",
              "quickness"
            ],
            "correct_answer": 2,
            "explanation_vi": "Cần một trạng từ (adverb) để bổ nghĩa cho động từ 'worked'. 'Quickly' là trạng từ chỉ cách thức."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "We need to design a ___ logo for our brand to attract younger customers.",
            "options": [
              "creatively",
              "creative",
              "creation",
              "create"
            ],
            "correct_answer": 1,
            "explanation_vi": "Cần một tính từ (adjective) đứng trước danh từ 'logo' để bổ nghĩa cho nó. 'Creative' là tính từ phù hợp."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "The promotional video was ___ received by the target audience.",
            "options": [
              "positive",
              "positively",
              "positivity",
              "positives"
            ],
            "correct_answer": 1,
            "explanation_vi": "Cần một trạng từ (adverb) để bổ nghĩa cho phân từ 'received'. 'Positively' là trạng từ đúng."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "Please read the market research report ___ before the meeting tomorrow.",
            "options": [
              "careful",
              "care",
              "carefully",
              "carefulness"
            ],
            "correct_answer": 2,
            "explanation_vi": "Cần một trạng từ (adverb) để bổ nghĩa cho động từ 'read'. 'Carefully' là trạng từ chỉ cách thức."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "The marketing team designed a ______ campaign.",
          "options": [
            "successful",
            "successfully",
            "success",
            "succeed"
          ],
          "correct_answer": 0,
          "explanation_vi": "Cần một tính từ đứng trước danh từ 'campaign' để bổ nghĩa cho nó, chọn 'successful'."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "We must analyze the market trends ______ before launching the product.",
          "options": [
            "carefully",
            "careful",
            "care",
            "caring"
          ],
          "correct_answer": 0,
          "explanation_vi": "Cần một trạng từ đứng sau để bổ nghĩa cho động từ 'analyze', chọn 'carefully'."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "The new advertisement was ______ effective.",
          "options": [
            "highly",
            "high",
            "height",
            "highest"
          ],
          "correct_answer": 0,
          "explanation_vi": "Cần một trạng từ để bổ nghĩa cho tính từ 'effective', chọn 'highly'."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "They need a ______ strategy to reach younger consumers.",
          "options": [
            "creative",
            "creatively",
            "creativity",
            "create"
          ],
          "correct_answer": 0,
          "explanation_vi": "Cần một tính từ đứng trước danh từ 'strategy', chọn 'creative'."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "Our new advertising ______ will start next month on television.",
          "options": [
            "campaign",
            "budget",
            "brand",
            "consumer"
          ],
          "correct_answer": 0,
          "explanation_vi": "'advertising campaign' (chiến dịch quảng cáo) là cụm từ phù hợp nhất."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "We need to increase our marketing ______ to reach more customers.",
          "options": [
            "budget",
            "campaign",
            "brand",
            "launch"
          ],
          "correct_answer": 0,
          "explanation_vi": "'marketing budget' (ngân sách tiếp thị) phù hợp nhất khi nói về việc tăng chi phí."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "The company plans to ______ a new product line in spring.",
          "options": [
            "launch",
            "target",
            "promote",
            "market"
          ],
          "correct_answer": 0,
          "explanation_vi": "'launch' (tung ra/khởi chạy) phù hợp nhất với cụm từ 'launch a new product line'."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "Understanding ______ behavior is key to successful marketing.",
          "options": [
            "consumer",
            "campaign",
            "strategy",
            "brand"
          ],
          "correct_answer": 0,
          "explanation_vi": "'consumer behavior' (hành vi người tiêu dùng) là thuật ngữ marketing phổ biến."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "Marketing Strategy Proposal",
        "content": "Our team proposes a new digital marketing campaign to target younger consumers. We will launch creative advertisements on social media. The total budget for this campaign is $10,000.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "What does a 'sale' sign in a shop window usually mean?",
            "options": [
              "The items are more expensive.",
              "The items are cheaper.",
              "The store is closed.",
              "There are no items left."
            ],
            "correct_answer": 1,
            "explanation_vi": "Biển báo 'sale' (giảm giá) ở cửa sổ cửa hàng thường có nghĩa là các mặt hàng đang được bán rẻ hơn bình thường."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the text: 'Buy one coffee, get one free today!' What is this type of promotion?",
            "options": [
              "A discount percentage",
              "A BOGO (Buy One, Get One) offer",
              "A free delivery service",
              "A refund policy"
            ],
            "correct_answer": 1,
            "explanation_vi": "Thông điệp 'Mua một tặng một' (Buy one, get one free) là một hình thức khuyến mãi mua một tặng một."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "What is the main goal of an advertisement?",
            "options": [
              "To hide the product",
              "To persuade people to buy something",
              "To confuse customers",
              "To close the business"
            ],
            "correct_answer": 1,
            "explanation_vi": "Mục đích chính của một quảng cáo là thuyết phục mọi người mua sản phẩm hoặc dịch vụ."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Choose the best synonym for 'brand' in marketing.",
            "options": [
              "Price",
              "Logo or company name",
              "Store location",
              "Receipt"
            ],
            "correct_answer": 1,
            "explanation_vi": "Trong marketing, 'brand' (thương hiệu) thường được đại diện bởi logo hoặc tên của công ty."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "If a product is 'new', how do companies usually advertise it?",
            "options": [
              "As an old item",
              "As a new arrival",
              "As broken goods",
              "As a used product"
            ],
            "correct_answer": 1,
            "explanation_vi": "Khi một sản phẩm mới ra mắt, các công ty thường quảng cáo nó là hàng mới về (new arrival)."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "In a radio commercial, you hear: 'Special discount this weekend only!' What should the listener do?",
            "options": [
              "Wait until next month to buy",
              "Shop this weekend to get a lower price",
              "Call the radio station to complain",
              "Return their old items"
            ],
            "correct_answer": 1,
            "explanation_vi": "Cụm từ 'special discount this weekend only' (giảm giá đặc biệt chỉ trong cuối tuần này) khuyến khích người nghe mua sắm vào cuối tuần để được giá thấp hơn."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "You hear a store announcement: 'All winter jackets are 50% off.' What does this mean?",
            "options": [
              "Winter jackets are half price.",
              "Winter jackets are sold out.",
              "You must buy 50 jackets.",
              "Winter jackets cost double."
            ],
            "correct_answer": 0,
            "explanation_vi": "Cụm từ '50% off' có nghĩa là giảm giá một nửa, tức là các mặt hàng chỉ còn nửa giá."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "A customer asks on the phone: 'Do you offer free delivery?' What are they asking about?",
            "options": [
              "If they have to pay to send the item to their home",
              "If the product is free to buy",
              "If they can return the item for cash",
              "If the store is open late"
            ],
            "correct_answer": 0,
            "explanation_vi": "'Free delivery' có nghĩa là giao hàng miễn phí, tức là không phải trả phí vận chuyển sản phẩm đến nhà."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "You hear an ad say: 'Visit our website for more details.' What action is requested?",
            "options": [
              "Go online to find more information",
              "Call the customer service hotline",
              "Throw away the computer",
              "Visit the physical store only"
            ],
            "correct_answer": 0,
            "explanation_vi": "'Visit our website' yêu cầu người nghe truy cập trang web của công ty để biết thêm chi tiết."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "In an advertisement, a speaker says: 'Limited stock available!' What does this create?",
            "options": [
              "A sense of urgency to buy quickly",
              "A reason to wait for a long time",
              "An increase in product weight",
              "A permanent sale"
            ],
            "correct_answer": 0,
            "explanation_vi": "'Limited stock available' (số lượng có hạn) tạo ra sự gấp gáp để khách hàng mua nhanh trước khi hết hàng."
          }
        ],
        "speaking_prompt": "Look at the picture of the new phone. Tell the listener about its price and color in 2 sentences.",
        "speaking_sample_idea": "The new phone is black. It costs 200 dollars.",
        "writing_prompt": "Write a short email to your boss about the new logo. Say if you like it and why, in 2 sentences.",
        "writing_model_sentence": "I like the new logo because it is very bright and modern."
      }
    },
    {
      "id": "u8",
      "title": "Human Resources & Recruitment",
      "description": "Learn about hiring processes, job interviews, and employee benefits.",
      "vocabulary": [
        {
          "word": "recruit",
          "ipa": "/rɪˈkruːt/",
          "part_of_speech": "verb",
          "meaning_vi": "tuyển dụng",
          "example_en": "We need to recruit more sales representatives.",
          "example_vi": "Chúng ta cần tuyển dụng thêm đại diện bán hàng."
        },
        {
          "word": "candidate",
          "ipa": "/ˈkændɪdət/",
          "part_of_speech": "noun",
          "meaning_vi": "ứng viên",
          "example_en": "She is the best candidate for the job.",
          "example_vi": "Cô ấy là ứng viên tốt nhất cho công việc."
        },
        {
          "word": "interview",
          "ipa": "/ˈɪntəvjuː/",
          "part_of_speech": "noun",
          "meaning_vi": "cuộc phỏng vấn",
          "example_en": "I have a job interview tomorrow morning.",
          "example_vi": "Tôi có một cuộc phỏng vấn xin việc vào sáng mai."
        },
        {
          "word": "resume",
          "ipa": "/ˈrezjuːmeɪ/",
          "part_of_speech": "noun",
          "meaning_vi": "sơ yếu lý lịch",
          "example_en": "Please send your resume to the HR department.",
          "example_vi": "Vui lòng gửi sơ yếu lý lịch của bạn đến phòng nhân sự."
        },
        {
          "word": "hire",
          "ipa": "/ˈhaɪə(r)/",
          "part_of_speech": "verb",
          "meaning_vi": "thuê/tuyển dụng",
          "example_en": "They decided to hire a new graphic designer.",
          "example_vi": "Họ đã quyết định thuê một nhà thiết kế đồ họa mới."
        },
        {
          "word": "qualification",
          "ipa": "/ˌkwɒlɪfɪˈkeɪʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "bằng cấp/năng lực",
          "example_en": "He has all the necessary qualifications for this position.",
          "example_vi": "Anh ấy có tất cả các bằng cấp cần thiết cho vị trí này."
        },
        {
          "word": "benefit",
          "ipa": "/ˈbenɪfɪt/",
          "part_of_speech": "noun",
          "meaning_vi": "phúc lợi",
          "example_en": "The company offers great benefits, including health insurance.",
          "example_vi": "Công ty cung cấp các phúc lợi tuyệt vời, bao gồm cả bảo hiểm y tế."
        },
        {
          "word": "position",
          "ipa": "/pəˈzɪʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "vị trí",
          "example_en": "This position requires excellent communication skills.",
          "example_vi": "Vị trí này đòi hỏi kỹ năng giao tiếp xuất sắc."
        },
        {
          "word": "training",
          "ipa": "/ˈtreɪnɪŋ/",
          "part_of_speech": "noun",
          "meaning_vi": "đào tạo",
          "example_en": "New employees receive two weeks of training.",
          "example_vi": "Nhân viên mới được đào tạo trong hai tuần."
        },
        {
          "word": "applicant",
          "ipa": "/ˈæplɪkənt/",
          "part_of_speech": "noun",
          "meaning_vi": "người nộp đơn",
          "example_en": "There were over fifty applicants for the job.",
          "example_vi": "Có hơn năm mươi người nộp đơn cho công việc này."
        }
      ],
      "grammar": {
        "point": "Modal Verbs (Động từ khuyết thiếu: Can, Must, Should)",
        "explanation_vi": "Sử dụng động từ khuyết thiếu để diễn tả khả năng (can), sự bắt buộc (must) hoặc lời khuyên (should) trong quy định công ty và tuyển dụng.",
        "structure": "Subject + Modal Verb + V-inf",
        "example_en": "Candidates must submit their resumes before Friday.",
        "example_vi": "Các ứng viên phải nộp sơ yếu lý lịch trước thứ Sáu.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "All candidates ___ submit their resumes before Friday.",
            "options": [
              "can",
              "must",
              "could",
              "might"
            ],
            "correct_answer": 1,
            "explanation_vi": "Đáp án đúng là 'must' vì đây là quy định bắt buộc trong quá trình ứng tuyển ('phải nộp sơ yếu lý lịch trước thứ Sáu')."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "You ___ speak English fluently for this receptionist position.",
            "options": [
              "should",
              "must",
              "can",
              "cannot"
            ],
            "correct_answer": 0,
            "explanation_vi": "Đáp án đúng là 'should' dùng để đưa ra lời khuyên hoặc yêu cầu nên có đối với vị trí công việc lễ tân ('bạn nên nói tiếng Anh lưu loát')."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "___ I use your pen to sign the employment contract, please?",
            "options": [
              "Must",
              "Should",
              "Can",
              "Shall"
            ],
            "correct_answer": 2,
            "explanation_vi": "Đáp án đúng là 'can' dùng để xin phép một cách lịch sự trong ngữ cảnh phỏng vấn hoặc làm việc ('Tôi có thể dùng bút của bạn để ký hợp đồng không?')."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "New employees ___ attend the orientation training session tomorrow morning.",
            "options": [
              "must",
              "can",
              "may",
              "could"
            ],
            "correct_answer": 0,
            "explanation_vi": "Đáp án đúng là 'must' vì việc tham gia buổi đào tạo hội nhập là bắt buộc đối với nhân viên mới."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "If you have any questions about the job duties, you ___ ask the HR manager.",
            "options": [
              "must",
              "should",
              "has to",
              "will to"
            ],
            "correct_answer": 1,
            "explanation_vi": "Đáp án đúng là 'should' dùng để đưa ra gợi ý, lời khuyên nên làm gì khi gặp thắc mắc về công việc."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "All applicants ______ submit their resumes by Friday to be considered.",
          "options": [
            "must",
            "can",
            "should",
            "may"
          ],
          "correct_answer": 0,
          "explanation_vi": "'must' diễn tả một yêu cầu bắt buộc mang tính quy định trong tuyển dụng."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "You ______ check your email regularly for updates from HR.",
          "options": [
            "should",
            "must",
            "can",
            "ought"
          ],
          "correct_answer": 0,
          "explanation_vi": "'should' dùng để đưa ra lời khuyên hữu ích cho ứng viên."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "We ______ hire more staff if the workload increases next month.",
          "options": [
            "can",
            "must",
            "should",
            "have"
          ],
          "correct_answer": 0,
          "explanation_vi": "'can' diễn tả khả năng có thể xảy ra trong tương lai."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "Applicants ______ not bring any electronic devices into the interview room.",
          "options": [
            "must",
            "can",
            "should",
            "may"
          ],
          "correct_answer": 0,
          "explanation_vi": "'must not' diễn tả sự cấm đoán trong quy chế phòng thi/phỏng vấn."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "The HR department is looking for a qualified ______ for the manager position.",
          "options": [
            "candidate",
            "resume",
            "benefit",
            "training"
          ],
          "correct_answer": 0,
          "explanation_vi": "'candidate' (ứng viên) phù hợp nhất khi tìm kiếm người cho một vị trí công việc."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "Please send your updated ______ to our recruitment email.",
          "options": [
            "resume",
            "qualification",
            "benefit",
            "applicant"
          ],
          "correct_answer": 0,
          "explanation_vi": "'resume' (sơ yếu lý lịch) là tài liệu cần gửi khi ứng tuyển."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "The company offers excellent ______ including health insurance and free lunch.",
          "options": [
            "benefits",
            "positions",
            "trainings",
            "applicants"
          ],
          "correct_answer": 0,
          "explanation_vi": "'benefits' (phúc lợi) phù hợp nhất khi đi kèm với bảo hiểm y tế và ăn trưa miễn phí."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "We will conduct the job ______ in Room 302.",
          "options": [
            "interviews",
            "resumes",
            "qualifications",
            "benefits"
          ],
          "correct_answer": 0,
          "explanation_vi": "'interviews' (cuộc phỏng vấn) phù hợp nhất với động từ 'conduct' (tiến hành)."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "Job Opening: Sales Manager",
        "content": "We are looking for a qualified candidate for the Sales Manager position. Applicants must have at least 3 years of experience. We offer competitive benefits and professional training.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "What is the missing word in this sentence? 'Please send your resume and cover letter to our HR department by Friday.'",
            "options": [
              "A) Application",
              "B) Department",
              "C) Office",
              "D) Desk"
            ],
            "correct_answer": 0,
            "explanation_vi": "Từ 'Application' (đơn xin việc) là danh từ thường đi kèm với 'resume' (sơ yếu lý lịch) trong ngữ cảnh tuyển dụng."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the notice: 'We are looking for a new receptionist. Experience is not required.' What does this mean?",
            "options": [
              "A) You must have worked before.",
              "B) You do not need past experience.",
              "C) You need five years of experience.",
              "D) Only experienced people can apply."
            ],
            "correct_answer": 1,
            "explanation_vi": "'Experience is not required' có nghĩa là không yêu cầu kinh nghiệm làm việc trước đó."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Choose the correct phrase to complete the job advertisement: 'We offer a good salary and medical ______.'",
            "options": [
              "A) benefits",
              "B) money",
              "C) holidays",
              "D) office"
            ],
            "correct_answer": 0,
            "explanation_vi": "'Medical benefits' là cụm từ chỉ phúc lợi y tế/bảo hiểm y tế mà công ty cung cấp cho nhân viên."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "What does the abbreviation 'HR' stand for in a company?",
            "options": [
              "A) High Return",
              "B) Human Resources",
              "C) Hire Right",
              "D) Hourly Rate"
            ],
            "correct_answer": 1,
            "explanation_vi": "HR là viết tắt của 'Human Resources', có nghĩa là phòng Nhân sự."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the email: 'Dear Mr. Lee, We would like to invite you for a job interview on Monday at 10 AM.' What should Mr. Lee do on Monday?",
            "options": [
              "A) Start his new job",
              "B) Meet the manager for a discussion",
              "C) Send his resume",
              "D) Take a test"
            ],
            "correct_answer": 1,
            "explanation_vi": "Được mời tham gia 'job interview' có nghĩa là đến gặp người quản lý để phỏng vấn/thảo luận công việc."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to the prompt and choose the best response: 'When is the interview?'",
            "options": [
              "A) Yes, I am ready.",
              "B) At two o'clock this afternoon.",
              "C) In the human resources office.",
              "D) She is the new manager."
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu hỏi bắt đầu bằng 'When' (Khi nào) yêu cầu câu trả lời chỉ thời gian ('At two o'clock this afternoon')."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "Listen to the question: 'Where should I send my application form?'",
            "options": [
              "A) By email.",
              "B) To the personnel manager.",
              "C) To jobs@company.com.",
              "D) Next Tuesday."
            ],
            "correct_answer": 2,
            "explanation_vi": "Câu hỏi 'Where' (Ở đâu) cần một địa điểm hoặc địa chỉ cụ thể như một email nhận đơn ('jobs@company.com')."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "Choose the best question for this answer: 'No, I have never worked as a cashier before.'",
            "options": [
              "A) Where do you work?",
              "B) Do you have any experience in retail?",
              "C) When will you start?",
              "D) Who is your boss?"
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu trả lời phủ định về kinh nghiệm trước đây phù hợp với câu hỏi về kinh nghiệm làm việc ('Do you have any experience...')."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "Listen to the statement: 'The new employee will start work next Monday.' What is another way to say 'employee'?",
            "options": [
              "A) Employer",
              "B) Staff member",
              "C) Interviewer",
              "D) Applicant"
            ],
            "correct_answer": 1,
            "explanation_vi": "'Employee' (nhân viên) đồng nghĩa với 'staff member' (thành viên nhân viên)."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to the dialogue snippet: 'Are you looking for a full-time or part-time job?' Choose the most logical response.",
            "options": [
              "A) I want to work 40 hours a week.",
              "B) I am looking for my resume.",
              "C) Yes, it is a big company.",
              "D) I like the office color."
            ],
            "correct_answer": 0,
            "explanation_vi": "Làm việc toàn thời gian (full-time) thường tương ứng với số giờ làm việc chuẩn là 40 giờ một tuần."
          }
        ],
        "speaking_prompt": "Talk about your current job or your past work experience. What do you do every day?",
        "speaking_sample_idea": "Talk about your job title, where you work, and two main tasks you do each day.",
        "writing_prompt": "Write a short email to your manager to ask for a day off next Monday. Give one simple reason.",
        "writing_model_sentence": "Dear Manager, I want to ask for a day off on Monday because I need to visit the doctor."
      }
    },
    {
      "id": "u9",
      "title": "Financial Transactions & Invoices",
      "description": "Understand invoices, payments, fees, and basic financial transactions.",
      "vocabulary": [
        {
          "word": "invoice",
          "ipa": "/ˈmɪnvɔɪs/",
          "part_of_speech": "noun",
          "meaning_vi": "hóa đơn",
          "example_en": "Please pay the invoice by the end of the month.",
          "example_vi": "Vui lòng thanh toán hóa đơn trước cuối tháng."
        },
        {
          "word": "payment",
          "ipa": "/ˈpeɪmənt/",
          "part_of_speech": "noun",
          "meaning_vi": "sự thanh toán",
          "example_en": "We accept payment by credit card.",
          "example_vi": "Chúng tôi chấp nhận thanh toán bằng thẻ tín dụng."
        },
        {
          "word": "receipt",
          "ipa": "/rɪˈsiːt/",
          "part_of_speech": "noun",
          "meaning_vi": "biên lai",
          "example_en": "Keep your receipt as proof of purchase.",
          "example_vi": "Hãy giữ biên lai của bạn làm bằng chứng mua hàng."
        },
        {
          "word": "charge",
          "ipa": "/tʃɑːdʒ/",
          "part_of_speech": "verb",
          "meaning_vi": "tính phí",
          "example_en": "They charge a small fee for delivery.",
          "example_vi": "Họ tính một khoản phí nhỏ cho việc giao hàng."
        },
        {
          "word": "discount",
          "ipa": "/ˈdɪskaʊnt/",
          "part_of_speech": "noun",
          "meaning_vi": "sự giảm giá",
          "example_en": "We offer a ten percent discount for cash payments.",
          "example_vi": "Chúng tôi giảm giá mười phần trăm cho thanh toán bằng tiền mặt."
        },
        {
          "word": "fee",
          "ipa": "/fiː/",
          "part_of_speech": "noun",
          "meaning_vi": "phí",
          "example_en": "The annual membership fee is fifty dollars.",
          "example_vi": "Phí thành viên hàng năm là năm mươi đô la."
        },
        {
          "word": "transaction",
          "ipa": "/trænˈzækʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "giao dịch",
          "example_en": "The online transaction was completed successfully.",
          "example_vi": "Giao dịch trực tuyến đã được hoàn thành thành công."
        },
        {
          "word": "balance",
          "ipa": "/ˈbæləns/",
          "part_of_speech": "noun",
          "meaning_vi": "số dư",
          "example_en": "You can check your account balance online.",
          "example_vi": "Bạn có thể kiểm tra số dư tài khoản của mình trực tuyến."
        },
        {
          "word": "expense",
          "ipa": "/ɪkˈspens/",
          "part_of_speech": "noun",
          "meaning_vi": "chi phí",
          "example_en": "The company will cover all travel expenses.",
          "example_vi": "Công ty sẽ chi trả toàn bộ chi phí đi lại."
        },
        {
          "word": "bill",
          "ipa": "/bɪl/",
          "part_of_speech": "noun",
          "meaning_vi": "hóa đơn thanh toán",
          "example_en": "He paid the electricity bill yesterday.",
          "example_vi": "Anh ấy đã thanh toán hóa đơn tiền điện ngày hôm qua."
        }
      ],
      "grammar": {
        "point": "Prepositions of Time and Place (Giới từ chỉ thời gian và nơi chốn: In, On, At)",
        "explanation_vi": "Sử dụng đúng giới từ 'at' (giờ, địa điểm cụ thể), 'on' (ngày, thứ, bề mặt), 'in' (tháng, năm, không gian khép kín) trong các giao dịch tài chính.",
        "structure": "at + time/specific place; on + day/date; in + month/year/country",
        "example_en": "The payment is due on Monday at 5 PM.",
        "example_vi": "Khoản thanh toán đến hạn vào thứ Hai lúc 5 giờ chiều.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "Please review the invoice ___ Friday before we process the payment.",
            "options": [
              "in",
              "on",
              "at",
              "by"
            ],
            "correct_answer": 1,
            "explanation_vi": "Dùng giới từ 'on' trước các thứ trong tuần (Friday)."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "All financial transactions must be completed ___ midnight.",
            "options": [
              "in",
              "on",
              "at",
              "to"
            ],
            "correct_answer": 2,
            "explanation_vi": "Dùng giới từ 'at' trước các mốc thời gian cụ thể trong ngày (midnight)."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "The accounting department will issue the new billing statements ___ March.",
            "options": [
              "in",
              "on",
              "at",
              "for"
            ],
            "correct_answer": 0,
            "explanation_vi": "Dùng giới từ 'in' trước các tháng trong năm (March)."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "You can find the bank account details ___ the bottom of the invoice.",
            "options": [
              "in",
              "on",
              "at",
              "by"
            ],
            "correct_answer": 2,
            "explanation_vi": "Dùng giới từ 'at' cho các vị trí cụ thể như 'at the bottom' (ở phía dưới) của trang tài liệu."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "Mr. Harrison is currently ___ his office checking the monthly financial report.",
            "options": [
              "on",
              "at",
              "in",
              "to"
            ],
            "correct_answer": 2,
            "explanation_vi": "Dùng giới từ 'in' khi chỉ vị trí ở bên trong một không gian kín hoặc phòng làm việc (his office)."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "The payment must be completed ______ Monday.",
          "options": [
            "on",
            "in",
            "at",
            "for"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng giới từ 'on' trước các thứ trong tuần (Monday)."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "The finance department is located ______ the second floor.",
          "options": [
            "on",
            "in",
            "at",
            "by"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng giới từ 'on' trước số tầng của tòa nhà (on the second floor)."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "The meeting will start ______ 10:00 AM.",
          "options": [
            "at",
            "on",
            "in",
            "by"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng giới từ 'at' trước mốc thời gian cụ thể (10:00 AM)."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "We received the invoice ______ October.",
          "options": [
            "in",
            "on",
            "at",
            "for"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng giới từ 'in' trước các tháng trong năm (October)."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "Please review the ______ to make sure the total amount is correct.",
          "options": [
            "invoice",
            "receipt",
            "discount",
            "fee"
          ],
          "correct_answer": 0,
          "explanation_vi": "'invoice' (hóa đơn yêu cầu thanh toán) là tài liệu cần kiểm tra số tiền trước khi trả."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "You will receive a ______ after the payment is processed.",
          "options": [
            "receipt",
            "invoice",
            "fee",
            "transaction"
          ],
          "correct_answer": 0,
          "explanation_vi": "'receipt' (biên lai) là chứng từ nhận được sau khi đã thanh toán xong."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "There is an additional ______ for late payments.",
          "options": [
            "fee",
            "discount",
            "balance",
            "receipt"
          ],
          "correct_answer": 0,
          "explanation_vi": "'fee' (khoản phí) phù hợp nhất với cụm từ 'late payment fee' (phí thanh toán trễ)."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "We offer a 10% ______ for early bookings.",
          "options": [
            "discount",
            "invoice",
            "fee",
            "balance"
          ],
          "correct_answer": 0,
          "explanation_vi": "'discount' (sự giảm giá) phù hợp nhất với tỷ lệ phần trăm (10% discount)."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "Invoice Details",
        "content": "Invoice #1024. Date: October 12. Total Amount Due: $500. Please complete the payment on or before October 20. A late fee of $20 will be charged for delayed payments.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Read the text: 'Please pay the total amount of $50 by Friday.' What does the text ask you to do?",
            "options": [
              "Send fifty dollars before Friday.",
              "Work on Friday for fifty dollars.",
              "Buy something for fifty people.",
              "Check the calendar on Friday."
            ],
            "correct_answer": 0,
            "explanation_vi": "Văn bản yêu cầu thanh toán tổng số tiền 50 đô la trước ngày thứ Sáu."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the invoice: 'Invoice #102. Date: May 4. Item: Coffee maker. Price: $30.' How much does the coffee maker cost?",
            "options": [
              "May 4",
              "102 dollars",
              "30 dollars",
              "Free"
            ],
            "correct_answer": 2,
            "explanation_vi": "Dựa vào hóa đơn, mục 'Price' (giá) của máy pha cà phê là $30."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the sign near the register: 'Cash only, no credit cards.' What can customers use to pay?",
            "options": [
              "Only paper money and coins",
              "Only plastic credit cards",
              "Only mobile phones",
              "Only company checks"
            ],
            "correct_answer": 0,
            "explanation_vi": "Cụm từ 'Cash only' nghĩa là chỉ nhận tiền mặt (tiền giấy và tiền xu)."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Read the email: 'Thank you for your purchase. Your receipt is attached to this email.' Where can you find the receipt?",
            "options": [
              "In the physical mailbox",
              "Attached to the email",
              "On the store wall",
              "In the trash can"
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu 'Your receipt is attached to this email' cho biết biên lai được đính kèm trong email."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the price tag: 'Original price: $40. Sale price: $20.' How much do you save?",
            "options": [
              "$60",
              "$40",
              "$20",
              "$10"
            ],
            "correct_answer": 2,
            "explanation_vi": "Lấy giá gốc ($40) trừ đi giá khuyến mãi ($20), số tiền tiết kiệm được là $20."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to the dialogue: Man: 'How would you like to pay?' Woman: 'I will use my plastic card.' What is the woman using?",
            "options": [
              "Cash",
              "A credit or debit card",
              "A gift box",
              "A paper check"
            ],
            "correct_answer": 1,
            "explanation_vi": "'Plastic card' trong ngữ cảnh thanh toán thường chỉ thẻ ngân hàng (thẻ tín dụng hoặc thẻ ghi nợ)."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "Listen to the announcement: 'The total comes to fifteen dollars and fifty cents.' What is the correct number?",
            "options": [
              "$50.15",
              "$15.50",
              "$5.50",
              "$15.15"
            ],
            "correct_answer": 1,
            "explanation_vi": "'Fifteen dollars and fifty cents' được viết là $15.50."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "Listen to the cashier: 'Would you like a receipt with your purchase?' What is the cashier offering?",
            "options": [
              "A paper showing proof of payment",
              "A bag for the items",
              "A discount coupon",
              "A business card"
            ],
            "correct_answer": 0,
            "explanation_vi": "'Receipt' là biên lai, giấy tờ chứng minh việc mua hàng."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "Listen to the customer: 'Keep the change, please.' What does the customer mean?",
            "options": [
              "Give me back all my money.",
              "The cashier can keep the small extra money.",
              "Change the item to a different color.",
              "Please give me a different time."
            ],
            "correct_answer": 1,
            "explanation_vi": "Cụm từ 'Keep the change' nghĩa là 'Cứ giữ lại tiền thừa', thường dùng khi boa cho nhân viên."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to the clerk: 'Your bill is ready. You can pay online.' Where should the customer make the payment?",
            "options": [
              "At the physical store counter",
              "Over the telephone",
              "On the internet",
              "Through the mail service"
            ],
            "correct_answer": 2,
            "explanation_vi": "'Online' có nghĩa là trực tuyến, trên mạng internet."
          }
        ],
        "speaking_prompt": "Look at the invoice on the screen. Tell the customer the total amount to pay and when it is due.",
        "speaking_sample_idea": "State the total is $150 and it must be paid by Friday.",
        "writing_prompt": "Write a short email to a supplier. Ask why you received an invoice for an item you already paid for.",
        "writing_model_sentence": "Dear Sir, I am writing because I already paid this invoice on May 1st."
      }
    },
    {
      "id": "u10",
      "title": "Corporate Events & Celebrations",
      "description": "Learn vocabulary and grammar for corporate events, banquets, and celebrations.",
      "vocabulary": [
        {
          "word": "banquet",
          "ipa": "/ˈbæŋkwɪt/",
          "part_of_speech": "noun",
          "meaning_vi": "bữa tiệc lớn",
          "example_en": "The annual banquet will be held at the Grand Hotel.",
          "example_vi": "Bữa tiệc thường niên sẽ được tổ chức tại khách sạn Grand."
        },
        {
          "word": "celebrate",
          "ipa": "/ˈselɪbreɪt/",
          "part_of_speech": "verb",
          "meaning_vi": "kỷ niệm/ăn mừng",
          "example_en": "We are gathering to celebrate our company's success.",
          "example_vi": "Chúng tôi tụ họp để ăn mừng thành công của công ty."
        },
        {
          "word": "anniversary",
          "ipa": "/ˌænɪˈvɜːsəri/",
          "part_of_speech": "noun",
          "meaning_vi": "ngày kỷ niệm",
          "example_en": "The company is celebrating its tenth anniversary.",
          "example_vi": "Công ty đang kỷ niệm mười năm thành lập."
        },
        {
          "word": "award",
          "ipa": "/əˈwɔːd/",
          "part_of_speech": "noun",
          "meaning_vi": "giải thưởng",
          "example_en": "He won the Employee of the Year award.",
          "example_vi": "Anh ấy đã giành được giải thưởng Nhân viên của năm."
        },
        {
          "word": "host",
          "ipa": "/həʊst/",
          "part_of_speech": "verb",
          "meaning_vi": "đăng cai/tổ chức",
          "example_en": "Our branch will host the annual conference this year.",
          "example_vi": "Chi nhánh của chúng tôi sẽ đăng cai tổ chức hội nghị thường niên năm nay."
        },
        {
          "word": "speech",
          "ipa": "/spiːtʃ/",
          "part_of_speech": "noun",
          "meaning_vi": "bài phát biểu",
          "example_en": "The CEO gave an inspiring speech at the event.",
          "example_vi": "Giám đốc điều hành đã có một bài phát biểu đầy cảm hứng tại sự kiện."
        },
        {
          "word": "ceremony",
          "ipa": "/ˈserəməni/",
          "part_of_speech": "noun",
          "meaning_vi": "nghi lễ/lễ kỷ niệm",
          "example_en": "The award ceremony will start at 7 PM.",
          "example_vi": "Lễ trao giải sẽ bắt đầu lúc 7 giờ tối."
        },
        {
          "word": "guest",
          "ipa": "/ɡest/",
          "part_of_speech": "noun",
          "meaning_vi": "khách mời",
          "example_en": "We invited over one hundred guests to the party.",
          "example_vi": "Chúng tôi đã mời hơn một trăm khách đến bữa tiệc."
        },
        {
          "word": "invite",
          "ipa": "/ɪnˈvaɪt/",
          "part_of_speech": "verb",
          "meaning_vi": "mời",
          "example_en": "They plan to invite all former employees.",
          "example_vi": "Họ có kế hoạch mời tất cả các cựu nhân viên."
        },
        {
          "word": "annual",
          "ipa": "/ˈænjuəl/",
          "part_of_speech": "adjective",
          "meaning_vi": "thường niên",
          "example_en": "The annual general meeting is next week.",
          "example_vi": "Cuộc họp đại hội đồng thường niên sẽ diễn ra vào tuần tới."
        }
      ],
      "grammar": {
        "point": "Comparatives and Superlatives (So sánh hơn và So sánh nhất)",
        "explanation_vi": "Sử dụng cấu trúc so sánh hơn và so sánh nhất để đánh giá, so sánh quy mô, sự thành công của các sự kiện doanh nghiệp.",
        "structure": "Short Adj + er + than / More + Long Adj + than; The + Short Adj + est / The most + Long Adj",
        "example_en": "This year's banquet was more successful than last year's.",
        "example_vi": "Bữa tiệc năm nay thành công hơn năm ngoái.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "This year's company anniversary party was ___ than the one we had last year.",
            "options": [
              "big",
              "bigger",
              "biggest",
              "most big"
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu này sử dụng cấu trúc so sánh hơn (comparative) với từ 'than'. Tính từ 'big' là tính từ ngắn, khi chuyển sang so sánh hơn ta gấp đôi phụ âm cuối và thêm '-er' (bigger)."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "Out of all the departments, the marketing team prepared the ___ presentation for the year-end gala.",
            "options": [
              "creative",
              "creativeter",
              "more creative",
              "most creative"
            ],
            "correct_answer": 3,
            "explanation_vi": "Cụm từ 'Out of all the departments' chỉ sự so sánh từ ba đối tượng trở lên, đây là dấu hiệu của cấu trúc so sánh nhất (superlative). Tính từ dài 'creative' đi với 'most' trong so sánh nhất."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "Mr. Harrison arrived at the corporate dinner ___ than the other board members.",
            "options": [
              "late",
              "later",
              "latest",
              "most late"
            ],
            "correct_answer": 1,
            "explanation_vi": "Có từ 'than' ở cuối câu cho biết đây là câu so sánh hơn. Trạng từ/tính từ 'late' có dạng so sánh hơn là 'later'."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "To ensure the conference is a success, we need to find a ___ venue than the current one.",
            "options": [
              "spacious",
              "more spacious",
              "most spacious",
              "much spacious"
            ],
            "correct_answer": 1,
            "explanation_vi": "Dựa vào từ 'than', ta cần dùng dạng so sánh hơn. 'Spacious' là tính từ dài (có 3 âm tiết), nên ta thêm 'more' phía trước."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "The retirement celebration for our director was the ___ event of the quarter.",
            "options": [
              "good",
              "better",
              "best",
              "most good"
            ],
            "correct_answer": 2,
            "explanation_vi": "Có mạo từ 'the' và ngữ cảnh nhắc đến sự kiện nổi bật nhất trong quý, ta dùng so sánh nhất. Tính từ 'good' có dạng so sánh nhất bất quy tắc là 'best'."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "This year's annual banquet was ______ than last year's.",
          "options": [
            "more successful",
            "most successful",
            "successfuler",
            "as successful"
          ],
          "correct_answer": 0,
          "explanation_vi": "Cấu trúc so sánh hơn với tính từ dài 'successful' là 'more successful than'."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "He gave the ______ speech of the evening.",
          "options": [
            "best",
            "better",
            "good",
            "well"
          ],
          "correct_answer": 0,
          "explanation_vi": "Cấu trúc so sánh nhất của tính từ bất quy tắc 'good' là 'the best'."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "The new venue is ______ than the old one.",
          "options": [
            "larger",
            "largest",
            "more large",
            "most large"
          ],
          "correct_answer": 0,
          "explanation_vi": "'large' là tính từ ngắn, dạng so sánh hơn là 'larger'."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "This is the ______ event we have ever hosted.",
          "options": [
            "biggest",
            "bigger",
            "big",
            "most big"
          ],
          "correct_answer": 0,
          "explanation_vi": "Cấu trúc so sánh nhất với tính từ ngắn 'big' là 'the biggest'."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "The company will host its 10th ______ celebration next week.",
          "options": [
            "annual",
            "anniversary",
            "banquet",
            "ceremony"
          ],
          "correct_answer": 1,
          "explanation_vi": "'anniversary' (ngày kỷ niệm thành lập) phù hợp nhất với số thứ tự '10th'."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "We invited over 200 ______ to the award ceremony.",
          "options": [
            "guests",
            "speeches",
            "hosts",
            "banquets"
          ],
          "correct_answer": 0,
          "explanation_vi": "'guests' (khách mời) phù hợp nhất với hành động 'invited' (đã mời)."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "The CEO will give an opening ______ at the event.",
          "options": [
            "speech",
            "award",
            "ceremony",
            "guest"
          ],
          "correct_answer": 0,
          "explanation_vi": "'speech' (bài phát biểu) đi với động từ 'give' (give a speech - phát biểu)."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "This ______ event is held every December.",
          "options": [
            "annual",
            "anniversary",
            "banquet",
            "ceremony"
          ],
          "correct_answer": 0,
          "explanation_vi": "'annual' (thường niên) phù hợp nhất với tần suất 'every December' (mỗi tháng 12 hàng năm)."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "Invitation to Annual Banquet",
        "content": "You are cordially invited to our 10th Annual Banquet on December 15 at the Grand Hotel. The event will celebrate our employees' achievements. Please RSVP by December 5.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Read the notice and answer the question: 'All staff must arrive at the annual party by 6:00 PM.' What time should employees get to the party?",
            "options": [
              "Before or at 6:00 PM",
              "After 6:00 PM",
              "At 7:00 PM",
              "The next day"
            ],
            "correct_answer": 0,
            "explanation_vi": "Câu hỏi yêu cầu tìm thời gian nhân viên phải có mặt tại bữa tiệc. Thông báo ghi rõ 'phải đến trước 6:00 tối', nên đáp án đúng là 'Before or at 6:00 PM'."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the email: 'Please reply to this email by Friday if you want vegetarian food at the company dinner.' What should employees do if they want vegetarian food?",
            "options": [
              "Call the manager on Monday",
              "Send a reply before Friday",
              "Bring their own food",
              "Write a letter next week"
            ],
            "correct_answer": 1,
            "explanation_vi": "Email yêu cầu nhân viên phản hồi lại trước thứ Sáu nếu muốn ăn đồ chay, do đó đáp án chính xác là gửi câu trả lời trước thứ Sáu."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the memo: 'The office will close at 3:00 PM on Friday for the team building event.' When does the office close on Friday?",
            "options": [
              "At 3:00 AM",
              "At 5:00 PM",
              "At 3:00 PM",
              "It does not close"
            ],
            "correct_answer": 2,
            "explanation_vi": "Memo nêu rõ văn phòng sẽ đóng cửa lúc 3:00 chiều (3:00 PM) vào thứ Sáu."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Read the invitation: 'Location: Room 402, 4th Floor. Time: 2:00 PM - 4:00 PM.' Where is the celebration taking place?",
            "options": [
              "On the 2nd floor",
              "In Room 402",
              "Outside the building",
              "At the restaurant"
            ],
            "correct_answer": 1,
            "explanation_vi": "Phần 'Location' (Địa điểm) chỉ rõ là 'Room 402, 4th Floor' (Phòng 402, Tầng 4), vì vậy đáp án đúng là trong Phòng 402."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the message: 'Please bring your employee ID card to enter the company anniversary party.' What do employees need to bring?",
            "options": [
              "A birthday gift",
              "Their employee ID card",
              "Some money",
              "A camera"
            ],
            "correct_answer": 1,
            "explanation_vi": "Thông điệp yêu cầu mang theo thẻ nhân viên (employee ID card) để vào cửa bữa tiệc."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to the announcement: 'The meeting room is on the second floor.' Where should attendees go?",
            "options": [
              "To the first floor",
              "To the second floor",
              "To the parking lot",
              "Outside"
            ],
            "correct_answer": 1,
            "explanation_vi": "Thông báo hướng dẫn phòng họp ở tầng hai ('second floor'), đáp án đúng là tầng hai."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "Listen to the voicemail: 'Hi, this is Mark. The lunch party starts at noon today.' What time does the lunch party start?",
            "options": [
              "12:00 PM",
              "10:00 AM",
              "2:00 PM",
              "6:00 PM"
            ],
            "correct_answer": 0,
            "explanation_vi": "Từ 'noon' có nghĩa là 12 giờ trưa (12:00 PM)."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "Listen to the dialogue: 'Man: Would you like coffee or tea for the break? Woman: I prefer tea, please.' What does the woman want to drink?",
            "options": [
              "Coffee",
              "Water",
              "Tea",
              "Juice"
            ],
            "correct_answer": 2,
            "explanation_vi": "Người phụ nữ nói 'I prefer tea, please' (Tôi thích trà hơn), nên đồ uống cô ấy chọn là trà."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "Listen to the request: 'Please sign the birthday card for our director before 5 PM.' When should they sign the card?",
            "options": [
              "After 5 PM",
              "Before 5 PM",
              "Tomorrow morning",
              "Next week"
            ],
            "correct_answer": 1,
            "explanation_vi": "Yêu cầu là ký trước 5 giờ chiều ('before 5 PM')."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to the speaker: 'The workshop will be held in the main conference hall.' Where is the event taking place?",
            "options": [
              "In the cafeteria",
              "In the main conference hall",
              "In the parking garage",
              "In the small office"
            ],
            "correct_answer": 1,
            "explanation_vi": "Người nói chỉ rõ sự kiện diễn ra tại 'main conference hall' (hội trường chính)."
          }
        ],
        "speaking_prompt": "When is the company holiday party, and what time does it start?",
        "speaking_sample_idea": "The company holiday party is on Friday at 6 PM.",
        "writing_prompt": "Write a short message to invite your colleague to the office lunch on Friday.",
        "writing_model_sentence": "Would you like to join the office lunch this Friday at 12 PM?"
      }
    }
  ]
};
