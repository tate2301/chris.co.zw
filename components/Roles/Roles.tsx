import { StructuredText } from "react-datocms"
import Heading from "../text/Heading"

export default function Roles({roles}) {
    return(
        <div className="flex flex-col my-4 space-y-8">
            {roles?.map((role, key) => (
                <RoleCard
                    key={key}
                    jobPosition={role.jobPosition}
                    jobDescription={role.jobDescription}
                    experience={role.experience}
                />
            ))}
        </div>
    )
}

function RoleCard({jobPosition, jobDescription, experience}) {
    return(
        <div className="border border-gray-200 rounded-md p-4 relative">
            <div className="py-1 md:py-0 md:flex justify-between">
                <Heading size="md">{jobPosition}</Heading>
                <p className="text-sm font-bold">{experience} years of experience</p>
            </div>
            <div className="py-1 text-sm">
                <StructuredText data={jobDescription} />
            </div>
        </div>
    )
}