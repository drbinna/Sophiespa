import { Leaf, Droplets, Recycle } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const values = [
  {
    icon: Leaf,
    name: "Organic",
    desc: "Every product we use is sourced from certified organic suppliers — no synthetics, no compromises. Your skin deserves ingredients born from nature.",
  },
  {
    icon: Droplets,
    name: "Hypoallergenic",
    desc: "Formulated for even the most sensitive skin. Our treatments are dermatologically tested and free from common irritants and allergens.",
  },
  {
    icon: Recycle,
    name: "Eco-Friendly",
    desc: "From biodegradable packaging to carbon-neutral operations, sustainability isn't a buzzword for us — it's a promise.",
  },
];

export function Values() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F5E6DC]/30">
      <div ref={ref} className="max-w-6xl mx-auto px-6 scroll-reveal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <div
              key={v.name}
              className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <v.icon className="mx-auto mb-5 text-[#C4929B]" size={32} strokeWidth={1.2} />
              <h3
                className="font-['Inter'] text-[#2C2C2C] mb-3"
                style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}
              >
                {v.name}
              </h3>
              <p className="font-['Inter'] text-[#2C2C2C]/55" style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.7 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
