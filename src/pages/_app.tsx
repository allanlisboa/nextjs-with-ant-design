import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Providers } from 'hooks'

import 'antd/dist/antd.less'
import '../styles/theme.less'
import '../styles/global.less'

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Head>
        <title>Boilerplae NextJS With Antdesign</title>
        <link rel="shortcut icon" href="assets/icon-192.png" />
        <link rel="apple-touch-icon" href="assets/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS, Less and Antdesign"
        />
      </Head>
      <Component {...pageProps} />
    </Providers>
  )
}

export default App
