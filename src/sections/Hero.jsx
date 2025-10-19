import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Strength & Mobility{" "}
            <span className="text-emerald-600">for Busy Travelers</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            Build muscle, move pain-free, and stay consistent anywhere.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              className="px-5 py-3 rounded-lg bg-emerald-600 text-white"
            >
              Start Now
            </a>
            <a
              href="#about"
              className="px-5 py-3 rounded-lg border"
            >
              How I Work
            </a>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-2xl bg-neutral-100 grid place-items-center text-neutral-400">
          <span className="text-sm">Trainer image / video</span>
        </div>
      </div>
    </section>
  );
}
