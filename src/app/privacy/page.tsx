import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { contact, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "XNL HR & Communications privacy notice. What we collect when you use this site or contact us, why, how long we keep it, and how to ask for it back.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <section className="bg-[var(--color-paper)] pt-24 md:pt-32 lg:pt-40 pb-24 md:pb-32 lg:pb-40">
      <Container size="narrow">
        <p className="eyebrow mb-8">Privacy</p>
        <h1 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-10">
          What we collect.<br />
          <span className="text-brand-gradient">What we don&rsquo;t.</span>
        </h1>
        <p className="text-[length:var(--text-body-xl)] leading-[1.6] text-[var(--color-ink-soft)] mb-16">
          This page is the short, plain-language version. If something here is unclear or you want details, write to{" "}
          <a href={`mailto:${contact.email}`} className="text-[var(--color-slate)] underline underline-offset-4 hover:text-[var(--color-brand-deep)]">
            {contact.email}
          </a>{" "}
          and we&rsquo;ll answer.
        </p>

        <div className="space-y-12 text-[16px] md:text-[17px] leading-[1.7] text-[var(--color-ink-soft)]">
          <div>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[var(--color-ink)] mb-5 tracking-[-0.015em]">
              Who we are
            </h2>
            <p>
              {site.legalName}, headquartered at {contact.address.locality}, {contact.address.region}, Canada. Founded by Evert Akkerman in 2012.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[var(--color-ink)] mb-5 tracking-[-0.015em]">
              What we collect
            </h2>
            <p className="mb-4">
              <strong className="text-[var(--color-ink)]">When you browse:</strong> standard server logs (IP address, browser type, pages visited, referring URL, timestamps). Vercel, our hosting provider, processes these as part of normal site operation. We do not run third-party advertising trackers and do not sell your data.
            </p>
            <p className="mb-4">
              <strong className="text-[var(--color-ink)]">When you contact us:</strong> whatever you choose to share. Typically a name, an email address or phone number, and a description of the matter you want help with.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">When you become a client:</strong> additional information you share with us during the engagement (organizational details, the facts of the file, documents you send us). This is confidential and treated under our professional obligations.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[var(--color-ink)] mb-5 tracking-[-0.015em]">
              Why we collect it
            </h2>
            <ul className="space-y-3 list-none pl-0">
              {[
                "To reply to the inquiry you sent.",
                "To deliver the services you have asked us to deliver.",
                "To meet our legal and regulatory obligations.",
                "To keep this site secure and working.",
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <span aria-hidden="true" className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[var(--color-ink)] mb-5 tracking-[-0.015em]">
              Who sees it
            </h2>
            <p>
              Evert and Wendy. Trusted service providers we use to run the practice (email, calendar, hosting, accounting). No one else. We do not share or sell client information to third parties for marketing.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[var(--color-ink)] mb-5 tracking-[-0.015em]">
              How long we keep it
            </h2>
            <p>
              Inquiry emails are retained for up to two years unless you ask us to delete them sooner. Active client files are retained for the duration of the engagement plus seven years, consistent with professional record-keeping practice. Server logs are retained for up to ninety days.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[var(--color-ink)] mb-5 tracking-[-0.015em]">
              Cookies
            </h2>
            <p>
              This site does not set advertising cookies. We use only the strictly necessary technical cookies our hosting platform requires.
            </p>
          </div>

          <div className="rounded-3xl bg-[var(--color-brand-soft)] border border-[var(--color-rule)] p-8 md:p-10">
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[var(--color-ink)] mb-5 tracking-[-0.015em]">
              Your rights
            </h2>
            <p className="mb-5">
              Under Canadian privacy law (PIPEDA), you can ask us what we hold about you, ask us to correct it, or ask us to delete it. We respond within thirty days, usually much sooner.
            </p>
            <a
              href={`mailto:${contact.email}?subject=Privacy%20request`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-white px-6 py-3 text-[15px] font-medium hover:bg-[var(--color-slate)] transition-colors"
            >
              Make a request
            </a>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[var(--color-ink)] mb-5 tracking-[-0.015em]">
              Changes
            </h2>
            <p>
              We update this page when our practice changes. The date below shows the last time we did.
            </p>
          </div>

          <p className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] pt-10 border-t border-[var(--color-rule)]">
            Last updated · {new Date().toLocaleString("en-CA", { month: "long", year: "numeric" })} · See also our{" "}
            <Link href="/accessibility" className="hover:text-[var(--color-slate)] underline underline-offset-4">
              accessibility statement
            </Link>.
          </p>
        </div>
      </Container>
    </section>
  );
}
