import * as React from 'react';
import { cn } from '@/utils/cn';
import { getAssetPath, isExternalUrl } from '@/config/paths';

export interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Optional placeholder to show while the image is loading.
   * If true, shows a Skeleton component.
   * If a React node, renders that node.
   * @default true
   */
  placeholder?: boolean | React.ReactNode;
  /**
   * Additional CSS classes for the container
   */
  containerClassName?: string;
  /**
   * Aspect ratio for the container to prevent layout shift (e.g., '16/9')
   */
  aspectRatio?: string | undefined;
}

/**
 * LazyImage Component
 *
 * An enhanced image component that supports:
 * - Native lazy loading
 * - Blur-up transition effect
 * - Skeleton placeholder to prevent CLS (Cumulative Layout Shift)
 * - Error handling
 */
export const LazyImage = React.forwardRef<HTMLImageElement, LazyImageProps>(
  (
    {
      src,
      alt,
      loading = 'lazy',
      className,
      containerClassName,
      placeholder,
      aspectRatio,
      decoding,
      ...props
    },
    ref,
  ) => {
    // If no src, we can't show much
    if (!src) return null;

    // Resolve src if it's a relative path
    const resolvedSrc = src && !isExternalUrl(src) ? getAssetPath(src) : src;

    return (
      <div
        className={cn('relative overflow-hidden bg-bg-tertiary/20', containerClassName)}
        style={{ aspectRatio }}
      >
        {placeholder && placeholder !== true && (
          <div className="absolute inset-0 z-0 flex items-center justify-center">{placeholder}</div>
        )}

        <img
          ref={ref}
          src={resolvedSrc}
          alt={alt}
          loading={loading}
          decoding={decoding || (loading === 'eager' ? 'sync' : 'async')}
          className={cn('relative z-10 block', className)}
          {...props}
        />
      </div>
    );
  },
);

LazyImage.displayName = 'LazyImage';
