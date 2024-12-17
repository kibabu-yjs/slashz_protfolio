import Image from 'next/image';

export default function SocialIcons(){

    return (<div className="flex md:flex-col  md:gap-x-3 flex-col md:relative md:left-96 md:top-36 relative left-40 top-36">
      <div className="hs-tooltip  [--placement:bottom] inline-block">
      <Image src={'facebook-white.svg'} alt="facebook" width={35} height={35} className='md:animate-bounce animate-pulse' />
      <span className="hs-tooltip-content invisible hs-tooltip-shown:visible text-white text-sm" role="tooltip">
        Facebook
      </span>
      </div>

      <div className="hs-tooltip  [--placement:bottom] inline-block">
        <Image src={'instagram.svg'} alt="instagram" width={35} height={35} className='md:animate-bounce animate-pulse' />
        <span className="hs-tooltip-content invisible hs-tooltip-shown:visible text-white text-sm" role="tooltip">
          Instagram
        </span>
      </div>
      <div className="hs-tooltip  [--placement:bottom] inline-block">
        <Image src={'linkedin.svg'} alt="linkedin" width={35} height={35} className='md:animate-bounce animate-pulse' />
        <span className="hs-tooltip-content invisible hs-tooltip-shown:visible text-white text-sm" role="tooltip">
          Linkedin
        </span>
      </div>

      <div className="hs-tooltip  [--placement:bottom] inline-block">
        <Image src={'whatsapp.svg'} alt="github" width={35} height={35} className='md:animate-bounce animate-pulse'/>
        <span className="hs-tooltip-content invisible hs-tooltip-shown:visible text-white text-sm" role="tooltip">
          Whatsapp
        </span>
      </div>

      <div className="hs-tooltip  [--placement:bottom] inline-block">
        <Image src={'git.svg'} alt="github" width={35} height={35} className='md:animate-bounce animate-pulse' />
        <span className="hs-tooltip-content invisible hs-tooltip-shown:visible text-white text-sm" role="tooltip">
          Github
        </span>
      </div>

    </div>)
}