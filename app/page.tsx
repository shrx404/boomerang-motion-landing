import { ArrowRight } from "lucide-react";
import Navbar from "./components/Navbar";
import BoomerangVideoBg from "./components/BoomerangVideoBg";

const featureRows = [
  { number: "01", label: "Conversational" },
  { number: "02", label: "Connected" },
  { number: "03", label: "Compliant" },
] as const;

const Home = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero — full first viewport */}
      <section className="relative flex flex-col items-center overflow-hidden min-h-screen">
        {/* Video background at z-0 */}
        <BoomerangVideoBg />

        {/* Hero content at z-10 */}
        <div className="relative z-10 flex flex-col items-center text-center pt-28 sm:pt-32 md:pt-40 px-4 sm:px-6 pb-16 sm:pb-64 w-full">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-[#191919] font-normal">
            Build lasting
            <br />
            relationships.
          </h1>

          <p className="max-w-sm sm:max-w-md mt-6 sm:mt-8 text-[15px] sm:text-base text-[#191919]/70 leading-relaxed">
            Conversational AI platform for modern financial institutions —
            agents that handle the full borrower lifecycle across email, SMS,
            and voice.
          </p>

          <a
            href="#demo"
            className="mt-8 sm:mt-10 px-7 sm:px-8 py-3 sm:py-3.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
          >
            Book A Demo
          </a>
        </div>

        {/* Bottom info panel — anchored to bottom of viewport */}
        <div className="mt-auto w-full max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 border-b-0 pt-8 sm:pt-12 md:pt-16 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 shadow-sm">
            {/* <div className="bg-white/90 backdrop-blur-sm border border-gray-200 border-b-0 pt-8 sm:pt-12 md:pt-16 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 shadow-sm rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl"> */}
            {/* Row 1 — 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
              {/* Left column */}
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
                  WHAT DO WE DO?
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-serif font-normal leading-tight tracking-tight">
                  Conversations that
                  <br className="hidden sm:block" /> build momentum
                </h2>
              </div>

              {/* Right column — bottom-aligned */}
              <div className="flex items-end">
                <p className="text-sm md:text-[15px] text-[#191919]/70 leading-relaxed">
                  Conversational AI built for regulated financial institutions.
                  Agents that hold a real conversation, plug into the systems
                  you run, and show their work.
                </p>
              </div>
            </div>

            {/* Hairline divider */}
            <div className="mt-6 sm:mt-8 md:mt-10 h-px bg-gray-200 w-full" />

            {/* Row 2 — 3 interactive feature rows */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10">
              {featureRows.map((item) => (
                <div
                  key={item.number}
                  className="group flex items-center justify-between bg-[#F4F3F3] hover:bg-[#eaeaea] transition-all duration-200 cursor-pointer px-4 sm:px-6 py-3.5 sm:py-4 rounded-md"
                >
                  <span className="text-sm">
                    <span className="text-[#191919]/40">{item.number}</span>
                    <span className="mx-2 text-[#191919]/30">/</span>
                    <span className="font-medium text-[#191919]/80 group-hover:text-[#191919] transition-colors">
                      {item.label}
                    </span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#191919] group-hover:translate-x-0.5 transition-all duration-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
