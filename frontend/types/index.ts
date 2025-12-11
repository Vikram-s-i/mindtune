export type QuestionType =
  | "conceptual"
  | "numerical"
  | "caseStudy"
  | "paragraph"
  | "multiStep"

export type Difficulty = "easy" | "medium" | "hard"

export interface Question {
  id: string
  question: string               // from backend: "text"
  options: string[]
  answer: string                 // exact string match from backend
  difficulty: Difficulty
  type: QuestionType
  topic?: string
}

export interface AnswerEntry {
  questionId: number
  selectedOption: number
  timeSpent: number
}

export interface DetailedResult {
  question: string
  selected: string | null
  correctAnswer: string
  isCorrect: boolean
  timeSpent: number
}

export interface QuizResult {
  score: number
  total: number
  totalTime: number
  detailed: DetailedResult[]
}
