"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@/components/icons";

type QA = { q: string; a: string };

export function FAQ({ items }: { items: readonly QA[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-[var(--color-rule)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-[var(--color-rule)]">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 md:gap-8 py-6 md:py-8 text-left group"
            >
              <span className="text-[17px] md:text-[22px] leading-[1.35] tracking-[-0.018em] font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-slate)] transition-colors">
                {item.q}
              </span>
              <span
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  isOpen
                    ? "bg-[var(--color-slate)] text-white"
                    : "bg-[var(--color-surface)] text-[var(--color-ink)] group-hover:bg-[var(--color-secondary-soft)]"
                }`}
              >
                {isOpen ? <MinusIcon size={18} /> : <PlusIcon size={18} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-7 md:pb-10 pr-4 md:pr-16 text-[15px] md:text-[18px] leading-[1.6] text-[var(--color-mute)] max-w-3xl">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
