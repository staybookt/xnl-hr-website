import type { Metadata } from "next";
import { Geist, Caveat } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { NoticeBar } from "@/components/notice-bar";
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
    "workplace mediation",
    "HR consultant Ontario",
    "HRTO mandatory mediation",
    "outsourced HR",
    "HR for small business Canada",
    "CHRL",
    "Newmarket HR",
    "Canadian HR Reporter",
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
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  alternateName: site.shortName,
  url: site.url,
  description: site.description,
  foundingDate: "2012",
  email: "info@xnlhr.com",
  telephone: "+1-289-338-4001",
  address: { "@type": "PostalAddress", addressLocality: "Newmarket", addressRegion: "ON", addressCountry: "CA" },
  founder: { "@type": "Person", name: "Evert Akkerman" },
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
        <NoticeBar />
        <Nav />
        <main>{children}</main>
        <Footer />
        <StickyBookingBar />
      </body>
    </html>
  );
}
