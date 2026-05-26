"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { LogoMark } from "@/components/logo-mark";
import { contact, services } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;
const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: SLOW_OUT } },
};
const STAGGER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const steps = [
  { n: "01", title: "Intake call", body: "You describe the situation. We tell you if XNL is the right fit. If not, we refer you." },
  { n: "02", title: "Scoped proposal", body: "Fixed-fee for defined work or hourly with a cap. You know what you're paying before we start." },
  { n: "03", title: "Delivery", body: "Evert (or Wendy) on the file. No analysts. No handoffs." },
  { n: "04", title: "Stay close", body: "Quarterly check-ins. Call when you need us. No retainer required." },
];

const stats = [
  { num: "25", suffix: "yrs", label: "in Canadian HR" },
  { num: "25", suffix: "+", label: "published bylines" },
  { num: "2", suffix: "x", label: "Canada's Top-25 HR" },
  { num: "1", suffix: "", label: "senior partner per file" },
];

const publications = [
  "Canadian HR Reporter",
  "Municipal World",
  "Ottawa Life",
  "Talent Canada",
  "The Lawyer's Daily",
  "HR Professional Now",
  "HRD Canada",
];

export default function Home() {
  return (
    <>
      {/* HERO — full-bleed brand gradient, copy overlaid */}
      <section
        className="relative gradient-brand text-white overflow-hidden -mt-16 md:-mt-20"
        style={{ minHeight: "100vh" }}
      >
        <div className="gradient-grain" aria-hidden="true" />

        {/* Top edge marks */}
        <div className="absolute top-20 md:top-28 left-0 right-0 z-10 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1440px] mx-auto flex items-start justify-between text-white/65">
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">Fig. 01 — XNL</span>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">Newmarket, ON · Est. 2012</span>
          </div>
        </div>

        {/* Centered copy */}
        <div className="relative z-10 flex items-center justify-center min-h-screen pt-32 md:pt-40 pb-32 md:pb-40">
          <Container size="wide">
            <motion.div initial="hidden" animate="show" variants={STAGGER} className="max-w-6xl mx-auto text-center">
              <motion.p variants={FADE_UP} className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] font-semibold text-[var(--color-brand)] mb-10">
                Fractional HR · Workplace Mediation · Editorial
              </motion.p>

              <motion.h1
                variants={FADE_UP}
                className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-white mb-10"
              >
                The outsourced<br />HR <span className="text-brand-gradient">department.</span>
              </motion.h1>

              <motion.p
                variants={FADE_UP}
                className="text-[length:var(--text-body-xl)] leading-[var(--text-body-xl--line-height)] text-white/75 max-w-2xl mx-auto mb-12"
              >
                Senior HR judgment, scoped by the project. For Ontario&rsquo;s owner-operated employers and not-for-profits.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-5 sm:items-center justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] text-white px-8 py-4 text-[16px] font-medium hover:bg-[var(--color-brand-deep)] transition-colors"
                >
                  Book a 30-min call
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center gap-2 text-[16px] font-medium text-white hover:text-[var(--color-brand-soft)] transition-colors"
                >
                  How it works
                  <span aria-hidden="true">↓</span>
                </a>
              </motion.div>
            </motion.div>
          </Container>
        </div>

        {/* Bottom edge marks */}
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-10 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1440px] mx-auto flex items-end justify-between text-white/65">
            <div className="flex items-center gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-brand)]" aria-hidden="true" />
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">One senior partner per file</span>
            </div>
            <a href="#how" className="text-[10px] uppercase tracking-[0.22em] font-semibold hover:text-white transition-colors flex items-center gap-2">
              Scroll <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* PROOF STATS — BLACK panel with orange accents */}
      <section className="bg-[var(--color-ink)] text-white py-24 md:py-32 lg:py-40">
        <Container size="wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: SLOW_OUT }}
            className="max-w-3xl mb-16 md:mb-24"
          >
            <p className="eyebrow-light mb-8">Fig. 02 — Track record</p>
            <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold">
              The case is on paper.<br />
              <span className="text-brand-gradient">In ink. In print.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={STAGGER}
            className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 border-t border-white/15 pt-14 md:pt-20"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={FADE_UP}>
                <div className="stat-num text-white mb-4 flex items-baseline">
                  <span>{s.num}</span>
                  <span className="text-[var(--color-brand)] text-[40%] ml-2">{s.suffix}</span>
                </div>
                <p className="text-[13px] md:text-[14px] uppercase tracking-[0.12em] font-medium text-white/55">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container size="wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: SLOW_OUT }}
            className="max-w-4xl mb-16 md:mb-24"
          >
            <p className="eyebrow mb-8">Fig. 03 — What we do</p>
            <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
              Three practices.<br />
              <span className="text-[var(--color-secondary)]">One senior partner each.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((s) => (
              <motion.div key={s.slug} variants={FADE_UP}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block rounded-3xl bg-[var(--color-surface)] overflow-hidden transition-all duration-500 hover:bg-[var(--color-surface-deep)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-surface-deep)]">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-8 md:p-10">
                    <p className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand)] mb-6">
                      {s.engagement}
                    </p>
                    <h3 className="text-[length:var(--text-display-md)] leading-[var(--text-display-md--line-height)] tracking-[var(--text-display-md--letter-spacing)] font-semibold text-[var(--color-ink)] mb-4">
                      {s.name}
                    </h3>
                    <p className="text-[16px] md:text-[17px] leading-[1.55] text-[var(--color-mute)] mb-8">
                      {s.blurb}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] group-hover:gap-3 transition-all">
                      Learn more
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* HOW IT WORKS — soft brand gradient backdrop */}
      <section id="how" className="relative py-24 md:py-32 lg:py-40 overflow-hidden gradient-brand-soft">
        <Container size="wide" className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: SLOW_OUT }}
            className="max-w-4xl mb-16 md:mb-24"
          >
            <p className="eyebrow mb-8">Fig. 04 — How it works</p>
            <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
              Intro call to live engagement.<br />
              <span className="text-[var(--color-secondary)]">Under two weeks.</span>
            </h2>
          </motion.div>

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10"
          >
            {steps.map((step) => (
              <motion.li key={step.n} variants={FADE_UP} className="flex flex-col">
                <div className="text-[80px] md:text-[100px] leading-none tracking-[-0.04em] font-semibold text-[var(--color-brand)]/20 mb-4">
                  {step.n}
                </div>
                <h3 className="text-[24px] md:text-[28px] leading-[1.15] tracking-[-0.02em] font-semibold text-[var(--color-ink)] mb-4">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-[var(--color-ink-soft)]/75">{step.body}</p>
              </motion.li>
            ))}
          </motion.ol>
        </Container>
      </section>

      {/* FOUNDER MOMENT — BLACK panel, text-only */}
      <section className="relative bg-[var(--color-ink)] text-white py-28 md:py-36 lg:py-44 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 85% 50%, rgba(232, 84, 32, 0.32) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 10% 85%, rgba(150, 144, 181, 0.25) 0%, transparent 60%)",
          }}
        />

        <Container size="wide" className="relative">
          <p className="eyebrow-light mb-10 md:mb-14">Fig. 05 — The founder</p>

          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: SLOW_OUT }}
            className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-white max-w-6xl mb-14 md:mb-20"
          >
            <span className="text-[var(--color-brand)]">&ldquo;</span>The cheapest HR mistake is the one you spot before it becomes a wrongful dismissal claim.<span className="text-[var(--color-brand)]">&rdquo;</span>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: SLOW_OUT, delay: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end pt-10 border-t border-white/15"
          >
            <div className="md:col-span-3">
              <p className="text-[18px] font-semibold mb-1">Evert Akkerman</p>
              <p className="text-[13px] text-white/55 uppercase tracking-[0.1em]">Founder · CHRL · LL.M. (NL)</p>
            </div>
            <div className="md:col-span-6 text-[15px] text-white/65 leading-[1.6]">
              Twenty-five years in Canadian HR. Named to Canada&rsquo;s Top-25 HR Professionals in 2016 and 2017. Randstad Innovation in HR Award, 2015.
            </div>
            <div className="md:col-span-3 md:text-right">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-white hover:text-[var(--color-brand)] hover:gap-3 transition-all"
              >
                About Evert
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* PUBLICATIONS MARQUEE */}
      <section className="bg-[var(--color-paper)] py-20 md:py-24 overflow-hidden">
        <Container size="wide">
          <p className="eyebrow text-center mb-10">Fig. 06 — Published in</p>
        </Container>
        <div className="relative">
          <div className="marquee-track">
            {[...publications, ...publications].map((p, i) => (
              <span
                key={i}
                className="mx-8 md:mx-12 text-[32px] md:text-[48px] leading-none tracking-[-0.02em] font-medium text-[var(--color-ink-soft)]"
              >
                {p}
                <span className="text-[var(--color-brand)] ml-8 md:ml-12" aria-hidden="true">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — BLACK with orange button */}
      <section className="relative bg-[var(--color-ink)] text-white py-28 md:py-36 lg:py-44 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 90% 80%, rgba(232, 84, 32, 0.28) 0%, transparent 65%)",
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
            <p className="eyebrow-light mb-8">Fig. 07 — Next step</p>
            <h2 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-white mb-12">
              Ready to scope<br />
              <span className="text-brand-gradient">a project?</span>
            </h2>
            <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-white/65 max-w-2xl mb-14">
              30 minutes, no cost, no obligation. We&rsquo;ll tell you whether XNL is the right fit — or refer you to someone who is.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] text-white px-8 py-4 text-[16px] font-medium hover:bg-[var(--color-brand-deep)] transition-colors"
              >
                Book an intro call
                <span aria-hidden="true">→</span>
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
    </>
  );
}
