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

const PostCard: FC<Props> = ({ city, state, cover, summary, slug }) => {
  return (
    <article className="flex flex-col w-full mb-1 overflow-hidden bg-white rounded shadow justify-self-center">
      <section className="w-full overflow-hidden resize h-2/5">
        <img
          src={imageBuilder.image(cover).url()}
          className="object-fill w-full h-full"
          alt={city}
        />
      </section>

      <section className="px-1 py-2 m-0 bg-gray-800">
        <h1 className="p-0 m-0 text-lg leading-5 tracking-wide text-pink-200">
          {city}
        </h1>
        <h2 className="p-0 m-0 text-lg leading-5 tracking-wide text-white">
          {state}
        </h2>
      </section>

      <section className="flex-grow p-1 overflow-hidden">
        <p className="p-1">{summary}</p>
      </section>
      <section className="py-2 pr-1 text-right bg-indigo-200">
        <p className="p-0 pr-1 m-0 text-sm font-bold uppercase">
          <Link as={`/locations/${slug}`} href="/locations/[slug]">
            <a className="text-indigo-800 hover:text-indigo-900 hover:underline">
              Read More
            </a>
          </Link>
        </p>
      </section>
    </article>
  )
}

export default PostCard
