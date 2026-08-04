import React from "react";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="w-full bg-[#191919] text-white py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left Column */}
          <div className="md:col-span-7 flex flex-col items-start">
            <div className="inline-block bg-white text-[#191919] rounded-sm px-3 py-1 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest">
                // About Us? //
              </span>
            </div>

            <p className="text-2xl sm:text-3xl md:text-[2rem] font-sans tracking-tight text-white/40 leading-snug max-w-xl">
              <span className="text-white">
                ReelUp is a shoppable video platform built for modern D2C
                brands.
              </span>{" "}
              We turn TikToks, Reels, and UGC into interactive
              storefronts—letting customers browse, select, and buy products
              directly inside videos on your site, app, or emails.
            </p>

            {/* Image Box */}
            <div className="mt-16 sm:mt-24 w-48 h-48 bg-[#F4F3F3] rounded-2xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1521369909029-2afed882ba54?q=80&w=800&auto=format&fit=crop"
                alt="Hat on stool"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 flex flex-col justify-end md:pl-8 lg:pl-12 mt-12 md:mt-0">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-white mb-6">
              8000+ Brands
            </h2>
            <p className="text-[13px] text-white/50 leading-relaxed mb-8 max-w-sm">
              With fast setup, deep Shopify integration, and AI-powered
              optimization, ReelUp helps brands boost conversions, engagement
            </p>
            <button className="self-start px-8 py-3.5 bg-white text-[#191919] text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors duration-200">
              Get Started — For Free!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
