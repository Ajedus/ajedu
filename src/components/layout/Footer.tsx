import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Mail } from 'lucide-react';
import { company, featureFlags, footer, siteNavigation } from '../../config/site';
import { ROUTES, resolveHref } from '../../config/paths';
import { Button } from '../ui/Button';
import { Link } from '../ui/Link';

export interface FooterProps {
  className?: string;
  showNewsletter?: boolean;
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean | undefined;
}

function FooterLink({ href, children, external }: FooterLinkProps) {
  return (
    <Link
      href={href}
      variant="subtle"
      className="text-text-secondary hover:text-text-primary text-sm"
      showExternalIcon={false}
      openExternalInNewTab={!!external}
    >
      {children}
    </Link>
  );
}

function NewsletterSignup({ onSubmit }: { onSubmit?: (email: string) => void }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsLoading(false);
    setIsSubmitted(true);
    onSubmit?.(email);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-2 text-success-600 dark:text-success-400 py-3">
        <CheckCircle className="w-5 h-5" />
        <span className="text-sm font-medium">Gracias por suscribirte.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu correo electrónico"
        required
        className="flex-1 px-4 py-2.5 bg-bg-primary border border-border-default rounded-lg
                   text-text-primary placeholder:text-text-tertiary
                   focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                   transition-all duration-200"
        aria-label="Correo electrónico para novedades"
      />
      <Button
        type="submit"
        disabled={isLoading}
        loading={isLoading}
        variant="primary"
        size="md"
        className="px-5"
        rightIcon={<ArrowRight className="w-4 h-4" />}
      >
        Suscribirme
      </Button>
    </form>
  );
}

export function Footer({ className = '', showNewsletter = true }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const copyrightText = footer.copyright.replace('{year}', String(currentYear));
  const contactEmail = siteNavigation.contact[0]?.value;

  return (
    <footer
      className={`bg-bg-secondary border-t border-border-default ${className}`}
      role="contentinfo"
      aria-label="Pie de página"
    >
      {showNewsletter && featureFlags.newsletter && (
        <div className="border-b border-border-default">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="lg:max-w-md">
                <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-2">
                  {footer.newsletterHeadline}
                </h3>
                <p className="text-text-secondary text-sm lg:text-base">
                  {footer.newsletterDescription}
                </p>
              </div>
              <div className="lg:max-w-md w-full lg:w-auto">
                <NewsletterSignup />
                <p className="text-text-tertiary text-xs mt-2">{footer.newsletterPrivacy}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a
              href={resolveHref(ROUTES.HOME)}
              className="inline-flex items-center gap-2 text-text-primary hover:opacity-80 transition-opacity
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600
                         focus-visible:ring-offset-2 rounded-lg mb-4"
              aria-label={`${company.name} - Inicio`}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <span className="text-lg leading-none text-white" aria-hidden="true">
                  ♟
                </span>
              </div>
              <span className="text-lg font-bold tracking-tight">{company.name}</span>
            </a>

            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              {company.shortDescription}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4 text-sm">
              {siteNavigation.footer.product.title}
            </h4>
            <ul className="space-y-3">
              {siteNavigation.footer.product.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4 text-sm">
              {siteNavigation.footer.company.title}
            </h4>
            <ul className="space-y-3">
              {siteNavigation.footer.company.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4 text-sm">
              {siteNavigation.footer.resources.title}
            </h4>
            <ul className="space-y-3">
              {siteNavigation.footer.resources.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4 text-sm">
              {siteNavigation.footer.legal.title}
            </h4>
            <ul className="space-y-3">
              {siteNavigation.footer.legal.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-text-tertiary">
              <span>{copyrightText}</span>
              <span className="hidden sm:inline">-</span>
              <span>{footer.registrationNumber}</span>
            </div>

            {contactEmail && (
              <div className="flex items-center gap-4 text-sm">
                <Link
                  href={`mailto:${contactEmail}`}
                  className="text-text-secondary hover:text-text-primary transition-colors
                             flex items-center gap-1.5 focus:outline-none focus-visible:ring-2
                             focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded"
                  showExternalIcon={false}
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">{contactEmail}</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export interface MinimalFooterProps {
  className?: string;
}

export function MinimalFooter({ className = '' }: MinimalFooterProps) {
  const currentYear = new Date().getFullYear();
  const copyrightText = footer.copyright.replace('{year}', String(currentYear));

  return (
    <footer
      className={`bg-bg-secondary border-t border-border-default py-6 ${className}`}
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-text-tertiary">
          <span>{copyrightText}</span>
          <div className="flex items-center gap-4">
            <FooterLink href={ROUTES.PRIVACY}>Privacidad</FooterLink>
            <FooterLink href={ROUTES.TERMS}>Términos</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
