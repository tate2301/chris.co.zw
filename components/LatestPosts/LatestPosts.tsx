import Heading from "../text/Heading";
import BlogPostCard from "./BlogPostCard";

export default function LatestPosts({posts}) {
    return(
        <div className="mt-16 mb-12 flex flex-col">
            <Heading className="underline">Latest articles📝</Heading>
            <div className="my-6 flex flex-col space-y-8">
                {posts?.map((post, key) => (
                    <BlogPostCard post={post} key={key} />
                ))}
            </div>
        </div>
    )
}
