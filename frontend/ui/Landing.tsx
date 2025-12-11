"use client"

interface LandingProps {
  onStartClick: () => void
}

export default function Landing({ onStartClick }: LandingProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Mindtune</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">Learn smarter with AI-powered adaptive quizzes</p>
        <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto">
          Generate custom quizzes on any topic and track your progress with intelligent question difficulty.
        </p>
        <button
          onClick={onStartClick}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition text-lg"
        >
          Start Learning
        </button>
      </div>
    </div>
  )
}
