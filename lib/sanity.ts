import { createClient } from 'next-sanity'
import sanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'

const options = {
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-03-25'
}

// const client = sanityClient(options)
const client = createClient(options)
export const imageBuilder = sanityImage(client)
export const previewClient = sanityClient({
  ...options,
  // token: process.env.SANITY_API_TOKEN
})

export default client
