# Figma Make Prompt — Rosactive Product Spotlight Section

## CONTEXT

I am rebuilding the "Nature Meets Science" section on my Treatments page. This section showcases the Rosactive Professional skincare lines I use exclusively. The design concept is a **Featured Spotlight** — one product is shown large with a full description, and a row of small thumbnails below lets visitors click through the other products.

We are starting with **two products only**: the BioFiller Super 8 treatment and the BioFiller Super 8 Perfecting Serum. More will be added later using the same pattern.

---

## SITE BRANDING (match exactly)

- **Background:** warm cream #FDF8F4
- **Primary text:** charcoal #2C2C2C
- **Accent:** muted rose #C4929B
- **Secondary accent:** antique gold #B8956A
- **Headings:** elegant serif font (Playfair Display / Cormorant Garamond or whatever is currently used on the site), magazine-editorial quality
- **Body text:** clean sans-serif (Inter / Satoshi or whatever is currently used on the site), airy and effortless
- **Buttons:** pill-shaped with muted rose background, white text
- **Borders:** 0.5px solid rgba(196,146,155,0.12) — barely there
- **Corners:** 16px border-radius on cards and containers
- **Shadows:** subtle warm shadows only — 0 20px 50px rgba(196,146,155,0.12)
- **Overall feel:** serene, luxurious, organic, warm. Japanese minimalism meets Aesop meets a high-end day spa. White space is a design element — use it generously.

---

## SECTION STRUCTURE (4 zones, top to bottom)

### ZONE 1 — Section Header (static, never changes)

Center-aligned on warm cream background.

- Label: "EXCLUSIVELY AT SOPHIE SPA" in 11px, letterspaced 0.3em, uppercase, muted rose #C4929B
- Headline: "Nature Meets Science" in serif, 40–48px, charcoal #2C2C2C
- Subtitle: "We exclusively use Rosactive Professional Phytoceutical skincare — a pioneering Italian line crafted near Milan since 1974 that combines the best of nature and biotechnology." in sans-serif, 15px, charcoal at 55% opacity, max-width 550px, centered

**NO trust badges, NO icons, NO emojis in this zone. Just text. Let it breathe.**

---

### ZONE 2 — Product Spotlight (changes when a thumbnail is clicked)

Two-column layout inside a container with warm cream background, 16px border-radius, 0.5px border in rgba(196,146,155,0.12), generous padding (40px).

**LEFT COLUMN (40%)** — Product Image:
- The product image should be sourced/extracted from the existing Rosactive marketing posters and hero imagery already on the page. Each Rosactive poster (BioHyal, BioFiller Super 8, BioRepairExtra, DermaFill, BioRadiance, Biostem, Hydra Comfort Sun) contains product photography — use the product shots from those posters as the images in this spotlight section.
- Display the product image centered vertically in this column
- Product image should float on the cream background — no additional container or frame needed
- Max height ~380px, let the product's natural proportions dictate the width
- The image should feel like a luxury product still-life — clean, elegant, no clutter

**RIGHT COLUMN (60%)** — Product Details:
- Product name in serif, 22–26px, charcoal — e.g. "BioFiller Super 8"
- Subtitle in 12px, letterspaced 0.15em, uppercase, muted rose — e.g. "8 HYALURONIC ACIDS · FILLER EFFECT"
- Description in 14px, sans-serif, charcoal at 60% opacity, line-height 1.7, max-width 420px. 2–3 sentences, warm and client-facing, not clinical.
- Benefit tags: horizontal row of small pills (font-size 11px, padding 5px 14px, border-radius 100px, border 0.5px solid rgba(196,146,155,0.25), color charcoal at 55% opacity). 3–5 tags per product.
- "Best for" line: 12px, charcoal at 55% opacity. The words "Best for:" in muted rose #C4929B with font-weight 500. Followed by skin types/concerns.

**Mobile:** Stack — image on top (max-height 280px, centered), text below. Full-width padding.

---

### ZONE 3 — Thumbnail Selector (click to change spotlight)

