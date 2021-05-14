import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';
import { compact, flatten } from 'lodash';
class NextScriptCustom extends NextScript {
  render() {
    const orgNextScripts = flatten(super.render().props.children);

    const scripts = compact(
      orgNextScripts.map((child) => {
        if (child.props.id === '__NEXT_DATA__') {
          return {
            props: { ...child.props },
            content: child.props.dangerouslySetInnerHTML.__html
          };
        }

        if (child?.type === 'script') {
          return {
            props: { ...child.props },
            content: ''
          };
        }

        return null;
      })
    );

    const initialFilterer = props => !props.src || !props.src.includes('chunk');
    const initialLoadScripts = scripts.filter(({ props }) => initialFilterer(props));
    const chunkedScripts = scripts.filter(({ props }) => !initialFilterer(props));

    const jsContent = `
      var chunkedScripts = ${JSON.stringify(chunkedScripts)};
      setTimeout(() => {
        chunkedScripts.map((script) => {
          if (!script || !script.props) return;
          try {
            var scriptTag = document.createElement('script');

            scriptTag.src = script.props.src;
            scriptTag.async = false;
            scriptTag.defer = true;

            if (script.props.id) scriptTag.id = script.props.id;
            if (script.content) scriptTag.innerHTML = script.content;
            document.body.appendChild(scriptTag);
          }
          catch(err) {
            console.log(err);
          }
        });
      // 1800ms seems like when PageSpeed Insights stop waiting for more js
      }, 1800);
    `;

    return (
      <>
        {initialLoadScripts.map(({ props }) => (
          !props?.src?.includes("framework") && <script key={props.id} {...props} src={props.src} />
        ))}

        <script id="__NEXT_SCRIPT_CUSTOM" defer dangerouslySetInnerHTML={{ __html: jsContent }} />
      </>
    );
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
          <NextScriptCustom />
        </body>
      </Html>
    )
  }
}

export default MyDocument