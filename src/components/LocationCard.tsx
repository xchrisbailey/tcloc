import Link from 'next/link'
import { FC } from 'react'

import { imageBuilder } from '../../lib/sanity'

interface Props {
  city: string
  state: string
  cover: string
  summary: string
  slug: string
}

const PostCard: FC<Props> = ({ city, state, cover, summary, slug }) => (
  <article className="flex flex-col w-full bg-white shadow overflow-hidden mb-1 rounded justify-self-center">
    <section className="w-full h-2/5 resize overflow-hidden">
      <img
        src={imageBuilder.image(cover).url()}
        className="w-full h-full object-fill"
        alt={city}
      />
    </section>

    <section className="m-0 bg-gray-800 py-2 px-1">
      <h1 className="text-lg m-0 p-0 text-pink-200 leading-5">{city}</h1>
      <h2 className="m-0 p-0 text-lg text-white leading-5">{state}</h2>
    </section>

    <section className="p-1 flex-grow overflow-hidden">
      <p className="p-1">{summary}</p>
    </section>
    <section className="bg-indigo-200 text-right pr-1 py-2">
      <p className="m-0 p-0 pr-1 text-sm font-bold uppercase">
        <Link as={`/locations/${slug}`} href="/locations/[slug]">
          <a className="text-indigo-800 hover:text-indigo-900 hover:underline">
            Read More
          </a>
        </Link>
      </p>
    </section>
  </article>
)

export default PostCard
