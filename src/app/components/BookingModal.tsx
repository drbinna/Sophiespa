import { useEffect, useMemo, useState } from "react";
import { X, ArrowLeft, Check, Calendar as CalendarIcon } from "lucide-react";
import { submitForm } from "../lib/submitForm";

/**
 * Dispatch this anywhere to open the booking modal:
 *   window.dispatchEvent(new CustomEvent("sophie:open-booking"))
 *
 * Optional service preselect:
 *   window.dispatchEvent(new CustomEvent("sophie:open-booking", {
 *     detail: { serviceId: "hot-stone" }
 *   }))
 */
export const OPEN_BOOKING_EVENT = "sophie:open-booking";

// ——— Service catalogue (prices from Treatments.tsx) ———
// `category` lets us group cards with a subheading.

type Service = {
  id: string;
  name: string;
  category: "Massage" | "Facial" | "Body" | "Other";
  duration: string;        // display string ("60 min")
  durationMinutes: number; // used for the .ics DTEND
  price: string;           // display string ("$75")
  description: string;
  thumb?: string;          // optional thumbnail URL
};

const SERVICES: Service[] = [
  // Massage
  {
    id: "relaxation-massage",
    name: "Relaxation Massage",
    category: "Massage",
    duration: "60 / 90 / 120 min",
    durationMinutes: 60,
    price: "From $170",
    description: "Full-body unwind with light to medium pressure and warm aromatherapy towels.",
    thumb: "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774780020/sophie-spa-massage-hero-cropped_urb3rf.jpg",
  },
  {
    id: "swedish-remedial",
    name: "Swedish Remedial Massage",
    category: "Massage",
    duration: "60 / 90 / 120 min",
    durationMinutes: 60,
    price: "From $170",
    description: "Classic Swedish strokes blended with targeted remedial work — medium to firm.",
    thumb: "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774779362/sophie-spa-massage-facial-touch_gsrage.jpg",
  },
  {
    id: "deep-tissue-sports",
    name: "Deep Tissue & Sports Massage",
    category: "Massage",
    duration: "60 / 90 / 120 min",
    durationMinutes: 60,
    price: "From $170",
    description: "Firm deep pressure for tight muscles, trigger points, and sports recovery.",
    thumb: "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774779685/u5442978949_Sports_massage_--raw_--stylize_0_--v_7_a821c5e2-6d1e-41ba-ad4e-e8717c8bb2d3_0_xadqch.png",
  },
  {
    id: "hot-stone",
    name: "Hot Stone Ceremony",
    category: "Massage",
    duration: "50 min",
    durationMinutes: 50,
    price: "$60",
    description: "Warmed basalt stones melt deep, chronic tension.",
    thumb: "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774175780/Gemini_Generated_Image_3sg8t13sg8t13sg8_hrh7ks.png",
  },
  // Facial
  {
    id: "dermaplane-go",
    name: "Dermaplane Glow n Go",
    category: "Facial",
    duration: "60 min",
    durationMinutes: 60,
    price: "$179",
    description: "Dermaplane exfoliation for instant glow — brightens and smooths.",
    thumb: "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774176768/facial_photo_no_watermark_dzshxv.png",
  },
  {
    id: "holistic-foot",
    name: "Holistic Facial & Foot Ritual",
    category: "Facial",
    duration: "75 min",
    durationMinutes: 75,
    price: "$189",
    description: "A grounding facial paired with a restorative foot ritual.",
    thumb: "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774779362/sophie-spa-massage-facial-touch_gsrage.jpg",
  },
  {
    id: "dermaplane-super",
    name: "Dermaplane Super Glow",
    category: "Facial",
    duration: "90 min",
    durationMinutes: 90,
    price: "$229",
    description: "The full facial experience — dermaplaning, mask, massage, finish.",
    thumb: "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774176768/facial_photo_no_watermark_dzshxv.png",
  },
  // Body
  {
    id: "botanical-scrub",
    name: "Botanical Body Scrub",
    category: "Body",
    duration: "40 min",
    durationMinutes: 40,
    price: "$70",
    description: "Plant-based exfoliation that leaves skin soft and renewed.",
    thumb: "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774177218/u5442978949_Exfoliation_--v_7_a8f1b527-1dc7-4d7f-808c-36227825b856_0_bkxwgc.png",
  },
  {
    id: "salt-oil-revival",
    name: "Salt & Oil Revival",
    category: "Body",
    duration: "55 min",
    durationMinutes: 55,
    price: "$90",
    description: "Mineral salt polish followed by a deeply nourishing oil massage.",
    thumb: "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774170431/Soph_Exfo_mwep5s.jpg",
  },
  {
    id: "gentle-polish",
    name: "Gentle Glow Polish",
    category: "Body",
    duration: "60 min",
    durationMinutes: 60,
    price: "$85",
    description: "A softer, sensitive-skin-friendly version of our body polish.",
    thumb: "https://res.cloudinary.com/dd2yh56dr/image/upload/v1774170986/Gemini_Generated_Image_c597zfc597zfc597_ft7hrw.png",
  },
  // Other
  {
    id: "not-sure",
    name: "Not sure — help me choose",
    category: "Other",
    duration: "—",
    durationMinutes: 60,
    price: "—",
    description: "Tell us a bit about what you're after and we'll recommend.",
  },
];

