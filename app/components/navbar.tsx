'use client';
import Drawer from "./drawer";
import NavLink from "./navlink";
import Image from "next/image";

export default function LayOutNav(){

    return <>
        <div className="hidden lg:flex lg:flex-row lg:justify-end md:flex md:flex-row md:justify-end gap-x-6 p-12">
        
            <NavLink url="Accueil" />
            <NavLink url="Portfolio" />
            <NavLink url="A propos" />
            <NavLink url="Contact" />
            
        </div>
        <div className="absolute top-10 right-7 md:invisible">
            <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-custom-backdrop-color" data-hs-overlay="#hs-offcanvas-custom-backdrop-color" >
                <Image src={'thunder.svg'} alt={'nav-icon'} width={20} height={35} />
            </button>
        </div>
        <Drawer />
    </>
}