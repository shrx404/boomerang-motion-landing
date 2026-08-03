"use client";

import { ArrowRight } from "lucide-react";

const footerLinks = {
  Product: ["Platform", "Channels", "Compliance", "Integrations", "Security"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "CCPA"],
} as const;

const Footer = () => {
  return (
    <footer className="w-full bg-[#191919] border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          {/* Reuse logo mark inline */}
          <svg
            viewBox="0 0 256 256"
            fill="currentColor"
            className="w-5 h-5 text-white/80"
            aria-hidden="true"
          >
            <path d="M 144 256 L 27.598 256 L 144 139.598 Z" />
            <path d="M 256 207.5 L 200 256 L 200 56 L 0 56 L 48 0 L 256 0 Z" />
            <path d="M 0 204.402 L 0 112 L 92.402 112 Z" />
          </svg>
          <span className="text-sm font-semibold text-white/80 tracking-tight">
            Boomerang
          </span>
        </div>
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Boomerang AI, Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Privacy", "Terms", "Security"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
