import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class DeferredNextScript extends NextScript {
    getScripts(files) {
      return super.getScripts(files).map(script => {
        return React.cloneElement(script, {
          key: script.props.src,
          defer: true,
          async: false,
        })
      })
    }
    getDynamicChunks(files) {
      return super.getDynamicChunks(files).map(script => {
        return React.cloneElement(script, {
          key: script.props.src,
          defer: true,
          async: false,
        })
      })
    }
  }

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
          <DeferredNextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument