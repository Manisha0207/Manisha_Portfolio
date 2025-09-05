import React from "react";

function Portfolio() {
  const projects = [
    {
      title: "E-commerce Website",
      img: "https://via.placeholder.com/300",
      link: "#"
    },
    {
      title: "Portfolio Website",
      img: "https://via.placeholder.com/300",
      link: "#"
    },
    {
      title: "Blog Platform",
      img: "https://via.placeholder.com/300",
      link: "#"
    },
  ];

  return (
    <section className="bg-[#0A192F] text-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#38BDF8] mb-6 text-center md:text-left">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#112240] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#38BDF8] hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
