import Projects from "../components/Projects";
import Contact from "../components/Contact";
import CarouselSlider from "../components/CarouselSlider";


export default function Project() {
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
