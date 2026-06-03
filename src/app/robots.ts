import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// AI assistant / answer-engine crawlers explicitly allowed.
// Per Wave 42 GEO foundation — ensures Perplexity, ChatGPT, Claude, Gemini, etc.
// can crawl the site for citation in AI answers.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Bytespider",
  "Applebot-Extended",
  "CCBot",
  "Meta-ExternalAgent",
  "cohere-ai",
  "YouBot",
  "DuckAssistBot",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((agent) => ({ userAgent: agent, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
