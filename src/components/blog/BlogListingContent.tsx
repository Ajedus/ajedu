import * as React from 'react';
import { BlogPostCard } from '../ui/BlogPostCard';
import { FeaturedPost } from '../ui/FeaturedPost';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { blogPosts } from '@/data/blog';
import { cn } from '@/utils/cn';

const mainBlogTags = ['ajedrez educativo', 'recursos', 'experiencias'] as const;
type MainBlogTag = (typeof mainBlogTags)[number];
const allEntriesLabel = 'Todas las entradas';
const filterTags = [allEntriesLabel, ...mainBlogTags] as const;

export const BlogListingContent: React.FC = () => {
  const [activeTag, setActiveTag] = React.useState<MainBlogTag | typeof allEntriesLabel>(
    allEntriesLabel,
  );
  const filteredPosts = React.useMemo(
    () =>
      activeTag === allEntriesLabel
        ? blogPosts
        : blogPosts.filter((post) => post.tags.includes(activeTag)),
    [activeTag],
  );
  const featuredPost = filteredPosts[0];
  const secondaryPosts = filteredPosts.slice(1);

  return (
    <div className="flex flex-col" data-testid="blog-listing">
      <Section background="default" padding="sm" className="pb-0">
        <Container>
          <div className="flex w-full overflow-x-auto pb-2">
            <div className="mx-auto flex w-fit min-w-full justify-center gap-2 rounded-full border border-border-muted bg-bg-secondary/50 p-1 whitespace-nowrap">
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={cn(
                    'rounded-full px-5 py-2 text-sm font-medium transition-all',
                    activeTag === tag
                      ? 'bg-bg-primary text-text-primary shadow-sm'
                      : 'text-text-muted hover:text-text-primary',
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section background="default" padding="sm" className="pt-8 pb-24">
        <Container>
          {featuredPost ? (
            <>
              <FeaturedPost post={featuredPost} />

              {secondaryPosts.length > 0 && (
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {secondaryPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-border-muted bg-bg-secondary/50 py-20 text-center">
              <h2 className="text-2xl font-bold text-text-primary mb-2">No hay publicaciones</h2>
              <p className="text-text-muted">Todavía no hay artículos en esta categoría.</p>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
};

export default BlogListingContent;
