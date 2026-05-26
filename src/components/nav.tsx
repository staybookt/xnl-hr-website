"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-paper)]/90 backdrop-blur-md border-b border-[var(--color-rule)]"
          : "bg-[var(--color-paper)] border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex h-16 md:h-18 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[19px] md:text-[20px] tracking-[-0.02em] font-semibold text-[var(--color-ink)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
            {site.shortName}
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-[14px] font-medium rounded-full px-5 py-2.5 bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-accent)] transition-colors"
            >
              Book an intro call
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[var(--color-ink)]"
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

        {mobileOpen && (
          <nav className="md:hidden flex flex-col py-8 gap-6 border-t border-[var(--color-rule)]">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[19px] font-medium text-[var(--color-ink)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-6 py-3 text-[15px] font-medium"
            >
              Book an intro call
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
