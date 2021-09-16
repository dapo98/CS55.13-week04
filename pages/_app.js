import Head from 'next/head';
import '../styles/globals.css';
import '../styles/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  <Head>
  <meta name = "viewport" content="width=device-width, initial-scale=1"/>
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
