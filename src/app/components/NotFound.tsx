import { Phone, Mail, Home } from "lucide-react";
import { Link } from "react-router";

export function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#FDF8F4] px-6">
      <div className="text-center max-w-md">
        <p
          className="font-['Inter'] text-[#C4929B] mb-4"
          style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}
        >
          Page Not Found
        </p>
        <h1
          className="font-['Cormorant_Garamond'] text-[#2C2C2C] mb-6"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
        >
          Oops, we couldn't find that page
        </h1>
        <p
          className="font-['Inter'] text-[#2C2C2C]/55 mb-8"
          style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.7 }}
        >
          It looks like this page has moved or doesn't exist. Let's get you back on track — or reach out to Sophie directly.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white transition-all duration-300 hover:shadow-lg mb-8"
          style={{
            backgroundColor: "#C4929B",
            fontSize: "0.9rem",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          <Home size={16} />
          Back to Home
        </Link>

        <div
          className="p-6 rounded-2xl"
          style={{
            background: "rgba(196,146,155,0.06)",
            border: "0.5px solid rgba(196,146,155,0.1)",
          }}
        >
          <p
            className="font-['Cormorant_Garamond'] text-[#2C2C2C] mb-3"
            style={{ fontSize: "1.1rem", fontWeight: 400 }}
          >
            Need help? Give Sophie a call
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
              href="mailto:sophiespa888@gmail.com"
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
