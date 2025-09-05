import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt, FaServer } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCode className="text-[#38BDF8] text-4xl mb-4" />,
      title: "Web Development",
      description:
        "Custom, responsive, and high-performance websites built with the latest technologies.",
    },
    {
      icon: <FaPaintBrush className="text-[#38BDF8] text-4xl mb-4" />,
      title: "UI/UX Design",
      description:
        "Beautiful and user-friendly designs focused on delivering the best user experience.",
    },
    {
      icon: <FaMobileAlt className="text-[#38BDF8] text-4xl mb-4" />,
      title: "Responsive Design",
      description:
        "Ensuring your website looks amazing on all devices, from desktops to smartphones.",
    },
    {
      icon: <FaServer className="text-[#38BDF8] text-4xl mb-4" />,
      title: "Backend Development",
      description:
        "Secure, scalable, and efficient backend solutions to power your web applications.",
    },
  ];

  return (
    <section className="bg-[#0A192F] text-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#38BDF8] mb-6">My Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          I provide a wide range of digital services to help you achieve your
          business goals. From design to development, I can bring your ideas to
          life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
