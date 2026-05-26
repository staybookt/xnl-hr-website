"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { contact, services } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;
const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: SLOW_OUT } },
};
const STAGGER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const steps = [
  {
    n: "01",
    title: "Intake call",
    time: "30 minutes · no cost",
    body: "You describe the situation. We tell you whether XNL is the right fit. If not, we refer you to someone who is.",
  },
  {
    n: "02",
    title: "Scoped proposal",
    time: "Within 3 business days",
    body: "Fixed-fee for defined work, or hourly with a cap. You know what you're paying before we start.",
  },
  {
    n: "03",
    title: "Delivery",
    time: "Evert (or Wendy) on the file",
    body: "No analysts. No handoffs. The senior partner you hired is the one doing the work.",
  },
  {
    n: "04",
    title: "Stay close",
    time: "As long as it serves you",
    body: "Quarterly check-ins. Call when you need us. No retainer required.",
  },
];

const industries = [
  "Manufacturing",
  "Professional services",
  "Not-for-profit",
  "Municipal",
  "Healthcare",
  "Retail",
];

const publications = [
  "Canadian HR Reporter",
  "Municipal World",
  "Ottawa Life",
  "Talent Canada",
  "The Lawyer's Daily",
  "HR Professional Now",
];

export default function Home() {
  return (
    <>
      {/* HERO — split: copy left, founder portrait right */}
      <section className="bg-[var(--color-paper)] pt-20 md:pt-28 lg:pt-32 pb-24 md:pb-32 lg:pb-40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              animate="show"
              variants={STAGGER}
            >
              <motion.p variants={FADE_UP} className="eyebrow mb-6">
                Fractional HR · Workplace Mediation · Editorial
              </motion.p>

              <motion.h1
                variants={FADE_UP}
                className="text-[var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8"
              >
                The outsourced HR<br />department.
              </motion.h1>

              <motion.p
                variants={FADE_UP}
                className="text-[var(--text-body-xl)] leading-[var(--text-body-xl--line-height)] text-[var(--color-mute)] max-w-xl mb-10"
              >
                Senior HR judgment, scoped by the project. For Ontario&rsquo;s owner-operated employers and not-for-profits. No retainers required. No junior staff.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 sm:gap-5 sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-6 py-3.5 text-[15px] font-medium hover:bg-[var(--color-accent)] transition-colors"
                >
                  Book a 30-min intro call
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                >
                  How it works
                  <span aria-hidden="true">↓</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: SLOW_OUT, delay: 0.15 }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-surface-deep)]">
                <Image
                  src="/img/founder.png"
                  alt="Evert Akkerman, CHRL — founder of XNL HR & Communications"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between mt-4 text-[13px] text-[var(--color-mute)]">
                <span className="font-medium text-[var(--color-ink)]">Evert Akkerman</span>
                <span>CHRL · LL.M. (NL)</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* PUBLICATIONS STRIP */}
      <section className="bg-[var(--color-paper)] border-y border-[var(--color-rule)]">
        <Container className="py-10 md:py-12">
          <div className="flex flex-wrap items-baseline justify-center gap-x-6 md:gap-x-8 gap-y-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-mute)] font-medium w-full md:w-auto text-center mb-2 md:mb-0 md:mr-2">
              Published in
            </p>
            {publications.map((p, i) => (
              <span key={p} className="flex items-baseline gap-3 md:gap-4 text-[14px] md:text-[15px] text-[var(--color-ink-soft)]">
                <span className="font-medium">{p}</span>
                {i < publications.length - 1 && (
                  <span className="text-[var(--color-rule-strong)] hidden md:inline" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT }}
            className="max-w-3xl mb-14 md:mb-20"
          >
            <p className="eyebrow mb-5">What we do</p>
            <h2 className="text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
              Three practices.<br />One senior partner each.
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
                  className="group block rounded-2xl bg-[var(--color-paper)] border border-[var(--color-rule)] overflow-hidden transition-all hover:-translate-y-1 hover:border-[var(--color-rule-strong)] hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.1)]"
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-[var(--color-surface-deep)]">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-7 md:p-8">
                    <h3 className="text-[22px] md:text-[24px] leading-[1.2] tracking-[-0.02em] font-semibold text-[var(--color-ink)] mb-3">
                      {s.name}
                    </h3>
                    <p className="text-[15px] leading-[1.6] text-[var(--color-mute)] mb-4">
                      {s.blurb}
                    </p>
                    <p className="text-[13px] leading-[1.5] text-[var(--color-mute-soft)] mb-6">
                      <span className="text-[var(--color-ink-soft)] font-medium">Best for:</span> {s.forLine}
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t border-[var(--color-rule)] text-[12px] uppercase tracking-[0.08em]">
                      <span className="text-[var(--color-mute)]">{s.engagement}</span>
                      <span className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-accent)] group-hover:gap-2.5 transition-all">
                        Learn more
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 md:py-32 lg:py-40 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT }}
            className="max-w-3xl mb-14 md:mb-20"
          >
            <p className="eyebrow mb-5">How it works</p>
            <h2 className="text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
              First call to live engagement<br className="hidden md:inline" /> in under two weeks.
            </h2>
          </motion.div>

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {steps.map((step) => (
              <motion.li key={step.n} variants={FADE_UP} className="relative pt-7">
                <div className="absolute top-0 left-0 right-0 h-px bg-[var(--color-rule-strong)]">
                  <div className="h-px bg-[var(--color-accent)] w-12" aria-hidden="true" />
                </div>
                <p className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[var(--color-accent)] mb-4">
                  Step {step.n}
                </p>
                <h3 className="text-[20px] leading-[1.2] tracking-[-0.02em] font-semibold text-[var(--color-ink)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[var(--color-mute-soft)] mb-4">{step.time}</p>
                <p className="text-[15px] leading-[1.6] text-[var(--color-mute)]">{step.body}</p>
              </motion.li>
            ))}
          </motion.ol>
        </Container>
      </section>

      {/* PROOF — industries + credentials */}
      <section className="py-24 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: SLOW_OUT }}
              className="lg:col-span-5"
            >
              <p className="eyebrow mb-5">Industries served</p>
              <h2 className="text-[var(--text-display-lg)] leading-[var(--text-display-lg--line-height)] tracking-[var(--text-display-lg--letter-spacing)] font-semibold text-[var(--color-ink)] mb-6">
                Where we&rsquo;ve been useful.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[var(--color-mute)]">
                A short list of the sectors where Evert has delivered HR work, op-eds, or board-level communications since 2012.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: SLOW_OUT, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="flex flex-wrap gap-3 mb-12">
                {industries.map((i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-rule)] text-[14px] font-medium text-[var(--color-ink-soft)]"
                  >
                    {i}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-[var(--color-rule)]">
                {[
                  { num: "25+", label: "published articles" },
                  { num: "13", label: "years of bylines" },
                  { num: "2", label: "industry awards" },
                  { num: "1", label: "senior partner per file" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[36px] md:text-[44px] leading-none tracking-[-0.03em] font-semibold text-[var(--color-ink)] mb-2">
                      {stat.num}
                    </div>
                    <div className="text-[12px] uppercase tracking-[0.1em] font-medium text-[var(--color-mute)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FOUNDER STRIP — single row, demoted from slab */}
      <section className="py-16 md:py-20 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-[var(--color-surface-deep)] flex-shrink-0">
              <Image
                src="/img/founder.png"
                alt="Evert Akkerman"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[var(--color-accent)] mb-2">
                Led by Evert Akkerman, CHRL, LL.M.
              </p>
              <p className="text-[16px] md:text-[17px] leading-[1.55] text-[var(--color-ink-soft)] max-w-3xl">
                25 years in Canadian HR, 25+ bylines in Canadian HR Reporter, Municipal World, Ottawa Life, and Talent Canada. Named to Canada&rsquo;s Top-25 HR Professionals in 2016 and 2017.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-[var(--color-accent)] hover:gap-3 transition-all flex-shrink-0"
            >
              About Evert
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* CTA BAND */}
      <section className="py-24 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT }}
            className="text-center"
          >
            <p className="eyebrow mb-5">Next step</p>
            <h2 className="text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-6">
              Ready to scope a project?
            </h2>
            <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--color-mute)] max-w-2xl mx-auto mb-10">
              30 minutes, no cost, no obligation. We&rsquo;ll tell you whether XNL is the right fit — or refer you to someone who is.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-6 py-3.5 text-[15px] font-medium hover:bg-[var(--color-accent)] transition-colors"
              >
                Book an intro call
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={`tel:${contact.phoneE164}`}
                className="inline-flex items-center gap-2 text-[15px] font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
              >
                Call {contact.phone}
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
