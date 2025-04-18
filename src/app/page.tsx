'use client';

import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import About from '../components/home/About';
import Service from '../components/home/Service';
import Testimonial from '../components/home/TestimonialSlider/Testimonial';
import FadeInWrapper from '../components/animations/FadwInWrapper';
import ContactForm from '../components/home/ContactForm';
import Work from '../components/home/Work';
import TechnologyStack from '../components/home/TechnologyStack';


const HomePage: React.FC = () => {



  return (
    <div className="w-full ">
      <FadeInWrapper>
        <HeroSection />
      </FadeInWrapper>

      <FadeInWrapper delay={0.2}>
        <About />
      </FadeInWrapper>

      <FadeInWrapper delay={0.4}>
        <Service />
      </FadeInWrapper>


      <FadeInWrapper delay={0.6}>
        <Work />
      </FadeInWrapper>

      <FadeInWrapper delay={0.4}>
        <TechnologyStack />
      </FadeInWrapper>

      <FadeInWrapper delay={0.6}>
        <Testimonial />
      </FadeInWrapper>

      <FadeInWrapper delay={0.6}>
        <ContactForm />
      </FadeInWrapper>
     
    </div>
  );
};

export default HomePage;
