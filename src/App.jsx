import React from "react";
import Navbar from "./components/navbar";
import Layout from "./Layout";
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Services from "./Services";
import "./App.css";

function App(){
  return(
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="/services" element = {<Services/>} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />}/>
      </Route>
    </Routes>
  );
}

export default App;