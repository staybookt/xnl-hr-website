import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ServiceCard } from "@/components/service-card";
import { Comparison } from "@/components/comparison";
import { FAQ } from "@/components/faq";
import { AntiPositioning } from "@/components/anti-positioning";
import { Testimonials } from "@/components/testimonials";
import { RecentThinking } from "@/components/recent-thinking";
import { WhoWeServe } from "@/components/who-we-serve";
import { PullQuoteSlab } from "@/components/pull-quote-slab";
import { StatsSlab } from "@/components/stats-slab";
import { HeroImage } from "@/components/hero-image";
import { HomeHeroAnim, HomeFounder } from "@/components/home-client";
import { contact, services, faqs, site } from "@/data/site";

export const metadata: Metadata = {
  title: "XNL HR & Communications · fractional HR, editorial · Newmarket, Ontario",
  description:
    "Fractional HR and editorial for owner-operated Canadian businesses and not-for-profits. Senior judgment, scoped by the project. Founded 2012 by Evert Akkerman (CHRL, LL.M.). Headquartered in Newmarket, Ontario.",
  alternates: { canonical: "/" },
};

export const revalidate = 0;

const publications = [
  "Canadian HR Reporter",
  "Municipal World",
  "HR News Canada",
  "Talent Canada",
  "Law360 Canada",
  "HR Professional Now",
  "HRD Canada",
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  alternateName: site.shortName,
  url: site.url,
  description: site.description,
  foundingDate: "2012",
  priceRange: "$$",
  founder: { "@id": `${site.url}/about#evert` },
  address: { "@type": "PostalAddress", addressLocality: "Newmarket", addressRegion: "ON", addressCountry: "CA" },
  telephone: "+1-289-338-4001",
  email: "info@xnlhr.com",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Ontario" },
    { "@type": "Country", name: "Canada" },
  ],
  serviceType: ["Fractional HR", "Editorial & Communications"],
  knowsLanguage: ["en", "nl"],
  award: [
    "Canada's Top-25 HR Professionals (2016)",
    "Canada's Top-25 HR Professionals (2017)",
    "Randstad Innovation in HR Award (2015)",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "XNL services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.blurb, url: `${site.url}/services/${s.slug}` },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="relative gradient-brand text-white overflow-hidden -mt-16 md:-mt-20" style={{ minHeight: "100vh" }}>
        <HeroImage src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=80" alt="" imageOpacity={0.12} />
        <div className="gradient-grain" aria-hidden="true" />

        <div className="absolute top-20 md:top-28 left-0 right-0 z-10 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1440px] mx-auto flex items-start justify-between text-white/65">
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">XNL</span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.22em] font-semibold">Headquartered in Newmarket, ON · Est. 2012</span>
            <span className="sm:hidden text-[10px] uppercase tracking-[0.22em] font-semibold">Est. 2012</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen pt-28 md:pt-40 pb-32 md:pb-32">
          <Container size="wide">
            <HomeHeroAnim publications={publications} />
          </Container>
        </div>
      </section>

      {/* 01 SERVICES */}
      <section id="services" className="py-16 md:py-20 lg:py-24 bg-[var(--color-paper)]">
        <Container size="wide">
          <div className="max-w-4xl mb-16 md:mb-24">
            <p className="eyebrow mb-8">01 · What we do</p>
            <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-6">
              Two practices.<br />
              <span className="text-[var(--color-secondary)]">One senior partner each.</span>
            </h2>
            <p className="text-[16px] md:text-[17px] leading-[1.6] text-[var(--color-mute)] max-w-2xl">
              Fractional HR and editorial services for owner-operated Canadian businesses and not-for-profits. One partner on every file. No retainers required. No junior staff.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
            {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </div>
        </Container>
      </section>

      <PullQuoteSlab />

      <WhoWeServe />

      <AntiPositioning index="03" />

      {/* 04 THE HONEST COMPARISON */}
      <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-paper)]">
        <Container size="wide">
          <div className="max-w-4xl mb-12 md:mb-16">
            <p className="eyebrow mb-8">04 · The honest comparison</p>
            <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-6">
              Three ways to solve an HR problem.<br />
              <span className="text-[var(--color-secondary)]">One that doesn&rsquo;t cost a year of overhead.</span>
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.6] text-[var(--color-mute)] max-w-2xl">
              We&rsquo;re not the right call for every business. Here&rsquo;s the honest comparison.
            </p>
          </div>
          <Comparison />
        </Container>
      </section>

      <Testimonials />

      <StatsSlab />

      <HomeFounder />

      <RecentThinking />

      {/* 08 FAQ */}
      <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-paper)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-8">08 · Common questions</p>
              <h2 className="text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] tracking-[var(--text-display-xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-8">The honest answers.</h2>
              <p className="text-[16px] md:text-[17px] leading-[1.6] text-[var(--color-mute)] mb-10">
                Pricing, timing, fit, what we won&rsquo;t take on. Everything we get asked on the intake call.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-slate)] hover:gap-3 transition-all">
                Ask your own question <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="lg:col-span-8"><FAQ items={faqs} /></div>
          </div>
        </Container>
      </section>

      {/* PUBLICATIONS MARQUEE */}
      <section className="bg-[var(--color-brand-soft)] py-20 md:py-24 overflow-hidden border-y border-[var(--color-rule)]">
        <Container size="wide"><p className="eyebrow text-center mb-10">Published in</p></Container>
        <div className="relative">
          <div className="marquee-track">
            {[...publications, ...publications].map((p, i) => (
              <span key={i} className="mx-8 md:mx-12 text-[32px] md:text-[48px] leading-none tracking-[-0.02em] font-medium text-[var(--color-ink-soft)]">
                {p}<span className="text-[var(--color-brand-deep)] ml-8 md:ml-12" aria-hidden="true">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-[var(--color-ink)] text-white py-24 md:py-32 lg:py-40 overflow-hidden">
        <HeroImage src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&q=80" alt="" imageOpacity={0.18} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 65% 55% at 12% 25%, rgba(150, 144, 181, 0.38) 0%, transparent 60%), radial-gradient(ellipse 75% 60% at 88% 78%, rgba(232, 155, 122, 0.45) 0%, transparent 60%)" }} />
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <p className="eyebrow-brand mb-8">Next step</p>
            <h2 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] font-semibold text-white mb-12">
              Ready to scope<br /><span className="text-brand-gradient">a project?</span>
            </h2>
            <p className="text-[length:var(--text-body-xl)] leading-[1.55] text-white/65 max-w-2xl mb-14">
              30 minutes, no cost, no obligation. We&rsquo;ll tell you whether XNL is the right fit, or refer you to someone who is.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] text-white px-8 py-4 text-[16px] font-medium hover:bg-[var(--color-brand-deep)] transition-colors">
                Speak with Evert <span aria-hidden="true">→</span>
              </Link>
              <a href={`tel:${contact.phoneE164}`} className="inline-flex items-center gap-2 text-[16px] font-medium text-white hover:text-[var(--color-brand)] transition-colors">
                Or call {contact.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
