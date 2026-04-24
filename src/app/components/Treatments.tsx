import { useEffect, useState } from "react";
import imgBioFiller from "figma:asset/bc3c865f66ea70f46c9c2d08dce869aae8947786.png";
import imgPerfectingCream from "figma:asset/7b03f03c161969896329088eae9a59b3da351dbe.png";
import imgBiohyal from "figma:asset/a552c25b1df0e1c1dde8864b124af7a30fe21c0f.png";
import imgBioRepairExtra from "figma:asset/c0c3fc99f0ccdcdfde20cf30dcf29654cd297a7d.png";
import imgBiostem from "figma:asset/3e00177f9e481d4ac2a2af4faab8f060ba55d576.png";
import imgDermafill from "figma:asset/a18dcfc9b1b8136088f90565756ad142eac94fd7.png";
import imgHydraSun from "figma:asset/ebdada3c0f0c590b51665195c9526443f0c8a9bc.png";
import imgBioFillerSuper8Kit from "figma:asset/25b4a2f7430a82910545a5c7ec159fa194bcf5ad.png";
import imgBioRadiance from "figma:asset/74d4894e627dd5f876d01d265d612a3884976efb.png";

const IMG_MASSAGE =
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774175780/Gemini_Generated_Image_3sg8t13sg8t13sg8_hrh7ks.png";
const IMG_FACIAL =
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774176768/facial_photo_no_watermark_dzshxv.png";
const IMG_EXFOLIATION =
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774177218/u5442978949_Exfoliation_--v_7_a8f1b527-1dc7-4d7f-808c-36227825b856_0_bkxwgc.png";
const IMG_PRODUCTS =
  "https://images.unsplash.com/photo-1760614034530-a0d34463e03d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHByb2R1Y3RzJTIwYm90dGxlcyUyMHNlcnVtfGVufDF8fHx8MTc3NDE3NDY3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const ROSE = "#C4929B";
const CHARCOAL = "#2C2C2C";

/* ─── Reusable pill button ─── */
function PillButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`px-8 py-3 rounded-full text-white cursor-pointer transition-all hover:brightness-110 ${className}`}
      style={{
        background: ROSE,
        boxShadow: `0 8px 24px rgba(196,146,155,0.35)`,
        fontSize: "13px",
        letterSpacing: "0.1em",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {children}
    </button>
  );
}

/* ─── Menu row with dotted leader ─── */
function MenuRow({ name, duration, price }: { name: string; duration: string; price: string }) {
  return (
    <div
      className="flex items-baseline gap-2 py-3"
      style={{ borderBottom: "1px solid rgba(44,44,44,0.06)" }}
    >
      <span className="shrink-0" style={{ fontSize: "14px", fontWeight: 500, color: CHARCOAL, fontFamily: "'Inter', sans-serif" }}>
        {name}
      </span>
      <span className="shrink-0" style={{ fontSize: "12px", color: `rgba(44,44,44,0.3)`, fontFamily: "'Inter', sans-serif" }}>
        · {duration}
      </span>
      <span className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(44,44,44,0.15)", marginBottom: "4px" }} />
      <span className="shrink-0" style={{ fontSize: "14px", fontWeight: 500, color: ROSE, fontFamily: "'Inter', sans-serif" }}>
        {price}
      </span>
    </div>
  );
}

/* ─── Treatment image with decorative corners ─── */
function TreatmentImage({ src, alt, cornersPosition = "default" }: { src: string; alt: string; cornersPosition?: "default" | "mirrored" }) {
  const isDefault = cornersPosition === "default";
  return (
    <div className="relative max-w-[420px] w-full mx-auto">
      {/* Top corner */}
      <div
        className="absolute w-10 h-10 pointer-events-none z-10"
        style={{
          [isDefault ? "left" : "right"]: "-8px",
          top: "-8px",
          [isDefault ? "borderLeft" : "borderRight"]: "1px solid rgba(196,146,155,0.3)",
          borderTop: "1px solid rgba(196,146,155,0.3)",
        }}
      />
      {/* Bottom corner */}
      <div
        className="absolute w-10 h-10 pointer-events-none z-10"
        style={{
          [isDefault ? "right" : "left"]: "-8px",
          bottom: "-8px",
          [isDefault ? "borderRight" : "borderLeft"]: "1px solid rgba(196,146,155,0.3)",
          borderBottom: "1px solid rgba(196,146,155,0.3)",
        }}
      />
      <img
        src={src}
        alt={alt}
        className="w-full object-cover rounded-2xl"
        style={{
          aspectRatio: "3/4",
          boxShadow: "0 20px 50px rgba(196,146,155,0.15)",
        }}
      />
    </div>
  );
}

