import * as React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { featureStats } from '@/data';
import { cn } from '@/utils/cn';

/**
 * Props for the StatsSection component
 */
export interface StatsSectionProps {
  /**
   * The heading displayed above the stats grid
   */
  title?: string;
  /**
   * The subheading displayed above the stats grid
   */
  subtitle?: string;
  /**
   * Additional CSS classes to apply
   */
  className?: string;
  /**
   * HTML ID for the section
   * @default "stats"
   */
  id?: string;
}

/**
 * StatsSection Component
 *
 * A full-page section displaying key product metrics and statistics.
 * Features:
 * - Animated count-up effects using AnimatedCounter
 * - Responsive 4-column grid layout
 * - Scroll-triggered entrance animations for cards
 * - Theme-aware design with subtle glassmorphism
 */
export const StatsSection: React.FC<StatsSectionProps> = ({
  title = 'ajEdu en cifras',
  subtitle = 'Una comunidad internacional que comparte recursos, experiencias y proyectos para impulsar el ajedrez educativo.',
  className,
  id = 'stats',
}) => {
  return (
    <Section
      className={cn('bg-bg-primary', className)}
      padding="lg"
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2
            id={`${id}-heading`}
            className="mb-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
          >
            {title}
          </h2>
          <p className="text-lg text-text-secondary">{subtitle}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featureStats.map((stat, index) => {
            const formattedValue = stat.value.toLocaleString(undefined, {
              minimumFractionDigits: stat.value % 1 !== 0 ? 2 : 0,
              maximumFractionDigits: stat.value % 1 !== 0 ? 2 : 0,
            });

            return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border-default bg-bg-secondary p-8 transition-colors hover:border-brand-primary/50"
            >
              {/* Decorative Background Blur */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand-primary/5 blur-2xl transition-all group-hover:bg-brand-primary/10" />

              <div className="relative z-10">
                <div className="mb-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-brand-primary sm:text-5xl">
                    {stat.prefix}
                    {formattedValue}
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-lg font-semibold text-text-primary">{stat.label}</div>
                <p className="mt-2 text-sm text-text-secondary">{stat.description}</p>
              </div>
            </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

StatsSection.displayName = 'StatsSection';

export default StatsSection;
