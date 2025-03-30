"use client";
import React from "react";
import Lottie from "lottie-react";
import Image from "next/image";
import aboutAnimation from "../lottiefiles/about.json"; 

const AboutSection = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center px-6 lg:px-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0  opacity-40">
        <Image 
          src="/about.jpg" 
          alt="About Us" 
          layout="fill" 
          objectFit="cover" 
          className="w-full h-full "
        />
        <div className="absolute inset-0  bg-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-7xl text-black py-16">
        {/* Left Content */}
        <div className="lg:w-1/2 text-left space-y-6">
          <h2 className="text-5xl font-bold shadow-xl text-primary py-10">About Us</h2>
          <p className="text-2xl leading-relaxed">
            At <span className="font-semibold text-primary">Infinet Worx</span>, we provide innovative and scalable 
            technology solutions that drive business success. Our expertise transforms digital experiences, fostering 
            growth and efficiency.
          </p>
          <p className="text-2xl  leading-relaxed">
            From AI-driven automation to cloud solutions, we deliver cutting-edge services tailored to your needs.
          </p>

          {/* Contact Details */}
          <div className="mt-4 text-2xl  space-y-2">
            <p><strong>Email:</strong> <a href="mailto:info@infinetworx.co" className="text-primary">info@infinetworx.co</a></p>
            <p><strong>Location:</strong> Level 3 KL Gateway, 59200 Kuala Lumpur, Malaysia</p>
            <p><strong>Phone:</strong> <a href="tel:+62329358176" className="text-primary">+6 23 2935 8176</a></p>
          </div>
        </div>

        {/* Right Side - Lottie Animation */}
        {/* <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <Lottie animationData={aboutAnimation} loop={true} className="w-60 lg:w-96" />
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection;
