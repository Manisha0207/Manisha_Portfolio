import React from "react";

function About() {
  return (
    <section className="bg-[#0A192F] text-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#38BDF8] mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0">
          I'm a passionate web developer with a love for creating interactive, 
          user-friendly, and visually appealing web applications. My focus is 
          on writing clean, efficient, and scalable code while continuously 
          learning new technologies to stay up-to-date in this fast-paced industry.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#112240] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#38BDF8] mb-2">My Mission</h3>
            <p className="text-gray-400">
              To craft websites and applications that merge design, functionality, 
              and performance for the best user experience.
            </p>
          </div>
          <div className="p-6 bg-[#112240] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#38BDF8] mb-2">My Approach</h3>
            <p className="text-gray-400">
              I combine creativity with technical skills to build impactful 
              and accessible digital solutions tailored to each client's needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
