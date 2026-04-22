import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dd2yh56dr/video/upload/v1774147016/3_1_vpfwwg.mp4"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#1a1a1a]/50" />

      {/* Remove old background style, SVG elements, and floating particles */}
      {/* Gradient scrim overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to bottom, rgba(20,10,5,0.45) 0%, rgba(20,10,5,0.15) 40%, rgba(20,10,5,0.05) 60%, rgba(20,10,5,0.35) 100%)",
        }}
      />

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div
          className={`flex flex-col items-center text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src="https://res.cloudinary.com/dd2yh56dr/image/upload/v1774149873/final_hero_sacramento_mneyrz.png"
            alt="Sophie Spa"
            className="w-72 md:w-96 h-auto mb-10 object-contain"
          />
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("sophie:open-booking"))}
            className="px-10 py-4 rounded-full text-white cursor-pointer transition-all duration-500 group"
            style={{ fontSize: "0.95rem", fontWeight: 500, letterSpacing: "0.05em", backgroundColor: "#C4929B", boxShadow: "0 4px 24px rgba(196, 146, 155, 0.4)" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 32px rgba(196, 146, 155, 0.55)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(196, 146, 155, 0.4)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Book Your Escape
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#C4929B]/50 z-10">
        <ChevronDown size={28} />
      </div>

      <style>{`
      `}</style>
    </section>
  );
}