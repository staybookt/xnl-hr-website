"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ReactNode, MouseEvent, AnchorHTMLAttributes } from "react";

type Props = {
  href: string;
  event: string;
  properties?: Record<string, string | number | boolean>;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick" | "aria-label" | "target" | "rel" | "children" | "className">;

/**
 * TrackedLink — wraps a link and fires a Vercel Analytics custom event on click
 * before letting the browser navigate. Use for tel:, mailto:, and any conversion CTA.
 *
 * For internal navigation (React routing), it uses next/link. For tel:/mailto:/external,
 * it uses a plain <a> so the browser dispatches to the correct handler.
 *
 * Example:
 *   <TrackedLink href="tel:+12893384001" event="call_click" properties={{location: "contact_page"}}>
 *     Tap to call
 *   </TrackedLink>
 */
export function TrackedLink({
  href,
  event,
  properties,
  children,
  className,
  target,
  rel,
  ariaLabel,
  onClick,
  ...rest
}: Props) {
  const isExternal =
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("http://") ||
    href.startsWith("https://");

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    try {
      track(event, properties);
    } catch {
      // Analytics is best-effort — never block navigation on a failed event
    }
    if (onClick) onClick(e);
  };

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={className}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </Link>
  );
}
