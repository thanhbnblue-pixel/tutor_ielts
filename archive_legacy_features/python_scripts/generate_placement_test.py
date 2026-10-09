import os
import re
from google import genai
from google.genai import types

api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    # Read from .env if missing
    with open(r"D:\01_Workspaces\BT2\ielts_app\.env", "r") as f:
        for line in f:
            if line.startswith("GEMINI_API_KEY="):
                api_key = line.strip().split("=", 1)[1]
                break

client = genai.Client(api_key=api_key)

schema = types.Schema(
    type=types.Type.ARRAY,
    description="Array of 30 placement test questions, strictly 6 questions per CEFR level from A1 to C1.",
    items=types.Schema(
        type=types.Type.OBJECT,
        properties={
            "id": types.Schema(type=types.Type.INTEGER),
            "level": types.Schema(type=types.Type.STRING, description="Must be one of: A1, A2, B1, B2, C1"),
            "category": types.Schema(type=types.Type.STRING, description="Grammar, Vocabulary, or Reading"),
            "question": types.Schema(type=types.Type.STRING, description="The English question text. E.g., fill in the blank"),
            "options": types.Schema(
                type=types.Type.ARRAY,
                items=types.Schema(type=types.Type.STRING),
                description="Exactly 4 options"
            ),
            "correctAnswer": types.Schema(type=types.Type.INTEGER, description="Index of correct option (0-3)"),
            "explanation": types.Schema(type=types.Type.STRING, description="Vietnamese explanation of why this answer is correct")
        },
        required=["id", "level", "category", "question", "options", "correctAnswer", "explanation"]
    )
)

prompt = """
Generate exactly 30 English placement test questions to assess CEFR levels from A1 to C1.
Generate exactly 6 questions for A1.
Generate exactly 6 questions for A2.
Generate exactly 6 questions for B1.
Generate exactly 6 questions for B2.
Generate exactly 6 questions for C1.

The questions should be general English grammar, vocabulary, or short reading comprehension (1-2 sentences), appropriate for testing overall proficiency regardless of whether the student eventually takes IELTS, TOEIC, or VSTEP.
The difficulty MUST strictly increase with the level.
A1: Basic grammar (to be, present simple, basic pronouns, basic vocabulary).
A2: Past simple, future, comparatives, everyday vocabulary.
B1: Present perfect, modals, conditionals type 1 & 2, intermediate vocabulary.
B2: Passives, relative clauses, gerunds/infinitives, phrasal verbs, advanced vocabulary.
C1: Complex inversions, advanced conditionals, nuanced vocabulary, collocations, idiomatic expressions.

Output strictly as a JSON array adhering to the schema.
"""

print("Generating 30 questions...")
response = client.models.generate_content(
    model='gemini-1.5-flash',
    contents=prompt,
    config=types.GenerateContentConfig(
        response_mime_type="application/json",
        response_schema=schema,
        temperature=0.2,
    ),
)

json_data = response.text

# Now replace the array in PlacementTest.tsx
ts_path = r"D:\01_Workspaces\BT2\ielts_app\src\components\PlacementTest.tsx"
with open(ts_path, "r", encoding="utf-8") as f:
    content = f.read()

# We want to replace everything from `const PLACEMENT_QUESTIONS: Question[] = [`
# down to the closing `];` before `interface PlacementTestProps`

pattern = re.compile(r"const PLACEMENT_QUESTIONS:\s*Question\[\]\s*=\s*\[.*?\];", re.DOTALL)

replacement = f"const PLACEMENT_QUESTIONS: Question[] = {json_data};"

new_content = pattern.sub(replacement, content)

if content == new_content:
    print("Error: Could not find PLACEMENT_QUESTIONS array to replace.")
else:
    with open(ts_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully replaced PLACEMENT_QUESTIONS in PlacementTest.tsx")
