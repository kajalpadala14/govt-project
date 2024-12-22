import React, { useState } from "react";
import Header from './Components/Header'; 
import Contact from './Components/Contact'; 
import TopHome from "./Components/TopHomeStay";
import FeaturedActivity from './Components/FeaturedActivity'; 
import HomePage from "./Components/HomePage";
import ImageCarousel from "./Components/ImageCarousel";
function App() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div>
      <Header setActiveSection={setActiveSection} />
      {activeSection === "topHome" && <TopHome />}
      {activeSection === "featuredActivity" && <FeaturedActivity />}
      {activeSection === "contact" && <Contact />}
      {activeSection === "homePage" && <HomePage />}
    </div>
  );
}

export default App;
