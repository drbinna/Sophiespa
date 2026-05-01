import { Leaf, ShieldCheck, Recycle, MapPin, Clock, Phone, Mail } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const portraitUrl =
  "https://images.unsplash.com/photo-1758600432914-2b5f4483c7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzcGElMjB0aGVyYXBpc3QlMjBwb3J0cmFpdCUyMHdhcm0lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc0MDgyOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const values = [
  { icon: Leaf, label: "Organic Products" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
  { icon: Recycle, label: "Eco-Friendly" },
];

const travelRates = [
  { time: "Core service area", fee: "Included" },
  { time: "15–25 km", fee: "$20" },
  { time: "25–40 km", fee: "$40" },
  { time: "40 km +", fee: "Price on request" },
];

export function About() {
  const introRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const travelRef = useScrollReveal();

  return (
    <div className="bg-[#FDF8F4]">
      {/* Section 1 — Hero / Intro */}
      <section style={{ paddingTop: 100, paddingBottom: 60 }}>
        <div
          ref={introRef}
          className="max-w-6xl mx-auto px-6 scroll-reveal flex flex-col md:flex-row items-center"
          style={{ gap: 60 }}
        >
          {/* Left — Photo Card */}
          <div className="w-full md:w-[45%] flex justify-center flex-shrink-0">
            <div
              className="bg-white w-full max-w-[300px] md:max-w-none"
              style={{
                borderRadius: 16,
                padding: 12,
                paddingBottom: 20,
                boxShadow: "0 8px 30px rgba(180, 140, 120, 0.12)",
              }}
            >
              <ImageWithFallback
                src={portraitUrl}
                alt="Sophie — Founder & Lead Therapist"
                className="w-full object-cover"
                style={{ aspectRatio: "3/4", borderRadius: 12 }}
              />
              <div className="text-center" style={{ paddingTop: 16 }}>
                <p
                  className="font-['Cormorant_Garamond'] text-[#2C2C2C]"
                  style={{ fontSize: 20, fontWeight: 500 }}
                >
                  Sophie
                </p>
                <p
                  className="font-['Inter'] text-[#2C2C2C]/50"
                  style={{ fontSize: 13, marginTop: 2 }}
                >
                  Founder & Lead Therapist
                </p>
                <div
                  className="flex flex-wrap justify-center"
                  style={{ gap: 8, marginTop: 12 }}
                >
                  {["CIDESCO Certified", "19 Years Experience"].map((b) => (
                    <span
                      key={b}
                      className="font-['Inter'] text-[#C4929B]"
                      style={{
                        fontSize: 12,
                        padding: "4px 12px",
                        borderRadius: 100,
                        background: "rgba(196,146,155,0.12)",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="w-full md:w-[55%]">
            <p
              className="font-['Inter'] text-[#C4929B]"
              style={{
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              About Sophie Spa
            </p>
            <h1
              className="font-['Cormorant_Garamond'] text-[#2C2C2C]"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 500,
                lineHeight: 1.15,
              }}
            >
              Nineteen Years of Healing Hands
            </h1>
            <div
              style={{
                width: 40,
                height: 2,
                background: "#C4929B",
                marginTop: 20,
                marginBottom: 20,
                borderRadius: 1,
              }}
            />
            <p
              className="font-['Inter'] text-[#2C2C2C]"
              style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7 }}
            >
              My journey into wellness began at 14, navigating my own skin and
              health challenges. What started as a personal struggle became a
              lifelong passion — one I turned into a career in 2007 and a
              CIDESCO-certified practice by 2010. Today, I bring 19 years of
              intuitive expertise directly to your door. The same hands trusted
              by professional New Zealand and international rugby teams are the
              ones that will melt the tension from your body — in the comfort of
              your own home, anywhere across Auckland.
            </p>

            {/* Pull-quote */}
            <div style={{ marginTop: 32, position: "relative", paddingLeft: 4 }}>
              <span
                className="font-['Cormorant_Garamond'] text-[#C4929B] select-none"
                style={{
                  fontSize: 48,
                  lineHeight: 1,
                  opacity: 0.4,
                  position: "absolute",
                  top: -8,
                  left: -4,
                }}
              >
                "
              </span>
              <p
                className="font-['Cormorant_Garamond'] italic text-[#2C2C2C]"
                style={{
                  fontSize: 18,
                  lineHeight: 1.6,
                  paddingLeft: 28,
                }}
              >
                Every body carries stress differently. My signature is finding
                exactly where yours holds it — and dissolving it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Values Bar + CTA */}
      <section
        style={{
          paddingTop: 60,
          paddingBottom: 60,
          background: "rgba(196,146,155,0.06)",
        }}
      >
        <div
          ref={valuesRef}
          className="max-w-[800px] mx-auto px-6 scroll-reveal"
        >
          {/* Values row */}
          <div className="flex justify-center" style={{ gap: 48 }}>
            {values.map((v) => (
              <div key={v.label} className="flex flex-col items-center" style={{ gap: 10 }}>
                <v.icon size={24} className="text-[#C4929B]" strokeWidth={1.5} />
                <span
                  className="font-['Inter'] text-[#2C2C2C] text-center"
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 400,
                  }}
                >
                  {v.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center" style={{ marginTop: 40 }}>
            <p
              className="font-['Cormorant_Garamond'] italic text-[#2C2C2C]"
              style={{ fontSize: 20, marginBottom: 20 }}
            >
              Ready to experience it yourself?
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("sophie:open-booking"))}
              className="inline-block px-10 py-4 rounded-full text-white cursor-pointer transition-all duration-500 border-none"
              style={{
                fontSize: "0.95rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                backgroundColor: "#C4929B",
                boxShadow: "0 4px 24px rgba(196, 146, 155, 0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 6px 32px rgba(196, 146, 155, 0.55)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(196, 146, 155, 0.35)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book Your Escape
              <span className="inline-block ml-2">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 3 — Mobile Travel Fees */}
      <section style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div
          ref={travelRef}
          className="max-w-3xl mx-auto px-6 scroll-reveal"
        >
          {/* Section header */}
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div
              className="mx-auto flex items-center justify-center"
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(196,146,155,0.1)",
                marginBottom: 20,
              }}
            >
              <MapPin size={24} className="text-[#C4929B]" strokeWidth={1.5} />
            </div>
            <p
              className="font-['Inter'] text-[#C4929B] uppercase"
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                fontWeight: 500,
                marginBottom: 12,
              }}
            >
              Mobile Travel Fees
            </p>
            <h2
              className="font-['Cormorant_Garamond'] text-[#2C2C2C]"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 400,
              }}
            >
              We Bring Sophie Spa to You
            </h2>
            <p
              className="font-['Inter'] text-[#2C2C2C] mx-auto"
              style={{
                fontSize: 14,
                fontWeight: 300,
                lineHeight: 1.75,
                maxWidth: 480,
                marginTop: 16,
                opacity: 0.55,
              }}
            >
              Anywhere in Auckland. Travel within our core service area is
              included — for locations beyond, fees are calculated by distance,
              so everything is clear and upfront.
            </p>
          </div>

          {/* Rate cards */}
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ gap: 16 }}
          >
            {travelRates.map((rate) => (
              <div
                key={rate.time}
                className="text-center"
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: "28px 16px",
                  boxShadow: "0 4px 20px rgba(180,140,120,0.08)",
                  border: "0.5px solid rgba(196,146,155,0.1)",
                }}
              >
                <MapPin
                  size={18}
                  className="text-[#C4929B] mx-auto"
                  strokeWidth={1.5}
                  style={{ marginBottom: 12, opacity: 0.6 }}
                />
                <p
                  className="font-['Inter'] text-[#2C2C2C]"
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    opacity: 0.45,
                    letterSpacing: "0.03em",
                    marginBottom: 8,
                  }}
                >
                  {rate.time}
                </p>
                <p
                  className="font-['Cormorant_Garamond'] text-[#C4929B]"
                  style={{ fontSize: 28, fontWeight: 500 }}
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
              marginTop: 40,
              padding: "28px 24px",
              borderRadius: 16,
              background: "rgba(196,146,155,0.05)",
              border: "0.5px solid rgba(196,146,155,0.1)",
            }}
          >
            <p
              className="font-['Cormorant_Garamond'] italic text-[#2C2C2C]"
              style={{ fontSize: 18, marginBottom: 12 }}
            >
              Got questions or want a quick travel quote?
            </p>
            <p
              className="font-['Inter'] text-[#2C2C2C]"
              style={{ fontSize: 13, fontWeight: 300, opacity: 0.5, marginBottom: 16 }}
            >
              Just reach out anytime!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:0272516985"
                className="inline-flex items-center gap-2 no-underline hover:opacity-80 transition-all"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#C4929B",
                  letterSpacing: "0.03em",
                }}
              >
                <Phone size={16} strokeWidth={1.5} />
                027 251 6985
              </a>
              <span style={{ color: "rgba(44,44,44,0.2)" }} className="hidden sm:inline">·</span>
              <a
                href="mailto:sophiespa888@gmail.com?subject=Enquiry"
                className="inline-flex items-center gap-2 no-underline hover:opacity-80 transition-all"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#C4929B",
                  letterSpacing: "0.03em",
                }}
              >
                <Mail size={16} strokeWidth={1.5} />
                sophiespa888@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}