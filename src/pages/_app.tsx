import NextApp from 'next/app'
import { CacheProvider } from '@emotion/core'
import GoogleFonts from 'next-google-fonts'

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'

import { globalStyles } from '../shared/styles'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <CacheProvider value={cache}>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" />
        {globalStyles}
        <Component {...pageProps} />
      </CacheProvider>
    )
  }
}
