import { useState } from "react";
import { Plus, Minus, Phone, Mail } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const faqs = [
  { q: "What should I wear?", a: "Wear whatever is comfortable. We provide towels and draping for all treatments. You'll only need to undress to your comfort level." },
  { q: "How early should I arrive?", a: "Since we come to you, there's no need to arrive anywhere! We recommend having your space ready 10 minutes before your appointment time." },
  { q: "Can I choose my therapist?", a: "Absolutely. When booking, you can request a specific therapist based on availability. We're happy to match you with the right fit." },
  { q: "What if I have a medical condition?", a: "Please let us know about any medical conditions during booking. Our therapists are trained to adapt treatments to accommodate various health considerations." },
  { q: "Should I tip?", a: "Tipping is never expected but always appreciated. Our therapists pour their heart into every session, and gratuities are a lovely way to show recognition." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useScrollReveal();

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#FDF8F4]">
      <div ref={ref} className="max-w-2xl mx-auto px-6 scroll-reveal">
        <p
          className="text-center font-['Inter'] text-[#C4929B] mb-4"
          style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}
        >
          Know Before You Glow
        </p>
        <h2
          className="text-center font-['Cormorant_Garamond'] text-[#2C2C2C] mb-16"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400 }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#F5E6DC]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left bg-transparent border-none cursor-pointer group"
              >
                <span
                  className="font-['Cormorant_Garamond'] text-[#2C2C2C] group-hover:text-[#C4929B] transition-colors"
                  style={{ fontSize: "1.15rem", fontWeight: 500 }}
                >
                  {faq.q}
                </span>
                {open === i ? (
                  <Minus size={18} className="text-[#C4929B] flex-shrink-0 ml-4" />
                ) : (
                  <Plus size={18} className="text-[#2C2C2C]/30 flex-shrink-0 ml-4" />
                )}
              </button>
              <div
                className="overflow-hidden transition-all duration-500 ease-out"
                style={{ maxHeight: open === i ? "200px" : "0", opacity: open === i ? 1 : 0 }}
              >
                <p className="font-['Inter'] text-[#2C2C2C]/55 pb-6" style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div
          className="mt-12 text-center p-8 rounded-2xl"
          style={{
            background: "rgba(196,146,155,0.06)",
            border: "0.5px solid rgba(196,146,155,0.1)",
          }}
        >
          <p
            className="font-['Cormorant_Garamond'] text-[#2C2C2C] mb-2"
            style={{ fontSize: "1.3rem", fontWeight: 400 }}
          >
            Still have questions?
          </p>
          <p
            className="font-['Inter'] text-[#2C2C2C]/50 mb-5"
            style={{ fontSize: "0.85rem", fontWeight: 300 }}
          >
            Sophie would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+64272516985"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{
                fontSize: "0.85rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: "#C4929B",
                textDecoration: "none",
              }}
            >
              <Phone size={16} strokeWidth={1.5} />
              027 251 6985
            </a>
            <span style={{ color: "rgba(44,44,44,0.2)" }} className="hidden sm:inline">·</span>
            <a
              href="mailto:sophiespa888@gmail.com?subject=Question"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{
                fontSize: "0.85rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: "#C4929B",
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
  );
}
