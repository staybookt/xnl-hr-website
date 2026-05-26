import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { ChevronLink } from "@/components/button";
import { credentials, services } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* Hero — centered, Apple-style */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-24">
        <Container size="narrow">
          <p className="eyebrow text-center mb-6">Fractional HR + Workplace Mediation · Newmarket, ON</p>
          <h1 className="text-[var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-center text-[var(--color-ink)]">
            Senior HR, scoped by the project.
          </h1>
          <p className="text-[var(--text-body-xl)] leading-[1.45] text-[var(--color-mute)] text-center mt-6 max-w-2xl mx-auto">
            No retainers. No junior staff. The outsourced HR department for Ontario&rsquo;s owner-operated employers and not-for-profits — built by a CHRL with an LL.M. and 13 years of bylines.
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mt-10">
            <ChevronLink href="/contact">Book an intro call</ChevronLink>
            <ChevronLink href="/articles">Read the latest</ChevronLink>
          </div>
        </Container>

        {/* Hero photo */}
        <Container className="mt-16 md:mt-20">
          <div className="relative mx-auto max-w-[820px] aspect-[5/4] rounded-2xl overflow-hidden bg-[var(--color-surface)]">
            <Image
              src="https://static.wixstatic.com/media/2e7f90_399c0d422360430fb9585e302117a88c~mv2.jpg/v1/fill/w_1200,h_960,al_c,q_85,enc_auto/2e7f90_399c0d422360430fb9585e302117a88c~mv2.jpg"
              alt="Evert Akkerman, founder of XNL HR & Communications"
              fill
              priority
              sizes="(min-width: 1024px) 820px, 100vw"
              className="object-cover"
            />
          </div>
          <p className="text-center mt-5 text-[13px] text-[var(--color-mute)]">
            Evert Akkerman, CHRL, LL.M. · Founder · Canada&rsquo;s Top-25 HR Professionals, 2016 + 2017
          </p>
        </Container>
      </section>

      {/* Credentials strip */}
      <section className="border-y border-[var(--color-rule)] bg-[var(--color-surface)]">
        <Container className="py-8 overflow-x-auto">
          <div className="flex items-center justify-center gap-10 text-[13px] text-[var(--color-mute)] whitespace-nowrap min-w-max">
            {credentials.map((c, i) => (
              <span key={c} className="inline-flex items-center gap-10">
                <span className={i === 0 ? "text-[var(--color-ink)] font-medium" : ""}>{c}</span>
                {i < credentials.length - 1 && <span aria-hidden="true" className="text-[var(--color-rule)]">·</span>}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Three practices */}
      <section className="py-24 md:py-32">
        <Container>
          <p className="eyebrow text-center mb-4">Three practices · One senior partner each</p>
          <h2 className="text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-center max-w-3xl mx-auto">
            HR Support and Editorial run by Evert. Workplace Mediation run by Wendy. No analysts.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block rounded-2xl bg-[var(--color-surface)] p-8 md:p-10 hover:bg-[#ececef] transition-colors"
              >
                <p className="text-[11px] uppercase tracking-[0.1em] font-medium text-[var(--color-accent)] mb-4">
                  {s.principal}
                </p>
                <h3 className="text-[var(--text-display-md)] leading-tight tracking-tight font-semibold mb-3">
                  {s.name}
                </h3>
                <p className="text-[16px] leading-[1.55] text-[var(--color-mute)] mb-6">
                  {s.blurb}
                </p>
                <span className="inline-flex items-center gap-1 text-[15px] text-[var(--color-accent)]">
                  Learn more
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">›</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="py-24 md:py-32 bg-[var(--color-surface)]">
        <Container size="narrow">
          <h2 className="text-[var(--text-display-lg)] leading-[var(--text-display-lg--line-height)] tracking-[var(--text-display-lg--letter-spacing)] font-semibold text-center">
            Ready to scope a project?
          </h2>
          <p className="text-[var(--text-body-xl)] text-[var(--color-mute)] text-center mt-5 max-w-xl mx-auto">
            30 minutes, no cost, no obligation. We&rsquo;ll tell you whether XNL is the right fit — or refer you to someone who is.
          </p>
          <div className="flex justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-7 py-3.5 text-[15px] font-medium hover:bg-[var(--color-accent)] transition-colors"
            >
              Book an intro call
              <span aria-hidden="true">›</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
