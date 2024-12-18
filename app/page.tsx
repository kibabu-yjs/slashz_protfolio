'use client';
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import NavLink from "./components/navlink";
import SocialIcons from "./components/social-icons";

export default function Page() {

  const introRef = useRef(null);
  
  useEffect( () => {
    const typed = new Typed(introRef.current, {
      strings: ['Muhammad Ben Ahamada', 'Développeur Web et Mobile junior'],
      typeSpeed: 90,
      loop: true,
      cursorChar:'~',
      fadeOutClass: 'typed-fade-out',
      backSpeed: 100,
      shuffle: true,
      onComplete: () => { 
        
        document.getElementById('navbar')?.classList.remove('invisible') 
      }
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
        <div className="flex flex-col h-screen max-h-screen justify-center items-center bg-black gap-10 ">
          
          <div className="absolute top-10 right-7 md:invisible">
            <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-custom-backdrop-color" data-hs-overlay="#hs-offcanvas-custom-backdrop-color" >
              <Image src={'thunder.svg'} alt={'nav-icon'} width={20} height={35} />
            </button>
          </div>

          
          <div className="flex flex-col gap-4 justify-start">
            <div>
              <p className="text-white lg:text-lg md:text-2xl text-md">Bonjour !</p>
            </div>
            <div>
              <p className="text-white lg:text-lg md:text-2xl text-md">Je suis <span ref={introRef} className="text-green"></span></p>
            </div>

          </div>          
          {/* nav links */}
          <div className="invisible hidden md:flex md:flex-row md:items-center md:gap-x-16" id="navbar">
            
            <NavLink url="Accueil" />
            <NavLink url="Portfolio" />
            <NavLink url="A propos" />
            <NavLink url="Contact" />
          </div>

          {/* social icons */}
          <SocialIcons />
        </div>  
        )
}