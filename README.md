Mindtune — AI-Powered Adaptive Quiz Generator

Mindtune is an intelligent quiz-generation platform designed to create dynamic, personalized learning experiences using generative AI. Instead of relying on fixed question banks, Mindtune builds quizzes on demand from any topic the user enters. The system analyzes the topic, constructs a diverse set of questions across multiple cognitive levels, and delivers a complete quiz experience with scoring, performance evaluation, and structured feedback.
The core idea is simple: learning should be instant, adaptive, and accessible. Mindtune allows users to type any subject — from linear algebra to world history — and receive a full 10-question quiz tailored to that domain. The questions always follow a consistent structure: five easy, four medium, and one hard, with a mix of conceptual, numerical, paragraph-based, case-study, and multi-step reasoning types. This ensures each quiz evaluates different skills rather than repeating similar patterns.



How It Works — System Flow
User enters a topic
In the Topic screen, the user types a subject they want to practice.
Frontend sends request to backend
A POST request goes to the Flask server at /generate, containing the topic.
AI Question Generation (Backend)
The backend uses Google’s Gemini model with a carefully engineered prompt that enforces:
10 questions
4 options each
Strict JSON output
Difficulty and type distribution
Topic relevance
The backend validates the AI output and returns a clean JSON array to the frontend.
Display Quiz Interface
The frontend (built in Next.js/React) displays:
Question navigation
Question text and options
Response tracking
Timer per question
Users can move freely between questions before submitting.
Submission & Scoring
Once the quiz is submitted, the app:
Calculates score
Determines correct/incorrect answers
Measures total time
Builds detailed performance analytics
Identifies strengths and weaknesses
Results Screen
The user sees a complete summary of their performance, with the option to try again or return home to generate a new quiz.



Key Technologies
Frontend
Next.js (App Router) for a fast, interactive UI
React for component-based quiz screens
TailwindCSS for clean, responsive styling
Client-side state management using React hooks
Fetch API for backend integration
Backend
Flask for a lightweight, robust REST API
Google Generative AI (Gemini) for generating structured question sets
python-dotenv for secure API key management
CORS to enable frontend communication
JSON validation & transformation to ensure safe, predictable output
Architecture
The system follows a clear separation of concerns:
AI logic + API server → backend
UI + user flow + quiz rendering → frontend
Communication happens through a single endpoint, keeping the system flexible and scalable.


Why It Works
Mindtune brings together AI generation, structured assessment, and intuitive UI design. Instead of creating and managing huge question banks, the system creates new content instantly — unique every time. By enforcing difficulty levels and question variety, the platform ensures a balanced evaluation rather than random trivia. The modular architecture keeps the system easy to expand, whether by adding user authentication, progress tracking, or adaptive difficulty tuning.
