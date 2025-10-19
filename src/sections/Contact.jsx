import React from 'react'

export default 
function Contact() {
  return (
    <section id="contact" title="Book a Free 15‑min Consult">
      <p className="text-neutral-700">Tell me a bit about your goals and schedule. I’ll reply within 24 hours.</p>
      <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={(e) => { e.preventDefault(); alert('Thanks! I\'ll be in touch.'); }}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input id="name" name="name" className="rounded-xl border px-4 py-3" placeholder="Your name" required />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" className="rounded-xl border px-4 py-3" placeholder="you@example.com" required />
        </div>
        <div className="md:col-span-2 flex flex-col gap-1">
          <label htmlFor="msg" className="text-sm font-medium">Goals</label>
          <textarea id="msg" name="message" className="rounded-xl border px-4 py-3 min-h-[120px]" placeholder="Pain‑free back, gain muscle, mobility…" />
        </div>
        <div className="md:col-span-2 flex items-center justify-between">
          <span className="text-sm text-neutral-600">Prefer chat? DM @avestruz on Instagram.</span>
          <button type="submit" className="px-5 py-3 rounded-lg bg-emerald-600 text-white">Send</button>
        </div>
      </form>
    </section>
  )
}