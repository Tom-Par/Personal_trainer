import React from 'react' 

export default function FAQ() {
  const faqs = [
    { q: 'Do I need a gym?', a: 'No. Bodyweight/bands options included.' },
    { q: 'How do check‑ins work?', a: 'Weekly video notes and plan updates.' },
    { q: 'Company sponsorship?', a: 'Yes, I can invoice HR and tailor a team plan.' },
  ]
  return (
    <section id="faq" title="FAQ">
      <div className="space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="rounded-2xl border p-4">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-neutral-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}