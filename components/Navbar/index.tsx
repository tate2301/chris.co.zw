import Link from "next/link";
import DefaultLayout from "../../layouts/default";

export default function Navbar() {
    return (
        <div className="py-2 bg-milk">
            <DefaultLayout>
                <div className="flex justify-between text-sm">
                    <div className="px-4">
                        <div
                            className="px-4 py-2 font-bold flex space-x-2 items-center"
                            >
                                <div className="h-6 w-6 bg-gray-900 rounded-md"/>
                                <Link href={"/"}>
                                    <a>
                                        chris.co.zw
                                    </a>
                                </Link>
                        </div>
                    </div>


                    <div className="px-4 flex space-x-4">
                        <a
                            className="px-4 py-2 font-bold"
                            href="https://github.com/tate2301/chris.co.zw" 
                            rel="no-opener" 
                            target="blank">
                            Source
                        </a>
                        <a
                            className="px-4 py-2 bg-gray-900 text-white rounded-full font-bold flex items-center"
                            href="https://twitter.com/kamfeskaya" 
                            rel="no-opener" 
                            target="blank">
                            Follow me
                        </a>
                    </div>
                </div>
            </DefaultLayout>
        </div>
        
    )
}