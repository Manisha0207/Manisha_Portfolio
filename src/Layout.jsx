import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A192F]"> {/* same bg as site */}
      <Navbar />
      <main className="flex-grow flex flex-col justify-center px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
