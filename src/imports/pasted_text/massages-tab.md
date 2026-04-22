# Figma Make Prompt — Massages Tab for Services Page

---

## CONTEXT

This is the Sophie Spa Services page. The page uses **tab-style navigation** via pill buttons (FACIALS · MASSAGES · EXFOLIATION) at the top. Each pill switches the entire content area below — they are **tabs, not scroll anchors**. Only one category is visible at a time.

The **Facials tab** is already built with 3 treatment cards in an alternating editorial layout. Now we're building the **Massages tab** — a completely separate view that replaces the Facials content when the "MASSAGES" pill is clicked.

The Massages tab must be **visually identical in structure** to the Facials tab — same card layout, same typography, same spacing, same design system. A user switching between tabs should feel like turning pages in the same luxury menu.

Sophie Spa is a premium mobile beauty and wellness service in Auckland, New Zealand.

---

## BRAND IDENTITY (must match existing page exactly)

**Color Palette:**
- Warm cream background: #FDF8F4
- Soft blush pink: #F5E6DC
- Muted rose/mauve (accent, prices, buttons, active pill): #C4929B
- Deep charcoal (headings, body text): #2C2C2C
- Antique gold (subtle accents): #B8956A
- White: #FFFFFF

**Typography:**
- Headings: Elegant serif (Cormorant Garamond or similar) — editorial, magazine-quality
- Body text: Clean geometric sans-serif (Josefin Sans or similar) — airy, effortless
- Line-height: generous (1.75 for body text)

---

## TAB BEHAVIOR

When the **"MASSAGES"** pill is clicked:
1. The pill becomes active — border 1.5px solid #C4929B, color #C4929B, background rgba(196,146,155,0.06)
2. "FACIALS" and "EXFOLIATION" pills become inactive — border 0.5px solid rgba(196,146,155,0.2), color charcoal at 35% opacity
3. The entire content area below the pills swaps to show the Massages section
4. The page header ("SOPHIE SPA", "Services", subtitle, pills) stays fixed — only the content below changes

---

## MASSAGES CONTENT (replaces Facials content when tab is active)

### Section Label
"MASSAGES" in 11px, letterspaced 0.2em, uppercase, muted rose #C4929B, with a thin 1px line extending to the right — identical to the "FACIALS" label in the Facials tab.

Below, each massage treatment gets a **full editorial treatment card** using the same alternating layout:

- **Card 1 (Relaxation Massage):** Image on LEFT, text on RIGHT
- **Card 2 (Swedish Remedial Massage):** Image on RIGHT, text on LEFT
- **Card 3 (Deep Tissue & Sports Massage):** Image on LEFT, text on RIGHT

Each card separated by 60–80px of vertical space. No visible card borders or containers — cards breathe on the cream background, separated by whitespace alone.

---

## TREATMENT CARD TEMPLATE (identical to Facials cards)

**IMAGE SIDE (45–50% width):**
- Large treatment photo, aspect ratio 4:3 or 3:4
- Border-radius: 16px
- Subtle warm shadow: 0 16px 40px rgba(196,146,155,0.1)
- Use warm, spa-toned placeholder images — Sophie will replace with her own photography

**TEXT SIDE (50–55% width):**
1. **Treatment name** — serif, 28–32px, deep charcoal #2C2C2C
2. **Duration & Price row** — 6px below name:
   - Duration: sans-serif, 13px, charcoal at 30% opacity
   - Dot separator: "·" charcoal at 20% opacity
   - Price: sans-serif, 18px, font-weight 500, muted rose #C4929B
3. **Description** — sans-serif, 14–15px, charcoal at 55% opacity, line-height 1.75, max-width 440px
4. **"Includes" label** — 10px, letterspaced 0.15em, uppercase, charcoal at 30% opacity, margin-top 20px
5. **Inclusion tags** — horizontal wrapping pills:
   - 11px, padding 5px 14px, border-radius 100px
   - Border: 0.5px solid rgba(196,146,155,0.15)
   - Color: charcoal at 45% opacity
   - Gap: 6px between pills
6. **"Book this treatment"** pill button — margin-top 24px, background #C4929B, white #FFFFFF text, 13px, letterspaced 0.03em, padding 12px 32px, border-radius 100px

**MOBILE:** Stack vertically — full-width image on top (max-height 300px, object-fit cover, border-radius 16px), text below with 24px padding.

---

### TREATMENT CARD 1 — Relaxation Massage

**Layout:** Image LEFT, text RIGHT

**Name:** Relaxation Massage
**Duration:** [PLACEHOLDER — Sophie to confirm]
**Price:** [PLACEHOLDER — Sophie to confirm]
**Description:** Using long, flowing strokes, this treatment soothes, calms, and centres both body and mind. Light to medium pressure is tailored to suit each individual, allowing tension to gently release while restoring a sense of balance. A full-body sequence, combined with subtle stretches and intuitive touch, creates a deeply restorative experience. Aromatherapy can be included if preferred to further enhance relaxation. Warm, soothing hot towels complete the session, removing excess oils and leaving you feeling refreshed, grounded, and restored.
**Includes:** Full-body massage · Aromatherapy (optional) · Subtle stretches · Intuitive touch · Hot towel therapy
**Note below includes:** "Aromatherapy can be added at no extra charge" in 11px, charcoal at 30% opacity, italic

---

### TREATMENT CARD 2 — Swedish Remedial Massage

**Layout:** Image RIGHT, text LEFT

