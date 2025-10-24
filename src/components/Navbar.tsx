import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Km2 from '@/public/images/km2.png'
import Navigation from './Navigation';
type NavbarProps = {
    locale: string;
  };
  
const Navbar = ({locale}: NavbarProps) => {

    return (
        // <header className='w-full mx-auto px-12 py-3 fixed top-0 z-50 bg-white border-b border-stone-100'>
        <header className='w-full mx-auto px-12 py-3 relative bg-stone-100 border-b border-stone-200'>
            <div className="w-full flex items-center justify-between">
                <Link className='flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl' href={`/${locale}`}>
                    <Image src={Km2} alt='Image Placeholder dev' className='w-28 h-auto rounded'/>
                </Link>

                <Navigation />
            </div>

        </header>
    )
}

export default Navbar