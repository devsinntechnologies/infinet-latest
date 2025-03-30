"use client"
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full h-auto md:flex md:flex-row flex-col  text-white bg-primary'>
      <div className='md:w-[50%] w-full h-full md:px-28 px-12 md:py-20 py-10 space-y-4'> 
        <h1 className='text-3xl font-extrabold'>Start Using AI to Simplify Your Life Today</h1>
        <p className='text-gray-400'>Experience the power of AI for effortless travel booking, smart shopping, and seamless bill payments. Stay organized, save time, and enjoy a hassle-free digital assistant at your fingertips.</p>
        <div className='md:pt-20 pt-8 font-bold'>
        <label htmlFor="">Download Now On:</label>
        <div className='flex gap-3 pt-3'>
        <Image
        src={"/footer/appstore.png"}
        height={180}
        alt='footer'
        width={100}
        className=''
        />
        <Image
        src={"/footer/playstore.png"}
        height={180}
        alt='footer'
        width={100}
        className=''
        />
        </div>
        </div>
      </div>
      <div className='md:w-[50%] w-full  md:px-28 flex flex-col items-center justify-end '>
        <Image 
        src={"/footer/footer-frame.png"}
        height={180}
        alt='footer'
        width={100}
        className='h-[450px] w-[300px]'
        />
      </div>
    </div>
  )
}

export default Footer