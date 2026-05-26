import { Container } from "@/components/container";
import { ChevronLink } from "@/components/button";

export const metadata = { title: "About" };

export default function About() {
  return (
    <section className="pt-24 pb-32 md:pt-32">
      <Container size="narrow">
        <p className="eyebrow mb-6">About</p>
        <h1 className="text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold">
          Two principals. Decades of practice. No analysts.
        </h1>
        <p className="text-[var(--text-body-xl)] text-[var(--color-mute)] mt-6">
          XNL HR &amp; Communications has been the outsourced HR department for Ontario employers and not-for-profits since 2012.
        </p>
        <div className="mt-12">
          <ChevronLink href="/contact">Book an intro call</ChevronLink>
        </div>
        <p className="mt-16 text-[14px] text-[var(--color-mute)]">Full principal profiles, awards, publications, and the firm story land here once Evert and Wendy send headshots and final copy.</p>
      </Container>
    </section>
  );
}
