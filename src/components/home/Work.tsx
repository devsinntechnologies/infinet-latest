"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WorkSection: React.FC = () => {
  return (
    <section
      className="flex items-center justify-start flex-wrap px-5 py-20 min-h-[80vh] bg-white text-[#353232]"
      id="discoverinfinetworx"
    >
      {/* Logo Section */}
      <section className="p-8 mt-0 animate-spin-slow">
        <Image
          className="w-full h-[140px] object-contain"
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          priority
        />
      </section>

      {/* Heading */}
      <h1 className="text-[2.5rem] sm:text-4xl md:text-5xl font-light leading-tight mt-32 mb-10 max-w-[500px] tracking-[3px]">
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ ease: "easeIn", duration: 0.1, delay: 0.7 }}
        >
          How does
          <br />
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ ease: "easeIn", duration: 0.3, delay: 0.7 }}
        >
          <b className="text-[#F48F5D] font-medium text-[2.5rem] sm:text-4xl md:text-5xl">
            Infinetworx
          </b>
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ ease: "easeIn", duration: 0.5, delay: 0.7 }}
        >
          {" "}
          work?
        </motion.span>
      </h1>

      {/* Paragraph Section */}
      <div className="mt-12 ml-8 max-w-[350px] space-y-4">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ ease: "easeIn", duration: 0.1, delay: 0.7 }}
          className="text-[18px] sm:text-[21px] leading-7"
        >
          <b className="text-[#F48F5D]">INFINETWORS</b> is built for peer-to-peer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ ease: "easeIn", duration: 0.3, delay: 0.7 }}
          className="text-[18px] sm:text-[21px] leading-7"
        >
          coordination, shared ownership and the
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ ease: "easeIn", duration: 0.5, delay: 0.7 }}
          className="text-[18px] sm:text-[21px] leading-7"
        >
          formation of communities around
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ ease: "easeIn", duration: 0.5, delay: 0.7 }}
          className="text-[18px] sm:text-[21px] leading-7"
        >
          physical and digital property.
        </motion.p>
      </div>
    </section>
  );
};

export default WorkSection;
