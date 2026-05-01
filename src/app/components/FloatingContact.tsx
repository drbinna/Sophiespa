import { useState } from "react";
import { Phone, Mail, X, MessageCircle } from "lucide-react";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3">
      {/* Expanded contact options */}
      <div
        className={`flex flex-col gap-2 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Phone */}
        <a
          href="tel:+64272516985"
          className="flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          style={{ boxShadow: "0 8px 32px rgba(196,146,155,0.25)" }}
        >
          <Phone size={18} className="text-[#C4929B]" />
          <span
            className="font-['Inter'] text-[#2C2C2C] group-hover:text-[#C4929B] transition-colors"
            style={{ fontSize: "0.85rem", fontWeight: 400 }}
          >
            027 251 6985
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:sophiespa888@gmail.com?subject=Booking%20enquiry"
          className="flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          style={{ boxShadow: "0 8px 32px rgba(196,146,155,0.25)" }}
        >
          <Mail size={18} className="text-[#C4929B]" />
          <span
            className="font-['Inter'] text-[#2C2C2C] group-hover:text-[#C4929B] transition-colors"
            style={{ fontSize: "0.85rem", fontWeight: 400 }}
          >
            sophiespa888@gmail.com
          </span>
        </a>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#C4929B] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        style={{ boxShadow: "0 8px 32px rgba(196,146,155,0.4)" }}
        aria-label={isOpen ? "Close contact options" : "Contact Sophie"}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </button>
    </div>
  );
}
