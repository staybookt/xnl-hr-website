"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-paper)]/85 backdrop-blur-md border-b border-[var(--color-rule)]/60 text-[var(--color-ink)]"
          : "bg-transparent text-[var(--color-paper)]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[20px] md:text-[22px] font-bold tracking-tight">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-amber)]" aria-hidden="true" />
            {site.shortName}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`text-[15px] font-medium rounded-full px-5 py-2.5 transition-colors ${
                scrolled
                  ? "bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-amber)] hover:text-[var(--color-ink-deep)]"
                  : "bg-[var(--color-amber)] text-[var(--color-ink-deep)] hover:bg-[var(--color-paper)]"
              }`}
            >
              Book an intro call
            </Link>
          </nav>

          {/* Mobile trigger */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10"
          >
            <span className="sr-only">Menu</span>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              {mobileOpen ? (
                <>
                  <line x1="5" y1="5" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="17" y1="5" x2="5" y2="17" stroke="currentColor" strokeWidth="1.5" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="4" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.5" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden flex flex-col py-8 gap-6 border-t border-[var(--color-rule)]/30 bg-[var(--color-ink-deep)] -mx-6 px-6 text-[var(--color-paper)]">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[20px] font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-[var(--color-amber)] text-[var(--color-ink-deep)] px-6 py-3 text-[16px] font-medium"
            >
              Book an intro call
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
