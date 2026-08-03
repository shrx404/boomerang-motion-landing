"use client";

/*
  Grid anatomy — matches reference image exactly:

  ┌────────────────────────────────────────┬──────────────────────┐  ← row 1 (380px)
  │  Card A  (col 1–7)                     │  Card B (col 8–12)   │
  │  cream · large headline                │  forest green         │
  └────────────┬────────────┬──────────────┴──────────────────────┘  ← row 2 (480px)
  │ LEFT COL   │ MID COL   │                                       │
  │ (col 1–3)  │ (col 4–6) │  Card E  (col 7–12)                  │
  │ ┌─Card C─┐ │ ┌─D-1──┐ │  cream · large landscape              │
  │ │ red    │ │ │ logo  │ │                                       │
  │ │ square │ │ ├─D-2──┤ │                                       │
  │ ├─Card F─┤ │ │ chat  │ │                                       │
  │ │ cream  │ │ └──────┘ │                                       │
  │ └────────┘ └──────────┘ └───────────────────────────────────┘

  Bottom columns: 3 + 3 + 6 = 12
  Row 2 height = 480px → col-span-3 ≈ 341px wide → Card C at ~340px tall ≈ square
  Card E: col-span-6 ≈ 694px wide × 480px tall → landscape ✓
  D-1 and D-2: each flex-1 → 50%/50% of row height ✓
  Card C: h-[340px] (square) · Card F: flex-1 (remaining ~128px)
*/

