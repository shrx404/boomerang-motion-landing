"use client";

import { ArrowRight } from "lucide-react";
import Navbar from "./components/Navbar";
import BoomerangVideoBg from "./components/BoomerangVideoBg";
import Footer from "./components/Footer";
import BentoSection from "./components/BentoSection";

/* ─── static data ─────────────────────────────────────────────────────────── */

const featureRows = [
  { number: "01", label: "Conversational" },
  { number: "02", label: "Connected" },
  { number: "03", label: "Compliant" },
] as const;

const steps = [
  {
    number: "01",
    heading: "Connect your stack",
    body: "Boomerang plugs into your LOS, CRM, and communication layer in hours — no rip-and-replace required.",
  },
  {
    number: "02",
    heading: "Deploy an agent",
    body: "Configure the borrower journey: collections, renewals, welcome, or servicing. The agent learns your voice.",
  },
  {
    number: "03",
    heading: "Watch it work",
    body: "Real-time dashboards show every conversation, decision, and outcome — with a full audit trail baked in.",
  },
] as const;

const channels = [
  {
    tag: "EMAIL",
    heading: "Inbox-native conversations",
    body: "Multi-turn threads that read context, remember history, and escalate when a human is needed — all inside the borrower's email client.",
    stat: "62%",
    statLabel: "reduction in manual follow-ups",
  },
  {
    tag: "SMS",
    heading: "Text that converts",
    body: "Compliant two-way SMS with opt-out management, natural language parsing, and live handoff to advisors.",
    stat: "4×",
    statLabel: "higher response rate vs email alone",
  },
  {
    tag: "VOICE",
    heading: "Calls without a call center",
    body: "AI voice agents that handle FAQs, payment reminders, and status updates — with sub-second latency and warm transfers.",
    stat: "89%",
    statLabel: "of calls resolved without a human",
  },
] as const;

const metrics = [
  { value: "120+", label: "Financial institutions" },
  { value: "18M+", label: "Borrower conversations" },
  { value: "$2.4B", label: "In loans serviced" },
  { value: "99.9%", label: "Uptime SLA" },
] as const;

const testimonials = [
  {
    quote:
      "We went from 400 manual follow-up calls a day to almost none. The agents handle nuance we didn't think was possible.",
    author: "Sarah K.",
    title: "VP of Servicing, Regional Credit Union",
  },
  {
    quote:
      "The audit trail alone saved us three weeks during our last exam. Compliance loves it; borrowers don't even know they're talking to AI.",
    author: "Marcus T.",
    title: "Chief Risk Officer, Community Bank",
  },
] as const;

/* ─── page ────────────────────────────────────────────────────────────────── */

