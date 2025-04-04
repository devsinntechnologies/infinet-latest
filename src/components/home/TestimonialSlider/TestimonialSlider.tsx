"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Removed Pagination
import "swiper/css";
import "swiper/css/navigation"; // Removed pagination CSS
import "./TestimonialSlider.css";
import Image from "next/image";
import TestimonialsCard from "./TestimonialsCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardContent {
  stars: number;
  content: string;
  avator: string;
  name: string;
  designation: string;
}

const slides: CardContent[] = [
  {
    stars: 5,
    content:
      `Working with Arham Solutions was a game-changer for our app launch. Their team demonstrated outstanding technical skills and project ownership throughout.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "TechNova Inc.",
    designation: "San Francisco, USA",
  },
  {
    stars: 5,
    content:
      `The collaboration was seamless. Timely updates, clean code, and scalable backend design. Highly recommended for startups looking for rapid development.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "VelocitySoft",
    designation: "Berlin, Germany",
  },
  {
    stars: 5,
    content:
      `We've worked with multiple dev teams, but this was by far our best outsourcing experience. Quality-driven and incredibly responsive.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "CloudCore Ltd.",
    designation: "London, UK",
  },
  {
    stars: 5,
    content:
      `From initial consultation to final delivery, the team was extremely professional. They exceeded our expectations in both design and performance.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "NeoGrid Solutions",
    designation: "Toronto, Canada",
  },
  {
    stars: 5,
    content:
      `They delivered a flawless enterprise dashboard with complex API integrations, all within our tight timeline. We're impressed with the results.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "Quantix Analytics",
    designation: "Amsterdam, Netherlands",
  },
  {
    stars: 5,
    content:
      `Reliable, talented, and easy to work with. Their attention to detail and UX considerations made a real difference in our product.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "PixelWorks",
    designation: "Melbourne, Australia",
  },
  {
    stars: 5,
    content:
      `Great technical expertise and strong communication. Our SaaS platform runs smoothly thanks to their backend architecture.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "Infobridge Technologies",
    designation: "Seoul, South Korea",
  },
  {
    stars: 5,
    content:
      `We were looking for a dependable dev partner for our MVP, and Arham's team delivered. They’ve earned our trust for future work.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "BrightLayer Innovations",
    designation: "Dubai, UAE",
  },
];

const SwiperExample: React.FC = () => {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-3">
        <Swiper
          className="testimonialSlider"
          modules={[Navigation]}
          centeredSlides={false}
          initialSlide={6}
          spaceBetween={0}
          slidesPerView={2.5}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: "auto",
              spaceBetween: 20,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 1.7,
              spaceBetween: 10,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 0,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <TestimonialsCard
                stars={slide.stars}
                content={slide.content}
                avator={slide.avator}
                name={slide.name}
                designation={slide.designation}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-7 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-end max-sm:gap-8">
          <div className="flex items-center gap-8">
            <div
              id="slider-button-left"
              className="swiper-button-prev group flex justify-center items-center border border-primary w-12 h-12 transition-all duration-500 rounded-full"
              data-carousel-prev
            >
              <span className="group-hover:text-gray-600 size-8 text-primary">
                <ChevronLeft />
              </span>
            </div>
            <div
              id="slider-button-right"
              className="swiper-button-next group flex justify-center items-center border border-primary w-12 h-12 transition-all duration-500 rounded-full hover:text-white"
              data-carousel-next
            >
              <span className="group-hover:text-gray-600 size-8 text-primary">
                <ChevronRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperExample;
