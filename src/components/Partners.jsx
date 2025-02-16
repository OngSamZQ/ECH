import { partners } from "../constants";

const Partners = () => {  
    return (
      <div id="clients" className="bg-gray-100 py-10">
        <div className="container mx-auto px-12">
          <h2 className="text-3xl text-center mb-8" style={{ color: "#6C2E93" }}>Our Partners / Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12">
            {partners.map((client, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Partners;
  