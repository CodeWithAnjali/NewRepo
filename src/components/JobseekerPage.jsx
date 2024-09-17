import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";

import { FaChartLine } from "react-icons/fa"; // Adjust the import path as needed

// Import your own images or use stock images
import heroImage from "../assets/backgroundImage.png";
import featureIcon1 from "../assets/jobslogo.png";
import featureIcon2 from "../assets/EasyApplicationProcesslogo.png";
import featureIcon3 from "../assets/ResumeLogo2.png";
import featureIcon4 from "../assets/Adviseicon.png";

import logo1 from "../assets/logo (1).png";
import logoFb from "../assets/logo_fb.jpg";

// Sample testimonials data
const testimonialAvatars = [
  {
    src: logoFb,
    name: "John Doe",
    role: "Software Engineer",
    testimonial:
      "“This platform made my job search so easy and stress-free. Highly recommend!”",
    rating: 5,
  },
  {
    src: logoFb,
    name: "Jane Smith",
    role: "Project Manager",
    testimonial:
      "“The job matching algorithm is fantastic. I found my dream job within a week!”",
    rating: 4,
  },
  {
    src: logoFb,
    name: "Jane Smith",
    role: "Project Manager",
    testimonial:
      "“The job matching algorithm is fantastic. I found my dream job within a week!”",
    rating: 4,
  },
  {
    src: logoFb,
    name: "Jane Smith",
    role: "Project Manager",
    testimonial:
      "“The job matching algorithm is fantastic. I found my dream job within a week!”",
    rating: 4,
  },
  {
    src: logoFb,
    name: "Jane Smith",
    role: "Project Manager",
    testimonial:
      "“The job matching algorithm is fantastic. I found my dream job within a week!”",
    rating: 4,
  },
  {
    src: logoFb,
    name: "Janejj Smith",
    role: "Project Manager",
    testimonial:
      "“The job matching algorithm is fantastic. I found my dream job within a week!”",
    rating: 4,
  },
];

// Function to render star ratings
const starRating = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <FiStar
      key={index}
      className={`text-yellow-500 ${
        index < rating ? "text-yellow-500" : "text-gray-300"
      }`}
    />
  ));
};

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex flex-col items-center">
      {/* Hero Section */}

      <header
  className="relative bg-cover bg-center w-full h-screen flex flex-col items-center justify-center"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  {/* Pseudo-element for background opacity */}
  <div className="absolute inset-0 bg-black opacity-60 pointer-events-none z-0"></div>

  {/* Content remains unaffected */}
  <div className="relative z-10 text-center text-white p-4">
    <h1 className="text-5xl font-bold mb-4">
      Find your Job without any hassle.
    </h1>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Explore the world of job opportunities with our smart job search tools.
    </p>
    <div className="flex justify-center gap-4">
      <input
        type="text"
        placeholder="Search for jobs..."
        className="p-4 rounded-lg shadow-lg border border-gray-300"
      />
      <button className="bg-blue-300 text-gyay p-4 rounded-lg shadow-lg hover:bg-blue-200 transition duration-300">
        Search <FiArrowRight className="inline-block ml-2" />
      </button>
    </div>
  </div>
</header>

      {/* Testimonials Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-center">
          What Our Members Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialAvatars.map((avatar, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative mb-4">
                <img
                  src={avatar.src}
                  alt={avatar.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute bg-gradient-to-r from-blue-500 to-purple-500 w-24 h-24 rounded-full opacity-30"></div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-700 mb-4">{avatar.testimonial}</p>
                <h3 className="font-bold text-lg mb-1">{avatar.name}</h3>
                <p className="text-gray-500 mb-4">{avatar.role}</p>
                <div className="flex justify-center">
                  {starRating(avatar.rating)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

   {/* Key Benefits Section */}
