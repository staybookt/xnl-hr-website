"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { contact, services } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;
const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: SLOW_OUT } },
};
const STAGGER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const steps = [
  {
    n: "01",
    title: "Intake call",
    body: "You describe the situation. We tell you if XNL is the right fit. If not, we refer you.",
  },
  {
    n: "02",
    title: "Scoped proposal",
    body: "Fixed-fee for defined work or hourly with a cap. You know what you're paying before we start.",
  },
  {
    n: "03",
    title: "Delivery",
    body: "Evert (or Wendy) on the file. No analysts. No handoffs.",
  },
  {
    n: "04",
    title: "Stay close",
    body: "Quarterly check-ins. Call when you need us. No retainer required.",
  },
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
      {/* HERO — full viewport scale, split copy + portrait */}
      <section className="bg-[var(--color-paper)] min-h-[88vh] flex items-center pt-20 md:pt-28 pb-20 md:pb-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              animate="show"
              variants={STAGGER}
            >
              <motion.p variants={FADE_UP} className="eyebrow mb-8">
                Fig. 01 — XNL HR &amp; Communications
              </motion.p>

              <motion.h1
                variants={FADE_UP}
                className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-[var(--color-ink)] mb-10"
              >
                The outsourced<br />HR department.
              </motion.h1>

              <motion.p
                variants={FADE_UP}
                className="text-[length:var(--text-body-xl)] leading-[var(--text-body-xl--line-height)] text-[var(--color-mute)] max-w-xl mb-12"
              >
                Senior HR judgment, scoped by the project. For Ontario&rsquo;s owner-operated employers and not-for-profits.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-5 sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-8 py-4 text-[16px] font-medium hover:bg-[var(--color-accent)] transition-colors"
                >
                  Book a 30-min call
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href="#how"
                  className="inline-flex items-center gap-2 text-[16px] font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                >
                  How it works
                  <span aria-hidden="true">↓</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: SLOW_OUT, delay: 0.2 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-surface-deep)] rounded-3xl">
                <Image
                  src="/img/founder.png"
                  alt="Evert Akkerman, CHRL — founder of XNL HR & Communications"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-baseline justify-between text-[13px] text-white" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)" }}>
                  <span className="font-semibold">Evert Akkerman</span>
                  <span className="opacity-80 uppercase tracking-[0.12em] text-[11px]">CHRL · LL.M. (NL)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* PROOF STATS — BLACK panel, massive numbers */}
      <section className="bg-[var(--color-ink)] text-[var(--color-paper)] py-28 md:py-36 lg:py-44">
        <Container size="wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: SLOW_OUT }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-8"
          >
            <div className="max-w-3xl">
              <p className="eyebrow-light mb-8">Fig. 02 — Track record</p>
              <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold">
                The case is on paper.<br />
                <span className="text-[var(--color-mute-soft)]">In ink. In print.</span>
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={STAGGER}
            className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8 border-t border-white/15 pt-14 md:pt-20"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={FADE_UP}>
                <div className="stat-num text-white mb-4 flex items-baseline">
                  <span>{s.num}</span>
                  <span className="text-[var(--color-mute-soft)] text-[40%] ml-2">{s.suffix}</span>
                </div>
                <p className="text-[14px] md:text-[15px] uppercase tracking-[0.12em] font-medium text-[var(--color-mute-soft)]">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* SERVICES — white, BIG cards */}
      <section className="py-28 md:py-36 lg:py-44 bg-[var(--color-paper)]">
        <Container size="wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: SLOW_OUT }}
            className="max-w-4xl mb-20 md:mb-28"
          >
            <p className="eyebrow mb-8">Fig. 03 — What we do</p>
            <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
              Three practices.<br />
              <span className="text-[var(--color-mute-soft)]">One senior partner each.</span>
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
                    <p className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[var(--color-accent)] mb-6">
                      {s.engagement}
                    </p>
                    <h3 className="text-[length:var(--text-display-md)] leading-[var(--text-display-md--line-height)] tracking-[var(--text-display-md--letter-spacing)] font-semibold text-[var(--color-ink)] mb-4">
                      {s.name}
                    </h3>
                    <p className="text-[16px] md:text-[17px] leading-[1.55] text-[var(--color-mute)] mb-8">
                      {s.blurb}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--color-ink)] group-hover:gap-3 transition-all">
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

      {/* HOW IT WORKS — surface, BIG step numbers */}
      <section id="how" className="py-28 md:py-36 lg:py-44 bg-[var(--color-surface)]">
        <Container size="wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: SLOW_OUT }}
            className="max-w-4xl mb-20 md:mb-28"
          >
            <p className="eyebrow mb-8">Fig. 04 — How it works</p>
            <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
              Intro call to live engagement.<br />
              <span className="text-[var(--color-mute-soft)]">Under two weeks.</span>
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
                <div className="text-[96px] md:text-[120px] leading-none tracking-[-0.04em] font-semibold text-[var(--color-accent)]/15 mb-4">
                  {step.n}
                </div>
                <h3 className="text-[26px] md:text-[30px] leading-[1.15] tracking-[-0.02em] font-semibold text-[var(--color-ink)] mb-4">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-[var(--color-mute)]">{step.body}</p>
              </motion.li>
            ))}
          </motion.ol>
        </Container>
      </section>

      {/* FOUNDER MOMENT — BLACK panel, dramatic */}
      <section className="bg-[var(--color-ink)] text-[var(--color-paper)] py-28 md:py-36 lg:py-44">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: SLOW_OUT }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[var(--color-surface-deep)]">
                <Image
                  src="/img/founder.png"
                  alt="Evert Akkerman in his Newmarket office"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: SLOW_OUT, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <p className="eyebrow-light mb-8">Fig. 05 — The founder</p>

              <blockquote className="text-[length:var(--text-display-lg)] leading-[var(--text-display-lg--line-height)] tracking-[var(--text-display-lg--letter-spacing)] font-semibold text-white mb-12">
                &ldquo;The cheapest HR mistake is the one you spot before it becomes a wrongful dismissal claim.&rdquo;
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12 pt-10 border-t border-white/15">
                <div>
                  <p className="text-[18px] font-semibold mb-1">Evert Akkerman</p>
                  <p className="text-[14px] text-[var(--color-mute-soft)]">Founder · CHRL · LL.M. (NL)</p>
                </div>
                <div className="flex-1 text-[14px] text-[var(--color-mute-soft)] leading-[1.55]">
                  Twenty-five years in Canadian HR. Named to Canada&rsquo;s Top-25 HR Professionals in 2016 and 2017. Randstad Innovation in HR Award, 2015.
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-white hover:gap-3 transition-all whitespace-nowrap"
                >
                  About Evert
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* PUBLICATIONS MARQUEE — white, bigger pub names */}
      <section className="bg-[var(--color-paper)] py-20 md:py-24 overflow-hidden">
        <Container size="wide">
          <p className="eyebrow text-center mb-12">Fig. 06 — Published in</p>
        </Container>
        <div className="relative">
          <div className="marquee-track">
            {[...publications, ...publications].map((p, i) => (
              <span
                key={i}
                className="mx-8 md:mx-12 text-[40px] md:text-[56px] leading-none tracking-[-0.02em] font-medium text-[var(--color-ink-soft)]"
              >
                {p}
                <span className="text-[var(--color-rule-strong)] ml-8 md:ml-12" aria-hidden="true">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — BLACK panel, massive */}
      <section className="bg-[var(--color-ink)] text-[var(--color-paper)] py-32 md:py-40 lg:py-52">
        <Container size="wide">
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
              <span className="text-[var(--color-mute-soft)]">a project?</span>
            </h2>
            <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-[var(--color-mute-soft)] max-w-2xl mb-14">
              30 minutes, no cost, no obligation. We&rsquo;ll tell you whether XNL is the right fit — or refer you to someone who is.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[var(--color-ink)] px-8 py-4 text-[16px] font-medium hover:bg-[var(--color-accent-soft)] transition-colors"
              >
                Book an intro call
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={`tel:${contact.phoneE164}`}
                className="inline-flex items-center gap-2 text-[16px] font-medium text-white hover:text-[var(--color-accent-soft)] transition-colors"
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
