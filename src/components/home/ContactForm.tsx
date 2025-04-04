"use client"
import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form submitted:', { fullName, email, message });
  };

  return (
    <div className="flex flex-col md:flex-row lg:p-24 md:p-16 sm:12 p-6 h-auto gap-8 bg-white rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl" id="contact">
      {/* Left Side: Contact Information */}
      <div className="md:w-1/2 ">
        <h2 className="text-3xl font-bold text-dark mb-4">Let's Connect</h2>
        <p className="text-gray-600 mb-8">
          Have questions or need assistance? We're here to help! Reach out to us.
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-dark ">Address</h3>
          <p className="text-gray-600">Level 3 KL Gateway 59200</p>
          <p className="text-gray-600">Kuala Lumpur, Malaysia</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-dark ">Phone</h3>
          <p className="text-gray-600">+6 23 2935 8176</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-dark ">Email</h3>
          <p className="text-gray-600">info@infinetworx.com</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-dark mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-primary hover:text-primary-600 transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-primary hover:text-primary-600 transition-colors duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-primary hover:text-primary-600 transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-primary hover:text-primary-600 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="md:w-1/2 w-full">
        <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8  rounded-2xl">
          <h2 className="text-2xl font-semibold  mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded-lg border text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full  text-white bg-primary py-3 px-6 rounded-lg hover:bg-secondary-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;