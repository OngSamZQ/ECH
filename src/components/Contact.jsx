import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation: Check if any field is empty
    const { name, email, phone, subject, message } = formData;
    if (!name || !email || !phone || !subject || !message) {
      alert("All fields are required. Please fill in all fields.");
      return;
    }
  
    emailjs
      .send(
        "service_c7umdsm", // Replace with your EmailJS Service ID
        "template_ac4w076", // Replace with your EmailJS Template ID
        formData,
        "S_cWkMucbjZth9_xW" // Replace with your EmailJS User ID (or Public Key)
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl mb-2 text-center" style={{ color: "#6C2E93" }}>
        Contact Us
      </h2>
        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Left side: Google Map and Address */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pt-6 items-center mb-8 lg:mb-0">
            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7331478474844!2d103.88338877573689!3d1.336350261617488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17921395fca5%3A0x5a89df2d04d68d77!2sEng%20Chin%20Hang%20Construction%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1736525481920!5m2!1sen!2ssg"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Contact Details */}
            <div className="mt-4 text-center">
              <p className="text-lg text-gray-800 font-semibold">Eng Chin Hang Construction Pte Ltd</p>
              <p className="text-lg text-gray-800">
                76 Playfair Road #06-02 LHK2 Building S367996
              </p>
              <p className="text-lg text-gray-800">
                Email:{" "}
                <a
                  href="mailto:admin@engchinhang.com.sg"
                  className="text-purple-700 underline"
                >
                  admin@engchinhang.com.sg
                </a>
              </p>
              <p className="text-lg text-gray-800">
                Office No.: 68443208
              </p>
            </div>
          </div>

          {/* Right side: Enquiry Form */}
          <div className="w-full lg:w-1/2 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl mb-2 text-gray-800">Enquiries</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-1">
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-1">
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-1">
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-1">
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-1">
                <textarea
                  id="message"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-3 rounded-lg font-medium hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

