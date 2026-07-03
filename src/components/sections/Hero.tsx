import * as React from 'react';
import { type Variants, motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { GradientBackground } from '@/components/ui/GradientBackground';
import { Section } from '@/components/ui/Section';
import { PRESETS, STAGGER } from '@/config/animation';
import { cn } from '@/utils/cn';

/**
 * Props for the Hero component
 */
export interface HeroProps {
  /**
   * Additional CSS classes to apply
   */
  className?: string;
}

/**
 * Hero Section Component
 *
 * The primary entrance section of the homepage designed to make a strong first impression.
 * Features:
 * - Compelling headline and subheadline from site config
 * - Animated mesh gradient background
 * - Educational chess hero image
 * - Entrance animations for all elements
 */
export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <Section
      className={cn(
        'relative flex items-center overflow-hidden pt-20 pb-8 lg:pt-28 lg:pb-10',
        className,
      )}
      background="transparent"
      id="hero"
      aria-label="Hero Section"
      data-testid="hero-section"
    >
      {/* Background with elegant gradient */}
      <GradientBackground
        id="hero-gradient"
        variant="deep"
        intensity={0.5}
        className="opacity-50 dark:opacity-30"
        aria-label="Animated gradient background"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div
            initial={false}
            animate="animate"
            variants={
              {
                initial: PRESETS.stagger?.initial,
                animate: {
                  ...PRESETS.stagger?.animate,
                  transition: {
                    ...STAGGER.hero,
                  },
                },
              } as unknown as Variants
            }
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Headline */}
            <motion.h1
              initial={false}
              animate="animate"
              variants={PRESETS.heroEntrance as unknown as Variants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-6 max-w-[600px] leading-[1.1] text-gradient will-change-transform mx-auto lg:mx-0"
              data-testid="hero-headline"
            >
              RED INTERNACIONAL AJEDREZ Y{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
                EDUCACIÓN
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={false}
              animate="animate"
              variants={PRESETS.fadeInUp as unknown as Variants}
              className="text-lg md:text-xl text-text-muted mb-10 max-w-[520px] leading-relaxed will-change-transform mx-auto lg:mx-0"
              data-testid="hero-description"
            >
              Aportando al ajedrez educativo desde 2005
            </motion.p>
          </motion.div>

          {/* Visual Column */}
          <div className="relative">
            <motion.div
              variants={PRESETS.mockupEntrance as unknown as Variants}
              className="relative z-10 will-change-transform"
              initial={false}
              animate="animate"
            >
              <img
                src="/images/ajedu-hero.jpg"
                alt="Imagen de temporada AjEdu"
                className="w-full rounded-[2rem] border border-border-default/70 bg-black object-contain shadow-2xl"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
            </motion.div>

            {/* Decorative background effects - optimized for performance */}
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-primary-500/10 rounded-full -z-10 opacity-60" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-secondary-500/10 rounded-full -z-10 opacity-60" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

Hero.displayName = 'Hero';

export default Hero;
