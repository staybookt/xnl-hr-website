import type { Metadata } from "next";
import { Geist } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — ${site.tagline}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.shortName} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.legalName,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
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
