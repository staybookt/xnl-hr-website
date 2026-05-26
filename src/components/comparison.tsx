"use client";

import { motion } from "framer-motion";
import { CheckIcon, MinusIcon } from "@/components/icons";
import { comparison } from "@/data/site";

export function Comparison() {
  return (
    <div className="rounded-3xl overflow-hidden border border-[var(--color-rule)] bg-[var(--color-paper)]">
      {/* Header row */}
      <div className="grid grid-cols-4 border-b border-[var(--color-rule)]">
        <div className="p-6 md:p-8 text-[12px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)]">
          Compare
        </div>
        <div className="p-6 md:p-8 border-l border-[var(--color-rule)]">
          <p className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] mb-1">Option A</p>
          <p className="text-[14px] md:text-[16px] font-semibold text-[var(--color-ink-soft)]">Traditional HR firm</p>
        </div>
        <div className="p-6 md:p-8 border-l border-[var(--color-rule)]">
          <p className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] mb-1">Option B</p>
          <p className="text-[14px] md:text-[16px] font-semibold text-[var(--color-ink-soft)]">In-house HR hire</p>
        </div>
        <div className="p-6 md:p-8 border-l-2 border-[var(--color-slate)] bg-[var(--color-slate-soft)]">
          <p className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[var(--color-slate)] mb-1">XNL</p>
          <p className="text-[14px] md:text-[16px] font-semibold text-[var(--color-ink)]">One senior partner</p>
        </div>
      </div>

      {/* Rows */}
      {comparison.rows.map((row, i) => (
        <motion.div
          key={row.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
          className="grid grid-cols-4 border-b border-[var(--color-rule)] last:border-b-0"
        >
          <div className="p-6 md:p-8 text-[13px] md:text-[15px] font-semibold text-[var(--color-ink)] flex items-center">
            {row.label}
          </div>
          <div className="p-6 md:p-8 border-l border-[var(--color-rule)] text-[13px] md:text-[15px] text-[var(--color-mute)] leading-[1.5] flex items-start gap-3">
            <MinusIcon size={16} className="text-[var(--color-mute-soft)] mt-0.5 flex-shrink-0" />
            <span>{row.traditional}</span>
          </div>
          <div className="p-6 md:p-8 border-l border-[var(--color-rule)] text-[13px] md:text-[15px] text-[var(--color-mute)] leading-[1.5] flex items-start gap-3">
            <MinusIcon size={16} className="text-[var(--color-mute-soft)] mt-0.5 flex-shrink-0" />
            <span>{row.inhouse}</span>
          </div>
          <div className="p-6 md:p-8 border-l-2 border-[var(--color-slate)] bg-[var(--color-slate-soft)]/60 text-[13px] md:text-[15px] text-[var(--color-ink)] leading-[1.5] font-medium flex items-start gap-3">
            <CheckIcon size={16} className="text-[var(--color-slate)] mt-0.5 flex-shrink-0" />
            <span>{row.xnl}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
