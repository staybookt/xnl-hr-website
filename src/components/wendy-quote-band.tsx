"use client";

import { motion } from "framer-motion";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

export function WendyQuoteBand() {
  return (
    <section className="relative bg-[var(--color-ink)] text-white overflow-hidden py-24 md:py-36 lg:py-44 border-y border-white/8">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(168, 181, 168, 0.28) 0%, transparent 65%), radial-gradient(ellipse 70% 60% at 20% 85%, rgba(150, 144, 181, 0.30) 0%, transparent 65%)",
        }}
      />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT }}
            className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[var(--color-brand)] mb-10"
          >
            How Wendy works
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT }}
            className="text-[var(--color-brand)] text-[100px] md:text-[160px] leading-none font-serif select-none -mb-6 md:-mb-10"
            aria-hidden="true"
          >
            &ldquo;
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: SLOW_OUT, delay: 0.1 }}
            className="text-[length:var(--text-display-lg)] md:text-[length:var(--text-display-xl)] leading-[1.12] tracking-[-0.022em] font-semibold text-white"
          >
            The room doesn&rsquo;t need a referee.
            <br />
            <span className="text-brand-gradient">It needs someone who can hear what is not being said.</span>
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT, delay: 0.25 }}
            className="mt-12 md:mt-16 flex items-center gap-5"
          >
            <span
              className="font-[family-name:var(--font-signature)] text-[40px] md:text-[52px] leading-none text-[var(--color-brand)] -rotate-3"
              style={{ display: "inline-block" }}
            >
              Wendy
            </span>
            <div className="h-px w-12 bg-white/25" aria-hidden="true" />
            <div>
              <p className="text-[14px] md:text-[15px] font-semibold text-white">Wendy Akkerman</p>
              <p className="text-[12px] md:text-[13px] uppercase tracking-[0.14em] text-white/55">
                Workplace mediator · XNL
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
