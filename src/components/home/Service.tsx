// @ts-nocheck

import React from "react";
import { motion } from "framer-motion";
import servicesData from "@/src/components/data/services.json";
import { useRouter } from "next/navigation"; // For dynamic routing


// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Heading: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center text-center gap-4 mb-12"
      id="services"
    >
      <h1 className="text-5xl font-bold text-white drop-shadow-lg">
        Our Premium Services
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl">
      At Infinetworx, we deliver strategic and technical services that accelerate enterprise transformation through Data, Artificial Intelligence, Enterprise Systems, and Professional Services. 
      </p>
    </motion.div>
  );
};

interface ServiceCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  subtitle,
  description,
  index,
}) => {
  const router = useRouter();

  return (
    <motion.div
      onClick={() => router.push(`/services/${id}`)}
      custom={index}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="cursor-pointer relative flex flex-col justify-between bg-white bg-opacity-10 border border-primary p-6 rounded-xl shadow-xl backdrop-blur-md transition-transform duration-300 hover:text-gray-700 hover:scale-105 group"
    >
      <div>
        <h3 className="text-3xl font-semibold opacity-0 group-hover:opacity-100 text-black mb-2">
          {subtitle}
        </h3>
        <h4 className="text-xl text-black font-light opacity-40 group-hover:opacity-100 transition-opacity duration-300">
          {title}
        </h4>
        <p className="text-black text-sm mt-3 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
      <button className="mt-6 self-start px-4 py-2 bg-primary text-white rounded-full hover:bg-white hover:text-primary border border-primary transition duration-300">
        See Details
      </button>
    </motion.div>
  );
};
const Mission: React.FC = () => {
  const services = servicesData.services;

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          title={service.title}
          subtitle={service.subtitle}
          description={service.description}
          index={index}
        />
      ))}
    </motion.div>
  );
};


const ServiceSection: React.FC = () => {
  return (
    <div className="w-full py-20 px-6 sm:px-10 lg:px-24 bg-gradient-to-r from-gray-900 to-black text-white">
      <Heading />
      <Mission />
    </div>
  );
};

export default ServiceSection;
