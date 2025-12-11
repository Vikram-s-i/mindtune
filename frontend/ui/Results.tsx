"use client"

import type { QuizResult } from "@/types"

interface ResultsProps {
  results: QuizResult
  onTryAgain: () => void
  onBackHome: () => void
}

export default function Results({ results, onTryAgain, onBackHome }: ResultsProps) {
  const percentage = Math.round((results.score / results.totalQuestions) * 100)
  const avgTimePerQuestion = Math.round(results.totalTime / results.totalQuestions)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Quiz Complete!</h2>

          {/* Score Card */}
          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg p-8 mb-8 text-center">
            <div className="text-5xl font-bold mb-2">{percentage}%</div>
            <div className="text-lg">
              {results.score} out of {results.totalQuestions} correct
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-secondary rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-secondary-foreground">{results.correct}</div>
              <div className="text-sm text-secondary-foreground/70">Correct</div>
            </div>
            <div className="bg-secondary rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-secondary-foreground">{results.incorrect}</div>
              <div className="text-sm text-secondary-foreground/70">Incorrect</div>
            </div>
            <div className="bg-secondary rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-secondary-foreground">{avgTimePerQuestion}s</div>
              <div className="text-sm text-secondary-foreground/70">Avg Time</div>
            </div>
          </div>

          {/* Time Analysis */}
          <div className="bg-secondary rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-secondary-foreground mb-2">Time Analysis</h3>
            <p className="text-sm text-secondary-foreground/70">
              Total time: {Math.floor(results.totalTime / 60)}m {results.totalTime % 60}s
            </p>
          </div>

          {/* Weaknesses Placeholder */}
          <div className="bg-muted rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-foreground mb-2">Areas for Improvement</h3>
            <p className="text-sm text-muted-foreground">
              Review questions you got wrong to strengthen your understanding of those topics.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <button
              onClick={onTryAgain}
              className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Try Another Topic
            </button>
            <button
              onClick={onBackHome}
              className="flex-1 py-3 border border-border rounded-lg font-semibold text-foreground hover:bg-secondary transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