/* ─── Product carousel ─── */
function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    { img: imgBioFiller, name: "BioFiller Super 8", subtitle: "Perfecting Serum · 50ml" },
    { img: imgPerfectingCream, name: "BioFiller Super 8", subtitle: "Perfecting Cream · 50ml" },
    { img: imgBiohyal, name: "Biohyal®", subtitle: "Advanced phytoceutical complex" },
    { img: imgBioRepairExtra, name: "BioRepairExtra®", subtitle: "Advanced phytoceutical complex" },
    { img: imgBiostem, name: "Biostem®", subtitle: "Advanced phytoceutical complex" },
    { img: imgDermafill, name: "DermaFill®", subtitle: "Advanced phytoceutical complex" },
    { img: imgHydraSun, name: "Hydra Comfort SUN A.G.E.", subtitle: "Face & Body Protective Cream · SPF 15–30" },
    { img: imgBioFillerSuper8Kit, name: "BioFiller Super 8 Kit", subtitle: "8 Hyaluronic Acids · Filler Effect Face Program" },
    { img: imgBioRadiance, name: "BioRadiance®", subtitle: "Diamond Powder · Face Treatment for Skin Brightness" },
  ];

  const handleNext = () => setCurrentIndex((i) => (i + 1) % products.length);
  const handlePrev = () => setCurrentIndex((i) => (i - 1 + products.length) % products.length);

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ padding: "24px 28px" }}>
        {/* Prev / Next arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 rounded-full cursor-pointer flex items-center justify-center"
          style={{ width: 28, height: 28, background: "rgba(255,255,255,0.7)", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
          aria-label="Previous product"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={CHARCOAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 rounded-full cursor-pointer flex items-center justify-center"
          style={{ width: 28, height: 28, background: "rgba(255,255,255,0.7)", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
          aria-label="Next product"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={CHARCOAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></svg>
        </button>

        <img
          src={products[currentIndex].img}
          alt={products[currentIndex].name}
          style={{
            maxHeight: "200px",
            width: "auto",
            objectFit: "contain",
            transition: "opacity 0.3s ease",
          }}
        />
      </div>
      <div className="text-center mt-1 mb-2">
        <p style={{ fontSize: "12px", letterSpacing: "0.1em", color: "rgba(44,44,44,0.5)", fontFamily: "'Inter', sans-serif" }}>
          {products[currentIndex].name}
        </p>
        <p style={{ fontSize: "11px", color: "rgba(44,44,44,0.3)", fontFamily: "'Inter', sans-serif" }}>
          {products[currentIndex].subtitle}
        </p>
      </div>
      {/* Dots */}
      <div className="flex gap-2 mb-3">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="rounded-full cursor-pointer transition-all"
            style={{
              width: i === currentIndex ? 16 : 6,
              height: 6,
              background: i === currentIndex ? ROSE : "rgba(196,146,155,0.25)",
              border: "none",
            }}
            aria-label={`Go to product ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── ROSACTIVE PRODUCT SPOTLIGHT ─── */
function ProductSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const products = [
    {
      img: imgBioFillerSuper8Kit,
      name: "BioFiller Super 8",
      subtitle: "8 HYALURONIC ACIDS · FILLER EFFECT",
      description:
        "Eight different sizes of hyaluronic acid work together to target every layer of the skin — from the surface right down to the deepest dermis. This non-invasive filler treatment diminishes fine lines, plumps deep wrinkles, restores volume, and leaves the skin uplifted and intensely hydrated.",
      tags: ["Fine lines", "Deep wrinkles", "Volume", "Firmness", "Elasticity"],
      bestFor:
        "Mature skin, loss of elasticity, visible aging, anyone wanting a filler effect without needles",
    },
    {
      img: imgBioFiller,
      name: "BioFiller Super 8 — Perfecting Serum",
      subtitle: "ADVANCED PHYTOCEUTICAL COMPLEX",
      description:
        "A highly concentrated daily serum with eight types of hyaluronic acid, a unique peptide, and calcium keto gluconate. It refines skin tone, replenishes the moisture barrier, and provides protection against environmental stressors — extending the results of your in-clinic treatment at home.",
      tags: ["Hydrate", "Nourish", "Glow", "Environmental protection"],
      bestFor:
        "At-home maintenance between treatments, daily hydration and protection",
    },
    {
      img: imgPerfectingCream,
      name: "BioFiller Super 8 — Perfecting Cream",
      subtitle: "ADVANCED PHYTOCEUTICAL COMPLEX",
      description:
        "A richly concentrated daily cream with eight types of hyaluronic acid, a unique peptide, and calcium keto gluconate. It refines skin tone, replenishes the moisture barrier, and enhances elasticity with a filling, plumping effect — while shielding against environmental stressors and pollutants.",
      tags: ["Hydrate", "Nourish", "Glow", "Elasticity", "Plumping"],
      bestFor:
        "At-home maintenance between treatments, daily moisture and environmental protection",
    },
    {
      img: imgBiohyal,
      name: "BioHyal",
      subtitle: "ADVANCED PHYTOCEUTICAL COMPLEX",
      description:
        "Organic and eco-certified, BioHyal uses three different-sized molecules of hyaluronic acid to reach every layer of the skin. It deeply hydrates, treats both static and dynamic wrinkles, and stimulates your skin's own cell regeneration for a visible plumping effect.",
      tags: ["Hydration", "Wrinkle treatment", "Cell regeneration", "Plumping"],
      bestFor:
        "Dehydrated skin, fine lines, dull or tired complexion",
    },
    {
      img: imgBioRepairExtra,
      name: "BioRepairExtra",
      subtitle: "ADVANCED PHYTOCEUTICAL COMPLEX",
      description:
        "An innovative repair treatment with an exclusive blend of ingredients including snail extract and organic astaxanthin. It repairs the skin barrier, reduces inflammation, and soothes sensitive and rosacea-prone skin. Also ideal before and after invasive treatments like IPL or skin needling.",
      tags: ["Barrier repair", "Inflammation", "Rosacea", "Scarring", "Pre/post treatment"],
      bestFor:
        "Sensitive skin, rosacea, post-procedure recovery, fresh scars or burns",
    },
    {
      img: imgDermafill,
      name: "DermaFill",
      subtitle: "LONG LASTING SKIN RESTORER",
      description:
        "A 3-in-1 super hydrating treatment that repairs, strengthens, and deeply moisturises. Formulated with olive oil-derived phytosqualane and rosa moschata oil, it restores the skin barrier and replenishes lost moisture — leaving skin resilient, calm, and beautifully hydrated.",
      tags: ["Barrier repair", "Deep hydration", "Strengthening", "Sensitive skin"],
      bestFor:
        "Dry or dehydrated skin, rosacea, compromised skin barrier, sensitive complexions",
    },
    {
      img: imgBioRadiance,
      name: "BioRadiance",
      subtitle: "ADVANCED PHYTOCEUTICAL COMPLEX",
      description:
        "A targeted brightening treatment using a powerful cocktail of lightening, biomimetic, and diamond peptide complexes. It works to reduce pigmentation and melanin production while improving overall skin brightness and hydration — revealing a more luminous, even complexion.",
      tags: ["Brightening", "Pigmentation", "Sun spots", "Luminosity"],
      bestFor:
        "Hyperpigmentation, sun spots, uneven skin tone, dull complexion",
    },
    {
      img: imgBiostem,
      name: "Biostem",
      subtitle: "ADVANCED PHYTOCEUTICAL COMPLEX",
      description:
        "The first non-invasive vegetal stem cell face treatment. Using rare Swiss apple stem cells alongside hibiscus and vitamin C, it slows physiological aging, protects and increases the skin's own stem cell reserves, and delivers visible lifting and firming results.",
      tags: ["Stem cells", "Anti-aging", "Lifting", "Rejuvenation"],
      bestFor:
        "Aging skin, loss of firmness, pigmentation concerns, anyone wanting deep rejuvenation",
    },
    {
      img: imgHydraSun,
      name: "Hydra Comfort Sun",
      subtitle: "PHYTOCEUTICAL SPF PROTECTION",
      description:
        "More than just sun protection — this UVA and UVB shield is enriched with ten types of hyaluronic acid for deep hydration, collagen strengthening, and anti-aging benefits. It protects while actively healing and nourishing the skin.",
      tags: ["SPF protection", "Hydration", "Collagen", "Anti-aging"],
      bestFor:
        "Daily sun protection, post-treatment care, anyone wanting SPF that also treats the skin",
    },
  ];

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    setFade(false);
    setTimeout(() => {
      setActiveIndex(index);
      setFade(true);
    }, 200);
  };

  const current = products[activeIndex];

  return (
    <section style={{ borderTop: "1px solid rgba(196,146,155,0.12)", padding: "90px 0 100px", background: "#FDF8F4" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* ZONE 1 — Header */}
        <div className="text-center mb-14">
          <p
            style={{ fontSize: "11px", letterSpacing: "0.3em", color: ROSE, fontFamily: "'Inter', sans-serif" }}
            className="uppercase mb-3"
          >
            EXCLUSIVELY AT SOPHIE SPA
          </p>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 48px)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: CHARCOAL }}>
            Nature Meets Science
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{ maxWidth: "550px", fontSize: "15px", color: "rgba(44,44,44,0.55)", lineHeight: 1.7, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            We exclusively use Rosactive Professional Phytoceutical skincare — a pioneering Italian
            line crafted near Milan since 1974 that combines the best of nature and biotechnology.
          </p>
        </div>

        {/* ZONE 2 — Spotlight Card */}
        <div
          style={{
            border: "0.5px solid rgba(196,146,155,0.12)",
            borderRadius: "16px",
            padding: "40px",
            background: "#FDF8F4",
            boxShadow: "0 20px 50px rgba(196,146,155,0.12)",
          }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 items-center"
            style={{ opacity: fade ? 1 : 0, transition: "opacity 350ms ease" }}
          >
            {/* Left — Image */}
            <div className="flex items-center justify-center">
              <img
                src={current.img}
                alt={current.name}
                style={{ maxHeight: "380px", width: "auto", objectFit: "contain" }}
              />
            </div>

            {/* Right — Details */}
            <div className="flex flex-col justify-center">
              <h3 style={{ fontSize: "clamp(22px, 2.5vw, 26px)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: CHARCOAL }}>
                {current.name}
              </h3>
              <p
                className="mt-2 uppercase"
                style={{ fontSize: "12px", letterSpacing: "0.15em", color: ROSE, fontFamily: "'Inter', sans-serif" }}
              >
                {current.subtitle}
              </p>
              <p
                className="mt-4"
                style={{ fontSize: "14px", color: "rgba(44,44,44,0.6)", lineHeight: 1.7, maxWidth: "420px", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                {current.description}
              </p>

              {/* Benefit tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      padding: "5px 14px",
                      borderRadius: "100px",
                      border: "0.5px solid rgba(196,146,155,0.25)",
                      color: "rgba(44,44,44,0.55)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Best for */}
              <p className="mt-5" style={{ fontSize: "12px", color: "rgba(44,44,44,0.55)", fontFamily: "'Inter', sans-serif" }}>
                <span style={{ color: ROSE, fontWeight: 500 }}>Best for: </span>
                {current.bestFor}
              </p>
            </div>
          </div>
        </div>

        {/* ZONE 3 — Thumbnails */}
        <div className="flex justify-center gap-4 mt-6 overflow-x-auto pb-2">
          {products.map((product, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className="flex flex-col items-center cursor-pointer shrink-0 transition-all"
              style={{
                width: "88px",
                padding: "12px 8px",
                borderRadius: "10px",
                background: "rgba(196,146,155,0.04)",
                border: i === activeIndex ? "1.5px solid #C4929B" : "0.5px solid rgba(196,146,155,0.1)",
                opacity: i === activeIndex ? 1 : 0.45,
              }}
            >
              <img
                src={product.img}
                alt={product.name}
                style={{ maxHeight: "55px", width: "auto", objectFit: "contain" }}
              />
              <span
                className="mt-2 text-center"
                style={{
                  fontSize: "10px",
                  color: i === activeIndex ? ROSE : "rgba(44,44,44,0.55)",
                  fontWeight: i === activeIndex ? 500 : 400,
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.3,
                }}
              >
                {product.name.length > 20 ? product.name.slice(0, 20) + "..." : product.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ PAGE ═══════════════════════ */
export function Treatments() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: "#FDF8F4", color: CHARCOAL }}>
      {/* ── SECTION 1: PAGE HERO ── */}
      <section className="text-center" style={{ paddingTop: "100px", paddingBottom: "50px" }}>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: ROSE,
            fontFamily: "'Inter', sans-serif",
          }}
          className="uppercase mb-4"
        >
          OUR TREATMENTS
        </p>
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 48px)",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            color: CHARCOAL,
          }}
          className="mb-4"
        >
          Rosactive Plant Based Skincare
        </h1>

        {/* Hero content with product image side by side */}
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_260px] gap-14 items-center mt-8 mb-2">
          <div>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(44,44,44,0.55)",
                lineHeight: 1.7,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
              }}
            >
              At Sophie Spa, we're excited to offer Rosactive, a professional non-invasive Phytoceutical botanical skincare line from Italy. Rosactive carefully combines nature and science to deliver real, positive results with minimal irritation. Rosactive treatments and homecare cater for all skin types and conditions, focusing on skin healing, intense hydration and optimal anti-aging results!
            </p>
            <p
              className="mt-4"
              style={{
                fontSize: "14px",
                color: "rgba(44,44,44,0.55)",
                lineHeight: 1.7,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
              }}
            >
              I can work with you to restore and strengthen your skin's health and barrier function. Once your skin is balanced and resilient, we can introduce more advanced treatments to target specific concerns such as pigmentation, aging, or texture—ensuring lasting, visible results. Your skin's health and results are my passion & focus!
            </p>
          </div>
          <div className="flex flex-col items-center" style={{ minWidth: "200px" }}>
            <div className="relative w-full">
              <div
                className="overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #FDF8F4 0%, rgba(245,230,220,0.3) 100%)",
                  borderRadius: "16px",
                  boxShadow: "0 16px 40px rgba(196,146,155,0.10)",
                }}
              >
                <ProductCarousel />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 flex-wrap mt-8">
          {["Massages", "Facials", "Add-Ons", "Exfoliation"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace('-', '')}`}
              className="transition-colors"
              style={{
                border: "1px solid rgba(196,146,155,0.3)",
                padding: "8px 20px",
                borderRadius: "100px",
                fontSize: "12px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: CHARCOAL,
                fontFamily: "'Inter', sans-serif",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(196,146,155,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* ── SECTION 2: MASSAGES ── */}
      <section id="massages" style={{ borderTop: "1px solid rgba(196,146,155,0.12)", padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p style={{ fontSize: "11px", color: "rgba(44,44,44,0.25)", letterSpacing: "0.2em", fontFamily: "'Inter', sans-serif" }}>01</p>
            <h2 className="mt-2" style={{ fontSize: "clamp(36px, 4vw, 48px)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>Massages</h2>
            <p className="mt-2 uppercase" style={{ fontSize: "13px", letterSpacing: "0.15em", color: ROSE, fontFamily: "'Inter', sans-serif" }}>
              Tension Dissolved, Balance Restored
            </p>
            <p className="mt-4" style={{ fontSize: "14px", color: "rgba(44,44,44,0.6)", lineHeight: 1.7, maxWidth: "450px", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Delivered with 19 years of intuitive expertise, our signature massage treatments melt
              stress from tired muscles, restore balance, and leave your body feeling completely
              renewed — in the comfort of your own home.
            </p>
            <div className="mt-6">
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "rgba(44,44,44,0.25)", fontFamily: "'Inter', sans-serif" }} className="uppercase mb-3">MENU</p>
              <MenuRow name="Relaxation Massage" duration="60 / 90 / 120 min" price="$170 / $220 / $280" />
              <MenuRow name="Swedish Remedial Massage" duration="60 / 90 / 120 min" price="$170 / $220 / $280" />
              <MenuRow name="Deep Tissue & Sports Massage" duration="60 / 90 / 120 min" price="$170 / $220 / $280" />
            </div>
            <div className="mt-6">
              <PillButton>Book a Massage</PillButton>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <TreatmentImage src={IMG_MASSAGE} alt="Spa massage treatment" />
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FACIALS ── */}
      <section id="facials" style={{ borderTop: "1px solid rgba(196,146,155,0.12)", padding: "80px 0 40px", background: "rgba(196,146,155,0.03)" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <TreatmentImage src={IMG_FACIAL} alt="Facial treatment" cornersPosition="mirrored" />
          </div>
          <div className="order-2">
            <p style={{ fontSize: "11px", color: "rgba(44,44,44,0.25)", letterSpacing: "0.2em", fontFamily: "'Inter', sans-serif" }}>02</p>
            <h2 className="mt-2" style={{ fontSize: "clamp(36px, 4vw, 48px)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>Facials</h2>
            <p className="mt-2 uppercase" style={{ fontSize: "13px", letterSpacing: "0.15em", color: ROSE, fontFamily: "'Inter', sans-serif" }}>
              Reveal Your Natural Radiance
            </p>
            <p className="mt-4" style={{ fontSize: "14px", color: "rgba(44,44,44,0.6)", lineHeight: 1.7, maxWidth: "450px", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Tailored to your unique skin needs, our professional facials cleanse, nourish, and
              revitalise — revealing your skin's natural radiance with every treatment. We
              exclusively use Rosactive Professional Phytoceutical skincare from Italy for all
              facial treatments.
            </p>
            <div className="mt-6">
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "rgba(44,44,44,0.25)", fontFamily: "'Inter', sans-serif" }} className="uppercase mb-3">FACIAL MENU</p>
              <MenuRow name="Dermaplane Glow n Go" duration="60 min" price="$179" />
              <MenuRow name="Holistic Reflexology Facial" duration="75 min" price="$159" />
            </div>
            <p className="mt-4" style={{ fontSize: "12px", fontStyle: "italic", color: "rgba(44,44,44,0.4)", fontFamily: "'Cormorant Garamond', serif" }}>
              All facials use Rosactive Phytoceutical products — see below.
            </p>
            <div className="mt-6">
              <PillButton>Book a Facial</PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3B: ADD-ON SPA SERVICES ── */}
      <section id="addons" style={{ borderTop: "1px solid rgba(196,146,155,0.12)", padding: "80px 0", background: "#FDF8F4" }}>
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: ROSE, fontFamily: "'Inter', sans-serif" }} className="uppercase mb-3">
              ENHANCE YOUR EXPERIENCE
            </p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: CHARCOAL }}>
              Add-On Spa Services
            </h2>
            <p className="mt-4 mx-auto" style={{ maxWidth: "500px", fontSize: "14px", color: "rgba(44,44,44,0.55)", lineHeight: 1.7, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Add a little extra bliss to any treatment. Each add-on is designed to complement your session and elevate your experience.
            </p>
          </div>

          {/* Add-on cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Eye Revival",
                duration: "20 mins",
                price: "$25",
                description: "Refresh tired, puffy eyes with a soothing lymphatic massage, eye mask, warm compress and hydrating eye cream.",
              },
              {
                title: "Heavenly Scalp Melt",
                duration: "15 mins",
                price: "$25",
                description: "A blissful scalp massage for heavenly relaxation. The perfect addition to any facial or massage.",
              },
              {
                title: "Facial Reflexology Massage",
                duration: "25 mins",
                price: "$45",
                description: "A soothing facial reflexology massage performed with a comforting, high-quality skin balm to melt tension, lift the skin, and promote a radiant glow. Completed with soothing hot towels.",
              },
              {
                title: "Heavenly Face, Neck, Shoulder & Scalp Melt",
                duration: "30 mins",
                price: "$65",
                description: "A deeply indulgent ritual designed to melt away tension from the face, neck, shoulders, and scalp. Combines a blissful scalp massage with facial reflexology using a luxurious skin-loving balm. Finished with warm towel therapy.",
              },
              {
                title: "Sole Revival Foot Ritual",
                duration: "",
                price: "$50",
                description: "Feet are submerged in a warm soothing infusion of botanicals, flower petals, Epsom salts, and aromatherapy oils, then gently scrubbed with sugar crystals to soften rough skin. Mineral-rich salts ease tension and stress — feet feel refreshed, relaxed and renewed.",
                note: "Does not include gel polish or a full pedicure service.",
              },
              {
                title: "Back Scrub & Hot Towel",
                duration: "15 mins",
                price: "$25",
                description: "Invigorating sugar crystals exfoliate those hard-to-reach areas on your back, finished with hot towels for a smooth, refreshed, divine feel.",
                note: "Add to any massage as a pre-treatment ritual.",
              },
            ].map((addon) => (
              <div
                key={addon.title}
                style={{
                  border: "0.5px solid rgba(196,146,155,0.18)",
                  borderRadius: "14px",
                  padding: "28px 24px",
                  background: "rgba(253,248,244,0.8)",
                  boxShadow: "0 4px 20px rgba(196,146,155,0.06)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Price badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 style={{ fontSize: "16px", fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: CHARCOAL, lineHeight: 1.3 }}>
                    {addon.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      color: ROSE,
                      fontFamily: "'Inter', sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {addon.price}
                  </span>
                </div>
                {addon.duration && (
                  <p style={{ fontSize: "11px", letterSpacing: "0.12em", color: "rgba(44,44,44,0.3)", fontFamily: "'Inter', sans-serif", marginBottom: "10px" }} className="uppercase">
                    {addon.duration}
                  </p>
                )}
                <p style={{ fontSize: "13px", color: "rgba(44,44,44,0.55)", lineHeight: 1.65, fontFamily: "'Inter', sans-serif", fontWeight: 300, flexGrow: 1 }}>
                  {addon.description}
                </p>
                {addon.note && (
                  <p className="mt-3" style={{ fontSize: "11px", fontStyle: "italic", color: "rgba(44,44,44,0.35)", fontFamily: "'Cormorant Garamond', serif" }}>
                    {addon.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="text-center mt-10" style={{ fontSize: "13px", color: "rgba(44,44,44,0.4)", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Add-ons can be combined with any facial or massage treatment. Mention your selections when booking.
          </p>
        </div>
      </section>

      {/* ── SECTION 4: EXFOLIATION ── */}
      <section id="exfoliation" style={{ borderTop: "1px solid rgba(196,146,155,0.12)", padding: "80px 0", background: "#FDF8F4" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p style={{ fontSize: "11px", color: "rgba(44,44,44,0.25)", letterSpacing: "0.2em", fontFamily: "'Inter', sans-serif" }}>03</p>
            <h2 className="mt-2" style={{ fontSize: "clamp(36px, 4vw, 48px)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>Exfoliation</h2>
            <p className="mt-2 uppercase" style={{ fontSize: "13px", letterSpacing: "0.15em", color: ROSE, fontFamily: "'Inter', sans-serif" }}>
              Smooth, Refresh, Renew
            </p>
            <p className="mt-4" style={{ fontSize: "14px", color: "rgba(44,44,44,0.6)", lineHeight: 1.7, maxWidth: "450px", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Indulge in a luxurious full-body scrub using premium salts and oils, expertly applied
              to smooth, soften, and deeply refresh your skin from head to toe. Every product is
              eco-friendly and honours the planet.
            </p>
            <div className="mt-6">
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "rgba(44,44,44,0.25)", fontFamily: "'Inter', sans-serif" }} className="uppercase mb-3">MENU</p>
              <MenuRow name="Botanical Body Scrub" duration="40 min" price="$70" />
              <MenuRow name="Salt & Oil Revival" duration="55 min" price="$90" />
              <MenuRow name="Gentle Glow Polish" duration="60 min" price="$85" />
            </div>
            <div className="mt-6">
              <PillButton>Book an Exfoliation</PillButton>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <TreatmentImage src={IMG_EXFOLIATION} alt="Exfoliation treatment" />
          </div>
        </div>
      </section>

      {/* ── ROSACTIVE PRODUCT SPOTLIGHT ── */}
      <ProductSpotlight />

      {/* ── SECTION 5: BOTTOM CTA BAND ── */}
      <section className="text-center" style={{ background: "#FAF0EC", padding: "70px 24px" }}>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: CHARCOAL }}>
          Not Sure Which Treatment Is Right for You?
        </h2>
        <p className="mt-3" style={{ fontSize: "14px", color: "rgba(44,44,44,0.5)", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          Book a free consultation and let Sophie guide you to the perfect experience.
        </p>
        <div className="mt-6">
          <PillButton>Book a Consultation</PillButton>
        </div>
        <a
          href="tel:0272516985"
          className="inline-block mt-4"
          style={{ fontSize: "12px", color: "rgba(44,44,44,0.35)", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}
        >
          Or call (027) 251-6985
        </a>
      </section>
    </div>
  );
}