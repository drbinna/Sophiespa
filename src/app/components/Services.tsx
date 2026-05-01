import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const travelRates = [
  { time: "Core service area", fee: "Included" },
  { time: "15–25 km", fee: "$20" },
  { time: "25–40 km", fee: "$40" },
  { time: "40 km +", fee: "Price on request" },
];

const CREAM = "#FDF8F4";
const BLUSH = "#F5E6DC";
const CHARCOAL = "#2C2C2C";
const ROSE = "#C4929B";
const GOLD = "#B8956A";

const IMG_GLOW_N_GO =
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774339578/sophie-spa-lifestyle-v2_f7lrzd.webp";
const IMG_HOLISTIC = [
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774338526/0_2_3_lru3ad.jpg",
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774338374/0_2_2_eao0qq.jpg",
];
const IMG_SUPER_GLOW =
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774339921/sophie-spa-robe_apzs9n.webp";

const IMG_RELAXATION =
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774780020/sophie-spa-massage-hero-cropped_urb3rf.jpg";
const IMG_SWEDISH =
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774779362/sophie-spa-massage-facial-touch_gsrage.jpg";
const IMG_DEEP_TISSUE =
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774779685/u5442978949_Sports_massage_--raw_--stylize_0_--v_7_a821c5e2-6d1e-41ba-ad4e-e8717c8bb2d3_0_xadqch.png";
const IMG_HOT_STONE = [
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1775043418/0_3_4_su6i1w.jpg",
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1775044039/0_1_6_wiwt7o.jpg",
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1775044323/0_1_7_mdvpen.jpg",
];
const IMG_CORPORATE = [
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1775131629/Gemini_Generated_Image_s9yxuss9yxuss9yx_eae0iy.png",
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1775131652/Gemini_Generated_Image_2xa6q12xa6q12xa6_wrft5b.png",
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1775131716/Gemini_Generated_Image_9o7ymc9o7ymc9o7y_wcyyxh.png",
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1775131695/Gemini_Generated_Image_972ygl972ygl972y_vt5xei.png",
  "https://res.cloudinary.com/dd2yh56dr/image/upload/v1775131669/Gemini_Generated_Image_c7661pc7661pc766_1_evthoz.png",
];

/* ─── Types ─── */
interface Treatment {
  name: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
  note?: string;
  image: string | string[];
  comingSoon?: boolean;
  enquire?: boolean;
}

