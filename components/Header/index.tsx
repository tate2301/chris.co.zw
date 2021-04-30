import Profile from "./Profile";

export default function Header({profile}) {
    const { profile: myProfile } = profile
    return (
        <div className="w-full p-4 rounded-xl text-center">
            <div className="hidden md:flex col-span-3 md:col-span-5 lg:col-span-3 my-4 rounded-md border-2 border-gray-200 px-4 py-2 text-sm w-max mx-auto ...">
                <span className="py-1 px-2 rounded-md bg-red-50 text-red-500 font-bold">
                    Note to Recruiters</span> <span className="ml-2 my-auto">I am open to remote opportunities. I am currently residing in Zimbabwe, GMT +2</span>
            </div>
            <div className="my-16 flex flex-col space-y-2">
                <Profile profile={myProfile} />
                <div className="py-4">
                    <a href="mailto:chris@devtachom" className="underline font-bold text-red-500">
                        Send me an email
                    </a>
                </div>
                <div className="py-1">
                    <p className="text-sm">
                        By the way, I am a self-appointed ambassador of <a
                            className="font-bold underline"
                            rel="noopener"
                            href="https://blitzjs.com/"
                            target="_blank">
                                Blitzjs
                            </a>.
                        Please check it out :)
                    </p>
                </div>
            </div>
        </div>
    );
}

