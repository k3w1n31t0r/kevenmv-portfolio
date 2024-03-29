'use client'

import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import Km from '@/public/images/km.png'
import Km2 from '@/public/images/km2.png'
const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    return (
        <header className='bg-gray-200 p-5 flex flex-col md:flex-row items-center justify-between'>
            <div className="mb-4 md:mb-0 flex items-center">
                <Link href={'/'}>
                    <Image src={Km2} alt='Image Placeholder dev' className='w-28 h-auto rounded'/>
                </Link>
            </div>
            {/* <nav className={`md:flex flex-col md:flex-row ${menuOpen ? 'flex' : 'hidden'}`}> */}
            <nav className={`flex flex-col md:flex-row md:max-h-screen md:overflow-visible md:transition-none transition-max-height ease-in-out duration-300 ${menuOpen ? 'active' : ''}`}>

                <Link href="#" className="mb-2 md:mb-0 md:ml-20 font-semibold">
                    Home
                </Link>
                <Link href="#about" className="mb-2 md:mb-0 md:ml-20 font-semibold">
                    About
                </Link>
                <Link href="#projects" className="mb-2 md:mb-0 md:ml-20 font-semibold">
                    Projects
                </Link>
                <Link href="#contact" className="mb-2 md:mb-0 md:ml-20 font-semibold">
                    Contact
                </Link>
            </nav>
            <button onClick={toggleMenu} className={`md:hidden`}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar