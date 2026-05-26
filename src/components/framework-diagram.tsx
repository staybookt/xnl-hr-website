"use client";

import { motion } from "framer-motion";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

type Props = {
  eyebrow?: string;
  headline?: string;
  background?: "paper" | "surface";
};

export function FrameworkDiagram({
  eyebrow = "The XNL approach",
  headline = "Three principles. One practice.",
  background = "paper",
}: Props) {
  const bg = background === "paper" ? "bg-[var(--color-paper)]" : "bg-[var(--color-surface)] border-y border-[var(--color-rule)]";

  return (
    <section className={`py-24 md:py-32 lg:py-40 ${bg}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: SLOW_OUT }}
          className="max-w-4xl mb-14 md:mb-20"
        >
          <p className="eyebrow mb-8">{eyebrow}</p>
          <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
            {headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Venn diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: SLOW_OUT }}
            className="lg:col-span-7"
          >
            <svg
              viewBox="0 0 520 440"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              role="img"
              aria-label="XNL approach Venn diagram showing three principles converging at the centre"
            >
              {/* Three overlapping circles */}
              <circle cx="190" cy="170" r="130" fill="#2D3D4E" opacity="0.78" />
              <circle cx="330" cy="170" r="130" fill="#9690B5" opacity="0.78" />
              <circle cx="260" cy="290" r="130" fill="#A8B5A8" opacity="0.78" />

              {/* Centre intersection mark */}
              <circle cx="260" cy="218" r="44" fill="#FFFFFF" stroke="#E89B7A" strokeWidth="2.5" />
              <text x="260" y="215" textAnchor="middle" fontSize="22" fontWeight="600" fill="#1A1D24" letterSpacing="-0.02em">
                XNL
              </text>
              <text x="260" y="232" textAnchor="middle" fontSize="9" letterSpacing="0.18em" fill="#E89B7A" fontWeight="600">
                THE PRACTICE
              </text>
            </svg>
          </motion.div>

          {/* Principles list */}
          <motion.ol
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: SLOW_OUT, delay: 0.15 }}
            className="lg:col-span-5 space-y-7"
          >
            <li className="flex gap-5">
              <span className="flex-shrink-0 w-3 h-3 rounded-full bg-[#2D3D4E] mt-2" aria-hidden="true" />
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-[var(--color-ink)] mb-1">
                  Senior partner on every file
                </h3>
                <p className="text-[15px] leading-[1.55] text-[var(--color-mute)]">
                  No junior staff. No handoffs. The person you hire is the person doing the work.
                </p>
              </div>
            </li>
            <li className="flex gap-5">
              <span className="flex-shrink-0 w-3 h-3 rounded-full bg-[#9690B5] mt-2" aria-hidden="true" />
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-[var(--color-ink)] mb-1">
                  Project-scoped, never retainer-locked
                </h3>
                <p className="text-[15px] leading-[1.55] text-[var(--color-mute)]">
                  Fixed-fee for defined work, hourly with a cap when scope flexes. You pay for outputs.
                </p>
              </div>
            </li>
            <li className="flex gap-5">
              <span className="flex-shrink-0 w-3 h-3 rounded-full bg-[#A8B5A8] mt-2" aria-hidden="true" />
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-[var(--color-ink)] mb-1">
                  Documented to defend
                </h3>
                <p className="text-[15px] leading-[1.55] text-[var(--color-mute)]">
                  Every deliverable holds up under audit, tribunal, or court scrutiny. That&rsquo;s the test.
                </p>
              </div>
            </li>
            <li className="pt-6 border-t border-[var(--color-rule)]">
              <p className="text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">
                <span className="font-semibold text-[var(--color-brand-deep)]">The intersection is the practice.</span>{" "}
                A senior HR firm that doesn&rsquo;t need a retainer to deliver defendable work.
              </p>
            </li>
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