/* ─── Crossfade Slideshow ─── */
function CrossfadeSlideshow({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full" style={{ aspectRatio: "4/3", borderRadius: "16px", overflow: "hidden", boxShadow: "0 16px 40px rgba(196,146,155,0.1)" }}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Treatment Card ─── */
function TreatmentCard({
  treatment,
  imageLeft,
}: {
  treatment: Treatment;
  imageLeft: boolean;
}) {
  const imageBlock = (
    <div className="w-full">
      {Array.isArray(treatment.image) ? (
        <CrossfadeSlideshow images={treatment.image} alt={treatment.name} />
      ) : (
        <img
          src={treatment.image}
          alt={treatment.name}
          className="w-full object-cover"
          style={{
            borderRadius: "16px",
            aspectRatio: "4/3",
            boxShadow: "0 16px 40px rgba(196,146,155,0.1)",
          }}
        />
      )}
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center">
      {/* Name */}
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 400,
          fontSize: "clamp(26px, 3vw, 32px)",
          color: CHARCOAL,
        }}
      >
        {treatment.name}
      </h3>

      {/* Duration · Price */}
      <div className="flex items-baseline gap-2 mt-1.5">
        <span
          style={{
            fontSize: "13px",
            color: "rgba(44,44,44,0.3)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {treatment.duration}
        </span>
        <span style={{ fontSize: "13px", color: "rgba(44,44,44,0.2)" }}>·</span>
        <span
          style={{
            fontSize: "18px",
            fontWeight: 500,
            color: ROSE,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {treatment.price}
        </span>
      </div>

      {/* Description */}
      <p
        className="mt-4"
        style={{
          fontSize: "14px",
          color: "rgba(44,44,44,0.55)",
          lineHeight: 1.75,
          maxWidth: "440px",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          whiteSpace: "pre-line",
        }}
      >
        {treatment.description}
      </p>

      {/* Includes */}
      {treatment.includes.length > 0 && (
      <>
      <p
        className="mt-5 uppercase"
        style={{
          fontSize: "10px",
          letterSpacing: "0.15em",
          color: "rgba(44,44,44,0.3)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Includes
      </p>
      <div className="flex flex-wrap gap-1.5 mt-2">
        {treatment.includes.map((item) => (
          <span
            key={item}
            style={{
              fontSize: "11px",
              padding: "5px 14px",
              borderRadius: "100px",
              border: "0.5px solid rgba(196,146,155,0.15)",
              color: "rgba(44,44,44,0.45)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {item}
          </span>
        ))}
      </div>
      </>
      )}

      {/* Note */}
      {treatment.note && (
        <p
          className="mt-3"
          style={{
            fontSize: "11px",
            fontStyle: "italic",
            color: "rgba(44,44,44,0.3)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {treatment.note}
        </p>
      )}

      {/* Book button */}
      <div className="mt-6">
        {treatment.comingSoon ? (
          <button
            className="cursor-pointer transition-all"
            style={{
              background: "transparent",
              color: ROSE,
              fontSize: "13px",
              letterSpacing: "0.03em",
              padding: "12px 32px",
              borderRadius: "100px",
              border: `1.5px solid ${ROSE}`,
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(196,146,155,0.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            Notify Me
          </button>
        ) : (
          <button
            className="cursor-pointer transition-all hover:brightness-110"
            style={{
              background: ROSE,
              color: "#FFFFFF",
              fontSize: "13px",
              letterSpacing: "0.03em",
              padding: "12px 32px",
              borderRadius: "100px",
              border: "none",
              boxShadow: "0 8px 24px rgba(196,146,155,0.35)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {treatment.enquire ? "Enquire Now" : "Book this treatment"}
          </button>
        )}
      </div>

      {/* Contact line */}
      <p
        className="mt-4"
        style={{
          fontSize: "12px",
          color: "rgba(44,44,44,0.45)",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
        }}
      >
        Questions?{" "}
        <a
          href="tel:+64272516985"
          className="hover:text-[#C4929B] transition-colors"
          style={{ color: "rgba(44,44,44,0.6)", textDecoration: "none" }}
        >
          Call Sophie
        </a>
        {" · "}
        <a
          href="mailto:sophiespa888@gmail.com?subject=Booking%20enquiry"
          className="hover:text-[#C4929B] transition-colors"
          style={{ color: "rgba(44,44,44,0.6)", textDecoration: "none" }}
        >
          Email
        </a>
      </p>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Desktop: side by side */}
      <div className="hidden md:grid grid-cols-2 gap-14 items-center">
        {imageLeft ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
      {/* Mobile: stacked */}
      <div className="md:hidden flex flex-col gap-6">
        {Array.isArray(treatment.image) ? (
          <CrossfadeSlideshow images={treatment.image} alt={treatment.name} />
        ) : (
          <img
            src={treatment.image}
            alt={treatment.name}
            className="w-full object-cover"
            style={{
              borderRadius: "16px",
              maxHeight: "300px",
              boxShadow: "0 16px 40px rgba(196,146,155,0.1)",
            }}
          />
        )}
        {textBlock}
      </div>
    </div>
  );
}

/* ─── Section Label with line ─── */
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="max-w-6xl mx-auto px-6 flex items-center gap-4 mb-14">
      <span
        className="uppercase shrink-0"
        style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          color: ROSE,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {label}
      </span>
      <div
        className="flex-1"
        style={{ height: "1px", background: "rgba(196,146,155,0.15)" }}
      />
    </div>
  );
}

/* ─── Data ─── */
const facials: Treatment[] = [
  {
    name: "Dermaplane Glow n Go",
    duration: "60 minutes",
    price: "$179",
    description:
      "Relax at home and let us transform your skin into a dewy, glowing complexion. Your experienced therapist will skilfully remove downy hair and dead skin cells with professional dermaplanning, then infuse our botanical ingredients into your skin to reveal the smoothest canvas for perfect makeup application and a camera-ready glow.",
    includes: [
      "Double cleanse",
      "Exfoliation",
      "Tone",
      "Dermaplanning",
      "Hydrating mask",
      "Hot towel therapy",
      "Serum",
      "Eye cream",
      "Moisturise",
      "SPF",
    ],
    note: "Skincare samples & homecare advice available",
    image: IMG_GLOW_N_GO,
  },
  {
    name: "Holistic Reflexology Facial",
    duration: "75 minutes",
    price: "$159",
    description:
      "Enjoy a fully mobile, indulgent facial experience in the comfort of your own home. This holistic treatment nourishes your skin with botanical ingredients, boosting circulation, calming sensitivity, soothing inflammation, and supporting lymphatic drainage for a natural, healthy glow. Using plant-based, skin-healing botanicals to improve skin barrier function.",
    includes: [
      "Botanical facial",
      "Plant-based skin-healing botanicals",
      "Lymphatic drainage",
      "Barrier repair",
      "Circulation boost",
      "Inflammation relief",
    ],
    note: "Using plant-based, skin-healing botanicals to improve skin barrier function",
    image: IMG_HOLISTIC,
  },
];

const massages: Treatment[] = [
  {
    name: "Relaxation Massage",
    duration: "60 / 90 / 120 min",
    price: "$170 / $220 / $280",
    description:
      "Light to medium pressure. A full-body sequence creates a soothing restorative experience. Using flowing strokes, this treatment calms and centres the mind and body, allowing tension to gently melt away. Aromatherapy can be included if preferred to further enhance relaxation.\n\nLuxurious hot towels are applied to your skin to complete the session, removing excess oils and leaving you feeling refreshed, grounded, and renewed.",
    includes: [
      "Full-body relaxation massage",
      "Warm aromatherapy towels",
      "Tailored pressure",
      "Calming environment setup",
    ],
    image: IMG_RELAXATION,
  },
  {
    name: "Swedish Remedial Massage",
    duration: "60 / 90 / 120 min",
    price: "$170 / $220 / $280",
    description:
      "Medium to firm pressure. The perfect blend of relaxation and results. This classic full-body treatment combines smooth, flowing movements with targeted deeper techniques to relieve muscle tension. By easing tightness and releasing stored stress, it helps improve mobility and reduce stiffness.\n\nWith extensive experience, Soph tailors each session to your individual needs, ensuring maximum relaxation while effectively addressing deeper areas of tension. Pressure and technique are always adjusted to suit your comfort and preferences, creating a personalised and restorative experience.",
    includes: [
      "Full-body massage",
      "Flowing Swedish strokes",
      "Targeted remedial techniques",
      "Circulation boost",
      "Muscle tension release",
    ],
    note: "Pressure tailored to your preference",
    image: IMG_SWEDISH,
  },
  {
    name: "Deep Tissue & Sports Massage",
    duration: "60 / 90 / 120 min",
    price: "$170 / $220 / $280",
    description:
      "Firm deep pressure. A deeply restorative, results-focused treatment designed to ease muscle tension and support overall mobility. Using firm yet intuitive pressure and advanced muscle release techniques, this massage works into the deeper layers of muscle to melt away tightness and ease trigger points.\n\nEach session is full-body, with gentle focus directed to areas that need extra care. Pressure is always tailored to your comfort, ensuring a treatment that feels effective, grounding, and deeply relaxing rather than overwhelming.\n\nWith postgraduate training in deep tissue techniques and experience working with elite athletes, Soph blends therapeutic skill with a calming, holistic approach to help release tension, restore ease of movement, and rebalance the body. Leave feeling looser, lighter, and completely renewed.",
    includes: [
      "Full-body deep tissue work",
      "Trigger point therapy",
      "Sports massage techniques",
      "Mobility restoration",
      "Targeted muscle release",
    ],
    note: "Trusted by professional NZ and international rugby teams",
    image: IMG_DEEP_TISSUE,
  },
  {
    name: "Hot Stone Massage",
    duration: "Coming Soon",
    price: "—",
    description:
      "Melt into a state of deep, restorative calm with our indulgent hot stone massage—a ritual designed to soothe not just the body, but the mind and spirit. Smooth, heated basalt stones are gently glided across your skin, their comforting warmth sinking into tired muscles, dissolving tension and easing even the most stubborn knots.\n\nAs the heat penetrates deeply, your body begins to unwind effortlessly, encouraging improved circulation and a profound sense of release. Each slow, flowing movement is intentionally crafted to lull you into a tranquil, almost dreamlike state—where stress fades, and a feeling of pure serenity takes over.\n\nThis is more than a massage; it's a luxurious escape. A moment to surrender, to be nurtured, and to reconnect with yourself. Perfect for those seeking relief from tension, emotional overwhelm, or simply craving a deeply pampering experience that leaves you feeling grounded, balanced, and completely renewed.",
    includes: [
      "Full-body hot stone massage",
      "Heated basalt stones",
      "Deep muscle tension release",
      "Improved circulation",
      "Aromatherapy",
    ],
    image: IMG_HOT_STONE,
    comingSoon: false,
  },
  {
    name: "Workplace Wellness",
    duration: "10–20 min per person",
    price: "TBC",
    description:
      "Give your team a simple, meaningful way to reset — without ever leaving the office.\n\nSophie Spa brings professional on-site chair massage to workplaces across Auckland, helping your staff feel refreshed, focused, and genuinely cared for.\n\nChair massage is a short, targeted treatment performed in a specially designed massage chair. No oils required, no need to change clothing, and sessions range from 10–20 minutes. It's convenient, non-invasive, and fits easily into the workday.\n\nSophie brings everything — all you need is a quiet corner. Sessions can be scheduled in advance or on the day, and your team simply rotates through while the workday continues around them.",
    includes: [
      "No oils required",
      "No need to change clothing",
      "10–20 minute sessions",
      "We come to you",
    ],
    note: "Perfect for staff wellness days, corporate events, busy teams needing a reset, and reward & recognition moments.",
    image: IMG_CORPORATE,
    comingSoon: false,
    enquire: true,
  },
];

const spaHotel: Treatment[] = [
  {
    name: "Spa Hotel Massage",
    duration: "TBC",
    price: "TBC",
    description:
      "There is no better way to enhance your hotel experience than by indulging in an in-house massage of your preference right within the serene confines of your hotel suite. Rest assured that all necessary equipment will be provided, requiring only a tranquil space for you to completely relax and rejuvenate. Please note that any parking expenses, if applicable, will be covered by the client.",
    includes: [
      "In-suite setup",
      "All equipment provided",
      "Choice of massage style",
      "Personalised pressure",
      "Warm towels",
    ],
    note: "Parking expenses, if applicable, will be covered by the client",
    image: "https://images.unsplash.com/photo-1737352777897-e22953991a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwbWFzc2FnZSUyMHNwYXxlbnwxfHx8fDE3NzYzNDY4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    enquire: true,
  },
];

/* ─── Page ─── */
export function Services() {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab") as "Facials" | "Massages" | "Exfoliation" | "Travel Fees" | null;
  const validTabs = ["Facials", "Massages", "Exfoliation", "Travel Fees"] as const;
  const initialTab = tabParam && validTabs.includes(tabParam) ? tabParam : "Facials";
  const [activeTab, setActiveTab] = useState<"Facials" | "Massages" | "Exfoliation" | "Travel Fees">(initialTab);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories: Array<{ label: "Facials" | "Massages" | "Exfoliation" | "Travel Fees" }> = [
    { label: "Facials" },
    { label: "Massages" },
    { label: "Exfoliation" },
    { label: "Travel Fees" },
  ];

  return (
    <div style={{ background: CREAM, color: CHARCOAL }}>
      {/* ── PAGE HEADER ── */}
      <section
        className="text-center"
        style={{ paddingTop: "100px", paddingBottom: "40px" }}
      >
        <p
          className="uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: ROSE,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          SOPHIE SPA
        </p>
        <h1
          className="mt-3"
          style={{
            fontSize: "clamp(40px, 5vw, 52px)",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            color: CHARCOAL,
          }}
        >
          Services
        </h1>
        <p
          className="mt-4 mx-auto"
          style={{
            maxWidth: "500px",
            fontSize: "15px",
            color: "rgba(44,44,44,0.5)",
            lineHeight: 1.7,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
          }}
        >
          Premium mobile beauty and wellness — delivered to your door, anywhere
          across Auckland.
        </p>

        {/* Category pills */}
        <div className="flex justify-center gap-3 flex-wrap mt-7">
          {categories.map((cat) => {
            const isActive = activeTab === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveTab(cat.label)}
                className="cursor-pointer transition-colors"
                style={{
                  border: isActive
                    ? "1.5px solid #C4929B"
                    : "0.5px solid rgba(196,146,155,0.2)",
                  padding: "8px 22px",
                  borderRadius: "100px",
                  fontSize: "12px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: isActive ? ROSE : "rgba(44,44,44,0.35)",
                  background: isActive ? "rgba(196,146,155,0.06)" : "transparent",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── FACIALS TAB ── */}
      {activeTab === "Facials" && (
      <section style={{ paddingTop: "60px", paddingBottom: "40px" }}>
        <SectionLabel label="Facials" />

        <div className="flex flex-col" style={{ gap: "80px" }}>
          {facials.map((treatment, i) => (
            <TreatmentCard
              key={treatment.name}
              treatment={treatment}
              imageLeft={i % 2 === 0}
            />
          ))}
        </div>

        {/* Dermaplanning reassurance */}
        <p
          className="text-center mt-16"
          style={{
            fontSize: "12px",
            fontStyle: "italic",
            color: "rgba(44,44,44,0.35)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Dermaplanning does not cause excess hair growth. Relax & glow in
          confidence.
        </p>
      </section>
      )}

      {/* ── MASSAGES TAB ── */}
      {activeTab === "Massages" && (
      <section style={{ paddingTop: "60px", paddingBottom: "40px" }}>
        <SectionLabel label="Massages" />

        {/* Intro message */}
        <div className="max-w-3xl mx-auto px-6 mb-16 text-center">
          <p
            style={{
              fontSize: "14px",
              color: "rgba(44,44,44,0.55)",
              lineHeight: 1.85,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              whiteSpace: "pre-line",
            }}
          >
            {"At Sophie Spa, we understand how life's stresses and hectic schedules can take a toll on your wellbeing. Our relaxation massage brings a calming, restorative experience directly to you—so you can unwind in the comfort of your own space without the stress of travel & parking.\n\nSophie Brings you extensive massage training, 19 years of experience, current massage work on rugby professionals & her own natural intuitive gift for massage. A next level healing massage blends relaxation with subtle therapeutic techniques. The result is a session that feels indulgent yet effective, helpong you release tension, reconnect mind and body, and step back into your day feeling lighter and refreshed.\n\nEach session concludes with warm, soothing hot towels to refresh the skin and leave you feeling renewed."}
          </p>
        </div>

        <div className="flex flex-col" style={{ gap: "80px" }}>
          {massages.map((treatment, i) => (
            <TreatmentCard
              key={treatment.name}
              treatment={treatment}
              imageLeft={i % 2 === 0}
            />
          ))}
        </div>

        {/* Spa Hotel sub-section */}
        <div style={{ marginTop: "100px" }}>
          <SectionLabel label="Spa Hotel" />
          <div className="flex flex-col" style={{ gap: "80px" }}>
            {spaHotel.map((treatment, i) => (
              <TreatmentCard
                key={treatment.name}
                treatment={treatment}
                imageLeft={i % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ── EXFOLIATION TAB (placeholder) ── */}
      {activeTab === "Exfoliation" && (
      <section style={{ paddingTop: "60px", paddingBottom: "40px" }}>
        <SectionLabel label="Exfoliation" />
        <p
          className="text-center"
          style={{
            fontSize: "15px",
            color: "rgba(44,44,44,0.45)",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            paddingBottom: "40px",
          }}
        >
          Coming soon — check back for our exfoliation treatments.
        </p>
      </section>
      )}

      {/* ── TRAVEL FEES TAB ── */}
      {activeTab === "Travel Fees" && (
      <section style={{ paddingTop: "60px", paddingBottom: "40px" }}>
        <SectionLabel label="Mobile Travel Fees" />

        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "36px" }}>
            <div
              className="mx-auto flex items-center justify-center"
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(196,146,155,0.1)",
                marginBottom: "20px",
              }}
            >
              <MapPin size={24} color={ROSE} strokeWidth={1.5} />
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: "clamp(26px, 3vw, 32px)",
                color: CHARCOAL,
              }}
            >
              We Bring Sophie Spa to You
            </h2>
            <p
              className="mx-auto mt-4"
              style={{
                fontSize: "14px",
                color: "rgba(44,44,44,0.55)",
                lineHeight: 1.75,
                maxWidth: "480px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
              }}
            >
              Anywhere in Auckland. Travel fees are based on the time it takes to
              reach you from our starting location, calculated using maps — so
              everything is clear and upfront.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4" style={{ gap: "16px" }}>
            {travelRates.map((rate) => (
              <div
                key={rate.time}
                className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0"
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "20px 24px",
                  boxShadow: "0 4px 20px rgba(180,140,120,0.08)",
                  border: "0.5px solid rgba(196,146,155,0.1)",
                }}
              >
                <Clock
                  size={18}
                  color={ROSE}
                  strokeWidth={1.5}
                  style={{ marginBottom: "0", opacity: 0.6, flexShrink: 0 }}
                />
                <div className="flex-1 sm:mt-3">
                  <p
                    style={{
                      fontSize: "12px",
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(44,44,44,0.4)",
                      letterSpacing: "0.03em",
                      marginBottom: "4px",
                    }}
                  >
                    {rate.time}
                  </p>
                  <p
                    style={{
                      fontSize: "22px",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                      color: ROSE,
                    }}
                  >
                    {rate.fee}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div
            className="text-center"
            style={{
              marginTop: "40px",
              padding: "28px 24px",
              borderRadius: "16px",
              background: "rgba(196,146,155,0.05)",
              border: "0.5px solid rgba(196,146,155,0.1)",
            }}
          >
            <p
              className="italic"
              style={{
                fontSize: "18px",
                fontFamily: "'Cormorant Garamond', serif",
                color: CHARCOAL,
                marginBottom: "12px",
              }}
            >
              Got questions or want a quick travel quote?
            </p>
            <p
              style={{
                fontSize: "13px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                color: "rgba(44,44,44,0.5)",
                marginBottom: "16px",
              }}
            >
              Just reach out anytime!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:0272516985"
                className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                style={{
                  fontSize: "14px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  color: ROSE,
                  textDecoration: "none",
                }}
              >
                <Phone size={16} strokeWidth={1.5} />
                027 251 6985
              </a>
              <span style={{ color: "rgba(44,44,44,0.2)" }} className="hidden sm:inline">·</span>
              <a
                href="mailto:sophiespa888@gmail.com?subject=Travel%20Quote"
                className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                style={{
                  fontSize: "14px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  color: ROSE,
                  textDecoration: "none",
                }}
              >
                <Mail size={16} strokeWidth={1.5} />
                sophiespa888@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ── BOTTOM CTA ── */}
      <section
        className="text-center"
        style={{ paddingTop: "80px", paddingBottom: "40px" }}
      >
        <div
          className="mx-auto"
          style={{
            maxWidth: "200px",
            height: "1px",
            background: "rgba(196,146,155,0.1)",
            marginBottom: "40px",
          }}
        />
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 30px)",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            color: CHARCOAL,
          }}
        >
          Not sure which treatment is right for you?
        </h2>
        <p
          className="mt-2.5 mx-auto"
          style={{
            maxWidth: "400px",
            fontSize: "14px",
            color: "rgba(44,44,44,0.45)",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
          }}
        >
          Book a free consultation and let Sophie guide you to the perfect
          experience.
        </p>
        <div className="mt-6">
          <button
            className="cursor-pointer transition-all hover:brightness-110"
            style={{
              background: ROSE,
              color: "#FFFFFF",
              fontSize: "13px",
              letterSpacing: "0.03em",
              padding: "12px 32px",
              borderRadius: "100px",
              border: "none",
              boxShadow: "0 8px 24px rgba(196,146,155,0.35)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Book a Consultation
          </button>
        </div>
        <a
          href="tel:0272516985"
          className="inline-block mt-3.5"
          style={{
            fontSize: "12px",
            color: "rgba(44,44,44,0.3)",
            fontFamily: "'Inter', sans-serif",
            textDecoration: "none",
          }}
        >
          Or call (027) 251-6985
        </a>
      </section>

    </div>
  );
}