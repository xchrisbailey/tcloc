import { css } from '@emotion/react'
import { FunctionComponent, ReactNode } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import Header from './Header'
import Container from '../shared/Container'

interface Props {
  children: ReactNode
}

const Layout: FunctionComponent<Props> = ({ children }) => (
  <motion.div
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
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
  </motion.div>
)

export default Layout
