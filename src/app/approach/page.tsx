import Link from "next/link";
import { Container } from "@/components/container";
import { PageCTA } from "@/components/page-cta";
import { FrameworkDiagram } from "@/components/framework-diagram";

export const metadata = { title: "Approach" };

export default function ApproachPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[var(--color-paper)] pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20">
        <Container size="wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-8">Approach</p>
            <h1 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
              How we work,<br />
              <span className="text-brand-gradient">not just what we deliver.</span>
            </h1>
            <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-[var(--color-mute)] max-w-2xl">
              Most HR shops describe what they do. We&rsquo;d rather describe how we do it. The work is what changes. The discipline is what holds.
            </p>
          </div>
        </Container>
      </section>

      <FrameworkDiagram background="surface" />

      {/* LONG-FORM METHODOLOGY */}
      <section className="py-24 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container size="narrow">
          <p className="eyebrow mb-8">The work, in four moves</p>
          <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-12">
            What actually happens when you put a file in front of us.
          </h2>

          <div className="space-y-12">
            <div>
              <p className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-deep)] mb-4">01 · Listen whole</p>
              <h3 className="text-[28px] md:text-[32px] leading-[1.2] tracking-[-0.022em] font-semibold text-[var(--color-ink)] mb-5">
                Before we form a view, we understand the whole room.
              </h3>
              <p className="text-[17px] md:text-[18px] leading-[1.75] text-[var(--color-ink-soft)] mb-3">
                Half the work of senior judgment is knowing what you don&rsquo;t yet know. Most HR engagements arrive with a presenting problem (the termination, the complaint, the policy gap) and a hidden one. The hidden one is usually what determined the outcome.
              </p>
              <p className="text-[17px] md:text-[18px] leading-[1.75] text-[var(--color-ink-soft)]">
                The first hour of every engagement is listening. To the person across from us. To what the file says. To what the room can&rsquo;t yet name. We don&rsquo;t form a recommendation until we&rsquo;ve heard it whole.
              </p>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-deep)] mb-4">02 · Find what&rsquo;s already there</p>
              <h3 className="text-[28px] md:text-[32px] leading-[1.2] tracking-[-0.022em] font-semibold text-[var(--color-ink)] mb-5">
                The record almost always says more than the employer thinks.
              </h3>
              <p className="text-[17px] md:text-[18px] leading-[1.75] text-[var(--color-ink-soft)] mb-3">
                Most HR matters have more documentation than the employer remembers, and less than the employer needs. Before we add to the record, we read what&rsquo;s already in it. The prior performance review. The email from October. The handbook section nobody&rsquo;s opened in three years.
              </p>
              <p className="text-[17px] md:text-[18px] leading-[1.75] text-[var(--color-ink-soft)]">
                The forensic work (what does the record actually say, and where are the gaps that need to close before we can advise) is where we earn the next three steps.
              </p>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-deep)] mb-4">03 · Write what defends</p>
              <h3 className="text-[28px] md:text-[32px] leading-[1.2] tracking-[-0.022em] font-semibold text-[var(--color-ink)] mb-5">
                The test isn&rsquo;t whether it sounds good in the meeting. The test is whether it holds up after.
              </h3>
              <p className="text-[17px] md:text-[18px] leading-[1.75] text-[var(--color-ink-soft)] mb-3">
                Every output we produce is built to survive scrutiny. By an auditor, a tribunal, or a court. That means plain language, specific facts, dated documentation, and language the people on either side of the file can actually live with.
              </p>
              <p className="text-[17px] md:text-[18px] leading-[1.75] text-[var(--color-ink-soft)]">
                Senior judgment, on the page, looks the same as it does in the conversation. Direct, considered, and unhedged.
              </p>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-deep)] mb-4">04 · Stay close to the file</p>
              <h3 className="text-[28px] md:text-[32px] leading-[1.2] tracking-[-0.022em] font-semibold text-[var(--color-ink)] mb-5">
                The partner who worked the file knows the file.
              </h3>
              <p className="text-[17px] md:text-[18px] leading-[1.75] text-[var(--color-ink-soft)] mb-3">
                When the engagement closes, we don&rsquo;t disappear. Quarterly check-ins are standard. Calls during a crisis are expected. Most of our follow-on work comes from a moment six months later when the employer needs a second opinion on something adjacent, and the work is faster because the same partner already knows the room.
              </p>
              <p className="text-[17px] md:text-[18px] leading-[1.75] text-[var(--color-ink-soft)]">
                That continuity is what a project-based engagement model usually loses. We&rsquo;ve built ours to keep it.
              </p>
            </div>
          </div>

          <div className="mt-20 md:mt-24 pt-12 md:pt-16 border-t border-[var(--color-rule)]">
            <p className="eyebrow mb-8">The throughline</p>
            <h2 className="text-[length:var(--text-display-lg)] leading-[1.2] tracking-[-0.025em] font-semibold text-[var(--color-ink)] mb-8">
              Senior judgment isn&rsquo;t a feature.<br />
              <span className="text-[var(--color-secondary)]">It&rsquo;s the deliverable.</span>
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[var(--color-ink-soft)] mb-6">
              You can buy templates from a hundred places for less money. What you can&rsquo;t buy from those places is the judgment to know which template applies to your situation, what to adapt for it, and where the legal frameworks have shifted under documentation you wrote last year.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[var(--color-ink-soft)]">
              That&rsquo;s what we sell. The deliverable is a file, a memo, a handbook, a mediation record. The actual product is the judgment that produced it.
            </p>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-slate)] hover:gap-3 transition-all">
              See the three practices <span aria-hidden="true">→</span>
            </Link>
            <Link href="/insights" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-slate)] hover:gap-3 transition-all">
              Read recent insights <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>

      <PageCTA
        eyebrow="Want this judgment on your file?"
        headline={<>Bring us<br /><span className="text-brand-gradient">the hard one.</span></>}
        subhead="30-minute intake call, no cost. We'll tell you straight whether the file is one we should take."
      />
    </>
  );
}
