"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@/components/icons";
import { comparison } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

type Option = {
  key: "traditional" | "inhouse" | "xnl";
  eyebrow: string;
  title: string;
  subtitle: string;
  primary: boolean;
};

const options: Option[] = [
  { key: "traditional", eyebrow: "Option A", title: "Traditional HR firm", subtitle: "Partner you signed with, work done by analysts.", primary: false },
  { key: "inhouse", eyebrow: "Option B", title: "In-house HR hire", subtitle: "One generalist, permanent overhead, ramps in months.", primary: false },
  { key: "xnl", eyebrow: "The XNL way", title: "One senior partner", subtitle: "The person you hired is the person on your file.", primary: true },
];

export function Comparison() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 items-stretch">
      {options.map((opt, i) => {
        const isPrimary = opt.primary;
        return (
          <motion.div
            key={opt.key}
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT, delay: i * 0.08 }}
            className={`relative rounded-3xl overflow-hidden flex flex-col ${
              isPrimary
                ? "bg-[var(--color-paper)] border-2 border-[var(--color-brand)] shadow-[0_20px_60px_-20px_rgba(232,155,122,0.45)] lg:-translate-y-3"
                : "bg-[var(--color-surface)] border border-[var(--color-rule)]"
            }`}
          >
            {isPrimary && (
              <div className="absolute -top-px left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-brand-deep)] to-[var(--color-brand)]" aria-hidden="true" />
            )}
            <div className={`px-7 md:px-8 pt-8 md:pt-10 pb-7 md:pb-8 ${isPrimary ? "" : "border-b border-[var(--color-rule)]"}`}>
              <p className={`text-[11px] uppercase tracking-[0.18em] font-semibold mb-3 ${isPrimary ? "text-[var(--color-brand-deep)]" : "text-[var(--color-mute)]"}`}>
                {opt.eyebrow}
              </p>
              <h3 className={`text-[22px] md:text-[26px] leading-[1.15] tracking-[-0.02em] font-semibold mb-3 ${isPrimary ? "text-[var(--color-ink)]" : "text-[var(--color-ink-soft)]"}`}>
                {opt.title}
              </h3>
              <p className={`text-[14px] md:text-[15px] leading-[1.55] ${isPrimary ? "text-[var(--color-ink-soft)]" : "text-[var(--color-mute)]"}`}>
                {opt.subtitle}
              </p>
            </div>
            <div className={`flex-1 px-7 md:px-8 py-6 md:py-7 space-y-5 ${isPrimary ? "bg-[var(--color-brand-soft)]/30 border-t border-[var(--color-brand-soft)]" : ""}`}>
              {comparison.rows.map((row) => (
                <div key={row.label} className="border-b border-[var(--color-rule)] last:border-b-0 pb-4 last:pb-0">
                  <p className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-mute)] mb-1.5">
                    {row.label}
                  </p>
                  <div className="flex items-start gap-2">
                    {isPrimary && (
                      <CheckIcon size={15} className="text-[var(--color-brand-deep)] mt-1 flex-shrink-0" />
                    )}
                    <p className={`text-[14px] md:text-[15px] leading-[1.5] ${isPrimary ? "text-[var(--color-ink)] font-medium" : "text-[var(--color-ink-soft)]"}`}>
                      {row[opt.key]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
