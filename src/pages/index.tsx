import { FunctionComponent } from 'react';
import { GetStaticProps } from 'next';

import { getAllLocations } from '../../lib/api';
import Layout from '../components/Layout';
import LocationCard from '../components/LocationCard';
import LocationType from '../types/location';
import Grid from '../shared/Grid';

type HomeProps = {
  allLocations: LocationType[];
};

export const Home: FunctionComponent<HomeProps> = ({ allLocations }) => (
  <Layout>
    <Grid>
      {allLocations.map((location) => (
        <LocationCard
          key={location.city}
          city={location.city}
          state={location.state}
          cover={location.cover}
          summary={location.summary}
          slug={location.slug.current}
        />
      ))}
    </Grid>
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allLocations = await getAllLocations(preview);

  return {
    props: { allLocations, preview },
  };
};

export default Home;
