import Link from "next/link";
import { Container } from "@/components/container";
import { services } from "@/data/site";

export const metadata = { title: "Services" };

export default function Services() {
  return (
    <section className="pt-24 pb-32 md:pt-32">
      <Container size="narrow">
        <p className="eyebrow mb-6">Services</p>
        <h1 className="text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold">
          Three practices. One senior partner each.
        </h1>
        <p className="text-[var(--text-body-xl)] text-[var(--color-mute)] mt-6">
          HR Support and Editorial run by Evert. Workplace Mediation run by Wendy. No analysts. No outsourcing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group block rounded-2xl bg-[var(--color-surface)] p-8 hover:bg-[#ececef] transition-colors"
            >
              <p className="text-[11px] uppercase tracking-[0.1em] font-medium text-[var(--color-accent)] mb-3">{s.principal}</p>
              <h3 className="text-[22px] font-semibold tracking-tight mb-3">{s.name}</h3>
              <p className="text-[15px] leading-[1.55] text-[var(--color-mute)] mb-6">{s.blurb}</p>
              <span className="inline-flex items-center gap-1 text-[15px] text-[var(--color-accent)]">
                Learn more
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">›</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
