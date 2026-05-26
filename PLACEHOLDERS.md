# XNL HR website — placeholder tracker

Everything in this file is **fictional or illustrative** and needs to be replaced with real values before launch.
Jacob has explicit permission from Evert to ship with placeholders so the design and conversion mechanics can be reviewed in context.

Replace each item below when the real value is available.

---

## 1. Scheduling / booking

**Status:** No live booking integration. Scenario tiles + CTAs route to `/contact?topic=X`.

**Code locations:**
- `src/components/sticky-booking-bar.tsx` — "Next opening: TBD"
- `src/app/contact/page.tsx` — "Online booking — coming soon" notice
- All service pages — "Book Evert/Wendy" CTAs

---

## 2. Service pricing (ALL ILLUSTRATIVE)

| Service | Tier | Placeholder | Confirmer |
|---|---|---|---|
| Fractional HR | All | "From $2,500 · 2–4 weeks per project" | Evert |
| Workplace Mediation | Half-day | "From $1,800 per session" | Wendy |
| Workplace Mediation | Full-day | "From $3,000 per session" | Wendy |
| Workplace Mediation | HRTO matter | "Quoted per file" | Wendy |
| Editorial | All | "From $1,200 · 1–3 weeks per project" | Evert |

**Code location:** `src/data/site.ts` — `services` array.

---

## 3. Anonymized case outcomes (ALL FICTIONAL)

Each service card and sub-page shows a fictional anonymized case with an "Example" pill.

**Code location:** `src/data/site.ts` — `services` array, `anonymizedCase` field.

---

## 4. Testimonials (ALL ILLUSTRATIVE)

Three fictional testimonials in the homepage "In their words" section. Attribution explicitly shows "[Client name pending]" + role + org type.

**Code location:** `src/data/site.ts` — `testimonials` array.

---

## 5. Recent thinking / article previews (ALL ILLUSTRATIVE)

Three illustrative article previews in the homepage. NOT real Evert articles. Links go to `#`.

**Code location:** `src/data/site.ts` — `articles` array.

---

## 6. Voice samples — "What Evert believes" (ALL ILLUSTRATIVE)

**Status:** Six placeholder statements drafted in Evert's voice on the homepage and `/about` page. Each card carries an "Illustrative" pill in the section header.

**Placeholders:**
1. "Most HR problems are documentation problems disguised as people problems."
2. "The HR department's job isn't to protect the company. It's to protect the company from itself."
3. "If your handbook is older than your last hire, you have a handbook problem."
4. "Senior judgment is mostly about knowing what NOT to write down."
5. "The cheapest HR mistake is the one you spot before it becomes a wrongful dismissal claim." (also used as Evert's main pull quote)
6. "If we're not the right fit, I'll tell you in the first ten minutes. The next twenty are for who is."

**Code location:** `src/data/site.ts` — `voiceSamples` array.

**Action:** Evert reviews each statement, edits to his actual voice, signs off. Once approved, remove the "Illustrative" pill from the VoiceSamples component header.

---

## 7. Stylized portraits (Evert + Wendy)

**Status:** Both portraits are **custom-illustrated SVGs** (NOT AI-generated). Editorial minimalist style. Each portrait carries an "Illustrated" pill in the caption.

**What's needed for launch:**
- One real high-resolution photo of Evert (editorial style, considered framing)
- One real high-resolution photo of Wendy (same treatment)
- Replace the `<PortraitEvert />` and `<PortraitWendy />` component usages with `<Image>` tags pointing to `/public/img/evert.jpg` and `/public/img/wendy.jpg`

**Code locations:** `src/components/portrait.tsx` (SVG components); used on `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/services/mediation/page.tsx`.

---

## 8. Sticky booking bar — "Next opening"

**Code location:** `src/components/sticky-booking-bar.tsx`

---

## 9. Publication wordmarks

**Status:** Marquee uses typographic variation to evoke wordmark style. Real wordmarks optional.

---

## 10. Wendy Akkerman bio + credentials

**Status:** `/services/mediation` and `/about` show a placeholder bio with "[Placeholder bio]" and "[Credentials pending]" markers + "Bio pending" pill.

**What's needed:**
- Wendy's full bio (1–2 paragraphs)
- Professional mediator credentials (Q-Med, IMI, etc.)
- Years of practice experience
- Background (HR, law, counselling, etc.)
- Wendy's LinkedIn URL

**Code location:** `src/app/services/mediation/page.tsx`, `src/app/about/page.tsx`, `src/data/site.ts` (`principals.wendy`).

---

## 11. "Mediation-ready in 10 business days" guarantee

**Status:** Featured on the mediation page hero as a guarantee badge. Marketing claim requiring operational confirmation.

**Code location:** `src/app/services/mediation/page.tsx`

---

## 12. Editorial process "two structural revision rounds"

**Status:** Standard editorial promise on `/services/editorial`. Evert to confirm before contractually binding.

---

## 13. Signatures

**Status:** "Evert" and "Wendy" rendered in the Caveat script font (Google Fonts) on dark and light backgrounds. Quick approximation of a handwritten signature.

**What's needed for launch:**
- Real handwritten signature SVGs from both Evert and Wendy (scanned + vectorized)
- Replace `<SignatureEvert />` and `<SignatureWendy />` with `<svg>` inline using the real path data

**Code location:** `src/components/signature.tsx`. Used on homepage founder section, `/about`, `/services/mediation`.

---

## Checklist for launch readiness

- [ ] Calendly / Cal.com URL wired into scenario tiles, contact page, sticky bar, service page CTAs
- [ ] Real service pricing replaces all illustrative ranges (5 entries)
- [ ] One real anonymized case per service with Evert's approval OR clear disclaimer
- [ ] 3 real testimonials gathered with named attribution
- [ ] 3 real article previews (titles + excerpts + URLs)
- [ ] Sticky bar "Next opening" date is live
- [ ] Real photo of Evert replaces illustrated portrait everywhere
- [ ] Real photo of Wendy added everywhere
- [ ] Wendy full bio + credentials replace "[Placeholder bio]" + "Bio pending" pills
- [ ] "Mediation-ready in 10 business days" guarantee confirmed OR adjusted
- [ ] Editorial "two revision rounds" terms confirmed OR adjusted
- [ ] Voice samples reviewed + edited by Evert; remove "Illustrative" pill from VoiceSamples header
- [ ] Real signature SVGs replace Caveat-font signatures
- [ ] (Optional) Publication wordmarks replace text in marquee

When all checked, all "Illustrative" / "Example" / "Bio pending" / "Illustrated" pills come down from the UI and the site is ready for the Wix → Vercel domain cutover.
