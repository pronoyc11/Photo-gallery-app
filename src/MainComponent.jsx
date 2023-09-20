import React from "react";
import Navigation from "./components/Navigation";
import "./width.css"
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Jungle from "./routes/imageCollectionRoutes/Jungle";
import Oceans from "./routes/imageCollectionRoutes/Oceans";
import Hills from "./routes/imageCollectionRoutes/Hills";
import Sunset from "./routes/imageCollectionRoutes/Sunset";
import Waterfalls from "./routes/imageCollectionRoutes/Waterfalls";
const MainComponent = () => {

  return <div>
   <Navigation />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
   {/* category-routes */}
   <Route path="/jungle" element={<Jungle />} />
   <Route path="/ocean" element={<Oceans />} />
   <Route path="/hills" element={<Hills />} />
   <Route path="/sunset" element={<Sunset />} />
   <Route path="/waterfalls" element={<Waterfalls />} />
   </Routes>
  </div>;
};

export default MainComponent;
