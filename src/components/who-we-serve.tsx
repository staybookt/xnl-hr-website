"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { buyerPersonas, stageFit, industries } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;
const FADE_UP = { hidden: { opacity: 1, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: SLOW_OUT } } };
const STAGGER = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };

function IndustryIcon({ name }: { name: string }) {
  const props = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "factory":
      return (
        <svg {...props}><path d="M2 20V10l6 4V10l6 4V8l6 4v8H2z"/><path d="M6 20v-4M12 20v-4M18 20v-4"/></svg>
      );
    case "briefcase":
      return (
        <svg {...props}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></svg>
      );
    case "heart":
      return (
        <svg {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      );
    case "building":
      return (
        <svg {...props}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2"/></svg>
      );
    case "cross":
      return (
        <svg {...props}><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/></svg>
      );
    case "shop":
      return (
        <svg {...props}><path d="M3 9l2-5h14l2 5"/><path d="M3 9v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9"/><path d="M9 22V12h6v10"/></svg>
      );
    default:
      return null;
  }
}

function OntarioMap() {
  return (
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" role="img" aria-label="Stylized map of southern Ontario with Newmarket pinned">
      <defs>
        <linearGradient id="onMapBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8EDF1"/>
          <stop offset="100%" stopColor="#FAFAFB"/>
        </linearGradient>
      </defs>
      <rect width="360" height="220" rx="16" fill="url(#onMapBg)"/>
      <path
        d="M30 90 Q60 70 110 75 Q160 70 200 85 Q240 95 280 90 Q320 85 340 100 L335 125 Q320 145 290 150 Q260 155 230 150 Q200 155 175 165 Q145 175 115 170 Q85 168 60 155 Q35 140 30 115 Z"
        fill="#2D3D4E"
        opacity="0.85"
      />
      <ellipse cx="240" cy="170" rx="55" ry="12" fill="#9690B5" opacity="0.4"/>
      <g>
        <circle cx="205" cy="125" r="14" fill="#E89B7A" opacity="0.3"/>
        <circle cx="205" cy="125" r="6" fill="#E89B7A"/>
        <circle cx="205" cy="125" r="2.5" fill="#FAF7F2"/>
      </g>
      <text x="218" y="122" fontSize="11" fontWeight="600" fill="#1A1D24">Newmarket</text>
      <text x="218" y="134" fontSize="9" fill="#6b6b6b" letterSpacing="0.04em">XNL home base</text>
      <circle cx="195" cy="148" r="3" fill="#6B5F7D"/>
      <text x="180" y="165" fontSize="9" fill="#6B5F7D" fontWeight="500">GTA</text>
      <circle cx="130" cy="145" r="3" fill="#6B5F7D"/>
      <text x="100" y="160" fontSize="9" fill="#6B5F7D" fontWeight="500">SW Ontario</text>
      <circle cx="285" cy="110" r="3" fill="#6B5F7D"/>
      <text x="275" y="100" fontSize="9" fill="#6B5F7D" fontWeight="500">Ottawa</text>
      <text x="20" y="30" fontSize="9" fill="#6b6b6b" letterSpacing="0.18em" fontWeight="600">HEADQUARTERED</text>
      <line x1="20" y1="36" x2="100" y2="36" stroke="#E89B7A" strokeWidth="2"/>
      <text x="340" y="30" textAnchor="end" fontSize="9" fill="#6b6b6b" letterSpacing="0.18em" fontWeight="600">CANADA-WIDE</text>
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
              const isIn = s.state === "in";
              return (
                <motion.div
                  key={s.range}
                  initial={{ opacity: 1, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: SLOW_OUT }}
                  className={`p-7 md:p-9 ${isIn ? "bg-[var(--color-brand-soft)] relative" : "bg-[var(--color-paper)]"}`}
                >
                  {isIn && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-brand)]" aria-hidden="true" />
                  )}
                  <p className={`text-[10px] uppercase tracking-[0.16em] font-semibold mb-3 ${isIn ? "text-[var(--color-brand-deep)]" : "text-[var(--color-mute-soft)]"}`}>
                    {isIn ? "Sweet spot" : "Not the right fit"}
                  </p>
                  <p className={`text-[32px] md:text-[40px] leading-none tracking-[-0.025em] font-semibold mb-2 ${isIn ? "text-[var(--color-ink)]" : "text-[var(--color-mute-soft)]"}`}>
                    {s.range}
                  </p>
                  <p className={`text-[12px] uppercase tracking-[0.1em] font-medium mb-5 ${isIn ? "text-[var(--color-ink-soft)]" : "text-[var(--color-mute)]"}`}>
                    {s.label}
                  </p>
                  <p className={`text-[14px] md:text-[15px] leading-[1.55] ${isIn ? "text-[var(--color-ink-soft)]" : "text-[var(--color-mute)]"}`}>
                    {s.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* INDUSTRIES + GEOGRAPHY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: SLOW_OUT }}
            className="lg:col-span-7"
          >
            <p className="eyebrow mb-6">Industries we know</p>
            <h3 className="text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.025em] font-semibold text-[var(--color-ink)] mb-10">
              Six sectors, recurring patterns.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {industries.map((ind, i) => (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 1, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: SLOW_OUT }}
                  className="flex items-start gap-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-rule)] p-5"
                >
                  <span className="flex-shrink-0 w-11 h-11 rounded-full bg-[var(--color-paper)] border border-[var(--color-rule)] flex items-center justify-center text-[var(--color-slate)]">
                    <IndustryIcon name={ind.icon} />
                  </span>
                  <div>
                    <p className="text-[15px] md:text-[16px] font-semibold text-[var(--color-ink)] mb-1">{ind.name}</p>
                    <p className="text-[12px] leading-[1.5] text-[var(--color-mute)]">{ind.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: SLOW_OUT, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="eyebrow mb-6">Where we work</p>
            <h3 className="text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.025em] font-semibold text-[var(--color-ink)] mb-8">
              Headquartered in Ontario.<br />
              <span className="text-[var(--color-secondary)]">Canada-wide on the right files.</span>
            </h3>
            <OntarioMap />
            <p className="text-[13px] leading-[1.6] text-[var(--color-mute)] mt-5">
              Most fractional HR engagements are Ontario-based since that&rsquo;s where the legal frameworks (ESA, OHSA, AODA, HRTO) sit and where Evert is licensed. Editorial work travels anywhere. Mediation work travels where the matter doesn&rsquo;t touch a specific tribunal. Out-of-province and federally regulated work, case by case.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
