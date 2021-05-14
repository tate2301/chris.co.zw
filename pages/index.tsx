import Head from 'next/head'
import dynamic from 'next/dynamic'
import { request } from '../lib/dato'

export default function Home({profile, roles, posts}) {
  const Header = dynamic(() => import("../components/Header"))
  const LatestPosts = dynamic(() => import("../components/LatestPosts/LatestPosts"))
  const Roles = dynamic(() => import("../components/Roles/Roles"))
  return (
    <div className="text-gray-700">
      <Head>
        <meta name="description" content="A hands-on Fullstack developer with a focus on Javascript based frameworks and PHP" />
        <title>Tatenda Christopher | Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto">
        <Header profile={profile} />
        <Roles roles={roles} />
        <LatestPosts posts={posts} />
      </main>
    </div>
  )
}

const queryProfile = `
  {
    profile {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      description {
        value
      },
      profilePicture {
        responsiveImage(imgixParams: { fit: crop, auto: format }) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
    }
  }
`

const queryRoles = `
  {
    allRoles {
      jobPosition,
      jobDescription {
        value
      },
      experience
    }
  }
`

const postsQuery = `
  {
    allPosts {
      title,
      subtitle,
      slug
    }
  }
`

export const getStaticProps = async () => {

  //@ts-ignore
  const profile = await request({
    query: queryProfile,
  });

  //@ts-ignore
  const roles = await request({
    query: queryRoles
  })

  //@ts-ignore
  const posts = await request({
    query: postsQuery
  })

  return {
    props: {
      profile,
      roles: roles?.allRoles,
      posts: posts?.allPosts
    }
  };
}