'use client';

import Image from 'next/image';
import { CiMail } from 'react-icons/ci';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className=" py-24 md:py-32">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto overflow-hidden h-fit items-stretch rounded-3xl border border-white/5 shadow-2xl">
        {/* IMAGE */}
        <div className="w-full md:w-[35%] min-h-88 md:min-h-full">
          <Image
            src="/priyanshu.webp"
            alt="Priyanshu"
            width={800}
            height={1000}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* ABOUT */}
        <div className="w-full md:w-[33%] bg-[#FFC700] text-black p-8 md:p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tighter">
              About
            </h2>

            <div className="text-base md:text-lg font-medium space-y-4 leading-relaxed">
              <p>Hey, I&apos;m Priyanshu! finishing my BCA at Lovely Professional University.</p>

              <p>
                Frontend-focused Full Stack Developer skilled in building real-time and AI-powered
                web applications using my skills.
              </p>

              <p>Currently open for Full-stack roles.</p>
            </div>
          </div>

          <a
            onClick={() => window.open('/priyanshu-Resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 w-fit text-sm font-bold border-2 border-black px-10 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            VIEW RESUME
          </a>
        </div>

        {/* CONTACT */}
        <div className="w-full md:flex-1 bg-[#0a0a0a] text-white p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tighter text-white/90">
            Contact
          </h2>

          <p className="text-base md:text-lg font-medium mb-10 text-gray-400">
            The best stories are told in person. Let&apos;s chat!
          </p>

          <div className="space-y-6">
            {/* EMAIL */}
            <a href="mailto:priyanshu101120@gmail.com" className="flex items-center gap-4 group">
              <div className="p-3 border border-white/10 rounded-full group-hover:bg-[#FFC700] group-hover:text-black transition-all duration-300">
                <CiMail size={20} />
              </div>

              <span className="text-base md:text-lg font-light text-gray-300 group-hover:text-[#FFC700] truncate transition-colors duration-300">
                priyanshu101120@gmail.com
              </span>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/priyanshu101120"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="p-3 border border-white/10 rounded-full group-hover:bg-[#FFC700] group-hover:text-black transition-all duration-300">
                <FaGithub size={20} />
              </div>

              <span className="text-base md:text-lg font-light text-gray-300 group-hover:text-[#FFC700] truncate transition-colors duration-300">
                github.com/priyanshu101120
              </span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/priyanshu-singh-452459360"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="p-3 border border-white/10 rounded-full group-hover:bg-[#FFC700] group-hover:text-black transition-all duration-300">
                <FaLinkedin size={20} />
              </div>

              <span className="text-base md:text-lg font-light text-gray-300 group-hover:text-[#FFC700] truncate transition-colors duration-300">
                linkedin.com/in/priyanshu-singh
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
