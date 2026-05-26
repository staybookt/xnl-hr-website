import { Container } from "@/components/container";
import { contact, principals } from "@/data/site";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <section className="pt-24 pb-32 md:pt-32">
      <Container size="narrow">
        <p className="eyebrow mb-6">Contact</p>
        <h1 className="text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold">
          Book a 30-minute intro call.
        </h1>
        <p className="text-[var(--text-body-xl)] text-[var(--color-mute)] mt-6">
          No cost, no obligation. We&rsquo;ll scope the problem and tell you whether XNL is the right fit — or refer you to someone who is.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="rounded-2xl bg-[var(--color-surface)] p-8">
            <p className="eyebrow mb-3">Direct</p>
            <p className="text-[18px]">
              <a href={`tel:${contact.phoneE164}`} className="hover:underline">{contact.phone}</a>
            </p>
            <p className="text-[18px] mt-1">
              <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
            </p>
            <p className="text-[14px] text-[var(--color-mute)] mt-4">{contact.hours}</p>
          </div>

          <div className="rounded-2xl bg-[var(--color-surface)] p-8">
            <p className="eyebrow mb-3">Office</p>
            <p className="text-[18px]">{contact.address.locality}, {contact.address.region}</p>
            <p className="text-[14px] text-[var(--color-mute)] mt-4">Calendly embed lands here.</p>
          </div>
        </div>

        <p className="mt-12 text-[14px] text-[var(--color-mute)]">
          LinkedIn: <a href={principals.evert.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Evert Akkerman</a>
        </p>
      </Container>
    </section>
  );
}
