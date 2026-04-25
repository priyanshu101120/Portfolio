import React from "react";
import dark from "../assets/dark.png";
import Cards from "../components/Cards";
import { project as projectData } from "../data/data";

const Projects = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden" id="projects">
      <div className="absolute top-0 left-0 w-full h-75 md:h-125">
        <img
          className="w-full h-full object-cover opacity-40 md:opacity-60"
          src={dark}
          alt="Dark Mode Background"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black"></div>
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-24 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-white tracking-tight">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto items-stretch">
          {projectData.map((project) => (
            <div key={project.id} className="flex h-full">
              <Cards item={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;