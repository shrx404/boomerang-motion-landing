import React from "react";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="w-full bg-[#191919] text-white pt-20 pb-24 sm:pt-24 sm:pb-32">
      <div className="w-full px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left Column */}
          <div className="md:col-span-7 flex flex-col items-start">
            <div className="inline-block bg-[#1A3D2B] text-[#4ade80] rounded-sm px-2.5 py-1 mb-5">
              <span className="text-[10px] font-bold uppercase tracking-widest">
                // About Us? //
              </span>
            </div>

            <p className="text-2xl sm:text-3xl md:text-[2.25rem] font-sans tracking-tight text-white/40 leading-[1.3] max-w-2xl">
              <span className="text-white">
                ReelUp is a shoppable video platform built for modern D2C
                brands.
              </span>{" "}
              We turn TikToks, Reels, and UGC into interactive
              storefronts—letting customers browse, select, and buy products
              directly inside videos on your site, app, or emails.
            </p>

            {/* Image Box */}
            <div className="mt-20 w-[250px] h-[250px] bg-[#F4F3F3] rounded-2xl overflow-hidden relative">
              <img
                src="/sketches/architect-hand-drawn.png"
                alt="Dark Mode Blueprint Sketch"
                className="object-cover w-full h-full"
                // className="object-cover w-full h-full contrast-[115%] brightness-[150%]"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 flex flex-col justify-end md:pl-10 lg:pl-16 mt-12 md:mt-0">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-white mb-4">
              8000+ Brands
            </h2>
            <p className="text-[13px] text-white/50 leading-relaxed mb-10 max-w-[280px]">
              With fast setup, deep Shopify integration, and AI-powered
              optimization, ReelUp helps brands boost conversions, engagement
            </p>
            <button className="self-start px-8 py-3.5 bg-white text-[#191919] text-[13px] font-semibold rounded-full hover:bg-gray-200 transition-colors duration-200">
              Get Started — For Free!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
