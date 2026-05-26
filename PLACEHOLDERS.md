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
- `src/app/contact/page.tsx` — placeholder messaging
- `src/components/scenario-tiles.tsx` — link targets (currently `/contact?topic=X`)

---

## 2. Service pricing

**Status:** All three services display **illustrative price ranges** marked with a small "illustrative" tag in the UI. These are educated guesses based on Ontario fractional HR market data, NOT real XNL pricing.

**Placeholder values (to replace with real ranges from Evert):**

| Service | Placeholder | Source for real |
|---|---|---|
| Fractional HR | "From $2,500 · typically 2–4 weeks" | Evert to confirm |
| Workplace Mediation | "From $1,800 per half-day session" | Wendy to confirm |
| Editorial & Communications | "From $1,200 per project" | Evert to confirm |

**Code location:** `src/data/site.ts` — `services` array, each entry has `price` and `typicalLength` fields.

---

## 3. Anonymized case outcomes

**Status:** Each service card shows a **fictional anonymized case** marked with an "illustrative example" tag. These are NOT real client work — they are believable composites for demonstration only.

**Placeholder cases (to replace with real anonymized outcomes when Evert approves):**

- **Fractional HR:** "Manufacturer, 80 employees. Terminated CFO without documented cause. We rebuilt the file and the settlement landed at $35k instead of the projected $140k."
- **Workplace Mediation:** "NFP board, harassment complaint between ED and program director. Two half-day sessions. Both stayed. No formal complaint filed."
- **Editorial:** "Professional services firm, founder needed a board memo on a partner exit. 48-hour turnaround. The memo carried the room."

**Code location:** `src/data/site.ts` — `services` array, each entry has an `anonymizedCase` field.

**Action needed:** Evert approves either (a) publishing one real anonymized outcome per service with permission, or (b) keeping these illustrative cases with a clearer disclaimer.

---

## 4. Sticky booking bar — "Next opening"

**Status:** Sticky bar shows "Next opening: TBD." Should show the actual next available consultation slot.

**Code location:** `src/components/sticky-booking-bar.tsx`

---

## 5. Real photos of Evert and Wendy

**Status:** The `/about` page still uses an AI-generated portrait of Evert (`/public/img/founder.png`). The homepage no longer shows it.

**What's needed:**
- One real high-resolution photo of Evert at his desk (editorial style, not headshot)
- One real photo of Wendy (for the mediation page)
- Replace `/public/img/founder.png` and add `/public/img/wendy.png`

**Code locations:** `src/app/about/page.tsx`, any future mediation-specific page

---

## 6. Publication wordmarks (logos)

**Status:** The publication marquee uses plain text names. Real wordmarks would lift the visual credibility.

**Publications referenced:**
- Canadian HR Reporter
- Municipal World
- Ottawa Life
- Talent Canada
- The Lawyer's Daily
- HR Professional Now
- HRD Canada

**What's needed:** Either get permission to use the official wordmarks (often available in their media kits) or recreate as SVGs.

**Code location:** `src/app/page.tsx` — publications marquee section

---

## 7. Client testimonials / named clients

**Status:** Zero real testimonials or named client logos on the site.

**What's needed:** 3 short testimonial quotes with named attribution ("[Name], [Title], [Company]") OR 3 client logos to display as a credibility row.

**Wave 10 unlocks** once these are gathered.

---

## 8. Mediation page (`/services/mediation`)

**Status:** The sub-service page exists but is a stub. The new mediation hero band on the homepage links to it.

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
- [ ] Sticky bar "Next opening" date is live
- [ ] Real photo of Evert replaces AI portrait on /about
- [ ] Wendy photo added
- [ ] Mediation page fleshed out
- [ ] At least one client testimonial gathered
- [ ] (Optional) Publication wordmarks replace text in marquee

When all checked, the "illustrative" tags can be removed from the UI and the site is ready for the Wix → Vercel domain cutover.
