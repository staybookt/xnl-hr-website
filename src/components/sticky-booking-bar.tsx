"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function StickyBookingBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const onScroll = () => {
      const heroHeight = window.innerHeight;
      setVisible(window.scrollY > heroHeight * 0.7);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:max-w-md z-40"
        >
          <div className="bg-[var(--color-ink)] text-white rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.35)] border border-white/10 px-5 py-4 flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand)] mb-0.5">
                Book Evert
              </p>
              <p className="text-[13px] text-white/85 truncate">
                Next opening: <span className="text-white/55">TBD</span>
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand)] text-white px-4 py-2 text-[13px] font-medium hover:bg-[var(--color-brand-deep)] transition-colors whitespace-nowrap flex-shrink-0"
            >
              Start <span aria-hidden="true">→</span>
            </Link>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="text-white/40 hover:text-white/80 transition-colors flex-shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <line x1="3" y1="3" x2="11" y2="11" stroke="currentColor" strokeWidth="1.5" />
                <line x1="11" y1="3" x2="3" y2="11" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
