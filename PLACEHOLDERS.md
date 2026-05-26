# XNL HR website — placeholder tracker

Everything in this file is **fictional or illustrative** and needs to be replaced with real values before launch.
Jacob has explicit permission from Evert to ship with placeholders so the design and conversion mechanics can be reviewed in context.

Replace each item below when the real value is available. The code locations show exactly where the placeholder lives.

---

## 1. Scheduling / booking

**Status:** No live booking integration. All scenario tiles + final CTA buttons currently route to `/contact?topic=X`. The contact page shows a topic-aware message + phone number + email.

**What's needed:**
- The scheduler URL (Calendly, Cal.com, Acuity, or whatever Evert/Wendy use)
- Embed it on `/contact` and replace the topic message with the actual booking widget
- Update the sticky booking bar copy from "Next opening: TBD" to the real next available slot

**Code locations:**
- `src/components/sticky-booking-bar.tsx` — line with `Next opening: TBD`
- `src/app/contact/page.tsx` — "Online booking — coming soon" notice
- `src/components/scenario-tiles.tsx` — link targets
- `src/app/services/*/page.tsx` — "Book Evert/Wendy" CTAs

---

## 2. Service pricing (ALL ILLUSTRATIVE)

**Status:** Every service displays **illustrative price ranges** with an "Illustrative" pill in the UI. Educated guesses based on Ontario fractional HR market data — NOT real XNL pricing.

**Placeholder values to replace:**

| Service | Tier | Placeholder | Confirmer |
|---|---|---|---|
| Fractional HR | All | "From $2,500 · 2–4 weeks per project" | Evert |
| Workplace Mediation | Half-day | "From $1,800 per session" | Wendy |
| Workplace Mediation | Full-day | "From $3,000 per session" | Wendy |
| Workplace Mediation | HRTO matter | "Quoted per file" | Wendy |
| Editorial | All | "From $1,200 · 1–3 weeks per project" | Evert |

**Code locations:** `src/data/site.ts` (`services` array `price` + `typicalLength`), `src/app/services/mediation/page.tsx` (full-day + HRTO inline values).

---

## 3. Anonymized case outcomes (ALL FICTIONAL)

**Status:** Each service card and each service sub-page shows a **fictional anonymized case** marked with an "Example" pill. NOT real client work.

**Placeholders:**
- **Fractional HR:** "Manufacturer, 80 employees. Terminated CFO without documented cause. We rebuilt the file and the settlement landed at $35k instead of the projected $140k."
- **Workplace Mediation:** "NFP board, harassment complaint between ED and program director. Two half-day sessions. Both stayed. No formal complaint filed."
- **Editorial:** "Professional services firm. Founder needed a board memo on a partner exit. 48-hour turnaround. The memo carried the room."

**Code location:** `src/data/site.ts` — `services` array, each entry has an `anonymizedCase` field.

**Action:** Evert approves either (a) publishing one real anonymized outcome per service with permission, or (b) keeping illustrative cases with a clearer disclaimer.

---

## 4. Testimonials (ALL ILLUSTRATIVE)

**Status:** Three **fictional but believable** testimonials in the homepage "In their words" section. Quote text is composite. Attribution explicitly shows "[Client name pending]" + role + org type. Each card carries an "Illustrative" pill.

**Placeholders:**
1. "We had a termination going sideways and a board meeting in 72 hours..." — Executive Director, Mid-size Ontario nonprofit
2. "Wendy made a hard conversation possible without making it harder..." — Founder + CEO, Professional services firm
3. "Evert wrote the board memo I'd been trying to write for two weeks..." — COO, Ontario municipal corporation

**Code location:** `src/data/site.ts` — `testimonials` array. Component at `src/components/testimonials.tsx`.

**Action:** Gather 3 real testimonials with client permission. Set `placeholder: false` after replacing.

---

## 5. Recent thinking / article previews (ALL ILLUSTRATIVE)

**Status:** Three **illustrative article previews** in the homepage "Where Evert is publishing" section. NOT real Evert articles. Links go to `#`.

