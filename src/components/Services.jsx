const Services = () => {
  const services = [
    {
      title: "Main Contractor",
      items: ["CW01 General Building","GB1 General Builder Class 1"],
    },
    {
      title: "Tiling",
      items: ["Full tiling works to dwelling units including","Waterproofing to wet areas","Floor screeding","Wall and floor tiling"],
    },
    {
      title: "Plumbing & Sanitary",
      items: ["Underground plumbing & sanitary works","Plumbing & Sanitary works to dwelling units","Dry riser & Wet riser","Gas","Hosereel","Rainwater downpipe","Domestic and Fire pump works"],
    },
    {
      title: "Minor Sewer",
      items: ["ERSS submission","Construction of caisson","Construction of manholes","Pipe jacking of sewer lines","Rehabilitation of sewer lines","CCTV of completed sewer lines"],
    },
  ];

  return (
    <div id="services" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-8" style={{ color: "#6C2E93" }}>Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold justify-center text-black mb-4">
                {service.title}
              </h3>
              <ul className="list-disc pl-5 text-xl text-gray-800 leading-relaxed">
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
