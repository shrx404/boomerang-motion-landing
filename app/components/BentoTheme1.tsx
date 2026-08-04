"use client";

import { MessageSquare, Phone, Mail, ShieldAlert, ArrowRightLeft, User, CheckCircle2 } from "lucide-react";

const BentoTheme1 = () => {
  return (
    <section className="w-full bg-[#0D0D0D] py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-0 w-full">
        {/* Section header */}
        <div className="mb-10 sm:mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium">
            THEME 1: USE-CASES & WORKFLOWS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight tracking-tight text-white max-w-xl">
            Built for the jobs you <span className="italic">actually</span> do.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-3" style={{ gridTemplateRows: "auto auto" }}>
          
          {/* Card A: Automated Collections */}
          <div className="col-span-12 md:col-span-7 bg-[#F0EBE0] rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative min-h-[380px]">
            <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-[#d6ccbd]/50 pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">AUTOMATED COLLECTIONS</span>
            </div>
            <div className="relative z-10 flex-1 flex flex-col justify-center py-4">
               <div className="flex gap-4 items-center bg-white rounded-2xl p-4 shadow-sm w-fit mb-6">
                 <div className="bg-green-100 p-2 rounded-full"><CheckCircle2 className="w-6 h-6 text-green-600"/></div>
                 <div>
                    <p className="text-sm font-bold text-[#191919]">Payment Received</p>
                    <p className="text-xs text-[#191919]/60">$450.00 via SMS link</p>
                 </div>
               </div>
              <h3 className="font-serif font-normal text-[#191919] leading-[0.88] tracking-tight text-5xl sm:text-6xl">
                Recover <br /> with ease.
              </h3>
            </div>
          </div>

          {/* Card B: Loan Renewals */}
          <div className="col-span-12 md:col-span-5 bg-[#1A3D2B] rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative min-h-[380px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/[0.07] pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium">LOAN RENEWALS</span>
            </div>
            <div className="relative z-10 flex-1 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
                 <p className="text-white/80 text-sm">Day 0: Notice Sent</p>
              </div>
              <div className="w-px h-6 bg-white/20 ml-1" />
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
                 <p className="text-white/80 text-sm">Day 2: Borrower Confirms</p>
              </div>
              <div className="w-px h-6 bg-white/20 ml-1" />
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-white" />
                 <p className="text-white font-medium text-sm">Day 2: Automatically Renewed</p>
              </div>
            </div>
          </div>

          {/* LEFT COLUMN */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3 min-h-[680px]">
            {/* Card C: Compliance Alerts */}
            <div className="bg-[#C41C26] rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative shrink-0" style={{ height: "450px" }}>
              <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,#fff_0px,#fff_1px,transparent_1px,transparent_8px)] pointer-events-none rounded-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldAlert className="w-5 h-5 text-white/70" />
                  <span className="text-xs text-white/70 font-medium tracking-wide">COMPLIANCE ALERT</span>
                </div>
                <h3 className="text-3xl font-serif font-normal text-white leading-tight tracking-tight">Audit Log<br/>Captured ✦</h3>
                <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-[260px]">
                  Conversation #8492 flagged for review. Full transcript and metadata securely stored.
                </p>
              </div>
            </div>
            
            {/* Card F: Instant Support */}
            <div className="flex-1 min-h-0 bg-[#F0EBE0] rounded-3xl px-6 py-5 flex flex-col justify-center overflow-hidden relative">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium mb-4">INSTANT SUPPORT</span>
              <div className="flex flex-col gap-2">
                <div className="bg-[#191919]/[0.07] rounded-2xl rounded-tl-sm px-3.5 py-2 w-fit">
                  <p className="text-xs text-[#191919]/70">How do I update my address?</p>
                </div>
                <div className="bg-[#191919] rounded-2xl rounded-tr-sm px-3.5 py-2 self-end w-fit">
                  <p className="text-xs text-white">You can do it right here. What's the new zip?</p>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="col-span-12 md:col-span-3 flex flex-col gap-3 min-h-[680px]">
             <div className="flex-1 bg-[#F0EBE0] rounded-3xl flex flex-col items-center justify-center p-8 relative">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium absolute top-6 left-6">SEAMLESS HANDOFF</span>
                <ArrowRightLeft className="w-12 h-12 text-[#191919]/20" />
                <p className="mt-4 text-center text-sm text-[#191919]/60">AI escalates to a human agent instantly when requested.</p>
             </div>
             <div className="flex-1 bg-[#1A3D2B] rounded-3xl p-6 flex flex-col items-center justify-center relative">
                 <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-[#4ade80]/20 flex items-center justify-center text-[#4ade80]">AI</div>
                    <ArrowRightLeft className="w-5 h-5 text-white/40" />
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white"><User className="w-6 h-6"/></div>
                 </div>
             </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-12 md:col-span-5 bg-[#F0EBE0] rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative min-h-[680px]">
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">OMNICHANNEL ENGINE</span>
            </div>
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-8">
               <h3 className="font-serif text-4xl text-[#191919] text-center leading-tight">One brain.<br/>Every channel.</h3>
               <div className="flex flex-wrap justify-center items-center gap-6">
                 <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm"><Phone className="w-7 h-7 text-[#191919]"/></div>
                 <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm"><MessageSquare className="w-7 h-7 text-[#191919]"/></div>
                 <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm"><Mail className="w-7 h-7 text-[#191919]"/></div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoTheme1;
