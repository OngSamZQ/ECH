const Services = () => {
  const services = [
    {
      title: "Main Contractor",
      description: `
        - CW01 General Building<br/>
        - GB1 General Builder Class 1<br/>
      `,
    },
    {
      title: "Tiling",
      description: `
        - Full tiling works to dwelling units including<br/>
        - Waterproofing to wet areas<br/>
        - Floor screeding<br/>
        - Wall and floor tiling
      `,
    },
    {
      title: "Plumbing & Sanitary",
      description: `
        - Underground plumbing & sanitary works<br/>
        - Plumbing & Sanitary works to dwelling units<br/>
        - Dry riser & Wet riser<br/>
        - Gas<br/>
        - Hosereel<br/>
        - Rainwater downpipe<br/>
        - Domestic and Fire pump works
      `,
    },
    {
      title: "Minor Sewer",
      description: `
        - ERSS submission<br/>
        - Construction of caisson<br/>
        - Construction of manholes<br/>
        - Pipe jacking of sewer lines<br/>
        - Rehabilitation of sewer lines<br/>
        - CCTV of completed sewer lines
      `,
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
              <p
                className="text-xl text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: service.description }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
