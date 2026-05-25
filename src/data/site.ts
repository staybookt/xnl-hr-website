// XNL HR — single source of truth for site-wide data.
// NAP must stay byte-identical with GBP, schema, and directory listings.

export const site = {
  legalName: "XNL HR & Communications",
  shortName: "XNL HR",
  tagline: "Senior HR, scoped by the project.",
  description:
    "Fractional HR and workplace mediation for Ontario's owner-operated employers and not-for-profits. No retainers. No junior staff.",
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
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    slug: "hr-support",
    name: "HR Support",
    principal: "Evert",
    blurb:
      "Hiring, terminations, handbooks, policy, compliance — senior judgment, project-priced.",
  },
  {
    slug: "editorial",
    name: "Editorial & Communications",
    principal: "Evert",
    blurb:
      "Business writing, op-eds, communications plans, book editing, EN↔NL translation.",
  },
  {
    slug: "mediation",
    name: "Workplace Mediation",
    principal: "Wendy · Now booking",
    blurb:
      "Independent mediation for Ontario employers — timed to the new HRTO mandatory-mediation rule.",
  },
  {
    slug: "mediation",
    name: "Workplace Mediation",
    principal: "Wendy · Now booking",
    blurb:
      "Independent mediation for Ontario employers — timed to the new HRTO mandatory-mediation rule.",
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
