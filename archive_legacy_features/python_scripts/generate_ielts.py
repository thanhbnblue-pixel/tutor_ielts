import os
import json
import time
from google import genai
from google.genai import types
from google.genai import errors

api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    with open(r"D:\01_Workspaces\BT2\ielts_app\.env", "r", encoding="utf-8") as f:
        for line in f:
            if line.startswith("GEMINI_API_KEY="):
                api_key = line.strip().split("=", 1)[1]
                break

client = genai.Client(api_key=api_key)

schema = types.Schema(
    type=types.Type.ARRAY,
    description="Array of exactly 10 IELTS units.",
    items=types.Schema(
        type=types.Type.OBJECT,
        properties={
            "id": types.Schema(type=types.Type.STRING),
            "title": types.Schema(type=types.Type.STRING),
            "description": types.Schema(type=types.Type.STRING),
            "vocabulary": types.Schema(
                type=types.Type.ARRAY,
                items=types.Schema(
                    type=types.Type.OBJECT,
                    properties={
                        "word": types.Schema(type=types.Type.STRING),
                        "ipa": types.Schema(type=types.Type.STRING),
                        "part_of_speech": types.Schema(type=types.Type.STRING),
                        "meaning_vi": types.Schema(type=types.Type.STRING),
                        "example_en": types.Schema(type=types.Type.STRING),
                        "example_vi": types.Schema(type=types.Type.STRING),
                    },
                    required=["word", "ipa", "part_of_speech", "meaning_vi", "example_en", "example_vi"]
                )
            ),
            "grammar": types.Schema(
                type=types.Type.OBJECT,
                properties={
                    "point": types.Schema(type=types.Type.STRING),
                    "explanation_vi": types.Schema(type=types.Type.STRING),
                    "structure": types.Schema(type=types.Type.STRING),
                    "example_en": types.Schema(type=types.Type.STRING),
                    "example_vi": types.Schema(type=types.Type.STRING),
                },
                required=["point", "explanation_vi", "structure", "example_en", "example_vi"]
            ),
            "quiz": types.Schema(
                type=types.Type.ARRAY,
                items=types.Schema(
                    type=types.Type.OBJECT,
                    properties={
                        "id": types.Schema(type=types.Type.INTEGER),
                        "type": types.Schema(type=types.Type.STRING),
                        "question": types.Schema(type=types.Type.STRING),
                        "options": types.Schema(
                            type=types.Type.ARRAY,
                            items=types.Schema(type=types.Type.STRING),
                        ),
                        "correct_answer": types.Schema(type=types.Type.INTEGER),
                        "explanation_vi": types.Schema(type=types.Type.STRING),
                    },
                    required=["id", "type", "question", "options", "correct_answer", "explanation_vi"]
                )
            ),
            "skills_practice": types.Schema(
                type=types.Type.OBJECT,
                properties={
                    "type": types.Schema(type=types.Type.STRING),
                    "title": types.Schema(type=types.Type.STRING),
                    "content": types.Schema(type=types.Type.STRING),
                    "questions": types.Schema(
                        type=types.Type.ARRAY,
                        items=types.Schema(
                            type=types.Type.OBJECT,
                            properties={
                                "id": types.Schema(type=types.Type.INTEGER),
                                "question": types.Schema(type=types.Type.STRING),
                                "options": types.Schema(
                                    type=types.Type.ARRAY,
                                    items=types.Schema(type=types.Type.STRING),
                                ),
                                "correct_answer": types.Schema(type=types.Type.INTEGER),
                                "explanation_vi": types.Schema(type=types.Type.STRING),
                            },
                            required=["id", "question", "options", "correct_answer", "explanation_vi"]
                        )
                    )
                },
                required=["type", "title", "content", "questions"]
            )
        },
        required=["id", "title", "description", "vocabulary", "grammar", "quiz", "skills_practice"]
    )
)

def generate_stage(stage_num, level_desc):
    print(f"Generating IELTS Stage {stage_num}...")
    prompt = f"""
    Generate exactly 10 units for IELTS Stage {stage_num}.
    Difficulty level: {level_desc}.
    MUST CONTAIN 10 real English vocabulary words per unit, 1 grammar point, 8 quiz questions, and 1 skills practice with 2 questions.
    For Stage 1 (A1-A2), keep vocabulary VERY BASIC (e.g. daily routine, family, basic food, numbers). Do NOT use words like 'sedentary' or 'procrastinate' which are C1. Use 'wake up', 'breakfast', 'parents'.
    """

    for attempt in range(5):
        try:
            response = client.models.generate_content(
                model='gemini-3.5-flash',
                contents=prompt,
                config=types.GenerateContentConfig(
                    response_mime_type="application/json",
                    response_schema=schema,
                    temperature=0.2,
                ),
            )
            return response.text
        except errors.APIError as e:
            if "503" in str(e) or "500" in str(e) or "429" in str(e):
                print(f"Server error {e}, retrying {attempt+1}/5 in 15 seconds...")
                time.sleep(15)
            else:
                raise
    raise Exception("Failed after 5 retries due to server errors.")

stage1_json = generate_stage(1, "A1-A2 Beginner")

# we need to preserve the checkpoint question that was just generated!
import re

filepath = r"D:\01_Workspaces\BT2\ielts_app\src\lib\curriculum\stage1.ts"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# find checkpoint block
checkpoint_match = re.search(r'(checkpoint:\s*\{.*?\}),?\s*\n\s*units:\s*\[', content, re.DOTALL)
if checkpoint_match:
    checkpoint_block = checkpoint_match.group(1)
else:
    checkpoint_block = """checkpoint: {
    id: 1,
    title: 'Checkpoint 1',
    description: 'Vượt qua bài test này để mở khóa chặng tiếp theo.',
    target_units: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    passing_score: 70,
    questions: []
  }"""

ts_content = f"""import {{ StageData }} from './types';

export const stage1: StageData = {{
  id: 'stage1',
  name: 'Chặng 1: Xây Nền (0 - 3.5)',
  description: 'Từ vựng cốt lõi & Ngữ pháp căn bản (Trình độ A1-A2)',
  {checkpoint_block},
  units: {stage1_json}
}};
"""

with open(filepath, "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Successfully generated and saved IELTS Stage 1.")
