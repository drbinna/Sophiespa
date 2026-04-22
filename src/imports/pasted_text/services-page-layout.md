# Figma Make Prompt — Services Page (Full Editorial Layout)

## CONTEXT

This is a dedicated Services page for Sophie Spa — a premium mobile beauty and wellness service in Auckland, New Zealand. This page is a deep dive into every treatment offered. Right now we are building it with **Facials only** (3 treatments). Massages and Exfoliation sections will be added later using the same layout pattern.

The page should feel like flipping through a luxury spa menu at a five-star resort — generous white space, beautiful photography, and every detail a client needs to make a decision and book.

---

## SITE BRANDING (match exactly)

- **Page background:** warm cream #FDF8F4
- **Soft blush pink (for subtle backgrounds/tints):** #F5E6DC
- **Primary text:** deep charcoal #2C2C2C
- **Accent (buttons, prices, active states, labels):** muted rose #C4929B
- **Secondary accent (decorative details, dividers, subtle highlights):** antique gold #B8956A
- **Headings:** elegant serif font (Playfair Display / Cormorant Garamond or whatever is currently used on the site)
- **Body text:** clean sans-serif (Inter / Satoshi or whatever is currently used on the site)
- **Buttons:** pill-shaped, muted rose #C4929B background, white #FFFFFF text, border-radius 100px
- **Borders:** 0.5px solid rgba(196,146,155,0.12) — barely visible
- **Card corners:** 16px border-radius
- **Shadows:** subtle warm only — 0 20px 50px rgba(196,146,155,0.12)
- **Overall feel:** serene, luxurious, organic, warm. White space is a design element — use it generously. Nothing should feel cramped.

### COLOR PALETTE REFERENCE (use ONLY these colors — no exceptions)
| Role | Hex | Usage |
|------|-----|-------|
| Warm cream | #FDF8F4 | Page background |
| Soft blush pink | #F5E6DC | Subtle background tints, hover states, soft fills |
| Deep charcoal | #2C2C2C | Primary text, headings |
| Muted rose | #C4929B | Accent color — buttons, prices, labels, active pill states, section labels |
| Antique gold | #B8956A | Secondary accent — decorative details, subtle highlights |
| White | #FFFFFF | Button text, contrast text on rose backgrounds |

No other colors should appear anywhere on this page. All opacity variations should be derived from charcoal #2C2C2C or muted rose #C4929B only.

---

## PAGE STRUCTURE

### 1. PAGE HEADER

Center-aligned, generous top padding (100px top, 40px bottom).

- Label: "SOPHIE SPA" in 11px, letterspaced 0.3em, uppercase, muted rose #C4929B
- Headline: "Services" in serif, 44–52px, deep charcoal #2C2C2C
- Subtitle: "Premium mobile beauty and wellness — delivered to your door, anywhere across Auckland." in sans-serif, 15px, charcoal at 50% opacity, max-width 500px, centered
- Below subtitle (28px gap): category anchor pills in a horizontal row:
  - "Facials" — active state: border 1.5px solid #C4929B, color #C4929B, background rgba(196,146,155,0.06)
  - "Massages" — inactive: border 0.5px solid rgba(196,146,155,0.2), color charcoal at 35% opacity
  - "Exfoliation" — inactive: same as Massages
  - Each pill: font-size 12px, letterspaced 0.05em, padding 8px 22px, border-radius 100px
  - These will become clickable anchor links when the other sections are added. For now only "Facials" is active.

---

### 2. FACIALS SECTION

Section label at top-left: "FACIALS" in 11px, letterspaced 0.2em, uppercase, muted rose #C4929B, with a thin 1px line extending to the right (like a ruled line after the label).

Below, each facial treatment gets a **full editorial treatment card**. The three cards should **alternate layout direction** to create visual rhythm:

- **Card 1 (Glow n Go):** Image on LEFT, text on RIGHT
- **Card 2 (Holistic Facial):** Image on RIGHT, text on LEFT
- **Card 3 (Super Glow):** Image on LEFT, text on RIGHT

