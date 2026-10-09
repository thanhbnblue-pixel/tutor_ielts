import os
import json
import requests
from dotenv import load_dotenv

load_dotenv('.env')
API_KEY = os.getenv('GEMINI_API_KEY')
API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key={API_KEY}"

def generate_placement(track, desc):
    prompt = f"""
    Generate exactly 30 multiple choice questions for an English Placement Test (Kiểm tra trình độ đầu vào).
    The track is: {track} ({desc}).
    The questions must follow the typical structure of {track} exam.
    The difficulty should scale from A1 to C1 (e.g. 5 questions A1, 5 A2, 10 B1, 5 B2, 5 C1).
    Return ONLY a valid JSON array of objects.
    Each object must exactly match this schema:
    {{
      "id": 1,
      "level": "A1",
      "category": "Grammar" or "Vocabulary" or "Reading" or "Listening",
      "question": "The question text (use ___ for blanks)",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": 0-3 (index of correct option),
      "explanation": "Vietnamese explanation"
    }}
    Ensure exactly 30 questions.
    """
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "responseMimeType": "application/json",
            "temperature": 0.7
        }
    }
    print(f"Generating for {track}...")
    try:
        response = requests.post(API_URL, json=payload)
        data = response.json()
        if 'error' in data:
             print(f"API Error for {track}: {data['error']}")
             return []
        text = data['candidates'][0]['content']['parts'][0]['text']
        return json.loads(text)
    except Exception as e:
        print(f"Error for {track}: {e}")
        return []

tracks = {
    'IELTS': 'Academic English, focus on synonyms, complex grammar, academic reading',
    'TOEIC': 'Workplace English, business meetings, emails, office situations',
    'VSTEP': 'Vietnamese Standardized Test, general academic and daily life, diverse topics',
    'GENERAL': 'Giao tiếp hàng ngày, daily conversation, idioms, practical situations'
}

results = {}
for t, d in tracks.items():
    res = generate_placement(t, d)
    results[t] = res

# write to file
with open('src/lib/curriculum/placement.ts', 'w', encoding='utf-8') as f:
    f.write('export interface Question {\n  id: number;\n  level: string;\n  category: string;\n  question: string;\n  options: string[];\n  correctAnswer: number;\n  explanation: string;\n}\n\n')
    for t in tracks:
        f.write(f'export const PLACEMENT_{t}: Question[] = {json.dumps(results[t], ensure_ascii=False, indent=2)};\n\n')

print("Done generating placement.ts")
