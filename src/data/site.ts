// XNL HR — single source of truth for site-wide data.
// NAP must stay byte-identical with GBP, schema, and directory listings.

export const site = {
  legalName: "XNL HR & Communications",
  shortName: "XNL HR",
  tagline: "Senior HR, scoped by the project.",
  description:
    "Fractional HR and workplace mediation for Ontario's owner-operated employers and not-for-profits. No retainers required. No junior staff.",
  url: "https://xnlhr.com",
  founded: 2012,
} as const;

export const contact = {
  phone: "289.338.4001",
  phoneE164: "+12893384001",
  email: "info@xnlhr.com",
  address: {
    locality: "Newmarket",
    region: "ON",
    country: "Canada",
  },
  hours: "Mon–Fri 9–5 ET",
} as const;

export const principals = {
  evert: {
    name: "Evert Akkerman",
    credential: "CHRL, LL.M. (NL)",
    role: "Founder · Fractional HR + Editorial",
    linkedin: "https://www.linkedin.com/in/evertakkerman/",
  },
  wendy: {
    name: "Wendy Akkerman",
    credential: "Mediation",
    role: "Workplace Mediation",
    linkedin: "",
    launchNote: "Now booking",
  },
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "About", href: "/about" },
  { label: "Articles", href: "/articles" },
] as const;

export const services = [
  {
    slug: "hr-support",
    name: "Fractional HR",
    principal: "Evert Akkerman",
    blurb:
      "Hiring, terminations, handbooks, policy, compliance. The outsourced HR department, scoped by the project.",
    forLine: "For owner-operated employers without an in-house HR lead.",
    engagement: "Project or retainer",
    image: "/img/hr-support.png",
    imageAlt: "Hands holding a leather-bound Canadian employment law text on a sunlit walnut desk",
  },
  {
    slug: "mediation",
    name: "Workplace Mediation",
    principal: "Wendy Akkerman · Now booking",
    blurb:
      "Independent mediation for workplace conflict, harassment complaints, and termination disputes. Timed to the HRTO mandatory-mediation rule.",
    forLine: "For employers facing internal conflict or HRTO proceedings.",
    engagement: "Per-session",
    image: "/img/mediation.png",
    imageAlt: "Two empty Eames leather chairs facing each other in a sunlit room with autumn maples through floor-to-ceiling windows",
  },
  {
    slug: "editorial",
    name: "Editorial & Communications",
    principal: "Evert Akkerman",
    blurb:
      "Op-eds, board memos, communications plans, book editing, EN↔NL translation. Drawn from 25+ Canadian bylines.",
    forLine: "For leaders who need a clearer voice in public or internal communication.",
    engagement: "Per-project",
    image: "/img/typewriter.png",
    imageAlt: "Vintage Olivetti typewriter with HR Reporter and Municipal World magazines stacked on a walnut desk",
  },
] as const;

export const credentials = [
  "Since 2012",
  "CHRL",
  "LL.M. (NL)",
  "Randstad Innovation in HR Award",
  "Canada's Top-25 HR · 2016, 2017",
  "Canadian HR Reporter",
  "Municipal World",
  "Ottawa Life",
  "Talent Canada",
  "The Lawyer's Daily",
] as const;
