"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { ServiceCard } from "@/components/service-card";
import { Comparison } from "@/components/comparison";
import { FAQ } from "@/components/faq";
import { MediationBand } from "@/components/mediation-band";
import { AntiPositioning } from "@/components/anti-positioning";
import { Testimonials } from "@/components/testimonials";
import { RecentThinking } from "@/components/recent-thinking";
import { VoiceSamples } from "@/components/voice-samples";
import { FrameworkDiagram } from "@/components/framework-diagram";
import { OrgChartComparison } from "@/components/org-chart-comparison";
import { WhoWeServe } from "@/components/who-we-serve";
import { HeroImage } from "@/components/hero-image";
import { PortraitEvert } from "@/components/portrait";
import { SignatureEvert } from "@/components/signature";
import { contact, services, faqs } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;
const FADE_UP = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: SLOW_OUT } } };
const STAGGER = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };

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
      {/* HERO */}
      <section className="relative gradient-brand text-white overflow-hidden -mt-16 md:-mt-20" style={{ minHeight: "100vh" }}>
        <HeroImage src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=80" alt="" imageOpacity={0.12} />
        <div className="gradient-grain" aria-hidden="true" />

        <div className="absolute top-20 md:top-28 left-0 right-0 z-10 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1440px] mx-auto flex items-start justify-between text-white/65">
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">XNL</span>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">Headquartered in Newmarket, ON · Est. 2012</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen pt-32 md:pt-40 pb-28 md:pb-32">
          <Container size="wide">
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
                <Link
                  href="/insights"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[var(--color-ink)] px-8 py-4 text-[16px] font-medium hover:bg-[var(--color-brand-soft)] transition-colors"
                >
                  Read our latest thinking <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-[16px] font-medium text-white/85 hover:text-white transition-colors"
                >
                  Or speak with Evert <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </Container>
        </div>

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
      </section>

      <MediationBand />

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container size="wide">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: SLOW_OUT }} className="max-w-4xl mb-16 md:mb-24">
            <p className="eyebrow mb-8">What we do</p>
            <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-6">
              Three practices.<br />
              <span className="text-[var(--color-secondary)]">One senior partner each.</span>
            </h2>
            <p className="text-[16px] md:text-[17px] leading-[1.6] text-[var(--color-mute)] max-w-2xl">
              Fractional HR and Workplace Mediation share a craft: senior judgment scoped per file. Editorial extends that craft to the page, for HR teams who need a board memo to land or an op-ed to publish.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </div>
        </Container>
      </section>

      <WhoWeServe />

      <AntiPositioning />

      <FrameworkDiagram background="paper" />

      <section className="py-6 md:py-10 bg-[var(--color-paper)]">
        <Container size="wide">
          <div className="text-center">
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-slate)] hover:gap-3 transition-all"
            >
              Read the full approach <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>

      <OrgChartComparison />

      {/* WHY XNL — comparison */}
      <section className="py-24 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container size="wide">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: SLOW_OUT }} className="max-w-4xl mb-12 md:mb-16">
            <p className="eyebrow mb-8">Why XNL</p>
            <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-6">
              Three ways to solve an HR problem.<br />
              <span className="text-[var(--color-secondary)]">One that doesn&rsquo;t cost a year of overhead.</span>
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.6] text-[var(--color-mute)] max-w-2xl">
              We&rsquo;re not the right call for every employer. Here&rsquo;s the honest comparison.
            </p>
          </motion.div>
          <div className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
            <div className="min-w-[820px] md:min-w-0"><Comparison /></div>
          </div>
        </Container>
      </section>

      {/* TRACK RECORD */}
      <section className="bg-[var(--color-ink)] text-white py-24 md:py-32 lg:py-40">
        <Container size="wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: SLOW_OUT }}
            className="max-w-5xl"
          >
            <p className="eyebrow-light mb-10">Track record</p>
            <p className="text-[length:var(--text-display-lg)] leading-[1.15] tracking-[-0.025em] font-medium text-white">
              Twenty-five years of practice. Twenty-five-plus bylines in Canadian HR Reporter, Municipal World, Ottawa Life, Talent Canada, and The Lawyer&rsquo;s Daily. Named to <span className="text-brand-gradient">Canada&rsquo;s Top-25 HR Professionals in 2016 and 2017</span>. Randstad Innovation in HR Award, 2015. One senior partner on every file.
            </p>
          </motion.div>
        </Container>
      </section>

      <Testimonials />

      {/* FOUNDER */}
      <section className="relative bg-[var(--color-ink)] text-white py-28 md:py-36 lg:py-44 overflow-hidden border-t border-white/10">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 12% 30%, rgba(150, 144, 181, 0.30) 0%, transparent 60%), radial-gradient(ellipse 70% 55% at 90% 80%, rgba(232, 155, 122, 0.28) 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 50% 100%, rgba(168, 181, 168, 0.18) 0%, transparent 60%)" }} />
        <Container size="wide" className="relative">
          <p className="eyebrow-light mb-10 md:mb-14">The founder</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: SLOW_OUT }} className="lg:col-span-4 max-w-[340px]">
              <PortraitEvert className="w-full h-auto" />
              <span className="inline-flex items-center text-[9px] uppercase tracking-[0.14em] font-semibold text-white/45 mt-3">Illustrated</span>
            </motion.div>
            <div className="lg:col-span-8">
              <motion.blockquote initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9, ease: SLOW_OUT }} className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-white mb-10">
                <span className="text-[var(--color-brand)]">&ldquo;</span>The cheapest HR mistake is the one you spot before it becomes a wrongful dismissal claim.<span className="text-[var(--color-brand)]">&rdquo;</span>
              </motion.blockquote>
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: SLOW_OUT, delay: 0.1 }} className="flex items-end gap-8 mb-12">
                <SignatureEvert size={56} color="#E89B7A" />
                <div className="flex-1 border-b border-white/15 pb-3">
                  <p className="text-[16px] font-semibold text-white">Evert Akkerman</p>
                  <p className="text-[12px] text-white/55 uppercase tracking-[0.1em] mt-0.5">Founder · CHRL · LL.M. (NL)</p>
                </div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end pt-8 border-t border-white/15">
                <div className="md:col-span-8 text-[14px] md:text-[15px] text-white/65 leading-[1.6]">
                  Twenty-five years in Canadian HR. Named to Canada&rsquo;s Top-25 HR Professionals in 2016 and 2017. Randstad Innovation in HR Award, 2015.
                </div>
                <div className="md:col-span-4 md:text-right">
                  <Link href="/about" className="inline-flex items-center gap-2 text-[15px] font-semibold text-white hover:text-[var(--color-brand)] hover:gap-3 transition-all">
                    About Evert <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <VoiceSamples background="surface" />

      <RecentThinking />

      {/* FAQ */}
      <section className="py-24 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: SLOW_OUT }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-8">Common questions</p>
              <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">The honest answers.</h2>
              <p className="text-[16px] md:text-[17px] leading-[1.6] text-[var(--color-mute)] mb-10">
                Pricing, timing, fit, what we won&rsquo;t take on. Everything we get asked on the intake call.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-slate)] hover:gap-3 transition-all">
                Ask your own question <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="lg:col-span-8"><FAQ items={faqs} /></div>
          </motion.div>
        </Container>
      </section>

      {/* PUBLICATIONS MARQUEE */}
      <section className="bg-[var(--color-brand-soft)] py-20 md:py-24 overflow-hidden border-y border-[var(--color-rule)]">
        <Container size="wide"><p className="eyebrow text-center mb-10">Published in</p></Container>
        <div className="relative">
          <div className="marquee-track">
            {[...publications, ...publications].map((p, i) => (
              <span key={i} className="mx-8 md:mx-12 text-[32px] md:text-[48px] leading-none tracking-[-0.02em] font-medium text-[var(--color-ink-soft)]">
                {p}<span className="text-[var(--color-brand-deep)] ml-8 md:ml-12" aria-hidden="true">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-[var(--color-ink)] text-white py-28 md:py-36 lg:py-44 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 65% 55% at 12% 25%, rgba(150, 144, 181, 0.32) 0%, transparent 60%), radial-gradient(ellipse 75% 60% at 88% 78%, rgba(232, 155, 122, 0.38) 0%, transparent 60%)" }} />
        <Container size="wide" className="relative">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: SLOW_OUT }} className="max-w-5xl">
            <p className="eyebrow-brand mb-8">Next step</p>
            <h2 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-white mb-12">
              Ready to scope<br /><span className="text-brand-gradient">a project?</span>
            </h2>
            <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-white/65 max-w-2xl mb-14">
              30 minutes, no cost, no obligation. We&rsquo;ll tell you whether XNL is the right fit, or refer you to someone who is.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] text-white px-8 py-4 text-[16px] font-medium hover:bg-[var(--color-brand-deep)] transition-colors">
                Speak with Evert <span aria-hidden="true">→</span>
              </Link>
              <a href={`tel:${contact.phoneE164}`} className="inline-flex items-center gap-2 text-[16px] font-medium text-white hover:text-[var(--color-brand)] transition-colors">
                Or call {contact.phone}
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
