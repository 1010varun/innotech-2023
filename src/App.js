import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "bootstrap-icons/package.json";
import "remixicon/fonts/remixicon.css";
import "swiper/swiper-bundle.min.css";
import "./App.css";

import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Values from "./Components/Values";
import Features from "./Components/Features";
import Facts from "./Components/Facts";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Values />
      <Features />
      <Facts />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
