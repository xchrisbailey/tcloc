import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ReactElement } from 'react'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: import('next/document').DocumentContext): Promise<{ styles: JSX.Element; html: string; head?: JSX.Element[] }> {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    }
  }

  render(): ReactElement {
    return (
      <Html lang="en" id="top">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <body className="bg-gray-200 h-100vh">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
