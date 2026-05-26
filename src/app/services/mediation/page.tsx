"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { FAQ } from "@/components/faq";
import { PageCTA } from "@/components/page-cta";
import { ProcessSteps } from "@/components/process-steps";
import { PortraitWendy } from "@/components/portrait";
import { SignatureWendy } from "@/components/signature";
import { WendyQuoteBand } from "@/components/wendy-quote-band";
import { contact, mediationCovers, mediationProcess, mediationFaqs, services } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;
const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: SLOW_OUT } },
};
const STAGGER = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };

const mediationService = services.find((s) => s.slug === "mediation")!;

export default function MediationPage() {
  return (
    <>
      {/* HERO — type-driven, no Unsplash */}
      <section
        className="relative text-white overflow-hidden -mt-16 md:-mt-20"
        style={{
          minHeight: "88vh",
          backgroundColor: "#1A1D24",
          backgroundImage:
            "radial-gradient(ellipse 90% 75% at 18% 22%, rgba(168, 181, 168, 0.45) 0%, transparent 60%), radial-gradient(ellipse 80% 70% at 82% 78%, rgba(150, 144, 181, 0.55) 0%, transparent 60%), radial-gradient(ellipse 30% 30% at 92% 12%, rgba(232, 155, 122, 0.22) 0%, transparent 60%), linear-gradient(160deg, #2D3D4E 0%, #1A1D24 100%)",
        }}
      >
        <div className="gradient-grain" aria-hidden="true" />

        <div className="absolute top-20 md:top-28 left-0 right-0 z-10 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1440px] mx-auto flex items-start justify-between text-white/65">
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">Workplace mediation</span>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] animate-pulse" aria-hidden="true" />
              Now booking
            </span>
          </div>
        </div>

        <div className="relative z-10 flex items-center min-h-[88vh] pt-32 md:pt-40 pb-24 md:pb-32">
          <Container size="wide">
            <motion.div initial="hidden" animate="show" variants={STAGGER} className="max-w-5xl">
              <motion.p variants={FADE_UP} className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] font-semibold text-white/65 mb-8">With Wendy Akkerman</motion.p>
              <motion.h1 variants={FADE_UP} className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-white mb-10">
                Resolve the dispute.<br /><span className="text-brand-gradient">Keep the people.</span>
              </motion.h1>
              <motion.p variants={FADE_UP} className="text-[length:var(--text-body-xl)] leading-[var(--text-body-xl--line-height)] text-white/80 max-w-2xl mb-12">
                Independent workplace mediation for Ontario employers. Timed to the new HRTO mandatory-mediation rule (in force since June 2025). Confidential, neutral, ready in days.
              </motion.p>
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <Link href="/contact?topic=hrto" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] text-white px-8 py-4 text-[16px] font-medium hover:bg-[var(--color-brand-deep)] transition-colors">
                  Book Wendy <span aria-hidden="true">→</span>
                </Link>
                <a href={`tel:${contact.phoneE164}`} className="inline-flex items-center gap-2 text-[16px] font-semibold text-white hover:text-[var(--color-brand)] transition-colors">
                  <span aria-hidden="true">☎</span>
                  Or call now · {contact.phone}
                </a>
              </motion.div>
              <motion.div variants={FADE_UP} className="mt-12 md:mt-16 inline-flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-6 py-4">
                <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand)]">Guarantee</span>
                <span className="text-[14px] md:text-[15px] font-semibold text-white">Mediation-ready in 10 business days from intake.</span>
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* WENDY */}
      <section className="py-24 md:py-32 bg-[var(--color-paper)]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, ease: SLOW_OUT }} className="lg:col-span-4">
              <PortraitWendy className="w-full h-auto max-w-[380px]" />
              <div className="flex items-center justify-between mt-3 text-[13px] text-[var(--color-mute)] max-w-[380px]">
                <span className="font-medium text-[var(--color-ink)]">Wendy Akkerman</span>
                <span className="inline-flex items-center text-[9px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full">Illustrated</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, ease: SLOW_OUT, delay: 0.1 }} className="lg:col-span-8">
              <p className="eyebrow mb-5">The mediator</p>
              <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">Wendy Akkerman.</h2>
              <p className="text-[13px] uppercase tracking-[0.12em] font-semibold text-[var(--color-secondary-deep)] mb-6">Independent workplace mediator</p>
              <span className="inline-flex items-center text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2.5 py-1 rounded-full mb-6">Bio pending</span>
              <div className="space-y-5 text-[17px] md:text-[18px] leading-[1.65] text-[var(--color-ink-soft)] mt-2">
                <p><span className="text-[var(--color-mute-soft)] italic">[Placeholder bio]</span> Wendy joined XNL in 2026 to launch the workplace mediation practice, timed to the Ontario HRTO mandatory-mediation rule that took effect in June 2025. She brings a neutral, independent voice to the kind of conversations that, left to chance, become formal complaints.</p>
                <p><span className="text-[var(--color-mute-soft)] italic">[Placeholder bio]</span> Her practice covers workplace conflict, harassment complaints, termination disputes, and HRTO matters. She works with Ontario employers across manufacturing, professional services, not-for-profit, and municipal sectors. Sessions are confidential. The mediation record is preserved either way.</p>
                <p><span className="text-[var(--color-mute-soft)] italic">[Credentials pending]</span> Q-Med, IMI, or other professional mediator credentials, plus years of practice experience.</p>
              </div>
              <div className="flex items-end gap-6 mt-8">
                <SignatureWendy size={52} color="#1A1D24" />
                <div className="text-[12px] uppercase tracking-[0.14em] text-[var(--color-mute)] pb-2">Wendy Akkerman</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* WHAT WE MEDIATE */}
      <section className="py-24 md:py-32 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
        <Container size="wide">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: SLOW_OUT }} className="max-w-4xl mb-14 md:mb-20">
            <p className="eyebrow mb-8">What we mediate</p>
            <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)]">Six matters we&rsquo;re built for.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {mediationCovers.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.7, delay: i * 0.06, ease: SLOW_OUT }} className="border-l-2 border-[var(--color-slate)]/30 pl-6">
                <h3 className="text-[20px] md:text-[22px] leading-[1.2] tracking-[-0.02em] font-semibold text-[var(--color-ink)] mb-3">{c.title}</h3>
                <p className="text-[15px] md:text-[16px] leading-[1.55] text-[var(--color-mute)]">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <WendyQuoteBand />

      <section className="py-24 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container size="wide">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: SLOW_OUT }} className="max-w-4xl mb-16 md:mb-24">
            <p className="eyebrow mb-8">How mediation works</p>
            <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
              From intake to written record.<br /><span className="text-[var(--color-brand-deep)]">In ten business days.</span>
            </h2>
          </motion.div>
          <ProcessSteps steps={mediationProcess} />
        </Container>
      </section>

      {/* PRICING */}
      <section className="py-20 md:py-24 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="md:col-span-4">
              <p className="eyebrow mb-4">Engagement</p>
              <h3 className="text-[28px] md:text-[32px] leading-[1.15] tracking-[-0.02em] font-semibold text-[var(--color-ink)]">Per-session pricing.</h3>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-[var(--color-paper)] border border-[var(--color-rule)] p-6">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] mb-2">Half-day</p>
                <p className="text-[28px] font-semibold text-[var(--color-ink)] mb-1">{mediationService.price}</p>
                <p className="text-[12px] text-[var(--color-mute)] inline-flex items-center gap-1.5">Per session<span className="text-[9px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full">Illustrative</span></p>
              </div>
              <div className="rounded-2xl bg-[var(--color-paper)] border border-[var(--color-rule)] p-6">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] mb-2">Full-day</p>
                <p className="text-[28px] font-semibold text-[var(--color-ink)] mb-1">From $3,000</p>
                <p className="text-[12px] text-[var(--color-mute)] inline-flex items-center gap-1.5">Per session<span className="text-[9px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full">Illustrative</span></p>
              </div>
              <div className="rounded-2xl bg-[var(--color-paper)] border border-[var(--color-rule)] p-6">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-mute)] mb-2">HRTO matter</p>
                <p className="text-[28px] font-semibold text-[var(--color-ink)] mb-1">Quoted per file</p>
                <p className="text-[12px] text-[var(--color-mute)]">Includes pre-session prep + record.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: SLOW_OUT }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-8">Mediation FAQ</p>
              <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">What employers ask first.</h2>
              <Link href="/contact?topic=hrto" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-slate)] hover:gap-3 transition-all">
                Ask Wendy directly <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="lg:col-span-8"><FAQ items={mediationFaqs} /></div>
          </motion.div>
        </Container>
      </section>

      <PageCTA
        eyebrow="Next step"
        headline={<>Ready to mediate?<br /><span className="text-brand-gradient">Wendy is booking now.</span></>}
        subhead="30-minute intake call, no cost. If we're the right fit we can be mediation-ready in 10 business days."
      />
    </>
  );
}
