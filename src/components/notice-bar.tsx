import Link from "next/link";
import { contact } from "@/data/site";

export function NoticeBar() {
  return (
    <div className="bg-[var(--color-ink)] text-white relative z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-2 flex items-center justify-between gap-4 text-[12px] md:text-[13px]">
        <Link href="/services/mediation" className="flex items-center gap-2.5 min-w-0 hover:opacity-80 transition-opacity">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] flex-shrink-0" aria-hidden="true" />
          <span className="truncate">
            <span className="font-semibold uppercase tracking-[0.12em] mr-2 text-[var(--color-brand)]">New</span>
            <span className="opacity-85">Workplace mediation now booking with Wendy Akkerman</span>
          </span>
        </Link>
        <a
          href={`tel:${contact.phoneE164}`}
          className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap font-medium hover:opacity-80 transition-opacity opacity-85"
        >
          {contact.phone}
        </a>
      </div>
    </div>
  );
}
