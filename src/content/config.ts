import { defineCollection, z } from 'astro:content';

const linksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    icon: z.string().describe('Remix Icon class name (e.g., ri-tiktok-fill)'),
    textColor: z.string().default('#E6E6E6'),
    bgColor: z.string().default('#333337'),
    order: z.number().default(0),
  }),
});

export const collections = {
  links: linksCollection,
};
