import img_Hero from "../assets/Image_HeroSection.png";

const HeroSection = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Side - Home Section */}
      <div className="lg:w-1/2 text-center lg:text-left p-2">
        <p className="text-[#6C2E93] text-lg leading-relaxed text-justify">
          <span className="font-bold text-xl block mb-2">Laying the Foundation</span>
          Founded in 1995 by Mr. Ong Jing Cong, <span className="font-bold">Eng Chin Hang</span> Construction Pte Ltd has built a strong reputation as a trusted partner to leading contractors, delivering skilled labor and high-quality materials for subcontracted works.
        </p>
        <br />
        <p className="text-[#6C2E93] text-lg leading-relaxed text-justify">
          Our subsidiaries, Eng Chin Hang Plumbing & Sanitary Pte Ltd and Eng Chin Hang Tiling Construction Pte Ltd, are dedicated to maintaining the highest standards of safety and excellence, reflecting our unwavering commitment to the construction industry’s benchmarks for quality and reliability.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="lg:w-1/2 flex justify-center p-3">
        <img
          src={img_Hero}
          alt="Eng Chin Hang"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;


  


  