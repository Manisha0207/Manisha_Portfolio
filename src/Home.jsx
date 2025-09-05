import React from "react";
import { useState } from "react";
import heroImg from "./assets/profile.jpg"; 
import { ReactTyped } from "react-typed";
import Contact from "./Contact";
import { Link } from "react-router-dom";

function Home() {
  const [showContact, setShowContact] = useState(false);
  return (
    <section className="bg-[#0A192F] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left - Image */}
        <div className="mb-8 md:mb-0">
          <img
            src={heroImg}
            alt="Profile"
            className="w-72 rounded-full border-4 border-[#38BDF8] shadow-lg"
          />
        </div>

        {/* Right - Intro */}
        <div className="md:w-1/2">
          <p className="text-gray-400">Hello, I'm</p>
          <h1 className="text-4xl font-bold text-white">
            Manisha
          </h1>
          <h2 className="font-semibold text-lg mb-4 ">
            <span className="text-white text-2xl">And I'm a </span>
            <span className="text-[#38BDF8] font-bold">
                <ReactTyped
                strings={["College Student", "Web Developer", "AI ML enthusiast"]}
                typeSpeed={70}
                backSpeed={50}
                backDelay={1500}
                loop
                />
            </span>
          </h2>

          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi voluptatem 
            quia necessitatibus officiis pariatur dolorum accusantium.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#38BDF8] text-[#0A192F] px-4 py-2 rounded-lg font-medium hover:bg-[#0ea5e9] transition">
              Hire Me
            </button>
            <Link to="/contact">
              <button className="border border-[#38BDF8] text-[#38BDF8] px-4 py-2 rounded-lg font-medium hover:bg-[#38BDF8] hover:text-[#0A192F] transition">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center px-6">
        <div>
          <h3 className="text-3xl font-bold text-[#38BDF8]">2+</h3>
          <p className="text-gray-300">Months of Experience</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#38BDF8]">20+</h3>
          <p className="text-gray-300">Projects Completed</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#38BDF8]">4+</h3>
          <p className="text-gray-300">Technologies Mastered</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#38BDF8]">1000+</h3>
          <p className="text-gray-300">DSA Probelm Solved</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
