"use client";

import { BrainCircuit, Database, Lock, Search, AudioWaveform } from "lucide-react";

const BentoTheme3 = () => {
  return (
    <section className="w-full bg-[#0D0D0D] py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-0 w-full">
        {/* Section header */}
        <div className="mb-10 sm:mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium">
            THEME 3: DEEP TECH & CAPABILITIES
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight tracking-tight text-white max-w-xl">
            Enterprise-grade, <span className="italic">AI-native</span> platform.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-3" style={{ gridTemplateRows: "auto auto" }}>
          
          {/* Card A: Contextual Memory */}
          <div className="col-span-12 md:col-span-7 bg-[#F0EBE0] rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative min-h-[380px]">
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">CONTEXTUAL MEMORY</span>
            </div>
            <div className="relative z-10 flex-1 flex flex-col justify-center py-4">
              <div className="border border-[#191919]/10 rounded-xl p-6 bg-white/50 backdrop-blur max-w-md shadow-sm">
                 <div className="flex items-center gap-3 mb-3 text-[#191919]/40">
                   <BrainCircuit className="w-4 h-4" />
                   <span className="text-xs font-mono uppercase">Memory Retrieval</span>
                 </div>
                 <p className="text-sm font-medium text-[#191919]">"I see you mentioned in May that you prefer to be contacted via text. Should I send the document there?"</p>
              </div>
            </div>
          </div>

          {/* Card B: Plug & Play Integrations */}
          <div className="col-span-12 md:col-span-5 bg-[#1A3D2B] rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative min-h-[380px]">
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium">PLUG & PLAY</span>
            </div>
            <div className="relative z-10 flex-1 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                 <div className="bg-white/10 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3"><Database className="w-5 h-5 text-white/70" /><span className="text-white text-sm">Salesforce</span></div>
                 <div className="bg-white/10 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3"><Database className="w-5 h-5 text-white/70" /><span className="text-white text-sm">HubSpot</span></div>
                 <div className="bg-white/10 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3"><Database className="w-5 h-5 text-white/70" /><span className="text-white text-sm">Encompass</span></div>
                 <div className="bg-white/10 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3"><Database className="w-5 h-5 text-white/70" /><span className="text-white text-sm">Custom API</span></div>
              </div>
            </div>
          </div>

          {/* LEFT COLUMN */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3 min-h-[680px]">
            {/* Card C: SOC2 Compliant */}
            <div className="bg-[#C41C26] rounded-3xl p-8 flex flex-col justify-center items-center text-center relative shrink-0" style={{ height: "450px" }}>
              <Lock className="w-16 h-16 text-white mb-6" />
              <h3 className="text-4xl font-serif font-normal text-white leading-tight tracking-tight">SOC 2<br/>Type II</h3>
              <p className="mt-4 text-sm text-white/70 font-medium px-4">End-to-end encryption & strict access controls.</p>
            </div>
            
            {/* Card F: Voice Cloning */}
            <div className="flex-1 min-h-0 bg-[#F0EBE0] rounded-3xl px-6 py-5 flex flex-col items-center justify-center overflow-hidden relative">
               <AudioWaveform className="w-12 h-12 text-[#191919]/80 mb-2" />
               <p className="text-[10px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">NEURAL VOICE</p>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="col-span-12 md:col-span-3 flex flex-col gap-3 min-h-[680px]">
             <div className="flex-1 bg-[#F0EBE0] rounded-3xl flex flex-col items-start justify-center p-8 relative">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium mb-4">LIVE SENTIMENT</span>
                <div className="w-full space-y-3">
                   <div className="w-full flex justify-between items-center"><span className="text-sm font-medium text-green-700">Positive</span><span className="text-sm">74%</span></div>
                   <div className="w-full flex justify-between items-center"><span className="text-sm font-medium text-gray-600">Neutral</span><span className="text-sm">21%</span></div>
                   <div className="w-full flex justify-between items-center"><span className="text-sm font-medium text-red-600">Urgent</span><span className="text-sm">5%</span></div>
                </div>
             </div>
             <div className="flex-1 bg-[#1A3D2B] rounded-3xl p-6 flex flex-col items-center justify-center relative">
                 <Search className="w-10 h-10 text-[#4ade80] mb-3" />
                 <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-medium text-center">Semantic<br/>Search</span>
             </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-12 md:col-span-5 bg-[#F0EBE0] rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative min-h-[680px]">
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">AUDIT TRAIL</span>
            </div>
            <div className="relative z-10 flex-1 flex flex-col justify-center pl-4 border-l-2 border-[#191919]/10 space-y-6 ml-4">
              <div className="relative">
                 <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#191919]/30" />
                 <p className="text-xs text-[#191919]/40 font-mono mb-1">09:41:02 AM</p>
                 <p className="text-sm font-medium text-[#191919]">Inbound call received</p>
              </div>
              <div className="relative">
                 <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#191919]" />
                 <p className="text-xs text-[#191919]/40 font-mono mb-1">09:41:04 AM</p>
                 <p className="text-sm font-medium text-[#191919]">Intent classified: Loan Renewal</p>
              </div>
              <div className="relative">
                 <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#191919]" />
                 <p className="text-xs text-[#191919]/40 font-mono mb-1">09:42:15 AM</p>
                 <p className="text-sm font-medium text-[#191919]">Action executed: Send Document</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoTheme3;
