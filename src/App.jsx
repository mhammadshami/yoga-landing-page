import React from "react";

// import aos

// import components
import Hero from "./components/Hero.jsx";
import Cards from "./components/Cards";
import Facts from "./components/Facts";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Pricing from "./components/Pricing";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  // aos init
  Aos.init({
    duration: 1800,
    offset: 100,
  });

  return (
    <div className="overflow-hidden">
      <Hero />
      <Cards />
      <Facts />
      <Features />
      <Courses />
      <Pricing />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
