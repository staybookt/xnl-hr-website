"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function MediationBand() {
  return (
    <motion.section
      initial={{ opacity: 1, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[var(--color-brand-soft)] border-y border-[var(--color-rule)] py-10 md:py-14"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 items-center">
          <div className="md:col-span-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-brand)] text-white text-[10px] uppercase tracking-[0.14em] font-semibold whitespace-nowrap">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
              Now booking
            </span>
          </div>
          <div className="md:col-span-7">
            <h3 className="text-[22px] md:text-[26px] lg:text-[30px] leading-[1.15] tracking-[-0.022em] font-semibold text-[var(--color-ink)]">
              Workplace mediation, with Wendy Akkerman.
            </h3>
            <p className="text-[14px] md:text-[16px] leading-[1.55] text-[var(--color-mute)] mt-2 md:mt-3">
              Timed to the Ontario HRTO mandatory-mediation rule (in force since June 2025). Independent, neutral, ready to start.
            </p>
          </div>
          <div className="md:col-span-3 md:text-right">
            <Link
              href="/services/mediation"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-white px-6 py-3.5 text-[14px] md:text-[15px] font-semibold hover:bg-[var(--color-brand)] transition-colors"
            >
              Book Wendy <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
