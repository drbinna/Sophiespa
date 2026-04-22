import { useScrollReveal } from "./useScrollReveal";
import imgCtaBanner from "figma:asset/dcf870b790f0807a59b98fdf0a340a100ac50792.png";

export function CtaBanner() {
  const ref = useScrollReveal();

  return (
    <section
      className="relative py-32 md:py-40 bg-cover bg-center"
      style={{
        backgroundImage: `url(${imgCtaBanner})`,
      }}
    >
      <div className="absolute inset-0 bg-[#2C2C2C]/65" />
      <div ref={ref} className="relative z-10 text-center px-6 scroll-reveal">
        <h2
          className="font-['Cormorant_Garamond'] text-white mb-5"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400 }}
        >
          Recenter Your Senses
        </h2>
        <p className="font-['Inter'] text-white/70 max-w-lg mx-auto mb-10" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.7 }}>
          Escape the rush and rediscover balance. Book your next treatment.
        </p>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="px-10 py-4 rounded-full bg-[#C4929B] text-white border-none cursor-pointer hover:shadow-[0_0_30px_rgba(196,146,155,0.5)] transition-all duration-500"
          style={{ fontSize: "0.95rem", fontWeight: 500, letterSpacing: "0.05em" }}
        >
          Book Now
        </button>
      </div>
    </section>
  );
}