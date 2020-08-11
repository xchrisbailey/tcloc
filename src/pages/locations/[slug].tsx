/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import LocationType from '../../types/location';
import { getAllLocationsWithSlug, getLocationBySlug } from '../../../lib/api';

import Layout from '../../components/Layout';
import { GetStaticProps, GetStaticPaths } from 'next';
import { FC } from 'react';
import NotesList from '../../components/NotesList';

interface Props {
  location: LocationType;
}

const Location: FC<Props> = ({ location }) => (
  <Layout>
    <div>
      <h1>
        {location.city}, {location.state}
      </h1>
      <h2 id="general">General Information</h2>
      <h3>Housing Costs</h3>
      {location.housingCosts.map((cost) => (
        <div key={cost._key}>
          average {cost.type} cost ${cost.cost} <a href={cost.source}>source</a>
        </div>
      ))}
      <h3>Weather</h3>
      {location.weather.map((w) => (
        <div key={w._key}>
          The {w.type} starts in {w.startMonth} and has an average temperature
          of {w.averageTemperature}°F
        </div>
      ))}
      <h2 id="hospitals">Hospitals</h2>
      <h3>Residency Programs</h3>
      {location.residencyPrograms.map((rp) => (
        <ul key={rp._key}>
          <li>
            <a href={rp.url}>{rp.name}</a>
          </li>
        </ul>
      ))}
      <h3>Hospitals & Quick Info</h3>
      <ul>
        {location.hospitals.map((h) => (
          <li key={h._key}>
            <a href={h.url} target="_blank" rel="noopener noreferrer">
              {h.name}
            </a>
            {h.notes ? <NotesList notes={h.notes} /> : null}
          </li>
        ))}
      </ul>

      <h2 id="work">Work</h2>
      <h3>Delta</h3>
      <NotesList notes={location.delta} />
      <h3>Web Developer</h3>
      <ul>
        {location.computerScience.map((cs) => (
          <li key={cs._key}>
            <a href={cs.url} target="_blank" rel="noopener noreferrer">
              {cs.name}
            </a>
            {cs.notes ? <NotesList notes={cs.notes} /> : null}
          </li>
        ))}
      </ul>
      <h2 id="tennis">Tennis</h2>
      <h3>Clubs</h3>
      <ul>
        {location.tennisClubs.map((tc) => (
          <li key={tc._key}>
            <a href={tc.url} target="_blank" rel="noopener noreferrer">
              {tc.name}
            </a>
            {tc.notes ? <NotesList notes={tc.notes} /> : null}
          </li>
        ))}
      </ul>
      <h3>Leagues</h3>
      <ul>
        {location.tennisLeagues.map((tl) => (
          <li key={tl._key}>
            <a href={tl.url} target="_blank" rel="noopener noreferrer">
              {tl.name}
            </a>
          </li>
        ))}
      </ul>

      <h2 id="outdoors">Outdoor Activities</h2>
      <h3>Trails (Hiking/Running)</h3>
      <ul>
        {location.trails.map((trail) => (
          <li key={trail._key}>
            <a href={trail.url} target="_blank" rel="noopener noreferrer">
              {trail.name}
            </a>
            {trail.notes ? <NotesList notes={trail.notes} /> : null}
          </li>
        ))}
      </ul>

      <h3>Camping</h3>
      <ul>
        {location.camping.map((c) => (
          <li key={c._key}>
            <a href={c.url} target="_blank" rel="noopener noreferrer">
              {c.name}
            </a>
            {c.notes ? <NotesList notes={c.notes} /> : null}
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default Location;

type Params = {
  params: {
    slug: string;
  };
  preview: boolean;
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}: Params) => {
  const location = await getLocationBySlug(params.slug, preview);

  return {
    props: {
      preview,
      location: {
        ...location,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const locations = await getAllLocationsWithSlug();

  return {
    paths:
      locations?.map((location) => ({
        params: {
          slug: location.slug,
        },
      })) || [],
    fallback: true,
  };
};
