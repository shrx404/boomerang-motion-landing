import React from "react";

const testimonials = [
  {
    quote:
      "We went from 400 manual follow-up calls a day to almost none. The agents handle nuance we didn't think was possible.",
    author: "Sarah K.",
    title: "VP of Servicing, Regional Credit Union",
  },
  {
    quote:
      "The audit trail alone saved us three weeks during our last exam. Compliance loves it; borrowers don't even know they're talking to AI.",
    author: "Marcus T.",
    title: "Chief Risk Officer, Community Bank",
  },
] as const;

export default function TestimonialsSection() {
  return (
    <section
      id="company"
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40"
    >
      <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">
        IN THEIR WORDS
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight tracking-tight max-w-lg">
        Institutions that trust the loop.
      </h2>

      <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {testimonials.map((t) => (
          <div
            key={t.author}
            className="border border-gray-200 p-8 sm:p-10 flex flex-col justify-between gap-10 rounded-xl"
          >
            <p className="text-lg sm:text-xl font-serif font-normal leading-snug tracking-tight text-[#191919]">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="text-sm font-medium text-[#191919]">{t.author}</p>
              <p className="text-xs text-[#191919]/50 mt-0.5">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
