import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp, FaEnvelope, FaMapMarkerAlt, FaShareAlt } from 'react-icons/fa';
import Button from '../components/Buttons'; // Import reusable Button component

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-blue-100 text-black py-12 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Contact Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">
            <FaMapMarkerAlt className="inline-block mr-2 text-blue-600" />
            Contact Info
            <div className="border-t border-gray-600 mt-2 w-12"></div>
          </h3>
          <p className="text-sm mb-4 flex items-center">
            <FaEnvelope className="mr-2" />
            info@byteslevel.com
          </p>
        </div>

        {/* Socials Network */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            <FaShareAlt className="inline-block mr-2 text-blue-600" />
            Socials Network
            <div className="border-t border-gray-600 mt-2 w-12"></div>
          </h3>

          {/* Social Media Buttons */}
          <div className="flex space-x-4">
            <Button
              onClick={() => window.open('https://facebook.com', '_blank')}
             
              className="hover:scale-110 transition-transform"
            >
              <FaFacebook size={24} />
            </Button>
            <Button
              onClick={() => window.open('https://twitter.com', '_blank')}
              variant="primary"
              className="hover:scale-110 transition-transform"
            >
              <FaTwitter size={24} />
            </Button>
            <Button
              onClick={() => window.open('https://instagram.com', '_blank')}
              variant="primary"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram size={24} />
            </Button>
            <Button
              onClick={() => window.open('https://linkedin.com', '_blank')}
              variant="primary"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin size={24} />
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
            <div className="border-t border-gray-600 mt-2 w-12"></div>
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/jobseeker" className="hover:text-yellow-200 transition-colors">Home</a></li>
            <li><a href="/search-jobs" className="hover:text-yellow-200 transition-colors">Jobs</a></li>
            <li><a href="/subscription/plans" className="hover:text-yellow-200 transition-colors">Subscription</a></li>
            <li><a href="/resume-builder" className="hover:text-yellow-200 transition-colors">Resume Builder</a></li>
            <li><a href="/articles" className="hover:text-yellow-200 transition-colors">News Articles</a></li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Our Company
            <div className="border-t border-gray-600 mt-2 w-12"></div>
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-yellow-200 transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-200 transition-colors">Contact Us</a></li>
            <li><a href="/privacy-policy" className="hover:text-yellow-200 transition-colors">Privacy Policy</a></li>
            <li><a href="/terms-conditions" className="hover:text-yellow-200 transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="absolute bottom-4 right-4">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          variant="primary"
          className="text-black p-3 rounded-full hover:bg-blue-500 transition duration-300 shadow-lg"
        >
          <FaArrowUp size={20} />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
