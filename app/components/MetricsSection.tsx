import React from "react";
import Image from "next/image";

const metrics = [
  { value: "80%", label: "REDUCTION IN MANUAL COMMUNICATION" },
  { value: "2-4x", label: "HIGHER ENGAGEMENT THAN COMPETITORS" },
  { value: "40%", label: "INCREASE IN CUSTOMER ENGAGEMENT" },
  { value: "10x", label: "FASTER ONBOARDING TIME" },
] as const;

export default function MetricsSection() {
  return (
    <section className="w-full py-20 sm:py-28 bg-white border-y border-gray-100">
      <div className="w-full px-6 sm:px-10 md:px-14">
        {/* HEADING OPTIONS */}
        <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-semibold mb-4">
            IMPACT AT SCALE
          </span>

          {/* OPTION 1 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight tracking-tight text-[#191919] max-w-2xl">
            The numbers speak for themselves.
          </h2>

          {/* OPTION 2 */}
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight tracking-tight text-[#191919] max-w-2xl">
            Proven results across the board.
          </h2> */}

          {/* OPTION 3 */}
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight tracking-tight text-[#191919] max-w-2xl">
            Measurable success, by design.
          </h2> */}
        </div>

        {/* METRICS CARDS & IMAGE */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-10">
          {/* LEFT: 2x2 GRID */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            {metrics.map((m) => (
              <div
                key={m.value}
                className="bg-[#191919] rounded-3xl p-10 sm:p-12 lg:p-16 flex flex-col items-center justify-center text-center gap-6 shadow-xl"
              >
                <span className="text-6xl sm:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-white">
                  {m.value}
                </span>
                <span className="text-xs sm:text-sm lg:text-[15px] text-white/70 font-medium uppercase tracking-[0.1em] leading-relaxed max-w-[200px]">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT: PORTRAIT IMAGE */}
          <div className="flex-1 relative overflow-hidden min-h-[500px]">
            <Image
              src="/sketches/sleek_lady_opt2.png"
              alt="Stick figure lady"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
