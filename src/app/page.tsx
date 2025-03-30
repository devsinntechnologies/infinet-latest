import React from 'react'
import HeroSection from '../components/home/HeroSection'
import About from '../components/home/About'


const page = () => {
  return (
    <div className='w-full'>
      <HeroSection/>
     <div className='h-[80vh]'> <About/></div>
    </div>
  )
}

export default page