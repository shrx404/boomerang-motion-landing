import React from "react";
import { ShieldCheck, Layers, MessageSquare, Globe } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-white pt-24 pb-12 sm:pt-32 sm:pb-16 relative overflow-hidden">
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
        
        <div className="mb-16 md:mb-24">
          {/* Header */}
          <div className="max-w-4xl">
            <span className="text-[12px] md:text-sm font-medium tracking-[0.2em] text-[#191919]/40 uppercase">
              Why Choose us
            </span>
            <h2 className="mt-4 sm:mt-6 text-4xl sm:text-5xl lg:text-[4.5rem] font-serif leading-[1.05] tracking-tight text-[#111111]">
              A Legacy of Trust, a Future of Automation
            </h2>
          </div>

          {/* Staggered Grid Layout using explicit placement */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24">
            
            {/* The paragraph - Desktop: Col 2, Row 1 */}
            <div className="md:col-start-2 md:row-start-1 flex items-start pt-2 md:pt-4">
              <p className="text-[#191919]/60 text-sm md:text-[15px] leading-relaxed max-w-[280px]">
                From instant LOS integrations to human-like conversational AI, discover what sets Boomerang apart—and why it's the first choice for modern lenders, servicers, and financial institutions.
              </p>
            </div>
            
            {/* Card 03 - Desktop: Col 3, Row 1 */}
            <div className="md:col-start-3 md:row-start-1 mt-6 md:mt-0">
              <div className="bg-[#F0F0F0] border border-[#E5E5E5] rounded-3xl p-8 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                <span className="text-[#191919]/40 text-sm font-medium mb-8">03</span>
                <MessageSquare className="w-8 h-8 text-[#111111] mb-6 stroke-[1.25]" />
                <h3 className="text-xl font-serif tracking-tight text-[#111111] mb-3">Multi-Channel AI</h3>
                <p className="text-[#191919]/60 text-[15px] leading-relaxed">
                  Engage borrowers contextually across email, SMS, and voice with a single, unified intelligent agent.
                </p>
              </div>
            </div>
            
            {/* Card 01 - Desktop: Col 1, Row 2 */}
            <div className="md:col-start-1 md:row-start-2 mt-6 md:mt-0">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                <span className="text-[#191919]/40 text-sm font-medium mb-8">01</span>
                <ShieldCheck className="w-8 h-8 text-[#111111] mb-6 stroke-[1.25]" />
                <h3 className="text-xl font-serif tracking-tight text-[#111111] mb-3">Compliant by Design</h3>
                <p className="text-[#191919]/60 text-[15px] leading-relaxed">
                  Built for regulated industries with full audit trails, strict access controls, and enterprise-grade security.
                </p>
              </div>
            </div>

            {/* Card 02 - Desktop: Col 2, Row 2 */}
            <div className="md:col-start-2 md:row-start-2 mt-6 md:mt-0">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                <span className="text-[#191919]/40 text-sm font-medium mb-8">02</span>
                <Layers className="w-8 h-8 text-[#111111] mb-6 stroke-[1.25]" />
                <h3 className="text-xl font-serif tracking-tight text-[#111111] mb-3">Seamless Integration</h3>
                <p className="text-[#191919]/60 text-[15px] leading-relaxed">
                  Plugs directly into your existing LOS, CRM, and communication layers without a costly rip-and-replace.
                </p>
              </div>
            </div>

            {/* Card 04 - Desktop: Col 4, Row 2 */}
            <div className="md:col-start-4 md:row-start-2 mt-6 md:mt-0">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                <span className="text-[#191919]/40 text-sm font-medium mb-8">04</span>
                <Globe className="w-8 h-8 text-[#111111] mb-6 stroke-[1.25]" />
                <h3 className="text-xl font-serif tracking-tight text-[#111111] mb-3">Enterprise Scale</h3>
                <p className="text-[#191919]/60 text-[15px] leading-relaxed">
                  Deploy securely across multiple regions with low-latency infrastructure built for high-volume operations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
