import { StageData } from './types';

export const vstep_stage1: StageData = {
  "id": "vstep_stage1",
  "name": "VSTEP: B1 (Trung Cấp)",
  "description": "10 Units tập trung từ vựng và kỹ năng cơ bản",
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
        "question": "Choose the correct form of the verb: She ______ to work by bus every day.",
        "options": [
          "go",
          "goes",
          "going",
          "is go"
        ],
        "correct_answer": 1,
        "explanation_vi": "Chủ ngữ 'She' ngôi thứ ba số ít ở thì hiện tại đơn, động từ phải thêm '-es' (goes)."
      },
      {
        "id": 2,
        "type": "checkpoint",
        "question": "What is the opposite of the word 'expensive'?",
        "options": [
          "cheap",
          "big",
          "old",
          "hot"
        ],
        "correct_answer": 0,
        "explanation_vi": "'Expensive' có nghĩa là đắt đỏ, từ trái nghĩa của nó là 'cheap' (rẻ)."
      },
      {
        "id": 3,
        "type": "checkpoint",
        "question": "Choose the correct preposition: There is a picture ______ the wall.",
        "options": [
          "in",
          "at",
          "on",
          "under"
        ],
        "correct_answer": 2,
        "explanation_vi": "Dùng giới từ 'on' để chỉ vị trí trên bề mặt (trên tường)."
      },
      {
        "id": 4,
        "type": "checkpoint",
        "question": "Complete the sentence: How ______ do you visit your grandparents?",
        "options": [
          "much",
          "many",
          "often",
          "long"
        ],
        "correct_answer": 2,
        "explanation_vi": "'How often' dùng để hỏi tần suất (bạn có thường xuyên... không)."
      },
      {
        "id": 5,
        "type": "checkpoint",
        "question": "Choose the correct pronoun: This is my brother. ______ name is Tom.",
        "options": [
          "His",
          "Her",
          "Its",
          "Your"
        ],
        "correct_answer": 0,
        "explanation_vi": "'My brother' là giống đực, tính từ sở hữu tương ứng là 'His'."
      },
      {
        "id": 6,
        "type": "checkpoint",
        "question": "Which word does not belong to the group of food?",
        "options": [
          "Apple",
          "Bread",
          "Chair",
          "Cheese"
        ],
        "correct_answer": 2,
        "explanation_vi": "'Chair' (cái ghế) là đồ vật, không phải là đồ ăn như apple, bread, cheese."
      },
      {
        "id": 7,
        "type": "checkpoint",
        "question": "Choose the correct past simple form: Yesterday, I ______ to the supermarket.",
        "options": [
          "go",
          "goed",
          "went",
          "gone"
        ],
        "correct_answer": 2,
        "explanation_vi": "'Go' là động từ bất quy tắc, dạng quá khứ đơn là 'went'."
      },
      {
        "id": 8,
        "type": "checkpoint",
        "question": "Read the sign: 'PLEASE TURN OFF YOUR PHONE.' What does it mean?",
        "options": [
          "You can use your phone here.",
          "You must switch off your phone.",
          "You should buy a new phone.",
          "You need to charge your phone."
        ],
        "correct_answer": 1,
        "explanation_vi": "'Turn off' có nghĩa là tắt, tức là bạn phải tắt điện thoại của mình."
      },
      {
        "id": 9,
        "type": "checkpoint",
        "question": "Choose the correct modal verb: You ______ smoke in the hospital. It's not allowed.",
        "options": [
          "must",
          "mustn't",
          "can",
          "should"
        ],
        "correct_answer": 1,
        "explanation_vi": "'Mustn't' dùng để chỉ sự cấm đoán (không được phép hút thuốc)."
      },
      {
        "id": 10,
        "type": "checkpoint",
        "question": "What time is it if the clock says 14:30?",
        "options": [
          "Half past two in the afternoon",
          "Quarter past two in the afternoon",
          "Half past three in the morning",
          "Quarter to three in the afternoon"
        ],
        "correct_answer": 0,
        "explanation_vi": "14:30 là 2 giờ rưỡi chiều (Half past two)."
      },
      {
        "id": 11,
        "type": "checkpoint",
        "question": "Choose the correct comparative adjective: My house is ______ than yours.",
        "options": [
          "big",
          "bigger",
          "biggest",
          "more big"
        ],
        "correct_answer": 1,
        "explanation_vi": "Tính từ ngắn 'big' khi so sánh hơn thêm '-g-' và '-er' (bigger)."
      },
      {
        "id": 12,
        "type": "checkpoint",
        "question": "Fill in the blank: She can play ______ piano very well.",
        "options": [
          "a",
          "an",
          "the",
          "no article"
        ],
        "correct_answer": 2,
        "explanation_vi": "Trước tên các nhạc cụ khi đi với động từ 'play' thường có mạo từ 'the'."
      },
      {
        "id": 13,
        "type": "checkpoint",
        "question": "Which of these is a job?",
        "options": [
          "Hospital",
          "Engineer",
          "School",
          "Factory"
        ],
        "correct_answer": 1,
        "explanation_vi": "'Engineer' (kỹ sư) là tên nghề nghiệp, các từ còn lại là địa điểm."
      },
      {
        "id": 14,
        "type": "checkpoint",
        "question": "Choose the correct question word: '______ is your birthday?' - 'It's on May 5th.'",
        "options": [
          "What",
          "When",
          "Where",
          "Who"
        ],
        "correct_answer": 1,
        "explanation_vi": "Hỏi về ngày tháng/thời gian sử dụng 'When'."
      },
      {
        "id": 15,
        "type": "checkpoint",
        "question": "Choose the correct negative form: They ______ like watching football.",
        "options": [
          "don't",
          "doesn't",
          "aren't",
          "isn't"
        ],
        "correct_answer": 0,
        "explanation_vi": "Chủ ngữ 'They' ở thì hiện tại đơn phủ định dùng 'don't'."
      },
      {
        "id": 16,
        "type": "checkpoint",
        "question": "Read the email: 'Hi Mark, I'm having a great time in Paris. The weather is sunny and warm. See you soon, Anna.' Question: What is the weather like in Paris?",
        "options": [
          "Cold and rainy",
          "Sunny and warm",
          "Cloudy and windy",
          "Hot and snowy"
        ],
        "correct_answer": 1,
        "explanation_vi": "Trong đoạn văn có nhắc đến: 'The weather is sunny and warm'."
      },
      {
        "id": 17,
        "type": "checkpoint",
        "question": "Choose the correct plural noun: I have two ______.",
        "options": [
          "child",
          "childs",
          "children",
          "childrens"
        ],
        "correct_answer": 2,
        "explanation_vi": "Dạng số nhiều bất quy tắc của 'child' là 'children'."
      },
      {
        "id": 18,
        "type": "checkpoint",
        "question": "Choose the correct answer: 'Would you like some tea?' - '______'",
        "options": [
          "Yes, I like.",
          "No, I don't.",
          "Yes, please.",
          "No, I won't."
        ],
        "correct_answer": 2,
        "explanation_vi": "Khi ai đó mời đồ ăn/thức uống ('Would you like...'), câu trả lời lịch sự là 'Yes, please' hoặc 'No, thank you'."
      },
      {
        "id": 19,
        "type": "checkpoint",
        "question": "Find the word with a different vowel sound:",
        "options": [
          "cat",
          "hat",
          "map",
          "car"
        ],
        "correct_answer": 3,
        "explanation_vi": "'Car' phát âm âm /ɑː/, trong khi cat, hat, map phát âm âm /æ/."
      },
      {
        "id": 20,
        "type": "checkpoint",
        "question": "Complete the sentence: Listen! The birds ______.",
        "options": [
          "sing",
          "sings",
          "is singing",
          "are singing"
        ],
        "correct_answer": 3,
        "explanation_vi": "Từ 'Listen!' chỉ hành động đang diễn ra, chủ ngữ 'The birds' số nhiều nên dùng 'are singing'."
      },
      {
        "id": 21,
        "type": "checkpoint",
        "question": "Choose the correct preposition of time: My English class starts ______ 9 AM.",
        "options": [
          "in",
          "on",
          "at",
          "to"
        ],
        "correct_answer": 2,
        "explanation_vi": "Dùng giới từ 'at' trước các mốc thời gian cụ thể (giờ)."
      },
      {
        "id": 22,
        "type": "checkpoint",
        "question": "Which sentence is correct?",
        "options": [
          "She has got blue eyes.",
          "She have got blue eyes.",
          "She got blue eyes.",
          "She has get blue eyes."
        ],
        "correct_answer": 0,
        "explanation_vi": "Cấu trúc sở hữu với 'She' là 'has got'."
      },
      {
        "id": 23,
        "type": "checkpoint",
        "question": "What are you going to do next weekend? - '______'",
        "options": [
          "I visit my friends.",
          "I'm going to visit my friends.",
          "I visited my friends.",
          "I visiting my friends."
        ],
        "correct_answer": 1,
        "explanation_vi": "Thì tương lai gần (be going to) dùng để diễn tả dự định trong tương lai."
      },
      {
        "id": 24,
        "type": "checkpoint",
        "question": "Choose the correct word: My brother is very ______; he always makes me laugh.",
        "options": [
          "sad",
          "funny",
          "boring",
          "tired"
        ],
        "correct_answer": 1,
        "explanation_vi": "'Funny' (vui tính, hài hước) phù hợp với vế 'luôn làm tôi cười'."
      },
      {
        "id": 25,
        "type": "checkpoint",
        "question": "Listening Simulation: [Speaker A: 'Excuse me, how much is this T-shirt?' / Speaker B: 'It's fifteen pounds.'] Question: How much does the T-shirt cost?",
        "options": [
          "50 pounds",
          "15 pounds",
          "5 pounds",
          "50 dollars"
        ],
        "correct_answer": 1,
        "explanation_vi": "Speaker B trả lời giá tiền là 'fifteen pounds' (15 bảng Anh)."
      },
      {
        "id": 26,
        "type": "checkpoint",
        "question": "Choose the correct quantifier: There is ______ milk in the fridge. We need to buy some.",
        "options": [
          "many",
          "a few",
          "little",
          "a lot"
        ],
        "correct_answer": 2,
        "explanation_vi": "'Milk' là danh từ không đếm được. Vế sau nói 'cần mua thêm' chứng tỏ trong tủ lạnh rất ít, dùng 'little'."
      },
      {
        "id": 27,
        "type": "checkpoint",
        "question": "Choose the correct word order for a question:",
        "options": [
          "Where you live?",
          "Where do you live?",
          "Where live you?",
          "Where you do live?"
        ],
        "correct_answer": 1,
        "explanation_vi": "Cấu trúc câu hỏi thì hiện tại đơn với từ để hỏi: Wh-word + do/does + subject + verb?"
      },
      {
        "id": 28,
        "type": "checkpoint",
        "question": "Read the short text: 'Tom usually gets up at 6:30 AM. He has breakfast with his family at 7:00 AM and goes to school by bike.' Question: How does Tom go to school?",
        "options": [
          "By bus",
          "By car",
          "By bike",
          "On foot"
        ],
        "correct_answer": 2,
        "explanation_vi": "Đoạn văn nêu rõ: '...goes to school by bike'."
      },
      {
        "id": 29,
        "type": "checkpoint",
        "question": "Choose the correct ordinal number: Today is my ______ birthday.",
        "options": [
          "twenty",
          "twentieth",
          "twelve",
          "twelfth"
        ],
        "correct_answer": 1,
        "explanation_vi": "Nói về sinh nhật lần thứ bao nhiêu phải dùng số thứ tự (twentieth - thứ 20)."
      },
      {
        "id": 30,
        "type": "checkpoint",
        "question": "Listening Simulation: [Speaker A: 'Would you like to go to the cinema tonight?' / Speaker B: 'I'd love to, but I have to finish my homework.'] Question: What is Speaker B doing tonight?",
        "options": [
          "Going to the cinema",
          "Doing homework",
          "Going shopping",
          "Watching TV"
        ],
        "correct_answer": 1,
        "explanation_vi": "Speaker B từ chối khéo vì phải hoàn thành bài tập về nhà ('have to finish my homework')."
      }
    ],
    "speaking_prompt": "Talk about your favorite free time activity. You should say: what the activity is, when and where you do it, who you do it with, and explain why you like it.",
    "speaking_sample_idea": "I like playing badminton with my friends at the local park every weekend because it keeps me healthy and relaxed.",
    "writing_prompt": "Write a short email (about 40-50 words) to your friend about your upcoming birthday party. Include: when the party is, where it will take place, and an invitation to join.",
    "writing_model_sentence": "I am having a birthday party at my house this Saturday at 6 PM, and I would love for you to come."
  },
  "units": [
    {
      "id": "u1",
      "title": "Unit 1: Education and Learning",
      "description": "Focuses on academic life, university studies, and basic educational terminology suitable for VSTEP B1.",
      "vocabulary": [
        {
          "word": "academic",
          "ipa": "/ˌækəˈdemɪk/",
          "part_of_speech": "adjective",
          "meaning_vi": "thuộc học thuật, học tập",
          "example_en": "She has outstanding academic achievements.",
          "example_vi": "Cô ấy có những thành tích học tập xuất sắc."
        },
        {
          "word": "curriculum",
          "ipa": "/kəˈrɪkjələm/",
          "part_of_speech": "noun",
          "meaning_vi": "chương trình giảng dạy",
          "example_en": "The school curriculum includes music and art.",
          "example_vi": "Chương trình giảng dạy của trường bao gồm âm nhạc và nghệ thuật."
        },
        {
          "word": "tuition",
          "ipa": "/tjuˈɪʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "học phí",
          "example_en": "Tuition fees have increased this year.",
          "example_vi": "Học phí đã tăng trong năm nay."
        },
        {
          "word": "graduate",
          "ipa": "/ˈɡrædʒueɪt/",
          "part_of_speech": "verb",
          "meaning_vi": "tốt nghiệp",
          "example_en": "He graduated from university last year.",
          "example_vi": "Anh ấy đã tốt nghiệp đại học năm ngoái."
        },
        {
          "word": "enroll",
          "ipa": "/ɪnˈrəʊl/",
          "part_of_speech": "verb",
          "meaning_vi": "đăng ký học, nhập học",
          "example_en": "You need to enroll before the end of August.",
          "example_vi": "Bạn cần đăng ký học trước cuối tháng Tám."
        },
        {
          "word": "assignment",
          "ipa": "/əˈsaɪnmənt/",
          "part_of_speech": "noun",
          "meaning_vi": "bài tập lớn, nhiệm vụ được giao",
          "example_en": "We have to hand in our assignment tomorrow.",
          "example_vi": "Chúng tôi phải nộp bài tập lớn vào ngày mai."
        },
        {
          "word": "lecture",
          "ipa": "/ˈlektʃə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "bài giảng",
          "example_en": "The professor gave an interesting lecture.",
          "example_vi": "Giáo sư đã đưa ra một bài giảng thú vị."
        },
        {
          "word": "major",
          "ipa": "/ˈmeɪdʒə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "chuyên ngành",
          "example_en": "Her major is international business.",
          "example_vi": "Chuyên ngành của cô ấy là kinh doanh quốc tế."
        },
        {
          "word": "qualification",
          "ipa": "/ˌkwɒlɪfɪˈkeɪʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "bằng cấp, trình độ chuyên môn",
          "example_en": "She has the right qualifications for the job.",
          "example_vi": "Cô ấy có các bằng cấp phù hợp cho công việc."
        },
        {
          "word": "scholarship",
          "ipa": "/ˈskɒləʃɪp/",
          "part_of_speech": "noun",
          "meaning_vi": "học bổng",
          "example_en": "He won a scholarship to study abroad.",
          "example_vi": "Anh ấy đã giành được học bổng để đi du học."
        }
      ],
      "grammar": {
        "point": "Present Perfect vs Past Simple",
        "explanation_vi": "Thì hiện tại hoàn thành dùng để diễn tả hành động đã xảy ra trong quá khứ nhưng không rõ thời gian hoặc liên quan đến hiện tại. Thì quá khứ đơn dùng cho hành động đã kết thúc tại một thời điểm xác định trong quá khứ.",
        "structure": "Present Perfect: S + have/has + V3/ed | Past Simple: S + V2/ed",
        "example_en": "I have visited London twice, but I went there first in 2015.",
        "example_vi": "Tôi đã đến thăm Luân Đôn hai lần, nhưng tôi đến đó lần đầu vào năm 2015.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "I .......... my English homework yesterday.",
            "options": [
              "finished",
              "have finished",
              "has finished",
              "finish"
            ],
            "correct_answer": 0,
            "explanation_vi": "Trạng từ 'yesterday' chỉ thời điểm trong quá khứ đã kết thúc, do đó ta phải dùng thì Quá khứ đơn (Past Simple)."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "She .......... already .......... all the new vocabulary words for the test.",
            "options": [
              "learned / -",
              "has / learned",
              "did / learn",
              "have / learned"
            ],
            "correct_answer": 1,
            "explanation_vi": "Trạng từ 'already' diễn tả hành động đã xảy ra trước hiện tại và kết quả còn lưu lại, dùng thì Hiện tại hoàn thành (Present Perfect). Chủ ngữ 'She' đi với 'has'."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": ".......... you ever .......... a scholarship at your school?",
            "options": [
              "Did / win",
              "Have / won",
              "Has / won",
              "Do / win"
            ],
            "correct_answer": 1,
            "explanation_vi": "Cấu trúc hỏi kinh nghiệm sống tính đến hiện tại dùng 'Have/Has + chủ ngữ + ever + V3/ed'. Chủ ngữ 'you' đi với trợ động từ 'Have'."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "My best friend .......... to a new school last semester.",
            "options": [
              "move",
              "has moved",
              "moved",
              "moves"
            ],
            "correct_answer": 2,
            "explanation_vi": "Cụm từ 'last semester' (học kỳ trước) chỉ thời gian xác định trong quá khứ, nên ta dùng thì Quá khứ đơn."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "We .......... an online English course since last month.",
            "options": [
              "started",
              "start",
              "have started",
              "has started"
            ],
            "correct_answer": 2,
            "explanation_vi": "Giới từ 'since' đi kèm với một mốc thời gian trong quá khứ là dấu hiệu nhận biết kinh điển của thì Hiện tại hoàn thành. Chủ ngữ 'We' dùng 'have'."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "She ___ to Hanoi three times this year.",
          "options": [
            "has been",
            "went",
            "was going",
            "is going"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng thì hiện tại hoàn thành 'has been' vì hành động lặp lại nhiều lần tính đến thời điểm hiện tại."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "Yesterday, I ___ my homework at 9 PM.",
          "options": [
            "finish",
            "finished",
            "have finished",
            "was finishing"
          ],
          "correct_answer": 1,
          "explanation_vi": "Dùng thì quá khứ đơn 'finished' vì có thời gian xác định trong quá khứ 'Yesterday'."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "They ___ each other since they were at university.",
          "options": [
            "know",
            "knew",
            "have known",
            "are knowing"
          ],
          "correct_answer": 2,
          "explanation_vi": "Dùng thì hiện tại hoàn thành 'have known' với dấu hiệu 'since'."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "When ___ you graduate from high school?",
          "options": [
            "did",
            "have",
            "do",
            "were"
          ],
          "correct_answer": 0,
          "explanation_vi": "Câu hỏi về một sự kiện đã kết thúc trong quá khứ dùng trợ động từ 'did'."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "Students must pay their ___ fees before the semester starts.",
          "options": [
            "tuition",
            "scholarship",
            "lecture",
            "curriculum"
          ],
          "correct_answer": 0,
          "explanation_vi": "'tuition fees' nghĩa là học phí, phù hợp nhất với ngữ cảnh đóng tiền trước học kỳ."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "She is planning to ___ in a Spanish course next week.",
          "options": [
            "enroll",
            "graduate",
            "major",
            "assign"
          ],
          "correct_answer": 0,
          "explanation_vi": "'enroll' nghĩa là đăng ký học một khóa học."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "He received a full ___ to study at Harvard University.",
          "options": [
            "scholarship",
            "qualification",
            "assignment",
            "lecture"
          ],
          "correct_answer": 0,
          "explanation_vi": "'scholarship' nghĩa là học bổng, phù hợp với việc đi học tại Harvard."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "What is your ___ at university? - It is Computer Science.",
          "options": [
            "major",
            "curriculum",
            "tuition",
            "qualification"
          ],
          "correct_answer": 0,
          "explanation_vi": "'major' nghĩa là chuyên ngành học ở đại học."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "The Importance of Higher Education",
        "content": "Higher education plays a crucial role in personal and professional development. Many students choose to enroll in universities to gain specialized knowledge and qualifications. During their academic journey, they attend lectures, complete assignments, and participate in research. Obtaining a degree not only opens up better career opportunities but also helps individuals develop critical thinking and problem-solving skills.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Read the sentence: 'Maria goes to school by bus every day.' How does Maria travel to school?",
            "options": [
              "By train",
              "By bus",
              "On foot",
              "By car"
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu văn nói rằng 'Maria goes to school by bus' (Maria đi học bằng xe buýt), vì vậy đáp án đúng là By bus."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the notice: 'English class starts at 9:00 AM on Monday.' When does the class begin?",
            "options": [
              "At 8:00 AM",
              "At 9:00 AM",
              "At 10:00 AM",
              "At 9:30 AM"
            ],
            "correct_answer": 1,
            "explanation_vi": "Thông báo ghi rõ lớp học bắt đầu lúc '9:00 AM', do đó 9:00 AM là đáp án chính xác."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the sentence: 'Tom has three notebooks, two pens, and a pencil in his school bag.' What does Tom NOT have in his bag?",
            "options": [
              "Notebooks",
              "Pens",
              "An eraser",
              "A pencil"
            ],
            "correct_answer": 2,
            "explanation_vi": "Tom có vở, bút mực và bút chì trong cặp nhưng không được nhắc đến cục tẩy (eraser)."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Read the text: 'Anna likes math because she loves numbers.' Why does Anna like math?",
            "options": [
              "She loves books",
              "esShe loves numbers",
              "She loves sports",
              "She loves music"
            ],
            "correct_answer": 1,
            "explanation_vi": "Đoạn văn nêu rõ 'she loves numbers' (cô ấy thích các con số) là lý do Anna thích môn toán."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the sign in the library: 'Please be quiet.' What must students do here?",
            "options": [
              "Talk loudly",
              "Sing a song",
              "Keep silent",
              "Run around"
            ],
            "correct_answer": 2,
            "explanation_vi": "Biển báo 'Please be quiet' yêu cầu học sinh giữ trật tự (Keep silent)."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to the teacher: 'Open your books to page 15, please.' What page should students open?",
            "options": [
              "Page 10",
              "Page 50",
              "Page 15",
              "Page 5"
            ],
            "correct_answer": 2,
            "explanation_vi": "Giáo viên yêu cầu mở trang 15 ('page 15'), vì vậy đáp án là Page 15."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "Listen to a student: 'My favorite subject is history.' Which subject does the student like best?",
            "options": [
              "History",
              "Geography",
              "Science",
              "Math"
            ],
            "correct_answer": 0,
            "explanation_vi": "Học sinh nói môn học yêu thích là lịch sử ('history')."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "Listen to the speaker: 'We have a science test on Friday.' When is the test?",
            "options": [
              "Monday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "correct_answer": 3,
            "explanation_vi": "Người nói nhắc đến bài kiểm tra vào thứ Sáu ('on Friday')."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "Listen to the dialogue: 'Where is my eraser?' - 'It is under the desk.' Where is the eraser?",
            "options": [
              "On the desk",
              "Under the desk",
              "In the bag",
              "Next to the chair"
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu trả lời 'It is under the desk' cho biết cục tẩy ở dưới bàn."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to the announcement: 'The bell is ringing. Recess is over.' What time is it for students?",
            "options": [
              "To go home",
              "To eat lunch",
              "To return to class",
              "To play outside"
            ],
            "correct_answer": 2,
            "explanation_vi": "Tiếng chuông báo hết giờ ra chơi ('Recess is over') nghĩa là học sinh phải quay lại lớp học."
          }
        ],
        "speaking_prompt": "Talk about your favorite subject at school. What is it and why do you like it?",
        "speaking_sample_idea": "My favorite subject is English because I like learning new words and talking with my friends in English class.",
        "writing_prompt": "Write 3 to 4 sentences about your daily school routine. What time do you go to school and what do you do there?",
        "writing_model_sentence": "I go to school at seven o'clock in the morning, and I have four lessons before lunch."
      }
    },
    {
      "id": "u2",
      "title": "Unit 2: Environment and Nature",
      "description": "Covers vocabulary and structures related to environmental protection, climate change, and conservation.",
      "vocabulary": [
        {
          "word": "pollution",
          "ipa": "/pəˈluːʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "sự ô nhiễm",
          "example_en": "Air pollution is a major problem in big cities.",
          "example_vi": "Ô nhiễm không khí là một vấn đề lớn ở các thành phố lớn."
        },
        {
          "word": "recycle",
          "ipa": "/ˌriːˈsaɪkl/",
          "part_of_speech": "verb",
          "meaning_vi": "tái chế",
          "example_en": "We should recycle plastic bottles to protect the environment.",
          "example_vi": "Chúng ta nên tái chế chai nhựa để bảo vệ môi trường."
        },
        {
          "word": "conservation",
          "ipa": "/ˌbɒnsəˈveɪʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "sự bảo tồn",
          "example_en": "Wildlife conservation is extremely important.",
          "example_vi": "Bảo tồn động vật hoang dã là vô cùng quan trọng."
        },
        {
          "word": "habitat",
          "ipa": "/ˈhæbɪtæt/",
          "part_of_speech": "noun",
          "meaning_vi": "môi trường sống",
          "example_en": "The forest is the natural habitat of many animals.",
          "example_vi": "Rừng là môi trường sống tự nhiên của nhiều loài động vật."
        },
        {
          "word": "climate",
          "ipa": "/ˈklaɪmət/",
          "part_of_speech": "noun",
          "meaning_vi": "khí hậu",
          "example_en": "Climate change is causing global temperatures to rise.",
          "example_vi": "Biến đổi khí hậu đang làm cho nhiệt độ toàn cầu tăng lên."
        },
        {
          "word": "renewable",
          "ipa": "/rɪˈnjuːəbl/",
          "part_of_speech": "adjective",
          "meaning_vi": "có thể tái tạo",
          "example_en": "Wind and solar power are renewable energy sources.",
          "example_vi": "Năng lượng gió và mặt trời là các nguồn năng lượng có thể tái tạo."
        },
        {
          "word": "ecosystem",
          "ipa": "/ˈiːkəʊsɪstəm/",
          "part_of_speech": "noun",
          "meaning_vi": "hệ sinh thái",
          "example_en": "Pollution can damage the local ecosystem.",
          "example_vi": "Ô nhiễm có thể gây hại cho hệ sinh thái địa phương."
        },
        {
          "word": "species",
          "ipa": "/ˈspiːʃiːz/",
          "part_of_speech": "noun",
          "meaning_vi": "loài",
          "example_en": "There are many endangered species in the world.",
          "example_vi": "Có nhiều loài có nguy cơ tuyệt chủng trên thế giới."
        },
        {
          "word": "damage",
          "ipa": "/ˈdæmɪdʒ/",
          "part_of_speech": "verb",
          "meaning_vi": "gây thiệt hại, làm hỏng",
          "example_en": "Storms can damage coastal areas.",
          "example_vi": "Bão có thể gây thiệt hại cho các vùng ven biển."
        },
        {
          "word": "protect",
          "ipa": "/prəˈtekt/",
          "part_of_speech": "verb",
          "meaning_vi": "bảo vệ",
          "example_en": "We must protect our forests from fire.",
          "example_vi": "Chúng ta phải bảo vệ rừng khỏi hỏa hoạn."
        }
      ],
      "grammar": {
        "point": "First Conditional",
        "explanation_vi": "Câu điều kiện loại 1 dùng để diễn tả một điều kiện có thể xảy ra ở hiện tại hoặc tương lai và kết quả của nó.",
        "structure": "If + S + V (present simple), S + will/can/must + V (bare)",
        "example_en": "If we protect the environment, we will save many endangered species.",
        "example_vi": "Nếu chúng ta bảo vệ môi trường, chúng ta sẽ cứu được nhiều loài có nguy cơ tuyệt chủng.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "If we plant more trees in our neighborhood, the air quality ______ better.",
            "options": [
              "A. will get",
              "B. gets",
              "C. got",
              "D. getting"
            ],
            "correct_answer": 0,
            "explanation_vi": "Cấu trúc câu điều kiện loại 1 dùng để diễn tả một sự việc có thể xảy ra trong tương lai: If + S + V(hiện tại đơn), S + will + V(nguyên mẫu). Do đó, đáp án đúng là 'will get'."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "People ______ more waste if we don't start using reusable bags.",
            "options": [
              "A. create",
              "B. created",
              "C. will create",
              "D. creating"
            ],
            "correct_answer": 2,
            "explanation_vi": "Mệnh đề chính của câu điều kiện loại 1 diễn tả kết quả ở tương lai, sử dụng 'will' + động từ nguyên mẫu ('will create'). Mệnh đề 'if' ở đây ở thì hiện tại đơn ('don't start')."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "If factories continue to pollute the river, many fish ______.",
            "options": [
              "A. die",
              "B. died",
              "C. will die",
              "D. would die"
            ],
            "correct_answer": 2,
            "explanation_vi": "Đây là câu điều kiện loại 1 nói về hậu quả có thật của việc ô nhiễm nước. Mệnh đề chỉ kết quả cần dùng 'will + V', tức là 'will die'."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "We will save a lot of paper if everyone ______ double-sided printing.",
            "options": [
              "A. use",
              "B. uses",
              "C. will use",
              "D. used"
            ],
            "correct_answer": 1,
            "explanation_vi": "Trong câu điều kiện loại 1, mệnh đề 'if' chia ở thì hiện tại đơn. Chủ ngữ 'everyone' là ngôi thứ ba số ít nên động từ 'use' phải thêm 's' thành 'uses'."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "If the temperature of the Earth ______, the ice at the poles will melt.",
            "options": [
              "A. rise",
              "B. rises",
              "C. rose",
              "D. will rise"
            ],
            "correct_answer": 1,
            "explanation_vi": "Mệnh đề 'if' của câu điều kiện loại 1 đòi hỏi thì hiện tại đơn. Chủ ngữ 'the temperature' là danh từ số ít (ít/không đếm được), do đó động từ 'rise' phải chia là 'rises'."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "If it ___ tomorrow, we will cancel the outdoor clean-up campaign.",
          "options": [
            "rains",
            "will rain",
            "rained",
            "is raining"
          ],
          "correct_answer": 0,
          "explanation_vi": "Mệnh đề 'If' của câu điều kiện loại 1 chia ở thì hiện tại đơn."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "We will reduce pollution if we ___ public transport more often.",
          "options": [
            "use",
            "will use",
            "used",
            "are using"
          ],
          "correct_answer": 0,
          "explanation_vi": "Mệnh đề 'If' chia ở hiện tại đơn với chủ ngữ 'we' nên động từ giữ nguyên 'use'."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "If you recycle plastic bottles, you ___ the environment.",
          "options": [
            "help",
            "will help",
            "helped",
            "would help"
          ],
          "correct_answer": 1,
          "explanation_vi": "Mệnh đề chính của câu điều kiện loại 1 dùng 'will + V'."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "What ___ if they do not stop cutting down trees?",
          "options": [
            "will happen",
            "happens",
            "happened",
            "would happen"
          ],
          "correct_answer": 0,
          "explanation_vi": "Câu hỏi ở mệnh đề chính của câu điều kiện loại 1 dùng 'will + V'."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "We need to protect the natural ___ of wild animals.",
          "options": [
            "habitat",
            "pollution",
            "climate",
            "ecosystem"
          ],
          "correct_answer": 0,
          "explanation_vi": "'natural habitat' nghĩa là môi trường sống tự nhiên của động vật."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "Solar energy is a type of ___ energy.",
          "options": [
            "renewable",
            "damaged",
            "polluted",
            "conservation"
          ],
          "correct_answer": 0,
          "explanation_vi": "'renewable energy' nghĩa là năng lượng tái tạo."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "Many animal ___ are in danger of extinction.",
          "options": [
            "species",
            "habitats",
            "ecosystems",
            "pollutions"
          ],
          "correct_answer": 0,
          "explanation_vi": "'animal species' nghĩa là các loài động vật."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "Plastic waste can cause serious ___ to marine life.",
          "options": [
            "damage",
            "conservation",
            "recycle",
            "protect"
          ],
          "correct_answer": 0,
          "explanation_vi": "'cause damage to' nghĩa là gây thiệt hại cho cái gì."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "Protecting Our Planet",
        "content": "Environmental conservation is one of the most urgent challenges of our time. Human activities have caused severe pollution and damaged natural habitats, putting many species at risk. To protect our planet, we must transition to renewable energy sources like solar and wind power. Additionally, recycling waste and reducing plastic consumption can significantly help preserve the delicate ecosystem for future generations.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Read the sign: 'Please keep off the grass.' What does it mean?",
            "options": [
              "A. You can sit on the grass.",
              "B. Do not walk or step on the grass.",
              "C. Water the grass every day.",
              "D. Plant new flowers in the grass."
            ],
            "correct_answer": 1,
            "explanation_vi": "Biển báo 'Please keep off the grass' có nghĩa là xin vui lòng không đi lên hoặc bước lên bãi cỏ."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the short text: 'We should recycle paper and plastic bottles to protect our environment.' What should we do with paper and plastic bottles?",
            "options": [
              "A. Throw them in the river",
              "B. Burn them outside",
              "C. Recycle them",
              "D. Hide them in the ground"
            ],
            "correct_answer": 2,
            "explanation_vi": "Đoạn văn nêu rõ chúng ta nên tái chế giấy và chai nhựa ('recycle paper and plastic bottles')."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the notice: 'Save water! Turn off the tap while brushing your teeth.' When should you turn off the tap?",
            "options": [
              "A. While washing your face",
              "B. While brushing your teeth",
              "C. While drinking water",
              "D. While taking a long shower"
            ],
            "correct_answer": 1,
            "explanation_vi": "Thông báo nhắc nhở tắt vòi nước trong khi đang đánh răng ('while brushing your teeth')."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Read the sentence: 'Trees are very important because they give us fresh air.' Why are trees important?",
            "options": [
              "A. They make the air dirty.",
              "B. They give us fresh air.",
              "C. They stop the rain.",
              "D. They eat plastic."
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu văn giải thích cây xanh rất quan trọng vì chúng cung cấp không khí trong lành ('give us fresh air')."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the email: 'Hi Tom, let's plant some flowers in the school garden this weekend.' What are they going to do?",
            "options": [
              "A. Plant flowers",
              "B. Clean the classroom",
              "C. Buy new books",
              "D. Play football"
            ],
            "correct_answer": 0,
            "explanation_vi": "Email đề cập đến việc trồng một số loài hoa trong vườn trường vào cuối tuần này ('plant some flowers')."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to a weather report: 'It is a sunny and warm day. Perfect for a walk in the park!' What is the weather like?",
            "options": [
              "A. Rainy and cold",
              "B. Snowy and windy",
              "C. Sunny and warm",
              "D. Stormy and dark"
            ],
            "correct_answer": 2,
            "explanation_vi": "Bài nghe mô tả thời tiết là nắng và ấm áp ('sunny and warm day')."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "Listen to a teacher: 'Children, please put the plastic rubbish in the blue bin.' Which bin is for plastic rubbish?",
            "options": [
              "A. The red bin",
              "B. The blue bin",
              "C. The green bin",
              "D. The yellow bin"
            ],
            "correct_answer": 1,
            "explanation_vi": "Giáo viên dặn bỏ rác nhựa vào thùng màu xanh dương ('the blue bin')."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "Listen to a mother: 'Don't throw away that glass bottle. We can use it again.' What does the mother mean?",
            "options": [
              "A. Reuse the bottle",
              "B. Break the bottle",
              "C. Buy a new bottle",
              "D. Hide the bottle"
            ],
            "correct_answer": 0,
            "explanation_vi": "Cụm từ 'use it again' đồng nghĩa với việc tái sử dụng ('reuse')."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "Listen to a guide: 'Look at those tall mountains over there. They are covered with snow.' What is on the mountains?",
            "options": [
              "A. Green grass",
              "B. Snow",
              "C. Tall trees",
              "D. Water"
            ],
            "correct_answer": 1,
            "explanation_vi": "Hướng dẫn viên nói những ngọn núi được bao phủ bởi tuyết ('covered with snow')."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to a boy speaking: 'I love animals, especially wild pandas from the forest.' Where do pandas live according to him?",
            "options": [
              "A. In the ocean",
              "B. In the forest",
              "C. On the moon",
              "D. In a cage"
            ],
            "correct_answer": 1,
            "explanation_vi": "Cậu bé nhắc đến loài gấu trúc hoang dã đến từ rừng ('from the forest')."
          }
        ],
        "speaking_prompt": "Talk about your favorite place in nature. You should say: where it is, what it looks like, and why you like it.",
        "speaking_sample_idea": "My favorite place is a local park. It has many green trees, a big lake, and colorful flowers. I like it because it is quiet and I can walk there with my dog.",
        "writing_prompt": "Write a short paragraph (30-40 words) about how you protect the environment every day.",
        "writing_model_sentence": "Every day, I turn off the lights when I leave the room and I always use a reusable water bottle to reduce plastic waste."
      }
    },
    {
      "id": "u3",
      "title": "Unit 3: Technology and Innovation",
      "description": "Explores vocabulary and passive voice structures related to modern technology, computers, and the internet.",
      "vocabulary": [
        {
          "word": "device",
          "ipa": "/dɪˈvaɪs/",
          "part_of_speech": "noun",
          "meaning_vi": "thiết bị",
          "example_en": "A smartphone is a very useful device.",
          "example_vi": "Điện thoại thông minh là một thiết bị rất hữu ích."
        },
        {
          "word": "internet",
          "ipa": "/ˈɪntənet/",
          "part_of_speech": "noun",
          "meaning_vi": "mạng internet",
          "example_en": "The internet has changed how we communicate.",
          "example_vi": "Mạng internet đã thay đổi cách chúng ta giao tiếp."
        },
        {
          "word": "software",
          "ipa": "/ˈsɒftweə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "phần mềm",
          "example_en": "You need to install this software on your computer.",
          "example_vi": "Bạn cần cài đặt phần mềm này trên máy tính của mình."
        },
        {
          "word": "connection",
          "ipa": "/kəˈnekʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "sự kết nối",
          "example_en": "The internet connection is very slow today.",
          "example_vi": "Kết nối internet hôm nay rất chậm."
        },
        {
          "word": "digital",
          "ipa": "/ˈdɪdʒɪtl/",
          "part_of_speech": "adjective",
          "meaning_vi": "kỹ thuật số",
          "example_en": "We live in a digital age.",
          "example_vi": "Chúng ta sống trong thời đại kỹ thuật số."
        },
        {
          "word": "innovate",
          "ipa": "/ˈɪnəveɪt/",
          "part_of_speech": "verb",
          "meaning_vi": "đổi mới, sáng tạo",
          "example_en": "Companies must innovate to survive in the market.",
          "example_vi": "Các công ty phải đổi mới để tồn tại trên thị trường."
        },
        {
          "word": "access",
          "ipa": "/ˈækses/",
          "part_of_speech": "verb",
          "meaning_vi": "truy cập, tiếp cận",
          "example_en": "Students can access the library online.",
          "example_vi": "Sinh viên có thể truy cập thư viện trực tuyến."
        },
        {
          "word": "security",
          "ipa": "/sɪˈkjʊərəti/",
          "part_of_speech": "noun",
          "meaning_vi": "an ninh, bảo mật",
          "example_en": "Data security is very important for online banking.",
          "example_vi": "Bảo mật dữ liệu rất quan trọng đối với dịch vụ ngân hàng trực tuyến."
        },
        {
          "word": "database",
          "ipa": "/ˈdeɪtəbeɪs/",
          "part_of_speech": "noun",
          "meaning_vi": "cơ sở dữ liệu",
          "example_en": "The customer information is stored in a database.",
          "example_vi": "Thông tin khách hàng được lưu trữ trong một cơ sở dữ liệu."
        },
        {
          "word": "virtual",
          "ipa": "/ˈvɜːtʃuəl/",
          "part_of_speech": "adjective",
          "meaning_vi": "ảo",
          "example_en": "Virtual meetings became popular during the pandemic.",
          "example_vi": "Các cuộc họp ảo đã trở nên phổ biến trong thời kỳ đại dịch."
        }
      ],
      "grammar": {
        "point": "Passive Voice (Present Simple & Past Simple)",
        "explanation_vi": "Thể bị động được dùng khi muốn nhấn mạnh vào hành động hoặc đối tượng chịu tác động của hành động hơn là người thực hiện.",
        "structure": "Present Simple Passive: S + am/is/are + V3/ed | Past Simple Passive: S + was/were + V3/ed",
        "example_en": "The software is updated regularly, and the first computer was invented in the 20th century.",
        "example_vi": "Phần mềm được cập nhật thường xuyên, và chiếc máy tính đầu tiên được phát minh vào thế kỷ 20.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "Many new smartphones ___ every year.",
            "options": [
              "A. are sold",
              "B. is sold",
              "C. sold",
              "D. sell"
            ],
            "correct_answer": 0,
            "explanation_vi": "Chủ ngữ 'Many new smartphones' ở số nhiều và hành động xảy ra thường xuyên (every year) nên dùng cấu trúc bị động thì Hiện tại đơn: are + V3/ed."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "The first computer ___ by Charles Babbage many years ago.",
            "options": [
              "A. is invented",
              "B. was invented",
              "C. invented",
              "D. invents"
            ],
            "correct_answer": 1,
            "explanation_vi": "Trạng ngữ 'many years ago' chỉ quá khứ, và chủ ngữ 'The first computer' là vật nhận hành động nên ta dùng bị động thì Quá khứ đơn: was/were + V3/ed."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "A lot of electricity ___ by modern technology devices.",
            "options": [
              "A. uses",
              "B. use",
              "C. is used",
              "D. are used"
            ],
            "correct_answer": 2,
            "explanation_vi": "Chủ ngữ 'A lot of electricity' là danh từ không đếm được (tính là số ít), câu mang nghĩa bị động ở hiện tại nên dùng 'is used'."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "English ___ in most computer software programs.",
            "options": [
              "A. uses",
              "B. used",
              "C. is using",
              "D. is used"
            ],
            "correct_answer": 3,
            "explanation_vi": "Chủ ngữ 'English' nhận hành động sử dụng, diễn tả một sự thật hiển nhiên ở hiện tại nên dùng bị động Hiện tại đơn: is + V3/ed."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "These digital cameras ___ in Japan last year.",
            "options": [
              "A. were made",
              "B. was made",
              "C. are made",
              "D. made"
            ],
            "correct_answer": 0,
            "explanation_vi": "Trạng ngữ 'last year' chỉ quá khứ và chủ ngữ 'These digital cameras' ở số nhiều nên ta dùng cấu trúc bị động Quá khứ đơn số nhiều: were made."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "This website ___ by millions of users every day.",
          "options": [
            "is visited",
            "visits",
            "was visited",
            "visited"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng bị động hiện tại đơn 'is visited' vì có trạng từ chỉ tần suất 'every day'."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "The internet ___ in the late 20th century.",
          "options": [
            "was invented",
            "is invented",
            "invented",
            "has invented"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng bị động quá khứ đơn 'was invented' vì sự việc đã xảy ra và kết thúc trong quá khứ."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "All personal data ___ securely in our database.",
          "options": [
            "is stored",
            "stores",
            "was storing",
            "stored"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng bị động hiện tại đơn 'is stored' để diễn tả một sự thật hiển nhiên."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "These smart devices ___ in Vietnam last year.",
          "options": [
            "were manufactured",
            "are manufactured",
            "manufactured",
            "was manufactured"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng bị động quá khứ đơn số nhiều 'were manufactured' vì chủ ngữ là 'devices' và có 'last year'."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "You need a strong internet ___ to watch high-quality videos.",
          "options": [
            "connection",
            "device",
            "software",
            "security"
          ],
          "correct_answer": 0,
          "explanation_vi": "'internet connection' nghĩa là kết nối internet."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "Cyber ___ is a major concern for online banking users.",
          "options": [
            "security",
            "database",
            "digital",
            "virtual"
          ],
          "correct_answer": 0,
          "explanation_vi": "'cyber security' nghĩa là an ninh mạng."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "Students can easily ___ educational materials online.",
          "options": [
            "access",
            "innovate",
            "device",
            "connection"
          ],
          "correct_answer": 0,
          "explanation_vi": "'access' nghĩa là truy cập, tiếp cận tài liệu học tập."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "We are living in a ___ age where technology is everywhere.",
          "options": [
            "digital",
            "virtual",
            "software",
            "device"
          ],
          "correct_answer": 0,
          "explanation_vi": "'digital age' nghĩa là thời đại kỹ thuật số."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "The Digital Revolution",
        "content": "Technology has transformed the way we live, work, and communicate. Today, smart devices are used by almost everyone, and high-speed internet connections allow instant access to information worldwide. However, this digital shift also brings challenges, particularly regarding data security. Organizations must invest in advanced software to protect their databases from cyber threats while continuing to innovate in a virtual environment.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Read the sentence and choose the correct meaning: 'My new smartphone has a very good camera.'",
            "options": [
              "The phone is very old.",
              "The phone takes clear pictures.",
              "The phone is too expensive.",
              "The phone is broken."
            ],
            "correct_answer": 1,
            "explanation_vi": "Cụm từ 'good camera' có nghĩa là điện thoại chụp ảnh đẹp và rõ nét."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "What do people usually use a laptop for?",
            "options": [
              "Cooking dinner",
              "Washing clothes",
              "Working and studying",
              "Riding to work"
            ],
            "correct_answer": 2,
            "explanation_vi": "Máy tính xách tay (laptop) thường được sử dụng cho công việc và học tập."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the short text: 'Anna uses her tablet to read books and watch movies every evening.' What does Anna do with her tablet?",
            "options": [
              "She cooks and cleans.",
              "She reads and watches movies.",
              "She plays football.",
              "She drives a car."
            ],
            "correct_answer": 1,
            "explanation_vi": "Đoạn văn nêu rõ Anna dùng máy tính bảng để đọc sách và xem phim."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Which word is a piece of technology?",
            "options": [
              "Banana",
              "Computer",
              "T-shirt",
              "Chair"
            ],
            "correct_answer": 1,
            "explanation_vi": "Computer (máy tính) là một thiết bị công nghệ."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the sign: 'LOW BATTERY. Please charge your phone.' What should you do?",
            "options": [
              "Turn off the phone forever",
              "Buy a new phone",
              "Connect the phone to a charger",
              "Put the phone in water"
            ],
            "correct_answer": 2,
            "explanation_vi": "Khi pin yếu (low battery), bạn cần cắm sạc cho điện thoại."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to the dialogue (simulated): Man: 'How do you usually talk to your friends?' Woman: 'I send them text messages on my phone.' How does the woman communicate?",
            "options": [
              "By writing letters",
              "By sending text messages",
              "By making paper planes",
              "By sending emails"
            ],
            "correct_answer": 1,
            "explanation_vi": "Người phụ nữ nói cô ấy gửi tin nhắn văn bản (text messages) trên điện thoại."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "Listen to the announcement: 'The Wi-Fi password is computer2024.' What is the information about?",
            "options": [
              "A password for the internet",
              "The price of a computer",
              "A telephone number",
              "An address"
            ],
            "correct_answer": 0,
            "explanation_vi": "Thông báo cung cấp mật khẩu Wi-Fi (password for the internet)."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "Listen to a boy speaking: 'I love playing video games on my console on weekends.' What does he do on weekends?",
            "options": [
              "He plays video games.",
              "He cleans the house.",
              "He does his homework.",
              "He goes fishing."
            ],
            "correct_answer": 0,
            "explanation_vi": "Cậu bé nói thích chơi trò chơi điện tử (video games) vào cuối tuần."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "Listen to a person asking: 'Excuse me, where can I plug in my laptop to charge it?' What is the person looking for?",
            "options": [
              "A power outlet",
              "A bathroom",
              "A window",
              "A bookstore"
            ],
            "correct_answer": 0,
            "explanation_vi": "Người này hỏi chỗ cắm sạc laptop, tức là đang tìm ổ cắm điện (power outlet)."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to a teacher: 'Please turn off your mobile phones before the exam starts.' What must the students do?",
            "options": [
              "Turn their phones on high volume",
              "Switch off their phones",
              "Take pictures",
              "Answer phone calls"
            ],
            "correct_answer": 1,
            "explanation_vi": "Giáo viên yêu cầu tắt điện thoại (turn off your mobile phones) trước khi kỳ thi bắt đầu."
          }
        ],
        "speaking_prompt": "What is your favorite piece of technology, and how often do you use it?",
        "speaking_sample_idea": "My favorite technology is my smartphone. I use it every day to chat with friends, study English, and listen to music.",
        "writing_prompt": "Write 3-5 sentences about how you use a computer every day.",
        "writing_model_sentence": "I use my computer every day to do my homework and watch interesting videos on the internet."
      }
    },
    {
      "id": "u4",
      "title": "Unit 4: Health and Lifestyle",
      "description": "Discusses healthy habits, nutrition, physical exercise, and modal verbs of advice and obligation.",
      "vocabulary": [
        {
          "word": "nutrition",
          "ipa": "/njuˈtrɪʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "dinh dưỡng",
          "example_en": "Good nutrition is essential for a healthy life.",
          "example_vi": "Dinh dưỡng tốt là điều cần thiết cho một cuộc sống khỏe mạnh."
        },
        {
          "word": "exercise",
          "ipa": "/ˈeksəsaɪz/",
          "part_of_speech": "noun",
          "meaning_vi": "sự tập thể dục, bài tập",
          "example_en": "You should do physical exercise every day.",
          "example_vi": "Bạn nên tập thể dục thể chất mỗi ngày."
        },
        {
          "word": "disease",
          "ipa": "/dɪˈziːz/",
          "part_of_speech": "noun",
          "meaning_vi": "bệnh tật",
          "example_en": "Smoking can cause heart disease.",
          "example_vi": "Hút thuốc có thể gây ra bệnh tim."
        },
        {
          "word": "prevent",
          "ipa": "/prɪˈvent/",
          "part_of_speech": "verb",
          "meaning_vi": "ngăn ngừa, phòng tránh",
          "example_en": "Vaccines help prevent dangerous diseases.",
          "example_vi": "Vắc-xin giúp ngăn ngừa các bệnh nguy hiểm."
        },
        {
          "word": "balanced",
          "ipa": "/ˈbælənst/",
          "part_of_speech": "adjective",
          "meaning_vi": "cân bằng",
          "example_en": "A balanced diet includes fruits and vegetables.",
          "example_vi": "Một chế độ ăn uống cân bằng bao gồm trái cây và rau quả."
        },
        {
          "word": "mental",
          "ipa": "/ˈmentl/",
          "part_of_speech": "adjective",
          "meaning_vi": "thuộc tinh thần",
          "example_en": "Mental health is as important as physical health.",
          "example_vi": "Sức khỏe tinh thần cũng quan trọng như sức khỏe thể chất."
        },
        {
          "word": "physical",
          "ipa": "/ˈfɪzɪkl/",
          "part_of_speech": "adjective",
          "meaning_vi": "thuộc thể chất",
          "example_en": "Running is a great physical activity.",
          "example_vi": "Chạy bộ là một hoạt động thể chất tuyệt vời."
        },
        {
          "word": "treatment",
          "ipa": "/ˈtriːtmənt/",
          "part_of_speech": "noun",
          "meaning_vi": "sự điều trị, phương pháp điều trị",
          "example_en": "He is receiving treatment for his back pain.",
          "example_vi": "Anh ấy đang được điều trị đau lưng."
        },
        {
          "word": "habit",
          "ipa": "/ˈhæbɪt/",
          "part_of_speech": "noun",
          "meaning_vi": "thói quen",
          "example_en": "Reading books is a very good habit.",
          "example_vi": "Đọc sách là một thói quen rất tốt."
        },
        {
          "word": "stress",
          "ipa": "/stres/",
          "part_of_speech": "noun",
          "meaning_vi": "sự căng thẳng",
          "example_en": "Yoga can help reduce stress.",
          "example_vi": "Yoga có thể giúp giảm căng thẳng."
        }
      ],
      "grammar": {
        "point": "Modal Verbs of Advice and Obligation (should, must, have to)",
        "explanation_vi": "Should dùng để đưa ra lời khuyên. Must dùng để chỉ sự bắt buộc mang tính chủ quan hoặc luật lệ nghiêm ngặt. Have to dùng để chỉ sự bắt buộc do khách quan, hoàn cảnh.",
        "structure": "S + should/must/have to + V (bare)",
        "example_en": "You should eat a balanced diet, and you must see a doctor if the pain continues.",
        "example_vi": "Bạn nên ăn một chế độ ăn uống cân bằng, và bạn phải đi khám bác sĩ nếu cơn đau tiếp tục.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "You feel very tired every day. You ... go to bed earlier.",
            "options": [
              "should",
              "mustn't",
              "don't have to",
              "has to"
            ],
            "correct_answer": 0,
            "explanation_vi": "Chúng ta dùng 'should' để đưa ra lời khuyên hữu ích cho ai đó (bạn nên đi ngủ sớm hơn)."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "The doctor told me that I ... eat less fast food if I want to lose weight.",
            "options": [
              "must",
              "should",
              "has to",
              "shouldn't"
            ],
            "correct_answer": 1,
            "explanation_vi": "Dùng 'should' để đưa ra lời khuyên về sức khỏe và lối sống."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "Tom has a severe toothache. He ... eat too many sweets.",
            "options": [
              "should",
              "must",
              "shouldn't",
              "have to"
            ],
            "correct_answer": 2,
            "explanation_vi": "Dùng 'shouldn't' để khuyên ai đó không nên làm điều gì gây hại cho sức khỏe (không nên ăn quá nhiều đồ ngọt)."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "It's an emergency! I ... call an ambulance right now.",
            "options": [
              "should",
              "must",
              "has to",
              "don't have to"
            ],
            "correct_answer": 1,
            "explanation_vi": "Dùng 'must' để diễn tả một sự bắt buộc, mệnh lệnh mạnh mẽ xuất phát từ tình thế cấp bách."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "Mary wants to stay healthy, so she ... drink enough water every day.",
            "options": [
              "have to",
              "has to",
              "mustn't",
              "shouldn't"
            ],
            "correct_answer": 1,
            "explanation_vi": "Chủ ngữ là 'she' (ngôi số ít), dùng 'has to' để chỉ nghĩa vụ hoặc việc cần thiết phải làm."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "You ___ eat more vegetables if you want to stay healthy.",
          "options": [
            "should",
            "must to",
            "have",
            "should to"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng 'should' để đưa ra lời khuyên nhẹ nhàng, sau 'should' là động từ nguyên mẫu không 'to'."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "In Vietnam, drivers ___ wear a helmet when riding a motorbike.",
          "options": [
            "must",
            "should",
            "have",
            "ought"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng 'must' để chỉ luật lệ bắt buộc."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "I ___ wake up early tomorrow because my shift starts at 6 AM.",
          "options": [
            "have to",
            "should",
            "must to",
            "can"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng 'have to' để chỉ sự bắt buộc do hoàn cảnh khách quan (ca làm việc bắt đầu sớm)."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "You ___ smoke here; it is strictly prohibited.",
          "options": [
            "must not",
            "do not have to",
            "should not to",
            "cannot to"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng 'must not' để chỉ sự cấm đoán."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "Eating a ___ diet is essential for maintaining good health.",
          "options": [
            "balanced",
            "physical",
            "mental",
            "nutrition"
          ],
          "correct_answer": 0,
          "explanation_vi": "'balanced diet' nghĩa là chế độ ăn uống cân bằng."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "Regular ___ helps to strengthen your muscles and heart.",
          "options": [
            "exercise",
            "disease",
            "treatment",
            "stress"
          ],
          "correct_answer": 0,
          "explanation_vi": "'exercise' nghĩa là tập thể dục."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "Washing your hands frequently can help ___ the spread of diseases.",
          "options": [
            "prevent",
            "treat",
            "exercise",
            "stress"
          ],
          "correct_answer": 0,
          "explanation_vi": "'prevent' nghĩa là ngăn ngừa sự lây lan của bệnh tật."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "Many people suffer from ___ due to work pressure.",
          "options": [
            "stress",
            "nutrition",
            "habit",
            "physical"
          ],
          "correct_answer": 0,
          "explanation_vi": "'stress' nghĩa là sự căng thẳng do áp lực công việc."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "A Healthy Lifestyle",
        "content": "Maintaining a healthy lifestyle requires a combination of good nutrition, regular physical exercise, and mental well-being. People should focus on eating a balanced diet rich in vitamins and minerals to prevent chronic diseases. Developing healthy habits, such as sleeping eight hours a night and managing stress, is also crucial. When health issues arise, seeking early medical treatment can prevent further complications.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Read the sign: 'No smoking inside the hospital.' What does it mean?",
            "options": [
              "You can smoke in the hospital.",
              "Smoking is not allowed here.",
              "You can buy cigarettes here.",
              "Smoking is good for health."
            ],
            "correct_answer": 1,
            "explanation_vi": "Biển báo 'No smoking inside the hospital' có nghĩa là không được phép hút thuốc bên trong bệnh viện."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the sentence: 'Eat more fruit and vegetables every day to stay healthy.' What should you eat?",
            "options": [
              "Only meat",
              "Fast food and candy",
              "Fruit and vegetables",
              "Coke and chips"
            ],
            "correct_answer": 2,
            "explanation_vi": "Câu văn khuyên bạn nên ăn nhiều trái cây và rau củ (fruit and vegetables) mỗi ngày để giữ gìn sức khỏe."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the message: 'I have a terrible headache and a fever. I must stay in bed.' How does the writer feel?",
            "options": [
              "Very happy",
              "Sick",
              "Hungry",
              "Excited"
            ],
            "correct_answer": 1,
            "explanation_vi": "Người viết bị đau đầu kinh khủng và sốt, phải nằm trên giường, điều này cho thấy họ đang bị ốm (sick)."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Read the text: 'Mary goes jogging for 30 minutes every morning before work.' What is Mary's habit?",
            "options": [
              "Sleeping late",
              "Exercising",
              "Watching TV",
              "Eating fast food"
            ],
            "correct_answer": 1,
            "explanation_vi": "Mary chạy bộ 30 phút mỗi buổi sáng, đây là thói quen tập thể dục (exercising)."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the sign at the gym: 'Drink plenty of water during your workout.' Why is water important?",
            "options": [
              "To make you tired",
              "To keep your body hydrated",
              "To make you hungry",
              "To stop exercising"
            ],
            "correct_answer": 1,
            "explanation_vi": "Uống nhiều nước trong khi tập luyện giúp cơ thể đủ nước (keep your body hydrated)."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to a doctor: 'You should sleep at least 8 hours a night.' How many hours of sleep does the doctor recommend?",
            "options": [
              "6 hours",
              "7 hours",
              "8 hours",
              "9 hours"
            ],
            "correct_answer": 2,
            "explanation_vi": "Bác sĩ khuyên nên ngủ ít nhất 8 tiếng một đêm ('at least 8 hours')."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "You hear a friend say: 'I feel stressed. I need to relax.' What does your friend want to do?",
            "options": [
              "Work harder",
              "Rest and calm down",
              "Run a marathon",
              "Eat a big burger"
            ],
            "correct_answer": 1,
            "explanation_vi": "Cảm thấy căng thẳng (stressed) và cần thư giãn (relax) nghĩa là bạn muốn nghỉ ngơi và bình tĩnh lại."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "Listen to a man at a restaurant: 'I would like a glass of fresh orange juice, please.' What drink does he order?",
            "options": [
              "Coca Cola",
              "Orange juice",
              "Coffee",
              "Milk"
            ],
            "correct_answer": 1,
            "explanation_vi": "Người đàn ông gọi một ly nước cam tươi ('fresh orange juice')."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "You hear a woman on the phone: 'I have a toothache. I need to see the ___.' Who does she need to see?",
            "options": [
              "dentist",
              "teacher",
              "mechanic",
              "driver"
            ],
            "correct_answer": 0,
            "explanation_vi": "Bị đau răng (toothache) thì phải đi gặp nha sĩ (dentist)."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to a coach: 'Remember to warm up before you play soccer.' When should you warm up?",
            "options": [
              "After the game",
              "Before the game",
              "During the game",
              "Never"
            ],
            "correct_answer": 1,
            "explanation_vi": "Huấn luyện viên dặn khởi động (warm up) trước khi chơi bóng đá ('before you play soccer')."
          }
        ],
        "speaking_prompt": "What do you usually do to stay healthy?",
        "speaking_sample_idea": "I usually eat a lot of fruit and vegetables, and I go for a walk in the park every evening with my dog.",
        "writing_prompt": "Write a short paragraph (30-40 words) about your favorite healthy food.",
        "writing_model_sentence": "My favorite healthy food is apples because they are sweet, crunchy, and very good for my body."
      }
    },
    {
      "id": "u5",
      "title": "Unit 5: Work and Careers",
      "description": "Focuses on job applications, workplace vocabulary, and the second conditional for hypothetical situations.",
      "vocabulary": [
        {
          "word": "employ",
          "ipa": "/ɪmˈplɔɪ/",
          "part_of_speech": "verb",
          "meaning_vi": "thuê, tuyển dụng",
          "example_en": "The company plans to employ more staff next month.",
          "example_vi": "Công ty có kế hoạch tuyển dụng thêm nhân viên vào tháng tới."
        },
        {
          "word": "salary",
          "ipa": "/ˈsæləri/",
          "part_of_speech": "noun",
          "meaning_vi": "lương",
          "example_en": "She is happy with her monthly salary.",
          "example_vi": "Cô ấy hài lòng với mức lương hàng tháng của mình."
        },
        {
          "word": "profession",
          "ipa": "/prəˈfeʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "nghề nghiệp",
          "example_en": "Teaching is a respected profession.",
          "example_vi": "Dạy học là một nghề nghiệp được tôn trọng."
        },
        {
          "word": "interview",
          "ipa": "/ˈɪntəvjuː/",
          "part_of_speech": "noun",
          "meaning_vi": "cuộc phỏng vấn",
          "example_en": "He has a job interview tomorrow morning.",
          "example_vi": "Anh ấy có một cuộc phỏng vấn xin việc vào sáng mai."
        },
        {
          "word": "candidate",
          "ipa": "/ˈkændɪdət/",
          "part_of_speech": "noun",
          "meaning_vi": "ứng viên",
          "example_en": "There are ten candidates for this position.",
          "example_vi": "Có mười ứng viên cho vị trí này."
        },
        {
          "word": "experience",
          "ipa": "/ɪkˈspɪəriəns/",
          "part_of_speech": "noun",
          "meaning_vi": "kinh nghiệm",
          "example_en": "She has five years of experience in marketing.",
          "example_vi": "Cô ấy có năm năm kinh nghiệm trong lĩnh vực tiếp thị."
        },
        {
          "word": "promotion",
          "ipa": "/prəˈməʊʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "sự thăng tiến, thăng chức",
          "example_en": "He got a promotion after working hard.",
          "example_vi": "Anh ấy đã được thăng chức sau khi làm việc chăm chỉ."
        },
        {
          "word": "benefit",
          "ipa": "/ˈbenɪfɪt/",
          "part_of_speech": "noun",
          "meaning_vi": "phúc lợi, lợi ích",
          "example_en": "Health insurance is an important employee benefit.",
          "example_vi": "Bảo hiểm y tế là một phúc lợi quan trọng của nhân viên."
        },
        {
          "word": "retire",
          "ipa": "/rɪˈtaɪə(r)/",
          "part_of_speech": "verb",
          "meaning_vi": "nghỉ hưu",
          "example_en": "My father plans to retire at the age of 60.",
          "example_vi": "Bố tôi có kế hoạch nghỉ hưu ở tuổi 60."
        },
        {
          "word": "colleague",
          "ipa": "/ˈbɒliːɡ/",
          "part_of_speech": "noun",
          "meaning_vi": "đồng nghiệp",
          "example_en": "I get along well with my colleagues.",
          "example_vi": "Tôi hòa thuận với các đồng nghiệp của mình."
        }
      ],
      "grammar": {
        "point": "Second Conditional",
        "explanation_vi": "Câu điều kiện loại 2 dùng để diễn tả một giả định không có thật ở hiện tại hoặc tương lai.",
        "structure": "If + S + V-ed/were, S + would/could + V (bare)",
        "example_en": "If I had more experience, I would apply for that promotion.",
        "example_vi": "Nếu tôi có nhiều kinh nghiệm hơn, tôi sẽ nộp đơn xin thăng chức đó.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "If I ... a manager, I would change our working hours.",
            "options": [
              "am",
              "were",
              "will be",
              "be"
            ],
            "correct_answer": 1,
            "explanation_vi": "Cấu trúc câu điều kiện loại 2 dùng 'were' cho tất cả các ngôi ở mệnh đề 'if' để giả định một việc không có thật ở hiện tại."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "What would you do if you ... your job tomorrow?",
            "options": [
              "lose",
              "lost",
              "will lose",
              "would lose"
            ],
            "correct_answer": 1,
            "explanation_vi": "Mệnh đề 'if' trong câu điều kiện loại 2 phải chia ở thì Quá khứ đơn (V2/ed), từ 'lose' chuyển thành 'lost'."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "If she didn't live so far away, she ... to work by bicycle.",
            "options": [
              "comes",
              "came",
              "will come",
              "would come"
            ],
            "correct_answer": 3,
            "explanation_vi": "Mệnh đề chính của câu điều kiện loại 2 sử dụng cấu trúc 'would + động từ nguyên mẫu'."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "If I had more experience, the company ... me for the position.",
            "options": [
              "will hire",
              "hires",
              "would hire",
              "hired"
            ],
            "correct_answer": 2,
            "explanation_vi": "Đây là câu điều kiện loại 2, mệnh đề 'if' dùng quá khứ đơn (had), mệnh đề chính dùng 'would + V-inf'."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "Where ... you work if you could choose any company in the world?",
            "options": [
              "do",
              "did",
              "will",
              "would"
            ],
            "correct_answer": 3,
            "explanation_vi": "Câu hỏi trong câu điều kiện loại 2 ở mệnh đề chính sử dụng trợ động từ 'would' trước chủ ngữ."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "If I ___ you, I would accept that job offer.",
          "options": [
            "were",
            "am",
            "would be",
            "had been"
          ],
          "correct_answer": 0,
          "explanation_vi": "Trong câu điều kiện loại 2, động từ 'to be' chia là 'were' cho tất cả các ngôi."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "She would earn a higher salary if she ___ in a big city.",
          "options": [
            "worked",
            "works",
            "will work",
            "would work"
          ],
          "correct_answer": 0,
          "explanation_vi": "Mệnh đề 'If' của câu điều kiện loại 2 chia ở thì quá khứ đơn."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "If they ___ more candidates, they would find a suitable employee.",
          "options": [
            "interviewed",
            "interview",
            "will interview",
            "would interview"
          ],
          "correct_answer": 0,
          "explanation_vi": "Mệnh đề 'If' chia ở quá khứ đơn 'interviewed'."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "What would you do if you ___ the lottery?",
          "options": [
            "won",
            "win",
            "will win",
            "would win"
          ],
          "correct_answer": 0,
          "explanation_vi": "Mệnh đề 'If' chia ở quá khứ đơn 'won' (quá khứ của win)."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "The company decided to ___ ten new software engineers.",
          "options": [
            "employ",
            "retire",
            "benefit",
            "promotion"
          ],
          "correct_answer": 0,
          "explanation_vi": "'employ' nghĩa là tuyển dụng, phù hợp với ngữ cảnh tuyển kỹ sư mới."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "He is preparing carefully for his job ___ tomorrow.",
          "options": [
            "interview",
            "salary",
            "colleague",
            "profession"
          ],
          "correct_answer": 0,
          "explanation_vi": "'job interview' nghĩa là cuộc phỏng vấn xin việc."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "She has five years of ___ in marketing.",
          "options": [
            "experience",
            "candidate",
            "promotion",
            "retire"
          ],
          "correct_answer": 0,
          "explanation_vi": "'experience' nghĩa là kinh nghiệm làm việc."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "My ___ are very friendly and always help me with my work.",
          "options": [
            "colleagues",
            "salaries",
            "professions",
            "benefits"
          ],
          "correct_answer": 0,
          "explanation_vi": "'colleagues' nghĩa là đồng nghiệp."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "Choosing the Right Career",
        "content": "Finding the right profession is a significant milestone in life. When applying for a job, candidates must prepare thoroughly for the interview and highlight their relevant experience. Companies look for individuals who can work well with colleagues and contribute to the business. In return, employees expect a fair salary, attractive benefits, and opportunities for promotion before they eventually retire.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Read the sign: 'OFFICE CLOSED ON MONDAY.' When is the office open?",
            "options": [
              "Monday",
              "Tuesday",
              "Every day",
              "Never"
            ],
            "correct_answer": 1,
            "explanation_vi": "Biển báo ghi 'Văn phòng đóng cửa vào thứ Hai', nghĩa là văn phòng sẽ mở cửa vào các ngày khác như thứ Ba."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the sentence: 'John is a chef. He works in a busy restaurant.' What does John do?",
            "options": [
              "He drives a taxi.",
              "He cooks food.",
              "He teaches English.",
              "He sells computers."
            ],
            "correct_answer": 1,
            "explanation_vi": "'Chef' có nghĩa là đầu bếp, người làm việc trong nhà hàng và nấu ăn ('cooks food')."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the message: 'Hi Anna, please call Mr. Smith at 2 PM about your new job.' Who should Anna call?",
            "options": [
              "Anna",
              "Mr. Smith",
              "Her new boss's friend",
              "Nobody"
            ],
            "correct_answer": 1,
            "explanation_vi": "Tin nhắn yêu cầu Anna gọi cho 'Mr. Smith' lúc 2 giờ chiều."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Read the job advertisement: 'Wanted: English teacher for kids on weekends.' When does the job take place?",
            "options": [
              "Monday to Friday",
              "Saturday and Sunday",
              "Every evening",
              "Only in summer"
            ],
            "correct_answer": 1,
            "explanation_vi": "'Weekends' (cuối tuần) chỉ thứ Bảy và Chủ Nhật."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the email: 'Dear staff, the meeting starts at 9:00 AM tomorrow. Please arrive on time.' What time should the staff arrive?",
            "options": [
              "Before 9:00 AM",
              "At 10:00 AM",
              "Anytime they want",
              "At 9:00 AM or earlier"
            ],
            "correct_answer": 3,
            "explanation_vi": "Cuộc họp bắt đầu lúc 9:00 sáng và nhân viên được yêu cầu đến đúng giờ ('on time'), tức là lúc 9:00 hoặc sớm hơn."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to the dialogue. Man: 'What do you do?' Woman: 'I work in a hospital. I help sick people.' What is her job?",
            "options": [
              "A nurse",
              "A teacher",
              "A mechanic",
              "A waiter"
            ],
            "correct_answer": 0,
            "explanation_vi": "Người phụ nữ làm việc trong bệnh viện và giúp đỡ người bệnh, điều này mô tả công việc của một y tá ('nurse')."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "Listen to the speaker: 'My shift starts at 8 AM and finishes at 4 PM.' How many hours does the person work?",
            "options": [
              "6 hours",
              "7 hours",
              "8 hours",
              "9 hours"
            ],
            "correct_answer": 2,
            "explanation_vi": "Từ 8 giờ sáng đến 4 giờ chiều là tổng cộng 8 tiếng làm việc."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "Listen to the phone call: 'Hello, can I speak to the manager, please?' Who is the caller trying to talk to?",
            "options": [
              "The secretary",
              "The manager",
              "The customer",
              "The cleaner"
            ],
            "correct_answer": 1,
            "explanation_vi": "Người gọi hỏi 'có thể nói chuyện với người quản lý (manager) được không'."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "Listen to the announcement: 'Please wear your safety helmets before entering the factory.' Where are the workers?",
            "options": [
              "At a school",
              "At a hospital",
              "At a factory",
              "At a restaurant"
            ],
            "correct_answer": 2,
            "explanation_vi": "Thông báo nhắc nhở đội mũ bảo hộ trước khi vào nhà máy ('factory')."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to the person talking about their workplace: 'I love my job because I travel to different countries every month.' What kind of job is it?",
            "options": [
              "An office job",
              "A job that involves traveling",
              "A part-time job at home",
              "A night shift job"
            ],
            "correct_answer": 1,
            "explanation_vi": "Người này đi đến các quốc gia khác nhau mỗi tháng, cho thấy đây là công việc phải đi lại nhiều ('traveling')."
          }
        ],
        "speaking_prompt": "Talk about your current job or what job you want to have in the future.",
        "speaking_sample_idea": "I am a student now, but in the future, I want to be an English teacher because I like helping children learn new things.",
        "writing_prompt": "Write a short paragraph (30-40 words) about your dream job.",
        "writing_model_sentence": "My dream job is to be a chef because I love cooking delicious food for my family and friends."
      }
    },
    {
      "id": "u6",
      "title": "Unit 6: Travel and Tourism",
      "description": "Covers travel planning, accommodation, transport, and comparison of adjectives.",
      "vocabulary": [
        {
          "word": "destination",
          "ipa": "/ˌdestɪˈneɪʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "điểm đến",
          "example_en": "Da Nang is a popular tourist destination.",
          "example_vi": "Đà Nẵng là một điểm đến du lịch phổ biến."
        },
        {
          "word": "itinerary",
          "ipa": "/aɪˈtɪnərəri/",
          "part_of_speech": "noun",
          "meaning_vi": "lịch trình chuyến đi",
          "example_en": "We planned our travel itinerary carefully.",
          "example_vi": "Chúng tôi đã lên lịch trình chuyến đi của mình một cách cẩn thận."
        },
        {
          "word": "accommodation",
          "ipa": "/əˌbɒməˈdeɪʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "chỗ ở",
          "example_en": "Hotel accommodation is included in the tour price.",
          "example_vi": "Chỗ ở khách sạn đã được bao gồm trong giá tour."
        },
        {
          "word": "explore",
          "ipa": "/ɪkˈsplɔː(r)/",
          "part_of_speech": "verb",
          "meaning_vi": "khám phá",
          "example_en": "They want to explore the ancient city.",
          "example_vi": "Họ muốn khám phá thành phố cổ kính."
        },
        {
          "word": "local",
          "ipa": "/ˈləʊkl/",
          "part_of_speech": "adjective",
          "meaning_vi": "địa phương",
          "example_en": "We love trying local food when traveling.",
          "example_vi": "Chúng tôi thích thử món ăn địa phương khi đi du lịch."
        },
        {
          "word": "souvenir",
          "ipa": "/ˌsuːvəˈnɪə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "quà lưu niệm",
          "example_en": "She bought a conical hat as a souvenir.",
          "example_vi": "Cô ấy đã mua một chiếc nón lá làm quà lưu niệm."
        },
        {
          "word": "transport",
          "ipa": "/ˈtrænspɔːt/",
          "part_of_speech": "noun",
          "meaning_vi": "phương tiện giao thông, vận chuyển",
          "example_en": "Public transport is very convenient in this city.",
          "example_vi": "Phương tiện giao thông công cộng rất thuận tiện ở thành phố này."
        },
        {
          "word": "culture",
          "ipa": "/ˈkʌltʃə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "văn hóa",
          "example_en": "Learning about different cultures is exciting.",
          "example_vi": "Tìm hiểu về các nền văn hóa khác nhau thật thú vị."
        },
        {
          "word": "passenger",
          "ipa": "/ˈpæsɪndʒə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "hành khách",
          "example_en": "The plane was carrying 200 passengers.",
          "example_vi": "Chiếc máy bay đang chở 200 hành khách."
        },
        {
          "word": "booking",
          "ipa": "/ˈbʊkɪŋ/",
          "part_of_speech": "noun",
          "meaning_vi": "sự đặt trước (vé, phòng)",
          "example_en": "I made a booking for a double room.",
          "example_vi": "Tôi đã đặt trước một phòng đôi."
        }
      ],
      "grammar": {
        "point": "Comparison of Adjectives",
        "explanation_vi": "Dùng để so sánh giữa hai hoặc nhiều người, vật, hiện tượng. Bao gồm so sánh hơn (comparative) và so sánh nhất (superlative).",
        "structure": "Comparative: short adj-er + than / more + long adj + than | Superlative: the + short adj-est / the most + long adj",
        "example_en": "Traveling by train is more comfortable than by bus, but flying is the fastest way.",
        "example_vi": "Đi du lịch bằng tàu hỏa thoải mái hơn bằng xe buýt, nhưng đi máy bay là cách nhanh nhất.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "Traveling by train is ___ than traveling by bus in this country.",
            "options": [
              "A. slow",
              "B. slower",
              "C. slowest",
              "D. the slowest"
            ],
            "correct_answer": 1,
            "explanation_vi": "Chúng ta dùng tính từ so sánh hơn (comparative) với 'than' để so sánh giữa tàu hỏa và xe buýt. 'Slow' là tính từ ngắn, nên ta thêm '-er' thành 'slower'."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "This is ___ hotel in the city, but it is very cheap.",
            "options": [
              "A. old",
              "B. older",
              "C. oldest",
              "D. the oldest"
            ],
            "correct_answer": 3,
            "explanation_vi": "Câu này dùng cấu trúc so sánh nhất (superlative) vì có phạm vi 'in the city'. Trước tính từ so sánh nhất, chúng ta bắt buộc phải có mạo từ 'the'."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "July and August are usually ___ months of the year for tourism.",
            "options": [
              "A. hot",
              "B. hotter",
              "C. the hottest",
              "D. hottest"
            ],
            "correct_answer": 2,
            "explanation_vi": "Cụm từ 'of the year' chỉ phạm vi toàn bộ năm, đây là dấu hiệu của so sánh nhất. 'Hot' là tính từ ngắn, gấp đôi phụ âm cuối và thêm '-est', đi kèm với mạo từ 'the'."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "A plane ticket is usually ___ than a train ticket.",
            "options": [
              "A. more expensive",
              "B. expensive",
              "C. most expensive",
              "D. the most expensive"
            ],
            "correct_answer": 0,
            "explanation_vi": "Đây là câu so sánh hơn với từ 'than'. 'Expensive' là tính từ dài (3 âm tiết), nên ta dùng 'more' trước tính từ."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "Which season is ___ for visiting our mountainous region?",
            "options": [
              "A. good",
              "B. better",
              "C. best",
              "D. the best"
            ],
            "correct_answer": 3,
            "explanation_vi": "Đây là câu hỏi về mùa nào là tốt nhất (so sánh nhất) trong tất cả các mùa. 'Good' là tính từ bất quy tắc, dạng so sánh nhất là 'best' và phải có 'the' ở phía trước."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "This hotel is ___ than the one we stayed in last year.",
          "options": [
            "cheaper",
            "cheapest",
            "more cheap",
            "the cheapest"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng so sánh hơn với tính từ ngắn 'cheaper' vì có từ 'than'."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "Halong Bay is one of the ___ destinations in Vietnam.",
          "options": [
            "most popular",
            "popular",
            "more popular",
            "popularist"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng so sánh nhất với tính từ dài 'the most popular'."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "Public transport in this city is ___ than in my hometown.",
          "options": [
            "better",
            "good",
            "best",
            "the best"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng dạng so sánh hơn bất quy tắc của 'good' là 'better'."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "What is the ___ way to travel around Europe?",
          "options": [
            "easiest",
            "easier",
            "easy",
            "most easy"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng so sánh nhất của tính từ ngắn kết thúc bằng 'y' là 'easiest'."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "We need to book our ___ before we arrive in Da Nang.",
          "options": [
            "accommodation",
            "itinerary",
            "transport",
            "souvenir"
          ],
          "correct_answer": 0,
          "explanation_vi": "'accommodation' nghĩa là chỗ ở (khách sạn, nhà nghỉ)."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "I bought a traditional hat as a ___ of my trip to Vietnam.",
          "options": [
            "souvenir",
            "destination",
            "booking",
            "passenger"
          ],
          "correct_answer": 0,
          "explanation_vi": "'souvenir' nghĩa là quà lưu niệm."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "The travel agency sent us a detailed ___ for our 5-day tour.",
          "options": [
            "itinerary",
            "culture",
            "local",
            "transport"
          ],
          "correct_answer": 0,
          "explanation_vi": "'itinerary' nghĩa là lịch trình chi tiết của chuyến đi."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "Tourists love to ___ the ancient streets of Hoi An.",
          "options": [
            "explore",
            "book",
            "transport",
            "local"
          ],
          "correct_answer": 0,
          "explanation_vi": "'explore' nghĩa là khám phá."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "The Joy of Traveling",
        "content": "Traveling is a wonderful way to explore new cultures and meet local people. Before starting a journey, it is essential to choose a destination, plan a detailed itinerary, and make accommodation bookings. Travelers can use various modes of transport, such as trains, buses, or airplanes. While traveling, passengers should respect local customs and perhaps buy some unique souvenirs to remember their experiences.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Read the sign: 'Please buy your train ticket before you get on the train.' What does it mean?",
            "options": [
              "A. You can buy a ticket on the train.",
              "B. You must buy a ticket first.",
              "C. The train is free.",
              "D. You do not need a ticket."
            ],
            "correct_answer": 1,
            "explanation_vi": "Biển báo yêu cầu bạn phải mua vé tàu trước khi lên tàu."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the text: 'Our hotel has a swimming pool, free Wi-Fi, and a great restaurant.' What does the hotel NOT have?",
            "options": [
              "A. A pool for swimming",
              "B. Free internet",
              "C. A place to eat",
              "D. A parking lot"
            ],
            "correct_answer": 3,
            "explanation_vi": "Văn bản nhắc đến hồ bơi (swimming pool), Wi-Fi miễn phí (free Wi-Fi), và nhà hàng (restaurant), nhưng không nhắc đến bãi đậu xe (parking lot)."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the message: 'Hi Anna, let's meet at the airport at 9:00 AM tomorrow.' When will they meet?",
            "options": [
              "A. Today at 9:00 AM",
              "B. Tomorrow at 9:00 AM",
              "C. Tomorrow at 9:00 PM",
              "D. Yesterday at 9:00 AM"
            ],
            "correct_answer": 1,
            "explanation_vi": "Tin nhắn ghi rõ là gặp nhau vào lúc 9:00 sáng ngày mai (at 9:00 AM tomorrow)."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Read the travel ad: 'Visit sunny beach hotel this summer! Rooms are only $50 a night.' How much does one night cost?",
            "options": [
              "A. $15",
              "B. $50",
              "C. $500",
              "D. $150"
            ],
            "correct_answer": 1,
            "explanation_vi": "Quảng cáo ghi giá phòng là 50 đô la một đêm (only $50 a night)."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the notice: 'Gate 4 is closed. Please go to Gate 7 for your flight to Hanoi.' Where should passengers for Hanoi go?",
            "options": [
              "A. Gate 4",
              "B. Gate 1",
              "C. Gate 7",
              "D. Gate 14"
            ],
            "correct_answer": 2,
            "explanation_vi": "Thông báo yêu cầu hành khách đi cổng số 7 (Gate 7) để bắt chuyến bay."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to a tourist asking: 'Excuse me, where is the bus station?' What is the tourist looking for?",
            "options": [
              "A. A hotel",
              "B. A bus station",
              "C. A train station",
              "D. An airport"
            ],
            "correct_answer": 1,
            "explanation_vi": "Du khách hỏi đường đến bến xe buýt ('bus station')."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "Listen to the announcement: 'Flight VN123 to Da Nang is now boarding at Gate 2.' Which city is the flight going to?",
            "options": [
              "A. Hanoi",
              "B. Hue",
              "C. Da Nang",
              "D. Ho Chi Minh City"
            ],
            "correct_answer": 2,
            "explanation_vi": "Thông báo chuyến bay đến thành phố Đà Nẵng ('Da Nang')."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "Listen to the receptionist: 'Here is your room key, sir. Your room is on the third floor.' Which floor is the room on?",
            "options": [
              "A. Floor 1",
              "B. Floor 2",
              "C. Floor 3",
              "D. Floor 13"
            ],
            "correct_answer": 2,
            "explanation_vi": "Lễ tân nói phòng ở tầng ba ('third floor')."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "Listen to the price: 'A single ticket to the museum costs 5 dollars.' How much is the ticket?",
            "options": [
              "A. $50",
              "B. $15",
              "C. $5",
              "D. $55"
            ],
            "correct_answer": 2,
            "explanation_vi": "Giá vé được đọc là 5 đô la ('5 dollars')."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to the weather report for your holiday: 'Tomorrow will be rainy and cold.' What should you take with you?",
            "options": [
              "A. Sunglasses",
              "B. An umbrella",
              "C. A swimsuit",
              "D. Short pants"
            ],
            "correct_answer": 1,
            "explanation_vi": "Thời tiết mưa và lạnh ('rainy and cold') nên bạn cần mang theo ô/dù ('an umbrella')."
          }
        ],
        "speaking_prompt": "Talk about your last holiday. Where did you go, what did you do, and did you like it?",
        "speaking_sample_idea": "I went to Da Nang last summer with my family. We visited Ba Na Hills, ate delicious seafood, and swam in the beach. I loved it because the weather was sunny and the people were very friendly.",
        "writing_prompt": "Write a short paragraph about your dream holiday. Where do you want to go and why? (30-40 words)",
        "writing_model_sentence": "My dream holiday is to visit Japan because I want to see the beautiful cherry blossoms, try traditional sushi, and explore the modern city of Tokyo."
      }
    },
    {
      "id": "u7",
      "title": "Unit 7: Society and Culture",
      "description": "Explores social values, traditions, cultural heritage, and relative clauses.",
      "vocabulary": [
        {
          "word": "community",
          "ipa": "/bəˈmjuːnəti/",
          "part_of_speech": "noun",
          "meaning_vi": "cộng đồng",
          "example_en": "We should help the local community.",
          "example_vi": "Chúng ta nên giúp đỡ cộng đồng địa phương."
        },
        {
          "word": "tradition",
          "ipa": "/trəˈdɪʃn/",
          "part_of_speech": "noun",
          "meaning_vi": "truyền thống",
          "example_en": "It is a tradition to make Banh Chung at Tet.",
          "example_vi": "Làm bánh chưng vào ngày Tết là một truyền thống."
        },
        {
          "word": "diversity",
          "ipa": "/daɪˈvɜːsəti/",
          "part_of_speech": "noun",
          "meaning_vi": "sự đa dạng",
          "example_en": "Cultural diversity makes the world more interesting.",
          "example_vi": "Sự đa dạng văn hóa làm cho thế giới thú vị hơn."
        },
        {
          "word": "custom",
          "ipa": "/ˈbʌstəm/",
          "part_of_speech": "noun",
          "meaning_vi": "phong tục, tập quán",
          "example_en": "It is a custom to take off shoes before entering a house.",
          "example_vi": "Cởi giày trước khi vào nhà là một phong tục."
        },
        {
          "word": "values",
          "ipa": "/ˈvæljuːz/",
          "part_of_speech": "noun",
          "meaning_vi": "các giá trị (đạo đức, văn hóa)",
          "example_en": "Family values are very important in Vietnam.",
          "example_vi": "Các giá trị gia đình rất quan trọng ở Việt Nam."
        },
        {
          "word": "celebrate",
          "ipa": "/ˈselɪbreɪt/",
          "part_of_speech": "verb",
          "meaning_vi": "kỷ niệm, ăn mừng",
          "example_en": "How do you celebrate the New Year?",
          "example_vi": "Bạn đón mừng năm mới như thế nào?"
        },
        {
          "word": "heritage",
          "ipa": "/ˈherɪtɪdʒ/",
          "part_of_speech": "noun",
          "meaning_vi": "di sản",
          "example_en": "Hoi An is a world cultural heritage site.",
          "example_vi": "Hội An là một di sản văn hóa thế giới."
        },
        {
          "word": "behavior",
          "ipa": "/bɪˈheɪvjə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "hành vi, cách ứng xử",
          "example_en": "His polite behavior impressed everyone.",
          "example_vi": "Cách ứng xử lịch sự của anh ấy đã gây ấn tượng với mọi người."
        },
        {
          "word": "citizen",
          "ipa": "/ˈsɪtɪzn/",
          "part_of_speech": "noun",
          "meaning_vi": "công dân",
          "example_en": "Every citizen has the right to vote.",
          "example_vi": "Mỗi công dân đều có quyền bỏ phiếu."
        },
        {
          "word": "relationship",
          "ipa": "/rɪˈleɪʃnʃɪp/",
          "part_of_speech": "noun",
          "meaning_vi": "mối quan hệ",
          "example_en": "They have a good working relationship.",
          "example_vi": "Họ có một mối quan hệ công việc tốt."
        }
      ],
      "grammar": {
        "point": "Relative Clauses (who, which, that)",
        "explanation_vi": "Dùng để giải thích rõ hơn cho danh từ đứng trước nó. 'Who' dùng cho người, 'which' dùng cho vật, 'that' có thể dùng cho cả người và vật trong mệnh đề quan hệ xác định.",
        "structure": "N (person) + who + V | N (thing) + which + V",
        "example_en": "The festival, which is celebrated in spring, attracts many tourists who want to learn about Vietnamese culture.",
        "example_vi": "Lễ hội, cái mà được tổ chức vào mùa xuân, thu hút nhiều du khách, những người muốn tìm hiểu về văn hóa Việt Nam.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "The man ___ lives next door is a famous artist in our town.",
            "options": [
              "who",
              "which",
              "where",
              "whose"
            ],
            "correct_answer": 0,
            "explanation_vi": "Chúng ta dùng đại từ quan hệ 'who' để chỉ người (the man)."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "I love the traditional festival ___ takes place in my village every spring.",
            "options": [
              "who",
              "whom",
              "which",
              "where"
            ],
            "correct_answer": 2,
            "explanation_vi": "Chúng ta dùng đại từ quan hệ 'which' hoặc 'that' để chỉ vật hoặc sự việc (the traditional festival)."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "She is wearing a ao dai ___ was made by a famous local tailor.",
            "options": [
              "who",
              "whom",
              "that",
              "where"
            ],
            "correct_answer": 2,
            "explanation_vi": "Đại từ 'that' có thể dùng để thay thế cho 'which' để chỉ vật (a ao dai) trong mệnh đề quan hệ xác định."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "Do you know the artists ___ performed traditional music last night?",
            "options": [
              "which",
              "who",
              "whose",
              "where"
            ],
            "correct_answer": 1,
            "explanation_vi": "Danh từ trước chỗ trống là 'the artists' (các nghệ sĩ - chỉ người), nên ta dùng 'who'."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "We visited an ancient temple ___ is hundreds of years old.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correct_answer": 2,
            "explanation_vi": "Danh từ 'an ancient temple' chỉ sự vật/nơi chốn ở đây đóng vai trò làm chủ ngữ, ta dùng 'which'."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "The man ___ lives next door is a famous artist.",
          "options": [
            "who",
            "which",
            "whom",
            "whose"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng đại từ quan hệ 'who' làm chủ ngữ thay thế cho danh từ chỉ người 'The man'."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "Tet is a traditional festival ___ is celebrated in Vietnam.",
          "options": [
            "which",
            "who",
            "whom",
            "where"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng đại từ quan hệ 'which' làm chủ ngữ thay thế cho danh từ chỉ vật 'traditional festival'."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "I know a restaurant ___ serves excellent traditional food.",
          "options": [
            "that",
            "who",
            "whom",
            "whose"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng 'that' để thay thế cho danh từ chỉ vật 'restaurant' trong mệnh đề quan hệ xác định."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "The citizens ___ houses were damaged by the storm received help.",
          "options": [
            "whose",
            "who",
            "which",
            "that"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng 'whose' để chỉ sự sở hữu (ngôi nhà của những người công dân)."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "Vietnam is a country with great cultural ___.",
          "options": [
            "diversity",
            "behavior",
            "citizen",
            "relationship"
          ],
          "correct_answer": 0,
          "explanation_vi": "'cultural diversity' nghĩa là sự đa dạng văn hóa."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "It is a ___ in Vietnam to visit relatives during Tet.",
          "options": [
            "tradition",
            "behavior",
            "citizen",
            "relationship"
          ],
          "correct_answer": 0,
          "explanation_vi": "'tradition' nghĩa là truyền thống."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "Every ___ should obey the laws of their country.",
          "options": [
            "citizen",
            "custom",
            "heritage",
            "value"
          ],
          "correct_answer": 0,
          "explanation_vi": "'citizen' nghĩa là công dân."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "Hoi An Ancient Town is a UNESCO World ___ Site.",
          "options": [
            "heritage",
            "community",
            "custom",
            "behavior"
          ],
          "correct_answer": 0,
          "explanation_vi": "'World Heritage Site' nghĩa là Di sản thế giới."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "Cultural Diversity and Traditions",
        "content": "Every society has its own unique culture, traditions, and social values. Cultural diversity enriches a community by bringing different perspectives and customs together. Citizens who respect heritage and traditional behaviors help preserve their country's identity. Celebrating national festivals is a great way to strengthen relationships among community members and pass down customs to younger generations.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Read the sign: 'Please take off your shoes before entering the house.' What does this sign mean?",
            "options": [
              "You must buy new shoes inside.",
              "You cannot wear your shoes inside.",
              "You need to clean your shoes outside.",
              "You can leave your shoes anywhere."
            ],
            "correct_answer": 1,
            "explanation_vi": "Biển báo yêu cầu cởi giày trước khi vào nhà, có nghĩa là bạn không được đi giày ở bên trong."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the text: 'In Vietnam, people often give lucky money in red envelopes to children during Tet.' What is the color of the envelopes?",
            "options": [
              "Blue",
              "Red",
              "Yellow",
              "Green"
            ],
            "correct_answer": 1,
            "explanation_vi": "Đoạn văn nhắc đến 'red envelopes', tức là phong bao màu đỏ."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the message: 'Hi Anna, we are meeting at the local community center at 5 PM for the cultural festival.' Where are they meeting?",
            "options": [
              "At Anna's house",
              "At a school",
              "At the local community center",
              "At a restaurant"
            ],
            "correct_answer": 2,
            "explanation_vi": "Tin nhắn nêu rõ địa điểm gặp mặt là 'at the local community center'."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Read the sentence: 'Traditional clothes in my country are very colorful and comfortable.' What does the word 'traditional' mean here?",
            "options": [
              "New and modern",
              "Old and part of a country's culture",
              "Expensive and rare",
              "Dirty and old"
            ],
            "correct_answer": 1,
            "explanation_vi": "Từ 'traditional' (truyền thống) chỉ những trang phục lâu đời gắn liền với văn hóa của một quốc gia."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the notice: 'The museum is open from Tuesday to Sunday, 9 AM to 5 PM. It is closed on Mondays.' When is the museum closed?",
            "options": [
              "Sunday",
              "Tuesday",
              "Monday",
              "Saturday"
            ],
            "correct_answer": 2,
            "explanation_vi": "Thông báo ghi rõ bảo tàng đóng cửa vào các ngày thứ Hai ('It is closed on Mondays')."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "You hear a woman say: 'Happy New Year! Wishing you good health and success.' What event are they celebrating?",
            "options": [
              "A birthday",
              "A wedding",
              "The New Year",
              "A graduation"
            ],
            "correct_answer": 2,
            "explanation_vi": "Người nói chúc mừng năm mới ('Happy New Year'), đây là dịp kỷ niệm năm mới."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "You hear a man asking: 'Excuse me, where can I buy tickets for the traditional music show?' What does he want to do?",
            "options": [
              "Sing a song",
              "Buy tickets for a show",
              "Find a traditional restaurant",
              "Meet the musicians"
            ],
            "correct_answer": 1,
            "explanation_vi": "Người đàn ông hỏi mua vé xem buổi biểu diễn âm nhạc truyền thống ('buy tickets for the traditional music show')."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "You hear a speaker say: 'In my culture, we always shake hands when we meet someone for the first time.' What action do they do?",
            "options": [
              "Bow",
              "Wave",
              "Shake hands",
              "Hug"
            ],
            "correct_answer": 2,
            "explanation_vi": "Người nói nhắc đến hành động bắt tay ('shake hands') khi gặp ai đó lần đầu."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "You hear a girl say: 'My grandmother taught me how to make spring rolls yesterday.' Who taught her?",
            "options": [
              "Her mother",
              "Her teacher",
              "Her friend",
              "Her grandmother"
            ],
            "correct_answer": 3,
            "explanation_vi": "Cô gái nói rằng bà của cô ấy ('my grandmother') đã dạy cô ấy cách làm nem."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "You hear a boy say: 'The festival starts at 8 o'clock tonight in the town square.' What time does the festival begin?",
            "options": [
              "7:00 AM",
              "8:00 AM",
              "8:00 PM",
              "9:00 PM"
            ],
            "correct_answer": 2,
            "explanation_vi": "Lễ hội bắt đầu vào lúc 8 giờ tối ('8 o'clock tonight')."
          }
        ],
        "speaking_prompt": "Talk about your favorite tradition in your country. You should say: what the tradition is, when it happens, and why you like it.",
        "speaking_sample_idea": "Talk about the Tet holiday (Lunar New Year) in Vietnam, mentioning that it happens in January or February, and explain that you like it because you can meet all your family members and eat special food like Banh Chung.",
        "writing_prompt": "Write a short paragraph (30-40 words) about a popular traditional food in your country.",
        "writing_model_sentence": "Pho is a very famous traditional food in Vietnam, and people usually eat it for breakfast with beef or chicken."
      }
    },
    {
      "id": "u8",
      "title": "Unit 8: Media and Entertainment",
      "description": "Covers television, news, social media, and reported speech for statements.",
      "vocabulary": [
        {
          "word": "broadcast",
          "ipa": "/ˈbrɔːdkɑːst/",
          "part_of_speech": "verb",
          "meaning_vi": "phát sóng",
          "example_en": "The concert will be broadcast live tonight.",
          "example_vi": "Buổi hòa nhạc sẽ được phát sóng trực tiếp tối nay."
        },
        {
          "word": "audience",
          "ipa": "/ˈɔːdiəns/",
          "part_of_speech": "noun",
          "meaning_vi": "khán giả",
          "example_en": "The show attracted a large television audience.",
          "example_vi": "Chương trình đã thu hút một lượng lớn khán giả truyền hình."
        },
        {
          "word": "advertisement",
          "ipa": "/ədˈvɜːtɪsmənt/",
          "part_of_speech": "noun",
          "meaning_vi": "quảng cáo",
          "example_en": "I saw an advertisement for a new phone.",
          "example_vi": "Tôi đã thấy một quảng cáo cho một chiếc điện thoại mới."
        },
        {
          "word": "channel",
          "ipa": "/ˈtʃænl/",
          "part_of_speech": "noun",
          "meaning_vi": "kênh truyền hình",
          "example_en": "Please change the channel; I don't like this show.",
          "example_vi": "Làm ơn chuyển kênh; tôi không thích chương trình này."
        },
        {
          "word": "program",
          "ipa": "/ˈprəʊɡræm/",
          "part_of_speech": "noun",
          "meaning_vi": "chương trình",
          "example_en": "What is your favorite TV program?",
          "example_vi": "Chương trình truyền hình yêu thích của bạn là gì?"
        },
        {
          "word": "influence",
          "ipa": "/ˈɪnfluəns/",
          "part_of_speech": "verb",
          "meaning_vi": "ảnh hưởng, tác động",
          "example_en": "Media can influence public opinion.",
          "example_vi": "Truyền thông có thể ảnh hưởng đến dư luận."
        },
        {
          "word": "popular",
          "ipa": "/ˈpɒpjələ(r)/",
          "part_of_speech": "adjective",
          "meaning_vi": "phổ biến, được yêu thích",
          "example_en": "This movie is very popular among teenagers.",
          "example_vi": "Bộ phim này rất được giới trẻ yêu thích."
        },
        {
          "word": "journalist",
          "ipa": "/ˈdʒɜːnəlɪst/",
          "part_of_speech": "noun",
          "meaning_vi": "nhà báo",
          "example_en": "The journalist interviewed the famous actor.",
          "example_vi": "Nhà báo đã phỏng vấn nam diễn viên nổi tiếng."
        },
        {
          "word": "series",
          "ipa": "/ˈsɪəriːz/",
          "part_of_speech": "noun",
          "meaning_vi": "phim bộ, chuỗi chương trình",
          "example_en": "I am watching a new drama series on Netflix.",
          "example_vi": "Tôi đang xem một bộ phim truyền hình mới trên Netflix."
        },
        {
          "word": "review",
          "ipa": "/rɪˈvjuː/",
          "part_of_speech": "noun",
          "meaning_vi": "sự đánh giá, nhận xét",
          "example_en": "The film received positive reviews from critics.",
          "example_vi": "Bộ phim đã nhận được những đánh giá tích cực từ các nhà phê bình."
        }
      ],
      "grammar": {
        "point": "Reported Speech - Statements",
        "explanation_vi": "Dùng để thuật lại lời nói của người khác. Cần lùi thì của động từ, thay đổi đại từ và trạng từ chỉ thời gian/nơi chốn cho phù hợp.",
        "structure": "S + said (that) + S + V (lùi thì) | S + told + O (that) + S + V (lùi thì)",
        "example_en": "He said that he watched that television program every week.",
        "example_vi": "Anh ấy nói rằng anh ấy xem chương trình truyền hình đó mỗi tuần.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "Nam said, \"I love watching films.\" -> Nam said that he ___ watching films.",
            "options": [
              "love",
              "loved",
              "loving",
              "is loving"
            ],
            "correct_answer": 1,
            "explanation_vi": "Trong câu tường thuật (reported speech), khi động từ ở mệnh đề chính ở quá khứ (\"said\"), chúng ta phải lùi thì của động từ trong ngoặc. 'Present simple' (love) chuyển thành 'Past simple' (loved)."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "Lan said, \"I am reading a good book.\" -> Lan said that she ___ reading a good book.",
            "options": [
              "is",
              "was",
              "were",
              "has been"
            ],
            "correct_answer": 1,
            "explanation_vi": "Khi chuyển câu trực tiếp sang gián tiếp, thì Hiện tại tiếp diễn (am reading) được lùi thành Quá khứ tiếp diễn (was/were reading). Chủ ngữ 'she' số ít đi với 'was'."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "Tom said, \"I will watch the news tonight.\" -> Tom said that he ___ watch the news that night.",
            "options": [
              "will",
              "can",
              "would",
              "shall"
            ],
            "correct_answer": 2,
            "explanation_vi": "Trong câu tường thuật, động từ khuyết thiếu 'will' được đổi thành 'would' khi lùi thì."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "Hoa said, \"We watched a great show yesterday.\" -> Hoa said that they ___ a great show the day before.",
            "options": [
              "watch",
              "watched",
              "had watched",
              "have watched"
            ],
            "correct_answer": 2,
            "explanation_vi": "Thì Quá khứ đơn (watched) trong câu tường thuật thường được lùi thành Quá khứ hoàn thành (had watched)."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "Ba said, \"I don't like listening to the radio.\" -> Ba said that he ___ like listening to the radio.",
            "options": [
              "don't",
              "doesn't",
              "didn't",
              "haven't"
            ],
            "correct_answer": 2,
            "explanation_vi": "Thì Hiện tại đơn phủ định ('don't' like) được lùi thì thành Quá khứ đơn phủ định ('didn't' like) trong câu tường thuật."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "She said that she ___ the new movie the day before.",
          "options": [
            "had seen",
            "saw",
            "has seen",
            "sees"
          ],
          "correct_answer": 0,
          "explanation_vi": "Thì quá khứ đơn trong câu trực tiếp lùi thành quá khứ hoàn thành 'had seen' trong câu gián tiếp."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "The journalist told me that he ___ writing the article.",
          "options": [
            "was",
            "is",
            "has been",
            "will be"
          ],
          "correct_answer": 0,
          "explanation_vi": "Thì hiện tại tiếp diễn lùi thành quá khứ tiếp diễn 'was' (ở đây là rút gọn hoặc lùi thì của động từ tobe)."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "They said they ___ go to the cinema tonight.",
          "options": [
            "would",
            "will",
            "can",
            "go"
          ],
          "correct_answer": 0,
          "explanation_vi": "'will' lùi thì thành 'would' trong câu gián tiếp."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "He said, 'I live here.' -> He said that he lived ___ .",
          "options": [
            "there",
            "here",
            "then",
            "now"
          ],
          "correct_answer": 0,
          "explanation_vi": "Trạng từ chỉ nơi chốn 'here' đổi thành 'there' trong câu gián tiếp."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "The football match was ___ live to millions of viewers.",
          "options": [
            "broadcast",
            "reviewed",
            "influenced",
            "programmed"
          ],
          "correct_answer": 0,
          "explanation_vi": "'broadcast live' nghĩa là được phát sóng trực tiếp."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "The television show attracted a large ___ last night.",
          "options": [
            "audience",
            "journalist",
            "channel",
            "advertisement"
          ],
          "correct_answer": 0,
          "explanation_vi": "'audience' nghĩa là khán giả xem truyền hình."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "Social media has a huge ___ on young people today.",
          "options": [
            "influence",
            "channel",
            "series",
            "review"
          ],
          "correct_answer": 0,
          "explanation_vi": "'have an influence on' nghĩa là có ảnh hưởng lớn đến ai."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "I read a positive ___ of the book before buying it.",
          "options": [
            "review",
            "advertisement",
            "program",
            "broadcast"
          ],
          "correct_answer": 0,
          "explanation_vi": "'review' nghĩa là bài đánh giá, nhận xét."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "The Power of Modern Media",
        "content": "Modern media, including television, social networks, and online news, has a powerful influence on public opinion. Journalists work hard to report news and produce interesting programs for the audience. Television channels rely heavily on advertisements to fund their broadcasts. Meanwhile, popular drama series and movie reviews on social media platforms can easily shape the entertainment choices of millions of people.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Read the sign: 'CINEMA CLOSED TODAY FOR CLEANING'. What does it mean?",
            "options": [
              "You can watch a movie today.",
              "The cinema is not open today.",
              "Cleaning is free today.",
              "The cinema opens early today."
            ],
            "correct_answer": 1,
            "explanation_vi": "Biển báo thông báo rạp chiếu phim đóng cửa ngày hôm nay để dọn dẹp, vì vậy đáp án B là chính xác."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the text: 'My favourite TV show is at 8:00 PM every Tuesday.' When is the TV show on?",
            "options": [
              "Every Monday at 8:00 PM",
              "Every Tuesday at 8:00 PM",
              "Every Tuesday at 7:00 PM",
              "Every Wednesday at 8:00 PM"
            ],
            "correct_answer": 1,
            "explanation_vi": "Đoạn văn nêu rõ chương trình phát sóng lúc 8:00 tối mỗi thứ Ba ('every Tuesday')."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the message: 'Anna, don't forget to buy the tickets for the concert tomorrow!' What should Anna buy?",
            "options": [
              "A concert ticket",
              "A bus ticket",
              "A movie ticket",
              "A train ticket"
            ],
            "correct_answer": 0,
            "explanation_vi": "Tin nhắn nhắc Anna mua vé cho buổi hòa nhạc ('tickets for the concert'), nên đáp án là vé hòa nhạc."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Read the sentence: 'Tom likes reading funny books with lots of pictures.' What kind of books does Tom like?",
            "options": [
              "Textbooks",
              "Comic books",
              "Dictionaries",
              "Science books"
            ],
            "correct_answer": 1,
            "explanation_vi": "Sách hài hước có nhiều hình vẽ thường là truyện tranh (comic books)."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the notice: 'Children under 5 can enter the museum for free.' Who does not have to pay?",
            "options": [
              "Adults",
              "Teenagers",
              "Kids under 5 years old",
              "Everyone"
            ],
            "correct_answer": 2,
            "explanation_vi": "Thông báo ghi rõ trẻ em dưới 5 tuổi được vào miễn phí ('for free')."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to the dialogue. Speaker A: 'What is your hobby?' Speaker B: 'I love listening to music.' What does Speaker B enjoy doing?",
            "options": [
              "Watching TV",
              "Reading books",
              "Listening to music",
              "Playing sports"
            ],
            "correct_answer": 2,
            "explanation_vi": "Speaker B trả lời 'I love listening to music', nghĩa là thích nghe nhạc."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "Listen to the audio clip. 'Turn down the radio, please. It is too loud!' What does the speaker want?",
            "options": [
              "To make the music quieter",
              "To turn off the light",
              "To make the music louder",
              "To buy a new radio"
            ],
            "correct_answer": 0,
            "explanation_vi": "Cụm từ 'Turn down' có nghĩa là vặn nhỏ lại vì âm thanh quá lớn ('too loud')."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "Listen to the announcement. 'The movie will start in five minutes.' When does the movie begin?",
            "options": [
              "In 5 minutes",
              "In 15 minutes",
              "In 50 minutes",
              "Now"
            ],
            "correct_answer": 0,
            "explanation_vi": "Thông báo nói phim sẽ bắt đầu trong 5 phút nữa ('in five minutes')."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "Listen to the question: 'Which channel is the football match on?' What are they talking about?",
            "options": [
              "A radio show",
              "A television program",
              "A book title",
              "A newspaper article"
            ],
            "correct_answer": 1,
            "explanation_vi": "Từ 'channel' (kênh) chỉ các chương trình tivi hoặc truyền hình."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to the speaker: 'I usually go to the theatre on weekends to watch a play.' Where does the speaker go?",
            "options": [
              "To a cinema",
              "To a restaurant",
              "To a theatre",
              "To a supermarket"
            ],
            "correct_answer": 2,
            "explanation_vi": "Người nói nhắc đến việc đến nhà hát ('the theatre') để xem kịch."
          }
        ],
        "speaking_prompt": "What is your favorite TV show and why do you like it?",
        "speaking_sample_idea": "Talk about the name of the show, how often you watch it, and why it is interesting or funny.",
        "writing_prompt": "Write a short paragraph (30-40 words) about what you usually do in your free time for entertainment.",
        "writing_model_sentence": "In my free time, I usually listen to music and watch funny videos on my phone with my friends."
      }
    },
    {
      "id": "u9",
      "title": "Unit 9: Economy and Business",
      "description": "Introduces basic business terms, consumer habits, and the structure 'used to' for past habits.",
      "vocabulary": [
        {
          "word": "market",
          "ipa": "/ˈmɑːkɪt/",
          "part_of_speech": "noun",
          "meaning_vi": "thị trường, chợ",
          "example_en": "The company is expanding into the Asian market.",
          "example_vi": "Công ty đang mở rộng sang thị trường châu Á."
        },
        {
          "word": "product",
          "ipa": "/ˈprɒdʌkt/",
          "part_of_speech": "noun",
          "meaning_vi": "sản phẩm",
          "example_en": "They launched a new product last week.",
          "example_vi": "Họ đã ra mắt một sản phẩm mới vào tuần trước."
        },
        {
          "word": "customer",
          "ipa": "/ˈbʌstəmə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "khách hàng",
          "example_en": "The shop is always full of customers.",
          "example_vi": "Cửa hàng luôn luôn đông khách hàng."
        },
        {
          "word": "invest",
          "ipa": "/ɪnˈvest/",
          "part_of_speech": "verb",
          "meaning_vi": "đầu tư",
          "example_en": "He decided to invest money in real estate.",
          "example_vi": "Anh ấy đã quyết định đầu tư tiền vào bất động sản."
        },
        {
          "word": "profit",
          "ipa": "/ˈprɒfɪt/",
          "part_of_speech": "noun",
          "meaning_vi": "lợi nhuận",
          "example_en": "The company made a huge profit this year.",
          "example_vi": "Công ty đã đạt được lợi nhuận khổng lồ trong năm nay."
        },
        {
          "word": "industry",
          "ipa": "/ˈɪndəstri/",
          "part_of_speech": "noun",
          "meaning_vi": "ngành công nghiệp",
          "example_en": "The tourism industry is growing rapidly.",
          "example_vi": "Ngành công nghiệp du lịch đang phát triển nhanh chóng."
        },
        {
          "word": "consumer",
          "ipa": "/kənˈsjuːmə(r)/",
          "part_of_speech": "noun",
          "meaning_vi": "người tiêu dùng",
          "example_en": "Consumers are looking for cheaper goods.",
          "example_vi": "Người tiêu dùng đang tìm kiếm hàng hóa rẻ hơn."
        },
        {
          "word": "budget",
          "ipa": "/ˈbʌdʒɪt/",
          "part_of_speech": "noun",
          "meaning_vi": "ngân sách",
          "example_en": "We need to stay within our budget.",
          "example_vi": "Chúng ta cần phải chi tiêu trong phạm vi ngân sách của mình."
        },
        {
          "word": "trade",
          "ipa": "/treɪd/",
          "part_of_speech": "noun",
          "meaning_vi": "thương mại, sự giao thương",
          "example_en": "International trade benefits many countries.",
          "example_vi": "Thương mại quốc tế mang lại lợi ích cho nhiều quốc gia."
        },
        {
          "word": "company",
          "ipa": "/ˈkʌmpəni/",
          "part_of_speech": "noun",
          "meaning_vi": "công ty",
          "example_en": "She works for a multinational company.",
          "example_vi": "Cô ấy làm việc cho một công ty đa quốc gia."
        }
      ],
      "grammar": {
        "point": "Used to + Infinitive",
        "explanation_vi": "Dùng để diễn tả một thói quen hoặc một trạng thái đã từng tồn tại trong quá khứ nhưng hiện tại không còn nữa.",
        "structure": "S + used to + V (bare) | Negative: S + didn't use to + V (bare)",
        "example_en": "This company used to import products from Japan, but now they manufacture them locally.",
        "example_vi": "Công ty này đã từng nhập khẩu sản phẩm từ Nhật Bản, nhưng bây giờ họ sản xuất chúng tại địa phương.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "Before starting the online shop, she ___ sell handmade crafts at the local weekend market.",
            "options": [
              "used to",
              "is used to",
              "use to",
              "using to"
            ],
            "correct_answer": 0,
            "explanation_vi": "Cấu trúc 'used to + V-infinitive' dùng để chỉ một thói quen hoặc hành động thường xuyên trong quá khứ nay đã thay đổi. Trong kinh doanh, điều này diễn tả mô hình hoặc hoạt động trước đây."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "Did the company ___ make traditional products before shifting to digital technology?",
            "options": [
              "uses to",
              "used to",
              "use to",
              "using to"
            ],
            "correct_answer": 2,
            "explanation_vi": "Trong câu hỏi với trợ động từ 'Did', động từ chính ở dạng nguyên thể không 'd', vì vậy ta dùng 'use to'."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "Ten years ago, people didn't ___ pay for goods using smartphones so frequently.",
            "options": [
              "used to",
              "use to",
              "using to",
              "are used to"
            ],
            "correct_answer": 1,
            "explanation_vi": "Trong câu phủ định ở quá khứ, ta dùng 'didn't use to + V-infinitive'."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "Our manager ___ travel abroad very often to negotiate contracts, but now he stays in the office.",
            "options": [
              "use to",
              "is used to",
              "used to",
              "was used to"
            ],
            "correct_answer": 2,
            "explanation_vi": "Đây là khẳng định về thói quen trong quá khứ của quản lý liên quan đến công việc kinh doanh, sử dụng 'used to'."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "What kind of advertising methods ___ your business use to apply?",
            "options": [
              "did",
              "does",
              "is",
              "were"
            ],
            "correct_answer": 0,
            "explanation_vi": "Câu hỏi về quá khứ với cấu trúc 'Did + chủ ngữ + use to + V' để hỏi về thói quen kinh doanh trước kia."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "My father ___ work for a big international company, but now he is retired.",
          "options": [
            "used to",
            "is used to",
            "got used to",
            "use to"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng 'used to + V' để diễn tả một trạng thái hoặc thói quen trong quá khứ nay không còn nữa."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "Did you ___ to save money when you were a student?",
          "options": [
            "use",
            "used",
            "using",
            "uses"
          ],
          "correct_answer": 0,
          "explanation_vi": "Trong câu hỏi với 'Did', động từ 'used to' chuyển thành 'use to'."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "We didn't ___ to invest in high-risk stocks.",
          "options": [
            "use",
            "used",
            "using",
            "uses"
          ],
          "correct_answer": 0,
          "explanation_vi": "Trong câu phủ định với 'didn't', ta dùng 'use to'."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "There ___ be a small market here before they built the shopping mall.",
          "options": [
            "used to",
            "is used to",
            "use to",
            "was used to"
          ],
          "correct_answer": 0,
          "explanation_vi": "Dùng 'used to' để chỉ một trạng thái đã từng tồn tại trong quá khứ."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "The company is trying to attract more ___ for its new product.",
          "options": [
            "customers",
            "budgets",
            "profits",
            "industries"
          ],
          "correct_answer": 0,
          "explanation_vi": "'customers' nghĩa là khách hàng, phù hợp với mục tiêu thu hút của công ty."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "It is wise to ___ your money in real estate or stocks.",
          "options": [
            "invest",
            "trade",
            "profit",
            "budget"
          ],
          "correct_answer": 0,
          "explanation_vi": "'invest' nghĩa là đầu tư tiền vào đâu."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "The business made a huge ___ after launching the marketing campaign.",
          "options": [
            "profit",
            "consumer",
            "market",
            "trade"
          ],
          "correct_answer": 0,
          "explanation_vi": "'make a profit' nghĩa là tạo ra lợi nhuận."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "We need to plan our ___ carefully to avoid overspending.",
          "options": [
            "budget",
            "product",
            "company",
            "industry"
          ],
          "correct_answer": 0,
          "explanation_vi": "'budget' nghĩa là ngân sách chi tiêu."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "Understanding the Market Economy",
        "content": "In a market economy, companies produce various products to satisfy consumer needs. To grow, a company must invest in research and development, manage its budget wisely, and attract loyal customers. International trade allows businesses to expand beyond their local markets. When a business operates efficiently, it can increase its profits and contribute to the growth of the entire industry.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Read the sign: 'SALE: All shoes 50% off today!' What does this sign mean?",
            "options": [
              "Shoes are more expensive today.",
              "Shoes are half price today.",
              "Shoes are not for sale.",
              "You need to buy two pairs of shoes."
            ],
            "correct_answer": 1,
            "explanation_vi": "Cụm từ '50% off' có nghĩa là giảm giá một nửa, tức là 'half price' (giảm nửa giá)."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the text: 'John works in a bank. He helps customers save and borrow money.' What is John's job?",
            "options": [
              "A teacher",
              "A baker",
              "A banker",
              "A driver"
            ],
            "correct_answer": 2,
            "explanation_vi": "John làm việc ở ngân hàng và giúp khách hàng tiết kiệm hoặc vay tiền, vậy anh ấy là nhân viên ngân hàng (banker)."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the notice: 'Closed on Mondays for inventory.' When can you NOT visit this shop?",
            "options": [
              "Tuesday",
              "Monday",
              "Sunday",
              "Saturday"
            ],
            "correct_answer": 1,
            "explanation_vi": "Thông báo ghi rõ 'Closed on Mondays' (Đóng cửa vào các ngày Thứ Hai), vậy bạn không thể ghé thăm vào Thứ Hai."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Read the sentence: 'Anna wants to buy a new dress, but she does not have enough money.' What does Anna need to do?",
            "options": [
              "Save more money",
              "Sell her dress",
              "Give it away",
              "Stop working"
            ],
            "correct_answer": 0,
            "explanation_vi": "Vì Anna không có đủ tiền để mua váy, cô ấy cần phải tiết kiệm thêm tiền (save more money)."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the price tag: 'Price: $15.00. Cash only.' How can you pay for this item?",
            "options": [
              "With credit card",
              "With paper money and coins",
              "With a smartphone app",
              "You don't need to pay"
            ],
            "correct_answer": 1,
            "explanation_vi": "'Cash only' có nghĩa là chỉ nhận tiền mặt (tiền giấy và tiền xu), không nhận thẻ."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "Listen to a dialogue in a shop: 'How much is this shirt?' - 'It is twenty dollars.' How much does the shirt cost?",
            "options": [
              "10 dollars",
              "12 dollars",
              "20 dollars",
              "22 dollars"
            ],
            "correct_answer": 2,
            "explanation_vi": "Người bán hàng trả lời 'It is twenty dollars', tức là chiếc áo có giá 20 đô la."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "Listen to a customer at a cafe: 'Can I pay by credit card?' - 'Sorry, we only take cash.' What does the shop assistant mean?",
            "options": [
              "You can use your credit card.",
              "You must pay with cash.",
              "The food is free.",
              "Come back tomorrow."
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu 'we only take cash' có nghĩa là cửa hàng chỉ nhận tiền mặt, khách hàng phải trả bằng tiền mặt."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "Listen to an announcement in a supermarket: 'The bakery section is on the second floor.' Where should you go to buy bread?",
            "options": [
              "To the first floor",
              "To the second floor",
              "Outside the supermarket",
              "To the basement"
            ],
            "correct_answer": 1,
            "explanation_vi": "Khu vực bánh mì (bakery section) ở tầng hai (second floor) theo thông báo."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "Listen to a phone call: 'Hello, I would like to order three pizzas, please.' Who is making the phone call?",
            "options": [
              "A customer",
              "A doctor",
              "A teacher",
              "A mechanic"
            ],
            "correct_answer": 0,
            "explanation_vi": "Người gọi điện thoại để đặt pizza là một khách hàng (customer)."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "Listen to a short dialogue: 'Do you work here?' - 'Yes, I can help you find what you are looking for.' Who is the speaker?",
            "options": [
              "A tourist",
              "A shop assistant",
              "A bus driver",
              "A student"
            ],
            "correct_answer": 1,
            "explanation_vi": "Người nói xác nhận mình làm việc ở đây và có thể giúp khách tìm đồ, vậy đó là nhân viên bán hàng (shop assistant)."
          }
        ],
        "speaking_prompt": "Talk about your favorite shop. You should say: where it is, what it sells, and why you like it.",
        "speaking_sample_idea": "My favorite shop is a small bookstore near my house. It sells novels and magazines. I like it because the staff are very friendly and the books are cheap.",
        "writing_prompt": "Write a short email (30-40 words) to a friend to invite them to go shopping with you this weekend.",
        "writing_model_sentence": "Hi Linh, let's go shopping for new clothes at the weekend!"
      }
    },
    {
      "id": "u10",
      "title": "Unit 10: Science and Nature",
      "description": "Explores scientific research, natural phenomena, and the usage of gerunds and infinitives.",
      "vocabulary": [
        {
          "word": "discover",
          "ipa": "/dɪˈskʌvə(r)/",
          "part_of_speech": "verb",
          "meaning_vi": "phát hiện, khám phá ra",
          "example_en": "Scientists hope to discover a cure for the disease.",
          "example_vi": "Các nhà khoa học hy vọng tìm ra phương pháp chữa trị căn bệnh này."
        },
        {
          "word": "experiment",
          "ipa": "/ɪkˈsperɪmənt/",
          "part_of_speech": "noun",
          "meaning_vi": "thí nghiệm",
          "example_en": "They conducted an experiment in the chemistry lab.",
          "example_vi": "Họ đã tiến hành một thí nghiệm trong phòng thí nghiệm hóa học."
        },
        {
          "word": "theory",
          "ipa": "/ˈθɪəri/",
          "part_of_speech": "noun",
          "meaning_vi": "lý thuyết, học thuyết",
          "example_en": "Darwin developed the theory of evolution.",
          "example_vi": "Darwin đã phát triển thuyết tiến hóa."
        },
        {
          "word": "laboratory",
          "ipa": "/ləˈbɒrətri/",
          "part_of_speech": "noun",
          "meaning_vi": "phòng thí nghiệm",
          "example_en": "The samples were sent to the laboratory for testing.",
          "example_vi": "Các mẫu thử đã được gửi đến phòng thí nghiệm để kiểm tra."
        },
        {
          "word": "research",
          "ipa": "/rɪˈsɜːtʃ/",
          "part_of_speech": "noun",
          "meaning_vi": "sự nghiên cứu",
          "example_en": "She is doing research on renewable energy.",
          "example_vi": "Cô ấy đang thực hiện nghiên cứu về năng lượng tái tạo."
        },
        {
          "word": "natural",
          "ipa": "/ˈnætʃrəl/",
          "part_of_speech": "adjective",
          "meaning_vi": "tự nhiên, thuộc về tự nhiên",
          "example_en": "Earthquakes are natural disasters.",
          "example_vi": "Động đất là những thảm họa tự nhiên."
        },
        {
          "word": "phenomenon",
          "ipa": "/fəˈnɒmɪnən/",
          "part_of_speech": "noun",
          "meaning_vi": "hiện tượng",
          "example_en": "The Northern Lights are a beautiful natural phenomenon.",
          "example_vi": "Cực quang là một hiện tượng tự nhiên tuyệt đẹp."
        },
        {
          "word": "element",
          "ipa": "/ˈelɪmənt/",
          "part_of_speech": "noun",
          "meaning_vi": "nguyên tố, yếu tố",
          "example_en": "Water is made of two chemical elements.",
          "example_vi": "Nước được tạo thành từ hai nguyên tố hóa học."
        },
        {
          "word": "analyze",
          "ipa": "/ˈænəlaɪz/",
          "part_of_speech": "verb",
          "meaning_vi": "phân tích",
          "example_en": "We need to analyze the results of the experiment.",
          "example_vi": "Chúng ta cần phân tích kết quả của thí nghiệm."
        },
        {
          "word": "evidence",
          "ipa": "/ˈevɪdəns/",
          "part_of_speech": "noun",
          "meaning_vi": "bằng chứng",
          "example_en": "There is no scientific evidence to support this claim.",
          "example_vi": "Không có bằng chứng khoa học nào để hỗ trợ cho khẳng định này."
        }
      ],
      "grammar": {
        "point": "Gerunds and Infinitives",
        "explanation_vi": "Một số động từ được theo sau bởi danh động từ (V-ing), trong khi một số khác được theo sau bởi động từ nguyên mẫu có 'to' (to-V).",
        "structure": "V + V-ing (e.g., avoid, enjoy, practice) | V + to-V (e.g., decide, hope, want)",
        "example_en": "Scientists decided to conduct an experiment and avoided making errors during the process.",
        "example_vi": "Các nhà khoa học đã quyết định tiến hành một thí nghiệm và tránh mắc lỗi trong quá trình này.",
        "quiz": [
          {
            "id": 1,
            "type": "grammar",
            "question": "Scientists enjoy ... new plants in the rainforest.",
            "options": [
              "A) discover",
              "B) discovering",
              "C) to discover",
              "D) discovered"
            ],
            "correct_answer": 1,
            "explanation_vi": "Sau động từ 'enjoy' (thích), chúng ta dùng động từ thêm đuôi -ing (gerund)."
          },
          {
            "id": 2,
            "type": "grammar",
            "question": "It is important ... water to protect our nature.",
            "options": [
              "A) save",
              "B) saving",
              "C) to save",
              "D) saved"
            ],
            "correct_answer": 2,
            "explanation_vi": "Trong cấu trúc 'It is + tính từ + to V', chúng ta sử dụng động từ nguyên mẫu có 'to' (infinitive with 'to')."
          },
          {
            "id": 3,
            "type": "grammar",
            "question": "Do you want ... more about animals and science?",
            "options": [
              "A) learning",
              "B) learn",
              "C) learned",
              "D) to learn"
            ],
            "correct_answer": 3,
            "explanation_vi": "Sau động từ 'want' (muốn), chúng ta dùng động từ nguyên mẫu có 'to' (to V)."
          },
          {
            "id": 4,
            "type": "grammar",
            "question": "The students stopped ... to the teacher about the weather.",
            "options": [
              "A) talk",
              "B) talking",
              "C) to talk",
              "D) talked"
            ],
            "correct_answer": 1,
            "explanation_vi": "Cấu trúc 'stop + V-ing' có nghĩa là ngừng hẳn việc gì đó (ngừng nói chuyện)."
          },
          {
            "id": 5,
            "type": "grammar",
            "question": "We plan ... the national park this weekend.",
            "options": [
              "A) visiting",
              "B) to visit",
              "C) visit",
              "D) visited"
            ],
            "correct_answer": 1,
            "explanation_vi": "Sau động từ 'plan' (lên kế hoạch), chúng ta sử dụng động từ nguyên mẫu có 'to' (to V)."
          }
        ]
      },
      "quiz": [
        {
          "id": 1,
          "type": "grammar",
          "question": "They decided ___ the laboratory after completing the research.",
          "options": [
            "to clean",
            "cleaning",
            "clean",
            "cleaned"
          ],
          "correct_answer": 0,
          "explanation_vi": "Động từ 'decide' được theo sau bởi động từ nguyên mẫu có 'to' (to-V)."
        },
        {
          "id": 2,
          "type": "grammar",
          "question": "The researchers enjoy ___ natural phenomena in the wild.",
          "options": [
            "observing",
            "to observe",
            "observe",
            "observed"
          ],
          "correct_answer": 0,
          "explanation_vi": "Động từ 'enjoy' được theo sau bởi danh động từ (V-ing)."
        },
        {
          "id": 3,
          "type": "grammar",
          "question": "She hopes ___ a scholarship to study chemistry.",
          "options": [
            "to win",
            "winning",
            "win",
            "won"
          ],
          "correct_answer": 0,
          "explanation_vi": "Động từ 'hope' được theo sau bởi động từ nguyên mẫu có 'to' (to-V)."
        },
        {
          "id": 4,
          "type": "grammar",
          "question": "We should avoid ___ conclusions without enough evidence.",
          "options": [
            "drawing",
            "to draw",
            "draw",
            "drew"
          ],
          "correct_answer": 0,
          "explanation_vi": "Động từ 'avoid' được theo sau bởi danh động từ (V-ing)."
        },
        {
          "id": 5,
          "type": "vocabulary",
          "question": "Scientists conduct ___ to test their theories.",
          "options": [
            "experiments",
            "elements",
            "phenomena",
            "evidences"
          ],
          "correct_answer": 0,
          "explanation_vi": "'conduct experiments' nghĩa là tiến hành các thí nghiệm."
        },
        {
          "id": 6,
          "type": "vocabulary",
          "question": "The team is doing ___ on climate change.",
          "options": [
            "research",
            "laboratory",
            "theory",
            "discover"
          ],
          "correct_answer": 0,
          "explanation_vi": "'do research on' nghĩa là thực hiện nghiên cứu về cái gì."
        },
        {
          "id": 7,
          "type": "vocabulary",
          "question": "Water is made of two ___: hydrogen and oxygen.",
          "options": [
            "elements",
            "experiments",
            "theories",
            "laboratories"
          ],
          "correct_answer": 0,
          "explanation_vi": "'elements' nghĩa là các nguyên tố hóa học."
        },
        {
          "id": 8,
          "type": "vocabulary",
          "question": "There is no scientific ___ to support his claim.",
          "options": [
            "evidence",
            "phenomenon",
            "analyze",
            "natural"
          ],
          "correct_answer": 0,
          "explanation_vi": "'scientific evidence' nghĩa là bằng chứng khoa học."
        }
      ],
      "skills_practice": {
        "type": "reading",
        "title": "The Scientific Method",
        "content": "Science is the systematic study of the natural world through observation and experiment. Scientists work in laboratories to analyze data and find evidence that supports or disproves a theory. When they discover a new phenomenon, they conduct extensive research to understand its elements. This rigorous process ensures that scientific knowledge is reliable and based on facts rather than assumptions.",
        "questions": [
          {
            "id": 1,
            "type": "reading",
            "question": "Read the sentence: 'Plants need water and sunlight to grow.' What do plants need?",
            "options": [
              "Water and sunlight",
              "Food and milk",
              "Wind and ice",
              "Sand and rocks"
            ],
            "correct_answer": 0,
            "explanation_vi": "Đọc câu 'Plants need water and sunlight to grow' (Thực vật cần nước và ánh sáng mặt trời để phát triển), ta thấy đáp án đúng là nước và ánh sáng mặt trời."
          },
          {
            "id": 2,
            "type": "reading",
            "question": "Read the sign: 'Save water, save life.' What does this sign mean?",
            "options": [
              "We should waste water.",
              "Water is not important.",
              "We should not waste water.",
              "Water is dangerous."
            ],
            "correct_answer": 2,
            "explanation_vi": "Biển báo 'Save water, save life' (Tiết kiệm nước, tiết kiệm sự sống) nhắc nhở chúng ta không nên lãng phí nước."
          },
          {
            "id": 3,
            "type": "reading",
            "question": "Read the text: 'The sun is very hot and big. It gives us light during the day.' What does the sun give us?",
            "options": [
              "Rain",
              "Light",
              "Snow",
              "Wind"
            ],
            "correct_answer": 1,
            "explanation_vi": "Đoạn văn có câu 'It gives us light during the day' (Nó mang lại cho chúng ta ánh sáng vào ban ngày)."
          },
          {
            "id": 4,
            "type": "reading",
            "question": "Read the sentence: 'Pandas eat bamboo and live in the forest.' Where do pandas live?",
            "options": [
              "In the sea",
              "In the forest",
              "In the desert",
              "In the sky"
            ],
            "correct_answer": 1,
            "explanation_vi": "Câu văn 'and live in the forest' cho biết gấu trúc sống trong rừng."
          },
          {
            "id": 5,
            "type": "reading",
            "question": "Read the notice: 'Turn off the lights when you leave.' When should you turn off the lights?",
            "options": [
              "When you enter the room",
              "When you go to sleep",
              "When you leave the room",
              "When you turn on the TV"
            ],
            "correct_answer": 2,
            "explanation_vi": "Thông báo yêu cầu 'Turn off the lights when you leave' (Tắt đèn khi bạn rời đi)."
          },
          {
            "id": 6,
            "type": "listening",
            "question": "You hear a weather forecast: 'It is a rainy day today. Take your umbrella.' What should you take?",
            "options": [
              "A hat",
              "An umbrella",
              "A book",
              "A jacket"
            ],
            "correct_answer": 1,
            "explanation_vi": "Nghe thấy 'Take your umbrella' (Mang theo ô/dù của bạn) vì trời đang mưa."
          },
          {
            "id": 7,
            "type": "listening",
            "question": "You hear a teacher say: 'Water freezes at zero degrees Celsius.' What happens to water at 0°C?",
            "options": [
              "It turns into ice.",
              "It becomes hot steam.",
              "It boils.",
              "It disappears."
            ],
            "correct_answer": 0,
            "explanation_vi": "Nước đóng băng ở 0 độ C ('Water freezes'), nghĩa là nó biến thành đá ('turns into ice')."
          },
          {
            "id": 8,
            "type": "listening",
            "question": "You hear someone talking about an animal: 'It is very tall, has a long neck, and eats leaves.' What animal is it?",
            "options": [
              "An elephant",
              "A giraffe",
              "A lion",
              "A monkey"
            ],
            "correct_answer": 1,
            "explanation_vi": "Các đặc điểm 'tall' (cao), 'long neck' (cổ dài) và 'eats leaves' (ăn lá cây) chỉ con hươu cao cổ (giraffe)."
          },
          {
            "id": 9,
            "type": "listening",
            "question": "You hear a speaker say: 'The Earth goes around the Sun.' What does the Earth do?",
            "options": [
              "It stays still.",
              "It goes around the Moon.",
              "It goes around the Sun.",
              "It falls down."
            ],
            "correct_answer": 2,
            "explanation_vi": "Câu nói 'The Earth goes around the Sun' (Trái Đất quay xung quanh Mặt Trời) là kiến thức khoa học cơ bản."
          },
          {
            "id": 10,
            "type": "listening",
            "question": "You hear a warning: 'Be careful! The science lab has dangerous chemicals.' Where are the dangerous chemicals?",
            "options": [
              "In the science lab",
              "In the computer room",
              "In the playground",
              "In the library"
            ],
            "correct_answer": 0,
            "explanation_vi": "Nghe thấy 'The science lab has dangerous chemicals' (Phòng thí nghiệm khoa học có các hóa chất nguy hiểm)."
          }
        ],
        "speaking_prompt": "Talk about your favorite animal. You should say: what animal it is, where it lives, and why you like it.",
        "speaking_sample_idea": "Talk about the panda. Mention that it lives in the bamboo forests of China and that you like it because it is cute and black and white.",
        "writing_prompt": "Write a short paragraph (30-40 words) about the weather in your favorite season.",
        "writing_model_sentence": "My favorite season is spring because the weather is warm and flowers grow everywhere."
      }
    }
  ]
};
