import Link from "next/link";
import { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

/** Apple-style filled pill button — dark fill, white text, used sparingly */
export function ButtonFilled({ children, href, onClick, className = "", type, ariaLabel }: CommonProps) {
  const classes = `inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-6 py-3 text-[15px] font-medium transition-colors hover:bg-[var(--color-accent)] focus-visible:bg-[var(--color-accent)] ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

/** Apple-style chevron link — blue text, ›, animated translate on hover */
export function ChevronLink({ children, href = "#", className = "" }: CommonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1 text-[17px] text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] hover:underline underline-offset-[6px] ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-0.5">
        ›
      </span>
    </Link>
  );
}
