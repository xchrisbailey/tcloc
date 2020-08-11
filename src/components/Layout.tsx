/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FunctionComponent, ReactNode } from 'react'
import Head from 'next/head'

import Header from './Header'
import Container from '../shared/Container'

type LayoutProps = {
  children: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>location notebook</title>
    </Head>
    <Header />
    <Container
      css={css`
        margin-top: 0.5em;
      `}
    >
      {children}
    </Container>
    <div
      css={css`
        position: -webkit-sticky; /* Safari */
        position: sticky;
        bottom: 0;
        padding: 1em;
      `}
    >
      <a
        css={css`
          font-size: 0.8em;
          background-color: var(--color-yellow);
          border-radius: 0.25em;
          color: var(--color-darkGrey);
          padding: 0.4em 1em;
          filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
          transition: all 0.2s ease-in-out;
          text-transform: uppercase;
          &:hover {
            text-decoration: none;
            filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3));
          }
        `}
        href="#top"
      >
        top
      </a>
    </div>
  </>
)

export default Layout
