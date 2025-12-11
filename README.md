**Mindtune — AI-Powered Adaptive Quiz Generator**

Mindtune is an intelligent quiz-generation platform designed to create dynamic, personalized learning experiences using generative AI.

Instead of relying on fixed question banks, Mindtune generates quizzes instantly from any topic the user enters — making learning adaptive, fast, and accessible.

The system ensures a consistent structure:

10 questions

5 Easy • 4 Medium • 1 Hard

Multiple question types: conceptual, numerical, paragraph-based, case-study, and multi-step reasoning

Strict relevance to the topic entered

Every quiz evaluates a variety of cognitive skills rather than repeating similar patterns.



**Live Demo**
🔹 Frontend (Next.js / Vercel)

👉 https://mindtune-kappa.vercel.app

🔹 Backend (Flask / Render)

👉 https://mindtune-y7gb.onrender.com




**How It Works — System Flow**
1️⃣ **User Enters a Topic**

The user types any subject they want to practice in the Topic screen.

2️⃣ **Frontend Sends Request to Backend**

A POST request is sent from the Next.js frontend to the Flask backend:

POST https://mindtune-y7gb.onrender.com/generate

Payload:

{ "topic": "<user-topic>" }

3️⃣ **AI Question Generation (Backend)**

The backend uses Google Gemini with a structured prompt enforcing:

Exactly 10 questions

4 options each

Strict JSON output

The required difficulty and type distribution

Topic relevance

The backend validates and returns a clean JSON array.

4️⃣ **Quiz Display (Frontend)**

The frontend (Next.js + Tailwind) handles:

Rendering questions

Navigation controls

Tracking selected answers

Time spent per question

5️⃣ **Submission & Scoring**

When the user submits:

Score is calculated

Correct/incorrect mapping is generated

Total + average time is measured

Performance analytics are built

Areas for improvement are identified

6️⃣ **Results Page**

Users receive a full summary with:

Final score percentage

Correct vs incorrect breakdown

Time analysis

Weakness insights

Buttons to retry or return home




**Key Technologies**
Frontend

Next.js (App Router)

React

TailwindCSS

Fetch API

Vercel deployment

Backend

Flask

Google Generative AI (Gemini)

python-dotenv

Flask-CORS

Render deployment




**Architecture Overview**

User
 ↓
Next.js Frontend (Vercel)
 ↓  POST /generate  
Flask Backend (Render)Why Mindtune Works

No need for huge question banks

Every quiz is unique, generated instantly

Ensures balanced difficulty and varied reasoning styles

Clean and modular architecture (Frontend ↔ Backend isolation)

Easy to extend (user accounts, history, leaderboard, adaptive learning)





🔧 **Development Setup**
Backend (Flask)
cd backend
pip install -r requirements.txt


.env file:

GEMINI_API_KEY=your_key_here


Run server:

python back.py

Frontend (Next.js)
cd frontend
npm install
npm run dev


.env.local:

NEXT_PUBLIC_BACKEND_URL=https://mindtune-y7gb.onrender.com





🛣️ **Roadmap**

Adaptive difficulty

Personalized learning paths

PDF quiz result downloads

User authentication

Session history & progress graph

Teacher dashboard
 ↓
Gemini AI → Generates structured question JSON
 ↓
Next.js → Quiz Rendering → Scoring Engine → Results Page





