import Link from "next/link";
import { contact } from "@/data/site";

export function NoticeBar() {
  return (
    <div className="bg-[var(--color-ink)] text-white relative z-50 border-b border-white/8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-3 md:py-3.5 flex items-center justify-between gap-4">
        <Link
          href="/services/mediation"
          className="group flex items-center gap-3 md:gap-4 min-w-0 hover:opacity-90 transition-opacity"
        >
          <span className="relative flex items-center justify-center w-2.5 h-2.5 flex-shrink-0" aria-hidden="true">
            <span className="absolute inset-0 rounded-full bg-[var(--color-brand)] notice-pulse" />
            <span className="relative w-2.5 h-2.5 rounded-full bg-[var(--color-brand)]" />
          </span>
          <span className="inline-flex items-center px-2 py-[3px] rounded-full bg-[var(--color-brand)] text-[10px] md:text-[11px] uppercase tracking-[0.14em] font-semibold text-white flex-shrink-0">
            New
          </span>
          <span className="truncate text-[13px] md:text-[14.5px] leading-[1.3] font-medium">
            Workplace mediation now booking with Wendy Akkerman
            <span className="hidden md:inline ml-2 text-white/55 group-hover:text-white/80 transition-colors">
              Book a session →
            </span>
          </span>
        </Link>
        <a
          href={`tel:${contact.phoneE164}`}
          className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap text-[13px] md:text-[14px] font-medium hover:text-[var(--color-brand)] transition-colors text-white/85"
        >
          {contact.phone}
        </a>
      </div>
    </div>
  );
}
