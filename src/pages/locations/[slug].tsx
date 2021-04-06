import LocationType from '../../types/location'
import { getAllLocationsWithSlug, getLocationBySlug } from '../../../lib/api'
import Layout from '../../components/Layout'
import { GetStaticProps, GetStaticPaths } from 'next'
import { FC } from 'react'
import g from '../../../lib/geocode'
import Map from '../../components/MyMap'
import ContentBlock from '../../components/ContentBlock'

interface Props {
  location: LocationType
  coords: { lat: string; lng: string }
}

const Location: FC<Props> = ({ location, coords }) => {
  return (
    <Layout>
      <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2 auto-rows-max gap-4 mx-2 md:mx-0">
        <div>
          <h1 className="text-3xl font-bold text-pink-600">
            {location.city}, {location.state}
          </h1>
        </div>
        <Map {...coords} />
        <ContentBlock
          name="Housing Costs"
          type="cost"
          info={location.housingCosts}
        />
        <ContentBlock name="Weather" info={location.weather} type="weather" />

        <ContentBlock
          title="Hospitals"
          name="Hospitals & Quick Info"
          info={location.hospitals}
          type="withNotesLinks"
        />
        <ContentBlock
          name="Residency Programs"
          info={location.residencyPrograms}
          type="basicLink"
        />

        <ContentBlock name="Delta" info={location.delta} type="basicNote" />
        <ContentBlock
          name="Computer Science"
          info={location.computerScience}
          type="withNotesLinks"
        />

          <ContentBlock
          name="Tennis Clubs"
            info={location.tennisClubs}
          type="withNotesLinks"
          />
        <ContentBlock
          name="Tennis Leagues"
          info={location.tennisLeagues}
          type="basicLink"
        />

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
      </section>
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
