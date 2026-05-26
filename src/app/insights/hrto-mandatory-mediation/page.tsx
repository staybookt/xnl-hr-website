import Link from "next/link";
import { Container } from "@/components/container";
import { PageCTA } from "@/components/page-cta";
import { SignatureEvert } from "@/components/signature";

export const metadata = { title: "The HRTO mandatory-mediation rule: what Ontario employers misunderstand" };

export default function HRTOArticle() {
  return (
    <>
      {/* ARTICLE HEADER */}
      <section className="bg-[var(--color-paper)] pt-24 md:pt-32 pb-12 md:pb-16">
        <Container size="narrow">
          <Link href="/insights" className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] font-semibold text-[var(--color-secondary-deep)] hover:text-[var(--color-brand)] transition-colors mb-12">
            <span aria-hidden="true">←</span> All insights
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--color-secondary-deep)]">XNL Insights</span>
            <span className="text-[var(--color-rule-strong)]" aria-hidden="true">·</span>
            <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--color-mute)]">January 2026</span>
            <span className="text-[9px] uppercase tracking-[0.14em] font-semibold text-white bg-[var(--color-brand)] px-2 py-0.5 rounded-full ml-2">Original</span>
          </div>
          <h1 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
            The HRTO mandatory-mediation rule: <span className="text-brand-gradient">what Ontario employers misunderstand.</span>
          </h1>
          <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-[var(--color-mute)] mb-10">
            Six months in, most employers I speak with are still treating mandatory mediation as a procedural delay. They&rsquo;re wrong — and the cost of that misunderstanding is showing up in their settlement records, their legal bills, and the morale of the teams they&rsquo;re trying to defend.
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

      {/* ARTICLE BODY */}
      <section className="pb-20 md:pb-28 bg-[var(--color-paper)]">
        <Container size="narrow">
          <article className="prose-article">
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-7">
              In June 2025, the Human Rights Tribunal of Ontario made mediation mandatory for most applications before they proceed to a hearing. The change was designed to reduce a backlog the Tribunal could no longer sustain and to produce better outcomes for both sides. It is doing the first. Whether it is doing the second depends, almost entirely, on how prepared the employer arrives.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-12">
              Three misunderstandings come up most often. They are also the three most expensive.
            </p>

            <h2 className="text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.022em] font-semibold text-[var(--color-ink)] mt-12 mb-5">
              1. &ldquo;Mediation is where the case stalls.&rdquo;
            </h2>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              It is where the case usually resolves. Most matters that reach mandatory mediation settle there. That is the design of the rule and it is also the practical experience. The Tribunal made mediation mandatory because the alternative — full hearings with all the time, cost, and exposure they carry — was overwhelming the system and producing worse outcomes for both sides.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-12">
              If your default frame is &ldquo;let&rsquo;s get through the mediation and on to the real proceeding,&rdquo; you are misreading what mediation is. The real proceeding usually does not happen.
            </p>

            <h2 className="text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.022em] font-semibold text-[var(--color-ink)] mt-12 mb-5">
              2. &ldquo;We&rsquo;ll send our lawyer.&rdquo;
            </h2>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              Send your lawyer to the application. Send a mediator&rsquo;s discipline to the mediation. They are different jobs. A lawyer represents your position; a mediator brokers a settlement. When a lawyer walks into mandatory mediation as the only voice for the employer, the conversation collapses into legal positioning — and the matter usually fails to settle, defaulting to the full hearing the rule was designed to prevent.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-12">
              The employers I see succeed in mandatory mediation pair counsel with a senior HR voice who can speak to the workplace facts, the documentation, and what a livable outcome looks like for both sides.
            </p>

            <h2 className="text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.022em] font-semibold text-[var(--color-ink)] mt-12 mb-5">
              3. &ldquo;We&rsquo;ll start preparing when we get the notice.&rdquo;
            </h2>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              By the time the HRTO notice arrives, the file is already written. Whatever you documented (or didn&rsquo;t) about the termination, the harassment complaint, the accommodation request — that is the record you are going to mediate on.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-12">
              The preparation window for a strong mediation outcome closes weeks or months before the application is filed, not after. The employers who settle well at mandatory mediation are the ones whose files were built defensibly from the start.
            </p>

            <blockquote className="text-[24px] md:text-[28px] leading-[1.35] tracking-[-0.022em] font-medium text-[var(--color-ink)] border-l-2 border-[var(--color-brand)] pl-8 my-16 italic">
              Mediation is not where matters die. It is where they are decided.
            </blockquote>

            <h2 className="text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.022em] font-semibold text-[var(--color-ink)] mt-12 mb-5">
              What employers should be doing now
            </h2>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              Three concrete moves, in order.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              <strong className="text-[var(--color-ink)]">Audit your active people files</strong>, not just the ones with current grievances. Look at the documentation around every termination of the last twenty-four months and every accommodation matter still open. Identify the files that would not survive contact with a mediator&rsquo;s questions, and rebuild the record where you can.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              <strong className="text-[var(--color-ink)]">Brief your HR team on the mediation posture.</strong> The reflex to &ldquo;let the lawyers handle it&rdquo; leaves HR locked out of the room where the matter is actually being decided. HR should be present at mandatory mediation — not as a deferential observer, but as the senior workplace voice. If you do not have a senior HR voice on staff, name one externally before you need one.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-12">
              <strong className="text-[var(--color-ink)]">Stop treating settlement as a loss.</strong> The math of mandatory mediation is that the cost curve for the employer rises sharply between mediation and hearing. A settlement that closes the matter at mediation, even at a higher dollar figure than you would have hoped, is almost always cheaper than the same settlement reached at hearing — and it is vastly cheaper than the alternative outcomes a hearing can produce.
            </p>

            <h2 className="text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.022em] font-semibold text-[var(--color-ink)] mt-12 mb-5">
              Where this leaves us
            </h2>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              The HRTO&rsquo;s mandatory-mediation rule is not a bureaucratic detour. It is a structural change in how human-rights matters in Ontario actually resolve. The employers who recognize that — and who prepare for it like the high-stakes conversation it is — settle well, preserve their teams, and stop bleeding legal fees on hearings they never needed.
            </p>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[var(--color-ink-soft)] mb-12">
              The employers who treat it as a procedural delay learn the cost of that frame in cheques they did not have to write.
            </p>

            <div className="mt-16 pt-10 border-t border-[var(--color-rule)]">
              <span className="inline-flex items-center text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2.5 py-1 rounded-full mb-5">
                Draft pending review
              </span>
              <p className="text-[14px] leading-[1.65] text-[var(--color-mute)] italic">
                This piece is a draft published under XNL&rsquo;s Insights program. Final editorial review by Evert Akkerman pending before promotion to publication. The arguments and structure are illustrative of the XNL Insights editorial voice.
              </p>
            </div>
          </article>
        </Container>
      </section>

      <PageCTA
        eyebrow="On a real HRTO matter?"
        headline={
          <>
            Talk to Wendy.<br />
            <span className="text-brand-gradient">Time-sensitive.</span>
          </>
        }
        subhead="Mandatory mediation prep moves fast once a notice is in hand. Intake call within 48 hours."
      />
    </>
  );
}
