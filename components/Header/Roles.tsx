import { StructuredText } from "react-datocms"
import Heading from "../text/Heading"

export default function Roles({roles}) {
    return(
        <div className="flex flex-col space-y-8">
            {roles?.map((role, key) => (
                <RoleCard
                    key={key}
                    jobPosition={role.jobPosition}
                    jobDescription={role.jobDescription}
                />
            ))}
        </div>
    )
}

function RoleCard({jobPosition, jobDescription}) {
    return(
        <div className="shadow-md rounded-md p-4">
            <Heading size="md">{jobPosition}</Heading>
            <div className="py-1 text-sm">
                <StructuredText data={jobDescription} />
            </div>
        </div>
    )
}