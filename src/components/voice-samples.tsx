"use client";

import { motion } from "framer-motion";
import { voiceSamples } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

type Props = {
  eyebrow?: string;
  headline?: string;
  background?: "paper" | "surface" | "ink";
};

export function VoiceSamples({
  eyebrow = "What Evert believes",
  headline = "Six things, often said.",
  background = "surface",
}: Props) {
  const bg =
    background === "ink"
      ? "bg-[var(--color-ink)] text-white"
      : background === "paper"
      ? "bg-[var(--color-paper)]"
      : "bg-[var(--color-surface)] border-y border-[var(--color-rule)]";

  const textHeadline = background === "ink" ? "text-white" : "text-[var(--color-ink)]";
  const cardBg = background === "ink" ? "bg-white/5 border-white/10" : "bg-[var(--color-paper)] border-[var(--color-rule)]";
  const cardText = background === "ink" ? "text-white/90" : "text-[var(--color-ink-soft)]";
  const quoteColor = "text-[var(--color-brand)]";
  const eyebrowClass = background === "ink" ? "eyebrow-light" : "eyebrow";

  return (
    <section className={`py-24 md:py-32 lg:py-40 ${bg}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: SLOW_OUT }}
          className="max-w-3xl mb-14 md:mb-20 flex items-end justify-between gap-6"
        >
          <div>
            <p className={`${eyebrowClass} mb-8`}>{eyebrow}</p>
            <h2 className={`text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold ${textHeadline}`}>
              {headline}
            </h2>
          </div>
          <span
            className="flex-shrink-0 text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2.5 py-1 rounded-full hidden md:inline-flex items-center"
            title="Illustrative placeholders — see PLACEHOLDERS.md"
          >
            Illustrative
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {voiceSamples.map((v, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: SLOW_OUT }}
              className={`relative rounded-3xl border ${cardBg} p-7 md:p-8`}
            >
              <span aria-hidden="true" className={`${quoteColor} text-[36px] leading-none font-semibold -ml-1 block mb-3`}>
                &ldquo;
              </span>
              <blockquote className={`text-[17px] md:text-[18px] leading-[1.5] ${cardText}`}>
                {v.text}
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
