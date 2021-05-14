import Document, { Html, Head, Main } from 'next/document'
import { FeaturePolyfills, NextScript } from '@engineerapart/nextscript';

const features = [
    FeaturePolyfills.FETCH, // ensures ES6 fetch is available
    FeaturePolyfills.CUSTOMEVENT, // ensures custom event is available
    { // example of how to add any other type of polyfill
      test: `('entries' in Array.prototype)`,
      feature: 'Array.prototype.entries',
    },
  ];
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript features={features} />
        </body>
      </Html>
    )
  }
}

export default MyDocument