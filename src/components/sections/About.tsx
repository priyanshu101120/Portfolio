import React from 'react';
import TechStack from './TechStack';
import { AboutMe } from './AboutMe';
interface ReuniteBlackProps {
  techStackRef: React.RefObject<HTMLDivElement | null> | any;
}

const ReuniteBlack: React.FC<ReuniteBlackProps> = ({ techStackRef }) => {
  return (
    <>
      <AboutMe />
      <div ref={techStackRef}>
        <TechStack />
      </div>
    </>
  );
};

export default ReuniteBlack;
