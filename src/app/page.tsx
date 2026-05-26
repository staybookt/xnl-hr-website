import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ServiceCard } from "@/components/service-card";
import { Comparison } from "@/components/comparison";
import { FAQ } from "@/components/faq";
import { MediationBand } from "@/components/mediation-band";
import { AntiPositioning } from "@/components/anti-positioning";
import { Testimonials } from "@/components/testimonials";
import { RecentThinking } from "@/components/recent-thinking";
import { OrgChartComparison } from "@/components/org-chart-comparison";
import { WhoWeServe } from "@/components/who-we-serve";
import { HeroImage } from "@/components/hero-image";
import { HomeHeroAnim, HomeFounder } from "@/components/home-client";
import { contact, services, faqs, site } from "@/data/site";

export const metadata: Metadata = {
  title: "XNL HR & Communications — fractional HR, workplace mediation, editorial",
  description:
    "Senior HR judgment, scoped by the project. Fractional HR and workplace mediation for owner-operated employers and not-for-profits. Headquartered in Newmarket, Ontario. Canada-wide on the right files.",
  alternates: { canonical: "/" },
};

const publications = [
  "Canadian HR Reporter",
  "Municipal World",
  "Ottawa Life",
  "Talent Canada",
  "The Lawyer's Daily",
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
  founder: { "@type": "Person", name: "Evert Akkerman", jobTitle: "Founder, CHRL, LL.M." },
  address: { "@type": "PostalAddress", addressLocality: "Newmarket", addressRegion: "ON", addressCountry: "CA" },
  telephone: "+1-289-338-4001",
  email: "info@xnlhr.com",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Ontario" },
    { "@type": "Country", name: "Canada" },
  ],
  serviceType: ["Fractional HR", "Workplace Mediation", "Editorial & Communications"],
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
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">Headquartered in Newmarket, ON · Est. 2012</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen pt-32 md:pt-40 pb-28 md:pb-32">
          <Container size="wide">
            <HomeHeroAnim publications={publications} />
          </Container>
        </div>
      </section>

      <MediationBand />

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container size="wide">
          <div className="max-w-4xl mb-16 md:mb-24">
            <p className="eyebrow mb-8">What we do</p>
            <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-6">
              Three practices.<br />
              <span className="text-[var(--color-secondary)]">One senior partner each.</span>
            </h2>
            <p className="text-[16px] md:text-[17px] leading-[1.6] text-[var(--color-mute)] max-w-2xl">
              Fractional HR and Workplace Mediation share a craft: senior judgment scoped per file. Editorial extends that craft to the page, for HR teams who need a board memo to land or an op-ed to publish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </div>
        </Container>
      </section>

      <WhoWeServe />

      <AntiPositioning />

      <OrgChartComparison />

      {/* WHY XNL */}
      <section className="py-24 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container size="wide">
          <div className="max-w-4xl mb-12 md:mb-16">
            <p className="eyebrow mb-8">Why XNL</p>
            <h2 className="text-[length:var(--text-display-2xl)] leading-[var(--text-display-2xl--line-height)] tracking-[var(--text-display-2xl--letter-spacing)] font-semibold text-[var(--color-ink)] mb-6">
              Three ways to solve an HR problem.<br />
              <span className="text-[var(--color-secondary)]">One that doesn&rsquo;t cost a year of overhead.</span>
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.6] text-[var(--color-mute)] max-w-2xl">
              We&rsquo;re not the right call for every employer. Here&rsquo;s the honest comparison.
            </p>
          </div>
          <div className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
            <div className="min-w-[820px] md:min-w-0"><Comparison /></div>
          </div>
        </Container>
      </section>

      {/* TRACK RECORD */}
      <section className="bg-[var(--color-ink)] text-white py-24 md:py-32 lg:py-40">
        <Container size="wide">
          <div className="max-w-5xl">
            <p className="eyebrow-light mb-10">Track record</p>
            <p className="text-[length:var(--text-display-lg)] leading-[1.15] tracking-[-0.025em] font-medium text-white">
              Twenty-five years of practice. Twenty-five-plus bylines in Canadian HR Reporter, Municipal World, Ottawa Life, Talent Canada, and The Lawyer&rsquo;s Daily. Named to <span className="text-brand-gradient">Canada&rsquo;s Top-25 HR Professionals in 2016 and 2017</span>. Randstad Innovation in HR Award, 2015. One senior partner on every file.
            </p>
          </div>
        </Container>
      </section>

      <Testimonials />

      <HomeFounder />

      <RecentThinking />

      {/* FAQ */}
      <section className="py-24 md:py-32 lg:py-40 bg-[var(--color-paper)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-8">Common questions</p>
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
      <section className="relative bg-[var(--color-ink)] text-white py-28 md:py-36 lg:py-44 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 65% 55% at 12% 25%, rgba(150, 144, 181, 0.32) 0%, transparent 60%), radial-gradient(ellipse 75% 60% at 88% 78%, rgba(232, 155, 122, 0.38) 0%, transparent 60%)" }} />
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
