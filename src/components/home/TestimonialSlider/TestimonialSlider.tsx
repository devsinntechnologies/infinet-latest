"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TestimonialSlider.css";
import Image from "next/image";
import TestimonialsCard from "./TestimonialsCard";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

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
      `Arham is a skilled, innovative Flutter/FlutterFlow expert with strong leadership, dedication, and holistic thinking. Highly recommended and eager to rehire. `,
    avator: "/images/home/testimonials/avator1.png",
    name: "Taimur Khan",
    designation: "UK",
  },
  {
    stars: 5,
    content:
      `Thank you for your hard work.”`,
    avator: "/images/home/testimonials/avator1.png",
    name: "TrustLab Co., Ltd.",
    designation: "South Korea",
  },
  {
    stars: 5,
    content:
    `Great remote dekstop support. Very professional and knowledgeable. I would highly recommend him.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "Elizabeth",
    designation: "United States",
  },
  {
    stars: 5,
    content:
      `“Amazing experience with this cooperative seller thanks a lot! ”`,
    avator: "/images/home/testimonials/avator1.png",
    name: "toyoucreative",
    designation: "Morocco",
  },
  {
    stars: 5,
    content:
    `Really wonderful experience with that seller I recommended him.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "marwanbougsid",
    designation: "Morocco",
  },
  {
    stars: 5,
    content:
    `An exceptional experience. Anham is very skilled and quick to find a solution. He is my first choice when it comes to Flutterflow back-end support.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "vaidassaltenis",
    designation: "Lithuania",
  },
  {
    stars: 5,
    content:
    `Excellent developer give me best quality of work.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "amritdhr",
    designation: "India",
  },
  {
    stars: 5,
    content:
    `Did a great job`,
    avator: "/images/home/testimonials/avator1.png",
    name: "princessele",
    designation: "United States",
  },
];

const SwiperExample: React.FC = () => {
  return (
    <>
      <div className="py-10">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-3">
          <div className="">
            <Swiper
              className="testimonialSlider"
              modules={[Pagination, Navigation]}
              centeredSlides={false}
              initialSlide={6}
              spaceBetween={0}
              slidesPerView={2.5}
              loop={true}
              pagination={{
                clickable: true,
                el: ".testimonials-pagination",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: "auto",
                  spaceBetween: 40,
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
          </div>
          <div className="mt-7 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
            <div className="testimonials-pagination swiper-pagination"></div> 
            <div className="flex items-center gap-8">
              <div
                id="slider-button-left"
                className="swiper-button-prev group flex justify-center items-center border border-primary w-12 h-12 transition-all duration-500 rounded-full   "
                data-carousel-prev
              >
                <span className="group-hover:text-white size-8 text-primary"><ChevronLeft /></span>
              </div>
              <div
                id="slider-button-right"
                className="swiper-button-next group flex justify-center items-center border border-primary w-12 h-12 transition-all duration-500 rounded-full hover:text-white"
                data-carousel-next
              >  <span className="group-hover:text-white size-8 text-primary "><ChevronRight /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperExample;
