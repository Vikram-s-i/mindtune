export async function generateQuestions(topic: string) {
  const res = await fetch("http://localhost:5000/generate", {
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

  return data.map((q: any, i: number) => ({
    id: q.id || `q${i + 1}`,
    question: q.text,
    options: q.options,
    answer: q.answer,
    difficulty: q.difficulty,
    type: q.type,
    topic: q.topic,
  }))
}
