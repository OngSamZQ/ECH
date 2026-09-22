import CarouselSlider from "../components/CarouselSlider";
import HeroSection from "../components/HeroSection";
import Certification from "../components/Certification";
import Services from "../components/Services";
import TrackRecords from "../components/TrackRecords";
import Partners from "../components/Partners";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto pt-0 px-3">


            <CarouselSlider />
            <section id="HeroSection" >
            <HeroSection />
            </section>

            <section>
                <Services />
            </section>

            <TrackRecords />
            <Certification />
            <Partners />
            <Contact />

        </div>
    );
}
