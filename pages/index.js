import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <div className="py-4">
          <p className="text-3xl lg:text-6xl font-bold text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500">
            I’m Tatenda Christopher, a Software Engineer and 
            Designer based in Zimbabwe. Specializing in creating
            products for people, on the web and on mobile devices.
          </p>
        </div>
        <div className="py-4 lg:py-12">
          <p>
            I am a specialized in developing beautiful, intuitive 
            interfaces for mobile devices and the big screen. I have worked
            with a few startups and I am always ready to work on the next big thing.
          </p>

          <p className="pt-4">
            I am experienced in React, TailwindCSS, Node JS, PHP, Wordpress, Spring Boot, 
            SwiftUI and Kotlin for Android. 
          </p>
        </div>

        <div className="py-4">
          <a className="font-medium text-gray-800 text-xl" href="#">
            Have an exciting project? Let’s connect ->
          </a>
        </div>

        <div className="pt-8 lg:pt-12">
          <p className="flex space-x-4 text-blue-500">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            <span>
              Currently available for freelance or full-time work
            </span>
          </p>
        </div>
      </main>
    </div>
  )
}