A horizontal row of small thumbnails, one per product. For now, only 2 thumbnails (BioFiller Super 8 treatment + BioFiller Super 8 Perfecting Serum). The structure should be easily expandable to 7–8 thumbnails later.

Each thumbnail:
- Small container: ~80–90px wide, background rgba(196,146,155,0.04), border-radius 10px, padding 12px 8px
- Contains a small version of the product image (max-height ~55px)
- Product name below in 10px, charcoal at 55% opacity
- **Inactive state:** 0.5px border rgba(196,146,155,0.1), opacity 0.45
- **Active state:** 1.5px border #C4929B, full opacity, product name in muted rose with font-weight 500

Clicking a thumbnail swaps the spotlight (Zone 2) content with a smooth crossfade transition.

---

### ZONE 4 — Closing CTA (static)

Center-aligned.

- Question: "Not sure which treatment is right for your skin?" in sans-serif, 15px, charcoal
- Button: "Book a Skin Consultation" pill button, muted rose #C4929B background, white text, 13px, letterspaced 0.05em, border-radius 100px, padding 12px 32px
- Sub-text: "Sophie will assess your skin and recommend the perfect treatment" in 11px, charcoal at 35% opacity

---

## PRODUCT CONTENT — BioFiller Super 8 (Treatment)

**Name:** BioFiller Super 8
**Subtitle:** 8 Hyaluronic Acids · Filler Effect
**Description:** Eight different sizes of hyaluronic acid work together to target every layer of the skin — from the surface right down to the deepest dermis. This non-invasive filler treatment diminishes fine lines, plumps deep wrinkles, restores volume, and leaves the skin uplifted and intensely hydrated.
**Tags:** Fine lines · Deep wrinkles · Volume · Firmness · Elasticity
**Best for:** Mature skin, loss of elasticity, visible aging, anyone wanting a filler effect without needles
**Image:** Use the product kit image from the BioFiller Super 8 poster — the box with vials, syringes, and sachets

---

## PRODUCT CONTENT — BioFiller Super 8 Perfecting Serum

**Name:** BioFiller Super 8 — Perfecting Serum
**Subtitle:** Advanced Phytoceutical Complex
**Description:** A highly concentrated daily serum with eight types of hyaluronic acid, a unique peptide, and calcium keto gluconate. It refines skin tone, replenishes the moisture barrier, and provides protection against environmental stressors — extending the results of your in-clinic treatment at home.
**Tags:** Hydrate · Nourish · Glow · Environmental protection
**Best for:** At-home maintenance between treatments, daily hydration and protection
**Image:** Use the serum bottle image from the BioFiller Super 8 Perfecting Serum poster — the tall white bottle with the "BioFiller Super 8" label

---

## CRITICAL RULES

1. **Extract product images from existing Rosactive posters/materials** already uploaded to this project. Do not use placeholder images or stock photos. Each Rosactive poster contains clear product photography — isolate those product shots and use them on the cream background.
2. **Stay in Sophie Spa's color palette.** Do NOT use Rosactive's brand colors (their red, blue, green, teal from the posters). Everything must feel like Sophie Spa — cream, charcoal, muted rose, antique gold.
3. **This is a trust-building showcase, not an e-commerce product listing.** No prices, no "add to cart", no product dimensions. The tone is "look at the caliber of what touches your skin" — curated luxury, not a shop.
4. **Build the thumbnail selector to be expandable.** Right now it has 2 items. It will grow to 7–8. The layout should handle that gracefully — horizontal scroll on mobile if needed, centered row on desktop.
5. **Do not change any other section on the page.** This replaces the current "Nature Meets Science" block only.
6. **Smooth transitions.** When clicking between thumbnails, the spotlight content (image + text) should crossfade, not jump. A 300–400ms ease transition.
7. **Generous white space.** The section should breathe. Don't pack elements tightly. 80–100px padding top and bottom on the overall section. 40px inside the spotlight card. 24px between the spotlight card and the thumbnails.