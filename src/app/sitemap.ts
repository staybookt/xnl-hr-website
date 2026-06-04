import type { MetadataRoute } from "next";
import { site, services } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, priority: 1.0, changeFrequency: "weekly" },
    { url: `${site.url}/about`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${site.url}/approach`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${site.url}/services`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${site.url}/insights`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${site.url}/contact`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${site.url}/testimonials`, lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${site.url}/accessibility`, lastModified: now, priority: 0.4, changeFrequency: "yearly" },
    { url: `${site.url}/privacy`, lastModified: now, priority: 0.3, changeFrequency: "yearly" },
  ];
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));
  // Articles are external links to publications (Talent Canada, Law360 Canada).
  // /insights is included in `base` above; individual article URLs aren't on xnlhr.com,
  // so they don't belong in the sitemap.
  return [...base, ...servicePages];
}
