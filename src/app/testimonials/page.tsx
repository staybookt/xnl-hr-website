"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { PageCTA } from "@/components/page-cta";
import { testimonials } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

const practiceLabel: Record<string, string> = {
  hr: "Fractional HR",
  editorial: "Editorial",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[var(--color-paper)] pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-16 border-b border-[var(--color-rule)]">
        <Container size="wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-8">Testimonials</p>
            <h1 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
              What clients say<br />
              <span className="text-brand-gradient">when the file&rsquo;s closed.</span>
            </h1>
            <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-[var(--color-mute)] max-w-3xl">
              Real attributed testimonials from named clients across both practices. Each quote was shared with permission. Engagements span 2014 to 2025.
            </p>
          </div>
        </Container>
      </section>

      {/* GRID */}
      <section className="py-20 md:py-28 lg:py-32 bg-[var(--color-paper)]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 1, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: SLOW_OUT }}
                className="flex flex-col rounded-3xl bg-[var(--color-surface)] border border-[var(--color-rule)] p-7 md:p-9 hover:border-[var(--color-rule-strong)] transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                  <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-deep)]">
                    {practiceLabel[t.practice] ?? "XNL"}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.12em] font-medium text-[var(--color-mute)]">
                    {t.date}
                  </span>
                </div>
                <span aria-hidden="true" className="text-[44px] leading-none text-[var(--color-brand)] font-semibold mb-3 -ml-1">
                  &ldquo;
                </span>
                <blockquote className="text-[15px] md:text-[16px] leading-[1.6] text-[var(--color-ink-soft)] mb-7 flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="pt-5 border-t border-[var(--color-rule)]">
                  <p className="text-[15px] font-semibold text-[var(--color-ink)] leading-[1.3]">
                    {t.name}
                  </p>
                  <p className="text-[13px] leading-[1.5] text-[var(--color-mute)] mt-0.5">
                    {t.title}{t.title && t.org ? ", " : ""}{t.org}
                  </p>
                  {t.location && (
                    <p className="text-[12px] leading-[1.5] text-[var(--color-mute-soft)] mt-1">
                      {t.location}
                    </p>
                  )}
                  {t.engagement && (
                    <p className="text-[10px] uppercase tracking-[0.12em] font-semibold text-[var(--color-secondary-deep)] mt-3">
                      Engagement · {t.engagement}
                    </p>
                  )}
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <p className="text-[13px] md:text-[14px] leading-[1.55] text-[var(--color-mute)] mt-14 md:mt-20 max-w-3xl">
            All testimonials shown above are from named clients with permission. If you&rsquo;ve worked with XNL and would like to add an attributed testimonial, please{" "}
            <Link href="/contact" className="text-[var(--color-slate)] underline underline-offset-4 hover:text-[var(--color-brand-deep)]">contact us</Link>.
          </p>
        </Container>
      </section>

      <PageCTA
        eyebrow="Ready to scope your file?"
        headline={<>30 minutes,<br /><span className="text-brand-gradient">no cost, no obligation.</span></>}
        subhead="We'll tell you straight whether XNL is the right fit, or refer you to someone who is."
      />
    </>
  );
}
