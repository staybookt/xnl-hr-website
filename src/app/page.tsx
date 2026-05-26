"use client";

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

export default function Home() {
  return (
    <>
      {/* HERO — full-bleed ink black, editorial typography */}
      <section className="relative bg-[var(--color-ink-deep)] text-[var(--color-paper)] -mt-16 md:-mt-20 pt-36 md:pt-52 pb-32 md:pb-44 overflow-hidden">
        {/* Warm bronze radial */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 25% 30%, rgba(200,149,109,0.15) 0%, rgba(10,10,12,0) 55%), radial-gradient(ellipse 70% 50% at 85% 90%, rgba(30,58,95,0.18) 0%, rgba(10,10,12,0) 50%)",
          }}
          aria-hidden="true"
        />

        <Container className="relative">
          <motion.div className="max-w-5xl" initial="hidden" animate="show" variants={STAGGER}>
            {/* Eyebrow chip */}
            <motion.div
              variants={FADE_UP}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] text-[12px] font-semibold uppercase tracking-[0.12em] mb-10 md:mb-14"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>Newmarket, ON · Serving Ontario SMBs &amp; not-for-profits</span>
            </motion.div>

            {/* MASSIVE editorial H1 with italic gradient accent */}
            <motion.h1
              variants={FADE_UP}
              className="font-display text-[var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] mb-10 md:mb-12"
            >
              Senior HR judgment,
              <br />
              <span className="gradient-accent-dark">scoped by the project.</span>
            </motion.h1>

            {/* Credentials-loaded sub */}
            <motion.p
              variants={FADE_UP}
              className="text-[19px] md:text-[22px] leading-[1.5] text-[var(--color-paper-muted)] max-w-3xl mb-10 md:mb-12"
            >
              No retainers. No junior staff. The outsourced HR department for Ontario&rsquo;s owner-operated employers and not-for-profits — built by a{" "}
              <span className="text-[var(--color-paper)] font-medium">CHRL with an LL.M.</span>, 13 years of bylines in{" "}
              <span className="text-[var(--color-paper)] font-medium">Canadian HR Reporter</span>,{" "}
              <span className="text-[var(--color-paper)] font-medium">Municipal World</span>, and{" "}
              <span className="text-[var(--color-paper)] font-medium">Ottawa Life</span>, and Canada&rsquo;s Top-25 HR Professionals 2016 + 2017.
            </motion.p>

            {/* Two-tier CTAs */}
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center mb-14 md:mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-amber)] text-[var(--color-ink-deep)] px-7 py-4 text-[16px] font-medium hover:bg-[var(--color-paper)] transition-colors"
              >
                Book an intro call
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={`tel:${contact.phoneE164}`}
                className="inline-flex items-center gap-2 text-[16px] hover:text-[var(--color-amber)] transition-colors"
              >
                <span className="text-[var(--color-amber)]">•</span>
                Call Evert — {contact.phone}
              </a>
            </motion.div>

            {/* STATS TRIPTYCH — Korn Ferry pattern */}
            <motion.div
              variants={FADE_UP}
              className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 pt-10 border-t border-white/[0.1]"
            >
              {[
                { num: "13", label: "years of bylines" },
                { num: "25+", label: "published articles" },
                { num: "7", label: "national publications" },
                { num: "2", label: "industry awards" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-[44px] md:text-[56px] leading-none tracking-tight mb-2">
                    {stat.num}
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-paper-muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* TRUST STRIP — publications */}
      <section className="bg-[var(--color-paper)] border-b border-[var(--color-rule)]">
        <Container className="py-12 md:py-16">
          <p className="text-center text-[11px] uppercase tracking-[0.2em] text-[var(--color-mute)] mb-7 md:mb-8">
            Published in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-10 gap-y-4 font-display italic text-[18px] md:text-[20px] text-[var(--color-ink)]">
            <span>Canadian HR Reporter</span>
            <span className="text-[var(--color-rule)] hidden md:inline not-italic" aria-hidden="true">•</span>
            <span>Municipal World</span>
            <span className="text-[var(--color-rule)] hidden md:inline not-italic" aria-hidden="true">•</span>
            <span>Ottawa Life</span>
            <span className="text-[var(--color-rule)] hidden md:inline not-italic" aria-hidden="true">•</span>
            <span>Talent Canada</span>
            <span className="text-[var(--color-rule)] hidden md:inline not-italic" aria-hidden="true">•</span>
            <span>The Lawyer&rsquo;s Daily</span>
            <span className="text-[var(--color-rule)] hidden md:inline not-italic" aria-hidden="true">•</span>
            <span>HR Professional Now</span>
          </div>
        </Container>
      </section>

      {/* Three practices */}
      <section className="py-28 md:py-40 bg-[var(--color-paper)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT }}
          >
            <p className="eyebrow text-center mb-5">Fig. 01 — Three practices, one senior partner each</p>
            <h2 className="font-display text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] text-center max-w-4xl mx-auto mb-16 md:mb-20">
              HR Support and Editorial run by Evert.
              <br />
              Workplace Mediation run by Wendy.
              <br />
              <span className="text-[var(--color-mute)] italic">No analysts.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {services.map((s) => (
              <motion.div key={s.slug} variants={FADE_UP}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block rounded-3xl bg-[var(--color-surface)] p-10 transition-all hover:bg-[var(--color-surface-deep)] hover:-translate-y-1"
                >
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-amber-deep)] mb-5">
                    {s.principal}
                  </p>
                  <h3 className="font-display text-[30px] leading-[1.1] tracking-tight mb-4">
                    {s.name}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-[var(--color-mute)] mb-8">
                    {s.blurb}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-amber-deep)] transition-colors">
                    Learn more
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA band — second dark moment */}
      <section className="py-28 md:py-40 bg-[var(--color-ink-deep)] text-[var(--color-paper)]">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT }}
          >
            <h2 className="font-display text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] text-center mb-6">
              Ready to scope{" "}
              <span className="gradient-accent-dark">a project?</span>
            </h2>
            <p className="text-[19px] md:text-[20px] text-[var(--color-paper-muted)] text-center mt-6 max-w-2xl mx-auto mb-12">
              30 minutes, no cost, no obligation. We&rsquo;ll tell you whether XNL is the right fit — or refer you to someone who is.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] text-[var(--color-ink-deep)] px-7 py-4 text-[16px] font-medium hover:bg-[var(--color-paper)] transition-colors"
              >
                Book an intro call
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={`tel:${contact.phoneE164}`}
                className="inline-flex items-center gap-2 text-[16px] hover:text-[var(--color-amber)] transition-colors"
              >
                <span className="text-[var(--color-amber)]">•</span>
                {contact.phone}
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
