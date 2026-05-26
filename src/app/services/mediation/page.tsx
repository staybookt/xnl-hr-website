import { Container } from "@/components/container";
import { ChevronLink } from "@/components/button";

export const metadata = { title: "Workplace Mediation" };

export default function Mediation() {
  return (
    <section className="pt-24 pb-32 md:pt-32">
      <Container size="narrow">
        <p className="eyebrow mb-6">Workplace Mediation · Wendy Akkerman · Now booking</p>
        <h1 className="text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold">
          Resolve it before it goes to court.
        </h1>
        <p className="text-[var(--text-body-xl)] text-[var(--color-mute)] mt-6">
          Independent workplace mediation for Ontario employers — timed to the HRTO mandatory-mediation rule in force since June 2025.
        </p>
        <div className="mt-10">
          <ChevronLink href="/contact">Book an intro call</ChevronLink>
        </div>
      </Container>
    </section>
  );
}