const BentoSection = () => {
  return (
    <section className="w-full bg-[#0D0D0D] py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-0 w-full">
        {/* ── Section header */}
        <div className="mb-10 sm:mb-14 lg:px-0 px-0">
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium">
            THE FULL PICTURE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight tracking-tight text-white max-w-xl">
            Everything you need, <span className="italic">nothing</span> you
            don&apos;t.
          </h2>
        </div>

        {/* ────────────────────────────────────────────────────────────────
            BENTO GRID
            12 cols · row 1: 380px · row 2: 480px
        ──────────────────────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-12 gap-3"
          style={{ gridTemplateRows: "380px 680px" }}
          // style={{ gridTemplateRows: "380px 480px" }}
        >
          {/* ── CARD A — Large cream headline (col 1-7, row 1) ─────────── */}
          <div className="col-span-7 row-start-1 bg-[#F0EBE0] rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-[#d6ccbd]/50 pointer-events-none" />
            <div className="absolute bottom-8 right-20 w-36 h-36 rounded-full bg-[#e2d9cc]/70 pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">
                CONVERSATIONAL AI
              </span>
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-center py-4">
              <h3
                className="font-serif font-normal text-[#191919] leading-[0.88] tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 5.5vw, 5.5rem)" }}
              >
                close
                <br />
                the&nbsp;loop.
              </h3>

              <div className="flex flex-wrap gap-2 mt-8">
                {["Email", "SMS", "Voice", "Compliant", "Audit-ready"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-[#191919]/60 bg-[#191919]/[0.07] border border-[#191919]/[0.1] rounded-full px-3.5 py-1.5"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="relative z-10">
              <p className="text-sm text-[#191919]/50 leading-relaxed max-w-xs">
                Boomerang agents hold real conversations across every channel —
                and show their work every step of the way.
              </p>
            </div>
          </div>

          {/* ── CARD B — Forest green connected visual (col 8-12, row 1) ── */}
          <div className="col-span-5 row-start-1 bg-[#1A3D2B] rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/[0.07] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-white/[0.05] pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium">
                CONNECTED
              </span>
            </div>

            <div className="relative z-10 flex-1 flex items-center justify-center">
              <div className="flex items-center gap-6 w-full max-w-[280px]">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/[0.1] border border-white/20 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-7 h-7 text-white/70"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] text-white/40">Your LOS</span>
                </div>

                <div className="flex items-center gap-1.5 flex-1">
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-[#4ade80]/60" />
                  <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse shrink-0" />
                  <div className="h-px flex-1 bg-gradient-to-r from-[#4ade80]/60 to-white/20" />
                </div>

                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/[0.1] border border-white/20 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-7 h-7 text-white/70"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] text-white/40">Boomerang</span>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <p className="text-3xl font-serif font-normal text-white leading-none tracking-tight">
                18M+
              </p>
              <p className="mt-1 text-xs text-white/40">
                borrower conversations handled
              </p>
            </div>
          </div>

          {/* ── LEFT COLUMN (col 1-3, row 2) ──────────────────────────────
               Flex-col holding:
               • Card C — red, square (h-[340px] ≈ col-span-3 width)
               • Card F — cream, chat preview (flex-1, remaining height)
          ─────────────────────────────────────────────────────────────── */}
          <div className="col-span-4 row-start-2 flex flex-col gap-3">
            {/* Card C — RED, approximately square */}
            <div
              className="bg-[#C41C26] rounded-3xl p-7 flex flex-col justify-between overflow-hidden relative shrink-0"
              style={{ height: "450px" }}
            >
              <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(45deg,#fff_0px,#fff_1px,transparent_1px,transparent_8px)] pointer-events-none rounded-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] text-white/70 font-medium">
                    15 Mar
                  </span>
                  <span className="text-[11px] text-white/50">09:00–10:00</span>
                </div>

                <h3 className="text-2xl font-serif font-normal text-white leading-tight tracking-tight">
                  Loan
                  <br />
                  Renewal
                  <span className="inline-block ml-2">✦</span>
                </h3>

                <p className="mt-3 text-xs text-white/60 leading-relaxed">
                  Automated renewal outreach triggered for 847 borrowers
                  expiring this quarter.
                </p>
              </div>

              <div className="relative z-10">
                <span className="text-[11px] font-medium text-white/60 border border-white/20 rounded-full px-3 py-1">
                  Boomerang AI
                </span>
              </div>
            </div>

            {/* Card F — cream, compact chat preview (flex-1) */}
            <div className="flex-1 bg-[#F0EBE0] rounded-3xl px-5 py-4 flex items-center justify-between overflow-hidden relative">
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[#d6ccbd]/40 pointer-events-none" />

              {/* Chat bubbles */}
              <div className="relative z-10 flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#191919]/10 shrink-0 flex items-center justify-center text-[8px] text-[#191919]/50">
                    J
                  </div>
                  <div className="bg-[#191919]/[0.07] rounded-xl rounded-tl-sm px-3 py-1.5">
                    <p className="text-[11px] text-[#191919]/70">
                      Hi! Where are you?
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pl-7">
                  <div className="bg-[#191919] rounded-xl rounded-tl-sm px-3 py-1.5">
                    <p className="text-[11px] text-white">
                      I&apos;ll be in touch
                    </p>
                  </div>
                </div>
              </div>

              {/* Avatar trio */}
              <div className="relative z-10 flex -space-x-2 shrink-0">
                {["#C41C26", "#1A3D2B", "#191919"].map((bg, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#F0EBE0] flex items-center justify-center text-[9px] text-white font-medium"
                    style={{ backgroundColor: bg }}
                  >
                    {["J", "M", "A"][i]}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── MIDDLE COLUMN (col 4-6, row 2) ────────────────────────────
               D-1 (logo, flex-1 = 50%) + D-2 (chat, flex-1 = 50%)
          ─────────────────────────────────────────────────────────────── */}
          <div className="col-span-3 row-start-2 flex flex-col gap-3">
            {/* D-1 — Boomerang brand / logo (cream, 50%) */}
            <div className="flex-1 bg-[#F0EBE0] rounded-3xl flex flex-col items-center justify-center p-6 overflow-hidden relative">
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#d6ccbd]/40 pointer-events-none" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-[#d6ccbd]/30 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center gap-3">
                {/* Bigger logo mark */}
                <svg
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  className="w-16 h-16 text-[#191919]"
                  aria-hidden="true"
                >
                  <path d="M 144 256 L 27.598 256 L 144 139.598 Z" />
                  <path d="M 256 207.5 L 200 256 L 200 56 L 0 56 L 48 0 L 256 0 Z" />
                  <path d="M 0 204.402 L 0 112 L 92.402 112 Z" />
                </svg>
                <span className="text-xl font-serif font-normal text-[#191919] tracking-tight">
                  boomerang
                </span>
              </div>
            </div>

            {/* D-2 — AI chat conversation (dark green, 50%) */}
            <div className="flex-1 bg-[#1A3D2B] rounded-3xl p-5 flex flex-col justify-between overflow-hidden">
              <div className="flex flex-col gap-2">
                <div className="flex items-end gap-2 justify-end">
                  <div className="bg-white/[0.08] rounded-2xl rounded-br-sm px-3.5 py-2 max-w-[85%]">
                    <p className="text-xs text-white/80">
                      When does my loan renew?
                    </p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-white/20 shrink-0 flex items-center justify-center text-[8px] text-white/60">
                    J
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#4ade80]/20 shrink-0 flex items-center justify-center text-[8px] text-[#4ade80]">
                    AI
                  </div>
                  <div className="bg-[#4ade80]/15 border border-[#4ade80]/20 rounded-2xl rounded-bl-sm px-3.5 py-2 max-w-[85%]">
                    <p className="text-xs text-white/80">
                      I&apos;ll be in touch soon!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 mt-2">
                {["#4ade80", "#86efac", "#bbf7d0"].map((c, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full flex items-center justify-center border"
                    style={{ backgroundColor: c + "22", borderColor: c + "50" }}
                  >
                    <span
                      className="text-[8px] font-medium"
                      style={{ color: c }}
                    >
                      {["J", "M", "S"][i]}
                    </span>
                  </div>
                ))}
                <p className="text-[10px] text-white/35 ml-1">120+ active</p>
              </div>
            </div>
          </div>

          {/* ── CARD E — Social proof, cream, LANDSCAPE (col 7-12, row 2) ── */}
          <div className="col-span-5 row-start-2 bg-[#F0EBE0] rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#d6ccbd]/35 pointer-events-none" />
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-[#ccc2b3]/25 pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40 font-medium">
                TRUSTED BY
              </span>
            </div>

            {/* Stat + Avatar group */}
            <div className="relative z-10 flex items-end gap-10">
              <div>
                <p
                  className="font-serif font-normal text-[#191919] leading-none tracking-tight"
                  style={{ fontSize: "clamp(4rem, 6.5vw, 6rem)" }}
                >
                  120+
                </p>
                <p className="mt-2 text-sm text-[#191919]/55">
                  financial institutions
                </p>
              </div>

              <div className="flex items-end gap-3 pb-1">
                {[
                  { initials: "SC", bg: "#191919" },
                  { initials: "MR", bg: "#C41C26" },
                  { initials: "AT", bg: "#1A3D2B" },
                  { initials: "LK", bg: "#191919" },
                ].map((a) => (
                  <div
                    key={a.initials}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium text-white border-2 border-[#F0EBE0] -ml-3 first:ml-0"
                    style={{ backgroundColor: a.bg }}
                  >
                    {a.initials}
                  </div>
                ))}
                <p className="text-xs text-[#191919]/50 leading-snug ml-2">
                  VPs, CROs &<br />
                  Compliance Officers
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <p className="text-sm text-[#191919]/55 leading-relaxed max-w-md">
                &ldquo;The audit trail alone saved us three weeks during our
                last exam. Compliance loves it.&rdquo;
              </p>
              <p className="mt-1 text-xs text-[#191919]/35">
                — Marcus T., Chief Risk Officer, Community Bank
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
