import { FunctionComponent, ReactNode } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import Header from './Header'

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
    <main className="container mx-auto mb-5">{children}</main>
  </motion.div>
)

export default Layout
