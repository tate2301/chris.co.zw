import Head from "next/head";

export default function FourOrFourPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col h-full">
            <Head>
                <title>DevChallenges 01 - 404 Page</title>
            </Head>
            <div className="py-4">
                <p className="font-medium uppercase">404 not found</p>
            </div>
            <div className="grid grid-cols-2 flex-1 items-center">
                <div className="col-span-2 lg:col-span-1 flex items-center justify-center py-12">
                    <img src="/img/guy-stranded.png" alt="A stranded man" className="w-max-md h-64 lg:h-96" />
                </div>
                <div className="col-span-2 lg:col-span-1 flex flex-col space-y-8 w-max-md py-12">
                    <p className="text-7xl">
                        I have bad news for you
                    </p>
                    <p className="text-xl">
                        The page you are looking for might be removed or is temporarily unavailable
                    </p>
                    <p>
                        <a href="/devchallenges" className="px-8 py-4 bg-gray-900 text-white uppercase">Back to Homepage</a>
                    </p>
                </div>
            </div>
        </div>
    )
}