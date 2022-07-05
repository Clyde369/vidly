import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'k9ukk7i1',
  dataset: 'production',
  apiVersion: '2022-07-05',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
