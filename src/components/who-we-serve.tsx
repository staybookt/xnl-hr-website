"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { buyerPersonas, stageFit } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;
const FADE_UP = { hidden: { opacity: 1, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: SLOW_OUT } } };
const STAGGER = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };


function CanadaMap() {
  return (
    <svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" role="img" aria-label="Stylized map of Canada with Toronto pinned as XNL headquarters">
      <defs>
        <linearGradient id="caMapBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8EDF1"/>
          <stop offset="100%" stopColor="#FAFAFB"/>
        </linearGradient>
      </defs>
      <rect width="480" height="260" rx="16" fill="url(#caMapBg)"/>
      {/* Stylized Canada outline */}
      <path
        d="M30 200 Q40 120 70 95 Q90 78 130 80 Q160 70 200 75 Q240 65 280 78 Q310 70 340 80 Q380 75 420 90 Q450 100 455 130 Q450 165 430 185 Q400 200 370 200 L60 200 Q40 200 30 200 Z"
        fill="#2D3D4E"
        opacity="0.85"
      />
      {/* Atlantic provinces hint */}
      <ellipse cx="430" cy="195" rx="22" ry="8" fill="#2D3D4E" opacity="0.7"/>
      {/* Toronto/Newmarket pin (HQ) */}
      <g>
        <circle cx="335" cy="178" r="16" fill="#E89B7A" opacity="0.25"/>
        <circle cx="335" cy="178" r="7" fill="#E89B7A"/>
        <circle cx="335" cy="178" r="2.8" fill="#FAF7F2"/>
      </g>
      <text x="350" y="175" fontSize="12" fontWeight="700" fill="#1A1D24">Newmarket / GTA</text>
      <text x="350" y="187" fontSize="10" fill="#6b6b6b" letterSpacing="0.04em">XNL headquarters</text>
      {/* Secondary city dots */}
      <circle cx="380" cy="180" r="3" fill="#6B5F7D"/>
      <text x="383" y="195" fontSize="9" fill="#6B5F7D" fontWeight="500">Ottawa / Mtl</text>
      <circle cx="240" cy="170" r="3" fill="#6B5F7D"/>
      <text x="218" y="185" fontSize="9" fill="#6B5F7D" fontWeight="500">Prairies</text>
      <circle cx="110" cy="170" r="3" fill="#6B5F7D"/>
      <text x="90" y="185" fontSize="9" fill="#6B5F7D" fontWeight="500">Vancouver</text>
      {/* Connecting arc from HQ to coastal callouts */}
      <path d="M335 178 Q220 130 110 170" fill="none" stroke="#E89B7A" strokeWidth="1" opacity="0.35" strokeDasharray="3 3"/>
      <path d="M335 178 Q360 165 380 180" fill="none" stroke="#E89B7A" strokeWidth="1" opacity="0.35" strokeDasharray="3 3"/>
      {/* Corner marks */}
      <text x="20" y="28" fontSize="9" fill="#6b6b6b" letterSpacing="0.18em" fontWeight="600">HEADQUARTERED</text>
      <line x1="20" y1="34" x2="100" y2="34" stroke="#E89B7A" strokeWidth="2"/>
      <text x="460" y="28" textAnchor="end" fontSize="9" fill="#6b6b6b" letterSpacing="0.18em" fontWeight="600">COAST TO COAST</text>
    </svg>
  );
}

