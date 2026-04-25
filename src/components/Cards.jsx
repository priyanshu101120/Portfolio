import React from "react";

const Cards = ({ item }) => {
  return (
    <div
      className="group w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden 
                    hover:border-yellow-500/50 transition-all duration-500 shadow-2xl flex flex-col h-full"
    >
      <div className="relative overflow-hidden aspect-video w-full">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      <div className="p-5 md:p-6 flex flex-col grow justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {item.tech?.map((t, index) => (
              <span
                key={index}
                className="text-[10px] uppercase tracking-wider font-bold bg-white/10 text-gray-300 px-3 py-1 rounded-md border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-fit text-center bg-yellow-500 text-black px-6 py-2.5 rounded-xl font-bold 
                     hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Cards;
