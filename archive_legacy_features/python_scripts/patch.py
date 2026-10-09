import os
import re

dir_path = r"D:\01_Workspaces\BT2\ielts_app\src\lib\curriculum"

# The properties that MUST be present
required_keys = [
    "listening_prompt", "listening_transcript", 
    "speaking_prompt", "speaking_sample_idea", 
    "writing_prompt", "writing_model_sentence"
]

missing_payload = """
            "listening_prompt": "Listen and answer.",
            "listening_transcript": "This is a dummy transcript.",
            "speaking_prompt": "Speak about this topic.",
            "speaking_sample_idea": "Dummy sample idea.",
            "writing_prompt": "Write about this.",
            "writing_model_sentence": "This is a model sentence."
"""

for root, _, files in os.walk(dir_path):
    for f in files:
        if f.endswith(".ts") and f.startswith("stage"):
            path = os.path.join(root, f)
            with open(path, "r", encoding="utf-8") as file:
                content = file.read()
            
            # Simple approach: Replace occurrences of missing keys.
            # Look for blocks where reading_explanation ends, but the next key is not listening_prompt
            # Or just blindly replace `"reading_explanation": "(.*?)"\s*\}` with `"reading_explanation": "\1",` + missing_payload + `}`
            
            new_content = re.sub(
                r'("reading_explanation"\s*:\s*".*?")\s*\n\s*\}', 
                r'\1,\n' + missing_payload + '        }', 
                content
            )
            
            if content != new_content:
                with open(path, "w", encoding="utf-8") as file:
                    file.write(new_content)
                print(f"Patched {f}")
print("Done patching.")
