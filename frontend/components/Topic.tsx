"use client"

import { useState } from "react"
import { generateQuestions } from "@/utils/questionGenerator"
import type { Question } from "@/types"

interface TopicProps {
  onQuestionsGenerated: (questions: Question[]) => void
}

export default function Topic({ onQuestionsGenerated }: TopicProps) {
  const [topic, setTopic] = useState("")
  const [loading, setLoading] = useState(false)

  const handleGenerateQuestions = async () => {
    if (!topic.trim()) {
      alert("Please enter a topic")
      return
    }

    setLoading(true)
    try {
      const questions = await generateQuestions(topic)
      onQuestionsGenerated(questions)
    } catch (error) {
      alert("Failed to generate questions")
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-4">
      <div className="w-full max-w-2xl">
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <h2 className="text-3xl font-bold mb-2 text-foreground">Choose a Topic</h2>
          <p className="text-muted-foreground mb-8">
            Enter any topic to generate 10 adaptive quiz questions.
          </p>

          <div className="space-y-4">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleGenerateQuestions()}
              className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary text-lg"
              placeholder="e.g., Linear Algebra, Java OOP, World History"
              autoFocus
            />

            <button
              onClick={handleGenerateQuestions}
              disabled={loading}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate Questions"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
