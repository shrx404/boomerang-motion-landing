import React from "react";

const SocialProofSection = () => {
  return (
    <section className="w-full bg-white pt-20 pb-24 sm:pt-24 sm:pb-32">
      <div className="w-full px-6 sm:px-10 md:px-14">
        <div className="inline-block border border-gray-300 rounded-full px-3 py-1 mb-5">
          <span className="text-[10px] font-bold text-[#191919] tracking-widest">
            // What People Say About Us? //
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-serif font-normal tracking-tight text-[#191919] mb-16 sm:mb-20">
          Don't take our word for it.
        </h2>

        <div className="w-full flex flex-col">
          <div className="flex items-center gap-3 pb-4">
            <span className="text-sm font-bold text-[#191919]">9677</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">
              VISITORS ENGAGED
            </span>
          </div>

          <div className="w-full h-px bg-gray-200" />

          <div className="pt-2 pb-12 sm:pb-16 overflow-hidden">
            <span
              className="text-[6rem] sm:text-[9rem] md:text-[13rem] lg:text-[16rem] leading-[0.9] font-serif font-normal tracking-tighter text-[#191919] block"
              style={{ letterSpacing: "-0.06em" }}
            >
              26,900,789
            </span>
          </div>

          <div className="flex items-center gap-3">
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