const TIME_WINDOWS = [
  { value: "morning",   label: "Morning",   sublabel: "9am – 12pm", startHour: 10 },
  { value: "afternoon", label: "Afternoon", sublabel: "12pm – 4pm", startHour: 14 },
  { value: "evening",   label: "Evening",   sublabel: "4pm – 7pm",  startHour: 17 },
];

// ——— Add-on catalogue (mirrors the Treatments page) ———
type AddOn = {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
};

const ADDONS: AddOn[] = [
  {
    id: "eye-revival",
    name: "Eye Revival",
    duration: "20 mins",
    price: "$25",
    description: "Soothing lymphatic massage, eye mask, warm compress and hydrating eye cream.",
  },
  {
    id: "scalp-melt",
    name: "Heavenly Scalp Melt",
    duration: "15 mins",
    price: "$25",
    description: "A blissful scalp massage for heavenly relaxation.",
  },
  {
    id: "facial-reflexology",
    name: "Facial Reflexology Massage",
    duration: "25 mins",
    price: "$45",
    description: "Facial reflexology with a high-quality skin balm — melts tension and promotes a radiant glow.",
  },
  {
    id: "face-neck-shoulder-scalp",
    name: "Face, Neck, Shoulder & Scalp Melt",
    duration: "30 mins",
    price: "$65",
    description: "A deeply indulgent ritual melting tension from face, neck, shoulders, and scalp.",
  },
  {
    id: "foot-ritual",
    name: "Sole Revival Foot Ritual",
    duration: "—",
    price: "$50",
    description: "Warm botanical foot soak, sugar scrub and mineral salts to leave feet refreshed.",
  },
  {
    id: "back-scrub",
    name: "Back Scrub & Hot Towel",
    duration: "15 mins",
    price: "$25",
    description: "Sugar exfoliation on the back, finished with hot towels.",
  },
  {
    id: "full-body-glow-ritual",
    name: "Full Body Glow Ritual",
    duration: "40 mins",
    price: "$60",
    description: "Dry body brushing, warm oil & salt exfoliation to smooth and revitalise the skin. Finished with hot towels.",
  },
];

type Step = 1 | 2 | 3 | 4;
type Status = "idle" | "submitting" | "success" | "error";

