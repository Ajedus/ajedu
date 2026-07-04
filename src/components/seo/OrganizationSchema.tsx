import React from 'react';
import site from '../../config/site';
import { getAssetPath, getPathConfig } from '../../config/paths';

/**
 * OrganizationSchema
 *
 * Renders JSON-LD Organization schema for search engines.
 * This helps with branding in search results and knowledge graphs.
 *
 * @see https://schema.org/Organization
 */
export const OrganizationSchema: React.FC = () => {
  const { company, social, contact } = site;
  const { siteUrl } = getPathConfig();

  const schema = {
    '@context': 'https://schema.org' as const,
    '@type': 'Organization' as const,
    name: company.name,
    alternateName: company.tagline,
    description: company.shortDescription,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject' as const,
      url: `${siteUrl}${getAssetPath('images/ajedu-favicon.png')}`,
    },
    sameAs: [
      social.twitterUrl,
      social.githubUrl,
      social.linkedinUrl,
      social.instagramUrl,
      social.facebookUrl,
      social.youtubeUrl,
      social.discordUrl,
    ].filter(Boolean),
    contactPoint: [
      contact.email && {
        '@type': 'ContactPoint' as const,
        contactType: 'información',
        email: contact.email,
        availableLanguage: ['es'],
      },
    ].filter(Boolean),
    founder: {
      '@type': 'Organization' as const,
      name: company.name,
    },
    foundingDate: String(company.foundedYear),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
