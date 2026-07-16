import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    role: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    impact: z.string(),
    image: z.union([image(), z.string()]),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    heroCta: z.object({
      href: z.string(),
      label: z.string(),
    }).optional(),
    liveSite: z.string().optional(),
    weight: z.number(),
    draft: z.boolean().default(false),
    bentoLayout: z.enum(['default', 'span-2-tall', 'span-2-wide']).default('default'),
    bentoAccent: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};
