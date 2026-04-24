import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBtYXNzYWdlJTIwcmVsYXhhdGlvbnxlbnwxfHx8fDE3NzQxNjc4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Signature Massage",
    text: ["DEEP RELAXATION", "TAILORED TO YOU"],
    desc: "Choose from Swedish, deep tissue, or hot stone techniques — each session customised to your body's needs.",
    serviceId: "relaxation-massage",
  },
  {
    img: "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774171074/Gemini_Generated_Image_syjv4hsyjv4hsyjv_gfbpzs.png",
    label: "Hydra-Glow Facial",
    text: ["REVEAL YOUR", "NATURAL RADIANCE"],
    desc: "Multi-step facial combining deep cleansing, hydrating masks, and LED light therapy for luminous skin.",
    serviceId: "dermaplane-go",
  },
  {
    img: "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774170431/Soph_Exfo_mwep5s.jpg",
    label: "Body Botanical Scrub",
    text: ["POLISH, SOFTEN", "RENEW"],
    desc: "Full-body exfoliation ritual using hand-blended sugar and salt scrubs infused with essential oils.",
    serviceId: "botanical-scrub",
  },
  {
    img: "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774171377/Gemini_Generated_Image_2ys0xi2ys0xi2ys0_w7q9fq.png",
    label: "Couples Retreat",
    text: ["SHARED STILLNESS", "DEEPER CONNECTION"],
    desc: "A 120-minute luxury experience for two — side-by-side massages, mini facial, and aromatic foot soak.",
    serviceId: "not-sure",
  },
  {
    img: "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774170986/Gemini_Generated_Image_c597zfc597zfc597_ft7hrw.png",
    label: "Our Promise",
    text: ["ORGANIC, PURE", "& ECO-FRIENDLY"],
    desc: "Every product is certified organic and hypoallergenic. Sustainability isn't a buzzword for us — it's a promise.",
    serviceId: "not-sure",
  },
];

export function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (next: number, dir: "next" | "prev") => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setTimeout(() => setIsAnimating(false), 600);
      }, 50);
    },
    [isAnimating]
  );

  const nextSlide = () => goTo((current + 1) % slides.length, "next");
  const prevSlide = () => goTo((current - 1 + slides.length) % slides.length, "prev");

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [current, isAnimating]);

  return (
    <section id="treatments" className="relative w-full overflow-hidden bg-[#2C2C2C]" style={{ height: "85vh", minHeight: "520px" }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-[800ms] ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            transform: i === current ? "scale(1)" : "scale(1.08)",
            zIndex: i === current ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
          <div
            className="max-w-lg transition-all duration-700 ease-out"
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating
                ? `translateY(${direction === "next" ? "30px" : "-30px"})`
                : "translateY(0)",
            }}
          >
            <p
              className="font-['Inter'] text-[#C4929B] mb-4"
              style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" }}
            >
              {slides[current].label}
            </p>
            {slides[current].text.map((line, j) => (
              <h2
                key={j}
                className="font-['Cormorant_Garamond'] text-white"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.8rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: "0.04em",
                }}
              >
                {line}
              </h2>
            ))}
            <p
              className="font-['Inter'] text-white/60 mt-5 mb-8"
              style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.7, maxWidth: "380px" }}
            >
              {slides[current].desc}
            </p>
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("sophie:open-booking", {
                    detail: { serviceId: slides[current].serviceId },
                  })
                )
              }
              className="px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-['Inter'] cursor-pointer hover:bg-white/20 transition-all duration-300"
              style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.1em" }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute z-10 bottom-10 right-6 md:right-12 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 cursor-pointer bg-transparent"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 cursor-pointer bg-transparent"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Counter */}
      <div
        className="absolute z-10 bottom-14 left-6 md:left-12 font-['Inter'] text-white/40"
        style={{ fontSize: "0.75rem", fontWeight: 300, letterSpacing: "0.15em" }}
      >
        0{current + 1} / 0{slides.length}
      </div>

      {/* Progress dots */}
      <div className="absolute z-10 bottom-10 left-1/2 -translate-x-1/2 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            className="bg-transparent border-none cursor-pointer p-2"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div
              className="h-[2px] rounded-full transition-all duration-500"
              style={{
                width: i === current ? "32px" : "16px",
                backgroundColor: i === current ? "#C4929B" : "rgba(255,255,255,0.25)",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}