**Name:** Swedish Remedial Massage
**Duration:** [PLACEHOLDER — Sophie to confirm]
**Price:** [PLACEHOLDER — Sophie to confirm]
**Description:** The perfect blend of relaxation and results. This classic full-body massage combines soothing, flowing movements with deeper targeted techniques — adjusted to the depth you prefer. Gentle kneading improves circulation, eases muscle tension, and calms the mind, while remedial work releases deeper knots and restrictions. Soph's extensive experience allows her to tailor each session for maximum relaxation without compromising on therapeutic results.
**Includes:** Full-body massage · Flowing Swedish strokes · Targeted remedial techniques · Circulation boost · Muscle tension release
**Note below includes:** "Pressure tailored to your preference" in 11px, charcoal at 30% opacity, italic

---

### TREATMENT CARD 3 — Deep Tissue & Sports Massage

**Layout:** Image LEFT, text RIGHT

**Name:** Deep Tissue & Sports Massage
**Duration:** [PLACEHOLDER — Sophie to confirm]
**Price:** [PLACEHOLDER — Sophie to confirm]
**Description:** A results-focused treatment designed to ease muscle tension and improve mobility. Using firm, targeted pressure, this massage works into deeper layers of muscle to relieve tightness and deactivate trigger points. Each session is full body, with extra focus on the areas that need it most. Pressure is always adjusted to your comfort, so it's effective without being overwhelming. With postgraduate training in deep tissue and experience working with elite athletes, Soph uses a range of techniques to reduce tension, restore movement, and get your body functioning better. Walk away feeling looser, lighter, and limber.
**Includes:** Full-body deep tissue work · Trigger point therapy · Sports massage techniques · Mobility restoration · Targeted muscle release
**Note below includes:** "Trusted by professional NZ and international rugby teams" in 11px, charcoal at 30% opacity, italic

---

## COMING SOON CARDS (Optional — include if Sophie wants placeholders visible)

### TREATMENT CARD 4 — Hot Stone Massage (Coming Soon)

**Layout:** Image RIGHT, text LEFT

**Name:** Hot Stone Massage
**Duration:** Coming Soon
**Price:** —
**Description:** Smooth, heated basalt stones placed on key points of the body to melt deep-held tension and promote profound relaxation. The warmth penetrates tired muscles while Soph's intuitive touch guides the stones to where your body needs them most. Full details coming soon.
**Includes:** —
**Button:** Replace "Book this treatment" with a "Notify Me" outline button — same pill shape, border 1.5px solid #C4929B, color #C4929B, background transparent. Hover: fill rgba(196,146,155,0.06).

---

### TREATMENT CARD 5 — Corporate Chair Massage (Coming Soon)

**Layout:** Image LEFT, text RIGHT

**Name:** Corporate Chair Massage
**Duration:** Coming Soon
**Price:** —
**Description:** On-site chair massage for your team — boosting morale, reducing stress, and showing your people they're valued. A fully mobile wellness experience brought directly to your workplace, anywhere across Auckland. Full details coming soon.
**Includes:** —
**Button:** Same "Notify Me" outline button as Hot Stone.

---

## BOTTOM CTA (within the Massages tab)

After the last massage card, include the same closing CTA used in the Facials tab:

Center-aligned, 80px top padding:
- Thin 1px divider line in rgba(196,146,155,0.1), max-width 200px, centered, margin-bottom 40px
- "Not sure which treatment is right for you?" in serif, 26–30px, deep charcoal #2C2C2C
- Subtitle (10px gap): "Book a free consultation and let Sophie guide you to the perfect experience." in sans-serif, 14px, charcoal at 45% opacity, max-width 400px, centered
- CTA (24px gap): "Book a Consultation" pill button, muted rose #C4929B background, white #FFFFFF text
- Below CTA (14px gap): "Or call (027) 251-6985" in 12px, charcoal at 30% opacity — clickable tel: link
- Bottom padding: 100px

---

## CRITICAL DESIGN RULES

1. **This is a separate tab view, NOT a section below Facials.** When Massages is active, Facials content is hidden. Only one category visible at a time.
2. **No card borders or containers.** Treatments float on cream background. Whitespace is the structure.
3. **Alternating layout is essential.** Image left → image right → image left. Zigzag rhythm.
4. **Prices immediately visible** — no clicks, no hovers, no expanding.
5. **Every treatment has its own "Book this treatment" button** (except Coming Soon cards → "Notify Me").
6. **Photos are placeholders.** Sophie will replace with her own photography.
7. **Color palette must be exact.** Cream #FDF8F4, blush pink #F5E6DC, charcoal #2C2C2C, rose #C4929B, gold #B8956A, white #FFFFFF. No other colors.
8. **Typography hierarchy matches Facials tab exactly.** Same serif headlines, same sans-serif body, same sizes, same spacing.
9. **Mobile must work beautifully.** Alternating layout stacks on mobile: image always on top, text below.
10. **Seamless tab transition.** Switching between Facials and Massages should feel like turning pages of the same luxury menu — identical structure, different content.

---

## PLACEHOLDER IMAGE SUGGESTIONS

- Card 1 (Relaxation): Warm-toned image of a relaxing massage setting, soft lighting, aromatherapy elements
- Card 2 (Swedish Remedial): Therapist's hands working on a client's back, warm spa tones
- Card 3 (Deep Tissue): Athletic/sports massage feel, firm technique, professional setting
- Card 4 (Hot Stone): Smooth dark basalt stones on skin, warm candlelight ambiance
- Card 5 (Corporate Chair): Professional setting, chair massage in a modern office/event space