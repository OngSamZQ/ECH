import certLogo1 from "../assets/ISO9001.png";
import certLogo2 from "../assets/ISO14001.png";
import certLogo3 from "../assets/ISO18001.png";
import certLogo4 from "../assets/bizsafe.png";

const Certification = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col justify-center items-center py-16">
      <h2 className="text-3xl mb-8" style={{ color: "#6C2E93" }}>Certification Standards</h2>
      <div className="flex flex-col lg:flex-row justify-around w-full max-w-6xl">
        {/* Eng Chin Hang Construction Pte Ltd */}
        <div className="mb-8 lg:mb-0 lg:w-1/3">
          <h3 className="text-xl font-bold mb-4 text-black">Construction</h3>
          <ul className="list-disc pl-5 text-gray-800">
            <li>OHSAS 18001: 2007</li>
            <li>bizSAFE Level Star</li>
            <li>ISO 9001 Quality Management</li>
            <li>ISO 14001 Environmental Management Certification</li>
            <li>CW01 General Building Grade C1</li>
            <li>CR13 Waterproofing Installation Grade L3</li>

          </ul>
        </div>

        {/* Eng Chin Hang Tiling Construction Pte Ltd */}
        <div className="mb-8 lg:mb-0 lg:w-1/3">
          <h3 className="text-xl font-bold mb-4 text-black">Tiling</h3>
          <ul className="list-disc pl-5 text-gray-800">        
            <li>OHSAS 18001: 2007</li>
            <li>bizSAFE Level Star</li>
            <li>CR13 Waterproofing Installation L2</li>
            <li>CR06 Interior Decoration & Finishing <br />Works L2</li>
          </ul>
        </div>

        {/* Eng Chin Hang Plumbing & Sanitary Pte Ltd */}
        <div className="lg:w-1/3">
          <h3 className="text-xl font-bold mb-4 text-black">Plumbing & Sanitary</h3>
          <ul className="list-disc pl-5 text-gray-800">
            <li>OHSAS 18001: 2007</li>
            <li>bizSAFE Level Star</li>
            <li>ME12 Plumbing & Sanitary Works L4</li>
            <li>ME06 Fire Prevention & Protection <br />Systems L1</li>

          </ul>
        </div>
      </div>

      {/* Certificate Logos Section */}
      <div className="mt-8 w-full max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
          <img src={certLogo1} alt="Certification 1" className="w-20 h-20 object-contain" />
          <img src={certLogo2} alt="Certification 2" className="w-20 h-20 object-contain" />
          <img src={certLogo3} alt="Certification 3" className="w-20 h-20 object-contain" />
          <img src={certLogo4} alt="Certification 4" className="w-20 h-20 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Certification;

  