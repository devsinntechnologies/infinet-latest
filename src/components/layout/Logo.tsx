"use client"
import Image from "next/image";
import React, {useState} from 'react'


const Logo = () => {
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the navbar is scrolled


    return (
        <div className='flex items-center gap-2'>
        <Image 
          src="/logo.png" 
          width={50} 
          height={50} 
          alt="Logo" />
          <span className={`company-name ${isScrolled ? 'visible' : ''} md:text-2xl text-lg text-white font-bold`}>
            INFINETWORX
          </span>
        </div>
    )
}
export default Logo