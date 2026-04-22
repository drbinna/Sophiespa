import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { submitForm } from "../lib/submitForm";
import { useScrollReveal } from "./useScrollReveal";

const contactCards = [
  { icon: Phone, label: "Call", value: "(027) 251-6985", href: "tel:+64272516985" },
  { icon: Mail, label: "Email", value: "sophiespa888@gmail.com", href: "mailto:sophiespa888@gmail.com" },
  { icon: MapPin, label: "Service Area", value: "Greater Auckland" },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const ref = useScrollReveal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const submit = async () => {
    // Honeypot — silently drop bot submissions
    if (honeypot) {
      setStatus("success");
      setName(""); setEmail(""); setPhone(""); setMessage("");
      return;
    }
    setStatus("submitting");
    setErrorMsg(null);
    try {
      await submitForm({
        type: "contact",
        submittedAt: new Date().toISOString(),
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
      });
      setStatus("success");
      setName(""); setEmail(""); setPhone(""); setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const disabled = status === "submitting" || !name.trim() || !email.trim() || !message.trim();

  return (
    <section id="contact" className="bg-[#F5E6DC]/20" style={{ padding: "100px 0" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-6 scroll-reveal">
        <p
          className="text-center font-['Inter'] text-[#C4929B] mb-4"
          style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}
        >
          Your Journey Begins Here
        </p>
        <h2
          className="text-center font-['Cormorant_Garamond'] text-[#2C2C2C] mb-4"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400 }}
        >
          Get In Touch
        </h2>
        <p className="text-center font-['Inter'] text-[#2C2C2C]/50 mb-16" style={{ fontSize: "1rem", fontWeight: 300 }}>
          Let us guide you toward the perfect experience.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-start" style={{ gap: "60px" }}>
          {/* Left Column — Contact form */}
          <div className="lg:col-span-7">
            <div
              className="bg-white p-8 md:p-10"
              style={{ borderRadius: "14px", boxShadow: "0 8px 30px rgba(196, 146, 155, 0.12)" }}
            >
              {status === "success" ? (
                <div className="py-8 text-center">
                  <p
                    className="font-['Inter'] text-[#C4929B] mb-3"
                    style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}
                  >
                    Message sent
                  </p>
                  <h3
                    className="font-['Cormorant_Garamond'] text-[#2C2C2C] mb-3"
                    style={{ fontSize: "1.6rem", fontWeight: 400 }}
                  >
                    Thank you.
                  </h3>
                  <p
                    className="font-['Inter'] text-[#2C2C2C]/60 mb-6"
                    style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.6 }}
                  >
                    We'll be in touch shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="font-['Inter'] text-[#C4929B] bg-transparent border-none cursor-pointer underline"
                    style={{ fontSize: "0.85rem" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <p
                    className="font-['Inter'] text-[#C4929B] mb-1"
                    style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}
                  >
                    Send a message
                  </p>

                  <FormField label="Name">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg bg-[#FDF8F4] border border-[#F5E6DC] outline-none focus:border-[#C4929B] transition-colors font-['Inter'] text-[#2C2C2C]"
                      style={{ fontSize: "0.9rem" }}
                    />
                  </FormField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Email">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#FDF8F4] border border-[#F5E6DC] outline-none focus:border-[#C4929B] transition-colors font-['Inter'] text-[#2C2C2C]"
                        style={{ fontSize: "0.9rem" }}
                      />
                    </FormField>
                    <FormField label="Phone (optional)">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(027) ..."
                        className="w-full px-4 py-3 rounded-lg bg-[#FDF8F4] border border-[#F5E6DC] outline-none focus:border-[#C4929B] transition-colors font-['Inter'] text-[#2C2C2C]"
                        style={{ fontSize: "0.9rem" }}
                      />
                    </FormField>
                  </div>

                  <FormField label="Message">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help?"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-[#FDF8F4] border border-[#F5E6DC] outline-none focus:border-[#C4929B] transition-colors font-['Inter'] text-[#2C2C2C] resize-none"
                      style={{ fontSize: "0.9rem" }}
                    />
                  </FormField>

                  {status === "error" && errorMsg && (
                    <p className="font-['Inter'] text-red-600" style={{ fontSize: "0.85rem" }}>
                      {errorMsg}
                    </p>
                  )}

                  {/* Honeypot: bots fill this; real users don't see it */}
                  <div
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
                  >
                    <label>
                      Website (leave blank)
                      <input
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </label>
                  </div>

                  <button
                    onClick={submit}
                    disabled={disabled}
                    className="mt-2 px-8 py-3.5 rounded-full text-white cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      backgroundColor: "#C4929B",
                      boxShadow: "0 4px 16px rgba(196, 146, 155, 0.3)",
                    }}
                  >
                    {status === "submitting" ? "Sending..." : "Send message"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column — Contact Info (45%) */}
          <div className="lg:col-span-5 flex flex-col" style={{ gap: "12px" }}>
            {contactCards.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 transition-all duration-300 cursor-pointer"
                style={{
                  background: "rgba(196, 146, 155, 0.08)",
                  borderRadius: "12px",
                  padding: "20px 24px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(196, 146, 155, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <item.icon size={20} className="text-[#C4929B] flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p
                    className="font-['Inter'] text-[#C4929B]/60 mb-1"
                    style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-['Inter'] text-[#2C2C2C] no-underline hover:underline"
                      style={{ fontSize: "0.95rem", fontWeight: 450 }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-['Inter'] text-[#2C2C2C]" style={{ fontSize: "0.95rem", fontWeight: 450 }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Book an appointment CTA - opens the booking modal */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("sophie:open-booking"))}
              className="block text-center font-['Inter'] text-white transition-all duration-300 cursor-pointer border-none"
              style={{
                background: "#C4929B",
                borderRadius: "9999px",
                padding: "16px",
                fontSize: "0.95rem",
                fontWeight: 500,
                marginTop: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(196, 146, 155, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book an Appointment
            </button>

            {/* Hours */}
            <div
              className="mt-2 pt-5"
              style={{ borderTop: "1px solid rgba(196, 146, 155, 0.2)" }}
            >
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#C4929B] flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p
                    className="font-['Inter'] text-[#C4929B]/60 mb-1"
                    style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" }}
                  >
                    Hours
                  </p>
                  <p className="font-['Inter'] text-[#2C2C2C]" style={{ fontSize: "0.95rem", fontWeight: 450 }}>
                    Mon–Sat &nbsp; 9am – 7pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span
        className="font-['Inter'] text-[#C4929B]/70"
        style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}
