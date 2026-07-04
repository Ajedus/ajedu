import React from 'react';
import site from '../../config/site';
import { getPathConfig } from '../../config/paths';

/**
 * WebSiteSchema
 *
 * Renders JSON-LD WebSite schema for search engines.
 * This helps with site-wide indexing and site identity.
 *
 * @see https://schema.org/WebSite
 */
export const WebSiteSchema: React.FC = () => {
  const { company } = site;
  const { siteUrl } = getPathConfig();

  const schema = {
    '@context': 'https://schema.org' as const,
    '@type': 'WebSite' as const,
    name: company.name,
    alternateName: company.tagline,
    url: siteUrl,
    description: company.shortDescription,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
