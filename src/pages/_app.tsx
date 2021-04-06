require('leaflet/dist/leaflet.css')
import { GoogleFonts } from 'next-google-fonts'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" />
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  </>
)

export default App
