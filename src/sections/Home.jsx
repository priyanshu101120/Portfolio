import React from "react";
import Hero from "../ui/Hero";
import Projects from "./Projects";
import AboutContact from "./AboutContact";
import TechStack from "./TechStack";

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <TechStack />
      <AboutContact />
    </>
  );
};

export default Home;
