import React from 'react';
import site from '../../config/site';
import { getCanonicalUrl, isExternalUrl } from '../../config/paths';

export interface MetaTagsProps {
  /** Page-specific title override */
  title?: string | undefined;
  /** Page-specific description override */
  description?: string | undefined;
  /** Page-specific canonical URL override */
  canonical?: string | undefined;
  /** Robots directive override (default: 'index, follow') */
  robots?: string | undefined;
  /** Current page pathname for auto-canonical generation */
  pathname?: string | undefined;
  /** Open Graph type (default: 'website') */
  ogType?: 'website' | 'article' | 'profile' | undefined;
  /** Page-specific OG image override */
  ogImage?: string | undefined;
  /** Page-specific OG image alternative text */
  ogImageAlt?: string | undefined;
  /** Page-specific Twitter card override (default: from config) */
  twitterCard?: 'summary' | 'summary_large_image' | undefined;
  /** Article publish date for Open Graph */
  publishedTime?: string | undefined;
  /** Article modified date for Open Graph */
  modifiedTime?: string | undefined;
  /** Article tags for Open Graph */
  tags?: string[] | undefined;
}

/**
 * MetaTags Component
 *
 * Renders standard SEO meta tags including title, description,
 * canonical URL, and robots directives.
 * Also includes Open Graph and Twitter tags for social sharing.
 * Uses centralized configuration and path resolution.
 */
export const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  canonical,
  robots,
  pathname = '',
  ogType = 'website',
  ogImage,
  ogImageAlt,
  twitterCard,
  publishedTime,
  modifiedTime,
  tags = [],
}) => {
  const { seo: defaultSeo, getPageTitle } = site;

  // Use utility from site config for consistent title formatting
  const finalTitle = getPageTitle(title);

  // Description fallback
  const finalDescription = description || defaultSeo.defaultDescription;

  // Canonical URL resolution using centralized paths
  const finalCanonical = canonical || getCanonicalUrl(pathname);

  // Robots directive
  const finalRobots = robots || 'index, follow';

  // OG Image resolution
  const socialImage = ogImage || defaultSeo.defaultOgImage;
  const finalOgImage = isExternalUrl(socialImage) ? socialImage : getCanonicalUrl(socialImage);
  const finalOgImageAlt = ogImageAlt || defaultSeo.defaultOgImageAlt;
  const finalOgImageType = socialImage.endsWith('.png')
    ? 'image/png'
    : socialImage.endsWith('.jpg') || socialImage.endsWith('.jpeg')
      ? 'image/jpeg'
      : socialImage.endsWith('.webp')
        ? 'image/webp'
        : undefined;

  // Twitter card resolution
  const finalTwitterCard = twitterCard || defaultSeo.twitterCardType;

  return (
    <>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={finalCanonical} />
      <meta name="robots" content={finalRobots} />

      {/* Standard Meta Tags */}
      <meta name="author" content={defaultSeo.author} />
      <meta name="theme-color" content={defaultSeo.themeColor} />

      {defaultSeo.defaultKeywords.length > 0 && (
        <meta name="keywords" content={defaultSeo.defaultKeywords.join(', ')} />
      )}

      {/* Open Graph Tags */}
      <meta property="og:site_name" content={site.company.name} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:secure_url" content={finalOgImage} />
      {finalOgImageType && <meta property="og:image:type" content={finalOgImageType} />}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={finalOgImageAlt} />
      <meta property="og:locale" content={defaultSeo.locale} />

      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' &&
        tags.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}

      {/* Twitter Tags */}
      <meta name="twitter:card" content={finalTwitterCard} />
      {defaultSeo.twitterSite && <meta name="twitter:site" content={defaultSeo.twitterSite} />}
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:image:alt" content={finalOgImageAlt} />
    </>
  );
};
