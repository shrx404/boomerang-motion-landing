"use client";

import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full bg-[#191919] text-white py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight mb-4 text-white">
            Tailored Plans for Your
            <br className="sm:hidden" /> Manufacturing Scale
          </h2>
          <p className="text-white/60 text-[15px]">
            Flexible pricing for any business size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[850px] mx-auto">
          {/* Starter Card */}
          <div className="bg-[#212121] rounded-[20px] p-8 md:p-10 flex flex-col relative border border-white/[0.04] hover:border-[#F0EBE0]/20 transition-colors">
            <h3 className="text-2xl font-serif font-normal mb-3 text-[#F0EBE0]">Starter</h3>
            <p className="text-[15px] text-white/50 mb-8 leading-relaxed min-h-[44px]">
              This package offers the basic features you need to get started.
            </p>
            <div className="flex items-end gap-2 mb-8">
              <span className="text-[40px] leading-none font-serif font-normal text-[#F0EBE0]">$39</span>
              <span className="text-[15px] text-white/40 mb-1">/ month</span>
            </div>
            <button className="w-full py-3.5 rounded-full border border-white/20 text-sm font-medium hover:bg-[#F0EBE0] hover:text-[#191919] hover:border-[#F0EBE0] transition-colors duration-300 mb-8">
              Get Started
            </button>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-white/10 flex-1"></div>
              <span className="text-[13px] text-white/40">Features</span>
              <div className="h-px bg-white/10 flex-1"></div>
            </div>

            <ul className="flex flex-col gap-4 text-[15px] text-white/70">
              {[
                "Production up to 10,000 units per month",
                "24/7 technical support",
                "Access the production dashboard",
                "Initial setup guide"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-[#F0EBE0] rounded-full p-[3px] mt-0.5 flex items-center justify-center shrink-0">
                    <Check className="w-[10px] h-[10px] text-[#212121] stroke-[3]" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Card */}
          <div className="bg-[#212121] rounded-[20px] p-8 md:p-10 flex flex-col relative border border-[#1A3D2B]/50 hover:border-[#4ade80]/50 transition-colors">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#4ade80]/50 to-transparent"></div>
            <h3 className="text-2xl font-serif font-normal mb-3 text-[#4ade80]">Enterprise</h3>
            <p className="text-[15px] text-white/50 mb-8 leading-relaxed min-h-[44px]">
              This package provides full access to all premium features.
            </p>
            <div className="flex items-end gap-2 mb-8">
              <span className="text-[40px] leading-none font-serif font-normal text-[#4ade80]">$99</span>
              <span className="text-[15px] text-white/40 mb-1">/ month</span>
            </div>
            <button className="w-full py-3.5 rounded-full border border-[#4ade80]/30 text-[#4ade80] text-sm font-medium hover:bg-[#4ade80] hover:text-[#1A3D2B] transition-colors duration-300 mb-8">
              Get Started
            </button>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-white/10 flex-1"></div>
              <span className="text-[13px] text-white/40">Features</span>
              <div className="h-px bg-white/10 flex-1"></div>
            </div>

            <ul className="flex flex-col gap-4 text-[15px] text-white/70">
              {[
                "Unlimited production units",
                "Dedicated account manager",
                "Tailored manufacturing solutions",
                "Predictive production optimization"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-[#1A3D2B] rounded-full p-[3px] mt-0.5 flex items-center justify-center shrink-0">
                    <Check className="w-[10px] h-[10px] text-[#4ade80] stroke-[3]" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Professional Wide Card */}
        <div className="mt-6 max-w-[850px] mx-auto relative overflow-hidden bg-[#1A3D2B] border border-[#4ade80]/20 rounded-[20px] px-6 py-12 md:py-14 text-center flex flex-col items-center justify-center">
          {/* Grid Background Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: '1000px' }}>
            <div 
              className="absolute w-[200%] h-[200%] left-[-50%] top-[-50%] opacity-[0.08]"
              style={{
                backgroundImage: `linear-gradient(to right, #4ade80 1px, transparent 1px), linear-gradient(to bottom, #4ade80 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                transform: 'rotateX(65deg) translateY(-80px)',
                maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 60%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 60%)'
              }}
            ></div>
          </div>
          
          <h3 className="relative z-10 text-2xl font-serif font-normal mb-3 text-white">Professional</h3>
          <p className="relative z-10 text-[15px] text-white/70 max-w-sm mx-auto mb-8 leading-relaxed">
            Designed for greater flexibility, this solution offers advanced tools for custom tailoring to your needs.
          </p>
          <button className="relative z-10 px-8 py-3.5 bg-[#F0EBE0] text-[#191919] rounded-full text-sm font-medium hover:bg-white transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
