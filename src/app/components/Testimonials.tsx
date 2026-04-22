import { Star } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

/**
 * Testimonials are intentionally hardcoded.
 * To add/edit/remove: update this array and redeploy.
 */
const testimonials = [
  { name: "Aroha M.", treatment: "Hot Stone Ceremony", quote: "I've never felt so deeply relaxed. Sophie's hands are magic — the warmth of the stones melted away months of tension. My home smelled like a spa for hours after." },
  { name: "James L.", treatment: "Deep Tissue Recovery", quote: "As a runner, I carry a lot of tightness. This session was exactly what I needed. Professional, thorough, and incredibly intuitive." },
  { name: "Mei C.", treatment: "Hydra-Glow Facial", quote: "My skin was glowing for days. The products smelled divine and felt so luxurious. It was like a mini retreat without leaving my living room." },
  { name: "Sarah T.", treatment: "Couples Retreat", quote: "We booked this for our anniversary and it was the most thoughtful experience. Beautifully set up, deeply calming, and the attention to detail was extraordinary." },
  { name: "Daniel K.", treatment: "Signature Relaxation", quote: "I was skeptical about mobile spa services, but Sophie Spa changed my mind completely. The experience rivals any top-tier day spa in Auckland." },
  { name: "Priya N.", treatment: "Botanical Body Scrub", quote: "My skin has never been softer. The natural ingredients and gentle technique left me feeling completely renewed. Already booked my next session." },
];

const marqueeCSS = `
@keyframes testimonial-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
`;

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      className="bg-white flex-shrink-0 flex flex-col"
      style={{
        width: 300,
        borderRadius: 12,
        padding: "20px 24px",
        border: "1px solid rgba(196,146,155,0.12)",
      }}
    >
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className="text-[#C4929B] fill-[#C4929B]" />
        ))}
      </div>
      <p
        className="font-['Cormorant_Garamond'] italic text-[#2C2C2C]/75 mb-4 flex-1"
        style={{ fontSize: "14px", lineHeight: 1.5 }}
      >
        "{t.quote}"
      </p>
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-[#F5E6DC] flex items-center justify-center flex-shrink-0">
          <span className="font-['Inter'] text-[#C4929B]" style={{ fontSize: "0.65rem", fontWeight: 600 }}>
            {t.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-['Inter'] text-[#2C2C2C]" style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.03em" }}>
            {t.name}
          </p>
          <p className="font-['Inter'] text-[#2C2C2C]/40" style={{ fontSize: "12px" }}>
            {t.treatment}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const ref = useScrollReveal();
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-[#FDF8F4]" style={{ paddingTop: 50, paddingBottom: 40 }}>
      <style>{marqueeCSS}</style>
      <div ref={ref} className="scroll-reveal">
        <p
          className="text-center font-['Inter'] text-[#C4929B] mb-4"
          style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}
        >
          Moments Remembered
        </p>
        <h2
          className="text-center font-['Cormorant_Garamond'] text-[#2C2C2C]"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, marginBottom: 24 }}
        >
          Hear From Our Guests
        </h2>

        <div
          className="overflow-hidden"
          style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}
        >
          <div
            className="flex"
            style={{
              gap: 20,
              animation: "testimonial-scroll 35s linear infinite",
              width: "max-content",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = "paused"; }}
            onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = "running"; }}
          >
            {doubled.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
