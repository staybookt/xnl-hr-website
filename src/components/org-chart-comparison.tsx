"use client";

import { motion } from "framer-motion";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

export function OrgChartComparison() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: SLOW_OUT }}
          className="max-w-4xl mb-14 md:mb-20"
        >
          <p className="eyebrow mb-8">Who's actually on your file</p>
          <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
            One degree of separation,<br />
            <span className="text-[var(--color-secondary)]">or three.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Traditional firm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT }}
            className="rounded-3xl bg-[var(--color-paper)] border border-[var(--color-rule)] p-7 md:p-8"
          >
            <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] mb-1">Option A</p>
            <h3 className="text-[18px] md:text-[20px] font-semibold text-[var(--color-ink)] mb-7">Traditional HR firm</h3>

            <div className="space-y-3 mb-7">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-secondary-soft)] border border-[var(--color-rule)] flex items-center justify-center text-[10px] uppercase tracking-[0.1em] font-semibold text-[var(--color-secondary-deep)]">P</div>
                <p className="text-[14px] text-[var(--color-ink-soft)]">Partner you signed with</p>
              </div>
              <div className="ml-5 w-px h-3 bg-[var(--color-rule)]" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-rule)] flex items-center justify-center text-[10px] uppercase tracking-[0.1em] font-semibold text-[var(--color-mute)]">SA</div>
                <p className="text-[14px] text-[var(--color-mute)]">Senior analyst (reviews)</p>
              </div>
              <div className="ml-5 w-px h-3 bg-[var(--color-rule)]" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-rule)] flex items-center justify-center text-[10px] uppercase tracking-[0.1em] font-semibold text-[var(--color-mute)]">JA</div>
                <p className="text-[14px] text-[var(--color-mute)]">Junior analyst (does the work)</p>
              </div>
              <div className="ml-5 w-px h-3 bg-[var(--color-rule)]" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-paper)] border-2 border-[var(--color-rule-strong)] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-rule-strong)]" />
                </div>
                <p className="text-[14px] font-semibold text-[var(--color-ink)]">Your file</p>
              </div>
            </div>

            <p className="text-[12px] text-[var(--color-mute)] leading-[1.5] pt-5 border-t border-[var(--color-rule)]">
              Three handoffs between the senior judgment you paid for and the work that lands on your file.
            </p>
          </motion.div>

          {/* In-house */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT, delay: 0.08 }}
            className="rounded-3xl bg-[var(--color-paper)] border border-[var(--color-rule)] p-7 md:p-8"
          >
            <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] mb-1">Option B</p>
            <h3 className="text-[18px] md:text-[20px] font-semibold text-[var(--color-ink)] mb-7">In-house HR hire</h3>

            <div className="space-y-3 mb-7">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-sage-soft)] border border-[var(--color-rule)] flex items-center justify-center text-[10px] uppercase tracking-[0.1em] font-semibold text-[var(--color-sage-deep)]">HR</div>
                <p className="text-[14px] text-[var(--color-ink-soft)]">One generalist</p>
              </div>
              <div className="ml-5 w-px h-3 bg-[var(--color-rule)]" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-paper)] border-2 border-[var(--color-rule-strong)] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-rule-strong)]" />
                </div>
                <p className="text-[14px] font-semibold text-[var(--color-ink)]">Your file</p>
              </div>
            </div>

            <p className="text-[12px] text-[var(--color-mute)] leading-[1.5] pt-5 border-t border-[var(--color-rule)]">
              One degree of separation, but you got whatever generalist you could hire. No senior backstop on hard matters.
            </p>
          </motion.div>

          {/* XNL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT, delay: 0.16 }}
            className="rounded-3xl bg-[var(--color-paper)] border-2 border-[var(--color-brand)] p-7 md:p-8 relative"
          >
            <div className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-[var(--color-brand)] text-white text-[10px] uppercase tracking-[0.14em] font-semibold">
              The XNL way
            </div>
            <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] mb-1">XNL</p>
            <h3 className="text-[18px] md:text-[20px] font-semibold text-[var(--color-ink)] mb-7">One senior partner</h3>

            <div className="space-y-3 mb-7">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-slate)] border border-[var(--color-slate-deep)] flex items-center justify-center text-[10px] uppercase tracking-[0.1em] font-semibold text-white">EA</div>
                <div>
                  <p className="text-[14px] font-semibold text-[var(--color-ink)]">Evert (or Wendy)</p>
                  <p className="text-[11px] text-[var(--color-mute)]">Senior partner, directly</p>
                </div>
              </div>
              <div className="ml-5 w-px h-3 bg-[var(--color-brand)]" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-brand-soft)] border-2 border-[var(--color-brand)] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C77957" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-[14px] font-semibold text-[var(--color-ink)]">Your file</p>
              </div>
            </div>

            <p className="text-[12px] text-[var(--color-ink-soft)] leading-[1.5] pt-5 border-t border-[var(--color-brand-soft)]">
              Zero handoffs. The person you hired is the person on your file. The work reflects senior judgment because senior judgment did it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
