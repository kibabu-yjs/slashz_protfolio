import Image from "next/image";

export default function About() {
    
    return <div className="h-screen flex flex-col flex-1 justify-center items-center">
        <div className="bg-blue border rounded-xl ">
            <div className="shrink-0 relative rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
                <Image className="size-full absolute top-0 start-0 object-cover" src="vercel.svg" alt="Card Image" width={35} height={55} />
            </div>
            <div className="flex flex-wrap">
                <div className="p-4 flex flex-col h-full sm:p-7">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    Card title
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                </p>
                <div className="mt-5 sm:mt-auto">
                    <p className="text-xs text-gray-500 dark:text-neutral-500">
                    Last updated 5 mins ago
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
}