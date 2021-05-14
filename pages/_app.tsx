import 'tailwindcss/tailwind.css'
import DefaultLayout from '../layouts/default'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
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
