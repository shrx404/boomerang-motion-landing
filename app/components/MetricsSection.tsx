import React from "react";

const metrics = [
  { value: "80%", label: "REDUCTION IN MANUAL COMMUNICATION" },
  { value: "2-4x", label: "HIGHER ENGAGEMENT THAN COMPETITORS" },
  { value: "40%", label: "INCREASE IN CUSTOMER ENGAGEMENT" },
] as const;

export default function MetricsSection() {
  return (
    <section className="w-full py-20 sm:py-28 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8">
          {metrics.map((m) => (
            <div
              key={m.value}
              className="bg-[#FAFAFA] flex-1 rounded-2xl p-8 sm:p-12 flex flex-col items-center justify-center text-center gap-4"
            >
              <span className="text-5xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-[#191919]">
                {m.value}
              </span>
              <span className="text-[11px] sm:text-xs text-[#191919]/50 font-medium uppercase tracking-[0.05em] leading-relaxed max-w-[200px]">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
