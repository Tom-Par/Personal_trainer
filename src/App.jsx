import React from 'react'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Programs from './sections/Programs.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Pricing from './sections/Pricing.jsx'
import FAQ from './sections/FAQ.jsx'
import Contact from './sections/Contact.jsx'
import "./sections/Section.css";

// Minimal, single-file one-pager for Vite + React (JS) + Tailwind v4
// - No external UI libs, no context, no routers
// - One component file with small inline section components
// - Anchor links jump to sections; each section uses scroll-margin to avoid header overlap

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">Personal Training</a>
        <nav className="text-sm">
          {/* Inline links keep it minimal */}
          <a href="#programs" className="px-3 py-2 hover:underline">Programs</a>
          <a href="#pricing" className="px-3 py-2 hover:underline">Pricing</a>
          <a href="#contact" className="ml-2 px-3 py-2 rounded-lg bg-black !text-white">Book</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Personal Training</p>
        <p>
          One‑page demo. Explore <a href="#programs" className="underline decoration-emerald-500 underline-offset-4">Programs</a>, see{' '}
          <a href="#testimonials" className="underline decoration-emerald-500 underline-offset-4">Results</a>, and{' '}
          <a href="#contact" className="underline decoration-emerald-500 underline-offset-4">book a consult</a>.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 w-full">
      {/* Skip link for accessibility */}
      <a href="#top" className="sr-only focus:not-sr-only focus:absolute focus:m-4 focus:rounded bg-black text-white px-3 py-2">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
