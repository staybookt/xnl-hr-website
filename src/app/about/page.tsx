"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { PortraitEvert, PortraitWendy } from "@/components/portrait";
import { SignatureEvert, SignatureWendy } from "@/components/signature";
import { VoiceSamples } from "@/components/voice-samples";
import { FrameworkDiagram } from "@/components/framework-diagram";
import { PageCTA } from "@/components/page-cta";
import { contact } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-[var(--color-paper)] pt-24 md:pt-32 pb-16 md:pb-20">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">About</p>
            <h1 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
              25 years in Canadian HR.<br />
              <span className="text-brand-gradient">Built on judgment, not retainers.</span>
            </h1>
            <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-[var(--color-mute)]">
              XNL HR &amp; Communications is a one-partner practice in Newmarket, Ontario. Founded by Evert Akkerman in 2012. Joined in 2026 by Wendy Akkerman for workplace mediation.
            </p>
          </div>
        </Container>
      </section>

      {/* EVERT — portrait + bio + signature */}
      <section className="bg-[var(--color-paper)] pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: SLOW_OUT }}
              className="lg:col-span-5"
            >
              <PortraitEvert className="w-full h-auto max-w-[400px] mx-auto" />
              <div className="flex items-center justify-between mt-4 text-[13px] text-[var(--color-mute)] max-w-[400px] mx-auto">
                <span className="font-medium text-[var(--color-ink)]">Evert Akkerman</span>
                <span className="inline-flex items-center text-[9px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full">Illustrated</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: SLOW_OUT, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <p className="eyebrow mb-5">Founder</p>
              <h2 className="text-[length:var(--text-display-lg)] leading-[var(--text-display-lg--line-height)] tracking-[var(--text-display-lg--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
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

              <blockquote className="text-[20px] leading-[1.5] text-[var(--color-ink)] border-l-2 border-[var(--color-brand)] pl-6 my-10 italic font-light">
                &ldquo;The cheapest HR mistake is the one you spot before it becomes a wrongful dismissal claim.&rdquo;
              </blockquote>

              <div className="flex items-end gap-6 mt-8">
                <SignatureEvert size={56} color="#1A1D24" />
                <div className="text-[12px] uppercase tracking-[0.14em] text-[var(--color-mute)] pb-2">Evert Akkerman</div>
              </div>

              <div className="mt-10 pt-8 border-t border-[var(--color-rule)]">
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

      {/* THE XNL APPROACH — framework */}
      <FrameworkDiagram background="surface" />

      {/* WHAT EVERT BELIEVES — voice samples */}
      <VoiceSamples background="paper" />

      {/* WENDY — portrait + bio + signature */}
      <section className="py-24 md:py-32 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: SLOW_OUT }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <p className="eyebrow mb-5">Workplace Mediation</p>
              <h2 className="text-[length:var(--text-display-lg)] leading-[var(--text-display-lg--line-height)] tracking-[var(--text-display-lg--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
                Resolve the dispute.<br />Keep the people.
              </h2>
              <div className="space-y-5 text-[17px] leading-[1.7] text-[var(--color-ink-soft)]">
                <p>
                  Wendy Akkerman joined XNL in 2026 as the practice&rsquo;s workplace mediator. She brings independent, neutral mediation to Ontario employers — timed to the new HRTO mandatory-mediation rule.
                </p>
                <p>
                  Her engagements typically resolve workplace conflict, harassment complaints, and termination disputes before they reach formal proceedings. When they don&rsquo;t, the mediation record stands up.
                </p>
                <p className="text-[var(--color-mute-soft)] italic">[Full bio + credentials pending — see PLACEHOLDERS.md]</p>
              </div>

              <div className="flex items-end gap-6 mt-8">
                <SignatureWendy size={52} color="#1A1D24" />
                <div className="text-[12px] uppercase tracking-[0.14em] text-[var(--color-mute)] pb-2">Wendy Akkerman</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: SLOW_OUT, delay: 0.1 }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <PortraitWendy className="w-full h-auto max-w-[400px] mx-auto" />
              <div className="flex items-center justify-between mt-4 text-[13px] text-[var(--color-mute)] max-w-[400px] mx-auto">
                <span className="font-medium text-[var(--color-ink)]">Wendy Akkerman</span>
                <span className="inline-flex items-center text-[9px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full">Illustrated</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <PageCTA
        eyebrow="Next step"
        headline={
          <>
            Ready to talk<br />
            <span className="text-brand-gradient">to the practice?</span>
          </>
        }
        subhead={`30-minute intake, no cost. Call ${contact.phone} or book through the contact page.`}
      />
    </>
  );
}
