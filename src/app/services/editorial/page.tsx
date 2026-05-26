"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { FAQ } from "@/components/faq";
import { PageCTA } from "@/components/page-cta";
import { ProcessSteps } from "@/components/process-steps";
import { contact, editorialCovers, editorialFaqs, services, publications } from "@/data/site";

const SLOW_OUT = [0.16, 1, 0.3, 1] as const;
const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: SLOW_OUT } },
};
const STAGGER = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };

const editorialService = services.find((s) => s.slug === "editorial")!;

const editorialProcess = [
  { n: "01", title: "Brief call", time: "30 min, no cost", body: "You describe the piece, the audience, and the deadline. We tell you if it's a fit." },
  { n: "02", title: "Fixed-fee quote", time: "Within 2 days", body: "Scope, deliverables, revision rounds, deadline. No hourly meter running." },
  { n: "03", title: "First draft", time: "Typically 1–2 weeks", body: "Evert writes. You review. Up to two structural revision rounds included." },
  { n: "04", title: "Final delivery", time: "Polished + filed", body: "Clean copy in the format you need. Translation pairs delivered with editorial notes." },
];

export default function EditorialPage() {
  return (
    <>
      {/* HERO — type-driven, no Unsplash */}
      <section
        className="relative text-white overflow-hidden -mt-16 md:-mt-20"
        style={{
          minHeight: "88vh",
          backgroundColor: "#1A1D24",
          backgroundImage:
            "radial-gradient(ellipse 85% 70% at 18% 22%, rgba(150, 144, 181, 0.5) 0%, transparent 58%), radial-gradient(ellipse 85% 75% at 82% 78%, rgba(232, 155, 122, 0.5) 0%, transparent 60%), radial-gradient(ellipse 50% 45% at 50% 100%, rgba(250, 247, 242, 0.18) 0%, transparent 60%), linear-gradient(155deg, #2D3D4E 0%, #1A1D24 100%)",
        }}
      >
        <div className="gradient-grain" aria-hidden="true" />

        <div className="absolute top-20 md:top-28 left-0 right-0 z-10 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1440px] mx-auto flex items-start justify-between text-white/65">
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">Editorial &amp; Communications</span>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">With Evert Akkerman</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center min-h-[88vh] pt-32 md:pt-40 pb-24 md:pb-32">
          <Container size="wide">
            <motion.div initial="hidden" animate="show" variants={STAGGER} className="max-w-5xl">
              <motion.p variants={FADE_UP} className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] font-semibold text-white/65 mb-8">25+ Canadian bylines</motion.p>
              <motion.h1 variants={FADE_UP} className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-white mb-10">
                Words that land<br /><span className="text-brand-gradient">where they have to.</span>
              </motion.h1>
              <motion.p variants={FADE_UP} className="text-[length:var(--text-body-xl)] leading-[var(--text-body-xl--line-height)] text-white/80 max-w-2xl mb-12">
                Op-eds, board memos, communications plans, book editing, EN↔NL translation. For HR leaders, founders, and professionals who need writing that holds up.
              </motion.p>
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] text-white px-8 py-4 text-[16px] font-medium hover:bg-[var(--color-brand-deep)] transition-colors">
                  Brief Evert <span aria-hidden="true">→</span>
                </Link>
                <a href={`tel:${contact.phoneE164}`} className="inline-flex items-center gap-2 text-[16px] font-semibold text-white hover:text-[var(--color-brand)] transition-colors">
                  <span aria-hidden="true">☎</span>
                  Or call · {contact.phone}
                </a>
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* PUBLISHED IN strip */}
      <section className="py-12 md:py-14 bg-[var(--color-brand-soft)] border-y border-[var(--color-rule)]">
        <Container size="wide">
          <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-8">
            <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--color-secondary-deep)] flex-shrink-0">Published in</p>
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 text-[15px] md:text-[17px] text-[var(--color-ink-soft)]">
              {publications.map((p, i) => (
                <span key={p.name} style={{ fontWeight: p.weight, letterSpacing: p.tracking, fontStyle: p.style, textTransform: p.uppercase ? "uppercase" : "none" }}>
                  {p.name}
                  {i < publications.length - 1 && (
                    <span className="text-[var(--color-brand)] ml-5 not-italic font-normal" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE WRITE */}
      <section className="py-24 md:py-32 bg-[var(--color-paper)]">
        <Container size="wide">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: SLOW_OUT }} className="max-w-4xl mb-14 md:mb-20">
            <p className="eyebrow mb-8">What we write</p>
            <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)]">Six formats we know cold.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {editorialCovers.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.7, delay: i * 0.06, ease: SLOW_OUT }} className="border-l-2 border-[var(--color-slate)]/30 pl-6">
                <h3 className="text-[20px] md:text-[22px] leading-[1.2] tracking-[-0.02em] font-semibold text-[var(--color-ink)] mb-3">{c.title}</h3>
                <p className="text-[15px] md:text-[16px] leading-[1.55] text-[var(--color-mute)]">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
        <Container size="wide">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: SLOW_OUT }} className="max-w-4xl mb-16 md:mb-24">
            <p className="eyebrow mb-8">How a piece happens</p>
            <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)]">
              Brief to filed draft.<br /><span className="text-[var(--color-brand-deep)]">In one to three weeks.</span>
            </h2>
          </motion.div>
          <ProcessSteps steps={editorialProcess} />
        </Container>
      </section>

      {/* PRICING + CASE */}
      <section className="py-20 md:py-24 bg-[var(--color-paper)]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Engagement</p>
              <h3 className="text-[28px] md:text-[32px] leading-[1.15] tracking-[-0.02em] font-semibold text-[var(--color-ink)] mb-6">Per-project, fixed fee.</h3>
              <p className="text-[16px] text-[var(--color-mute)] leading-[1.6] mb-6">Every piece is scoped and quoted up front. No hourly meter. Two structural revision rounds included.</p>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[32px] font-semibold text-[var(--color-ink)]">{editorialService.price}</span>
                <span className="text-[14px] text-[var(--color-mute)]">· {editorialService.typicalLength}</span>
                <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full ml-2">Illustrative</span>
              </div>
            </div>
            <div className="lg:col-span-7 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-rule)] p-8 md:p-10">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-secondary-deep)]">Recent piece · anonymized</p>
                <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-deep)] bg-[var(--color-brand-soft)] px-2 py-0.5 rounded-full">Example</span>
              </div>
              <p className="text-[18px] md:text-[20px] leading-[1.55] text-[var(--color-ink-soft)] italic">{editorialService.anonymizedCase}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 lg:py-40 bg-[var(--color-surface)] border-y border-[var(--color-rule)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: SLOW_OUT }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-8">Editorial FAQ</p>
              <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">What writers and HR leads ask.</h2>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-slate)] hover:gap-3 transition-all">
                Brief Evert <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="lg:col-span-8"><FAQ items={editorialFaqs} /></div>
          </motion.div>
        </Container>
      </section>

      <PageCTA
        eyebrow="Next step"
        headline={<>Got a piece<br /><span className="text-brand-gradient">that needs to land?</span></>}
        subhead="Brief call, no cost. We'll quote a fixed fee within two days and have a draft on your desk inside three weeks."
      />
    </>
  );
}
