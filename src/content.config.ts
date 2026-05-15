import { defineCollection, z, type ImageFunction } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/content/blog";
export const PORTFOLIO_PATH = "src/content/portfolio";
export const PAGES_PATH = "src/content/pages";
export const STORIES_PATH = "src/content/stories";

// Helper schema for dates that accepts both string and Date, then transforms to Date
const dateSchema = z
  .union([z.string(), z.date()])
  .transform((val: string | Date) => (typeof val === "string" ? new Date(val) : val));

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }: { image: ImageFunction }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: dateSchema,
      modDatetime: dateSchema.optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      category: z.string().optional(),
      readTime: z.string().optional(),
    }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${PORTFOLIO_PATH}` }),
  schema: () =>
    z.object({
      title: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional(),
      desc: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      pubDatetime: dateSchema.optional(),
      modDatetime: dateSchema.optional().nullable(),
      tags: z.array(z.string()).default(["project"]),
      image: z.string().optional(),
      icon: z.string().optional(),
      category: z.enum(['web', 'tool', 'blog']).or(z.string()).optional(),
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      order: z.number().optional(),
      imageAlt: z.string().optional(),
      links: z
        .array(
          z.object({
            title: z.string(),
            url: z.string().url(),
            icon: z.string().optional(),
          })
        )
        .default([]),
      technologies: z.array(z.string()).default([]),
      ogImage: z.string().optional(),
      timezone: z.string().optional(),
      isSoftware: z.boolean().default(false),
    }).transform(data => ({
      ...data,
      title: data.title || data.name || '',
      description: data.description || data.desc || '',
      imageAlt: data.imageAlt || data.title || data.name,
    })),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: `./${PAGES_PATH}` }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
    }),
});

const stories = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${STORIES_PATH}` }),
  schema: () =>
    z.object({
      title: z.string(),
      excerpt: z.string().optional(),
      date: dateSchema.optional(),
      pubDatetime: dateSchema.optional(),
      modDatetime: dateSchema.optional().nullable(),
      readTime: z.string().optional(),
      category: z.string(),
      featured: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { blog, portfolio, pages, stories };
