import { StructuredText } from "react-datocms";
import Heading from "../text/Heading";

export default function Profile({profile}) {
    return(
        <div>
                <div className="flex flex-col space-y-4">
                    <p className="">
                        👋🏾 Hi, I am {profile.firstName} {profile.lastName}
                    </p>
                    <Heading size="xl">
                        I am a Fullstack Engineer🚀
                    </Heading>
                    <Heading className="w-max my-2 bg-red-500 text-white px-2 py-3 rounded-md shadow-md">
                        building dope tech
                    </Heading>
                </div>

                <div className="mt-4 flex flex-col space-y-4">
                    <StructuredText data={profile.description} />
                </div>
        </div>
    )
}