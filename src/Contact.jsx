import React from "react";

function Contact() {
  return (
    <section className="bg-[#0A192F] text-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#38BDF8] mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-8">
          Have a project in mind or just want to say hello?  
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-[#112240] text-white border border-[#38BDF8] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-[#112240] text-white border border-[#38BDF8] focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-lg bg-[#112240] text-white border border-[#38BDF8] focus:outline-none md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="bg-[#38BDF8] text-[#0A192F] px-6 py-3 rounded-lg font-medium hover:bg-[#0ea5e9] transition md:col-span-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
