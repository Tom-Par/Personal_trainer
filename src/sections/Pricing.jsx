import React from 'react'

export default function Pricing() {
  const tiers = [
    { name: 'Starter', price: '€129 / 4 weeks', features: ['Plan + videos', 'Weekly check‑in'], highlight: false },
    { name: 'Remote Coaching', price: '€249 / month', features: ['Custom programming', '24‑48h feedback', 'Mobility stack'], highlight: true },
    { name: 'Hybrid', price: '€299 / month', features: ['1× live + remote', 'Travel plan included'], highlight: false },
  ]
  return (
    <section id="pricing" title="Simple Pricing">
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className={"rounded-2xl p-6 border " + (t.highlight ? 'border-emerald-400 shadow-lg' : '')}>
            {t.highlight && <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">Most Popular</span>}
            <h3 className="font-semibold mt-2">{t.name}</h3>
            <p className="text-3xl font-extrabold mt-2">{t.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc list-inside">
              {t.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a href="#contact" className="mt-4 inline-block w-full rounded-lg bg-black text-white px-4 py-2 text-center !text-white">Choose</a>
          </div>
        ))}
      </div>
    </section>
  )
}