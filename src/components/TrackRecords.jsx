import { Link } from "react-router-dom"; 
import Cons from "../assets/Construction.jpg"; 
import tiling_img from "../assets/Tiling.jpg";
import plumbing_img from "../assets/Plumbing.jpg";
import MinorSewer_img from "../assets/MinorSewer.jpg";

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
              <img
                src={Cons}
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
              <img
                src={tiling_img}
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
              <img
                src={plumbing_img}
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
              <img
                src={MinorSewer_img}
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