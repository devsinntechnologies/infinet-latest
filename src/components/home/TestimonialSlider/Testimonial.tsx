"use client";
import React from "react";
import SwiperExample from "./TestimonialSlider";

const testimonials: React.FC = () => {
    return (<>
    <div>
        <div className="text-black flex flex-col gap-5 justify-center items-center lg:py-10 pt-8 pb-2">
          <h2 className="bg-[#252525] rounded-full py-1 px-4 tracking-widest text-white xl:text-sm text-xs font-extralight">
            Reviews
          </h2>
          <h1 className="mt-1 xl:text-4xl md:text-3xl sm:text-2xl text-2xl font-black tracking-wider leading-tight">
            <span className="text-primary">
              Client
            </span>{" "}
            Testimonials
          </h1>
          <p className="text-center  mt-1 w-[90%] md:w-[60%] font-thin md:text-base text-[14.5px]">
            Securing your digital world: your trusted partner in data protection
            with cutting-edge solutions for comprehensive data security.
          </p>
        </div>
        <SwiperExample/>
      </div>
    </>);
};

export default testimonials;