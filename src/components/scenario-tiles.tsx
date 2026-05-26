"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { scenarios } from "@/data/site";

export function ScenarioTiles() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-5xl mx-auto"
    >
      <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white/65 text-center mb-6">
        What&rsquo;s happening?
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {scenarios.map((s, i) => (
          <motion.div
            key={s.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/contact?topic=${s.key}`}
              className="group flex flex-col h-full rounded-2xl bg-white/10 hover:bg-white/16 backdrop-blur-md border border-white/15 hover:border-white/30 px-5 py-5 md:px-6 md:py-6 transition-all hover:-translate-y-0.5"
            >
              <p className="text-[14px] md:text-[15px] font-semibold text-white leading-[1.3] mb-4 flex-1">
                {s.label}
              </p>
              <p className="text-[10px] uppercase tracking-[0.14em] text-white/50 group-hover:text-[var(--color-brand)] flex items-center gap-1.5 transition-colors">
                Start here <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
