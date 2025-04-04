"use client";

import React from "react";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const FooterBottom = () => {
  return (
    <div className="text-white w-full h-auto bg-gradient-to-r from-gray-900 to-black">
      <div className="z-10 w-full py-20 px-6 sm:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col text-sm space-y-3"
        >
          <Logo />
          <p>
            At Infinet Worx, we empower businesses with secure, innovative, and scalable technology solutions.
          </p>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col space-y-3 text-sm"
        >
          <label className="font-bold">Quick Links</label>
          <ul className="space-y-2">
            <li><a href="/developer" className="hover:text-primary transition">Developer & Companies</a></li>
            <li><a href="/creature" className="hover:text-primary transition">Creature</a></li>
            <li><a href="/aboutus" className="hover:text-primary transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-primary transition">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col space-y-3 text-sm"
        >
          <label className="font-bold">Follow Us</label>
          <div className="flex space-x-5 text-xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </motion.div>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-start space-y-4"
        >
          <h1 className="text-lg font-bold">Join the network today.</h1>
          <a
            href="/started"
            className="px-6 py-3 bg-primary text-white rounded-lg flex items-center hover:bg-white hover:text-primary transition"
          >
            Get Started <FontAwesomeIcon icon={faDiscord} className="ml-3" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-primary py-4 text-xs flex flex-col md:flex-row justify-center md:justify-around items-center text-center gap-2"
      >
        <p>© 2024, INFINETWORX. All rights reserved.</p>
        <p>Terms and Conditions | Privacy Policy</p>
      </motion.div>
    </div>
  );
};

export default FooterBottom;
