"use client";

import { useState } from "react";

export function ArticleShare({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${url}` : url;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`;
  const emailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Worth a read: ${fullUrl}`)}`;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-10 pt-8 border-t border-[var(--color-rule)]">
      <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] mr-1 sm:mr-2 w-full sm:w-auto mb-1 sm:mb-0">
        Share
      </span>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-slate)] border border-[var(--color-rule)] hover:border-[var(--color-rule-strong)] rounded-full px-4 py-2.5 transition-colors"
      >
        LinkedIn
      </a>
      <a
        href={emailUrl}
        className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-slate)] border border-[var(--color-rule)] hover:border-[var(--color-rule-strong)] rounded-full px-4 py-2.5 transition-colors"
      >
        Email
      </a>
      <button
        type="button"
        onClick={onCopy}
        className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-slate)] border border-[var(--color-rule)] hover:border-[var(--color-rule-strong)] rounded-full px-4 py-2.5 transition-colors"
      >
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
