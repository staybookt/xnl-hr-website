import Link from "next/link";
import { contact } from "@/data/site";

export function NoticeBar() {
  return (
    <div className="bg-[var(--color-ink)] text-[var(--color-paper)] relative z-50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-2 flex items-center justify-between gap-4 text-[12px] md:text-[13px]">
        <Link href="/services/mediation" className="flex items-center gap-2.5 min-w-0 hover:opacity-70 transition-opacity">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent-soft)] flex-shrink-0" aria-hidden="true" />
          <span className="truncate">
            <span className="font-semibold uppercase tracking-[0.1em] mr-2 text-[var(--color-accent-soft)]">New</span>
            <span className="opacity-80">Workplace mediation now booking with Wendy Akkerman</span>
          </span>
        </Link>
        <a
          href={`tel:${contact.phoneE164}`}
          className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap font-medium hover:opacity-70 transition-opacity opacity-80"
        >
          {contact.phone}
        </a>
      </div>
    </div>
  );
}
