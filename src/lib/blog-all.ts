import { BLOG_POSTS, type BlogPost } from './blog-posts';
import { BLOG_NORMATIVA } from './blog-normativa';
import { BLOG_CASI } from './blog-casi';
import { BLOG_STATE_2026 } from './blog-state-2026';
import { BLOG_DIVULG } from './blog-divulgazione';

export const ALL_BLOG_POSTS: BlogPost[] = [
  ...BLOG_POSTS,
  ...BLOG_NORMATIVA,
  ...BLOG_CASI,
  ...BLOG_STATE_2026,
  ...BLOG_DIVULG,
];

const INDEX = new Map(ALL_BLOG_POSTS.map((p) => [p.slug, p]));

export function findBlogPost(slug: string): BlogPost | undefined {
  return INDEX.get(slug);
}
