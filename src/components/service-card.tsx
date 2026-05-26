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
        className="group block rounded-3xl overflow-hidden bg-[var(--color-paper)] border border-[var(--color-rule)] transition-all duration-500 hover:border-[var(--color-rule-strong)] hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.18)]"
      >
        {/* Branded gradient header with icon — NO photography */}
        <div
          className="relative aspect-[5/4] overflow-hidden flex items-center justify-center"
          style={{ background: service.gradient }}
        >
          {/* Editorial corner marks */}
          <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-white/55">
            <span className="text-[10px] uppercase tracking-[0.18em] font-semibold">
              0{index + 1}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] font-semibold">
              {service.engagement}
            </span>
          </div>

          {/* Grain overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "3px 3px",
              mixBlendMode: "overlay",
            }}
            aria-hidden="true"
          />

          {/* Icon */}
          <div className="relative text-white/90 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[3deg]">
            {getServiceIcon(service.icon, { size: 92 })}
          </div>

          {/* Bottom edge mark */}
          <div className="absolute bottom-5 left-5 right-5 text-[10px] uppercase tracking-[0.18em] font-semibold text-white/55">
            XNL / {service.slug.toUpperCase()}
          </div>
        </div>

        <div className="p-8 md:p-10">
          <h3 className="text-[length:var(--text-display-md)] leading-[var(--text-display-md--line-height)] tracking-[var(--text-display-md--letter-spacing)] font-semibold text-[var(--color-ink)] mb-4">
            {service.name}
          </h3>
          <p className="text-[16px] md:text-[17px] leading-[1.55] text-[var(--color-mute)] mb-5">
            {service.blurb}
          </p>
          <p className="text-[13px] leading-[1.5] text-[var(--color-secondary-deep)] mb-7">
            <span className="uppercase tracking-[0.1em] font-semibold mr-2">Best for</span>
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
