import React from 'react';
import { ArrowRight, Home, Search } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ROUTES, resolveHref } from '@/config/paths';
import { AnimatedElement } from '@/components/animation/AnimatedElement';
import { motion } from 'motion/react';

export const NotFound: React.FC = () => {
  const popularPages = [
    { label: 'Inicio', href: resolveHref(ROUTES.HOME) },
    { label: 'Recursos', href: resolveHref(ROUTES.FEATURES) },
    { label: 'Equipo', href: resolveHref(ROUTES.ABOUT) },
    { label: 'Blog', href: resolveHref(ROUTES.BLOG) },
    { label: 'Contacto', href: resolveHref(ROUTES.CONTACT) },
  ];

  const buttonBaseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary rounded-lg h-12 px-6 text-lg gap-2.5 shadow-sm hover:shadow-md hover:-translate-y-0.5';
  const primaryButtonStyles = `${buttonBaseStyles} bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600`;
  const outlineButtonStyles = `${buttonBaseStyles} bg-transparent text-text-primary border border-border-primary hover:bg-bg-secondary hover:border-border-secondary`;

  return (
    <Section
      background="default"
      padding="xl"
      className="min-h-[80vh] flex items-center justify-center"
    >
      <Container size="narrow" className="text-center">
        <AnimatedElement preset="heroEntrance">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-primary-500 dark:text-primary-400"
              >
                <Search size={108} strokeWidth={1.5} />
              </motion.div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/10 dark:bg-white/10 rounded-[100%] blur-md" />
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
            Pagina no encontrada
          </h2>

          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-md mx-auto">
            No hemos encontrado la pagina que buscas. Puede que se haya movido o que el enlace
            ya no este disponible.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href={resolveHref(ROUTES.HOME)} className={primaryButtonStyles}>
              <Home size={20} />
              <span>Volver al inicio</span>
            </a>
            <a href={resolveHref(ROUTES.FEATURES)} className={outlineButtonStyles}>
              <span>Ver recursos</span>
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="border-t border-border-default pt-12">
            <h3 className="text-lg font-semibold mb-6 text-text-primary">
              Secciones principales
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-secondary">
              <span className="font-medium text-text-muted">Puedes ir a:</span>
              {popularPages.map((page) => (
                <a
                  key={page.label}
                  href={page.href}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {page.label}
                </a>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </Container>
    </Section>
  );
};
