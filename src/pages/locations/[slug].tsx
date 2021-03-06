/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import LocationType from '../../types/location'
import { getAllLocationsWithSlug, getLocationBySlug } from '../../../lib/api'
import Layout from '../../components/Layout'
import { GetStaticProps, GetStaticPaths } from 'next'
import { FC } from 'react'
import ContentBlock from '../../components/ContentBlock'
import Grid from '../../shared/Grid'
import g from '../../../lib/geocode'
import Map from '../../components/MyMap'

interface Props {
  location: LocationType
  coords: { lat: string; lng: string }
}

const Location: FC<Props> = ({ location, coords }) => {
  return (
    <Layout>
      <Grid cols={[1, 2, 2]}>
        <div
          css={css`
            @media (min-width: 768px) {
              max-height: 300px;
            }
            @media (min-width: 1280px) {
              max-height: 250px;
            }
          `}
        >
          <h1
            css={css`
              background-color: var(--color-pink);
              color: var(--color-black);
              text-align: center;
              border-radius: 0.1em;
              font-size: 1.5em;
            `}
          >
            {location.city}, {location.state}
          </h1>
        </div>
        <Map {...coords} />
      </Grid>
      <h2 id="general">General Information</h2>
      <Grid cols={[1, 2, 2]}>
        <ContentBlock
          name="Housing Costs"
          type="cost"
          info={location.housingCosts}
        />
        <ContentBlock name="Weather" info={location.weather} type="weather" />
      </Grid>

      <h2 id="hospitals">Hospitals</h2>
      <Grid cols={[1, 2, 2]}>
        <ContentBlock
          name="Hospitals & Quick Info"
          info={location.hospitals}
          type="withNotesLinks"
        />
        <ContentBlock
          name="Residency Programs"
          info={location.residencyPrograms}
          type="basicLink"
        />
      </Grid>

      <h2 id="work">Work</h2>
      <Grid cols={[1, 2, 2]}>
        <ContentBlock name="Delta" info={location.delta} type="basicNote" />
        <ContentBlock
          name="Computer Science"
          info={location.computerScience}
          type="withNotesLinks"
        />
      </Grid>

      <h2 id="tennis">Tennis</h2>
      <Grid cols={[1, 2, 2]}>
        <ContentBlock
          name="Clubs"
          info={location.tennisClubs}
          type="withNotesLinks"
        />
        <ContentBlock
          name="Leagues"
          info={location.tennisLeagues}
          type="basicLink"
        />
      </Grid>

      <h2 id="outdoors">Outdoor Activities</h2>
      <Grid cols={[1, 2, 2]}>
        <ContentBlock
          name="Trails (Hiking/Running)"
          info={location.trails}
          type="withNotesLinks"
        />
        <ContentBlock
          name="Camping"
          info={location.camping}
          type="withNotesLinks"
        />
      </Grid>
    </Layout>
  )
}

export default Location

type Params = {
  params: {
    slug: string
  }
  preview: boolean
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}: Params) => {
  const location = await getLocationBySlug(params.slug, preview)
  const coords = await g.fromAddress(`${location.city}, ${location.state}`)

  const { lat, lng } = coords.results[0].geometry.location

  return {
    props: {
      location: {
        ...location,
      },
      coords: {
        lat,
        lng,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const locations = await getAllLocationsWithSlug()

  return {
    paths:
      locations?.map((location: LocationType) => ({
        params: {
          slug: location.slug,
        },
      })) || [],
    fallback: false,
  }
}
