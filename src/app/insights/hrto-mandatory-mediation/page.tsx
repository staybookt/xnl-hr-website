import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageCTA } from "@/components/page-cta";
import { SignatureEvert } from "@/components/signature";
import { ScrollProgress } from "@/components/scroll-progress";
import { ArticleShare } from "@/components/article-share";
import { articles, site } from "@/data/site";

export const metadata: Metadata = {
  title: "The HRTO mandatory-mediation rule: what Ontario employers misunderstand",
  description:
    "Six months into the HRTO mandatory-mediation rule, most employers are still treating it as a procedural delay. They're wrong. Evert Akkerman on the three most expensive misunderstandings and what employers should be doing now.",
  alternates: { canonical: "/insights/hrto-mandatory-mediation" },
  openGraph: {
    type: "article",
    publishedTime: "2026-01-15",
    authors: ["Evert Akkerman"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The HRTO mandatory-mediation rule: what Ontario employers misunderstand",
  description:
    "Six months into the HRTO mandatory-mediation rule, most employers are still treating it as a procedural delay. They're wrong. Three misunderstandings and what employers should be doing now.",
  datePublished: "2026-01-15",
  author: { "@type": "Person", name: "Evert Akkerman", jobTitle: "CHRL, LL.M." },
  publisher: { "@id": `${site.url}/#organization` },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/insights/hrto-mandatory-mediation` },
  about: [
    { "@type": "Thing", name: "Human Rights Tribunal of Ontario" },
    { "@type": "Thing", name: "Workplace mediation" },
    { "@type": "Thing", name: "Mandatory mediation rule" },
  ],
};

export default function HRTOArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ScrollProgress />

      <section className="bg-[var(--color-paper)] pt-24 md:pt-32 pb-12 md:pb-16">
        <Container size="narrow">
          <Link href="/insights" className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] font-semibold text-[var(--color-secondary-deep)] hover:text-[var(--color-brand)] transition-colors mb-12">
            <span aria-hidden="true">←</span> All insights
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--color-secondary-deep)]">XNL Insights</span>
            <span className="text-[var(--color-rule-strong)]" aria-hidden="true">·</span>
            <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--color-mute)]">January 2026</span>
            <span className="text-[var(--color-rule-strong)]" aria-hidden="true">·</span>
            <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--color-mute)]">6 min read</span>
            <span className="text-[9px] uppercase tracking-[0.14em] font-semibold text-white bg-[var(--color-brand)] px-2 py-0.5 rounded-full ml-2">Original</span>
          </div>
          <h1 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
            The HRTO mandatory-mediation rule: <span className="text-brand-gradient">what Ontario employers misunderstand.</span>
          </h1>
          <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-[var(--color-mute)] mb-10">
            Six months in, most employers I talk to are still treating mandatory mediation as a procedural delay. They&rsquo;re wrong. The cost of that misunderstanding is showing up in their settlement records, their legal bills, and the morale of the teams they&rsquo;re trying to defend.
          </p>
          <div className="flex items-center gap-4 pt-6 border-t border-[var(--color-rule)]">
            <SignatureEvert size={36} color="#1A1D24" />
            <div>
              <p className="text-[14px] font-semibold text-[var(--color-ink)]">Evert Akkerman</p>
              <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--color-mute)]">CHRL · LL.M. (NL)</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28 bg-[var(--color-paper)]">
        <Container size="narrow">
          <article>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-7">
              In June 2025, the Human Rights Tribunal of Ontario made mediation mandatory for most applications before they go to a hearing. The change was meant to do two things. Reduce a backlog the Tribunal couldn&rsquo;t sustain. Produce better outcomes for both sides.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-12">
              It&rsquo;s doing the first. Whether it&rsquo;s doing the second comes down to one thing: how prepared the employer arrives. Three misunderstandings come up most often. They&rsquo;re also the three most expensive.
            </p>

            <h2 className="text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.022em] font-semibold text-[var(--color-ink)] mt-12 mb-5">
              1. &ldquo;Mediation is where the case stalls.&rdquo;
            </h2>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              It&rsquo;s where the case usually resolves. Most matters that reach mandatory mediation settle there. That&rsquo;s the design of the rule, and it&rsquo;s the practical experience.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              The Tribunal made mediation mandatory because the alternative was overwhelming the system. Full hearings, with all the time, cost, and exposure they carry. Worse outcomes for both sides.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-12">
              If your default frame is &ldquo;let&rsquo;s get through the mediation and on to the real proceeding,&rdquo; you&rsquo;re misreading what mediation is. The real proceeding usually doesn&rsquo;t happen.
            </p>

            <h2 className="text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.022em] font-semibold text-[var(--color-ink)] mt-12 mb-5">
              2. &ldquo;We&rsquo;ll send our lawyer.&rdquo;
            </h2>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              Send your lawyer to the application. Send a mediator&rsquo;s discipline to the mediation. They&rsquo;re different jobs.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              A lawyer represents your position. A mediator brokers a settlement. When a lawyer walks into mandatory mediation as the only voice for the employer, the conversation collapses into legal positioning. The matter usually fails to settle. It defaults to the full hearing the rule was designed to prevent.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-12">
              The employers I see succeed in mandatory mediation pair counsel with a senior HR voice. Someone who can speak to the workplace facts, the documentation, and what a livable outcome looks like for both sides.
            </p>

            <h2 className="text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.022em] font-semibold text-[var(--color-ink)] mt-12 mb-5">
              3. &ldquo;We&rsquo;ll start preparing when we get the notice.&rdquo;
            </h2>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              By the time the HRTO notice arrives, the file is already written. Whatever you documented (or didn&rsquo;t) about the termination, the harassment complaint, the accommodation request. That&rsquo;s the record you&rsquo;re going to mediate on.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-12">
              The preparation window for a strong mediation outcome closes weeks or months before the application is filed, not after. The employers who settle well at mandatory mediation are the ones whose files were built defensibly from the start.
            </p>

            <blockquote className="text-[24px] md:text-[28px] leading-[1.35] tracking-[-0.022em] font-medium text-[var(--color-ink)] border-l-2 border-[var(--color-brand)] pl-8 my-16 italic">
              Mediation isn&rsquo;t where matters die. It&rsquo;s where they get decided.
            </blockquote>

            <h2 className="text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.022em] font-semibold text-[var(--color-ink)] mt-12 mb-5">
              What employers should be doing now
            </h2>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              Three concrete moves, in order.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              <strong className="text-[var(--color-ink)]">Audit your active people files</strong>, not just the ones with current grievances. Look at the documentation around every termination of the last twenty-four months. Every accommodation matter still open. Find the files that wouldn&rsquo;t survive contact with a mediator&rsquo;s questions. Rebuild the record where you can.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              <strong className="text-[var(--color-ink)]">Brief your HR team on the mediation posture.</strong> The reflex to &ldquo;let the lawyers handle it&rdquo; leaves HR locked out of the room where the matter actually gets decided. HR should be present at mandatory mediation. Not as a deferential observer. As the senior workplace voice. If you don&rsquo;t have a senior HR voice on staff, name one externally before you need one.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-12">
              <strong className="text-[var(--color-ink)]">Stop treating settlement as a loss.</strong> The math of mandatory mediation is that the cost curve for the employer rises sharply between mediation and hearing. A settlement that closes the matter at mediation, even at a higher dollar figure than you&rsquo;d have hoped, is almost always cheaper than the same settlement reached at hearing. And it&rsquo;s vastly cheaper than the alternative outcomes a hearing can produce.
            </p>

            <h2 className="text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.022em] font-semibold text-[var(--color-ink)] mt-12 mb-5">
              Where this leaves us
            </h2>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              The HRTO&rsquo;s mandatory-mediation rule isn&rsquo;t a bureaucratic detour. It&rsquo;s a structural change in how human-rights matters in Ontario actually resolve.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              The employers who recognize that, and who prepare for it like the high-stakes conversation it is, settle well. They preserve their teams. They stop bleeding legal fees on hearings they never needed.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-12">
              The employers who treat it as a procedural delay learn the cost of that frame in cheques they didn&rsquo;t have to write.
            </p>

            <ArticleShare
              title="The HRTO mandatory-mediation rule: what Ontario employers misunderstand"
              url="/insights/hrto-mandatory-mediation"
            />

            <div className="mt-12 pt-10 border-t border-[var(--color-rule)] flex items-start gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-slate)] to-[var(--color-slate-deep)] text-white flex items-center justify-center text-[14px] font-semibold tracking-[-0.01em]">
                EA
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[var(--color-ink)] mb-1">Evert Akkerman</p>
                <p className="text-[14px] leading-[1.55] text-[var(--color-mute)]">
                  Founder of XNL HR &amp; Communications. Twenty-five years in Canadian HR practice. CHRL, LL.M. (NL). Named to Canada&rsquo;s Top-25 HR Professionals, 2016 and 2017.
                </p>
              </div>
            </div>

            <div className="mt-12 inline-flex items-center text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2.5 py-1 rounded-full">
              Draft · pending Evert&rsquo;s final review
            </div>
          </article>
        </Container>
      </section>

      {/* MORE FROM EVERT */}
      <section className="bg-[var(--color-surface)] border-y border-[var(--color-rule)] py-20 md:py-28">
        <Container size="narrow">
          <div className="flex items-baseline justify-between mb-10 border-b border-[var(--color-rule)] pb-5">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-[var(--color-ink)] tracking-[-0.015em]">
              More from Evert
            </h2>
            <Link
              href="/insights"
              className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[var(--color-slate)] hover:text-[var(--color-brand-deep)] transition-colors"
            >
              All insights →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            {articles
              .filter((a) => a.slug !== "hrto-mandatory-mediation")
              .slice(0, 2)
              .map((a) => (
                <article key={a.slug} className="group">
                  <Link href={a.url} className="block">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--color-secondary-deep)]">
                        {a.publication}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-[var(--color-mute)]">
                        {a.date}
                      </span>
                    </div>
                    <h3 className="text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.018em] font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-slate)] transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-[15px] md:text-[16px] leading-[1.6] text-[var(--color-mute)]">
                      {a.excerpt}
                    </p>
                  </Link>
                </article>
              ))}
          </div>
        </Container>
      </section>

      <PageCTA
        eyebrow="On a real HRTO matter?"
        headline={<>Talk to Wendy.<br /><span className="text-brand-gradient">Time-sensitive.</span></>}
        subhead="Mandatory mediation prep moves fast once a notice is in hand. Intake call within 48 hours."
      />
    </>
  );
}
