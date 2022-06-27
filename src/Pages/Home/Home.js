import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
