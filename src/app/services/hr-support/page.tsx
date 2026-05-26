import { Container } from "@/components/container";
import { ChevronLink } from "@/components/button";

export const metadata = { title: "HR Support" };

export default function HRSupport() {
  return (
    <section className="pt-24 pb-32 md:pt-32">
      <Container size="narrow">
        <p className="eyebrow mb-6">HR Support · Evert Akkerman, CHRL, LL.M.</p>
        <h1 className="text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold">
          Senior HR — by the project, not the month.
        </h1>
        <p className="text-[var(--text-body-xl)] text-[var(--color-mute)] mt-6">
          Outsourced HR for Ontario&rsquo;s owner-operated employers who don&rsquo;t have a senior HR partner — and don&rsquo;t want a retainer.
        </p>
        <div className="mt-10">
          <ChevronLink href="/contact">Book an intro call</ChevronLink>
        </div>
        <p className="mt-16 text-[14px] text-[var(--color-mute)]">
          Full service breakdown, flagship offering scope, comparison table, pricing anchors, and FAQ land here in the next pass.
        </p>
      </Container>
    </section>
  );
}
