import { project as projectData } from "../data/data";
import { motion } from "framer-motion";
import Cards from "../components/Cards";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 px-2 md:px-6"
    >
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold bg-linear-to-b from-white to-neutral-500 bg-clip-text text-transparent"
        >
          Featured <span className="text-[#FFC700]">Projects</span>
        </motion.h2>
        <p className="text-neutral-400 mt-4 text-base md:text-lg">
          Scroll to explore my work
        </p>
      </div>
      <div className="max-w-8xl mx-auto px-2 md:px-4">
        {projectData.map((project, i) => (
          <Cards
            key={project.id}
            item={project}
            index={i}
            totalCards={projectData.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
