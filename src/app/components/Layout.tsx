import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BookingModal } from "./BookingModal";
import { FloatingContact } from "./FloatingContact";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#FDF8F4]">
      <style>{`
        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <Navbar />
      <Outlet />
      <Footer />
      <BookingModal />
      <FloatingContact />
    </div>
  );
}
