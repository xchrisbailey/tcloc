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
      <section className="grid grid-flow-row grid-cols-1 gap-4 mx-2 md:grid-cols-2 auto-rows-max md:mx-0">
        <div>
          <h1 className="text-3xl font-bold text-pink-600">
            {location.city}, {location.state}
          </h1>
        </div>
        <Map {...coords} />
        {location.housingCosts && (
          <ContentBlock
            name="Housing Costs"
            type="cost"
            info={location.housingCosts}
          />
        )}
        {location.weather && (
          <ContentBlock name="Weather" info={location.weather} type="weather" />
        )}

        {location.hospitals && (
          <ContentBlock
            title="Hospitals"
            name="Hospitals & Quick Info"
            info={location.hospitals}
            type="withNotesLinks"
          />
        )}
        {location.residencyPrograms && (
          <ContentBlock
            name="Residency Programs"
            info={location.residencyPrograms}
            type="basicLink"
          />
        )}

        {location.delta && (
          <ContentBlock name="Delta" info={location.delta} type="basicNote" />
        )}
        {location.computerScience && (
          <ContentBlock
            name="Computer Science"
            info={location.computerScience}
            type="withNotesLinks"
          />
        )}

        {location.tennisClubs && (
          <ContentBlock
            name="Tennis Clubs"
            info={location.tennisClubs}
            type="withNotesLinks"
          />
        )}

        {location.tennisLeagues && (
          <ContentBlock
            name="Tennis Leagues"
            info={location.tennisLeagues}
            type="basicLink"
          />
        )}

        {location.trails && (
          <ContentBlock
            name="Trails (Hiking/Running)"
            info={location.trails}
            type="withNotesLinks"
          />
        )}
        {location.camping && (
          <ContentBlock
            name="Camping"
            info={location.camping}
            type="withNotesLinks"
          />
        )}
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
