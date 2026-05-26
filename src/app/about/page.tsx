"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { contact } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-[var(--color-paper)] pt-20 md:pt-28 pb-16 md:pb-20">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">About</p>
            <h1 className="text-[var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
              25 years in Canadian HR.<br />
              <span className="text-[var(--color-accent)]">Built on judgment, not retainers.</span>
            </h1>
            <p className="text-[var(--text-body-xl)] leading-[1.55] text-[var(--color-mute)]">
              XNL HR &amp; Communications is a one-partner practice in Newmarket, Ontario. Founded by Evert Akkerman in 2012. Now joined by Wendy Akkerman for workplace mediation.
            </p>
          </div>
        </Container>
      </section>

      {/* FOUNDER FULL */}
      <section className="bg-[var(--color-paper)] pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: SLOW_OUT }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-surface-deep)]">
                <Image
                  src="/img/founder.png"
                  alt="Evert Akkerman, founder of XNL HR & Communications"
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

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: SLOW_OUT, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <p className="eyebrow mb-5">Founder</p>
              <h2 className="text-[var(--text-display-lg)] leading-[var(--text-display-lg--line-height)] tracking-[var(--text-display-lg--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
                Senior HR judgment, on the file.
              </h2>

              <div className="space-y-5 text-[17px] leading-[1.7] text-[var(--color-ink-soft)]">
                <p>
                  Evert has been writing about Canadian HR for thirteen years. Op-eds, guest commentary, and feature columns in <span className="font-medium">Canadian HR Reporter</span>, <span className="font-medium">Municipal World</span>, <span className="font-medium">Ottawa Life</span>, <span className="font-medium">Talent Canada</span>, and <span className="font-medium">The Lawyer&rsquo;s Daily</span>.
                </p>
                <p>
                  Before XNL, he managed HR for a Canadian financial institution. He holds an LL.M. from a Dutch law school and a CHRL designation from the Human Resources Professionals Association.
                </p>
                <p>
                  He runs XNL as a one-partner practice on purpose. No analysts, no bait-and-switch, no monthly retainers you can&rsquo;t opt out of. You get him on the file, and you pay for the work he does.
                </p>
              </div>

              <blockquote className="text-[20px] leading-[1.5] text-[var(--color-ink)] border-l-2 border-[var(--color-accent)] pl-6 my-10 italic font-light">
                &ldquo;The cheapest HR mistake is the one you spot before it becomes a wrongful dismissal claim.&rdquo;
              </blockquote>

              <div className="mt-2 pt-8 border-t border-[var(--color-rule)]">
                <p className="eyebrow mb-5">Recognized</p>
                <ul className="space-y-2 text-[15px] text-[var(--color-ink-soft)]">
                  <li>Canada&rsquo;s Top-25 HR Professionals · 2016, 2017</li>
                  <li>Randstad Innovation in HR Award · 2015</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* WENDY / MEDIATION */}
      <section className="py-24 md:py-32 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: SLOW_OUT }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <p className="eyebrow mb-5">Workplace Mediation</p>
              <h2 className="text-[var(--text-display-lg)] leading-[var(--text-display-lg--line-height)] tracking-[var(--text-display-lg--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
                Resolve the dispute.<br />Keep the people.
              </h2>
              <div className="space-y-5 text-[17px] leading-[1.7] text-[var(--color-ink-soft)]">
                <p>
                  Wendy Akkerman joined XNL in 2026 as the practice&rsquo;s workplace mediator. She brings independent, neutral mediation to Ontario employers — timed to the new HRTO mandatory-mediation rule.
                </p>
                <p>
                  Her engagements typically resolve workplace conflict, harassment complaints, and termination disputes before they reach formal proceedings. When they don&rsquo;t, the mediation record stands up.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: SLOW_OUT, delay: 0.1 }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-surface-deep)]">
                <Image
                  src="/img/mediation.png"
                  alt="Workplace mediation setting — two facing chairs in a sunlit room"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[var(--color-paper)]">
        <Container size="narrow">
          <div className="text-center">
            <p className="eyebrow mb-5">Next step</p>
            <h2 className="text-[var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-6">
              Ready to talk?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-8">
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
          </div>
        </Container>
      </section>
    </>
  );
}
