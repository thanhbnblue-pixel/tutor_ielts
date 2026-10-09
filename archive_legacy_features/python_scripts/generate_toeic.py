import os
import json
from google import genai
from google.genai import types

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
    description="Array of exactly 10 TOEIC units.",
    items=types.Schema(
        type=types.Type.OBJECT,
        properties={
            "id": types.Schema(type=types.Type.STRING, description="Unit ID, e.g. u1, u2"),
            "title": types.Schema(type=types.Type.STRING, description="Unit Title"),
            "description": types.Schema(type=types.Type.STRING, description="Unit Description"),
            "vocabulary": types.Schema(
                type=types.Type.ARRAY,
                description="List of 10 vocabulary words for this unit",
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
                description="List of 8 practice questions for this unit",
                items=types.Schema(
                    type=types.Type.OBJECT,
                    properties={
                        "id": types.Schema(type=types.Type.INTEGER),
                        "type": types.Schema(type=types.Type.STRING, description="grammar or vocabulary"),
                        "question": types.Schema(type=types.Type.STRING),
                        "options": types.Schema(
                            type=types.Type.ARRAY,
                            items=types.Schema(type=types.Type.STRING),
                            description="Exactly 4 options"
                        ),
                        "correct_answer": types.Schema(type=types.Type.INTEGER, description="Index of correct option 0-3"),
                        "explanation_vi": types.Schema(type=types.Type.STRING),
                    },
                    required=["id", "type", "question", "options", "correct_answer", "explanation_vi"]
                )
            ),
            "skills_practice": types.Schema(
                type=types.Type.OBJECT,
                properties={
                    "type": types.Schema(type=types.Type.STRING, description="reading or listening"),
                    "title": types.Schema(type=types.Type.STRING),
                    "content": types.Schema(type=types.Type.STRING, description="The reading passage or listening transcript"),
                    "questions": types.Schema(
                        type=types.Type.ARRAY,
                        description="2 questions related to the content",
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
    print(f"Generating Stage {stage_num}...")
    prompt = f"""
    Generate exactly 10 units for TOEIC Stage {stage_num}.
    Difficulty level: {level_desc}.
    Each unit MUST contain:
    - 10 real English vocabulary words (with IPA, POS, and examples). No fake words!
    - 1 real English grammar point with explanation and examples.
    - 8 multiple choice quiz questions (4 grammar, 4 vocabulary).
    - 1 skills practice (reading or listening) with a short passage/transcript and 2 questions.

    Make the content professional, office/business related (typical TOEIC context).
    Do NOT output placeholder data like 'toeic_vocab_1'. Output real words like 'invoice', 'appointment', 'negotiate'.
    """

    import time
    from google.genai import errors
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

stage1_json = generate_stage(1, "Basic (Target 350-450) A2-B1")
stage2_json = generate_stage(2, "Intermediate (Target 450-600) B1-B2")

def write_stage_file(filename, stage_id, stage_name, stage_desc, json_data):
    ts_content = f"""import {{ StageData }} from './types';

export const {stage_id}: StageData = {{
  id: '{stage_id}',
  name: '{stage_name}',
  description: '{stage_desc}',
  checkpoint: {{
    id: 1,
    title: 'Checkpoint',
    description: 'Vượt qua bài test này để mở khóa chặng tiếp theo.',
    target_units: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    passing_score: 70,
    questions: [
      {{
        id: 1,
        question: 'Câu hỏi kiểm tra đang được cập nhật',
        options: ['A', 'B', 'C', 'D'],
        correct_answer: 0,
        explanation_vi: 'Đang cập nhật'
      }}
    ]
  }},
  units: {json_data}
}};
"""
    with open(filename, "w", encoding="utf-8") as f:
        f.write(ts_content)

write_stage_file(
    r"D:\01_Workspaces\BT2\ielts_app\src\lib\curriculum\toeic_stage1.ts",
    "toeic_stage1",
    "TOEIC: Nền Tảng (Phần 1)",
    "10 Units tập trung từ vựng và ngữ pháp cơ bản",
    stage1_json
)

write_stage_file(
    r"D:\01_Workspaces\BT2\ielts_app\src\lib\curriculum\toeic_stage2.ts",
    "toeic_stage2",
    "TOEIC: Bứt Phá (Phần 2)",
    "10 Units tập trung chiến thuật làm bài nghe hiểu",
    stage2_json
)

print("Successfully generated and saved TOEIC Stage 1 & 2.")
