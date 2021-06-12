import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel={"preload"} href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export const getInitialProps = async ({ Component, ctx }) => {
  let pageProps;
  // Ensure getInitialProps gets called on our child pages
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }
  return { pageProps };
}

export default MyApp
