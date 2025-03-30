"use client";
import React from "react";
import { motion } from "framer-motion";
import BackgroundVideo from "../layout/BackgroundVideo";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video with Overlay */}
      <div className="absolute w-full h-full">
        <BackgroundVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
      </div>

      {/* Content Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center text-white px-6 md:px-16 lg:px-32"
      >
        {/* Heading with Animated Effect */}
        <motion.h1 
          initial={{ opacity: 0, y: -20, scale: 0.9 }} 
          animate={{ opacity: 1, y: 0, scale: 1 }} 
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-wide"
        >
          Powering <span className="text-primary">Digital </span> Transformation
        </motion.h1>

        {/* Subtext with Better Readability */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl mt-6 max-w-3xl text-gray-300 leading-relaxed"
        >
          At <span className="text-primary font-bold">Infinet Worx</span>, we deliver cutting-edge solutions that redefine digital experiences. 
          From AI-powered automation to scalable cloud platforms, we shape the future of technology.
        </motion.p>

        {/* Key Points with Animated Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-8 text-gray-200 text-sm md:text-base"
        >
          {[
            "🚀 AI-Powered Innovations",
            "🌎 Scalable Cloud Solutions",
            "🔒 Enterprise-Grade Security",
            "📈 Data-Driven Growth"
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
              className="px-5 py-2 bg-black/50 rounded-full border border-primary shadow-lg text-sm md:text-base font-medium"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons with Dynamic Effects */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 flex space-x-6"
        >
          <button className="bg-primary text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300">
            Get Started
          </button>
          <button className="border border-primary text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-primary/20 hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
