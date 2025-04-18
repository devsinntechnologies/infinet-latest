"use client";

import React from "react";
import {
  FaRobot,
  FaChartBar,
  FaCogs,
  FaShieldAlt,
  FaCode,
  FaBrain,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactElement;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  description,
  icon,
  index,
}) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="relative bg-white bg-opacity-10 border border-primary p-8 rounded-xl shadow-xl backdrop-blur-md transition-transform duration-300 hover:text-gray-700 hover:scale-105 group"
    >
      <div className="text-5xl text-primary mb-2">{icon}</div>
      <h3 className="text-3xl font-semibold opacity-0 group-hover:opacity-100 text-black mb-2">
        {subtitle}
      </h3>
      <h4 className="text-xl text-black font-light opacity-40 group-hover:opacity-100 transition-opacity duration-300">
        {title}
      </h4>
      <p className="text-black mt-3 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </p>
    </motion.div>
  );
};

const Mission: React.FC = () => {
  const services = [
    {
      subtitle: "Professional",
      title: "Services",
      description: "Our Professional Services team provides strategic guidance, technical delivery, and on-ground execution to help enterprises meet business goals with precision and speed.",
      icon: <FaCogs />,
    },
    {
      subtitle: "Intelligent Automation ",
      title: "& Integration",
      description:
        "We bridge system silos and streamline operations with smart integration patterns and AI-powered process automation frameworks.",
      icon: <FaBrain />,
    },
    {
      subtitle: "SAP Services",
      title: "& Implementation",
      description: "We offer comprehensive SAP consulting, implementation, and integration services, enabling businesses to fully leverage SAP S/4HANA, SAP BTP, and other modules for operational excellence.",
      icon: <FaCode />,
    },
    {
      subtitle: "Governance, Security ",
      title: "& Compliance",
      description:
        "We help organizations establish a foundation of trust, compliance, and control across the entire data and application landscape.",
      icon: <FaRobot />,
    },
    {
      subtitle: "Application",
      title: "Security",
      description:
        "Protecting your digital assets with cutting-edge security solutions.",
      icon: <FaShieldAlt />,
    },
    {
      subtitle: "Data",
      title: "and AI",
      description:
        "We design intelligent ecosystems that transform raw data into actionable intelligence using scalable cloud-native platforms and cutting-edge AI.",
      icon: <FaChartBar />,
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} index={index} />
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
