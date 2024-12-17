import Link from 'next/link';

export default function PortFolio() {
    
    return (
        <div className={'h-screen bg-black flex flex-col gap-4 justify-center items-center'}>
            <p className="text-white text-lg">Aucun contenu pour l&apos;instant! Ne soyez pas timide(s) <Link href="/contact" className='text-green'>soyez</Link>  le(s) premier(s) </p>
            <p className="text-white text-lg">à tenter l&apos;aventure avec moi!</p>
        </div>
    )
}