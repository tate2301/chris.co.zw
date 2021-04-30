import Head from "next/head";
import { StructuredText } from "react-datocms";
import { request } from '../../lib/dato'

export default function BlogPost({data, preview = false}) {
    const { post } = data;
    return (
        <div>
            <Head>
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{
                    "@context": "https://schema.org",
                    "@type": "Newsdata",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://google.com/data"
                    },
                    "headline": ${post.title},
                    "datePublished": ${post.createdAt},
                    "dateModified": ${post.updatedAt || post.createdAt},
                    "author": {
                        "@type": "Person",
                        "name": "Tatenda Christopher Chinyamakobvu"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Tatenda Christopher Chinyamakobvu",
                    }`}} />
                    <title>{post.title}</title>
                </Head>
                <div className="my-12 mx-auto prose">
                    <StructuredText data={post.text} />
                </div>
        </div>
    )
}

export async function getStaticPaths() {
    // @ts-ignore
    const data = await request({ query: `{ allPosts { slug } }` });
    return {
      paths: data.allPosts.map((data) => `/blog/${data.slug}`),
      fallback: false,
    };
}

export async function getStaticProps({ params, preview = false, }: any) {
    const graphqlRequest = {
      query: `query PostBySlug($slug: String) {
          post(filter: {slug: {eq: $slug}}) {
            title
            subtitle
            slug
            text {
                value
            }
            createdAt
          }
        }
      `,
      variables: {
        slug: params.slug,
      },
    };


    return {
      props: {
        // @ts-ignore
        data: await request(graphqlRequest)
      },
    };
  }