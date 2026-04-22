# SOPHIE SPA — FULL TREATMENTS PAGE
## Figma Make Meta-Prompt

Design the complete Treatments page for Sophie Spa. This page showcases all three treatment categories Sophie offers. The page structure flows top to bottom as one continuous scroll experience. Match Sophie Spa's existing branding exactly.

BRANDING:
- Background: warm cream #FDF8F4
- Text: charcoal #2C2C2C
- Accent: muted rose #C4929B
- Headlines: serif font (Cormorant Garamond or site-matching serif)
- Body: clean sans-serif (Josefin Sans Light or site-matching sans)
- Cards/blocks: white or very light cream with subtle shadows
- All CTAs: pill-shaped, muted rose #C4929B background, white text, rose glow shadow

---

## SECTION 1: PAGE HERO

A compact page header — NOT a full-viewport hero. This is a content page, not the homepage.

- Background: warm cream #FDF8F4
- Padding: 100px top, 50px bottom
- Center-aligned content
- Section label: "OUR TREATMENTS" in 11px, letterspaced 0.3em, uppercase, muted rose #C4929B
- Headline: "Treatments Tailored to You" in serif, 40-48px, charcoal
- Subtitle: "Whether you're looking for a quick refresh or a luxurious escape, every treatment is delivered to your door with 19 years of expertise." in sans-serif, 15px, charcoal at 55% opacity, max-width 550px, centered
- Below subtitle (30px gap): three anchor links in a horizontal row so visitors can jump to any section:
  - "Massages" · "Facials" · "Exfoliation"
  - Each styled as a small pill: border 1px solid rgba(196,146,155,0.3), padding 8px 20px, border-radius 100px, font-size 12px, letterspaced, uppercase, charcoal
  - On hover: background fills with rgba(196,146,155,0.1)
  - These link to the corresponding section IDs below (#massages, #facials, #exfoliation)

---

## SECTION 2: MASSAGES (id="massages")

Full-width section. Two-column layout: text LEFT, image RIGHT.

BACKGROUND: warm cream #FDF8F4 (same as page)
PADDING: 80px top, 80px bottom
DIVIDER: a thin 1px line in rgba(196,146,155,0.12) at the very top of this section

LEFT COLUMN (50%):

- Section label: "01" in 11px, muted text rgba(44,44,44,0.25), letterspaced
- Headline: "Massages" in serif, 42-48px, charcoal
- Subtitle: "Tension Dissolved, Balance Restored" in 13px, letterspaced 0.15em, uppercase, muted rose #C4929B
- Description (16px gap): "Delivered with 19 years of intuitive expertise, our signature massage treatments melt stress from tired muscles, restore balance, and leave your body feeling completely renewed — in the comfort of your own home." in 14-15px, charcoal at 60% opacity, line-height 1.7, max-width 450px
- Treatment menu (24px gap below description):
  - Label: "MENU" in 10px, letterspaced, uppercase, charcoal at 25% opacity, margin-bottom 12px
  - Each treatment row: name (14px, medium weight, charcoal) + duration (12px, charcoal 30% opacity, after the name) .... dotted leader .... price (14px, medium weight, muted rose)
  - Treatments (placeholder — Sophie will send final menu):
    - Signature Relaxation · 60 min ........... $75
    - Deep Tissue Recovery · 45 min ........... $80
    - Hot Stone Ceremony · 50 min ........... $60
  - Thin bottom border on each row: rgba(44,44,44,0.06)
- CTA (24px below menu): "Book a Massage" pill button, muted rose, white text

RIGHT COLUMN (50%):

- Large image placeholder, aspect ratio 3:4, max-width 420px, rounded corners 16px
- Subtle warm shadow: 0 20px 50px rgba(196,146,155,0.15)
- Decorative corner brackets: top-left and bottom-right, 1px solid #C4929B at 30% opacity
- Image: spa massage treatment photo (Sophie will supply or use generated image)

MOBILE: Stack — image on top, text below. Full-width image, max-height 350px.

---

## SECTION 3: FACIALS (id="facials")

Full-width section. Two-column layout: image LEFT, text RIGHT (alternating from Massages).

BACKGROUND: very slightly different warmth — #FBF5EF or rgba(196,146,155,0.03) over cream — just enough to visually separate from Massages above
PADDING: 80px top, 40px bottom (shorter bottom padding because the Rosactive block follows)
DIVIDER: thin 1px line in rgba(196,146,155,0.12) at top

LEFT COLUMN (50%):

- Large image placeholder, same styling as Massages image but mirrored position
- Aspect ratio 3:4, max-width 420px, rounded corners, warm shadow, decorative corners

RIGHT COLUMN (50%):

- Section label: "02"
- Headline: "Facials" in serif, 42-48px, charcoal
- Subtitle: "Reveal Your Natural Radiance" in muted rose, letterspaced uppercase
- Description: "Tailored to your unique skin needs, our professional facials cleanse, nourish, and revitalise — revealing your skin's natural radiance with every treatment. We exclusively use Rosactive Professional Phytoceutical skincare from Italy for all facial treatments." in 14-15px, charcoal 60% opacity
- Treatment menu (same styling as Massages):
  - Label: "FACIAL MENU" in 10px
  - Placeholder treatments (Sophie is sending her final menu — use these for now):
    - Hydration Facial · 60 min ........... $XX
    - Anti-Aging Facial · 75 min ........... $XX
    - Repair & Restore Facial · 60 min ........... $XX
  - Mark prices as "Price TBC" or "$XX" since Sophie hasn't sent them yet
- Below the menu (16px gap): a small inline note in 12px italic serif, charcoal at 40% opacity: "All facials use Rosactive Phytoceutical products — see below."
- CTA: "Book a Facial" pill button

MOBILE: Stack — image on top, text below.

---

## SECTION 3B: ROSACTIVE FEATURE BLOCK (inside Facials, NOT a separate section)

This block sits DIRECTLY BELOW the Facials section with NO section break — it is visually part of the Facials area. It answers the question "what products do you use?"

BACKGROUND: a subtle shift — soft white #FEFCFA or very light blush rgba(196,146,155,0.04). A thin 1px top border in rgba(196,146,155,0.1) to mark the start of the block. NO thick divider — this is still Facials territory.
PADDING: 60px top, 60px bottom

TWO-COLUMN LAYOUT:

LEFT COLUMN (50%):

- Small "POWERED BY" label: 10px, letterspaced, uppercase, charcoal at 25% opacity
- Rosactive logo placeholder: roughly 180-200px wide. Sophie will supply. Leave a clearly labeled placeholder.
- Headline (20px below logo): "Nature Meets Science" in serif, 28-32px, charcoal
- Thin decorative line: 30px wide, 1.5px tall, muted rose, 16px margin top and bottom
- Body paragraph, 14px, charcoal at 60% opacity, line-height 1.7:

"At Sophie Spa, we exclusively use Rosactive Professional Phytoceutical skincare — a pioneering Italian line crafted near Milan since 1974. Rosactive combines the best of nature and biotechnology: plant-derived active ingredients backed by pharmaceutical-grade research, delivering real results with minimal irritation. Every product is free from mineral oils, parabens, SLS, and harmful substances. Never tested on animals. Zero impact on the planet."

- Second paragraph (12px gap):

"Together, we'll work to restore and strengthen your skin's health — and when you're ready, advance into targeted treatments for pigmentation, aging, texture, and tone. Your skin's health is my passion and my focus."

- Three trust badges (20px gap), horizontal row:
  - "100% Made in Italy" · "Phytoceutical Formula" · "Eco & Cruelty Free"
  - Pill shape: background rgba(196,146,155,0.1), text #C4929B, 11px, letterspaced uppercase, padding 6px 14px, border-radius 100px
- CTA (24px gap): "Book a Skin Consultation" pill button, muted rose

RIGHT COLUMN (50%):

- Product image arrangement: 2-3 Rosactive product images in a staggered editorial layout
- Sophie will upload her actual product photos from the Rosactive materials
- Leave clear labeled placeholders: "Rosactive Product Image 1", "Rosactive Product Image 2", etc.
- Images have 12px rounded corners and subtle warm shadows
- Slight stagger/overlap between images for editorial feel — not a flat grid

BELOW BOTH COLUMNS (optional):

- Thin ingredient strip, center-aligned, max-width 650px:
  - "Hyaluronic Acid · Vegetal Stem Cells · Vitamin C · Botanical Extracts · Peptide Complexes"
  - 11px, letterspaced, uppercase, charcoal at 20% opacity
  - Separated by middots
  - This strip subtly signals science to ingredient-conscious clients

MOBILE: Stack — logo + headline + text + badges + CTA first, then product images below (single centered image, max-width 280px). Ingredient strip wraps to 2 lines.

---

## SECTION 4: EXFOLIATION (id="exfoliation")

Full-width section. Two-column layout: text LEFT, image RIGHT (same as Massages — the alternating pattern resumes).

BACKGROUND: back to warm cream #FDF8F4
PADDING: 80px top, 80px bottom
DIVIDER: thin 1px line in rgba(196,146,155,0.12) at top — this clearly separates Exfoliation from the Facials/Rosactive area above

LEFT COLUMN (50%):

- Section label: "03"
- Headline: "Exfoliation" in serif, 42-48px, charcoal
- Subtitle: "Smooth, Refresh, Renew" in muted rose, letterspaced uppercase
- Description: "Indulge in a luxurious full-body scrub using premium salts and oils, expertly applied to smooth, soften, and deeply refresh your skin from head to toe. Every product is eco-friendly and honours the planet." in 14-15px, charcoal 60% opacity
- Treatment menu:
  - Botanical Body Scrub · 40 min ........... $70
  - Salt & Oil Revival · 55 min ........... $90
  - Gentle Glow Polish · 60 min ........... $85
- CTA: "Book an Exfoliation" pill button

RIGHT COLUMN (50%):

- Large image placeholder, same styling as previous sections
- Exfoliation treatment photo

MOBILE: Stack — image on top, text below.

---

## SECTION 5: BOTTOM CTA BAND

A closing call-to-action band to catch anyone who scrolled through everything.

BACKGROUND: soft blush rgba(196,146,155,0.06) or #FAF0EC
PADDING: 70px top, 70px bottom
Center-aligned:

- Headline: "Not Sure Which Treatment Is Right for You?" in serif, 28-32px, charcoal
- Subtitle (12px gap): "Book a free consultation and let Sophie guide you to the perfect experience." in 14px, charcoal at 50% opacity
- CTA (24px gap): "Book a Consultation" pill button, muted rose, white text, glow shadow
- Below CTA (16px gap): "Or call (027) 251-6985" in 12px, charcoal at 35% opacity — clickable tel: link

---

## PAGE FLOW SUMMARY

1. Page Hero — title, subtitle, anchor links
2. Massages — text left, image right, treatment menu
3. Facials — image left, text right, treatment menu
4. Rosactive block — product story, trust badges (INSIDE facials area)
5. Exfoliation — text left, image right, treatment menu
6. Bottom CTA — consultation prompt

The alternating left/right pattern (Massages right, Facials left, Exfoliation right) creates a natural zigzag visual flow. The Rosactive block breaks this pattern intentionally — it's a two-column informational block, not a treatment listing, which signals to the visitor that this is supplementary context about the facials above, not a fourth treatment category.

---

## DO NOT:
- Create a separate page for Rosactive — it lives WITHIN the Facials area on this page
- Use Rosactive's brand colors (red, green, blue) — keep everything in Sophie Spa's palette
- Show all 7 Rosactive product lines — Sophie currently offers 3 facials, the section should reflect what she offers today
- Add a navigation menu item for Rosactive — it's discovered by scrolling through Treatments
- Make the Rosactive block taller than the Facials section above it — it should feel like a supporting detail, not the main attraction
- Change the site navigation — the nav link stays as "Treatments"
- Add pricing to facial treatments if Sophie hasn't confirmed them yet — use "Price TBC" placeholders