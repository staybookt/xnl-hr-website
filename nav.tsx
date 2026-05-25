"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-[var(--color-paper)]/80 backdrop-blur-md border-b border-[var(--color-rule)]/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex h-14 md:h-16 items-center justify-between">
          <Link href="/" className="text-[18px] font-semibold tracking-tight">
            {site.shortName}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-[14px] font-medium rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-4 py-2 hover:bg-[var(--color-accent)] transition-colors"
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
            className="md:hidden inline-flex items-center justify-center w-9 h-9"
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              {mobileOpen ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden flex flex-col py-6 gap-5 border-t border-[var(--color-rule)]/60">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[18px] font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-5 py-2.5 text-[15px] font-medium"
            >
              Book an intro call
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
