"use client";

import { motion } from "framer-motion";
import { getStepIcon } from "@/components/icons";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;
const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: SLOW_OUT } },
};
const STAGGER = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };

type Step = { n: string; title: string; time: string; body: string };

export function ProcessSteps({ steps }: { steps: readonly Step[] }) {
  return (
    <motion.ol
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={STAGGER}
      className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10"
    >
      <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-[var(--color-slate)]/20 z-0" aria-hidden="true" />

      {steps.map((step, idx) => (
        <motion.li key={step.n} variants={FADE_UP} className="relative z-10 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-paper)] border border-[var(--color-slate)]/15 text-[var(--color-slate)] shadow-[0_4px_12px_-2px_rgba(45,61,78,0.15)]">
              {getStepIcon(idx, { size: 22 })}
            </span>
            <span className="text-[14px] uppercase tracking-[0.14em] font-semibold text-[var(--color-slate)]">
              Step {step.n}
            </span>
          </div>
          <h3 className="text-[24px] md:text-[28px] leading-[1.15] tracking-[-0.02em] font-semibold text-[var(--color-ink)] mb-4">
            {step.title}
          </h3>
          <p className="text-[12px] uppercase tracking-[0.12em] font-semibold text-[var(--color-secondary-deep)] mb-4">
            {step.time}
          </p>
          <p className="text-[16px] leading-[1.6] text-[var(--color-ink-soft)]/75">{step.body}</p>
        </motion.li>
      ))}
    </motion.ol>
  );
}
