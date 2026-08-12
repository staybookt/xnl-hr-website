import type { Metadata } from "next";
import { Geist, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { StickyBookingBar } from "@/components/sticky-booking-bar";
import { site } from "@/data/site";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} · ${site.tagline}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "fractional HR",
    "fractional HR Canada",
    "fractional HR Ontario",
    "HR consultant Ontario",
    "HR consultant Newmarket",
    "outsourced HR",
    "HR for small business Canada",
    "CHRL",
    "Evert Akkerman",
    "XNL HR",
    "Canadian HR Reporter",
    "editorial HR writing",
    "HR op-ed ghostwriting",
  ],
  authors: [{ name: "Evert Akkerman", url: "https://www.linkedin.com/in/evertakkerman/" }],
  openGraph: {
    title: `${site.shortName} · ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.legalName,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} · ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  alternateName: site.shortName,
  url: site.url,
  description: site.description,
  foundingDate: "2012",
  email: "info@xnlhr.com",
  telephone: "+1-289-338-4001",
  priceRange: "$$",
  address: { "@type": "PostalAddress", addressLocality: "Newmarket", addressRegion: "ON", addressCountry: "CA" },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Ontario" },
    { "@type": "Country", name: "Canada" },
  ],
  knowsAbout: [
    "Fractional human resources",
    "HR consulting",
    "Employment standards",
    "Workplace policy",
    "Employee terminations",
    "Employee handbooks",
    "HR compliance",
    "Editorial writing for HR",
    "Op-ed ghostwriting",
  ],
  founder: { "@id": `${site.url}/about#evert` },
  sameAs: ["https://www.linkedin.com/in/evertakkerman/"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.shortName,
  description: site.description,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en-CA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${caveat.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <StickyBookingBar />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
