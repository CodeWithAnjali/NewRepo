// src/pages/Contact.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Buttons';
import { TextInput, EmailInput, PhoneInput, TextArea } from '../components/inputfileds/FormFields';

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-indigo-200 min-h-screen flex flex-col items-center py-12 px-4">
      <div className="bg-white shadow-2xl rounded-2xl max-w-6xl w-full p-12 space-y-12">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-center text-gray-500 mb-12">
          Get in Touch
        </h1>

        {/* Contact Information in Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-200 shadow-lg rounded-xl p-6 text-center text-gray-500 transform hover:scale-105 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 text-5xl hover:animate-bounce" />
            </div>
            <h2 className="text-xl font-bold">Email Us</h2>
            <p className="mt-2">info@myjobgator.com</p>
            <p>support@bytelevel.com</p>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-indigo-200 shadow-lg rounded-xl p-6 text-center text-gray-500 transform hover:scale-105 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon icon={faLocationArrow} className="text-gray-500 text-5xl hover:animate-bounce" />
            </div>
            <h2 className="text-xl font-bold">Visit Us</h2>
            <p className="mt-2">101 Morgan Avenue</p>
            <p>Brooklyn, NY 11237, USA</p>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-indigo-200 shadow-lg rounded-xl p-6 text-center text-gray-500 transform hover:scale-105 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon icon={faPhone} className="text-gray-500 text-5xl hover:animate-bounce" />
            </div>
            <h2 className="text-xl font-bold">Call Us</h2>
            <p className="mt-2">USA +1 715 725 0005</p>
            <p>NGN +234 813 553 1603</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-12 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Drop us a Message</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TextInput id="name" name="name" label="Name" placeholder="Your Name" required />
              <EmailInput id="email" name="email" label="Email" placeholder="Your Email" required />
              <PhoneInput id="phone" name="phone" label="Phone" placeholder="Your Phone Number" />
              <TextInput id="subject" name="subject" label="Subject" placeholder="Subject" required />
            </div>
            <TextArea id="message" name="message" label="Your Message" placeholder="Your Message" rows="6" required />
            <Button type="submit" variant="primary" className="w-45%">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
