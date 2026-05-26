"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getServiceIcon } from "@/components/icons";

type Service = {
  slug: string;
  name: string;
  blurb: string;
  forLine: string;
  engagement: string;
  price: string;
  typicalLength: string;
  anonymizedCase: string;
  icon: string;
  gradient: string;
};

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group block rounded-3xl overflow-hidden bg-[var(--color-paper)] border border-[var(--color-rule)] transition-all duration-500 hover:border-[var(--color-rule-strong)] hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.18)] h-full flex flex-col"
      >
        {/* Branded gradient header with icon */}
        <div
          className="relative aspect-[5/4] overflow-hidden flex items-center justify-center"
          style={{ background: service.gradient }}
        >
          <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-white/55">
            <span className="text-[10px] uppercase tracking-[0.18em] font-semibold">
              0{index + 1}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] font-semibold">
              {service.engagement}
            </span>
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "3px 3px",
              mixBlendMode: "overlay",
            }}
            aria-hidden="true"
          />
          <div className="relative text-white/90 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[3deg]">
            {getServiceIcon(service.icon, { size: 92 })}
          </div>
          <div className="absolute bottom-5 left-5 right-5 text-[10px] uppercase tracking-[0.18em] font-semibold text-white/55">
            XNL / {service.slug.toUpperCase()}
          </div>
        </div>

        <div className="p-8 md:p-10 flex-1 flex flex-col">
          <h3 className="text-[length:var(--text-display-md)] leading-[var(--text-display-md--line-height)] tracking-[var(--text-display-md--letter-spacing)] font-semibold text-[var(--color-ink)] mb-4">
            {service.name}
          </h3>
          <p className="text-[16px] md:text-[17px] leading-[1.55] text-[var(--color-mute)] mb-5">
            {service.blurb}
          </p>

          {/* Pricing band — illustrative placeholders */}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-6">
            <span className="text-[18px] font-semibold text-[var(--color-ink)]">{service.price}</span>
            <span className="text-[13px] text-[var(--color-mute)]">· {service.typicalLength}</span>
            <span className="inline-flex items-center text-[9px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full ml-1" title="Placeholder pricing — see PLACEHOLDERS.md">
              Illustrative
            </span>
          </div>

          {/* Anonymized case — illustrative placeholder */}
          <div className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-rule)] p-5 mb-6 flex-1">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-secondary-deep)]">
                Recent work
              </p>
              <span className="text-[9px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full" title="Illustrative example — see PLACEHOLDERS.md">
                Example
              </span>
            </div>
            <p className="text-[13px] md:text-[14px] leading-[1.55] text-[var(--color-ink-soft)] italic">
              {service.anonymizedCase}
            </p>
          </div>

          <p className="text-[12px] leading-[1.5] text-[var(--color-mute-soft)] mb-6">
            <span className="uppercase tracking-[0.1em] font-semibold text-[var(--color-mute)] mr-1.5">Best for</span>
            {service.forLine}
          </p>

          <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] group-hover:gap-3 transition-all">
            Learn more
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
