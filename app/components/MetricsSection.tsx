import React from "react";

const metrics = [
  { prefix: "Up to", value: "80%", label: "reduction in manual communication" },
  { prefix: "Up to", value: "4x", label: "higher engagement than competitors" },
  { prefix: "Up to", value: "40%", label: "increase in customer engagement" },
  { prefix: "Up to", value: "10x", label: "faster onboarding time" },
] as const;

export default function MetricsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((m, idx) => (
            <div 
              key={idx}
              className="bg-[#F7F7F7] rounded-2xl p-8 md:p-10 flex flex-col justify-center transition-colors hover:bg-[#F0F0F0]"
            >
              <span className="text-gray-500 text-[13px] md:text-sm font-medium mb-4">{m.prefix}</span>
              <h3 className="text-5xl md:text-[3.5rem] font-medium text-[#111111] tracking-tight mb-4 leading-none">{m.value}</h3>
              <p className="text-gray-500 text-[13px] md:text-sm font-medium leading-snug">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
