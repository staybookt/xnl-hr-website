import Link from "next/link";
import { contact, site, principals } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--color-ink)] text-white overflow-hidden border-t border-white/10">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 10% 30%, rgba(150, 144, 181, 0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 92% 75%, rgba(232, 155, 122, 0.16) 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20">
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-brand)]" aria-hidden="true" />
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-semibold text-white/75">
            {site.shortName} · {site.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.14em] font-semibold text-white/45 mb-5">
              Practice
            </h3>
            <ul className="space-y-2.5 text-[14px] text-white/85">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/approach" className="hover:text-white transition-colors">Approach</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.14em] font-semibold text-white/45 mb-5">
              Services
            </h3>
            <ul className="space-y-2.5 text-[14px] text-white/85">
              <li><Link href="/services/hr-support" className="hover:text-white transition-colors">Fractional HR</Link></li>
              <li><Link href="/services/editorial" className="hover:text-white transition-colors">Editorial &amp; Communications</Link></li>
              <li><Link href="/services#pricing" className="hover:text-white transition-colors">Rates</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.14em] font-semibold text-white/45 mb-5">
              Contact
            </h3>
            <ul className="space-y-2.5 text-[14px] text-white/85">
              <li><a href={`tel:${contact.phoneE164}`} className="hover:text-white transition-colors">{contact.phone}</a></li>
              <li><a href={`mailto:${contact.email}`} className="hover:text-white transition-colors break-all">{contact.email}</a></li>
              <li className="text-white/65">{contact.address.locality}, {contact.address.region}</li>
              <li className="text-white/55">{contact.hours}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.14em] font-semibold text-white/45 mb-5">
              Connect
            </h3>
            <ul className="space-y-2.5 text-[14px] text-white/85">
              <li>
                <a href={principals.evert.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Evert on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 md:gap-5 md:items-center justify-between text-[12px] text-white/55">
          <p>© {year} {site.legalName}. Newmarket, Ontario.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            <span aria-hidden="true" className="text-white/25">·</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <span aria-hidden="true" className="text-white/25">·</span>
            <p>
              Site by <a href="https://staybookt.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">StayBookt</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
