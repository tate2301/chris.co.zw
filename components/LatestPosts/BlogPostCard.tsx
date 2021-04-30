import Link from "next/link";
import { StructuredText } from "react-datocms";
import Heading from "../text/Heading";

export default function BlogPostCard({post}) {
    return(
        <Link href={`/blog/${post.slug}`}>
            <a>
                <div className="pb-2 md:pb-0 block md:flex justify-between">
                    <Heading size="md">
                        {post.title}
                    </Heading>
                    <p className="text-gray-500">
                        {post.timeCreated}
                    </p>
                </div>
                <article className="py-2">
                    <p className="truncate ... text-gray-500">{post.subtitle}</p>
                </article>
            </a>
        </Link>
    )
}