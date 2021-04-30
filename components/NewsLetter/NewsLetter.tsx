import Heading from "../text/Heading";

export default function NewsLetter() {
    return (
        <div
            className="p-4 md:p-8 flex flex-col space-y-4 my-12 rounded-md shadow-md newsletter">
            <div className="flex flex-col">
                <Heading size="md">
                    Sign up for the newsletter
                </Heading>
            </div>
            <p className="text-sm text-gray-500">
                I will send you emails about tech, web development, data science and you will get early access to my articles☺️
            </p>
            <div className="flex">
                <input className="p-4 flex-1" placeholder="me@example.com" />
                <button className="rounded-md px-8 py-4 bg-red-500 text-white">Subscribe</button>
            </div>
        </div>
    )
}