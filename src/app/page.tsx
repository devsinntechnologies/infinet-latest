'use client';

import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import About from '../components/home/About';
import Service from '../components/home/Service';
import Testimonial from '../components/home/TestimonialSlider/Testimonial';
import FadeInWrapper from '../components/animations/FadwInWrapper';
import ContactForm from '../components/home/ContactForm';

const HomePage: React.FC = () => {

  // Define the createTag function here, if it's not already defined
  const createTag = () => {
    if (typeof document !== "undefined") {
      const tag = document.createElement('div');
      tag.textContent = 'This is a dynamic tag';
      document.body.appendChild(tag);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      createTag();  // Call the function after the component mounts
    }
  }, []);

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
        <Testimonial />
      </FadeInWrapper>

      <FadeInWrapper delay={0.6}>
        <ContactForm />
      </FadeInWrapper>
    </div>
  );
};

export default HomePage;
