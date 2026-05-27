"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { PortraitEvert } from "@/components/portrait";
import { SignatureEvert } from "@/components/signature";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;
const FADE_UP = { hidden: { opacity: 1, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: SLOW_OUT } } };
const STAGGER = { hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0 } } };

export function HomeHeroAnim({ publications }: { publications: readonly string[] }) {
  return (
    <>
      <motion.div initial="hidden" animate="show" variants={STAGGER} className="max-w-5xl mx-auto text-center">
        <motion.p variants={FADE_UP} className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] font-semibold text-white/65 mb-10">
          Fractional HR · Workplace Mediation · Editorial
        </motion.p>
        <motion.h1 variants={FADE_UP} className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-white mb-10">
          The outsourced<br />HR <span className="text-brand-gradient">department.</span>
        </motion.h1>
        <motion.p variants={FADE_UP} className="text-[length:var(--text-body-xl)] leading-[var(--text-body-xl--line-height)] text-white/80 max-w-2xl mx-auto mb-14">
          Senior HR judgment, scoped by the project. For owner-operated employers and not-for-profits across Canada.
        </motion.p>
        <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] text-white px-8 py-4 text-[16px] font-semibold hover:bg-[var(--color-brand-deep)] transition-colors shadow-lg shadow-[var(--color-brand)]/20">
            Book a 30-min intro call <span aria-hidden="true">→</span>
          </Link>
          <Link href="/insights" className="inline-flex items-center justify-center gap-2 text-[16px] font-medium text-white/85 hover:text-white transition-colors">
            Or read our latest thinking <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-10 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-white/45 text-center mb-3">
            Where Evert publishes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 md:gap-x-10 gap-y-1 text-[11px] md:text-[13px] text-white/65 font-medium">
            {publications.slice(0, 5).map((p, i) => (
              <span key={p} className="flex items-center gap-x-5 md:gap-x-10">
                <span>{p}</span>
                {i < 4 && <span className="text-white/20 hidden md:inline" aria-hidden="true">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export function HomeFounder() {
  return (
    <section className="relative bg-[var(--color-ink)] text-white py-28 md:py-36 lg:py-44 overflow-hidden border-t border-white/10">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 12% 30%, rgba(150, 144, 181, 0.30) 0%, transparent 60%), radial-gradient(ellipse 70% 55% at 90% 80%, rgba(232, 155, 122, 0.28) 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 50% 100%, rgba(168, 181, 168, 0.18) 0%, transparent 60%)" }} />
      <Container size="wide" className="relative">
        <p className="eyebrow-light mb-10 md:mb-14">The founder</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 1, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: SLOW_OUT }} className="lg:col-span-4 max-w-[340px]">
            <PortraitEvert className="w-full h-auto" />
            <span className="inline-flex items-center text-[9px] uppercase tracking-[0.14em] font-semibold text-white/45 mt-3">Illustrated</span>
          </motion.div>
          <div className="lg:col-span-8">
            <motion.blockquote initial={{ opacity: 1, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9, ease: SLOW_OUT }} className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-white mb-10">
              <span className="text-[var(--color-brand)]">&ldquo;</span>The cheapest HR mistake is the one you spot before it becomes a wrongful dismissal claim.<span className="text-[var(--color-brand)]">&rdquo;</span>
            </motion.blockquote>
            <motion.div initial={{ opacity: 1, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: SLOW_OUT, delay: 0.1 }} className="flex items-end gap-8 mb-12">
              <SignatureEvert size={56} color="#E89B7A" />
              <div className="flex-1 border-b border-white/15 pb-3">
                <p className="text-[16px] font-semibold text-white">Evert Akkerman</p>
                <p className="text-[12px] text-white/55 uppercase tracking-[0.1em] mt-0.5">Founder · CHRL · LL.M. (NL)</p>
              </div>
            </motion.div>
            <div className="pt-8 border-t border-white/15">
              {/* Credentials chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["CHRL", "LL.M. (NL)", "25+ years", "25+ bylines", "Canada’s Top-25 · 2016 + 2017", "Randstad Innovation Award · 2015"].map((cred) => (
                  <span key={cred} className="text-[11px] md:text-[12px] uppercase tracking-[0.12em] font-semibold text-white/85 bg-white/8 border border-white/12 rounded-full px-3 py-1.5">
                    {cred}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end">
                <div className="md:col-span-7 text-[14px] md:text-[15px] text-white/65 leading-[1.6]">
                  Twenty-five years in Canadian HR. Published in <em className="text-white/85 not-italic font-medium">Canadian HR Reporter, Municipal World, Ottawa Life, Talent Canada</em>, and others. Founded XNL in 2012.
                </div>
                <div className="md:col-span-5 md:text-right flex flex-col md:items-end gap-3">
                  <Link href="/insights/hrto-mandatory-mediation" className="inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-brand)] hover:text-[var(--color-brand-glow)] hover:gap-3 transition-all">
                    Read Evert’s latest piece <span aria-hidden="true">→</span>
                  </Link>
                  <Link href="/about" className="inline-flex items-center gap-2 text-[14px] font-semibold text-white hover:text-[var(--color-brand)] hover:gap-3 transition-all">
                    Full bio + credentials <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
