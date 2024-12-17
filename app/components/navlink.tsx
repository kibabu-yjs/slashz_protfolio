import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavLink(props: {url:string}) {

    const path = usePathname();
    let route = '';
    if (props.url == 'A propos') {
        
        route = '/about' 
    } else {
        route = props.url !== 'Accueil' ? '/' + props.url.toLowerCase() : '/'
    }
    return <>
        <Link className={`${ path === `${route}` ? 'text-green font-semibold': 'text-white'} font-thin hover:text-xl hover:text-green`} href={`${route}`}>{props.url}</Link>
    </>
}