Each card is separated by 60–80px of vertical space. No visible card borders or containers — the cards breathe directly on the cream background, separated by whitespace alone. The alternating image position creates a natural zigzag reading flow.

---

### TREATMENT CARD TEMPLATE

**IMAGE SIDE (45–50% width):**
- Large treatment photo, aspect ratio 4:3 or 3:4 (flexible depending on the photo)
- Border-radius: 16px
- The image should feel warm, inviting, professional — close-up skincare/spa moments
- Subtle warm shadow: 0 16px 40px rgba(196,146,155,0.1)
- Use placeholder images for now — Sophie will supply her own treatment photography. Use warm, spa-toned stock imagery as placeholders if available in the project assets.

**TEXT SIDE (50–55% width):**

Layout the following elements top-to-bottom with clear spacing:

1. **Treatment name** — serif, 28–32px, deep charcoal #2C2C2C
2. **Duration & Price row** — directly below the name, 6px gap:
   - Duration: sans-serif, 13px, charcoal at 30% opacity (e.g. "60 minutes")
   - A small dot separator: "·" in charcoal at 20% opacity
   - Price: sans-serif, 18px, font-weight 500, muted rose #C4929B (e.g. "$179")
3. **Description** — sans-serif, 14–15px, charcoal at 55% opacity, line-height 1.75, max-width 440px. 2–4 sentences in Sophie's warm, personal voice. (16px gap below price row)
4. **"Includes" label** — 10px, letterspaced 0.15em, uppercase, charcoal at 30% opacity, margin-top 20px
5. **Inclusion tags** — horizontal row of small pills wrapping as needed:
   - Font-size 11px, padding 5px 14px, border-radius 100px
   - Border: 0.5px solid rgba(196,146,155,0.15)
   - Color: charcoal at 45% opacity
   - Gap: 6px between pills
6. **Book button** — margin-top 24px:
   - "Book this treatment" pill button
   - Background: muted rose #C4929B, color: white #FFFFFF, font-size 13px, letterspaced 0.03em
   - Padding: 12px 32px, border-radius 100px
   - Hover: slightly darker rose, subtle scale(1.02)

**MOBILE LAYOUT:** Stack vertically — full-width image on top (max-height 300px, object-fit cover, border-radius 16px), text below with full-width padding (24px).

---

### TREATMENT CARD 1 — Dermaplane Glow n Go

**Layout:** Image LEFT, text RIGHT

**Name:** Dermaplane Glow n Go
**Duration:** 60 minutes
**Price:** $179
**Description:** Relax at home and let us transform your skin into a dewy, glowing complexion. Your experienced therapist will skilfully remove downy hair and dead skin cells with professional dermaplanning, then infuse our botanical ingredients into your skin to reveal the smoothest canvas for perfect makeup application and a camera-ready glow.
**Includes:** Double cleanse · Exfoliation · Tone · Dermaplanning · Hydrating mask · Hot towel therapy · Serum · Eye cream · Moisturise · SPF
**Note below includes (optional, subtle):** "Skincare samples & homecare advice available" in 11px, charcoal at 30% opacity, italic

---

### TREATMENT CARD 2 — Holistic Facial & Foot Ritual

**Layout:** Image RIGHT, text LEFT

**Name:** Holistic Facial & Foot Ritual
**Duration:** 75 minutes
**Price:** $189
**Description:** Enjoy a fully mobile, indulgent facial experience in the comfort of your own home. This holistic treatment nourishes your skin with botanical ingredients while submerging your feet in an infusion of herbs, flower petals, aromatherapy and salts for their relaxing therapeutic benefits. Boosts circulation, calms sensitivity, soothes inflammation, and supports lymphatic drainage for a natural, healthy glow. A head-to-toe treat for the soul.
**Includes:** Botanical facial · Herbal & floral foot soak · Plant-based skin-healing botanicals · Lymphatic drainage · Barrier repair · Magnesium absorption therapy
**Note below includes:** "Using plant-based, skin-healing botanicals to improve skin barrier function" in 11px, charcoal at 30% opacity, italic

