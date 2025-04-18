"use client";
import React from 'react';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import aboutAnimation from '../lottiefiles/about.json';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const AboutSection = () => {
  return (
    <div className="bg-white md:flex md:flex-row flex-col h-auto py-32 items-center sm:px-20 px-10 w-full text-black" id="aboutus">
      {/* Left Content with Animation */}
      <motion.div
        className="lg:w-[50%] w-full text-left space-y-6"
        initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
        animate={{ opacity: 1, y: 0 }} // Fade in and slide up
        transition={{ duration: 1, delay: 0.3 }} // Delay the animation
      >
        <h2 className="text-5xl font-bold text-gray-800 pb-5 sm:pb-10">About Us</h2>
        <p className="xl:text-xl md:text-lg sm:text-2xl text-lg leading-relaxed">
        <span className="font-semibold text-primary">Infinet Worx</span>,is a next-generation technology company specializing in Data Intelligence, Artificial Intelligence, and Digital Systems Architecture. We are committed to driving enterprise innovation through intelligent, data-first strategies that transform operations, accelerate insights, and enable autonomous decision-making at scale.
        </p>
        <p className="xl:text-xl md:text-lg sm:text-2xl text-lg leading-relaxed">
          From AI-driven automation to cloud solutions, we deliver cutting-edge services tailored to your needs.
        </p>
        {/* Contact Details */}
        <motion.div
          className="mt-4 xl:text-xl md:text-lg sm:text-2xl text-lg space-y-2"
          initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
          animate={{ opacity: 1, y: 0 }} // Fade in and slide up
          transition={{ duration: 1, delay: 0.6 }} // Delay this part slightly
        >
          <p>
            <strong>Email:</strong> <a href="mailto:info@infinetworx.com" className="text-primary xl:text-xl">info@infinetworx.co</a>
          </p>
          <p className="xl:text-xl"><strong>Location:</strong> Level 3 KL Gateway, 59200 Kuala Lumpur, Malaysia</p>
          <p><strong>Phone:</strong> <a href="tel:+62329358176" className="text-primary xl:text-xl">+6 23 2935 8176</a></p>
        </motion.div>
      </motion.div>

      {/* Right Side - Lottie Animation with Animation */}
      <motion.div
        className="lg:w-1/2 flex w-full justify-center mt-10 lg:mt-0"
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Fade in
        transition={{ duration: 1, delay: 0.3 }} // Delay for smooth effect
      >
        <Lottie animationData={aboutAnimation} loop={true} className="w-full lg:w-full" />
      </motion.div>
    </div>
  );
};

export default AboutSection;
