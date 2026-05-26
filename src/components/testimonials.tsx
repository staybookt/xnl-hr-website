"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: SLOW_OUT }}
          className="max-w-4xl mb-10 md:mb-14"
        >
          <p className="eyebrow mb-8">In their words</p>
          <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
            What clients say when the file&rsquo;s closed.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: SLOW_OUT }}
          className="text-[14px] md:text-[15px] leading-[1.55] text-[var(--color-mute)] mb-14 md:mb-20 max-w-3xl"
        >
          The accounts below are composites drawn from actual engagements. Names and identifying details are withheld for confidentiality. Real attributed testimonials are added with each client&rsquo;s written permission.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: SLOW_OUT }}
              className="flex flex-col rounded-3xl bg-[var(--color-paper)] border border-[var(--color-rule)] p-8 md:p-10 hover:border-[var(--color-rule-strong)] transition-colors"
            >
              <span aria-hidden="true" className="text-[48px] leading-none text-[var(--color-brand)] font-semibold mb-4 -ml-1">
                &ldquo;
              </span>
              <blockquote className="text-[17px] md:text-[18px] leading-[1.55] text-[var(--color-ink-soft)] mb-8 flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="pt-6 border-t border-[var(--color-rule)]">
                <p className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[var(--color-ink)] mb-1">
                  {t.role}
                </p>
                <p className="text-[13px] leading-[1.5] text-[var(--color-mute)]">
                  {t.org}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
