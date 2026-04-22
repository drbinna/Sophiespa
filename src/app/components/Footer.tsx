const LOGO_URL = "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774150828/final_footer_sacramento_white_m2ph1f.png";

const navLinks = ["About", "Treatments", "Pricing", "Testimonials", "FAQ", "Contact"];

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2C2C2C] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src={LOGO_URL} alt="Sophie Spa" className="h-10 w-auto object-contain mb-3" />
            <p className="font-['Inter'] text-white/50 mb-5" style={{ fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.6 }}>
              Premium mobile beauty and wellness — delivered to your door across Auckland.
            </p>
            <div className="flex gap-3">
              {["Instagram", "X", "YouTube", "TikTok"].map((s) => (
                <div key={s} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-[#C4929B]/30 transition-colors">
                  <span className="font-['Inter'] text-white/50" style={{ fontSize: "0.55rem", fontWeight: 500 }}>
                    {s.charAt(0)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-['Inter'] text-white mb-4" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className="text-left font-['Inter'] text-white/50 hover:text-[#C4929B] transition-colors bg-transparent border-none cursor-pointer"
                  style={{ fontSize: "0.85rem", fontWeight: 300 }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-['Inter'] text-white mb-4" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Contact
            </p>
            <div className="space-y-2 font-['Inter'] text-white/50" style={{ fontSize: "0.85rem", fontWeight: 300 }}>
              <p>(027) 251-6985</p>
              <p>sophiespa888@gmail.com</p>
              <p>Auckland, New Zealand</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <p className="font-['Inter'] text-white mb-4" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Hours
            </p>
            <div className="space-y-2 font-['Inter'] text-white/50" style={{ fontSize: "0.85rem", fontWeight: 300 }}>
              <p>Monday – Friday: 9am – 7pm</p>
              <p>Saturday: 10am – 6pm</p>
              <p>Sunday: By appointment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-center font-['Inter'] text-white/30" style={{ fontSize: "0.75rem", fontWeight: 300 }}>
            © 2026 Sophie Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}