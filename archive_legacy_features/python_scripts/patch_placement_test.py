import re

ts_path = r"D:\01_Workspaces\BT2\ielts_app\src\components\PlacementTest.tsx"

with open(ts_path, "r", encoding="utf-8") as f:
    content = f.read()

replacement = """const PLACEMENT_QUESTIONS: Question[] = [
  { id: 1, level: 'A1', category: 'Grammar', question: 'I ___ from Vietnam.', options: ['am', 'is', 'are', 'be'], correctAnswer: 0, explanation: 'Chủ ngữ "I" luôn đi với động từ to be "am".' },
  { id: 2, level: 'A1', category: 'Vocabulary', question: 'My sister has two ___.', options: ['childs', 'child', 'children', 'childrens'], correctAnswer: 2, explanation: '"children" là số nhiều bất quy tắc của "child".' },
  { id: 3, level: 'A1', category: 'Grammar', question: '___ do you live? - In Hanoi.', options: ['Who', 'Where', 'When', 'What'], correctAnswer: 1, explanation: '"Where" dùng để hỏi về địa điểm.' },
  { id: 4, level: 'A1', category: 'Vocabulary', question: 'I usually eat ___ in the morning.', options: ['breakfast', 'lunch', 'dinner', 'snack'], correctAnswer: 0, explanation: '"breakfast" là bữa sáng.' },
  { id: 5, level: 'A1', category: 'Grammar', question: 'She ___ like apples.', options: ['don\\'t', 'doesn\\'t', 'isn\\'t', 'aren\\'t'], correctAnswer: 1, explanation: 'Ngôi thứ 3 số ít "She" dùng trợ động từ "doesn\\'t" trong thì hiện tại đơn phủ định.' },
  { id: 6, level: 'A1', category: 'Reading', question: '"Please do not feed the animals." What does this mean?', options: ['You can give food to animals.', 'You must not give food to animals.', 'You should eat with animals.', 'The animals are eating.'], correctAnswer: 1, explanation: '"Do not feed" nghĩa là không được cho ăn.' },
  
  { id: 7, level: 'A2', category: 'Grammar', question: 'Yesterday, I ___ to the cinema.', options: ['go', 'goes', 'went', 'going'], correctAnswer: 2, explanation: 'Dấu hiệu "Yesterday" yêu cầu dùng thì quá khứ đơn (went).' },
  { id: 8, level: 'A2', category: 'Vocabulary', question: 'It is very ___ today. Let\\'s go to the beach!', options: ['cold', 'raining', 'sunny', 'snowing'], correctAnswer: 2, explanation: 'Thời tiết nắng (sunny) phù hợp để đi biển.' },
  { id: 9, level: 'A2', category: 'Grammar', question: 'This book is ___ than that one.', options: ['more interesting', 'most interesting', 'interesting', 'as interesting'], correctAnswer: 0, explanation: 'Cấu trúc so sánh hơn với tính từ dài: "more + adj + than".' },
  { id: 10, level: 'A2', category: 'Vocabulary', question: 'I need to buy a ___ for my trip.', options: ['ticket', 'money', 'time', 'travel'], correctAnswer: 0, explanation: '"ticket" (vé) là vật cần mua khi đi du lịch.' },
  { id: 11, level: 'A2', category: 'Grammar', question: 'We are planning ___ to Japan next year.', options: ['go', 'going', 'to go', 'went'], correctAnswer: 2, explanation: 'Động từ "plan" luôn đi với "to V".' },
  { id: 12, level: 'A2', category: 'Reading', question: '"Sale! 50% off all shoes today only!" Which is true?', options: ['Shoes are free.', 'Shoes are half price tomorrow.', 'Shoes are half price today.', 'Only some shoes are on sale.'], correctAnswer: 2, explanation: '"50% off" tương đương giảm nửa giá, "today only" nghĩa là chỉ áp dụng hôm nay.' },
  
  { id: 13, level: 'B1', category: 'Grammar', question: 'If it rains tomorrow, we ___ at home.', options: ['will stay', 'would stay', 'stay', 'stayed'], correctAnswer: 0, explanation: 'Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra ở hiện tại hoặc tương lai.' },
  { id: 14, level: 'B1', category: 'Vocabulary', question: 'The company has decided to ___ a new marketing campaign.', options: ['launch', 'invent', 'build', 'discover'], correctAnswer: 0, explanation: '"launch a campaign" là collocation phổ biến nghĩa là phát động một chiến dịch.' },
  { id: 15, level: 'B1', category: 'Grammar', question: 'I have been living here ___ 2015.', options: ['for', 'since', 'in', 'ago'], correctAnswer: 1, explanation: '"since + mốc thời gian" dùng trong thì hiện tại hoàn thành.' },
  { id: 16, level: 'B1', category: 'Vocabulary', question: 'He is very ___ about his new job.', options: ['excited', 'exciting', 'excite', 'excitement'], correctAnswer: 0, explanation: 'Tính từ kết thúc bằng "-ed" miêu tả cảm xúc của con người.' },
  { id: 17, level: 'B1', category: 'Grammar', question: 'That\\'s the man ___ stole my wallet!', options: ['which', 'whose', 'who', 'whom'], correctAnswer: 2, explanation: 'Đại từ quan hệ "who" thay thế cho người.' },
  { id: 18, level: 'B1', category: 'Reading', question: 'Although the weather was terrible, they enjoyed the hike. How was the hike?', options: ['Terrible', 'Enjoyable despite the weather', 'Cancelled due to weather', 'Boring'], correctAnswer: 1, explanation: '"Although" chỉ sự tương phản. Họ vẫn thích chuyến đi.' },
  
  { id: 19, level: 'B2', category: 'Grammar', question: 'By the time you arrive, I ___ the report.', options: ['will finish', 'would finish', 'will have finished', 'have finished'], correctAnswer: 2, explanation: 'Thì tương lai hoàn thành (will have V3) mô tả hành động sẽ hoàn tất trước một thời điểm ở tương lai.' },
  { id: 20, level: 'B2', category: 'Vocabulary', question: 'The government\\'s decision has ___ a lot of controversy.', options: ['sparked', 'made', 'done', 'given'], correctAnswer: 0, explanation: '"spark controversy" là collocation mức độ cao, nghĩa là châm ngòi tranh cãi.' },
  { id: 21, level: 'B2', category: 'Grammar', question: 'He denied ___ the window.', options: ['to break', 'break', 'breaking', 'broken'], correctAnswer: 2, explanation: 'Động từ "deny" (phủ nhận) luôn đi kèm với V-ing.' },
  { id: 22, level: 'B2', category: 'Vocabulary', question: 'We need to ___ the problem of climate change immediately.', options: ['tackle', 'fight', 'defeat', 'destroy'], correctAnswer: 0, explanation: '"tackle a problem" là cụm từ chuẩn để nói về việc giải quyết một vấn đề.' },
  { id: 23, level: 'B2', category: 'Grammar', question: 'Had I known about the traffic, I ___ earlier.', options: ['would leave', 'will leave', 'would have left', 'had left'], correctAnswer: 2, explanation: 'Đảo ngữ của câu điều kiện loại 3.' },
  { id: 24, level: 'B2', category: 'Reading', question: 'The CEO stepped down amidst allegations of fraud. What happened to the CEO?', options: ['He was promoted.', 'He resigned.', 'He went to jail.', 'He fired his employees.'], correctAnswer: 1, explanation: '"step down" = từ chức.' },
  
  { id: 25, level: 'C1', category: 'Grammar', question: 'Not until she left ___ how much she meant to me.', options: ['did I realize', 'I realized', 'I did realize', 'had I realized'], correctAnswer: 0, explanation: 'Cấu trúc đảo ngữ với "Not until".' },
  { id: 26, level: 'C1', category: 'Vocabulary', question: 'The new policy will have ___ consequences for the economy.', options: ['far-reaching', 'long-distance', 'deep-seated', 'wide-spread'], correctAnswer: 0, explanation: '"far-reaching consequences" là collocation (hậu quả sâu rộng).' },
  { id: 27, level: 'C1', category: 'Grammar', question: '___ the difficulty of the task, she managed to complete it flawlessly.', options: ['Although', 'Despite', 'However', 'Nevertheless'], correctAnswer: 1, explanation: '"Despite" đi với danh từ/cụm danh từ (the difficulty).' },
  { id: 28, level: 'C1', category: 'Vocabulary', question: 'His arguments were entirely ___; they lacked any logical foundation.', options: ['cogent', 'spurious', 'lucid', 'pragmatic'], correctAnswer: 1, explanation: '"spurious" mang nghĩa ngụy tạo, sai logic.' },
  { id: 29, level: 'C1', category: 'Grammar', question: 'It is imperative that the documents ___ signed by tomorrow.', options: ['are', 'will be', 'be', 'should'], correctAnswer: 2, explanation: 'Cấu trúc giả định (Subjunctive) bắt buộc dùng V nguyên thể không "to".' },
  { id: 30, level: 'C1', category: 'Reading', question: 'The author\\'s tone oscillates between profound cynicism and fleeting optimism. How does the author write?', options: ['Always negatively.', 'Always positively.', 'With fluctuating emotions.', 'With a neutral perspective.'], correctAnswer: 2, explanation: '"oscillate" nghĩa là dao động, thay đổi qua lại.' }
];"""

pattern = re.compile(r"const PLACEMENT_QUESTIONS:\s*Question\[\]\s*=\s*\[.*?\];", re.DOTALL)
new_content = pattern.sub(replacement, content)

if content == new_content:
    print("Failed to replace!")
else:
    with open(ts_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully replaced.")
