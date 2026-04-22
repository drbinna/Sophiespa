import { Hero } from "./Hero";
import { Slideshow } from "./Slideshow";
import { Testimonials } from "./Testimonials";
import { Faq } from "./Faq";
import { Contact } from "./Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Slideshow />
      <Faq />
      <Contact />
    </>
  );
}