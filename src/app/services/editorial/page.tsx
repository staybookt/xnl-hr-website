import { Container } from "@/components/container";
import { ChevronLink } from "@/components/button";

export const metadata = { title: "Editorial & Communications" };

export default function Editorial() {
  return (
    <section className="pt-24 pb-32 md:pt-32">
      <Container size="narrow">
        <p className="eyebrow mb-6">Editorial &amp; Communications · Evert Akkerman</p>
        <h1 className="text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold">
          The HR partner who can also write.
        </h1>
        <p className="text-[var(--text-body-xl)] text-[var(--color-mute)] mt-6">
          Senior editing and communications work — for HR teams, founders, and professionals who need words that land.
        </p>
        <div className="mt-10">
          <ChevronLink href="/contact">Book an intro call</ChevronLink>
        </div>
      </Container>
    </section>
  );
}
