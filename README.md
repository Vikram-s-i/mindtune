🌟 Mindtune — AI-Powered Adaptive Quiz Generator

Mindtune is an intelligent quiz-generation platform that creates dynamic, personalized learning experiences using generative AI.
Instead of relying on fixed question banks, Mindtune generates quizzes instantly from any topic entered by the user.

Whether the topic is Linear Algebra, Organic Chemistry, or World History, Mindtune produces a complete 10-question quiz with diverse difficulty levels and reasoning types — giving users a fast, adaptive way to learn anything.

🚀 Key Features

Instant AI-generated quizzes from any topic

Balanced difficulty mix:

5 Easy

4 Medium

1 Hard

5 Question Types:

Conceptual

Numerical

Case Study

Paragraph-based

Multi-step reasoning

Structured JSON output enforced by prompt engineering

Interactive quiz UI with navigation and timers

Automatic scoring & analytics

Performance summary with improvements section

Fast, modern frontend powered by Next.js

Reliable backend using Flask + Gemini AI

🧠 How Mindtune Works
1. User Enters a Topic

The learner types a subject they want to practice in the Topic screen.

2. Frontend Sends Request

A POST /generate request is sent to the Flask backend containing the topic.

3. AI Question Generation (Backend)

The backend uses Google Gemini to generate:

Exactly 10 questions

4 options per question

Strict JSON structure

Required difficulty distribution

Required question type mix

Topic-relevant, diverse questions

The backend validates and formats the AI response before sending it back.

4. Quiz Experience (Frontend)

The Next.js app renders:

Question navigation

Options & selection tracking

Per-question timers

Ability to move forward/backward

5. Submission & Scoring

Once submitted, the app:

Calculates score

Marks correct/incorrect answers

Computes total & average time

Generates analytics

Summarizes strengths and weaknesses

6. Results Screen

Users receive:

Final score & percentage

Correct vs incorrect breakdown

Time analysis

Improvement suggestions

Options to retry or go home

🛠️ Tech Stack
Frontend

Next.js (App Router)

React

TailwindCSS

Client-side state management (React Hooks)

Fetch API

Backend

Flask (Python)

Google Generative AI (Gemini)

python-dotenv

Flask-CORS

JSON validation utilities

🏗️ Architecture Overview
User → Mindtune UI (Next.js, Vercel)
        ↓
POST /generate
        ↓
Flask Backend (Render)
        ↓
Gemini Model → Validated JSON Output
        ↓
Quiz Rendering → Scoring Engine → Results Screen


(You may replace this with your actual PNG/SVG architecture diagram.)

⚙️ Local Setup & Installation
1. Clone the Repository
git clone https://github.com/<your-username>/mindtune.git
cd mindtune

Backend Setup (Flask)
2. Install dependencies
cd backend
pip install -r requirements.txt

3. Create a .env file
GEMINI_API_KEY=your_key_here

4. Run the server
python back.py


Backend runs at:

http://localhost:5000

Frontend Setup (Next.js)
5. Install dependencies
cd frontend
npm install

6. Create .env.local
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000

7. Run the development server
npm run dev


Frontend runs at:

http://localhost:3000

🌐 Deployment
Frontend (Vercel)

Deploy /frontend

Add environment variable:
NEXT_PUBLIC_BACKEND_URL=https://<render-backend-url>

Backend (Render)

Deploy /backend

Runtime: Python

Start Command:

gunicorn back:app --bind 0.0.0.0:$PORT


Add environment variable:

GEMINI_API_KEY=your_key

🧭 Roadmap

 Adaptive difficulty scaling using past performance

 Personalized question recommendations

 Downloadable PDF report per quiz

 User accounts & progress tracking

 Multi-language support

 Teacher dashboard for classroom use

📄 License

This project is licensed under the MIT License.

🙌 Contributors

Made with 💡, ☕, and a passion for AI-driven education.
