import { Container } from "@/components/container";
import { contact, principals, scenarios } from "@/data/site";

export const metadata = {
  title: "Contact Evert Akkerman · XNL HR & Communications",
  description: "Speak to Evert Akkerman, CHRL. Phone or email to book a 30-minute intro call. Fractional HR and editorial for owner-operated Canadian businesses. Newmarket, Ontario.",
  alternates: { canonical: "/contact" },
};

type Props = {
  searchParams: Promise<{ topic?: string }>;
};

export default async function Contact({ searchParams }: Props) {
  const params = await searchParams;
  const topic = params.topic;
  const scenario = scenarios.find((s) => s.key === topic);

  return (
    <section className="pt-24 pb-32 md:pt-32 bg-[var(--color-paper)]">
      <Container size="narrow">
        {scenario ? (
          <>
            <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[var(--color-brand-deep)] mb-6">
              You said: {scenario.label}
            </p>
            <h1 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
              Let&rsquo;s get you on the phone.
            </h1>
            <p className="text-[length:var(--text-body-xl)] text-[var(--color-mute)] mt-6 leading-[1.55]">
              {scenario.context}
            </p>
            <p className="text-[14px] uppercase tracking-[0.14em] font-semibold text-[var(--color-slate)] mt-4">
              {scenario.urgency}
            </p>
          </>
        ) : (
          <>
            <p className="eyebrow mb-6">Contact</p>
            <h1 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
              Book a 30-minute intro call.
            </h1>
            <p className="text-[length:var(--text-body-xl)] text-[var(--color-mute)] mt-6 leading-[1.55]">
              No cost, no obligation. We&rsquo;ll scope the problem and tell you whether XNL is the right fit, or refer you to someone who is.
            </p>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          <a
            href={`tel:${contact.phoneE164}`}
            className="group block rounded-3xl bg-[var(--color-ink)] text-white p-8 md:p-10 hover:bg-[var(--color-slate)] transition-colors"
          >
            <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand)] mb-4">
              Call Evert
            </p>
            <p className="text-[28px] md:text-[36px] leading-none tracking-[-0.02em] font-semibold mb-3">
              {contact.phone}
            </p>
            <p className="text-[13px] uppercase tracking-[0.14em] font-semibold mt-6 inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
              Tap to call <span aria-hidden="true">→</span>
            </p>
          </a>

          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent(scenario ? `XNL inquiry · ${scenario.label}` : "XNL intake request")}`}
            className="group block rounded-3xl bg-[var(--color-surface)] border border-[var(--color-rule)] p-8 md:p-10 hover:border-[var(--color-rule-strong)] transition-colors"
          >
            <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-secondary-deep)] mb-4">
              Email Evert
            </p>
            <p className="text-[20px] md:text-[24px] leading-tight tracking-[-0.015em] font-semibold text-[var(--color-ink)] mb-3 break-all">
              {contact.email}
            </p>
            <p className="text-[13px] text-[var(--color-mute)]">Reply within 1 business day.</p>
            <p className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[var(--color-slate)] mt-6 inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
              Open mail <span aria-hidden="true">→</span>
            </p>
          </a>
        </div>

        <div className="mt-10 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-rule)] p-6 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] mb-2">
            How we work
          </p>
          <p className="text-[15px] md:text-[16px] leading-[1.55] text-[var(--color-ink-soft)]">
            Phone or email. We don&rsquo;t use online booking. The intake is a conversation, and conversations start on the line.
          </p>
        </div>

        <p className="mt-12 text-[14px] text-[var(--color-mute)]">
          {contact.address.locality}, {contact.address.region} ·{" "}
          <a href={principals.evert.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-slate)] hover:underline">
            Evert on LinkedIn
          </a>
        </p>
      </Container>
    </section>
  );
}
