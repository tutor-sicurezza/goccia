import { BLOG_POSTS, type BlogPost } from './blog-posts';
import { BLOG_NORMATIVA } from './blog-normativa';
import { BLOG_CASI } from './blog-casi';
import { BLOG_STATE_2026 } from './blog-state-2026';
import { BLOG_DIVULG } from './blog-divulgazione';
import { BLOG_STAGIONALI } from './blog-stagionali';
import { BLOG_INTERVISTE } from './blog-interviste';
import { BLOG_FUTURE } from './blog-future-tech';
import { BLOG_RESEARCH } from './blog-research';

export const ALL_BLOG_POSTS: BlogPost[] = [
  ...BLOG_POSTS,
  ...BLOG_NORMATIVA,
  ...BLOG_CASI,
  ...BLOG_STATE_2026,
  ...BLOG_DIVULG,
  ...BLOG_STAGIONALI,
  ...BLOG_INTERVISTE,
  ...BLOG_FUTURE,
  ...BLOG_RESEARCH,
];

const INDEX = new Map(ALL_BLOG_POSTS.map((p) => [p.slug, p]));

export function findBlogPost(slug: string): BlogPost | undefined {
  return INDEX.get(slug);
}
