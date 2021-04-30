import { StructuredText } from "react-datocms";
import Heading from "../text/Heading";

export default function BlogPostCard({post}) {
    return(
        <div>
            <div className="pb-2 md:pb-0 block md:flex justify-between">
                <Heading size="md">
                    {post.title}
                </Heading>
                <p className="text-gray-500">
                    {post.timeCreated}
                </p>
            </div>
            <article className="ellipsis ...">
                <StructuredText data={post.text} />
            </article>
        </div>
    )
}