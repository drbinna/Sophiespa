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
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link)}
              className="font-['Inter'] text-[#2C2C2C]/70 hover:text-[#2C2C2C] transition-all duration-300 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2 cursor-pointer hover:bg-white/35 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              style={{ fontSize: "0.85rem", fontWeight: 400, letterSpacing: "0.05em" }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-[#2C2C2C] bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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