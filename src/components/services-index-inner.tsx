"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { ServiceCard } from "@/components/service-card";
import { Comparison } from "@/components/comparison";
import { AntiPositioning } from "@/components/anti-positioning";
import { PageCTA } from "@/components/page-cta";
import { services } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

export function ServicesIndexInner() {
  return (
    <>
      <section className="bg-[var(--color-paper)] pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20">
        <Container size="wide">
          <motion.div
            initial={{ opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: SLOW_OUT }}
            className="max-w-4xl"
          >
            <p className="eyebrow mb-8">Services</p>
            <h1 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
              Two practices.<br />
              <span className="text-[var(--color-secondary)]">One senior partner each.</span>
            </h1>
            <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-[var(--color-mute)] max-w-2xl">
              Fractional HR and editorial for owner-operated Canadian businesses and not-for-profits. One partner on every file. No retainers required. No junior staff.
            </p>
          </motion.div>
        </Container>
      </section>

      <section id="pricing" className="py-20 md:py-24 bg-[var(--color-paper)] scroll-mt-24">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <AntiPositioning />

      <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container size="wide">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: SLOW_OUT }}
            className="max-w-4xl mb-10 md:mb-16"
          >
            <p className="eyebrow mb-8">Why XNL</p>
            <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-6">
              Three ways to solve an HR problem.<br />
              <span className="text-[var(--color-secondary)]">One that doesn&rsquo;t cost a year of overhead.</span>
            </h2>
          </motion.div>
          <div className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
            <div className="min-w-[820px] md:min-w-0"><Comparison /></div>
          </div>
        </Container>
      </section>

      <PageCTA
        eyebrow="Next step"
        headline={
          <>
            Not sure which fits?<br />
            <span className="text-brand-gradient">We&rsquo;ll tell you straight.</span>
          </>
        }
        subhead="30-minute intake, no cost. If XNL isn't the right fit, we'll refer you to someone who is."
      />
    </>
  );
}
