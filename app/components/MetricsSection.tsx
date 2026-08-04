import React from "react";
import { ShieldCheck, Layers, MessageSquare, Globe } from "lucide-react";

const metrics = [
  { prefix: "Up to", value: "80%", label: "reduction in manual communication" },
  { prefix: "Up to", value: "4x", label: "higher engagement than competitors" },
  { prefix: "Up to", value: "40%", label: "increase in customer engagement" },
  { prefix: "Up to", value: "10x", label: "faster onboarding time" },
] as const;

export default function MetricsSection() {
  return (
    <section className="w-full bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 relative overflow-hidden">
      {/* Background Vertical Lines for Design */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="w-full px-6 sm:px-10 md:px-14 grid grid-cols-4 gap-4 md:gap-6 h-full">
          <div className="border-l border-gray-100 h-full"></div>
          <div className="border-l border-gray-100 h-full"></div>
          <div className="border-l border-gray-100 h-full"></div>
          <div className="border-l border-r border-gray-100 h-full"></div>
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 md:px-14 relative z-10">
        
        {/* -- WHY CHOOSE US SECTION -- */}
        <div className="mb-24 sm:mb-32">
          {/* Header */}
          <div className="max-w-4xl">
            <span className="text-[12px] md:text-sm font-medium tracking-[0.2em] text-[#191919]/40 uppercase">
              Why Choose us
            </span>
            <h2 className="mt-4 sm:mt-6 text-4xl sm:text-5xl lg:text-[4.5rem] font-serif leading-[1.05] tracking-tight text-[#111111]">
              A Legacy of Trust, a Future of Automation
            </h2>
          </div>

          {/* Staggered Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24">
            
            {/* ROW 1 */}
            <div className="hidden md:block col-span-1"></div>
            
            <div className="col-span-1 flex items-start md:pt-4">
              <p className="text-[#191919]/60 text-[15px] sm:text-base leading-relaxed">
                From instant LOS integrations to human-like conversational AI, discover what sets Boomerang apart—and why it's the first choice for modern lenders, servicers, and financial institutions.
              </p>
            </div>
            
            <div className="col-span-1">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                <span className="text-[#191919]/30 text-sm font-medium mb-8">03</span>
                <MessageSquare className="w-8 h-8 text-[#111111] mb-6 stroke-[1.25]" />
                <h3 className="text-xl font-serif tracking-tight text-[#111111] mb-3">Multi-Channel AI</h3>
                <p className="text-[#191919]/60 text-[15px] leading-relaxed">
                  Engage borrowers contextually across email, SMS, and voice with a single, unified intelligent agent.
                </p>
              </div>
            </div>
            
            <div className="hidden md:block col-span-1"></div>

            {/* ROW 2 */}
            <div className="col-span-1 mt-4 md:mt-0">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                <span className="text-[#191919]/30 text-sm font-medium mb-8">01</span>
                <ShieldCheck className="w-8 h-8 text-[#111111] mb-6 stroke-[1.25]" />
                <h3 className="text-xl font-serif tracking-tight text-[#111111] mb-3">Compliant by Design</h3>
                <p className="text-[#191919]/60 text-[15px] leading-relaxed">
                  Built for regulated industries with full audit trails, strict access controls, and enterprise-grade security.
                </p>
              </div>
            </div>

            <div className="col-span-1 mt-4 md:mt-0">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                <span className="text-[#191919]/30 text-sm font-medium mb-8">02</span>
                <Layers className="w-8 h-8 text-[#111111] mb-6 stroke-[1.25]" />
                <h3 className="text-xl font-serif tracking-tight text-[#111111] mb-3">Seamless Integration</h3>
                <p className="text-[#191919]/60 text-[15px] leading-relaxed">
                  Plugs directly into your existing LOS, CRM, and communication layers without a costly rip-and-replace.
                </p>
              </div>
            </div>

            <div className="hidden md:block col-span-1"></div>

            <div className="col-span-1 mt-4 md:mt-0">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                <span className="text-[#191919]/30 text-sm font-medium mb-8">04</span>
                <Globe className="w-8 h-8 text-[#111111] mb-6 stroke-[1.25]" />
                <h3 className="text-xl font-serif tracking-tight text-[#111111] mb-3">Enterprise Scale</h3>
                <p className="text-[#191919]/60 text-[15px] leading-relaxed">
                  Deploy securely across multiple regions with low-latency infrastructure built for high-volume operations.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* -- EXISTING METRICS SECTION -- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-16 border-t border-gray-100">
          {metrics.map((m, idx) => (
            <div 
              key={idx}
              className="bg-[#F7F7F7] rounded-2xl p-8 md:p-10 flex flex-col justify-center transition-colors hover:bg-[#F0F0F0]"
            >
              <span className="text-gray-500 text-[13px] md:text-sm font-medium mb-4">{m.prefix}</span>
              <h3 className="text-5xl md:text-[3.5rem] font-serif tracking-tight text-[#111111] mb-4 leading-none">{m.value}</h3>
              <p className="text-gray-500 text-[13px] md:text-sm font-medium leading-snug">{m.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
