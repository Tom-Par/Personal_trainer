import React from 'react'

export default function Testimonials() {
  const quotes = [
    { q: 'Fixed my desk‑back and finally trained 3x/week.', a: 'Taylor — Product Manager' },
    { q: 'Travel days no longer break my routine.', a: 'Marta — Consultant' },
    { q: 'Clear cues and sustainable progress.', a: 'Ilya — Engineer' },
  ]
  return (
    <section id="testimonials" title="Client Results">
      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((t, i) => (
          <figure key={i} className="rounded-2xl border p-6">
            <blockquote className="italic">“{t.q}”</blockquote>
            <figcaption className="mt-4 text-sm text-neutral-600">— {t.a}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}