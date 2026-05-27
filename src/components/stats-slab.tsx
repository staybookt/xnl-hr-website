"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/count-up";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { value: 25, suffix: "", label: "Years in Canadian HR", sub: "Practice founded 2012. Built on two decades prior." },
  { value: 25, suffix: "+", label: "Bylines in Canadian press", sub: "Canadian HR Reporter, Municipal World, Talent Canada and more." },
  { value: 2, suffix: "×", label: "Top-25 HR Professionals", sub: "Named to Canada's Top-25 in 2016 and 2017. Randstad Innovation Award, 2015." },
];

export function StatsSlab() {
  return (
    <section className="relative bg-[var(--color-ink)] text-white overflow-hidden py-24 md:py-32 lg:py-40 border-y border-white/8">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 20%, rgba(232, 155, 122, 0.18) 0%, transparent 65%)",
        }}
      />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: SLOW_OUT }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[var(--color-brand)] mb-6">
            The record
          </p>
          <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-white">
            Not new to this.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 1, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: SLOW_OUT, delay: i * 0.12 }}
              className="border-t border-white/15 pt-8"
            >
              <p className="text-[80px] md:text-[110px] lg:text-[128px] leading-none tracking-[-0.04em] font-semibold text-white tabular-nums">
                <CountUp to={s.value} />
                <span className="text-[var(--color-brand)]">{s.suffix}</span>
              </p>
              <p className="mt-5 text-[14px] md:text-[15px] uppercase tracking-[0.14em] font-semibold text-white">
                {s.label}
              </p>
              <p className="mt-3 text-[13px] md:text-[14px] leading-[1.55] text-white/55">
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
