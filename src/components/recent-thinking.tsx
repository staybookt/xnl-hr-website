"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { articles } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

export function RecentThinking() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-paper)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: SLOW_OUT }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20"
        >
          <div className="max-w-2xl">
            <p className="eyebrow mb-8">07 · Recent thinking</p>
            <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
              Where Evert is publishing.
            </h2>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-slate)] hover:gap-3 transition-all whitespace-nowrap"
          >
            All bylines <span aria-hidden="true">→</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((a, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: SLOW_OUT }}
            >
              <Link
                href={a.url}
                className="group block h-full rounded-3xl bg-[var(--color-surface)] border border-[var(--color-rule)] p-8 md:p-9 hover:border-[var(--color-rule-strong)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-secondary-deep)]">
                    {a.publication}
                  </span>
                  {a.placeholder && (
                    <span
                      className="text-[9px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full"
                      title="Illustrative article — real catalog pending. See PLACEHOLDERS.md"
                    >
                      Illustrative
                    </span>
                  )}
                </div>
                <h3 className="text-[20px] md:text-[22px] leading-[1.25] tracking-[-0.018em] font-semibold text-[var(--color-ink)] mb-4">
                  {a.title}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-[1.6] text-[var(--color-mute)] mb-8 flex-1">
                  {a.excerpt}
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-[var(--color-rule)]">
                  <span className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-mute)]">
                    {a.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] group-hover:gap-3 transition-all">
                    Read <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
