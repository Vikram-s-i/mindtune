
const BACKEND =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000"

export async function generateQuestions(topic: string) {
  const res = await fetch(`${BACKEND}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic }),
  })

  if (!res.ok) {
    const raw = await res.text()
    console.error("🔥 BACKEND ERROR:", raw)
    throw new Error("Backend error: " + raw)
  }

  const data = await res.json()

  // Map backend JSON into your frontend Question object shape
  return data.map((q: any, i: number) => ({
    id: q.id || `q${i + 1}`,
    question: q.text || q.question,   // support both formats
    options: q.options || [],
    answer: q.answer,
    difficulty: q.difficulty,
    type: q.type,
    topic: q.topic,
  }))
}
