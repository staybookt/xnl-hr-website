import type { MetadataRoute } from "next";
import { site, services, articles } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, priority: 1.0, changeFrequency: "weekly" },
    { url: `${site.url}/about`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${site.url}/approach`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${site.url}/services`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${site.url}/insights`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${site.url}/contact`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
  ];
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));
  const insightPages: MetadataRoute.Sitemap = articles
    .filter((a) => a.url !== "#")
    .map((a) => ({
      url: `${site.url}${a.url}`,
      lastModified: now,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    }));
  return [...base, ...servicePages, ...insightPages];
}
