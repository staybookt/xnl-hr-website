"use client";

import { motion } from "framer-motion";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

export function PullQuoteSlab() {
  return (
    <section className="relative bg-[var(--color-ink)] text-white overflow-hidden py-28 md:py-40 lg:py-48">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 18% 30%, rgba(150, 144, 181, 0.22) 0%, transparent 65%), radial-gradient(ellipse 75% 65% at 85% 80%, rgba(232, 155, 122, 0.28) 0%, transparent 65%)",
        }}
      />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT }}
            className="text-[var(--color-brand)] text-[120px] md:text-[180px] leading-none font-serif select-none -mb-6 md:-mb-10"
            aria-hidden="true"
          >
            &ldquo;
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: SLOW_OUT, delay: 0.1 }}
            className="text-[length:var(--text-display-lg)] md:text-[length:var(--text-hero)] leading-[1.1] md:leading-[1.08] tracking-[-0.025em] font-semibold text-white"
          >
            In many organizations, performance reviews are a ritual dance:{" "}
            <span className="text-brand-gradient">a lot of movement and no progress.</span> Meanwhile, your exposure grows.
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 1, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT, delay: 0.25 }}
            className="mt-12 md:mt-16 flex items-center gap-5"
          >
            <span
              className="font-[family-name:var(--font-signature)] text-[40px] md:text-[52px] leading-none text-[var(--color-brand)] -rotate-3"
              style={{ display: "inline-block" }}
            >
              Evert
            </span>
            <div className="h-px w-12 bg-white/25" aria-hidden="true" />
            <div>
              <p className="text-[14px] md:text-[15px] font-semibold text-white">Evert Akkerman</p>
              <p className="text-[12px] md:text-[13px] uppercase tracking-[0.14em] text-white/55">Founder · CHRL · LL.M.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
