import * as React from 'react';
import { type Variants, motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PRESETS } from '@/config/animation';
import { cn } from '@/utils/cn';

const collaboratorLinks = [
  { name: 'ShiCaSan', href: 'https://www.facebook.com/Shicasan' },
  { name: 'Ajedrez a la Escuela', href: 'https://www.ajedrezalaescuela.eu/' },
  { name: 'Educachess', href: 'http://www.educachess.org/' },
  { name: 'Ideas Deportivas Canarias', href: 'https://www.facebook.com/Ideasdeportivascanarias/' },
  { name: 'ADADAE', href: 'https://www.adadae.org/' },
  {
    name: 'Alfileduca',
    href: 'https://www.facebook.com/pages/category/Nonprofit-Organization/Alfileduca-1665021090443649/',
  },
  { name: 'Peones al Ataque', href: 'https://www.peonesalataque.mx/' },
  { name: 'Ajedrez con Cabeza', href: 'https://ajedrezconcabeza.com/' },
  { name: 'Escacs Xavi Xec', href: 'http://escacsxavixec.blogspot.com/' },
  { name: 'Escuela y Club Ajedrez', href: 'https://www.facebook.com/escuelayclubajedrez/' },
  { name: 'El Pastorcito', href: 'https://www.facebook.com/ProyectoDeAjedrezElPastorcito' },
  { name: 'Peón Eléctrico', href: 'http://www.peonelectrico.com' },
  {
    name: 'Amigos del Ajedrez Educativo',
    href: 'https://www.facebook.com/Amigos-del-Ajedrez-Educativo-393973191138175/',
  },
  {
    name: 'La Colección de Papá',
    href: 'http://www.lacolecciondepapa.com/2020/12/botvinnik-flohr-1933.html',
  },
  { name: 'Ajedrez y Psicopedagogía', href: 'https://ajedrezypsicopedagogia.cl' },
  { name: 'Club Ajedrez Otura', href: 'http://www.clubajedrezotura.org.es' },
  { name: 'Gambito de Aula', href: 'https://gambitodeaula.blogspot.com/' },
] as const;

/**
 * Props for the LogoCloudSection component
 */
export interface LogoCloudSectionProps {
  /**
   * The title displayed above the logo cloud
   * @default "Trusted by 10,000+ companies worldwide"
   */
  title?: string;
  /**
   * Additional CSS classes to apply
   */
  className?: string;
  /**
   * Whether to use the marquee (infinite scroll) animation
   * @default true
   */
  marquee?: boolean;
  /**
   * HTML ID for the section
   * @default "partners"
   */
  id?: string;
}

/**
 * LogoCloudSection Component
 *
 * A full-page section displaying a cloud of partner or customer logos.
 * Features:
 * - "Trusted by" heading to build social proof
 * - Responsive logo cloud with optional marquee animation
 * - Smooth entrance animations using framer-motion
 * - Full light/dark mode support
 * - Partner links for collaborator websites
 */
export const LogoCloudSection: React.FC<LogoCloudSectionProps> = ({
  title = 'WEB COLABORADORAS',
  className,
  id = 'partners',
}) => {
  return (
    <Section
      className={cn('border-b border-border-default bg-bg-primary/50', className)}
      padding="md"
      id={id}
      aria-label="Partner Logos"
    >
      <Container>
        <motion.div
          initial={false}
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={PRESETS.fadeInUp as unknown as Variants}
          className="will-change-transform"
          style={{ opacity: 1 }}
        >
          <div className="w-full overflow-hidden py-4">
            <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-text-tertiary">
              {title}
            </h2>

            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 md:gap-4">
              {collaboratorLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border-default bg-bg-secondary/70 px-4 py-2 text-sm font-semibold text-text-secondary transition-colors hover:border-primary-400 hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

LogoCloudSection.displayName = 'LogoCloudSection';

export default LogoCloudSection;
