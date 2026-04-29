import React from "react";
import logo from "../assets/name.webp";

const Navbar = () => {
  return (
    <nav className="fixed top-4 inset-x-0 z-50 flex justify-between items-center p-3 md:p-4 
                    w-[95%] md:w-[90%] max-w-4xl mx-auto rounded-2xl
                    bg-white/10 backdrop-blur-lg border border-white/20 
                    text-white shadow-xl overflow-hidden">
      
      <a href="#home" className="flex items-center justify-center w-24 md:w-32 ml-4 md:ml-8 cursor-pointer">
        <img
          className="h-6 md:h-8 object-contain scale-[2] md:scale-[2.5] transition-transform duration-300 hover:opacity-80"
          src={logo}
          alt="Priyanshu Logo"
          loading="lazy"
        />
      </a>

      <div className="flex gap-2 md:gap-10 text-sm md:text-lg font-medium pr-2 md:pr-4">
        <a href="#home" className="hover:text-yellow-400 transition-colors duration-300">
          Home
        </a>
        <a href="#projects" className="hover:text-yellow-400 transition-colors duration-300">
          projects
        </a>
        <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">
          About
        </a>
        <a href="#skills" className="hover:text-yellow-400 transition-colors duration-300">
          skills
        </a>
      </div>
    </nav>
  );
};

export default Navbar;