"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { PortraitEvert } from "@/components/portrait";
import { SignatureEvert } from "@/components/signature";
import { PageCTA } from "@/components/page-cta";
import { contact, site } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/about#evert`,
  name: "Evert Akkerman",
  jobTitle: "Founder, Fractional HR + Editorial",
  worksFor: { "@id": `${site.url}/#organization` },
  hasCredential: ["CHRL", "LL.M. (NL)"],
  knowsLanguage: ["en", "nl"],
  knowsAbout: [
    "Fractional human resources",
    "Canadian employment standards",
    "Workplace policy",
    "Employee terminations",
    "HR compliance",
    "Editorial writing",
    "Op-ed ghostwriting",
  ],
  award: [
    "Canada's Top-25 HR Professionals (2016)",
    "Canada's Top-25 HR Professionals (2017)",
    "Randstad Innovation in HR Award (2015)",
  ],
  image: `${site.url}/img/Evert%20headshot%202025.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/evertakkerman/",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <section className="relative text-white overflow-hidden -mt-16 md:-mt-20" style={{ minHeight: "70vh", backgroundColor: "#1A1D24", backgroundImage: "radial-gradient(ellipse 90% 75% at 22% 25%, rgba(150, 144, 181, 0.5) 0%, transparent 58%), radial-gradient(ellipse 80% 65% at 80% 80%, rgba(232, 155, 122, 0.4) 0%, transparent 60%), linear-gradient(160deg, #2D3D4E 0%, #1A1D24 100%)" }}>
        <div className="gradient-grain" aria-hidden="true" />
        <div className="absolute top-20 md:top-28 left-0 right-0 z-10 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1440px] mx-auto flex flex-wrap items-start justify-between gap-x-4 gap-y-1 text-white/65">
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">About XNL</span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.22em] font-semibold">Headquartered in Newmarket, ON · Est. 2012</span>
            <span className="sm:hidden text-[10px] uppercase tracking-[0.22em] font-semibold">Est. 2012</span>
          </div>
        </div>
        <div className="relative z-10 flex items-center min-h-[70vh] pt-28 md:pt-40 pb-20 md:pb-28">
          <Container size="wide">
            <div className="max-w-4xl">
              <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white/65 mb-8">The practice</p>
              <h1 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-white mb-8">
                25 years in Canadian HR.<br /><span className="text-brand-gradient">Built on judgment, not retainers.</span>
              </h1>
              <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-white/80 max-w-2xl">
                XNL HR &amp; Communications is a one-partner practice in Newmarket, Ontario. Founded by Evert Akkerman in 2012. Most engagements are Ontario-based; the practice works Canada-wide on the right files.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* EVERT */}
      <section className="bg-[var(--color-paper)] py-20 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 1, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, ease: SLOW_OUT }} className="lg:col-span-5">
              <PortraitEvert className="w-full h-auto max-w-[400px] mx-auto" />
              <p className="text-center mt-4 text-[13px] font-medium text-[var(--color-ink)] max-w-[400px] mx-auto">
                Evert Akkerman
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, ease: SLOW_OUT, delay: 0.1 }} className="lg:col-span-7">
              <p className="eyebrow mb-5">Founder · senior partner</p>
              <h2 className="text-[length:var(--text-display-lg)] leading-[var(--text-display-lg--line-height)] tracking-[var(--text-display-lg--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">
                Evert Akkerman.
              </h2>
              <div className="space-y-5 text-[16px] md:text-[17px] leading-[1.7] md:leading-[1.75] text-[var(--color-ink-soft)]">
                <p>
                  Evert has been writing about Canadian HR for thirteen years. Op-eds, guest commentary, and feature columns in <span className="font-medium">Canadian HR Reporter</span>, <span className="font-medium">Municipal World</span>, <span className="font-medium">HR News Canada</span>, <span className="font-medium">Talent Canada</span>, <span className="font-medium">Law360 Canada</span>, and <span className="font-medium">The Lawyer&rsquo;s Daily</span>. The throughline: plain, direct, defensible language for senior audiences.
                </p>
                <p>
                  Before founding XNL in 2012, Evert managed HR for a Canadian financial institution. He holds an LL.M. from a Dutch law school and a CHRL designation from the Human Resources Professionals Association.
                </p>
                <p>
                  He runs XNL as a one-partner practice on purpose. No analysts, no bait-and-switch, no monthly retainers you can&rsquo;t opt out of. You get him on the file, and you pay for the work he does.
                </p>
                <p>
                  The work covers the full range. A handbook update or a single policy review can be one week. A wrongful-dismissal file prep or a senior search support engagement runs longer. Evert is happy to do either, and quotes accordingly.
                </p>
              </div>
              <blockquote className="text-[18px] md:text-[20px] leading-[1.5] text-[var(--color-ink)] border-l-2 border-[var(--color-brand)] pl-5 md:pl-6 my-10 italic font-light">
                &ldquo;In many organizations, performance reviews are a ritual dance: a lot of movement and no progress. Meanwhile, your exposure grows.&rdquo;
              </blockquote>
              <div className="flex items-end gap-5 md:gap-6 mt-8">
                <SignatureEvert size={56} color="#1A1D24" />
                <div className="text-[12px] uppercase tracking-[0.14em] text-[var(--color-mute)] pb-2">Evert Akkerman</div>
              </div>
              <div className="mt-12 pt-10 border-t border-[var(--color-rule)] grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="eyebrow mb-3">Credentials</p>
                  <ul className="space-y-1.5 text-[14px] leading-[1.6] text-[var(--color-ink-soft)]">
                    <li>CHRL · Human Resources Professionals Association</li>
                    <li>LL.M. · Dutch law school</li>
                    <li>Senior HR practice since 2012</li>
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-3">Recognition</p>
                  <ul className="space-y-1.5 text-[14px] leading-[1.6] text-[var(--color-ink-soft)]">
                    <li>Canada&rsquo;s Top-25 HR Professionals · 2016, 2017</li>
                    <li>Randstad Innovation in HR Award · 2015</li>
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-3">Representative engagements</p>
                  <ul className="space-y-1.5 text-[14px] leading-[1.6] text-[var(--color-ink-soft)]">
                    <li>The Lunch Lady Group: performance review process (2025)</li>
                    <li>Central York Chamber of Commerce: successor offer + JD (2025)</li>
                    <li>Habitat for Humanity GTA: amalgamation HR lead (2014)</li>
                    <li>Anova Fertility: co-op program (Randstad Award, 2015)</li>
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-3">Languages</p>
                  <ul className="space-y-1.5 text-[14px] leading-[1.6] text-[var(--color-ink-soft)]">
                    <li>English · Fluent</li>
                    <li>Dutch · Native</li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/insights" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-slate)] hover:gap-3 transition-all">
                  Read Evert&rsquo;s insights <span aria-hidden="true">→</span>
                </Link>
                <Link href="/approach" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-slate)] hover:gap-3 transition-all">
                  How Evert works <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <PageCTA
        eyebrow="Next step"
        headline={<>Ready to talk<br /><span className="text-brand-gradient">to the practice?</span></>}
        subhead={`30-minute intake, no cost. Call ${contact.phone} or email through the contact page.`}
      />
    </>
  );
}