export function BookingModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Step 1
  const [serviceId, setServiceId] = useState<string>("");
  // Step 2
  const [preferredDate, setPreferredDate] = useState("");
  const [timeWindow, setTimeWindow] = useState<string>("morning");
  // Step 3 — Add-ons (optional)
  const [addOnIds, setAddOnIds] = useState<string[]>([]);
  // Step 4
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [bookingForSomeoneElse, setBookingForSomeoneElse] = useState(false);
  const [recipientName, setRecipientName] = useState("");
  const [honeypot, setHoneypot] = useState(""); // bot trap — must stay empty

  // Success payload (kept so the confirmation screen can show .ics details
  // and summary even if form state is reset)
  const [submittedSnapshot, setSubmittedSnapshot] = useState<{
    service: Service;
    date: string;
    timeWindow: string;
    name: string;
    phone: string;
    email: string;
    addOns: AddOn[];
  } | null>(null);

  const selectedService = useMemo(
    () => SERVICES.find((s) => s.id === serviceId),
    [serviceId]
  );
  const selectedWindow = useMemo(
    () => TIME_WINDOWS.find((w) => w.value === timeWindow)!,
    [timeWindow]
  );

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ serviceId?: string }>).detail;
      if (detail?.serviceId && SERVICES.some((s) => s.id === detail.serviceId)) {
        setServiceId(detail.serviceId);
      }
      setOpen(true);
      setStep(1);
      setStatus("idle");
      setErrorMsg(null);
    };
    window.addEventListener(OPEN_BOOKING_EVENT, handler);
    return () => window.removeEventListener(OPEN_BOOKING_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const reset = () => {
    setStep(1);
    setServiceId("");
    setPreferredDate("");
    setTimeWindow("morning");
    setAddOnIds([]);
    setName("");
    setPhone("");
    setEmail("");
    setNotes("");
    setBookingForSomeoneElse(false);
    setRecipientName("");
    setHoneypot("");
    setSubmittedSnapshot(null);
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => {
      if (status === "success") reset();
      setStatus("idle");
      setErrorMsg(null);
    }, 300);
  };

  const canAdvanceFrom1 = Boolean(selectedService);
  const canAdvanceFrom2 = Boolean(preferredDate && timeWindow);
  const canAdvanceFrom3 = true; // Add-ons are optional, can always continue
  const canSubmit =
    Boolean(name.trim()) &&
    Boolean(phone.trim()) &&
    (!bookingForSomeoneElse || recipientName.trim().length > 0) &&
    status !== "submitting";

  const selectedAddOns = useMemo(
    () => ADDONS.filter((a) => addOnIds.includes(a.id)),
    [addOnIds]
  );

  const toggleAddOn = (id: string) => {
    setAddOnIds((curr) =>
      curr.includes(id) ? curr.filter((x) => x !== id) : [...curr, id]
    );
  };

  const submit = async () => {
    if (honeypot) {
      // Silent drop — pretend success so the bot moves on, but don't actually send.
      setSubmittedSnapshot({
        service: selectedService!,
        date: preferredDate,
        timeWindow,
        name, phone, email,
        addOns: selectedAddOns,
      });
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMsg(null);
    try {
      await submitForm({
        type: "booking",
        submittedAt: new Date().toISOString(),
        service: selectedService!.name,
        serviceId: selectedService!.id,
        duration: selectedService!.duration,
        price: selectedService!.price,
        preferredDate,
        timeWindow,
        timeWindowLabel: selectedWindow.label,
        timeWindowSublabel: selectedWindow.sublabel,
        addOns: selectedAddOns.map((a) => `${a.name} (${a.price})`).join(", "),
        addOnIds: addOnIds.join(","),
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        notes: notes.trim(),
        bookingForSomeoneElse,
        recipientName: bookingForSomeoneElse ? recipientName.trim() : "",
      });
      setSubmittedSnapshot({
        service: selectedService!,
        date: preferredDate,
        timeWindow,
        name, phone, email,
        addOns: selectedAddOns,
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (!open) return null;

  const todayIso = new Date().toISOString().slice(0, 10);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(20, 10, 5, 0.55)", backdropFilter: "blur(4px)" }}
      onClick={close}
    >
      <div
        className="bg-[#FDF8F4] w-full max-w-2xl max-h-[92vh] overflow-y-auto relative"
        style={{ borderRadius: 14, boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-transparent border-none cursor-pointer text-[#2C2C2C]/50 hover:text-[#2C2C2C] transition-colors z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {status === "success" && submittedSnapshot ? (
          <SuccessScreen snapshot={submittedSnapshot} onClose={close} />
        ) : (
          <div className="px-6 sm:px-10 pt-10 pb-8">
            <Header step={step} />

            {step === 1 && (
              <ServiceStep
                selectedId={serviceId}
                onSelect={(id) => setServiceId(id)}
              />
            )}

            {step === 2 && (
              <DateTimeStep
                service={selectedService}
                preferredDate={preferredDate}
                onDate={setPreferredDate}
                timeWindow={timeWindow}
                onTimeWindow={setTimeWindow}
                todayIso={todayIso}
              />
            )}

            {step === 3 && (
              <AddOnStep
                selectedIds={addOnIds}
                onToggle={toggleAddOn}
              />
            )}

            {step === 4 && (
              <ContactStep
                name={name} onName={setName}
                phone={phone} onPhone={setPhone}
                email={email} onEmail={setEmail}
                notes={notes} onNotes={setNotes}
                forSomeoneElse={bookingForSomeoneElse}
                onForSomeoneElse={setBookingForSomeoneElse}
                recipientName={recipientName}
                onRecipientName={setRecipientName}
                honeypot={honeypot}
                onHoneypot={setHoneypot}
              />
            )}

            {status === "error" && errorMsg && (
              <p className="font-['Inter'] text-red-600 mt-4" style={{ fontSize: "0.85rem" }}>
                {errorMsg}
              </p>
            )}

            {/* Footer nav */}
            <div className="mt-8 flex items-center justify-between gap-4">
              <div>
                {step > 1 && (
                  <button
                    onClick={() => setStep((s) => (s - 1) as Step)}
                    className="flex items-center gap-1.5 font-['Inter'] text-[#2C2C2C]/60 hover:text-[#2C2C2C] bg-transparent border-none cursor-pointer px-2 py-1"
                    style={{ fontSize: "0.85rem" }}
                  >
                    <ArrowLeft size={15} /> Back
                  </button>
                )}
              </div>

              {step < 4 ? (
                <div className="flex items-center gap-3">
                  {step === 3 && addOnIds.length === 0 && (
                    <button
                      onClick={() => setStep(4)}
                      className="font-['Inter'] text-[#2C2C2C]/55 hover:text-[#2C2C2C] bg-transparent border-none cursor-pointer underline px-2 py-1"
                      style={{ fontSize: "0.85rem", textUnderlineOffset: "3px" }}
                    >
                      Skip — no add-ons
                    </button>
                  )}
                  <button
                    onClick={() => setStep((s) => (s + 1) as Step)}
                    disabled={
                      step === 1 ? !canAdvanceFrom1
                      : step === 2 ? !canAdvanceFrom2
                      : !canAdvanceFrom3
                    }
                    className="px-8 py-3 rounded-full text-white cursor-pointer transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      backgroundColor: "#C4929B",
                      boxShadow: "0 4px 16px rgba(196, 146, 155, 0.3)",
                    }}
                  >
                    {step === 3 && addOnIds.length > 0
                      ? `Continue with ${addOnIds.length} add-on${addOnIds.length > 1 ? "s" : ""} →`
                      : "Continue →"}
                  </button>
                </div>
              ) : (
                <button
                  onClick={submit}
                  disabled={!canSubmit}
                  className="px-8 py-3 rounded-full text-white cursor-pointer transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    backgroundColor: "#C4929B",
                    boxShadow: "0 4px 16px rgba(196, 146, 155, 0.3)",
                  }}
                >
                  {status === "submitting" ? "Sending..." : "Send booking request"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ———————————————————————————————————————————————————————————————
// Sub-components
// ———————————————————————————————————————————————————————————————

function Header({ step }: { step: Step }) {
  const titles: Record<Step, { eyebrow: string; heading: string }> = {
    1: { eyebrow: "Book your escape · Step 1 of 4", heading: "What would you like?" },
    2: { eyebrow: "Book your escape · Step 2 of 4", heading: "When works for you?" },
    3: { eyebrow: "Book your escape · Step 3 of 4", heading: "Add a little extra bliss?" },
    4: { eyebrow: "Book your escape · Step 4 of 4", heading: "How do we reach you?" },
  };
  return (
    <>
      <p
        className="font-['Inter'] text-[#C4929B] mb-3"
        style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}
      >
        {titles[step].eyebrow}
      </p>
      <h3
        className="font-['Cormorant_Garamond'] text-[#2C2C2C] mb-6"
        style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 400 }}
      >
        {titles[step].heading}
      </h3>
      {/* Progress dots */}
      <div className="flex items-center gap-2 mb-8" aria-label={`Step ${step} of 4`}>
        {[1, 2, 3, 4].map((n) => (
          <span
            key={n}
            className="h-[3px] rounded-full transition-all duration-500"
            style={{
              width: n === step ? 32 : 16,
              background: n <= step ? "#C4929B" : "rgba(196,146,155,0.25)",
            }}
          />
        ))}
      </div>
    </>
  );
}

function ServiceStep({
  selectedId,
  onSelect,
}: {
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const groups: { category: Service["category"]; items: Service[] }[] = [
    { category: "Massage", items: SERVICES.filter((s) => s.category === "Massage") },
    { category: "Facial",  items: SERVICES.filter((s) => s.category === "Facial") },
    { category: "Body",    items: SERVICES.filter((s) => s.category === "Body") },
    { category: "Other",   items: SERVICES.filter((s) => s.category === "Other") },
  ];

  return (
    <div className="flex flex-col gap-6">
      {groups.map((g) => (
        <div key={g.category}>
          <p
            className="font-['Inter'] text-[#2C2C2C]/40 mb-3"
            style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}
          >
            {g.category}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {g.items.map((s) => {
              const selected = s.id === selectedId;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelect(s.id)}
                  className="text-left bg-white border cursor-pointer transition-all duration-200 flex gap-3 p-3"
                  style={{
                    borderRadius: 12,
                    borderColor: selected ? "#C4929B" : "rgba(196,146,155,0.15)",
                    boxShadow: selected ? "0 4px 16px rgba(196,146,155,0.2)" : "none",
                  }}
                >
                  {s.thumb ? (
                    <div
                      className="w-14 h-14 flex-shrink-0 bg-[#F5E6DC] overflow-hidden"
                      style={{ borderRadius: 8 }}
                    >
                      <img src={s.thumb} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <div
                      className="w-14 h-14 flex-shrink-0 bg-[#F5E6DC] flex items-center justify-center"
                      style={{ borderRadius: 8 }}
                    >
                      <span className="font-['Cormorant_Garamond'] text-[#C4929B]" style={{ fontSize: "1.5rem" }}>
                        ?
                      </span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-['Inter'] text-[#2C2C2C] truncate"
                      style={{ fontSize: "0.9rem", fontWeight: 500 }}
                    >
                      {s.name}
                    </p>
                    <p
                      className="font-['Inter'] text-[#2C2C2C]/50 mt-0.5"
                      style={{ fontSize: "0.75rem", lineHeight: 1.4 }}
                    >
                      {s.description}
                    </p>
                    {s.duration !== "—" && (
                      <p
                        className="font-['Inter'] text-[#C4929B] mt-1"
                        style={{ fontSize: "0.75rem", fontWeight: 500 }}
                      >
                        {s.duration} · {s.price}
                      </p>
                    )}
                  </div>
                  {selected && (
                    <div className="flex-shrink-0 flex items-start pt-1">
                      <span className="w-5 h-5 rounded-full bg-[#C4929B] flex items-center justify-center">
                        <Check size={12} className="text-white" strokeWidth={3} />
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function DateTimeStep({
  service,
  preferredDate,
  onDate,
  timeWindow,
  onTimeWindow,
  todayIso,
}: {
  service: Service | undefined;
  preferredDate: string;
  onDate: (v: string) => void;
  timeWindow: string;
  onTimeWindow: (v: string) => void;
  todayIso: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      {service && (
        <div
          className="flex items-center gap-3 p-3 bg-white"
          style={{ borderRadius: 10, border: "1px solid rgba(196,146,155,0.15)" }}
        >
          {service.thumb && (
            <img
              src={service.thumb}
              alt=""
              className="w-10 h-10 object-cover"
              style={{ borderRadius: 6 }}
            />
          )}
          <div className="flex-1">
            <p className="font-['Inter'] text-[#2C2C2C]" style={{ fontSize: "0.85rem", fontWeight: 500 }}>
              {service.name}
            </p>
            {service.duration !== "—" && (
              <p className="font-['Inter'] text-[#C4929B]" style={{ fontSize: "0.75rem" }}>
                {service.duration} · {service.price}
              </p>
            )}
          </div>
        </div>
      )}

      <Field label="Preferred date">
        <input
          type="date"
          min={todayIso}
          value={preferredDate}
          onChange={(e) => onDate(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white border border-[#F5E6DC] outline-none focus:border-[#C4929B] transition-colors font-['Inter'] text-[#2C2C2C]"
          style={{ fontSize: "0.9rem" }}
        />
      </Field>

      <Field label="Preferred time">
        <div className="grid grid-cols-3 gap-2">
          {TIME_WINDOWS.map((w) => {
            const selected = w.value === timeWindow;
            return (
              <button
                key={w.value}
                onClick={() => onTimeWindow(w.value)}
                className="text-left bg-white border cursor-pointer transition-all duration-200 p-3"
                style={{
                  borderRadius: 10,
                  borderColor: selected ? "#C4929B" : "rgba(196,146,155,0.15)",
                  boxShadow: selected ? "0 2px 10px rgba(196,146,155,0.18)" : "none",
                }}
              >
                <p
                  className="font-['Inter'] text-[#2C2C2C]"
                  style={{ fontSize: "0.85rem", fontWeight: 500 }}
                >
                  {w.label}
                </p>
                <p
                  className="font-['Inter'] text-[#2C2C2C]/50 mt-0.5"
                  style={{ fontSize: "0.7rem" }}
                >
                  {w.sublabel}
                </p>
              </button>
            );
          })}
        </div>
      </Field>

      <p
        className="font-['Inter'] text-[#2C2C2C]/50 text-center"
        style={{ fontSize: "0.78rem", lineHeight: 1.5 }}
      >
        We'll confirm your exact time within 24 hours.<br />
        Availability isn't shown live.
      </p>
    </div>
  );
}

function ContactStep({
  name, onName,
  phone, onPhone,
  email, onEmail,
  notes, onNotes,
  forSomeoneElse, onForSomeoneElse,
  recipientName, onRecipientName,
  honeypot, onHoneypot,
}: {
  name: string; onName: (v: string) => void;
  phone: string; onPhone: (v: string) => void;
  email: string; onEmail: (v: string) => void;
  notes: string; onNotes: (v: string) => void;
  forSomeoneElse: boolean; onForSomeoneElse: (v: boolean) => void;
  recipientName: string; onRecipientName: (v: string) => void;
  honeypot: string; onHoneypot: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Field label="Your name">
        <input
          type="text"
          value={name}
          onChange={(e) => onName(e.target.value)}
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-lg bg-white border border-[#F5E6DC] outline-none focus:border-[#C4929B] transition-colors font-['Inter'] text-[#2C2C2C]"
          style={{ fontSize: "0.9rem" }}
          autoComplete="name"
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Phone *">
          <input
            type="tel"
            value={phone}
            onChange={(e) => onPhone(e.target.value)}
            placeholder="(027) ..."
            className="w-full px-4 py-3 rounded-lg bg-white border border-[#F5E6DC] outline-none focus:border-[#C4929B] transition-colors font-['Inter'] text-[#2C2C2C]"
            style={{ fontSize: "0.9rem" }}
            autoComplete="tel"
          />
        </Field>
        <Field label="Email (optional)">
          <input
            type="email"
            value={email}
            onChange={(e) => onEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg bg-white border border-[#F5E6DC] outline-none focus:border-[#C4929B] transition-colors font-['Inter'] text-[#2C2C2C]"
            style={{ fontSize: "0.9rem" }}
            autoComplete="email"
          />
        </Field>
      </div>

      <label className="flex items-center gap-2 cursor-pointer select-none mt-1">
        <input
          type="checkbox"
          checked={forSomeoneElse}
          onChange={(e) => onForSomeoneElse(e.target.checked)}
          className="accent-[#C4929B] w-4 h-4 cursor-pointer"
        />
        <span className="font-['Inter'] text-[#2C2C2C]/70" style={{ fontSize: "0.85rem" }}>
          I'm booking this for someone else (gift)
        </span>
      </label>

      {forSomeoneElse && (
        <Field label="Recipient's name">
          <input
            type="text"
            value={recipientName}
            onChange={(e) => onRecipientName(e.target.value)}
            placeholder="Who is this treatment for?"
            className="w-full px-4 py-3 rounded-lg bg-white border border-[#F5E6DC] outline-none focus:border-[#C4929B] transition-colors font-['Inter'] text-[#2C2C2C]"
            style={{ fontSize: "0.9rem" }}
          />
        </Field>
      )}

      <Field label="Notes (optional)">
        <textarea
          value={notes}
          onChange={(e) => onNotes(e.target.value)}
          placeholder="Anything we should know? Allergies, preferences, address details..."
          rows={3}
          className="w-full px-4 py-3 rounded-lg bg-white border border-[#F5E6DC] outline-none focus:border-[#C4929B] transition-colors font-['Inter'] text-[#2C2C2C] resize-none"
          style={{ fontSize: "0.9rem" }}
        />
      </Field>

      {/* Honeypot: real users won't see this; bots fill it and get silently dropped */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label>
          Website (leave blank)
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => onHoneypot(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

// ———————————————————————————————————————————————————————————————
// Step 3 — Add-on upsell
// ———————————————————————————————————————————————————————————————
function AddOnStep({
  selectedIds,
  onToggle,
}: {
  selectedIds: string[];
  onToggle: (id: string) => void;
}) {
  const total = useMemo(() => {
    return ADDONS.filter((a) => selectedIds.includes(a.id)).reduce((sum, a) => {
      const num = parseInt(a.price.replace(/[^0-9]/g, ""), 10);
      return Number.isNaN(num) ? sum : sum + num;
    }, 0);
  }, [selectedIds]);

  return (
    <div>
      <p
        className="font-['Cormorant_Garamond'] text-[#C4929B] mb-6 italic"
        style={{ fontSize: "1.05rem", lineHeight: 1.5 }}
      >
        Many guests love to enhance their treatment with one of these little extras —
        entirely optional, and yours to choose.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {ADDONS.map((a) => {
          const selected = selectedIds.includes(a.id);
          return (
            <button
              key={a.id}
              onClick={() => onToggle(a.id)}
              aria-pressed={selected}
              className="text-left bg-white border cursor-pointer transition-all duration-200 relative"
              style={{
                borderRadius: 10,
                padding: "12px 14px",
                paddingRight: 36,
                borderColor: selected ? "#C4929B" : "rgba(196,146,155,0.15)",
                boxShadow: selected ? "0 4px 16px rgba(196,146,155,0.18)" : "none",
              }}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <p
                  className="font-['Inter'] text-[#2C2C2C]"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    letterSpacing: "-0.005em",
                    lineHeight: 1.25,
                  }}
                >
                  {a.name}
                </p>
                <span
                  className="font-['Inter'] text-[#C4929B] shrink-0"
                  style={{ fontSize: "0.85rem", fontWeight: 600, whiteSpace: "nowrap" }}
                >
                  +{a.price}
                </span>
              </div>
              {a.duration && a.duration !== "—" && (
                <p
                  className="font-['Inter'] text-[#2C2C2C]/35 uppercase mb-1.5"
                  style={{ fontSize: "0.625rem", letterSpacing: "0.12em" }}
                >
                  {a.duration}
                </p>
              )}
              <p
                className="font-['Inter'] text-[#2C2C2C]/55"
                style={{ fontSize: "0.75rem", lineHeight: 1.5 }}
              >
                {a.description}
              </p>
              {selected && (
                <span
                  className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#C4929B] flex items-center justify-center"
                  style={{ boxShadow: "0 2px 6px rgba(196,146,155,0.3)" }}
                  aria-hidden="true"
                >
                  <Check size={11} className="text-white" strokeWidth={3} />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {selectedIds.length > 0 && (
        <div
          className="mt-5 flex items-center justify-between rounded-lg px-4 py-3"
          style={{
            background: "rgba(196,146,155,0.08)",
            border: "1px solid rgba(196,146,155,0.18)",
          }}
        >
          <span
            className="font-['Inter'] text-[#2C2C2C]/70"
            style={{ fontSize: "0.8rem" }}
          >
            {selectedIds.length} add-on{selectedIds.length > 1 ? "s" : ""} selected
          </span>
          <span
            className="font-['Inter'] text-[#C4929B]"
            style={{ fontSize: "0.95rem", fontWeight: 600 }}
          >
            +${total}
          </span>
        </div>
      )}
    </div>
  );
}

function SuccessScreen({
  snapshot,
  onClose,
}: {
  snapshot: {
    service: Service;
    date: string;
    timeWindow: string;
    name: string;
    phone: string;
    email: string;
    addOns: AddOn[];
  };
  onClose: () => void;
}) {
  const windowMeta = TIME_WINDOWS.find((w) => w.value === snapshot.timeWindow)!;
  const prettyDate = snapshot.date
    ? new Date(snapshot.date + "T00:00").toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : "";

  const handleAddToCalendar = () => {
    const ics = buildIcs(snapshot, windowMeta);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sophie-spa-${snapshot.service.id}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="px-6 sm:px-10 pt-12 pb-10 text-center">
      <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(196, 146, 155, 0.15)" }}>
        <Check size={24} className="text-[#C4929B]" strokeWidth={2} />
      </div>
      <p
        className="font-['Inter'] text-[#C4929B] mb-3"
        style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}
      >
        Booking received
      </p>
      <h3
        className="font-['Cormorant_Garamond'] text-[#2C2C2C] mb-5"
        style={{ fontSize: "1.8rem", fontWeight: 400 }}
      >
        Thank you, {snapshot.name.split(" ")[0] || "friend"}.
      </h3>

      {/* Summary card */}
      <div
        className="bg-white text-left mx-auto mb-5 max-w-sm"
        style={{ borderRadius: 12, padding: "16px 20px", border: "1px solid rgba(196,146,155,0.15)" }}
      >
        <Summary label="Treatment" value={snapshot.service.name} />
        {snapshot.service.duration !== "—" && (
          <Summary label="Duration" value={`${snapshot.service.duration} · ${snapshot.service.price}`} />
        )}
        {prettyDate && <Summary label="Date" value={prettyDate} />}
        <Summary label="Time" value={`${windowMeta.label} (${windowMeta.sublabel})`} />
        {snapshot.addOns.length > 0 && (
          <div
            className="mt-2 pt-2"
            style={{ borderTop: "1px solid rgba(196,146,155,0.12)" }}
          >
            <p
              className="font-['Inter'] text-[#2C2C2C]/40 mb-1"
              style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Add-ons
            </p>
            {snapshot.addOns.map((a) => (
              <div key={a.id} className="flex justify-between gap-4 py-0.5">
                <span className="font-['Inter'] text-[#2C2C2C]" style={{ fontSize: "0.85rem" }}>
                  {a.name}
                </span>
                <span className="font-['Inter'] text-[#C4929B]" style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                  +{a.price}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <p
        className="font-['Inter'] text-[#2C2C2C]/60 mb-6 mx-auto max-w-md"
        style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.6 }}
      >
        We'll call or text you at {snapshot.phone} within 24 hours to confirm your exact appointment time.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
        <button
          onClick={handleAddToCalendar}
          className="flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer transition-all duration-300 font-['Inter']"
          style={{
            fontSize: "0.85rem",
            fontWeight: 500,
            background: "white",
            color: "#2C2C2C",
            border: "1px solid rgba(196,146,155,0.3)",
          }}
        >
          <CalendarIcon size={15} /> Add placeholder to calendar
        </button>
        <button
          onClick={onClose}
          className="px-8 py-3 rounded-full text-white cursor-pointer transition-all duration-300"
          style={{
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            backgroundColor: "#C4929B",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-1.5">
      <span
        className="font-['Inter'] text-[#2C2C2C]/40"
        style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}
      >
        {label}
      </span>
      <span className="font-['Inter'] text-[#2C2C2C] text-right" style={{ fontSize: "0.85rem" }}>
        {value}
      </span>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
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

// ——— .ics generation ———
//
// We only have a date and a time window, not an exact time. The .ics is a
// *placeholder* — we pick the start hour for the window and the duration from
// the chosen service. Floating time (no TZID, no Z) is used so the event opens
// at the same wall-clock time in whatever zone the user's calendar is set to,
// which for Auckland users is what they'd expect.

function buildIcs(
  snapshot: {
    service: Service;
    date: string;
    timeWindow: string;
    name: string;
  },
  windowMeta: { startHour: number }
): string {
  const [y, m, d] = snapshot.date.split("-").map(Number);
  const startHour = windowMeta.startHour;
  const startDate = new Date(y, (m ?? 1) - 1, d ?? 1, startHour, 0, 0);
  const endDate = new Date(startDate.getTime() + snapshot.service.durationMinutes * 60 * 1000);

  const fmt = (dt: Date) => {
    const pad = (n: number) => String(n).padStart(2, "0");
    return (
      dt.getFullYear().toString() +
      pad(dt.getMonth() + 1) +
      pad(dt.getDate()) +
      "T" +
      pad(dt.getHours()) +
      pad(dt.getMinutes()) +
      "00"
    );
  };

  const uid = `${Date.now()}-${Math.random().toString(36).slice(2)}@sophiespa`;

  // Escape commas and newlines per RFC 5545
  const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Sophie Spa//Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(startDate)}`,
    `DTEND:${fmt(endDate)}`,
    `SUMMARY:Sophie Spa — ${esc(snapshot.service.name)} (pending)`,
    `DESCRIPTION:Placeholder for your booking request. Sophie Spa will confirm your exact time within 24 hours.\\nTreatment: ${esc(snapshot.service.name)}\\nDuration: ${esc(snapshot.service.duration)}`,
    "STATUS:TENTATIVE",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
