import Heading from "../text/Heading";
import { Image, StructuredText } from "react-datocms";

export default function ProfileCard({profile}) {
    const { profile: myProfile } = profile
    console.log(myProfile)
    return (
        <div className="w-full p-4 rounded-xl grid grid-cols-3 gap-8">
            <div className="col-span-2 flex flex-col space-y-2">
                <div>
                    <p className="font-bold">
                        👋🏾 Hi, I am {myProfile.firstName} {myProfile.lastName}
                    </p>
                    <Heading size="xl">
                        I am a Fullstack Engineer🚀
                    </Heading>
                    <Heading className="w-max my-2 bg-yellow-500 text-white px-2 py-3 rounded-md shadow-md">
                        building dope tech
                    </Heading>
                </div>

                <div className="mt-4 flex flex-col space-y-4">
                    <StructuredText data={myProfile.description} />
                </div>
            </div>
            <div className="col-span-1">
                <div className="p-4 shadow-sm rounded-md">
                    <Heading size="md">React.JS ⚛️</Heading>
                    <p className="py-1 text-sm">Typescript, Hooks, Redux, State Machines</p>
                    <div className="bg-yellow-100 relative p-1 rounded-full">
                        <div className="absolute left-0 top-0 rounded-full p-1 bg-yellow-500 w-5/6" />
                    </div>
                </div>
            </div>
        </div>
    );
}

