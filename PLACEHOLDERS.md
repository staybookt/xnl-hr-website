# XNL HR website — placeholder tracker

Everything in this file is **fictional or illustrative** and needs to be replaced with real values before launch.
Jacob has explicit permission from Evert to ship with placeholders so the design and conversion mechanics can be reviewed in context.

Replace each item below when the real value is available. The code locations show exactly where the placeholder lives.

---

## 1. Scheduling / booking

**Status:** No live booking integration. All scenario tiles + final CTA buttons currently route to `/contact?topic=X`. The contact page shows a topic-aware message + phone number + email.

**What's needed:**
- The scheduler URL (Calendly, Cal.com, Acuity, or whatever Evert uses)
- Embed it on `/contact` and replace the topic message with the actual booking widget
- Update the sticky booking bar copy from "Next opening: TBD" to the real next available slot

**Code locations:**
- `src/components/sticky-booking-bar.tsx` — line with `Next opening: TBD`
- `src/app/contact/page.tsx` — "Online booking — coming soon" notice
- `src/components/scenario-tiles.tsx` — link targets (currently `/contact?topic=X`)

---

## 2. Service pricing

**Status:** All three services display **illustrative price ranges** marked with a small "illustrative" tag in the UI. These are educated guesses based on Ontario fractional HR market data, NOT real XNL pricing.

**Placeholder values (to replace with real ranges from Evert):**

| Service | Placeholder | Source for real |
|---|---|---|
| Fractional HR | "From $2,500 · 2–4 weeks per project" | Evert to confirm |
| Workplace Mediation | "From $1,800 · Half-day or full-day sessions" | Wendy to confirm |
| Editorial & Communications | "From $1,200 · 1–3 weeks per project" | Evert to confirm |

**Code location:** `src/data/site.ts` — `services` array, each entry has `price` and `typicalLength` fields.

---

## 3. Anonymized case outcomes (service cards)

**Status:** Each service card shows a **fictional anonymized case** marked with an "example" pill. These are NOT real client work — they are believable composites for demonstration only.

**Placeholder cases (to replace with real anonymized outcomes when Evert approves):**

- **Fractional HR:** "Manufacturer, 80 employees. Terminated CFO without documented cause. We rebuilt the file and the settlement landed at $35k instead of the projected $140k."
- **Workplace Mediation:** "NFP board, harassment complaint between ED and program director. Two half-day sessions. Both stayed. No formal complaint filed."
- **Editorial:** "Professional services firm. Founder needed a board memo on a partner exit. 48-hour turnaround. The memo carried the room."

**Code location:** `src/data/site.ts` — `services` array, each entry has an `anonymizedCase` field.

**Action needed:** Evert approves either (a) publishing one real anonymized outcome per service with permission, or (b) keeping these illustrative cases with a clearer disclaimer.

---

## 4. Testimonials

**Status:** Three **fictional but believable** testimonials show in a dedicated section. Quote text is composite. Attribution explicitly shows "[Client name pending]" plus a generic role/org line. Each card carries an "Illustrative" pill.

**Placeholder quotes:**

1. "We had a termination going sideways and a board meeting in 72 hours. Evert had us documented, defensible, and confident before the meeting. The room felt different." — Executive Director, Mid-size Ontario nonprofit
2. "Wendy made a hard conversation possible without making it harder. Two sessions and the team is still intact." — Founder + CEO, Professional services firm
3. "Evert wrote the board memo I'd been trying to write for two weeks. It landed in 20 minutes of his time." — COO, Ontario municipal corporation

**Code location:** `src/data/site.ts` — `testimonials` array. Component at `src/components/testimonials.tsx`.

**Action needed:** Gather 3 real testimonials with client permission. Set `placeholder: false` on each entry after replacing.

---

## 5. Recent thinking / article previews

**Status:** Three **illustrative article previews** appear in the "Where Evert is publishing" section. Titles, excerpts, dates, and publications are believable composites — NOT real Evert articles. Each link goes to `#` until we have real URLs.

**Placeholder articles:**

1. "Why the cheapest HR mistake is the one you spot first" — Canadian HR Reporter — March 2026
2. "Mandatory mediation: what Ontario employers should be doing right now" — The Lawyer's Daily — January 2026
3. "Hiring is a search problem, not a sales problem" — Municipal World — November 2025

**Code location:** `src/data/site.ts` — `articles` array. Component at `src/components/recent-thinking.tsx`.

**Action needed:** Replace with three real Evert bylines (title, publication, date, 1-2 sentence excerpt, public URL). Set `placeholder: false` on each.

---

## 6. Sticky booking bar — "Next opening"

**Status:** Sticky bar shows "Next opening: TBD." Should show the actual next available consultation slot.

**Code location:** `src/components/sticky-booking-bar.tsx`

---

## 7. Real photos of Evert and Wendy

**Status:** The `/about` page still uses an AI-generated portrait of Evert (`/public/img/founder.png`). The homepage no longer shows it.

**What's needed:**
- One real high-resolution photo of Evert at his desk (editorial style, not headshot)
- One real photo of Wendy (for the mediation page)
- Replace `/public/img/founder.png` and add `/public/img/wendy.png`

**Code locations:** `src/app/about/page.tsx`, any future mediation-specific page

---

## 8. Publication wordmarks (logos)

**Status:** The publication marquee now uses **typographic variation** to evoke wordmark style (different weights, italics, tracking, all-caps for HR Professional Now). Real wordmarks would still lift visual credibility further.

**Publications referenced:**
- Canadian HR Reporter
- Municipal World
- Ottawa Life
- Talent Canada
- The Lawyer's Daily
- HR Professional Now
- HRD Canada

**What's needed (optional):** Either get permission to use the official wordmarks (often available in their media kits) or recreate as SVGs.

**Code location:** `src/app/page.tsx` — publications marquee section. Style definitions in `src/data/site.ts` — `publications` array.

---

## 9. Mediation page (`/services/mediation`)

**Status:** The sub-service page exists but is a stub. The mediation hero band on the homepage links to it. The "Book Wendy" CTA needs a real destination.

**What's needed:**
- Wendy's full bio
- Wendy's professional credentials
- Mediation engagement model (per session, per matter, etc.)
- The HRTO rule citation and timing
- A "Mediation-ready in 10 business days" guarantee or removal

**Code location:** `src/app/services/mediation/page.tsx`

---

## Checklist for launch readiness

- [ ] Calendly / Cal.com URL wired into scenario tiles, contact page, sticky bar
- [ ] Real service pricing replaces all three illustrative ranges
- [ ] One real anonymized case per service (with Evert's approval) OR clear disclaimer
- [ ] 3 real testimonials gathered with named attribution
- [ ] 3 real article previews (titles + excerpts + URLs) from Evert's catalog
- [ ] Sticky bar "Next opening" date is live
- [ ] Real photo of Evert replaces AI portrait on /about
- [ ] Wendy photo added
- [ ] Mediation page fleshed out
- [ ] (Optional) Publication wordmarks replace text in marquee

When all checked, the "illustrative" and "example" tags can be removed from the UI and the site is ready for the Wix → Vercel domain cutover.
