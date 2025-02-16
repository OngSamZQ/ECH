import CarouselSlider from "../components/CarouselSlider";
import HeroSection from "../components/HeroSection";
import Certification from "../components/Certification";
import Services from "../components/Services";
import TrackRecords from "../components/TrackRecords";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
    const { hash } = useLocation(); // Get the current location's hash (e.g. #Tiling)

    // Scroll to the section when hash changes
    useEffect(() => {
      if (hash) {
        const element = document.getElementById(hash.substring(1)); // Extract section ID
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, [hash]); // Runs whenever the hash changes

    return (
        <div className="max-w-7xl mx-auto pt-0 px-3 scroll-smooth" style={{ scrollPaddingTop: '60px' }}>


            <CarouselSlider />
            <section id="HeroSection" >
            <HeroSection />
            </section>

            <section id="services" >
                <Services />
            </section>

            <TrackRecords />
            <Certification />
            <Partners />
            <Contact />

        </div>
    );
}
