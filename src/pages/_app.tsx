require('leaflet/dist/leaflet.css')
import { GoogleFonts } from 'next-google-fonts'
import { AnimatePresence } from 'framer-motion'

import { globalStyles } from '../shared/styles'

const App = ({ Component, pageProps }) => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" />
    {globalStyles}
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  </>
)

export default App
