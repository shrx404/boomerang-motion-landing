import React from "react";

const SocialProofSection = () => {
  return (
    <section className="w-full bg-white py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="inline-block border border-gray-300 rounded-full px-4 py-1.5 mb-8">
          <span className="text-[11px] font-bold text-[#191919] tracking-widest">
            // What People Say About Us? //
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-serif font-normal tracking-tight text-[#191919] mb-24">
          Don't take our word for it.
        </h2>

        <div className="w-full flex flex-col">
          <div className="flex items-center gap-3 pb-6">
            <span className="text-sm font-bold text-[#191919]">9677</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">
              VISITORS ENGAGED
            </span>
          </div>

          <div className="w-full h-px bg-gray-200" />

          <div className="py-6 sm:py-8 overflow-hidden">
            <span
              className="text-[6rem] sm:text-[9rem] md:text-[12rem] lg:text-[15rem] leading-none font-serif font-normal tracking-tighter text-[#191919] block"
              style={{ letterSpacing: "-0.05em" }}
            >
              26,900,789
            </span>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <span className="text-sm font-bold text-[#191919]">9677</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">
              VISITORS ENGAGED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
