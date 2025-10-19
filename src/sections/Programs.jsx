import React from 'react'

export default function Programs() {
  const items = [
    { title: 'Remote Coaching', bullets: ['Custom plan', 'Video form feedback', 'Weekly check‑ins'], cta: 'Apply' },
    { title: 'Hybrid: Gym + Travel', bullets: ['Strength focus', 'Mobility flows', 'Deload weeks'], cta: 'Try it' },
    { title: 'Starter Pack', bullets: ['4‑week plan', 'Minimal gear', 'Video library'], cta: 'Get started' },
  ]
  return (
    <section id="programs" title="Programs you can do anywhere">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((card) => (
          <div key={card.title} className="rounded-2xl border p-6">
            <h3 className="font-semibold">{card.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc list-inside">
              {card.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <a href="#contact" className="mt-4 inline-block w-full rounded-lg border px-4 py-2 text-center">{card.cta}</a>
          </div>
        ))}
      </div>
    </section>
  )
}