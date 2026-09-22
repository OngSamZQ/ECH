import { Link } from "react-router-dom";
import Cons from "../assets/optimized/Construction-960.webp";
import Cons_small from "../assets/optimized/Construction-480.webp";
import tiling_img from "../assets/optimized/Tiling-960.webp";
import tiling_img_small from "../assets/optimized/Tiling-480.webp";
import plumbing_img from "../assets/optimized/plumbing-960.webp";
import plumbing_img_small from "../assets/optimized/plumbing-480.webp";
import MinorSewer_img from "../assets/optimized/MinorSewer-960.webp";
import MinorSewer_img_small from "../assets/optimized/MinorSewer-480.webp";

const TrackRecords = () => {
  return (
    <div id="track-records" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl mb-8 text-gray-800" style={{ color: "#6C2E93" }}>
          Track Records
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Main Contractor Track Record */}
          <div className="relative">
            <Link to="/project#MainCon">
              <img loading="lazy" decoding="async"
                src={Cons}
                  srcSet={Cons_small + " 480w, " + Cons + " 960w"}
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                alt="Eng Chin Hang Construction Project"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold bg-black bg-opacity-50 p-2 rounded-md hover:bg-yellow-500 hover:text-black">
                Main Contractor
              </p>
            </Link>
          </div>

          {/* Tiling Record */}
          <div className="relative">
            <Link to="/project#Tiling">
              <img loading="lazy" decoding="async"
                src={tiling_img}
                  srcSet={tiling_img_small + " 480w, " + tiling_img + " 720w"}
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                alt="Eng Chin Hang Tiling Project"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold bg-black bg-opacity-50 p-2 rounded-md hover:bg-yellow-500 hover:text-black">
                Tiling
              </p>
            </Link>
          </div>

          {/* Plumbing & Sanitary Track Record */}
          <div className="relative">
            <Link to="/project#Plumbing">
              <img loading="lazy" decoding="async"
                src={plumbing_img}
                  srcSet={plumbing_img_small + " 480w, " + plumbing_img + " 960w"}
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                alt="Eng Chin Hang Plumbing & Sanitary Project"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold bg-black bg-opacity-50 p-2 rounded-md hover:bg-yellow-500 hover:text-black">
                Plumbing & Sanitary
              </p>
            </Link>
          </div>

          {/* Minor Sewer Track Record */}
          <div className="relative">
            <Link to="/project#MinorSewer">
              <img loading="lazy" decoding="async"
                src={MinorSewer_img}
                  srcSet={MinorSewer_img_small + " 480w, " + MinorSewer_img + " 960w"}
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                alt="Eng Chin Hang Minor Sewer"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold bg-black bg-opacity-50 p-2 rounded-md hover:bg-yellow-500 hover:text-black">
                Minor Sewer
              </p>
            </Link>
          </div>



        </div>
      </div>
    </div>
  );
};

export default TrackRecords;