---

### TREATMENT CARD 3 — Dermaplane Super Glow

**Layout:** Image LEFT, text RIGHT

**Name:** Dermaplane Super Glow
**Duration:** 90 minutes
**Price:** $229
**Description:** Enjoy true transformation and a super glowing, luminous complexion. Everything in the Glow n Go plus indulgent facial reflexology massage, a double mask system — first a soothing hydrating mask, then a decadent rose jelly mask to enhance absorption. Expert hands dissolve tension with facial reflexology to release stagnant lymph and puffiness, followed by neck, shoulder and scalp massage to truly melt your cares away. Leave feeling illuminated, smooth and dewy for a camera-ready super-glow.
**Includes:** Everything in Glow n Go · 2x hydrating & nourishing masks · Facial reflexology massage · Rose jelly mask · Neck & shoulder massage · Scalp massage · Hot towels
**Note below includes:** "Skincare samples & homecare advice available" in 11px, charcoal at 30% opacity, italic

---

### 3. BOTTOM CTA SECTION

After the last treatment card, add a closing section with generous top padding (80px).

Center-aligned:
- A thin 1px divider line in rgba(196,146,155,0.1), max-width 200px, centered, margin-bottom 40px
- Question: "Not sure which treatment is right for you?" in serif, 26–30px, deep charcoal #2C2C2C
- Subtitle (10px gap): "Book a free consultation and let Sophie guide you to the perfect experience." in sans-serif, 14px, charcoal at 45% opacity, max-width 400px, centered
- CTA (24px gap): "Book a Consultation" pill button, muted rose #C4929B background, white #FFFFFF text
- Below CTA (14px gap): "Or call (027) 251-6985" in 12px, charcoal at 30% opacity — make this a clickable tel: link
- Bottom padding: 100px

---

### 4. DERMAPLANNING REASSURANCE (small note)

After or near the dermaplanning treatments (Glow n Go and Super Glow), include a small reassurance note. This can appear as a subtle aside or footnote-style element near the bottom of the facials section, before the bottom CTA:

- Text: "Dermaplanning does not cause excess hair growth. Relax & glow in confidence."
- Style: 12px, italic, charcoal at 35% opacity, center-aligned
- This should feel like a gentle footnote, not a prominent callout

---

## CRITICAL DESIGN RULES

1. **No card borders or containers around treatment cards.** The treatments float directly on the cream background. Whitespace and the alternating layout create the visual structure. The image and text are the card.
2. **Alternating layout is essential.** Card 1: image left. Card 2: image right. Card 3: image left. This zigzag creates a natural reading flow and prevents the page from feeling like a list.
3. **Every price must be immediately visible** — no clicking, no hovering, no expanding. Price is part of the treatment card, always shown.
4. **Every treatment has its own "Book this treatment" button.** These should link to Sophie's booking system (placeholder links for now).
5. **The page must be expandable.** When Massages and Exfoliation are added later, they will follow the same card pattern below the Facials section. Build the layout so adding a new section with a label + alternating cards is straightforward.
6. **Photos are placeholders for now.** Use warm, spa-toned imagery that fits the aesthetic. Sophie will replace these with her own photography. Make sure the image containers are clearly sized so she knows what dimensions to prepare.
7. **Stay in Sophie Spa's color palette throughout.** Cream #FDF8F4, blush pink #F5E6DC, deep charcoal #2C2C2C, muted rose #C4929B, antique gold #B8956A, white #FFFFFF. No other colors.
8. **Typography hierarchy matters.** Treatment names should feel like magazine headlines (serif, generous size). Prices should be clearly visible but not scream — the rose color #C4929B distinguishes them. Body text should be easy to read with generous line-height.
9. **Mobile must work beautifully.** On mobile, the alternating layout stacks: image always on top, text below. Full-width images, comfortable text padding. The page will be viewed on phones more than desktops.
10. **Do not include the "Nature Meets Science" / Rosactive product section on this page.** That lives elsewhere. This page is purely services.