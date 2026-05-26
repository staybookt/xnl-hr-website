import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      className="relative bg-[var(--color-ink)] text-white overflow-hidden -mt-16 md:-mt-20"
      style={{ minHeight: "100vh" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 12% 25%, rgba(150, 144, 181, 0.32) 0%, transparent 60%), radial-gradient(ellipse 75% 60% at 88% 78%, rgba(232, 155, 122, 0.38) 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10 flex items-center min-h-screen pt-32 pb-24">
        <Container size="wide">
          <div className="max-w-3xl">
            <p className="text-[12px] uppercase tracking-[0.22em] font-semibold text-[var(--color-brand)] mb-10">
              Error 404
            </p>
            <h1 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-white mb-10">
              That page isn&rsquo;t on the file.
            </h1>
            <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-white/65 mb-12 max-w-2xl">
              Either we moved it, or it was never here. Either way, here is where to go next.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] text-white px-8 py-4 text-[16px] font-medium hover:bg-[var(--color-brand-deep)] transition-colors"
              >
                Back to home <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[16px] font-semibold text-white hover:text-[var(--color-brand)] transition-colors"
              >
                Or speak with Evert <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
