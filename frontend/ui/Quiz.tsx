"use client"

import { useState, useEffect } from "react"
import { processQuizResults } from "@/generate/resultProcessor"
import type { Question, AnswerEntry, QuizResult } from "@/types"

interface QuizProps {
  questions: Question[]
  userEmail: string
  onComplete: (results: QuizResult) => void
}

export default function Quiz({ questions, userEmail, onComplete }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<AnswerEntry[]>(
    questions.map((_, i) => ({
      questionId: i,
      selectedOption: -1,
      timeSpent: 0,
    }))
  )

  const [startTime] = useState(Date.now())
  const [questionStartTime, setQuestionStartTime] = useState(Date.now())
  const [results, setResults] = useState<QuizResult | null>(null)

  useEffect(() => {
    setQuestionStartTime(Date.now())
  }, [currentQuestionIndex])

  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = answers[currentQuestionIndex]

  const selectOption = (index: number) => {
    const updated = [...answers]
    updated[currentQuestionIndex].selectedOption = index
    setAnswers(updated)
  }

  const submitQuiz = () => {
    const updated = answers.map((a, index) => ({
      ...a,
      timeSpent:
        index === currentQuestionIndex
          ? Math.floor((Date.now() - questionStartTime) / 1000)
          : a.timeSpent,
    }))

    const totalTime = Math.floor((Date.now() - startTime) / 1000)
    const result = processQuizResults(updated, questions, totalTime)

    setResults(result)
    onComplete(result)
  }

  if (results) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="bg-card p-8 rounded-lg border border-border max-w-2xl w-full text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">🎉 Quiz Complete!</h2>
          <p className="text-xl mb-4">Score: {results.score}/{results.total}</p>
          <p className="text-md mb-6 text-muted-foreground">Total Time: {results.totalTime}s</p>

          <div className="max-h-96 overflow-y-auto space-y-3 text-left">
            {results.detailed.map((r, i) => (
              <div
                key={i}
                className={`p-4 rounded-lg border ${
                  r.isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
                }`}
              >
                <p className="font-semibold">{i + 1}. {r.question}</p>
                <p>Your Answer: {r.selected || "Not answered"}</p>
                {!r.isCorrect && <p>Correct: {r.correctAnswer}</p>}
                <p className="text-xs text-muted-foreground">Time: {r.timeSpent}s</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between mb-6">
          <h1 className="text-xl font-bold text-foreground">Quiz</h1>
          <span className="text-muted-foreground">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="text-sm text-muted-foreground mb-2">
            {currentQuestion.type} • Difficulty: {currentQuestion.difficulty}
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-6">{currentQuestion.question}</h2>

          <div className="space-y-3">
            {currentQuestion.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => selectOption(i)}
                className={`w-full p-4 rounded-lg border-2 transition text-left font-medium ${
                  currentAnswer.selectedOption === i
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:border-primary"
                }`}
              >
                {String.fromCharCode(65 + i)}. {opt}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button
              disabled={currentQuestionIndex === 0}
              onClick={() => setCurrentQuestionIndex((i) => i - 1)}
              className="px-4 py-2 border rounded-lg"
            >
              Previous
            </button>

            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={submitQuiz}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestionIndex((i) => i + 1)}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
