import React from "react";
import bg from "../assets/bg.mp4";
import resume from "../assets/priyanshu-Resume.pdf";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black" id="home">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          src={bg}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1
          style={{ fontFamily: "Prata, serif" }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Hi, I'm Priyanshu
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-10 font-light tracking-wide max-w-2xl">
          A passionate web developer
        </p>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 
                     text-white rounded-full hover:bg-yellow-500 hover:text-black 
                     transition-all duration-300 transform hover:scale-105 active:scale-95
                     text-sm sm:text-base font-medium"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;