import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0A192F] shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Left - Portfolio Logo */}
          <div className="text-[#38BDF8] text-xl font-bold">
            Portfolio
          </div>

          {/* Center - Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
            {["Home", "About", "Skills", "Services", "Portfolio", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `hover:text-[#38BDF8] transition ${
                      isActive ? "border-b-2 border-[#38BDF8]" : ""
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right - Download CV */}
          <div className="hidden md:block">
            <a
              href="/cv.pdf"
              download
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A192F] px-6 py-4 space-y-4 text-gray-300 font-medium">
          {["Home", "About", "Skills", "Services", "Portfolio", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block hover:text-[#38BDF8] transition ${
                  isActive ? "border-b-2 border-[#38BDF8]" : ""
                }`
              }
            >
              {item}
            </NavLink>
          ))}
          <a
            href="/cv.pdf"
            download
            className="block text-pink-500 hover:text-pink-400"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
