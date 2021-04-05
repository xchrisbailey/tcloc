import { css } from '@emotion/react'
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
  <article
    css={css`
      display: flex;
      flex-direction: column;
      max-width: 350px;
      background-color: #fff;
      filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
      overflow: hidden;
      margin-bottom: 1em;
      border-radius: 0.25em;
      transition: all 0.1s ease-in-out;
      justify-self: center;
      &:hover {
        filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
        img {
          opacity: 100%;
        }
      }
    `}
  >
    <img
      src={imageBuilder.image(cover).url()}
      css={css`
        object-fit: cover;
        width: 100%;
        height: 250px;
        opacity: 80%;
        transition: opacity 0.2s ease-in-out;
      `}
      alt={city}
    />

    <section
      css={css`
        margin: 0;
        padding: 0.2em 0.4em;
        background-color: var(--color-darkGrey);
        transition: background-color 0.2s;
      `}
    >
      <h1
        css={css`
          margin: 0;
          padding: 0;
          font-size: 1.25em;
          line-height: 1.2em;
          color: var(--color-pink);
        `}
      >
        {city}
      </h1>
      <h2
        css={css`
          margin: 0;
          padding: 0;
          font-size: 0.8em;
          line-height: 1em;
          color: var(--color-white);
          border-bottom: none;
          margin-bottom: 0.3em;
        `}
      >
        {state}
      </h2>
    </section>

    <section
      css={css`
        padding: 0.25em;
        height: 100%;
        overflow: hidden;
      `}
    >
      <p
        css={css`
          font-size: 0.9em;
          line-height: 1.25em;
          margin: 0;
        `}
      >
        {summary}
      </p>
    </section>
    <section
      css={css`
        background-color: var(--color-lightGrey);
        text-align: right;
        padding-right: 0.3em;
      `}
    >
      <p
        css={css`
          margin: 0;
          padding: 0 0 0 0.4em;
          font-size: 0.75em;
          font-weight: bold;
          text-transform: uppercase;
        `}
      >
        <Link as={`/locations/${slug}`} href="/locations/[slug]">
          <a>Read More</a>
        </Link>
      </p>
    </section>
  </article>
)

export default PostCard
