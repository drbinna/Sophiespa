import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

const LOGO_URL = "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774083867/sophie_spa_logo_white_serif_irvlex.png";

const navLinks = [
  { label: "Home", type: "route" as const, to: "/" },
  { label: "About", type: "route" as const, to: "/about" },
  { label: "Treatments", type: "route" as const, to: "/treatments" },
  { label: "Services", type: "route" as const, to: "/services" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (link: (typeof navLinks)[0]) => {
    setMobileOpen(false);
    if (link.type === "route") {
      navigate(link.to);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(link.to)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(link.to)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/70 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:justify-center">
        {/* Mobile logo */}
        <button onClick={goHome} className="md:hidden bg-transparent border-none cursor-pointer p-0">
          <img
            src={LOGO_URL}
            alt="Sophie Spa"
            className="h-8 w-auto object-contain"
            style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
          />
        </button>

        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link)}
              className={`font-['Inter'] transition-all duration-300 backdrop-blur-md border rounded-full px-5 py-2 cursor-pointer ${
                scrolled
                  ? "text-[#2C2C2C]/80 hover:text-[#2C2C2C] bg-white/40 border-white/40 hover:bg-white/60"
                  : "text-white hover:text-white bg-white/25 border-white/40 hover:bg-white/40 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
              }`}
              style={{ fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.05em" }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className={`md:hidden bg-transparent border-none cursor-pointer p-2 rounded-full transition-all duration-300 ${
            scrolled
              ? "text-[#2C2C2C]"
              : "text-white bg-white/20 backdrop-blur-sm"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#FDF8F4]/95 backdrop-blur-xl border-t border-[#F5E6DC] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link)}
              className="font-['Inter'] text-[#2C2C2C]/70 text-left bg-transparent border-none cursor-pointer py-2"
              style={{ fontSize: "0.95rem" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}