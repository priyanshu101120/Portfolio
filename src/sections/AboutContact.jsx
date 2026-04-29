import React from "react";
import yourImage from "../assets/priyanshu.png";
import resume from "../assets/priyanshu-Resume.pdf";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const AboutContact = () => {
  return (
    <section className="w-full bg-black text-white py-12 px-4 md:px-10" id="about">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto overflow-hidden h-fit items-stretch rounded-3xl border border-white/5 shadow-2xl">
        
        <div className="w-full md:w-[35%] min-h-88 md:min-h-full">
          <img
            src={yourImage}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            alt="Priyanshu"
          />
        </div>

        <div className="w-full md:w-[33%] bg-[#FFC700] text-black p-8 md:p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tighter">
              about
            </h2>
            <div className="text-base md:text-lg font-medium space-y-4 leading-relaxed">
              <p>Hey, I'm Priyanshu! finishing my BCA at Lovely Professional University.</p>
              <p>Frontend-focused Full Stack Developer skilled in building real-time and AI-powered web applications using React.js and Supabase.</p>
              <p>Currently open for Full-stack roles.</p>
            </div>
          </div>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 w-fit text-sm font-bold border-2 border-black px-10 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            VIEW RESUME
          </a>
        </div>

        <div className="w-full md:flex-1 bg-[#0a0a0a] text-white p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tighter text-white/90">
            contact
          </h2>

          <p className="text-base md:text-lg font-medium mb-10 text-gray-400">
            The best stories are told in person. Let's chat!
          </p>

          <div className="space-y-6">
            <a href="mailto:priyanshu101120@gmail.com" className="flex items-center gap-4 group">
              <div className="p-3 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                <CiMail size={20} />
              </div>
              <span className="text-base md:text-lg font-light text-gray-300 group-hover:text-white truncate">
                priyanshu101120@gmail.com
              </span>
            </a>

            <a href="https://github.com/priyanshu101120" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="p-3 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                <FaGithub  size={20} />
              </div>
              <span className="text-base md:text-lg font-light text-gray-300 group-hover:text-white truncate">
                github.com/priyanshu101120
              </span>
            </a>

            <a href="https://www.linkedin.com/in/priyanshu-singh-452459360" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="p-3 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                <FaLinkedin size={20} />
              </div>
              <span className="text-base md:text-lg font-light text-gray-300 group-hover:text-white truncate">
                linkedin.com/in/priyanshu-singh
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;