import { defineCollection, z } from 'astro:content';

const drafts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.literal('draft'),
    author: z.string(),
  }),
});

export const collections = { drafts };
