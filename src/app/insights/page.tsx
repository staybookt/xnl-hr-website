import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageCTA } from "@/components/page-cta";
import { articles, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Insights · Evert Akkerman bylines · XNL HR & Communications",
  description:
    "Curated archive of Evert Akkerman's published bylines on Canadian HR, employment law, workplace governance, and business operations. Featured in Talent Canada, Law360 Canada, Canadian HR Reporter, Municipal World, HR News Canada, and others.",
  alternates: { canonical: "/insights" },
};

const typeLabel: Record<string, string> = {
  byline: "Byline",
  "co-byline": "Co-byline",
  feature: "Feature",
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Evert Akkerman published bylines",
  itemListElement: articles.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Article",
      headline: a.title,
      author: { "@type": "Person", name: "Evert Akkerman", "@id": `${site.url}/about#evert` },
      publisher: { "@type": "Organization", name: a.publication },
      datePublished: a.date,
      url: a.url.startsWith("http") ? a.url : `${site.url}/insights`,
      description: a.excerpt,
    },
  })),
};

export default function InsightsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      {/* HEADER */}
      <section className="bg-[var(--color-paper)] pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-16 border-b border-[var(--color-rule)]">
        <Container size="wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-8">Insights</p>
            <h1 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
              Where Evert is<br />
              <span className="text-brand-gradient">publishing.</span>
            </h1>
            <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-[var(--color-mute)] max-w-3xl">
              Curated archive of bylined columns and features on Canadian HR, employment law, workplace governance, and business operations. Each piece links out to the original publication. Law360 Canada articles are available as PDFs on request.
            </p>
          </div>
        </Container>
      </section>

      {/* GRID */}
      <section className="py-20 md:py-28 lg:py-32 bg-[var(--color-paper)]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((a, i) => {
              const isMailto = a.url.startsWith("mailto:");
              return (
                <article key={i} className="group">
                  <a
                    href={a.url}
                    target={isMailto ? undefined : "_blank"}
                    rel={isMailto ? undefined : "noopener noreferrer external"}
                    className="flex flex-col h-full rounded-3xl bg-[var(--color-surface)] border border-[var(--color-rule)] p-7 md:p-9 hover:border-[var(--color-rule-strong)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                      <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-secondary-deep)]">
                        {a.publication}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full">
                        {typeLabel[a.type] ?? "Byline"}
                      </span>
                    </div>
                    <h3 className="text-[19px] md:text-[22px] leading-[1.25] tracking-[-0.018em] font-semibold text-[var(--color-ink)] mb-4">
                      {a.title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] leading-[1.6] text-[var(--color-mute)] mb-8 flex-1">
                      {a.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t border-[var(--color-rule)]">
                      <span className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-mute)]">
                        {a.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] group-hover:gap-3 transition-all">
                        {isMailto ? "Request PDF" : `Read on ${a.publication}`} <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>

          <p className="text-[13px] md:text-[14px] leading-[1.55] text-[var(--color-mute)] mt-14 md:mt-20 max-w-3xl">
            For PDF copies of Law360 Canada columns or any of Evert&rsquo;s other published work, email{" "}
            <a href="mailto:info@xnlhr.com" className="text-[var(--color-slate)] underline underline-offset-4 hover:text-[var(--color-brand-deep)]">info@xnlhr.com</a>.
          </p>
        </Container>
      </section>

      <PageCTA
        eyebrow="Have a piece that needs writing?"
        headline={<>Briefs, op-eds,<br /><span className="text-brand-gradient">board memos.</span></>}
        subhead="Evert ghostwrites under your byline, or writes under his own. Brief call, no cost. Fixed-fee quote within two days."
      />
    </>
  );
}
