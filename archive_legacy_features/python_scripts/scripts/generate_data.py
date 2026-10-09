import os
import json
import time
import requests
from dotenv import load_dotenv

# Load env variables
load_dotenv('.env')
API_KEY = os.getenv('GEMINI_API_KEY')
if not API_KEY:
    print("API Key not found!")
    exit(1)

# Using gemini-flash-lite-latest for bulk generation as per GEMINI.md
API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key={API_KEY}"

def generate_checkpoint_question(track, existing_count):
    prompt = f"""
    Generate 1 multiple choice question for an English exam.
    Track: {track}
    Level: A1/A2
    Question number: {existing_count + 1}
    Format as JSON:
    {{
      "id": {existing_count + 1},
      "type": "grammar" or "vocabulary",
      "question": "question text with ___",
      "options": ["A", "B", "C", "D"],
      "correct_answer": 0-3,
      "explanation_vi": "vietnamese explanation"
    }}
    """
    
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "responseMimeType": "application/json",
            "temperature": 0.7
        }
    }
    
    try:
        response = requests.post(API_URL, json=payload)
        data = response.json()
        if 'candidates' in data:
            text = data['candidates'][0]['content']['parts'][0]['text']
            return json.loads(text)
        else:
            print(f"Error calling API: {data}")
            return None
    except Exception as e:
        print(f"Request failed: {e}")
        return None

def main():
    print("Starting background bulk generation task...")
    # Simulate a loop to generate questions for TOEIC checkpoint
    target_file = "src/lib/curriculum/toeic_stage1.ts"
    
    print(f"Appending questions to {target_file}")
    
    for i in range(10, 15): # generate 5 more questions as a demo
        print(f"Generating question {i+1}...")
        q = generate_checkpoint_question("TOEIC", i)
        if q:
            print(f"Successfully generated: {q['question']}")
            # In a full implementation, we would parse the AST or regex replace to append this JSON
            # For this script, we'll just log it.
        
        # Sleep to avoid quota issues, though flash-lite is generous
        time.sleep(2)

    print("Generation complete!")

if __name__ == "__main__":
    main()
