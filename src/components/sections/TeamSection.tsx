import * as React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { TeamMemberCard } from '@/components/ui/TeamMemberCard';
import { teamMembers } from '@/data/team';
import { cn } from '@/utils/cn';

/**
 * Props for the TeamSection component
 */
export interface TeamSectionProps {
  /**
   * The title displayed above the team grid
   * @default "Meet our talented team"
   */
  title?: string;
  /**
   * The subtitle displayed above the team grid
   * @default "We're a team of designers, engineers, and strategists passionate about building the future of work."
   */
  subtitle?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * HTML ID for the section
   * @default "team"
   */
  id?: string;
}

/**
 * TeamSection Component
 *
 * A section displaying team members in a responsive grid.
 * Features:
 * - Leadership members displayed in a prominent row
 * - All other members in a secondary grid
 * - Responsive layout (2 col mobile/tablet, 4 col desktop)
 * - Staggered entrance animations
 * - Theme-aware styling
 */
export const TeamSection: React.FC<TeamSectionProps> = ({
  title = 'Conoce al equipo de ajEdu',
  subtitle = 'Una red de docentes, educadores, investigadores y colaboradores que comparten experiencias para llevar el ajedrez educativo al aula.',
  className,
  id = 'team',
}) => {
  // Split team members into leadership and other members
  const leadership = teamMembers.filter((m) => m.department === 'leadership');
  const others = teamMembers.filter((m) => m.department !== 'leadership');

  return (
    <Section
      className={cn('bg-bg-primary', className)}
      padding="lg"
      id={id}
      aria-label="Equipo ajEdu"
    >
      <Container>
        <div className="mx-auto mb-12 md:mb-16 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary">
            {title === 'Conoce al equipo de ajEdu' ? (
              <>
                Conoce al equipo de{' '}
                <span className="text-primary-600 dark:text-primary-400">ajEdu</span>
              </>
            ) : (
              title
            )}
          </h2>
          {subtitle && (
            <p className="mt-5 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-16">
          {/* Leadership Grid */}
          {leadership.length > 0 && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-text-primary text-center">Coordinación</h3>
              <div
                className={cn(
                  'grid gap-8 mx-auto',
                  leadership.length === 1
                    ? 'grid-cols-1 max-w-sm'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl'
                )}
              >
                {leadership.map((member) => (
                  <div key={member.id}>
                    <TeamMemberCard
                      name={member.name}
                      role={member.role}
                      bio={member.bio}
                      avatar={member.avatar}
                      social={member.social}
                      isLeadership
                      className="h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Members Grid */}
          {others.length > 0 && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-text-primary text-center">Comunidad ajEdu</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {others.map((member) => (
                  <div key={member.id}>
                    <TeamMemberCard
                      name={member.name}
                      role={member.role}
                      bio={member.bio}
                      avatar={member.avatar}
                      social={member.social}
                      className="h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

TeamSection.displayName = 'TeamSection';

export default TeamSection;
