/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import Container from '../shared/Container'
import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => (
  <header
    css={css`
      background-color: var(--color-green);
      padding: 0.75em 0;
      width: 100%;
      margin-bottom: 1em;
    `}
  >
    <Container>
      <h1
        css={css`
          line-height: 1.25em;
          padding: 0;
          margin: 0;
          font-size: 1.25em;
          font-weight: bold;
          text-align: center;
          @media (min-width: 768px) {
            text-align: inherit;
          }
          a {
            color: var(--color-darkGrey);
            &:hover {
              text-decoration: none;
            }
          }
        `}
      >
        <Link href="/">
          <a href="">Toni and Chris&apos; Location Notebook</a>
        </Link>
      </h1>
    </Container>
  </header>
)

export default Header
