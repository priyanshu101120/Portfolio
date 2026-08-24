'use client';

import { useState, useRef, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useMotionValueEvent } from 'motion/react';
import { cn } from '@/lib/utils';
import { profile } from '@/lib/profile';

// ─── Types ──────────────────────────────────────────────

export type SlideItem = string | ReactNode;

interface AboutSectionProps {
  slides?: SlideItem[];
  imageSrc?: string | string[];
}

interface SectionHeaderProps {
  title: string;
  align?: 'left' | 'right';
}

interface BentoCardProps {
  className?: string;
  children: ReactNode;
  index?: number;
  gradientColors?: string[];
}

interface StatementCardProps {
  slides?: SlideItem[];
  activeIndex: number;
  onSelectIndex?: (index: number) => void;
  index?: number;
}

// ─── Shared Defaults ────────────────────────────────────
const EducationSlide = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -12,
      }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col gap-2.5"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-[#FFC700] font-semibold">
        Education
      </span>

      <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
        {profile.education.uni}
      </h3>

      <p className="font-mono text-xs sm:text-sm text-neutral-300 font-medium">
        {profile.education.degree} in {profile.education.major}
      </p>

      <div className="flex items-center gap-3 font-mono text-xs text-neutral-400 pt-1">
        <span className="px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-[#FFC700]">
          Batch: {profile.education.batch}
        </span>

        <span>•</span>

        <span>
          {profile.education.location.city}, {profile.education.location.state}
        </span>
      </div>
    </motion.div>
  );
};
const DEFAULT_SLIDES: SlideItem[] = [profile.about[0], <EducationSlide key="edu" />];

const SLIDE_LABELS = ['01 BRIEF', '02 EDU'];

const GRADIENT_PALETTE = ['#c6750c', '#beae60', '#d7cbc6'];

// ─── Statement Slide ────────────────────────────────────

const StatementSlide = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -12,
      }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <h2 className="text-base sm:text-lg md:text-xl font-bold tracking-tight leading-relaxed text-white">
        {text}
      </h2>
    </motion.div>
  );
};

// ─── Education Slide ────────────────────────────────────

// ─── Bento Card ──────────────────────────────────────────

const BentoCard = ({ className, children, index = 0 }: BentoCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileHover={{
        y: -4,
        scale: 1.005,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-[28px] bg-card p-6 shadow-2xl text-foreground transition-colors duration-300 hover:border-card-border-hover hover:shadow-accent/5',
        className,
      )}
    >
      <div className="relative z-10 flex flex-1 flex-col h-full">{children}</div>
    </motion.div>
  );
};

// ─── Section Header ──────────────────────────────────────

// ─── Section Header ──────────────────────────────────────

const SectionHeader = ({ title, align = 'left' }: SectionHeaderProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-60px',
  });

  const isRight = align === 'right';

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 16,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 16,
            }
      }
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative mb-10 md:mb-12"
    >
      <div className={cn('relative flex items-center gap-6', isRight && 'flex-row-reverse')}>
        <h2 className="text-[clamp(2.5rem,7vw,6.5rem)] uppercase text-[#FFC700] font-black leading-none tracking-tight">
          {title}
        </h2>
      </div>
    </motion.div>
  );
};

// ─── Statement Card ──────────────────────────────────────

const StatementCard = ({
  slides = DEFAULT_SLIDES,
  activeIndex,
  onSelectIndex,
  index = 0,
}: StatementCardProps) => {
  const currentSlide = slides[activeIndex] ?? slides[0];
  const totalSlides = slides.length;

  return (
    <BentoCard
      gradientColors={GRADIENT_PALETTE}
      className="w-full flex flex-col justify-between min-h-72 sm:min-h-80 relative overflow-hidden p-6 sm:p-8"
      index={index}
    >
      {/* Header Tab Badge */}

      <div className="flex items-center justify-end pb-4 border-b border-white mb-4">
        <span className="font-mono text-xs text-[#FFC700] font-semibold">
          {String(activeIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>
      </div>

      {/* Main Slide Content Area */}

      <div className="relative py-2 flex-1 flex flex-col justify-center min-h-35">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{
              opacity: 0,
              y: 10,
              filter: 'blur(4px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              y: -10,
              filter: 'blur(4px)',
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full"
          >
            {typeof currentSlide === 'string' ? (
              <StatementSlide text={currentSlide} />
            ) : (
              currentSlide
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Slide Switcher */}

      {totalSlides > 1 && (
        <div className="pt-4 border-t border-white mt-4 flex items-center justify-center">
          <div className="flex items-center justify-center gap-3">
            {slides.map((_, i) => (
              <motion.button
                key={i}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => onSelectIndex?.(i)}
                className={cn(
                  'font-mono text-[11px] font-semibold px-4 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer',
                  i === activeIndex
                    ? 'border-[#FFC700] bg-neutral-900/60 text-white shadow-sm'
                    : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-white hover:text-[#FFC700]',
                )}
              >
                {SLIDE_LABELS[i] || `SLIDE ${i + 1}`}
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </BentoCard>
  );
};

// ─── About Me ────────────────────────────────────────────

export const AboutMe = ({ slides = DEFAULT_SLIDES }: AboutSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalItems = slides.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(Math.floor(latest * totalItems), totalItems - 1);

    setActiveIndex(Math.max(0, index));
  });

  const handleSelectIndex = (index: number) => {
    setActiveIndex(index);

    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const scrollTop = window.scrollY + rect.top;

    const scrollHeight = rect.height - window.innerHeight;

    const targetScroll = scrollTop + (index / totalItems) * Math.max(0, scrollHeight);

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  // Auto rotate slides

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, 4500);

    return () => clearInterval(timer);
  }, [isHovered, totalItems]);

  return (
    <div ref={containerRef} className="relative h-[80vh] w-full">
      <section id="about" className="sticky top-20 w-full select-none px-6 py-8 md:px-12 lg:px-20">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mx-auto w-full max-w-5xl"
        >
          <SectionHeader title="About" align="left" />

          {/* Centered Statement Card */}

          <div className="flex justify-center w-full">
            <div className="w-full max-w-4xl">
              <StatementCard
                slides={slides}
                activeIndex={activeIndex}
                onSelectIndex={handleSelectIndex}
                index={0}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
