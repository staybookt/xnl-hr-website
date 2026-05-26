import Link from "next/link";
import { Container } from "@/components/container";
import { PageCTA } from "@/components/page-cta";
import { articles, publications } from "@/data/site";

export const metadata = { title: "Insights" };

export default function InsightsIndex() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[var(--color-paper)] pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20">
        <Container size="wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-8">Insights</p>
            <h1 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
              Twenty-five years of writing<br />
              <span className="text-brand-gradient">about Canadian HR.</span>
            </h1>
            <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-[var(--color-mute)] max-w-2xl">
              Original pieces published here. Selected bylines republished from Canadian HR Reporter, Municipal World, Talent Canada, Ottawa Life, and The Lawyer&rsquo;s Daily.
            </p>
          </div>
        </Container>
      </section>

      {/* ARTICLE GRID */}
      <section className="pb-24 md:pb-32 lg:pb-40 bg-[var(--color-paper)]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((a) => (
              <article key={a.slug}>
                <Link
                  href={a.url}
                  className="group block h-full rounded-3xl bg-[var(--color-surface)] border border-[var(--color-rule)] p-8 md:p-9 hover:border-[var(--color-rule-strong)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-secondary-deep)]">
                      {a.publication}
                    </span>
                    {a.original && (
                      <span className="text-[9px] uppercase tracking-[0.14em] font-semibold text-white bg-[var(--color-brand)] px-2 py-0.5 rounded-full">
                        Original
                      </span>
                    )}
                    {a.placeholder && !a.original && (
                      <span className="text-[9px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] bg-[var(--color-surface-deep)] px-2 py-0.5 rounded-full">
                        Republishing
                      </span>
                    )}
                  </div>
                  <h2 className="text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.02em] font-semibold text-[var(--color-ink)] mb-4">
                    {a.title}
                  </h2>
                  <p className="text-[15px] md:text-[16px] leading-[1.6] text-[var(--color-mute)] mb-8 flex-1">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-[var(--color-rule)]">
                    <span className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-mute)]">
                      {a.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] group-hover:gap-3 transition-all">
                      {a.original ? "Read" : "Coming soon"} <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* WHERE EVERT PUBLISHES */}
      <section className="py-20 md:py-24 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
        <Container size="wide">
          <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-8">
            <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--color-secondary-deep)] flex-shrink-0">
              Where Evert publishes
            </p>
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 text-[15px] md:text-[17px] text-[var(--color-ink-soft)]">
              {publications.map((p, i) => (
                <span
                  key={p.name}
                  style={{
                    fontWeight: p.weight,
                    letterSpacing: p.tracking,
                    fontStyle: p.style,
                    textTransform: p.uppercase ? "uppercase" : "none",
                  }}
                >
                  {p.name}
                  {i < publications.length - 1 && (
                    <span className="text-[var(--color-brand)] ml-5 not-italic font-normal" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <PageCTA
        eyebrow="Want this in your inbox?"
        headline={<>Or just<br /><span className="text-brand-gradient">work with us directly.</span></>}
        subhead="We don't yet have a newsletter. We do have a 30-minute intake call. Pick whichever you prefer."
      />
    </>
  );
}
