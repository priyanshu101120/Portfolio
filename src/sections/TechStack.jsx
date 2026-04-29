import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiRedux,
  SiSupabase,
  SiVercel,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa";


const TechStack = () => {
  const techs = [
    { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "SQL", icon: <SiPostgresql />, color: "#4169E1" },
    { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" }, // Added CSS3
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
    { name: "Vercel", icon: <SiVercel />, color: "#ffffff" },
  ];

  return (
    <section
      className="relative w-full bg-black py-16 md:py-24 px-4 overflow-hidden"
      id="tech-stack"
    >
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
          My <span className="text-[#FFC700]">Tech Stack</span>
        </h2>
        <p className="text-gray-400 mb-12 md:mb-20 text-base md:text-lg max-w-2xl mx-auto">
          Technologies I use to bring ideas to life.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 p-5 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                style={{ backgroundColor: tech.color }}
              ></div>

              <div
                className="text-4xl md:text-5xl transition-transform duration-500 group-hover:scale-110"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>

              <span className="text-xs md:text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
