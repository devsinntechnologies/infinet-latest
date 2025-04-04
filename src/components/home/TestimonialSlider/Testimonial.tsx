"use client";
import React from "react";
import SwiperExample from "./TestimonialSlider";

const Testimonials: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#252525] py-16 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Tag */}
        <div className="inline-block bg-primary text-white uppercase text-xs font-semibold tracking-widest rounded-full px-4 py-1 mb-4 shadow-md">
          Reviews
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          What Our <span className="text-primary">Clients Say</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light max-w-3xl mx-auto mb-10">
          Securing your digital world with cutting-edge solutions for comprehensive data protection. Your trusted partner in cyber resilience.
        </p>

        {/* Swiper Section */}
        <div className="relative z-10 bg-white bg-opacity-5 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl border border-gray-700">
          <SwiperExample />
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-primary rounded-full blur-[90px] opacity-20 animate-pulse"></div>
    </section>
  );
};

export default Testimonials;
