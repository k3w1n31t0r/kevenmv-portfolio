
'use client'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';

const ToogleBars = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
  return (
    <button onClick={toggleMenu} className={`md:hidden`}>
        <FaBars />
    </button>
  )
}

export default ToogleBars