import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Drawer(){
    
    const path = usePathname()

    return (
    
    <div id="hs-offcanvas-custom-backdrop-color" className="hs-overlay hs-overlay-open:translate-x-0 hs-overlay-backdrop-open:bg-green-950/90 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-black border-e dark:bg-neutral-800 dark:border-neutral-700 dark:hs-overlay-backdrop-open:bg-blue-950/90" role="dialog" tabIndex={-1} aria-labelledby="hs-offcanvas-custom-backdrop-color-label">     
        <div className="columns-1 text-white">
            <div className="px-4 py-5">
                <Link href="/" className={`${path === '/' ? 'text-green': 'text-white'}`}>Accueil</Link>
            </div>
            <div className="px-4 py-3">
                <Link href="/services" className={`${path === '/services' ? 'text-green': 'text-white'}`}>Services</Link>
            </div>
            <div className="px-4 py-3">
                <Link href="/portfolio" className={`${path === '/portfolio' ? 'text-green': 'text-white'}`}>Portfolio</Link>
            </div>
            <div className="px-4 py-3">
                <Link href="/about" className={`${path === '/about' ? 'text-green': 'text-white'}`}>A propos</Link>
            </div>
            <div className="px-4 py-3">
                <Link href="/contact" className={`${path === '/contact' ? 'text-green': 'text-white'}`}>Contact</Link>
            </div>
        </div>
     </div>
    )
}