'use client';
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import NavLink from "./components/navlink";
import SocialIcons from "./components/social-icons";
import Drawer from "./components/drawer";

export default function Page() {

  const introRef = useRef(null);
  
  useEffect( () => {
    const typed = new Typed(introRef.current, {
      strings: ['Muhammad Ben Ahamada', 'Développeur Junior Web et Mobile'],
      typeSpeed: 70,
      loop: false,
      cursorChar:'_',
      fadeOutClass: 'typed-fade-out',
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
        <div className="flex flex-col h-screen max-h-screen justify-center items-center bg-black gap-10 bg-no-repeat bg-right-bottom" >
          
          <div className="absolute top-10 right-7 md:invisible">
            <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-custom-backdrop-color" data-hs-overlay="#hs-offcanvas-custom-backdrop-color" >
              <Image src={'thunder.svg'} alt={'nav-icon'} width={20} height={35} />
            </button>
          </div>

          <Drawer />
          <p className="text-white md:text-xl text-sm">Bonjour!</p>
          <p className="text-white md:text-xl text-sm">Je suis <span ref={introRef} className="text-green"></span></p>
          
          {/* nav links */}
          <div className="hidden md:flex md:flex-row md:items-center md:gap-x-16">
            
            <NavLink url="Accueil" />
            <NavLink url="Services" />
            <NavLink url="Portfolio" />
            <NavLink url="A propos" />
            <NavLink url="Contact" />
          </div>

          {/* social icons */}
          <SocialIcons />
        </div>  
        )
}