**Placeholders:**
1. "Why the cheapest HR mistake is the one you spot first" — Canadian HR Reporter — March 2026
2. "Mandatory mediation: what Ontario employers should be doing right now" — The Lawyer's Daily — January 2026
3. "Hiring is a search problem, not a sales problem" — Municipal World — November 2025

**Code location:** `src/data/site.ts` — `articles` array. Component at `src/components/recent-thinking.tsx`.

**Action:** Replace with three real Evert bylines (title, publication, date, 1-2 sentence excerpt, public URL). Set `placeholder: false`.

---

## 6. Sticky booking bar — "Next opening"

**Status:** Sticky bar shows "Next opening: TBD."

**Code location:** `src/components/sticky-booking-bar.tsx`

---

## 7. Real photos of Evert and Wendy

**Status:** The `/about` page still uses an AI-generated portrait of Evert (`/public/img/founder.png`). The homepage no longer shows it.

**What's needed:**
- One real high-resolution photo of Evert at his desk (editorial style)
- One real photo of Wendy (for the mediation page)
- Replace `/public/img/founder.png` and add `/public/img/wendy.png`

**Code locations:** `src/app/about/page.tsx`, `src/app/services/mediation/page.tsx`

---

## 8. Publication wordmarks

**Status:** The publication marquee uses **typographic variation** to evoke wordmark style. Real wordmarks would lift visual credibility further.

**Optional:** Get permission for official wordmarks (often available in media kits) or recreate as SVGs.

---

## 9. Wendy Akkerman bio + credentials

**Status:** The `/services/mediation` page now exists with a placeholder bio for Wendy. Currently shows "[Placeholder bio]" and "[Credentials pending]" with explicit pills marking incomplete content.

**What's needed:**
- Wendy's full bio (1–2 paragraphs)
- Professional mediator credentials (Q-Med, IMI, etc.)
- Years of practice experience
- Background (HR, law, counselling, etc.)
- Specialization within mediation
- Wendy's LinkedIn URL

**Code location:** `src/app/services/mediation/page.tsx` — "WENDY BIO" section. Also `src/data/site.ts` — `principals.wendy` object.

---

## 10. "Mediation-ready in 10 business days" guarantee

**Status:** The mediation page hero features a guarantee badge: "Mediation-ready in 10 business days from intake." This is a marketing claim that needs Wendy/Evert to confirm operationally.

**Action:** Wendy/Evert confirm this is operationally true. If timing varies, adjust the claim. If it's a hard guarantee, consider adding refund/credit terms.

**Code location:** `src/app/services/mediation/page.tsx` — hero section.

---

## 11. Editorial process "two structural revision rounds"

**Status:** The editorial service page promises "two structural revision rounds included." Standard for editorial work but Evert should confirm before this is contractually binding.

**Code location:** `src/app/services/editorial/page.tsx` — process step 03 and pricing section.

---

## Checklist for launch readiness

- [ ] Calendly / Cal.com URL wired into scenario tiles, contact page, sticky bar, service page CTAs
- [ ] Real service pricing replaces all illustrative ranges (Fractional HR, Mediation half-day + full-day + HRTO, Editorial)
- [ ] One real anonymized case per service (with Evert's approval) OR clear disclaimer
- [ ] 3 real testimonials gathered with named attribution
- [ ] 3 real article previews (titles + excerpts + URLs) from Evert's catalog
- [ ] Sticky bar "Next opening" date is live
- [ ] Real photo of Evert replaces AI portrait on /about and /services/mediation
- [ ] Wendy photo added
- [ ] Wendy full bio + credentials replace `[Placeholder bio]` text on `/services/mediation`
- [ ] "Mediation-ready in 10 business days" guarantee confirmed operationally OR adjusted
- [ ] Editorial "two revision rounds" terms confirmed OR adjusted
- [ ] (Optional) Publication wordmarks replace text in marquee

When all checked, the "Illustrative", "Example", and "Bio pending" pills can be removed from the UI and the site is ready for the Wix → Vercel domain cutover.
