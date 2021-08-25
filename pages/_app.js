import '../styles/globals.css'

function MyApp({ Component, pageProps, err }) {
  return <Component {...pageProps} err={err} />;
}

export default MyApp
