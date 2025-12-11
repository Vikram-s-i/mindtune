"use client"

import { useState } from "react"
import Landing from "@/ui/Landing"
import Auth from "@/ui/Auth"
import Topic from "@/ui/Topic"
import Quiz from "@/ui/Quiz"
import Results from "@/ui/Results"
import type { Question, QuizResult } from "@/types"

type Screen = "landing" | "auth" | "topic" | "quiz" | "results"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing")
  const [user, setUser] = useState<{ email: string } | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [quizResults, setQuizResults] = useState<QuizResult | null>(null)

  const handleLandingClick = () => {
    setCurrentScreen("auth")
  }

  const handleAuthSuccess = (email: string) => {
    setUser({ email })
    setCurrentScreen("topic")
  }

  const handleTopicSubmit = (generatedQuestions: Question[]) => {
    setQuestions(generatedQuestions)
    setCurrentScreen("quiz")
  }

  const handleQuizComplete = (results: QuizResult) => {
    setQuizResults(results)
    setCurrentScreen("results")
  }

  const handleTryAgain = () => {
    setQuestions([])
    setQuizResults(null)
    setCurrentScreen("topic")
  }

  const handleBackHome = () => {
    setUser(null)
    setQuestions([])
    setQuizResults(null)
    setCurrentScreen("landing")
  }

  return (
    <main className="min-h-screen bg-background">
      {currentScreen === "landing" && <Landing onStartClick={handleLandingClick} />}
      {currentScreen === "auth" && <Auth onAuthSuccess={handleAuthSuccess} />}
      {currentScreen === "topic" && <Topic onQuestionsGenerated={handleTopicSubmit} />}
      {currentScreen === "quiz" && questions.length > 0 && (
        <Quiz questions={questions} userEmail={user?.email || ""} onComplete={handleQuizComplete} />
      )}
      {currentScreen === "results" && quizResults && (
        <Results results={quizResults} onTryAgain={handleTryAgain} onBackHome={handleBackHome} />
      )}
    </main>
  )
}
