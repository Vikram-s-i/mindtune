from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

# Enable CORS for all routes
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/")
def home():
    return {"status": "backend running"}


API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    raise ValueError("GEMINI_API_KEY not found in environment variables")
# Configure your key
genai.configure(api_key=API_KEY)

PROMPT_TEMPLATE = """
Generate exactly 10 multiple choice questions for topic: "{topic}"

CRITICAL: Return ONLY a valid JSON array. No explanation, no markdown, no code blocks.

MANDATORY FIXED DIFFICULTY DISTRIBUTION:
- Exactly 5 easy questions
- Exactly 4 medium questions
- Exactly 1 hard question

MANDATORY QUESTION TYPE MIX (use ALL 5 types):
- conceptual
- numerical
- caseStudy
- paragraph
- multiStep

IMPORTANT JSON RULES:
1. Use only straight double quotes "
2. No trailing commas
3. Escape special characters properly
4. Answer must EXACTLY match one of the options

Format:
[
  {{
    "id": "q1",
    "text": "Question text",
    "options": ["A", "B", "C", "D"],
    "answer": "A",
    "difficulty": "easy",
    "type": "conceptual",
    "topic": "{topic}"
  }}
]

Requirements:
- 10 questions
- 4 distinct options each
- Answer copied EXACTLY from options
- Topic = "{topic}"
- Use all 5 types
"""

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    topic = data.get("topic")

    if not topic:
        return jsonify({"error": "Missing 'topic'"}), 400

    prompt = PROMPT_TEMPLATE.format(topic=topic)

    try:
        model = genai.GenerativeModel("models/gemini-2.5-flash")

        response = model.generate_content(prompt)
        raw = response.text

        try:
            parsed = eval(raw)
            return jsonify(parsed)
        except Exception:
            return jsonify({"error": "Gemini returned invalid JSON", "raw": raw}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