const Home = () => {
  return (
    <div className="bg-white overflow-x-hidden scroll-smooth">
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      {/*
        The hero section now uses `pb-0` so the info panel sits right at the
        very bottom edge. The panel itself has `mb-[-120px]` to pull it down
        and overlap the white HOW-IT-WORKS section below.
      */}
      <section className="relative flex flex-col items-center overflow-hidden min-h-screen pb-0">
        {/* Video background */}
        <BoomerangVideoBg />

        {/* Hero copy */}
        <div className="relative z-10 flex flex-col items-center text-center pt-28 sm:pt-32 md:pt-40 px-4 sm:px-6 pb-24 sm:pb-32 md:pb-48 w-full">
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

        {/*
          Info panel — perfectly integrated cutout effect (squircle).
          The side bars create the flat bottom, and the radial gradients create the inverse rounded corners.
        */}
        <div className="mt-auto w-full relative z-20 flex justify-center items-end">
          {/* Left white bar (hidden on mobile to allow full-width panel) */}
          <div className="hidden md:block flex-1 h-[80px] lg:h-[120px] bg-white relative">
            <div
              className="absolute top-[-48px] right-0 w-[48px] h-[48px] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 0 0, transparent 47.5px, white 48px)",
              }}
            />
          </div>

          {/* Center Info Panel */}
          <div className="w-full md:w-auto md:min-w-[720px] lg:min-w-[900px] max-w-5xl bg-white rounded-t-[32px] md:rounded-t-[48px] pt-10 sm:pt-12 md:pt-16 px-6 sm:px-8 md:px-12 pb-8 md:pb-12 relative mx-4 sm:mx-6 md:mx-0 shadow-[0_-15px_40px_rgba(0,0,0,0.04)] md:shadow-none border border-gray-100 md:border-none">
            {/* Row 1 — 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
                  WHAT DO WE DO?
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-serif font-normal leading-tight tracking-tight">
                  Conversations that
                  <br className="hidden sm:block" /> build momentum
                </h2>
              </div>
              <div className="flex items-end">
                <p className="text-sm md:text-[15px] text-[#191919]/70 leading-relaxed">
                  Conversational AI built for regulated financial institutions.
                  Agents that hold a real conversation, plug into the systems
                  you run, and show their work.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-6 sm:mt-8 md:mt-10 h-px bg-gray-200 w-full" />

            {/* Feature pill rows */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-1 gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10 md:flex md:flex-col mx-auto"> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10">
              {featureRows.map((item) => (
                <div
                  key={item.number}
                  className=" group flex items-center justify-between bg-[#F4F3F3] hover:bg-[#eaeaea] transition-all duration-200 cursor-pointer px-4 sm:px-6 py-3.5 sm:py-4 rounded-md"
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

          {/* Right white bar */}
          <div className="hidden md:block flex-1 h-[80px] lg:h-[120px] bg-white relative">
            <div
              className="absolute top-[-48px] left-0 w-[48px] h-[48px] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 100% 0, transparent 47.5px, white 48px)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
      {/*
        The top padding is reduced because the Info panel now seamlessly
        connects to this section's white background.
      */}
      <section
        id="product"
        className="w-full pt-16 sm:pt-20 md:pt-12 pb-24 sm:pb-32 md:pb-32"
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-4 mb-16 sm:mb-8 px-6 sm:px-10 md:px-14">
          {/* LEFT — heading */}
          <div className="shrink-0">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">
              HOW IT WORKS
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight tracking-tight">
              From setup to
              <br />
              live in days.
            </h2>
          </div>

          {/* RIGHT — descriptor */}
          <p className="text-sm text-[#191919]/60 leading-relaxed max-w-[280px] sm:text-right sm:ml-auto">
            No lengthy implementations. Boomerang is built to ship fast and
            integrate into workflows you already run.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border-x border-gray-200 w-full">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white px-6 sm:px-10 md:px-14 py-10 sm:py-16 md:py-24 flex flex-col gap-6 md:gap-8"
            >
              <span className="text-sm font-medium text-[#191919]/40 tracking-widest">
                {step.number}
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal tracking-tight leading-snug">
                  {step.heading}
                </h3>
                <p className="text-[15px] text-[#191919]/60 leading-relaxed mt-4 sm:mt-6">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CHANNELS ────────────────────────────────────────────────────── */}
      <section id="solutions" className="w-full bg-[#F4F3F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">
            THE PLATFORM
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight tracking-tight max-w-xl">
            One agent, every channel.
          </h2>

          <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {channels.map((ch) => (
              <div
                key={ch.tag}
                className="bg-white p-8 sm:p-10 flex flex-col gap-5 rounded-xl group hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-[11px] font-medium tracking-[0.18em] text-[#191919]/40 uppercase">
                  {ch.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-normal tracking-tight leading-snug">
                  {ch.heading}
                </h3>
                <p className="text-sm text-[#191919]/60 leading-relaxed">
                  {ch.body}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <p className="text-3xl sm:text-4xl font-serif font-normal tracking-tight">
                    {ch.stat}
                  </p>
                  <p className="mt-1 text-xs text-[#191919]/50">
                    {ch.statLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METRICS ─────────────────────────────────────────────────────── */}
      <section className="w-full border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100">
            {metrics.map((m) => (
              <div
                key={m.value}
                className="bg-white px-6 sm:px-8 py-10 sm:py-12 flex flex-col gap-2"
              >
                <span className="text-4xl sm:text-5xl font-serif font-normal tracking-tight">
                  {m.value}
                </span>
                <span className="text-xs text-[#191919]/50 leading-snug">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section
        id="company"
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">
          IN THEIR WORDS
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight tracking-tight max-w-lg">
          Institutions that trust the loop.
        </h2>

        <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="border border-gray-200 p-8 sm:p-10 flex flex-col justify-between gap-10 rounded-xl"
            >
              <p className="text-lg sm:text-xl font-serif font-normal leading-snug tracking-tight text-[#191919]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium text-[#191919]">{t.author}</p>
                <p className="text-xs text-[#191919]/50 mt-0.5">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BENTO GRID ──────────────────────────────────────────────────── */}
      <BentoSection />

      {/* ── PRICING TEASER ──────────────────────────────────────────────── */}
      <section id="pricing" className="w-full bg-[#F4F3F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-center">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">
              PRICING
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight tracking-tight">
              Priced for
              <br />
              scale.
            </h2>
            <p className="mt-6 text-sm text-[#191919]/60 leading-relaxed max-w-sm">
              Usage-based pricing that grows with your portfolio — no per-seat
              fees, no hidden minimums. Talk to us about your volume.
            </p>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
            >
              Talk to sales <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                tier: "Starter",
                note: "Up to 10k conversations / mo",
                price: "Custom",
              },
              {
                tier: "Growth",
                note: "10k – 100k conversations / mo",
                price: "Custom",
              },
              {
                tier: "Enterprise",
                note: "Unlimited + dedicated support",
                price: "Custom",
              },
            ].map((p) => (
              <div
                key={p.tier}
                className="group flex items-center justify-between bg-white border border-gray-200 px-6 py-5 rounded-lg hover:border-[#191919]/30 transition-colors duration-200 cursor-pointer"
              >
                <div>
                  <p className="text-sm font-medium text-[#191919]">{p.tier}</p>
                  <p className="text-xs text-[#191919]/50 mt-0.5">{p.note}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-[#191919]/60">
                    {p.price}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#191919] group-hover:translate-x-0.5 transition-all duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + FOOTER — together they fill exactly one screen height ── */}
      <div className="h-screen w-full bg-[#191919] flex flex-col overflow-hidden">
        {/* ── CLOSING CTA ─────────────────────────────────────────────────── */}
        <section
          id="demo"
          className="flex-1 w-full flex items-center justify-center"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-8">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium">
              GET STARTED
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal leading-tight tracking-tight text-white max-w-2xl">
              Ready to close the loop?
            </h2>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Book a 30-minute demo and see Boomerang running on your actual
              loan data — no pitch deck, no slides.
            </p>
            <a
              href="mailto:demo@boomerang.ai"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#191919] text-sm font-medium rounded-lg hover:bg-white/90 transition-colors duration-200"
            >
              Book A Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ── FOOTER ──────────────────────────────────────────────────────── */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
