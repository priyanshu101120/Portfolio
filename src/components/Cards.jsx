import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import { GiThunderBlade } from "react-icons/gi";

const Cards = ({ item, index, totalCards }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (totalCards - index) * 0.04],
  );

  const topOffset = `${80 + index * 25}px`;

  return (
    <motion.article
      ref={cardRef}
      style={{
        top: topOffset,
        scale,
      }}
      className="sticky mb-8 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-neutral-950 to-neutral-900 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl min-h-110"
    >
      <div className="relative h-60 md:h-auto overflow-hidden bg-neutral-900">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent md:bg-linear-to-r md:from-transparent md:to-black/30" />
      </div>

      <div className="flex flex-col justify-between gap-6 p-8 md:p-12">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {item.title}
          </h3>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.tech?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-neutral-300 backdrop-blur-md hover:bg-white/10 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-2">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFC700] text-black text-sm font-semibold hover:bg-[#fcd754] transition-all hover:-translate-y-0.5"
          >
            Live Demo
            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition" />
          </a>

          <a
            href={item.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 text-white text-sm font-semibold hover:bg-white/5 hover:-translate-y-0.5 transition-all"
          >
            <GiThunderBlade className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default Cards;
