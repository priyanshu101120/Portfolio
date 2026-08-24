'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

export const preloaderWords = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
  "Olá",
  "Привет",
  "こんにちは",
  "你好",
  "안녕하세요",
  "नमस्ते",
  "Hoi",
  "Xin chào",
  "WELCOME",
];

export const slideUp: Variants = {
  initial: {
    top: 0,
    backgroundColor: '#141516',
  },
  exit: {
    top: '-100vh',
    backgroundColor: 'rgba(20, 21, 22, 0)',
    transition: { duration: 4, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const fade: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 3, delay: 0.2 },
  },
};

export default function GlobalPreloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState<{ width: number; height: number }>({
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (index === preloaderWords.length - 1) return;
    const timeout = setTimeout(
      () => {
        setIndex((prev) => prev + 1);
      },
      index === 0 ? 400 : 300
    );
    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
    dimension.width / 2
  } ${dimension.height + 300} 0 ${dimension.height} L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
    dimension.width / 2
  } ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#141516] cursor-wait text-[#FFC700] select-none pointer-events-auto"
    >
      <motion.div
        variants={fade}
        initial="initial"
        animate="enter"
        className="flex items-center text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#FFC700] z-10"
      >
        <p className="tracking-wide">{preloaderWords[index]}</p>
      </motion.div>

      <svg className="absolute top-0 -z-10 h-[calc(100%+300px)] w-full pointer-events-none">
        <motion.path
          className="fill-[#141516]"
          variants={curve}
          initial="initial"
          exit="exit"
        />
      </svg>
    </motion.div>
  );
}
