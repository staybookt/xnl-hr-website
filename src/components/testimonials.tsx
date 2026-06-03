"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

const practiceLabel: Record<string, string> = {
  hr: "Fractional HR",
  editorial: "Editorial",
};

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: SLOW_OUT }}
          className="max-w-4xl mb-10 md:mb-14"
        >
          <p className="eyebrow mb-8">05 · In their words</p>
          <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
            What clients say when the file&rsquo;s closed.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 1, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: SLOW_OUT }}
              className="flex flex-col rounded-3xl bg-[var(--color-paper)] border border-[var(--color-rule)] p-7 md:p-10 hover:border-[var(--color-rule-strong)] transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-deep)]">
                  {practiceLabel[t.practice] ?? "XNL"}
                </span>
                <span className="text-[10px] uppercase tracking-[0.12em] font-medium text-[var(--color-mute)]">
                  {t.date}
                </span>
              </div>
              <span aria-hidden="true" className="text-[44px] leading-none text-[var(--color-brand)] font-semibold mb-3 -ml-1">
                &ldquo;
              </span>
              <blockquote className="text-[16px] md:text-[18px] leading-[1.55] text-[var(--color-ink-soft)] mb-8 flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="pt-6 border-t border-[var(--color-rule)]">
                <p className="text-[15px] font-semibold text-[var(--color-ink)] leading-[1.3]">
                  {t.name}
                </p>
                <p className="text-[13px] leading-[1.5] text-[var(--color-mute)] mt-0.5">
                  {t.title}{t.title && t.org ? ", " : ""}{t.org}
                </p>
                {t.location && (
                  <p className="text-[12px] leading-[1.5] text-[var(--color-mute-soft)] mt-1">
                    {t.location}
                  </p>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <div className="mt-12 md:mt-16 flex justify-center">
          <a href="/testimonials" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-slate)] hover:text-[var(--color-brand-deep)] hover:gap-3 transition-all">
            More testimonials <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
