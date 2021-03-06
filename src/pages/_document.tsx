import Document, { Html, Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'
import { ReactElement } from 'react'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: import('next/document').DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    }
  }

  render(): ReactElement {
    return (
      <Html lang="en" id="top">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
