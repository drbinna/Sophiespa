import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { MapPin, Clock, Phone } from "lucide-react";

const travelRates = [
  { time: "Up to 30 mins", fee: "$30" },
  { time: "45 mins", fee: "$40" },
  { time: "60 mins", fee: "$50" },
  { time: "70+ mins", fee: "From $60" },
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
    name: "Holistic Facial & Foot Ritual",
    duration: "75 minutes",
    price: "$189",
    description:
      "Enjoy a fully mobile, indulgent facial experience in the comfort of your own home. This holistic treatment nourishes your skin with botanical ingredients while submerging your feet in an infusion of herbs, flower petals, aromatherapy and salts for their relaxing therapeutic benefits. Boosts circulation, calms sensitivity, soothes inflammation, and supports lymphatic drainage for a natural, healthy glow. A head-to-toe treat for the soul.",
    includes: [
      "Botanical facial",
      "Herbal & floral foot soak",
      "Plant-based skin-healing botanicals",
      "Lymphatic drainage",
      "Barrier repair",
      "Magnesium absorption therapy",
    ],
    note: "Using plant-based, skin-healing botanicals to improve skin barrier function",
    image: IMG_HOLISTIC,
  },
  {
    name: "Dermaplane Super Glow",
    duration: "90 minutes",
    price: "$229",
    description:
      "Enjoy true transformation and a super glowing, luminous complexion. Everything in the Glow n Go plus indulgent facial reflexology massage, a double mask system — first a soothing hydrating mask, then a decadent rose jelly mask to enhance absorption. Expert hands dissolve tension with facial reflexology to release stagnant lymph and puffiness, followed by neck, shoulder and scalp massage to truly melt your cares away. Leave feeling illuminated, smooth and dewy for a camera-ready super-glow.",
    includes: [
      "Everything in Glow n Go",
      "2x hydrating & nourishing masks",
      "Facial reflexology massage",
      "Rose jelly mask",
      "Neck & shoulder massage",
      "Scalp massage",
      "Hot towels",
    ],
    note: "Skincare samples & homecare advice available",
    image: IMG_SUPER_GLOW,
  },
];

const massages: Treatment[] = [
  {
    name: "Relaxation Massage",
    duration: "TBC",
    price: "TBC",
    description:
      "Using flowing strokes, this treatment soothes, calms & centres the mind & body. Light to medium pressure is tailored to suit each individual, allowing tension to gently melt away.\n\nA full-body sequence creates a deeply restorative experience. Aromatherapy can be included if preferred to further enhance relaxation.\n\nOptional aromatherapy can be used with massage to enhance your spa experience. Warm, soothing hot towels complete the session, removing excess oils and leaving you feeling refreshed, grounded, and renewed.",
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
    duration: "TBC",
    price: "TBC",
    description:
      "Swedish Remedial Massage is the perfect blend of relaxation and results. This classic full-body treatment combines smooth, flowing movements with targeted deeper techniques to relieve muscle tension. By easing tightness and releasing stored stress, it helps improve mobility and reduce stiffness.\n\nWith extensive experience, Soph tailors each session to your individual needs, ensuring maximum relaxation while effectively addressing deeper areas of tension. Pressure and technique are always adjusted to suit your comfort and preferences, creating a personalised and restorative experience.",
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
    duration: "TBC",
    price: "TBC",
    description:
      "A deeply restorative, results-focused treatment designed to ease muscle tension and support overall mobility. Using firm yet intuitive pressure and advanced muscle release techniques, this massage works into the deeper layers of muscle to melt away tightness and ease trigger points.\n\nEach session is full-body, with gentle focus directed to areas that need extra care. Pressure is always tailored to your comfort, ensuring a treatment that feels effective, grounding, and deeply relaxing rather than overwhelming.\n\nWith postgraduate training in deep tissue techniques and experience working with elite athletes, Soph blends therapeutic skill with a calming, holistic approach to help release tension, restore ease of movement, and rebalance the body.\n\nLeave feeling looser, lighter, and completely renewed.",
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
    name: "Corporate Chair Massage",
    duration: "15–30 min per staff member",
    price: "TBC",
    description:
      "Feeling like your team could use a boost? Elevate your workplace with a corporate chair or table massage experience that delivers the benefits of a professional treatment—right in the convenience of your workplace.\n\nDesigned to support your team's wellbeing, energy, and performance, all that's needed is a small, designated space to create a 15–30 minute recharge and a slice of calm for each staff member.\n\nIn today's fast-paced environment, stress and physical tension can quietly build, impacting focus, morale, and productivity. Our on-site massage service offers a seamless, hassle-free solution—creating a space within the workplace for staff to pause, recharge, and re-centre without disrupting the flow of the day.\n\nSeated comfortably and fully clothed, your team will enjoy targeted massage techniques that ease tension in the neck, shoulders, and upper body—areas most affected by desk work and daily demands. In just minutes, muscles begin to soften, minds feel clearer, and a sense of balance is restored.\n\nBeyond the physical benefits, this is a powerful way to show genuine appreciation. Each session becomes a small but meaningful reset—leaving staff feeling valued, re-energised, and better equipped to perform at their best.\n\nWith minimal space required and flexible session options, corporate massage integrates effortlessly into your workplace—whether as a one-off wellness initiative, a team reward, or an ongoing investment in staff care.\n\nBecause when your people feel supported, balanced, and just a little bit indulged, they don't just work better—they thrive.",
    includes: [
      "On-site setup",
      "Fully clothed chair massage",
      "Neck, shoulder & upper body focus",
      "Flexible 15–30 min sessions",
      "Team of therapists available for simultaneous treatments",
    ],
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

          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "16px" }}>
            {travelRates.map((rate) => (
              <div
                key={rate.time}
                className="text-center"
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "28px 16px",
                  boxShadow: "0 4px 20px rgba(180,140,120,0.08)",
                  border: "0.5px solid rgba(196,146,155,0.1)",
                }}
              >
                <Clock
                  size={18}
                  color={ROSE}
                  strokeWidth={1.5}
                  className="mx-auto"
                  style={{ marginBottom: "12px", opacity: 0.6 }}
                />
                <p
                  style={{
                    fontSize: "12px",
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(44,44,44,0.4)",
                    letterSpacing: "0.03em",
                    marginBottom: "8px",
                  }}
                >
                  {rate.time}
                </p>
                <p
                  style={{
                    fontSize: "28px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                    color: ROSE,
                  }}
                >
                  {rate.fee}
                </p>
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
            <a
              href="tel:0272516985"
              className="inline-flex items-center gap-2"
              style={{
                fontSize: "14px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: ROSE,
                textDecoration: "none",
              }}
            >
              <Phone size={16} strokeWidth={1.5} />
              Sophie — 027 251 6985
            </a>
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