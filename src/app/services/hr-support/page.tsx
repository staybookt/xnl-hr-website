"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { FAQ } from "@/components/faq";
import { PageCTA } from "@/components/page-cta";
import { ProcessSteps } from "@/components/process-steps";
import { CostCalculator } from "@/components/cost-calculator";
import { contact, hrSupportCovers, hrSupportFaqs, services, scenarios } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;
const FADE_UP = {
  hidden: { opacity: 1, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: SLOW_OUT } },
};
const STAGGER = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };

const hrSupportService = services.find((s) => s.slug === "hr-support")!;

const hrSupportProcess = [
  { n: "01", title: "Intake call", time: "30 min, no cost", body: "You describe the situation. We tell you if XNL is the right fit. If not, we refer you." },
  { n: "02", title: "Scoped proposal", time: "Within 3 days", body: "Fixed-fee for defined work or hourly with a cap. You know what you're paying before we start." },
  { n: "03", title: "Delivery", time: "Evert on the file", body: "No analysts. No handoffs. The senior partner you hired is doing the work." },
  { n: "04", title: "Stay close", time: "As needed", body: "Quarterly check-ins. Call when you need us. No monthly retainer required." },
];

const hrSupportScenarios = scenarios.filter((s) => s.key !== "hrto");

export default function HRSupportPage() {
  return (
    <>
      {/* HERO — type-driven, no Unsplash backdrop (Lazard move) */}
      <section
        className="relative text-white overflow-hidden -mt-16 md:-mt-20"
        style={{
          minHeight: "88vh",
          backgroundColor: "#1A1D24",
          backgroundImage:
            "radial-gradient(ellipse 85% 70% at 18% 20%, rgba(150, 144, 181, 0.55) 0%, transparent 58%), radial-gradient(ellipse 80% 70% at 82% 80%, rgba(232, 155, 122, 0.42) 0%, transparent 60%), linear-gradient(155deg, #2D3D4E 0%, #1A1D24 100%)",
        }}
      >
        <div className="gradient-grain" aria-hidden="true" />

        <div className="absolute top-20 md:top-28 left-0 right-0 z-10 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1440px] mx-auto flex flex-wrap items-start justify-between gap-x-4 gap-y-2 text-white/65">
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">Fractional HR</span>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">With Evert Akkerman</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center min-h-[88vh] pt-28 md:pt-40 pb-24 md:pb-32">
          <Container size="wide">
            <motion.div initial="hidden" animate="show" variants={STAGGER} className="max-w-5xl">
              <motion.p variants={FADE_UP} className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] font-semibold text-white/65 mb-8">
                The outsourced HR department
              </motion.p>
              <motion.h1 variants={FADE_UP} className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-white mb-10">
                Senior HR judgment,<br />
                <span className="text-brand-gradient">scoped by the project.</span>
              </motion.h1>
              <motion.p variants={FADE_UP} className="text-[length:var(--text-body-xl)] leading-[var(--text-body-xl--line-height)] text-white/80 max-w-2xl mb-12">
                For Ontario&rsquo;s owner-operated SMBs and not-for-profits without a senior HR lead. No retainers. No junior staff. Evert on every file.
              </motion.p>
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] text-white px-8 py-4 text-[16px] font-semibold hover:bg-[var(--color-brand-deep)] transition-colors">
                  Book Evert <span aria-hidden="true">→</span>
                </Link>
                <a href={`tel:${contact.phoneE164}`} className="inline-flex items-center gap-2 text-[15px] md:text-[16px] font-semibold text-white hover:text-[var(--color-brand)] transition-colors">
                  <span aria-hidden="true">☎</span>
                  Or call now · {contact.phone}
                </a>
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* SCENARIO TILES — KEPT on service page (SMB conversion lives here) */}
      <section className="py-16 md:py-24 bg-[var(--color-paper)]">
        <Container size="wide">
          <motion.div initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, ease: SLOW_OUT }} className="max-w-3xl mb-10">
            <p className="eyebrow mb-6">If you&rsquo;re here because</p>
            <h2 className="text-[26px] md:text-[36px] leading-[1.15] tracking-[-0.02em] font-semibold text-[var(--color-ink)]">
              Pick the one that&rsquo;s on your desk.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {hrSupportScenarios.map((s, i) => (
              <motion.div key={s.key} initial={{ opacity: 1, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.6, delay: i * 0.06, ease: SLOW_OUT }}>
                <Link href={`/contact?topic=${s.key}`} className="group flex flex-col h-full rounded-2xl bg-[var(--color-surface)] border border-[var(--color-rule)] hover:border-[var(--color-slate)]/40 hover:bg-[var(--color-paper)] px-5 py-5 md:px-6 md:py-6 transition-all hover:-translate-y-0.5">
                  <p className="text-[15px] md:text-[16px] font-semibold text-[var(--color-ink)] leading-[1.3] mb-4 flex-1">{s.label}</p>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--color-mute)] group-hover:text-[var(--color-brand)] flex items-center gap-1.5 transition-colors">
                    Start here <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHAT WE COVER */}
      <section className="py-20 md:py-32 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
        <Container size="wide">
          <motion.div initial={{ opacity: 1, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: SLOW_OUT }} className="max-w-4xl mb-12 md:mb-20">
            <p className="eyebrow mb-8">What we cover</p>
            <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
              The full HR stack, project by project.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {hrSupportCovers.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 1, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.7, delay: i * 0.06, ease: SLOW_OUT }} className="border-l-2 border-[var(--color-slate)]/30 pl-5 md:pl-6">
                <h3 className="text-[20px] md:text-[22px] leading-[1.2] tracking-[-0.02em] font-semibold text-[var(--color-ink)] mb-3">{c.title}</h3>
                <p className="text-[14px] md:text-[16px] leading-[1.55] text-[var(--color-mute)]">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container size="wide">
          <motion.div initial={{ opacity: 1, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: SLOW_OUT }} className="max-w-4xl mb-12 md:mb-24">
            <p className="eyebrow mb-8">How it works</p>
            <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
              Intro call to live engagement.<br />
              <span className="text-[var(--color-brand-deep)]">Under two weeks.</span>
            </h2>
          </motion.div>
          <ProcessSteps steps={hrSupportProcess} />
        </Container>
      </section>

      {/* COST CALCULATOR — MOVED from homepage; lives here on the conversion-funnel page */}
      <CostCalculator />

      {/* PRICING + CASE */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Engagement</p>
              <h3 className="text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.02em] font-semibold text-[var(--color-ink)] mb-6">Project-priced or capped hourly.</h3>
              <p className="text-[15px] md:text-[16px] text-[var(--color-mute)] leading-[1.6] mb-6">
                We scope every engagement to a fixed-fee project or an hourly arrangement with a cap. No monthly retainers unless they genuinely serve you.
              </p>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[28px] md:text-[32px] font-semibold text-[var(--color-ink)]">{hrSupportService.price}</span>
                <span className="text-[14px] text-[var(--color-mute)]">· {hrSupportService.typicalLength}</span>
                <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full ml-1 md:ml-2">Illustrative</span>
              </div>
            </div>
            <div className="lg:col-span-7 rounded-3xl bg-[var(--color-paper)] border border-[var(--color-rule)] p-6 md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-secondary-deep)]">Recent work · anonymized</p>
                <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full">Example</span>
              </div>
              <p className="text-[16px] md:text-[20px] leading-[1.55] text-[var(--color-ink-soft)] italic">{hrSupportService.anonymizedCase}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container>
          <motion.div initial={{ opacity: 1, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: SLOW_OUT }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-8">Fractional HR FAQ</p>
              <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">What buyers ask on the intake call.</h2>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-slate)] hover:gap-3 transition-all">
                Ask Evert directly <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="lg:col-span-8"><FAQ items={hrSupportFaqs} /></div>
          </motion.div>
        </Container>
      </section>

      <PageCTA
        eyebrow="Next step"
        headline={<>Ready to scope<br /><span className="text-brand-gradient">your first project?</span></>}
        subhead="30-minute intake, no cost. If XNL is the right fit, we can be on your file inside two weeks."
      />
    </>
  );
}
