import React from "react";
import Navigation from "./components/Navigation";
import "./width.css"
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
const MainComponent = () => {

  return <div>
   <Navigation />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<Home />} />
    <Route path="/contact" element={<Contact />} />

   </Routes>
  </div>;
};

export default MainComponent;
