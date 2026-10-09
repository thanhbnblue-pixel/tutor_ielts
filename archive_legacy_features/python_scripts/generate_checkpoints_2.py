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
    description="Array of exactly 10 questions.",
    items=types.Schema(
        type=types.Type.OBJECT,
        properties={
            "id": types.Schema(type=types.Type.INTEGER),
            "question": types.Schema(type=types.Type.STRING),
            "options": types.Schema(
                type=types.Type.ARRAY,
                items=types.Schema(type=types.Type.STRING),
                description="Exactly 4 options"
            ),
            "correct_answer": types.Schema(type=types.Type.INTEGER, description="0-3"),
            "explanation_vi": types.Schema(type=types.Type.STRING),
        },
        required=["id", "question", "options", "correct_answer", "explanation_vi"]
    )
)

def generate_checkpoint(stage_name, level_desc):
    prompt = f"""
    Generate exactly 10 multiple choice questions for {stage_name} Checkpoint Test.
    Level: {level_desc}.
    The questions should be a mix of vocabulary and grammar appropriate for this level.
    Output purely the JSON array.
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
            return json.loads(response.text)
        except errors.APIError as e:
            if "503" in str(e) or "500" in str(e) or "429" in str(e):
                print(f"Server error {e}, retrying {attempt+1}/5 in 15 seconds...")
                time.sleep(15)
            else:
                raise
    raise Exception("Failed after 5 retries due to server errors.")

def patch_file(filepath, questions_json):
    import re
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    pattern = re.compile(r'questions:\s*\[.*?\](?=\s*\n\s*\}\,?\n\s*(units|\]))', re.DOTALL)
    
    questions_str = json.dumps(questions_json, indent=6, ensure_ascii=False)
    replacement = f"questions: {questions_str}"
    
    new_content = pattern.sub(replacement, content)
    
    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Patched {filepath}")
    else:
        print(f"Could not patch {filepath} (regex failed to match).")

print("Generating Checkpoint TOEIC Stage 1...")
cp1 = generate_checkpoint("TOEIC Stage 1", "Basic (Target 350-450) A2-B1")
patch_file(r"D:\01_Workspaces\BT2\ielts_app\src\lib\curriculum\toeic_stage1.ts", cp1)

print("Generating Checkpoint TOEIC Stage 2...")
cp2 = generate_checkpoint("TOEIC Stage 2", "Intermediate (Target 450-600) B1-B2")
patch_file(r"D:\01_Workspaces\BT2\ielts_app\src\lib\curriculum\toeic_stage2.ts", cp2)

print("Checkpoints generated and patched for TOEIC.")
