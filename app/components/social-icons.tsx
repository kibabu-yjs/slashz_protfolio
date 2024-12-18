import Image from 'next/image';
import Link from 'next/link';

export default function SocialIcons(){

    return (<div className="flex md:flex-row  lg:flex-row lg:left-1 md:gap-x-3 md:relative md:left-1 md:top-80 ">
      <div className="hs-tooltip  [--placement:bottom] inline-block">
      <Link href={'https://www.facebook.com/kibabu.ahamada'}>
        <Image src={'facebook-white.svg'} alt="facebook" width={35} height={35} className='animate-pulse hover:animate-none hover:size-12' />
      </Link>
      <span className="hs-tooltip-content invisible hs-tooltip-shown:visible text-white text-sm" role="tooltip">
        Facebook
      </span>
      </div>

      <div className="hs-tooltip  [--placement:bottom] inline-block">
        <Link href={'https://www.instagram.com/uchiharedmi/'}>
          <Image src={'instagram.svg'} alt="instagram" width={35} height={35} className='animate-pulse hover:animate-none hover:size-12' />
        </Link>
        <span className="hs-tooltip-content invisible hs-tooltip-shown:visible text-white text-sm" role="tooltip">
          Instagram
        </span>
      </div>
      <div className="hs-tooltip  [--placement:bottom] inline-block">
        <Link href={'linkedin.com/in/muhammad-ben-ahamada'}>
          <Image src={'linkedin.svg'} alt="linkedin" width={35} height={35} className='animate-pulse hover:animate-none hover:size-12' />
        </Link>
        <span className="hs-tooltip-content invisible hs-tooltip-shown:visible text-white text-sm" role="tooltip">
          Linkedin
        </span>
      </div>

      <div className="hs-tooltip  [--placement:bottom] inline-block">
        <Link href={'https://wa.me/+2693318937'}>
          <Image src={'whatsapp.svg'} alt="github" width={35} height={35} className='animate-pulse hover:animate-none hover:size-12'/>
        </Link>
        <span className="hs-tooltip-content invisible hs-tooltip-shown:visible text-white text-sm" role="tooltip">
          Whatsapp
        </span>
      </div>

      <div className="hs-tooltip  [--placement:bottom] inline-block">
        <Link href={'https://github.com/kibabu-yjs'}>
          <Image src={'git.svg'} alt="github" width={35} height={35} className='animate-pulse hover:animate-none hover:size-12' />
        </Link>
        <span className="hs-tooltip-content invisible hs-tooltip-shown:visible text-white text-sm" role="tooltip">
          Github
        </span>
      </div>

    </div>)
}