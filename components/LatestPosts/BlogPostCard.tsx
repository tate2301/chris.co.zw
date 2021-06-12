import Link from "next/link";

export default function BlogPostCard({post}) {
    return(
        <Link href={`/blog/${post.slug}`}>
            <a className="hover:underline">
                <div className="pb-2 md:pb-0 block md:flex justify-between">
                    <p>
                        {post.title}
                    </p>
                    <p className="text-gray-500">
                        {post.timeCreated}
                    </p>
                </div>
                <article className="text-md">
                    <p className="truncate ... text-gray-500">{post.subtitle}</p>
                </article>
            </a>
        </Link>
    )
}