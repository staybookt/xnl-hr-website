"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { contact } from "@/data/site";

type Props = {
  eyebrow?: string;
  headline: ReactNode;
  subhead?: string;
};

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

export function PageCTA({ eyebrow = "Next step", headline, subhead }: Props) {
  return (
    <section className="relative bg-[var(--color-ink)] text-white py-28 md:py-36 lg:py-44 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 12% 25%, rgba(150, 144, 181, 0.32) 0%, transparent 60%), radial-gradient(ellipse 75% 60% at 88% 78%, rgba(232, 155, 122, 0.38) 0%, transparent 60%)",
        }}
      />
      <Container size="wide" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: SLOW_OUT }}
          className="max-w-5xl"
        >
          <p className="eyebrow-brand mb-8">{eyebrow}</p>
          <h2 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-white mb-12">
            {headline}
          </h2>
          {subhead && (
            <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-white/65 max-w-2xl mb-14">
              {subhead}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] text-white px-8 py-4 text-[16px] font-medium hover:bg-[var(--color-brand-deep)] transition-colors"
            >
              Book an intro call <span aria-hidden="true">→</span>
            </Link>
            <a
              href={`tel:${contact.phoneE164}`}
              className="inline-flex items-center gap-2 text-[16px] font-medium text-white hover:text-[var(--color-brand)] transition-colors"
            >
              Or call {contact.phone}
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
