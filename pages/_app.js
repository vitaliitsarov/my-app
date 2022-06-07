import Head from "next/head";
import { Provider } from "react-redux";
import { store } from '../store/store';
import NextProgress from "next-progress";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
          <NextProgress delay={300} options={{ showSpinner: false }} />
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
      </>
  )
}

export default MyApp
