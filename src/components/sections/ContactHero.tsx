import * as React from 'react';
import { Mail } from 'lucide-react';
import { type Variants, motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { GradientBackground } from '@/components/ui/GradientBackground';
import { Section } from '@/components/ui/Section';
import { PRESETS } from '@/config/animation';
import { contact, pageSEO } from '@/config/site';
import { cn } from '@/utils/cn';

/**
 * Props for the ContactHero component
 */
export interface ContactHeroProps {
  /**
   * Additional CSS classes to apply
   */
  className?: string;
}

/**
 * ContactHero Section Component
 *
 * The hero section for the Contact page, providing a friendly invitation
 * for users to get in touch.
 */
export const ContactHero: React.FC<ContactHeroProps> = ({ className }) => {
  const { description } = pageSEO.contact;

  return (
    <Section
      id="contact-hero"
      className={cn(
        'relative pt-20 pb-12 lg:pt-32 lg:pb-16 overflow-hidden min-h-[30vh] flex items-center',
        className,
      )}
      background="transparent"
      aria-label="Contact Hero Section"
    >
      {/* Background with minimal gradient */}
      <GradientBackground
        id="contact-hero-gradient"
        variant="minimal"
        intensity={0.3}
        className="opacity-40 dark:opacity-20"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={false}
            animate="animate"
            variants={PRESETS.fadeInUp as unknown as Variants}
            className="will-change-transform"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-6 leading-[1.1]">
              Contacta con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
                ajEdu
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-3 rounded-xl border border-border-default bg-bg-primary/70 px-5 py-3 text-base font-semibold text-text-primary shadow-sm backdrop-blur-sm transition-colors hover:border-primary-500 hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              {contact.email}
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

ContactHero.displayName = 'ContactHero';

export default ContactHero;
