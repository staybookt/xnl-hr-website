"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { articles } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

const typeLabel: Record<string, string> = {
  byline: "Byline",
  "co-byline": "Co-byline",
  feature: "Feature",
};

export function RecentThinking() {
  // Show first three articles — chosen for recency + breadth in the data file
  const featured = articles.slice(0, 3);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-paper)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: SLOW_OUT }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20"
        >
          <div className="max-w-2xl">
            <p className="eyebrow mb-8">07 · Recent thinking</p>
            <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
              Where Evert is publishing.
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-slate)] hover:gap-3 transition-all whitespace-nowrap"
          >
            All bylines <span aria-hidden="true">→</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((a, i) => {
            const isMailto = a.url.startsWith("mailto:");
            return (
              <motion.article
                key={i}
                initial={{ opacity: 1, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: SLOW_OUT }}
              >
                <a
                  href={a.url}
                  target={isMailto ? undefined : "_blank"}
                  rel={isMailto ? undefined : "noopener noreferrer external"}
                  className="group flex flex-col h-full rounded-3xl bg-[var(--color-surface)] border border-[var(--color-rule)] p-7 md:p-9 hover:border-[var(--color-rule-strong)] hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-secondary-deep)]">
                      {a.publication}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full">
                      {typeLabel[a.type] ?? "Byline"}
                    </span>
                  </div>
                  <h3 className="text-[19px] md:text-[22px] leading-[1.25] tracking-[-0.018em] font-semibold text-[var(--color-ink)] mb-4">
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
                      {isMailto ? "Request PDF" : "Read"} <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
