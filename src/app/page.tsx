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

export default function Home() {
  return (
    <>
      {/* HERO — full-bleed Midjourney backdrop */}
      <section className="relative bg-[var(--color-ink-deep)] text-[var(--color-paper)] -mt-16 md:-mt-20 pt-36 md:pt-52 pb-32 md:pb-44 overflow-hidden">
        <Image
          src="/img/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,10,12,0.85) 0%, rgba(10,10,12,0.7) 40%, rgba(10,10,12,0.45) 75%, rgba(10,10,12,0.35) 100%)",
          }}
          aria-hidden="true"
        />

        <Container className="relative">
          <motion.div className="max-w-5xl" initial="hidden" animate="show" variants={STAGGER}>
            <motion.div
              variants={FADE_UP}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.18] text-[12px] font-semibold uppercase tracking-[0.12em] mb-10 md:mb-14"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>Newmarket, ON · Serving Ontario SMBs &amp; not-for-profits</span>
            </motion.div>

            <motion.h1
              variants={FADE_UP}
              className="font-display text-[var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] mb-10 md:mb-12"
            >
              Senior HR judgment,
              <br />
              <span className="gradient-accent-dark">scoped by the project.</span>
            </motion.h1>

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

            <motion.div
              variants={FADE_UP}
              className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 pt-10 border-t border-white/[0.12]"
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

      {/* TRUST STRIP */}
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

      {/* THREE PRACTICES — with imagery */}
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <motion.div key={s.slug} variants={FADE_UP}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block rounded-3xl bg-[var(--color-surface)] overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)]"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-8 md:p-10">
                    <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-amber-deep)] mb-4">
                      {s.principal}
                    </p>
                    <h3 className="font-display text-[26px] md:text-[28px] leading-[1.15] tracking-tight mb-3">
                      {s.name}
                    </h3>
                    <p className="text-[15px] leading-[1.6] text-[var(--color-mute)] mb-6">
                      {s.blurb}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-amber-deep)] transition-colors">
                      Learn more
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* FOUNDER SECTION — NEW */}
      <section className="relative py-28 md:py-40 bg-[var(--color-ink-deep)] text-[var(--color-paper)] overflow-hidden">
        {/* Paper texture overlay for warmth */}
        <Image
          src="/img/paper.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.07] mix-blend-screen pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(200,149,109,0.12) 0%, rgba(10,10,12,0) 60%)",
          }}
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: SLOW_OUT }}
              className="md:col-span-5"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/img/founder.png"
                  alt="Editorial portrait of Evert Akkerman in his book-lined office"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
                {/* Subtle warm vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(10,10,12,0.5) 100%)",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-5 left-5 right-5 text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--color-paper-muted)] flex justify-between">
                  <span>Evert Akkerman</span>
                  <span>CHRL · LL.M. (NL)</span>
                </div>
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: SLOW_OUT, delay: 0.1 }}
              className="md:col-span-7"
            >
              <p className="eyebrow mb-6 text-[var(--color-amber)]" style={{ color: "#d4a04a" }}>
                Founder
              </p>
              <h2 className="font-display text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] mb-8">
                Senior HR judgment,{" "}
                <span className="gradient-accent-dark">twenty-five years in.</span>
              </h2>

              <div className="space-y-5 text-[18px] md:text-[19px] leading-[1.6] text-[var(--color-paper-muted)] mb-10">
                <p>
                  Evert Akkerman has been writing about Canadian HR for{" "}
                  <span className="text-[var(--color-paper)] font-medium">thirteen years</span>{" "}
                  — op-eds, guest commentary, and feature columns in HR Reporter, Municipal World, Ottawa Life, Talent Canada, and The Lawyer&rsquo;s Daily. Before that, he managed HR for a Canadian financial institution and earned an LL.M. in the Netherlands.
                </p>
                <p>
                  He runs XNL as a one-partner practice on purpose. No analysts, no bait-and-switch, no monthly retainers you can&rsquo;t opt out of. You get him on the file, and you pay for the work he does.
                </p>
                <p className="font-display italic text-[20px] md:text-[22px] leading-[1.5] text-[var(--color-paper)]">
                  &ldquo;The cheapest HR mistake is the one you spot before it becomes a wrongful dismissal claim.&rdquo;
                </p>
              </div>

              {/* Awards list */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[var(--color-paper-muted)] border-t border-white/[0.1] pt-6 mb-10">
                <span className="font-display italic text-[15px] text-[var(--color-paper)]">Recognized:</span>
                <span>Randstad Innovation in HR Award (2015)</span>
                <span className="opacity-30" aria-hidden="true">|</span>
                <span>Canada&rsquo;s Top-25 HR Professionals (2016, 2017)</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-2 text-[16px] hover:text-[var(--color-amber)] transition-colors"
                >
                  Read his bylines
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-amber)] text-[var(--color-ink-deep)] px-6 py-3 text-[15px] font-medium hover:bg-[var(--color-paper)] transition-colors"
                >
                  Schedule with Evert
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="py-28 md:py-40 bg-[var(--color-paper)] border-t border-[var(--color-rule)]">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SLOW_OUT }}
          >
            <p className="eyebrow text-center mb-5">Fig. 02 — Next step</p>
            <h2 className="font-display text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] text-center mb-6">
              Ready to scope{" "}
              <span className="gradient-accent">a project?</span>
            </h2>
            <p className="text-[19px] md:text-[20px] text-[var(--color-mute)] text-center mt-6 max-w-2xl mx-auto mb-12">
              30 minutes, no cost, no obligation. We&rsquo;ll tell you whether XNL is the right fit — or refer you to someone who is.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink-deep)] text-[var(--color-paper)] px-7 py-4 text-[16px] font-medium hover:bg-[var(--color-amber-deep)] transition-colors"
              >
                Book an intro call
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={`tel:${contact.phoneE164}`}
                className="inline-flex items-center gap-2 text-[16px] text-[var(--color-ink)] hover:text-[var(--color-amber-deep)] transition-colors"
              >
                <span className="text-[var(--color-amber-deep)]">•</span>
                {contact.phone}
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