<section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
      Key Benefits of Our Platform
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Benefit 1 */}
      <div className="bg-white p-8 rounded-lg shadow-lg flex items-center border-t-4 border-blue-500 hover:shadow-xl hover:bg-blue-50 transition-all duration-300">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 p-1 flex items-center justify-center">
            <img
              src={featureIcon1}
              alt="Feature 1"
              className="w-16 h-16 object-contain rounded-full transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        <div className="ml-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">Smart Job Matching</h3>
          <p className="text-gray-600">
            Get job recommendations based on your profile and preferences.
          </p>
        </div>
      </div>
      {/* Benefit 2 */}
      <div className="bg-white p-8 rounded-lg shadow-lg flex items-center border-t-4 border-green-500 hover:shadow-xl hover:bg-green-50 transition-all duration-300">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-100 to-green-200 p-1 flex items-center justify-center">
            <img
              src={featureIcon2}
              alt="Feature 2"
              className="w-16 h-16 object-contain rounded-full transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        <div className="ml-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">Easy Application Process</h3>
          <p className="text-gray-600">
            Apply for jobs with a single click using your pre-filled profile.
          </p>
        </div>
      </div>
      {/* Benefit 3 */}
      <div className="bg-white p-8 rounded-lg shadow-lg flex items-center border-t-4 border-red-500 hover:shadow-xl hover:bg-red-50 transition-all duration-300">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-100 to-red-200 p-1 flex items-center justify-center">
            <img
              src={featureIcon3}
              alt="Feature 3"
              className="w-16 h-16 object-contain rounded-full transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        <div className="ml-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">Resume Builder</h3>
          <p className="text-gray-600">
          Create a standout resume with our easy-to-use builder. 
          </p>
        </div>
      </div>
      {/* Benefit 4 */}
      <div className="bg-white p-8 rounded-lg shadow-lg flex items-center border-t-4 border-purple-500 hover:shadow-xl hover:bg-purple-50 transition-all duration-300">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 p-1 flex items-center justify-center">
            <img
              src={featureIcon4}
              alt="Feature 4"
              className="w-16 h-16 object-contain rounded-full transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        <div className="ml-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">Expert Career Advice</h3>
          <p className="text-gray-600">
          Get career-boosting tips from industry experts.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="py-16 px-4 max-w-7xl mx-auto relative">
  <h2 className="text-5xl font-extrabold text-center mb-16 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400">
    Discover Our Unique Features
  </h2>

  {/* Background */}
  <div
    className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed opacity-10 z-0"
    style={{ backgroundImage: "url(/background-pattern.svg)" }}
  ></div>

  <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 z-10">
    {/* LinkedIn Job Matching Feature */}
    <div className="relative p-8 rounded-3xl shadow-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105">
      <div className="absolute top-6 right-6 bg-blue-300 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
        New
      </div>
      <div className="flex justify-center items-center mb-6">
        <FaLinkedin className="w-24 h-24 text-blue-300" />
      </div>
      <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
        LinkedIn Job Matching
      </h3>
      <p className="text-lg text-gray-600 mb-6">
        Easily sync your LinkedIn profile to get personalized job recommendations based on your skills and connections.
      </p>
      <div className="flex items-center justify-between">
        <button className="bg-blue-300 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Connect Now <FiArrowRight className="inline-block ml-2" />
        </button>
        <div className="relative w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 w-4/5 h-full bg-blue-300"></div>
        </div>
      </div>
    </div>

    {/* Personalized Job Suggestions Feature */}
    <div className="relative p-8 rounded-3xl shadow-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105">
      <div className="absolute top-6 right-6 bg-blue-300 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
        Hot
      </div>
      <div className="flex justify-center items-center mb-6">
        <FaUserCog className="w-24 h-24 text-blue-300" />
      </div>
      <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
        Personalized Job Suggestions
      </h3>
      <p className="text-lg text-gray-600 mb-6">
        Unlock personalized job recommendations that are tailored to your experience and preferences.
      </p>
      <div className="flex items-center justify-between">
        <button className="bg-blue-300 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-400 transition duration-300">
          Try It Now <FiArrowRight className="inline-block ml-2" />
        </button>
        <div className="relative w-10 h-10">
          <svg viewBox="0 0 36 36" className="circular">
            <path
              className="circle-bg"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#eee"
              strokeWidth="2.5"
            ></path>
            <path
              className="circle"
              strokeDasharray="80, 100"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#72aef2"
              strokeWidth="2.5"
            ></path>
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold">
            80%
          </div>
        </div>
      </div>
    </div>

    {/* Global Job Market Trends Feature */}
    <div className="relative p-8 rounded-3xl shadow-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105">
      <div className="absolute top-6 right-6 bg-blue-300 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
        Trending
      </div>
      <div className="flex justify-center items-center mb-6">
        <FaChartLine className="w-24 h-24 text-blue-300" />
      </div>
      <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
        Global Job Market Trends
      </h3>
      <p className="text-lg text-gray-600 mb-6">
        Stay updated with the latest hiring trends and industry insights to get ahead in the competitive job market.
      </p>
      <div className="flex items-center justify-between">
        <button className="bg-blue-300 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-400 transition duration-300">
          Explore Trends <FiArrowRight className="inline-block ml-2" />
        </button>
        <div className="relative w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 w-3/5 h-full bg-blue-300"></div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default HomePage;
