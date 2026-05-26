import type { Metadata } from "next";
import { Container } from "@/components/container";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "XNL HR & Communications accessibility statement. AODA-aligned, WCAG 2.2 AA target. Report a barrier directly to Evert.",
  alternates: { canonical: "/accessibility" },
};

export default function Accessibility() {
  return (
    <section className="bg-[var(--color-paper)] pt-24 md:pt-32 lg:pt-40 pb-24 md:pb-32 lg:pb-40">
      <Container size="narrow">
        <p className="eyebrow mb-8">Accessibility</p>
        <h1 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-10">
          We build for people first.
        </h1>
        <p className="text-[length:var(--text-body-xl)] leading-[1.6] text-[var(--color-ink-soft)] mb-16">
          We advise Ontario employers on AODA compliance. We hold ourselves to the same standard. This site targets WCAG 2.2 Level AA. If it falls short, we want to know.
        </p>

        <div className="space-y-12 text-[16px] md:text-[17px] leading-[1.7] text-[var(--color-ink-soft)]">
          <div>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[var(--color-ink)] mb-5 tracking-[-0.015em]">
              Our commitment
            </h2>
            <p>
              XNL HR &amp; Communications follows the Accessibility for Ontarians with Disabilities Act (AODA) and the Integrated Accessibility Standards Regulation. We design and operate this site so that people using assistive technology, keyboard navigation, screen magnifiers, or screen readers can reach the same information as everyone else.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[var(--color-ink)] mb-5 tracking-[-0.015em]">
              What we do
            </h2>
            <ul className="space-y-3 list-none pl-0">
              {[
                "Build to WCAG 2.2 Level AA criteria.",
                "Maintain visible keyboard focus on every interactive element.",
                "Use semantic HTML so screen readers can navigate by landmark and heading.",
                "Pair every meaningful image with a text alternative.",
                "Respect the user's reduced-motion preference.",
                "Keep colour contrast above the AA threshold for body text.",
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-brand)]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[var(--color-ink)] mb-5 tracking-[-0.015em]">
              Where we know we have work to do
            </h2>
            <p>
              No site is perfect on day one. This site is in active development. Known gaps as of this writing: some animations rely on JavaScript rather than the prefers-reduced-motion media query directly, and our stylized illustrated portraits are decorative only and not described in alt text.
            </p>
          </div>

          <div className="rounded-3xl bg-[var(--color-brand-soft)] border border-[var(--color-rule)] p-8 md:p-10">
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[var(--color-ink)] mb-5 tracking-[-0.015em]">
              Report a barrier
            </h2>
            <p className="mb-5">
              If anything on this site is preventing you from getting the information you need, please tell us. We will respond within two business days and tell you when we expect to fix the issue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${contact.email}?subject=Accessibility%20issue`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-white px-6 py-3 text-[15px] font-medium hover:bg-[var(--color-slate)] transition-colors"
              >
                Email {contact.email}
              </a>
              <a
                href={`tel:${contact.phoneE164}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule-strong)] text-[var(--color-ink)] px-6 py-3 text-[15px] font-medium hover:bg-white transition-colors"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[var(--color-ink)] mb-5 tracking-[-0.015em]">
              Alternative formats
            </h2>
            <p>
              We can provide content from this site in large print, plain text, audio, or any other format on request. Email us with what you need.
            </p>
          </div>

          <p className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] pt-10 border-t border-[var(--color-rule)]">
            Last reviewed · {new Date().toLocaleString("en-CA", { month: "long", year: "numeric" })}
          </p>
        </div>
      </Container>
    </section>
  );
}
