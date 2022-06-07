import Head from "next/head";
import { Provider } from "react-redux";
import { store } from '../store/store';
import NextProgress from "next-progress";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="theme-color" content="#000000" />
              <title>Example</title>
          </Head>
          <NextProgress delay={300} options={{ showSpinner: false }} />
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
      </>
  )
}

export default MyApp
