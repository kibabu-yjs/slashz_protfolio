import Image from "next/image";

export default function About() {
    
    return <div className="flex flex-1 flex-col items-center p-28">
        
        <div className="bg-white border rounded-xl shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
            <Image className="size-full absolute top-0 start-0 object-cover" src="/pexels.jpg" alt="Card Image" width={75} height={75} />
        </div>
        <div className="flex flex-wrap">
            <div className="p-4 flex flex-col h-full sm:p-7">
            <h3 className="text-lg font-bold text-gray-800 dark:text-black">
                Dev Web et Mobile junior
            </h3>
            <p className="mt-1">
                Je suis un passionné de l&apos;univers de la programmation et du développement de jeux vidéo, ci-dessous quelques infos sur moi.
            </p>

            <div className="flex flex-row mt-4 justify-start gap-x-2">
                <div className="flex flex-col">
                    <p className="text-lg ">Téléphone: +269 432 89 37</p>
                    <p className="text-lg ">Adresse: Comores, Moroni</p>
                
                    <p className="text-lg ">Email: katchan@slashz.net</p>
                    <p className="text-lg ">Site web: https://katchan.slashz.net</p>
                </div>
            </div>

            <div className="mt-5 sm:mt-auto">
                <p className="text-xs">
                c&apos;est pas tout scrollez!
                </p>
            </div>

            </div>
        </div>
        </div>

    </div>
}