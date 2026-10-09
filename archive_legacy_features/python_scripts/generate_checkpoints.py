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

    # Find the questions array inside checkpoint object
    # This regex is a bit tricky, but we can replace everything between 'questions: [' and ']' inside checkpoint
    # It's safer to just replace the whole checkpoint block or use regex replacement carefully.
    
    # Alternatively, since we know exactly how the files are formatted:
    pattern = re.compile(r'questions:\s*\[.*?\](?=\s*\n\s*\}\,?\n\s*(units|\]))', re.DOTALL)
    
    questions_str = json.dumps(questions_json, indent=6, ensure_ascii=False)
    # the json string is an array, we want it as the value for questions key
    replacement = f"questions: {questions_str}"
    
    new_content = pattern.sub(replacement, content)
    
    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Patched {filepath}")
    else:
        print(f"Could not patch {filepath} (regex failed to match).")

print("Generating Checkpoint IELTS Stage 1...")
cp1 = generate_checkpoint("IELTS Stage 1", "A1-A2 Beginner")
patch_file(r"D:\01_Workspaces\BT2\ielts_app\src\lib\curriculum\stage1.ts", cp1)

print("Generating Checkpoint IELTS Stage 2...")
cp2 = generate_checkpoint("IELTS Stage 2", "B1 Intermediate")
patch_file(r"D:\01_Workspaces\BT2\ielts_app\src\lib\curriculum\stage2.ts", cp2)

print("Generating Checkpoint IELTS Stage 3...")
cp3 = generate_checkpoint("IELTS Stage 3", "B2 Upper Intermediate")
patch_file(r"D:\01_Workspaces\BT2\ielts_app\src\lib\curriculum\stage3.ts", cp3)

print("Generating Checkpoint IELTS Stage 4...")
cp4 = generate_checkpoint("IELTS Stage 4", "C1 Advanced")
patch_file(r"D:\01_Workspaces\BT2\ielts_app\src\lib\curriculum\stage4.ts", cp4)

print("Checkpoints generated and patched for IELTS.")
