import { Container } from "@/components/container";

export const metadata = { title: "Articles" };

export default function Articles() {
  return (
    <section className="pt-24 pb-32 md:pt-32">
      <Container size="narrow">
        <p className="eyebrow mb-6">Articles</p>
        <h1 className="text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold">
          Bylines from 13 years of writing about HR.
        </h1>
        <p className="text-[var(--text-body-xl)] text-[var(--color-mute)] mt-6">
          Published in Canadian HR Reporter, Municipal World, Ottawa Life, Talent Canada, The Lawyer&rsquo;s Daily, and HRPA.
        </p>
        <p className="mt-12 text-[14px] text-[var(--color-mute)]">
          Article library + topic taxonomy land here once Evert sends his back catalog.
        </p>
      </Container>
    </section>
  );
}