export function WhoWeServe() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[var(--color-paper)]">
      <Container size="wide">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: SLOW_OUT }}
          className="max-w-4xl mb-16 md:mb-24"
        >
          <p className="eyebrow mb-8">Who we serve</p>
          <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
            Owner-operated employers,<br />
            <span className="text-[var(--color-secondary)]">in the right size band.</span>
          </h2>
        </motion.div>

        {/* BUYER PERSONAS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-28"
        >
          {buyerPersonas.map((p) => (
            <motion.div
              key={p.role}
              variants={FADE_UP}
              className="rounded-3xl bg-[var(--color-surface)] border border-[var(--color-rule)] p-7 md:p-8 flex flex-col"
            >
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-secondary-deep)] mb-3">
                Persona
              </p>
              <h3 className="text-[22px] md:text-[26px] leading-[1.15] tracking-[-0.02em] font-semibold text-[var(--color-ink)] mb-2">
                {p.role}
              </h3>
              <p className="text-[13px] uppercase tracking-[0.08em] font-medium text-[var(--color-mute)] mb-6">
                {p.sub}
              </p>
              <div className="mb-5 pb-5 border-b border-[var(--color-rule)]">
                <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] mb-2">The pain</p>
                <p className="text-[14px] md:text-[15px] leading-[1.55] text-[var(--color-ink-soft)]">{p.pain}</p>
              </div>
              <div className="mt-auto">
                <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] mb-2">How XNL fits</p>
                <p className="text-[14px] md:text-[15px] leading-[1.55] text-[var(--color-ink)]">{p.fit}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* COMPANY STAGE FIT */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: SLOW_OUT }}
          className="mb-20 md:mb-28"
        >
          <p className="eyebrow mb-6">Company stage fit</p>
          <h3 className="text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.025em] font-semibold text-[var(--color-ink)] mb-10 max-w-3xl">
            Where XNL is the right call. And where it isn&rsquo;t.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-rule)] rounded-3xl overflow-hidden border border-[var(--color-rule)]">
            {stageFit.map((s, i) => {
              const isPrimary = s.state === "primary";
              return (
                <motion.div
                  key={s.range}
                  initial={{ opacity: 1, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: SLOW_OUT }}
                  className={`p-7 md:p-9 ${isPrimary ? "bg-[var(--color-brand-soft)] relative" : "bg-[var(--color-paper)]"}`}
                >
                  {isPrimary && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-brand)]" aria-hidden="true" />
                  )}
                  <p className={`text-[10px] uppercase tracking-[0.16em] font-semibold mb-3 ${isPrimary ? "text-[var(--color-brand-deep)]" : "text-[var(--color-secondary-deep)]"}`}>
                    {isPrimary ? "Sweet spot" : "Engagement model"}
                  </p>
                  <p className={`text-[32px] md:text-[40px] leading-none tracking-[-0.025em] font-semibold mb-2 ${isPrimary ? "text-[var(--color-ink)]" : "text-[var(--color-ink-soft)]"}`}>
                    {s.range}
                  </p>
                  <p className={`text-[12px] uppercase tracking-[0.1em] font-medium mb-5 ${isPrimary ? "text-[var(--color-ink-soft)]" : "text-[var(--color-ink-soft)]"}`}>
                    {s.label}
                  </p>
                  <p className={`text-[14px] md:text-[15px] leading-[1.55] ${isPrimary ? "text-[var(--color-ink-soft)]" : "text-[var(--color-ink-soft)]"}`}>
                    {s.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* GEOGRAPHY (Industries panel removed Wave 32 — table-stakes, didn't differentiate) */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: SLOW_OUT }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          <div className="lg:col-span-6">
            <p className="eyebrow mb-6">Where we work</p>
            <h3 className="text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.025em] font-semibold text-[var(--color-ink)] mb-8">
              Headquartered in Ontario.<br />
              <span className="text-[var(--color-secondary)]">Canada-wide on the right files.</span>
            </h3>
            <p className="text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-mute)]">
              Most fractional HR engagements are Ontario-based since that&rsquo;s where the legal frameworks (ESA, OHSA, AODA, HRTO) sit and where Evert is licensed. Editorial work travels anywhere. Mediation work travels where the matter doesn&rsquo;t touch a specific tribunal. Out-of-province and federally regulated work, case by case.
            </p>
          </div>
          <div className="lg:col-span-6">
            <CanadaMap />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
