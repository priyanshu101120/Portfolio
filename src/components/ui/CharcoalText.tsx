'use client';

import React from 'react';
import { Damion } from 'next/font/google';

const damion = Damion({ weight: '400', subsets: ['latin'], display: 'swap' });

interface CharcoalTextProps {
  text?: string;
  color?: string;
  blurAmount?: number;
  className?: string;
}

export default function CharcoalText({
  text = 'Priyanshu',
  color = '#FFC700',
  blurAmount = 8,
  className = '',
}: CharcoalTextProps) {
  const characters = Array.from(text);

  return (
    <div className={`w-full text-center select-none ${className}`}>
      <span className={`sr-only ${damion.className}`}>{text}</span>
      
      <div className={`inline-flex flex-wrap justify-center ${damion.className} text-6xl sm:text-8xl md:text-9xl`}>
        {characters.map((char, index) => {
          if (char === ' ') {
            return <span key={index} className="w-4">&nbsp;</span>;
          }

          return (
            <span
              key={index}
              className="inline-block transition-all duration-300 ease-out cursor-pointer"
              style={
                {
                  color: color,
                  '--hover-blur': `${blurAmount}px`,
                } as React.CSSProperties
              }
            >
              <style jsx>{`
                span {
                  filter: blur(0px);
                }
                span:hover {
                  filter: blur(var(--hover-blur));
                  transform: scale(1.05);
                }
              `}</style>
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}