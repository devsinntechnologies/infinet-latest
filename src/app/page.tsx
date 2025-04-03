import React from 'react'
import HeroSection from '../components/home/HeroSection'
import About from '../components/home/About'
import Service from '../components/home/Service'
import Testimonial from '../components/home/TestimonialSlider/Testimonial'


const page = () => {
  return (
    <div className='w-full'>
      <HeroSection />
      <About />
      <Service/>
      <Testimonial/>
    </div>
  )
}

export default page