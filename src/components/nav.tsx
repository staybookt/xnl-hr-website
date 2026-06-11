"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/data/site";
import { LogoMark } from "@/components/logo-mark";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Pages whose hero is dark (negative-margin gradient under the transparent nav).
  // On these, the un-scrolled nav text + logo render light. Everywhere else, dark.
  const darkHeroPaths = [
    "/",
    "/about",
    "/services/mediation",
    "/services/hr-support",
    "/services/editorial",
  ];
  const onDarkHero = darkHeroPaths.includes(pathname ?? "");
  const useLightChrome = onDarkHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled || !onDarkHero
          ? "bg-[var(--color-paper)]/92 backdrop-blur-md border-b border-[var(--color-rule)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" aria-label="XNL HR home">
            <LogoMark size={22} light={useLightChrome} />
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] font-medium transition-colors ${
                  useLightChrome
                    ? "text-white/85 hover:text-white"
                    : "text-[var(--color-ink-soft)] hover:text-[var(--color-slate)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Book a call — always coral on both light and dark chrome for readability. */}
            <Link
              href="/contact"
              className="text-[14px] font-semibold rounded-full px-5 py-2.5 bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-deep)] transition-colors shadow-sm"
            >
              Book a call
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`md:hidden inline-flex items-center justify-center w-10 h-10 ${
              useLightChrome ? "text-white" : "text-[var(--color-ink)]"
            }`}
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

        {/* Mobile menu — matches chrome state so it doesn't drop down as a
            jarring dark block on light pages. Light pages → paper menu with
            dark text. Dark hero pages (unscrolled) → ink menu with white text. */}
        {mobileOpen && (
          <nav
            className={`md:hidden flex flex-col py-8 gap-6 -mx-6 px-6 border-t ${
              useLightChrome
                ? "bg-[var(--color-ink)] border-white/15"
                : "bg-[var(--color-paper)] border-[var(--color-rule)]"
            }`}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[19px] font-medium ${
                  useLightChrome ? "text-white" : "text-[var(--color-ink)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-[var(--color-brand)] text-white px-6 py-3 text-[15px] font-semibold"
            >
              Book a call
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
