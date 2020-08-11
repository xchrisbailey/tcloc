import client, { previewClient } from './sanity';

const locationFields = `
  city,
  state,
  _createdAt,
  summary,
  'slug': slug.current,
  'cover': cover.asset->url,
  camping,
  computerScience,
  delta,
  hospitals,
  housingCosts,
  residencyPrograms,
  tennisClubs,
  tennisLeagues,
  trails,
  weather
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getAllLocationsWithSlug() {
  const data = await client.fetch(
    `*[_type == "location"]{ 'slug': slug.current }`
  );
  return data;
}

export async function getAllLocations(preview) {
  const results = await getClient(preview).fetch(
    `*[_type == "location"] | order(_createdAt desc){
      city,
      state,
      slug,
      cover,
      summary,
    }`
  );

  return results;
}

export async function getLocationBySlug(slug: string, preview: boolean) {
  const curClient = getClient(preview);
  const location = await curClient.fetch(
    `*[_type == "location" && slug.current == $slug] | order(_createdAt desc) {
        city, 
        state, 
        camping, 
        computerScience, 
        delta, 
        hospitals, 
        housingCosts, 
        residencyPrograms, 
        tennisClubs, 
        tennisLeagues, 
        trails, 
        weather
      }`,
    { slug }
  );

  return location[0];
}
