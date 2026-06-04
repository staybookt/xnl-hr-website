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
      const isNarrow = window.innerWidth < 768;
      const threshold = window.innerHeight * (isNarrow ? 1.5 : 0.7);
      const scrolledPast = window.scrollY > threshold;

      // Hide when the footer is in view so it doesn't block the StayBookt credit
      // or any footer link. ~720px from doc bottom is the safe buffer for the
      // tallest variant of the dark footer.
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 720;

      setVisible(scrolledPast && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-3 left-3 right-3 md:bottom-6 md:left-auto md:right-6 md:max-w-md z-40 pb-[env(safe-area-inset-bottom)]"
        >
          <div className="bg-[var(--color-ink)] text-white rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.45)] border border-white/10 pl-4 pr-2 py-2.5 md:pl-5 md:pr-3 md:py-3 flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand)] mb-0.5">
                Book Evert
              </p>
              <p className="text-[12px] md:text-[13px] text-white/85 truncate">
                Next opening: <span className="text-white/55">TBD</span>
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand)] text-white px-3.5 md:px-4 py-2 text-[13px] font-medium hover:bg-[var(--color-brand-deep)] transition-colors whitespace-nowrap flex-shrink-0"
            >
              Start <span aria-hidden="true">→</span>
            </Link>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss booking bar"
              className="inline-flex items-center justify-center w-9 h-9 text-white/45 hover:text-white/90 transition-colors flex-shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
