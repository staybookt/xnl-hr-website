import Link from "next/link";
import { Container } from "@/components/container";
import { contact, services } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* HERO — full-bleed ink black, typography-first */}
      <section className="relative bg-[var(--color-ink-deep)] text-[var(--color-paper)] -mt-16 md:-mt-20 pt-36 md:pt-52 pb-32 md:pb-48 overflow-hidden">
        {/* Subtle radial depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 30% 35%, rgba(212,160,74,0.08) 0%, rgba(10,10,12,0) 60%)",
          }}
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="max-w-5xl">
            {/* Eyebrow chip */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] text-[13px] font-medium mb-10 md:mb-14">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>Newmarket, ON · Serving Ontario SMBs &amp; not-for-profits</span>
            </div>

            {/* MASSIVE H1 */}
            <h1 className="text-[var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold mb-10 md:mb-12">
              Senior HR.
              <br />
              <span className="text-[var(--color-paper-muted)]">Scoped by the project.</span>
            </h1>

            {/* Credentials-loaded sub */}
            <p className="text-[19px] md:text-[22px] leading-[1.5] text-[var(--color-paper-muted)] max-w-3xl mb-10 md:mb-12">
              No retainers. No junior staff. The outsourced HR department for Ontario&rsquo;s owner-operated employers and not-for-profits — built by a{" "}
              <span className="text-[var(--color-paper)] font-medium">CHRL with an LL.M.</span>, 13 years of bylines in{" "}
              <span className="text-[var(--color-paper)] font-medium">Canadian HR Reporter</span>,{" "}
              <span className="text-[var(--color-paper)] font-medium">Municipal World</span>, and{" "}
              <span className="text-[var(--color-paper)] font-medium">Ottawa Life</span>, and Canada&rsquo;s Top-25 HR Professionals 2016 + 2017.
            </p>

            {/* Two-tier CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center mb-14 md:mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-amber)] text-[var(--color-ink-deep)] px-7 py-4 text-[16px] font-medium hover:bg-[var(--color-paper)] transition-colors"
              >
                Book an intro call
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={`tel:${contact.phoneE164}`}
                className="inline-flex items-center gap-2 text-[16px] hover:text-[var(--color-amber)] transition-colors"
              >
                <span className="text-[var(--color-amber)]">•</span>
                Call Evert — {contact.phone}
              </a>
            </div>

            {/* Inline credentials row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[var(--color-paper-muted)] border-t border-white/[0.08] pt-8">
              <span className="font-medium text-[var(--color-paper)]">Since 2012</span>
              <span aria-hidden="true" className="opacity-30">|</span>
              <span>CHRL</span>
              <span aria-hidden="true" className="opacity-30">|</span>
              <span>LL.M. (NL)</span>
              <span aria-hidden="true" className="opacity-30">|</span>
              <span>Randstad Innovation in HR Award</span>
              <span aria-hidden="true" className="opacity-30">|</span>
              <span>Canada&rsquo;s Top-25 HR · 2016, 2017</span>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST STRIP — publication mastheads */}
      <section className="bg-[var(--color-paper)] border-b border-[var(--color-rule)]">
        <Container className="py-12 md:py-16">
          <p className="text-center text-[11px] uppercase tracking-[0.2em] text-[var(--color-mute)] mb-7 md:mb-8">
            Published in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-10 gap-y-4 text-[13px] md:text-[14px] uppercase tracking-[0.14em] text-[var(--color-ink)] font-medium">
            <span>Canadian HR Reporter</span>
            <span className="text-[var(--color-rule)] hidden md:inline" aria-hidden="true">•</span>
            <span>Municipal World</span>
            <span className="text-[var(--color-rule)] hidden md:inline" aria-hidden="true">•</span>
            <span>Ottawa Life</span>
            <span className="text-[var(--color-rule)] hidden md:inline" aria-hidden="true">•</span>
            <span>Talent Canada</span>
            <span className="text-[var(--color-rule)] hidden md:inline" aria-hidden="true">•</span>
            <span>The Lawyer&rsquo;s Daily</span>
            <span className="text-[var(--color-rule)] hidden md:inline" aria-hidden="true">•</span>
            <span>HR Professional Now</span>
            <span className="text-[var(--color-rule)] hidden md:inline" aria-hidden="true">•</span>
            <span>HR Gazette</span>
          </div>
        </Container>
      </section>

      {/* Three practices */}
      <section className="py-28 md:py-40 bg-[var(--color-paper)]">
        <Container>
          <p className="eyebrow text-center mb-5">Three practices · One senior partner each</p>
          <h2 className="text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-center max-w-4xl mx-auto mb-16 md:mb-20">
            HR Support and Editorial run by Evert.
            <br />
            Workplace Mediation run by Wendy.
            <br />
            <span className="text-[var(--color-mute)]">No analysts.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block rounded-3xl bg-[var(--color-surface)] p-10 hover:bg-[#ececef] transition-colors"
              >
                <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--color-amber-deep)] mb-5">
                  {s.principal}
                </p>
                <h3 className="text-[28px] leading-[1.15] tracking-tight font-semibold mb-4">
                  {s.name}
                </h3>
                <p className="text-[16px] leading-[1.6] text-[var(--color-mute)] mb-8">
                  {s.blurb}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-amber-deep)] transition-colors">
                  Learn more
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA band — second dark moment */}
      <section className="py-28 md:py-40 bg-[var(--color-ink-deep)] text-[var(--color-paper)]">
        <Container size="narrow">
          <h2 className="text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-center mb-6">
            Ready to scope a project?
          </h2>
          <p className="text-[19px] md:text-[20px] text-[var(--color-paper-muted)] text-center mt-6 max-w-2xl mx-auto mb-12">
            30 minutes, no cost, no obligation. We&rsquo;ll tell you whether XNL is the right fit — or refer you to someone who is.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] text-[var(--color-ink-deep)] px-7 py-4 text-[16px] font-medium hover:bg-[var(--color-paper)] transition-colors"
            >
              Book an intro call
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={`tel:${contact.phoneE164}`}
              className="inline-flex items-center gap-2 text-[16px] hover:text-[var(--color-amber)] transition-colors"
            >
              <span className="text-[var(--color-amber)]">•</span>
              {contact.phone}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
