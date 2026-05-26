import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageCTA } from "@/components/page-cta";
import { articles, publications } from "@/data/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Original points of view and republished bylines from Evert Akkerman. Canadian HR practice, written for the people who run things.",
  alternates: { canonical: "/insights" },
};

export default function InsightsIndex() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* MASTHEAD */}
      <section className="bg-[var(--color-paper)] pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-16 border-b border-[var(--color-rule)]">
        <Container size="wide">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-10">
              <span
                aria-hidden="true"
                className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--color-brand)]"
              />
              <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[var(--color-ink-soft)]">
                XNL Insights · Issue 01
              </p>
            </div>
            <h1 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
              Twenty-five years of writing<br />
              <span className="text-brand-gradient">about Canadian HR.</span>
            </h1>
            <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-[var(--color-mute)] max-w-2xl">
              Original points of view published here. Selected bylines republished from {publications.slice(0, 5).map((p) => p.name).join(", ")}, and others.
            </p>
          </div>
        </Container>
      </section>

      {/* FEATURED ARTICLE */}
      {featured && (
        <section className="bg-[var(--color-paper)] py-16 md:py-24 lg:py-28">
          <Container size="wide">
            <Link
              href={featured.url}
              className="group block rounded-3xl bg-[var(--color-ink)] text-white relative overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 65% 55% at 18% 25%, rgba(150, 144, 181, 0.32) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 85% 80%, rgba(232, 155, 122, 0.38) 0%, transparent 60%)",
                }}
              />
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 p-10 md:p-14 lg:p-20">
                <div className="lg:col-span-3">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[var(--color-brand)] mb-4">
                    Featured · Original
                  </p>
                  <p className="text-[13px] uppercase tracking-[0.14em] font-medium text-white/55">
                    {featured.date}
                  </p>
                  <p className="text-[13px] uppercase tracking-[0.14em] font-medium text-white/55 mt-2">
                    {featured.publication}
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-[length:var(--text-display-xl)] leading-[1.05] tracking-[-0.02em] font-semibold text-white mb-8 group-hover:text-[var(--color-brand)] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-white/72 mb-10 max-w-3xl">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand)] group-hover:gap-4 transition-all">
                    Read the piece <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </Container>
        </section>
      )}

      {/* THE REST */}
      <section className="pb-24 md:pb-32 lg:pb-40 bg-[var(--color-paper)]">
        <Container size="wide">
          <div className="flex items-baseline justify-between mb-10 md:mb-14 border-b border-[var(--color-rule)] pb-6">
            <h2 className="text-[20px] md:text-[24px] font-semibold text-[var(--color-ink)] tracking-[-0.015em]">
              From the byline archive
            </h2>
            <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--color-mute)]">
              {rest.length} {rest.length === 1 ? "piece" : "pieces"}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 md:gap-y-16">
            {rest.map((a) => (
              <article key={a.slug} className="group">
                <Link href={a.url} className="block">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--color-secondary-deep)]">
                      {a.publication}
                    </span>
                    {a.placeholder && (
                      <span className="text-[9px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] bg-[var(--color-surface-deep)] px-2 py-0.5 rounded-full">
                        Republishing
                      </span>
                    )}
                  </div>
                  <h3 className="text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.02em] font-semibold text-[var(--color-ink)] mb-4 group-hover:text-[var(--color-slate)] transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-[16px] md:text-[17px] leading-[1.6] text-[var(--color-mute)] mb-6">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-[var(--color-rule)]">
                    <span className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-mute)]">
                      {a.date}
                    </span>
                    <span className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[var(--color-slate)] group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                      Read <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <PageCTA
        eyebrow="Bring us a piece"
        headline={<>Need a board memo,<br /><span className="text-brand-gradient">op-ed, or technical brief?</span></>}
        subhead="Editorial is the third practice. Twenty-five-plus bylines, one to three weeks per project, written to publish."
      />
    </>
  );
}
