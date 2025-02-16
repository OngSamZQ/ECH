import Projects from "../components/Projects";
import Contact from "../components/Contact";
import CarouselSlider from "../components/CarouselSlider";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Project() {
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
        
        <div className="max-w-7xl mx-auto pt-3 px-3">

            <section>
                <CarouselSlider />
            </section>
            <Projects />
            <Contact />

        </div>
    );
}
