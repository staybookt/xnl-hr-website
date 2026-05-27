"use client";

import { motion } from "framer-motion";
import { wontDo } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

export function AntiPositioning() {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: SLOW_OUT }}
          className="max-w-4xl mb-12 md:mb-16"
        >
          <p className="eyebrow mb-6">What we don&rsquo;t do</p>
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-[-0.025em] font-semibold text-[var(--color-ink)]">
            Senior judgment isn&rsquo;t everything.<br />
            <span className="text-[var(--color-secondary)]">Here&rsquo;s what to call someone else for.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {wontDo.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: SLOW_OUT }}
              className="border-l-2 border-[var(--color-rule-strong)] pl-6"
            >
              <h3 className="text-[20px] md:text-[22px] leading-[1.2] tracking-[-0.02em] font-semibold text-[var(--color-ink)] mb-3">
                {item.title}
              </h3>
              <p className="text-[15px] md:text-[16px] leading-[1.55] text-[var(--color-mute)]">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
