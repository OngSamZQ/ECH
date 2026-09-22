import { useState, useEffect } from "react";
import image1_640 from "../assets/optimized/Carousel_1-640.webp";
import image1_1280 from "../assets/optimized/Carousel_1-1280.webp";
import image1_1920 from "../assets/optimized/Carousel_1-1920.webp";
import image2_640 from "../assets/optimized/Carousel_2-640.webp";
import image2_1280 from "../assets/optimized/Carousel_2-1280.webp";
import image2_1920 from "../assets/optimized/Carousel_2-1920.webp";
import image3_640 from "../assets/optimized/Carousel_3-640.webp";
import image3_1280 from "../assets/optimized/Carousel_3-1280.webp";
import image3_1920 from "../assets/optimized/Carousel_3-1920.webp";
import image4_640 from "../assets/optimized/Carousel_4-640.webp";
import image4_1280 from "../assets/optimized/Carousel_4-1280.webp";
import image4_1920 from "../assets/optimized/Carousel_4-1920.webp";

const slides = [
  { src: image1_1280, srcSet: image1_640 + " 640w, " + image1_1280 + " 1280w, " + image1_1920 + " 1920w", alt: "Pink and white residential blocks beside an elevated railway" },
  { src: image2_1280, srcSet: image2_640 + " 640w, " + image2_1280 + " 1280w, " + image2_1920 + " 1920w", alt: "Residential blocks overlooking a courtyard and railway" },
  { src: image3_1280, srcSet: image3_640 + " 640w, " + image3_1280 + " 1280w, " + image3_1920 + " 1920w", alt: "Yellow and white residential blocks surrounded by trees" },
  { src: image4_1280, srcSet: image4_640 + " 640w, " + image4_1280 + " 1280w, " + image4_1920 + " 1920w", alt: "Tall yellow and white residential towers above greenery" },
];

export default function CarouselSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stopForReducedMotion = () => { if (preference.matches) setPaused(true); };
    preference.addEventListener("change", stopForReducedMotion);
    return () => preference.removeEventListener("change", stopForReducedMotion);
  }, []);

  useEffect(() => {
    if (paused || hovered) return;
    const timer = setInterval(() => setCurrentIndex((index) => (index + 1) % slides.length), 9900);
    return () => clearInterval(timer);
  }, [paused, hovered]);

  const chooseSlide = (index) => {
    setPaused(true);
    setCurrentIndex(index);
  };
  const slide = slides[currentIndex];

  return (
    <section aria-label="Featured projects" aria-roledescription="carousel"
      className="relative w-full h-[320px] sm:h-[500px] overflow-hidden"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(true);
      }}>
      <img src={slide.src} srcSet={slide.srcSet}
        sizes="(min-width: 1280px) 1256px, calc(100vw - 24px)"
        alt={slide.alt} width="1280" height="960" fetchPriority={currentIndex === 0 ? "high" : "auto"}
        className="absolute inset-0 w-full h-full object-cover" />
      <button type="button" onClick={() => setPaused((value) => !value)}
        className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded">
        {paused ? "Play slideshow" : "Pause slideshow"}
      </button>
      <button type="button" aria-label="Previous slide" onClick={() => chooseSlide((currentIndex - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/60 w-11 h-11 rounded-full">‹</button>
      <button type="button" aria-label="Next slide" onClick={() => chooseSlide((currentIndex + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/60 w-11 h-11 rounded-full">›</button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex rounded-full bg-black/60">
        {slides.map((item, index) => (
          <button key={item.src} type="button" aria-label={"Show slide " + (index + 1)}
            aria-current={index === currentIndex ? "true" : undefined}
            onClick={() => chooseSlide(index)} className="w-11 h-11 flex items-center justify-center">
            <span className={"w-3 h-3 rounded-full " + (index === currentIndex ? "bg-white" : "bg-white/50")} />
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live={paused ? "polite" : "off"} aria-atomic="true">Slide {currentIndex + 1} of {slides.length}: {slide.alt}</p>
    </section>
  );
}
