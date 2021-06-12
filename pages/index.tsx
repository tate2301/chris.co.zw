import Head from 'next/head'
import Header from '../components/Header'
import LatestPosts from '../components/LatestPosts/LatestPosts'
import Roles from '../components/Roles/Roles'
import DefaultLayout from '../layouts/default'
import request from '../lib/dato'

//export const config = { amp: "hybrid" };

function Home({profile, roles, posts}) {
  return (
    <div className="text-gray-700">
      <Head>
        <meta name="description" content="A hands-on Fullstack developer with a focus on Javascript based frameworks and PHP" />
        <title>Tatenda Christopher | Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full bg-milk">
        <DefaultLayout>
          <Header profile={profile} />
        </DefaultLayout>
      </div>
      <DefaultLayout>
        <div className="container max-w-4xl mx-auto flex-col space-y-12">
          <Roles roles={roles} />
          <LatestPosts posts={posts} />
        </div>
      </DefaultLayout>
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
      posts: posts?.allPosts?.slice(0, 12)
    }
  };
}

export default Home