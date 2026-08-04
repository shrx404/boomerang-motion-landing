"use client";

import { Activity, TrendingDown, Clock, Zap } from "lucide-react";

const BentoTheme2 = () => {
  return (
    <section className="w-full bg-[#0D0D0D] py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-0 w-full">
        {/* Section header */}
        <div className="mb-10 sm:mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium">
            THEME 2: HARD NUMBERS & ROI
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight tracking-tight text-white max-w-xl">
            Numbers that speak for <span className="italic">themselves</span>.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-3" style={{ gridTemplateRows: "auto auto" }}>
          
          {/* Card A: 89% Resolution */}
          <div className="col-span-12 md:col-span-7 bg-[#F0EBE0] rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative min-h-[380px]">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-end justify-around px-10">
               <div className="w-16 h-32 bg-[#191919] rounded-t-lg"></div>
               <div className="w-16 h-48 bg-[#191919] rounded-t-lg"></div>
               <div className="w-16 h-64 bg-[#191919] rounded-t-lg"></div>
               <div className="w-16 h-full bg-[#191919] rounded-t-lg"></div>
            </div>
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">RESOLUTION RATE</span>
            </div>
            <div className="relative z-10 flex-1 flex flex-col justify-center py-4">
              <h3 className="font-serif font-normal text-[#191919] leading-[0.88] tracking-tight text-[6rem] sm:text-[8rem]">
                89%
              </h3>
              <p className="text-xl text-[#191919]/60 font-medium mt-4">Of inquiries handled without human intervention.</p>
            </div>
          </div>

          {/* Card B: 4x Higher Response */}
          <div className="col-span-12 md:col-span-5 bg-[#1A3D2B] rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative min-h-[380px]">
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium">ENGAGEMENT</span>
            </div>
            <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center">
              <p className="text-7xl font-serif text-white tracking-tight">4<span className="text-4xl text-[#4ade80]">×</span></p>
              <p className="text-white/60 mt-4 text-lg">Higher response rates vs email alone.</p>
            </div>
          </div>

          {/* LEFT COLUMN */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3 min-h-[680px]">
            {/* Card C: Zero Downtime */}
            <div className="bg-[#C41C26] rounded-3xl p-8 flex flex-col justify-center items-center text-center relative shrink-0" style={{ height: "450px" }}>
              <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,#fff_0px,#fff_1px,transparent_1px,transparent_8px)] pointer-events-none rounded-3xl" />
              <Activity className="w-16 h-16 text-white mb-6 animate-pulse" />
              <h3 className="text-5xl font-serif font-normal text-white leading-tight tracking-tight">99.9%</h3>
              <p className="mt-2 text-sm text-white/70 font-medium tracking-widest uppercase">Uptime SLA</p>
            </div>
            
            {/* Card F: Sub-second Latency */}
            <div className="flex-1 min-h-0 bg-[#F0EBE0] rounded-3xl px-6 py-5 flex items-center justify-between overflow-hidden relative">
              <div>
                 <p className="text-3xl font-serif text-[#191919]">{"<"}1s</p>
                 <p className="text-[10px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium mt-1">LATENCY</p>
              </div>
              <Zap className="w-10 h-10 text-[#191919]/20" />
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="col-span-12 md:col-span-3 flex flex-col gap-3 min-h-[680px]">
             <div className="flex-1 bg-[#F0EBE0] rounded-3xl flex flex-col items-center justify-center p-8 relative">
                <TrendingDown className="w-12 h-12 text-[#191919] mb-4" />
                <h3 className="text-3xl font-serif text-[#191919]">-40%</h3>
                <p className="text-xs text-[#191919]/50 mt-2 text-center uppercase tracking-widest">OpEx Reduction</p>
             </div>
             <div className="flex-1 bg-[#1A3D2B] rounded-3xl p-6 flex flex-col items-center justify-center relative text-center">
                 <Clock className="w-10 h-10 text-[#4ade80] mb-4" />
                 <h3 className="text-3xl font-serif text-white">400h+</h3>
                 <p className="text-xs text-white/50 mt-2 uppercase tracking-widest">Saved per month</p>
             </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-12 md:col-span-5 bg-[#F0EBE0] rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative min-h-[680px]">
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">TOTAL VOLUME</span>
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
              <p className="font-serif font-normal text-[#191919] leading-none tracking-tight text-[5rem] sm:text-[7rem] mb-4">
                $2.4B
              </p>
              <p className="text-lg text-[#191919]/55 font-medium">
                In loans actively serviced
              </p>
              <div className="flex gap-4 mt-12 opacity-40">
                <div className="h-8 w-16 md:w-24 bg-[#191919]/20 rounded" />
                <div className="h-8 w-16 md:w-24 bg-[#191919]/20 rounded" />
                <div className="h-8 w-16 md:w-24 bg-[#191919]/20 rounded" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoTheme2;
