import React, {useState} from 'react';
import { Link } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const breakPoints = useBreakpoint()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  
  return(
      <nav className='relative bg-[white] z-20 sm:fixed w-full top-0 left-0' style={{ background:`linear-gradient(112.47deg, #F8FCFA -17.2%, rgba(224, 255, 227, 0.02) 114.3%)`}}>
        <div className='px-1.5 py-4 flex justify-between items-center md:justify-start w-11/12 mx-auto max-w-7xl'>
          <div className='md:min-w-[450px]'><img src='/Reeddi.png' alt='reeddi-logo'/></div>

          <div className='absolute hidden z-10 top-12 bg-[#fff] left-0 w-full flex flex-col justify-start items-start gap-y-4 p-4 md:flex-row justify-between items-center gap-x-8 md:static md:w-fit md:p-0'>
            <span className='text-sm flex justify-between gap-x-2 w-full md:text-xs'>Products <img src={breakPoints.md ? `/arrow-right.svg`:`/arrow-down.svg`} alt='arrow-down'/></span>
            <Link className='text-sm w-full md:text-xs' to='./about' >About</Link>
            <Link className='text-sm w-full md:text-xs' to='./contact' >Contact</Link>
            <Link className='text-sm w-full md:text-xs' to='./blog' >Blog</Link>
          </div>

          <div className='absolute bg-red hidden border top-16 left-0 w-full flex flex-col justify-start items-start gap-y-4 p-4 md:flex-row justify-between items-center gap-x-8 p-0 md:static md:w-fit'>
            <span className='text-sm flex justify-between gap-x-2 w-full md:text-xs'>Products <img src='/arrow-down.svg' alt='arrow-down'/></span>
            <Link className='text-sm w-full md:text-xs' to='./about' >About</Link>
            <Link className='text-sm w-full md:text-xs' to='./contact' >Contact</Link>
            <Link className='text-sm w-full md:text-xs' to='./blog' >Blog</Link>
          </div>

          <div className='md:hidden' onClick={handleToggle}>
            <img src={isOpen ? `/icons/close.svg`:`/icons/menu.svg`} alt='menu'/>
          </div>
        </div>
      </nav>
  );
}


