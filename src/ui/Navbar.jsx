const Navbar = () => {
  return (
    <nav
      className="fixed top-4 inset-x-0 z-50 flex justify-between items-center p-3 md:p-4 
                    w-[95%] md:w-[90%] max-w-4xl mx-auto rounded-2xl
                    bg-white/10 backdrop-blur-lg
                    text-white shadow-xl overflow-hidden"
    >
      <a
        href="#home"
        className="flex items-center justify-center w-24 md:w-32 ml-4 md:ml-8 
                                  cursor-pointer font-bold text-lg md:text-xl 
                                  tracking-wide hover:text-yellow-400 transition-opacity duration-300"
      >
        Priyanshu
      </a>

      <div className="flex gap-2 md:gap-10 text-sm md:text-lg font-medium pr-2 md:pr-4">
        <a
          href="#home"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#projects"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Projects
        </a>
        <a
          href="#about"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#skills"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Skills
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
