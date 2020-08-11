import LocationType from '../../types/location'
import { getAllLocationsWithSlug, getLocationBySlug } from '../../../lib/api'

import Layout from '../../components/Layout'
import { GetStaticProps, GetStaticPaths } from 'next'
import { FC } from 'react'
import ContentBlock from '../../components/ContentBlock'

interface Props {
  location: LocationType
}

const Location: FC<Props> = ({ location }) => {
  return (
    <Layout>
      <div>
        <h1>
          {location.city}, {location.state}
        </h1>
        <h2 id="general">General Information</h2>
        <ContentBlock
          name="Housing Costs"
          type="cost"
          info={location.housingCosts}
        />
        <ContentBlock name="Weather" info={location.weather} type="weather" />

        <h2 id="hospitals">Hospitals</h2>
        <ContentBlock
          name="Residency Programs"
          info={location.residencyPrograms}
          type="basicLink"
        />
        <ContentBlock
          name="Hospitals & Quick Info"
          info={location.hospitals}
          type="withNotesLinks"
        />

        <h2 id="work">Work</h2>
        <ContentBlock name="Delta" info={location.delta} type="basicNote" />
        <ContentBlock
          name="Computer Science"
          info={location.computerScience}
          type="withNotesLinks"
        />

        <h2 id="tennis">Tennis</h2>
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

        <h2 id="outdoors">Outdoor Activities</h2>
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
      </div>
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

  return {
    props: {
      location: {
        ...location,
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
