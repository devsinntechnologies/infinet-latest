"use client";
import React from "react";
import Lottie from "lottie-react";
import aboutAnimation from "../lottiefiles/about.json"; 

const AboutSection = () => {
  return (

    
      <div className="bg-white md:flex md:flex-row flex-col h-auto py-32 items-center sm:px-20 px-10  w-full text-black ">
        {/* Left Content */}
        <div className="lg:w-[50%] w-full text-left space-y-6">
          <h2 className="text-5xl font-bold text-primary pb-5 sm:pb-10">About Us</h2>
          <p className="xl:text-2xl md:text-lg sm:text-2xl text-lg leading-relaxed">
            At <span className="font-semibold text-primary">Infinet Worx</span>, we provide innovative and scalable 
            technology solutions that drive business success. Our expertise transforms digital experiences, fostering 
            growth and efficiency.
          </p>
          <p className="xl:text-2xl md:text-lg sm:text-2xl text-lg  leading-relaxed">
            From AI-driven automation to cloud solutions, we deliver cutting-edge services tailored to your needs.
          </p>
          {/* Contact Details */}
          <div className="mt-4 xl:text-2xl md:text-lg sm:text-2xl text-lg space-y-2">
            <p><strong>Email:</strong> <a href="mailto:info@infinetworx.com" className="text-primary">info@infinetworx.co</a></p>
            <p><strong>Location:</strong> Level 3 KL Gateway, 59200 Kuala Lumpur, Malaysia</p>
            <p><strong>Phone:</strong> <a href="tel:+62329358176" className="text-primary">+6 23 2935 8176</a></p>
          </div>
        </div>

        {/* Right Side - Lottie Animation */}
        <div className="lg:w-1/2 flex w-full justify-center mt-10 lg:mt-0">
          <Lottie animationData={aboutAnimation} loop={true} className="w-full lg:w-full" />
        </div>
      </div>
  
  );
};

export default AboutSection;
