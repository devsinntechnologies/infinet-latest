"use client"
import React from 'react';
import Logo from '../Logo';
import BackgroundVideo from '../BackgroundVideo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faInstagram, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedinIn, faInstagram, faDiscord, faGithub);

const FooterBottom = () => {
  return (
    <div className=" text-white w-full h-auto bg-gradient-to-r from-gray-900 to-black">
      {/* <div className="absolute bottom-0   w-full h-auto -z-10">
        <BackgroundVideo />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div> */}

      <div className=" text-white z-10 w-full py-20 lg:px-20 px-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  items-center">
        <div className="flex flex-col h-full text-sm space-y-3 lg:px-8 py-5 ">
          <Logo />
          <p>
            At Infinet Worx, we empower businesses with secure, innovative, and scalable technology solutions.
          </p>
        </div>

        <div className="flex flex-col space-y-3 text-white text-sm py-5 h-full w-full items-center text-left sm:text-center">
          <label className="font-bold">Quick Links</label>
          <ul className="space-y-3 text-left sm:text-center "> 
            <li><a href="developer" className="link">Developer & Companies</a></li>
            <li><a href="creature" className="link">Creature</a></li>
            <li><a href="aboutus" className="link">About Us</a></li>
            <li><a href="contact" className="link">Contact</a></li>
          </ul>
        </div>

        <div className="flex flex-col h-full text-white text-sm space-y-3 w-full py-5 items-center text-left md:text-center">
          <label className="font-bold">Follow Us</label>
          <div className="flex space-x-4 text-xl ">
            <a href="https://linkedin.com" className="link"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://instagram.com" className="link"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://discord.com" className="link"><FontAwesomeIcon icon={faDiscord} /></a>
            <a href="https://github.com" className="link"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-lg font-bold">Join the network today.</h1>
          <a href="started" className="px-6 py-3 bg-primary text-white rounded-lg flex items-center">
            Get Started <FontAwesomeIcon icon={faDiscord} className="ml-3" />
          </a>
        </div>
      </div>

      <div className="relative z-10 text-white w-full bottom-0 bg-primary py-3 md:flex md:flex-row flex flex-col justify-center md:justify-around items-center text-xs">
        <p>© 2024, INFINETWORX. All rights reserved.</p>
        <p>Terms and Conditions | Privacy Policy</p>
      </div>
    </div>
  );
};

export default FooterBottom;
