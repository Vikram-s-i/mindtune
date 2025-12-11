import type { Question, AnswerEntry, QuizResult } from "@/types"

export function processQuizResults(
  answers: AnswerEntry[],
  questions: Question[],
  totalTime: number
): QuizResult {
  let score = 0

  const detailed = answers.map((a, i) => {
    const q = questions[i]
    const selected = a.selectedOption !== -1 ? q.options[a.selectedOption] : null
    const correct = selected === q.answer

    if (correct) score++

    return {
      question: q.question,
      selected,
      correctAnswer: q.answer,
      isCorrect: correct,
      timeSpent: a.timeSpent,
    }
  })

  return { score, total: questions.length, totalTime, detailed }
}
