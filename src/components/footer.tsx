import Link from "next/link";
import { contact, site, principals } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-rule)] mt-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-[12px] uppercase tracking-[0.08em] font-medium text-[var(--color-mute)] mb-4">
              {site.shortName}
            </h3>
            <ul className="space-y-2 text-[14px]">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/approach" className="hover:underline">Approach</Link></li>
              <li><Link href="/insights" className="hover:underline">Insights</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/accessibility" className="hover:underline">Accessibility</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] uppercase tracking-[0.08em] font-medium text-[var(--color-mute)] mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-[14px]">
              <li><Link href="/services/hr-support" className="hover:underline">HR Support</Link></li>
              <li><Link href="/services/editorial" className="hover:underline">Editorial &amp; Communications</Link></li>
              <li><Link href="/services/mediation" className="hover:underline">Workplace Mediation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] uppercase tracking-[0.08em] font-medium text-[var(--color-mute)] mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-[14px]">
              <li><a href={`tel:${contact.phoneE164}`} className="hover:underline">{contact.phone}</a></li>
              <li><a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a></li>
              <li>{contact.address.locality}, {contact.address.region}</li>
              <li className="text-[var(--color-mute)]">{contact.hours}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] uppercase tracking-[0.08em] font-medium text-[var(--color-mute)] mb-4">
              Connect
            </h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <a href={principals.evert.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Evert on LinkedIn
                </a>
              </li>
              {principals.wendy.linkedin && (
                <li>
                  <a href={principals.wendy.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Wendy on LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-rule)] flex flex-col md:flex-row gap-4 md:items-center justify-between text-[12px] text-[var(--color-mute)]">
          <p>© {year} {site.legalName}. Newmarket, Ontario.</p>
          <div className="flex items-center gap-5">
            <Link href="/accessibility" className="hover:underline">Accessibility</Link>
            <span aria-hidden="true">·</span>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <span aria-hidden="true">·</span>
            <p>Site by <a href="https://staybookt.com" target="_blank" rel="noopener noreferrer" className="hover:underline">StayBookt</a>.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
