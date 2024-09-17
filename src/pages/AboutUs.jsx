

import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br  from-blue-50 to-blue-100 min-h-screen flex flex-col items-center py-12 px-4">
      <div className="bg-white shadow-2xl rounded-2xl max-w-7xl w-full p-12 space-y-12">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
          About Us
        </h1>

        {/* Company Overview */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <strong className="text-blue-600">ByteLevels</strong>, we are passionate about bridging the gap between talent and opportunity. Our goal is to provide innovative solutions that empower individuals and businesses to thrive in the digital world. With a focus on technology and human-centric design, we aim to enhance the job search and recruitment process, making it seamless and effective.
          </p>
        </section>

        {/* Our Mission */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission at ByteLevels is to transform the job market by offering cutting-edge tools and a personalized approach to job placement. We strive to create a dynamic ecosystem where job seekers find their ideal roles and employers discover top-tier talent. Our commitment to excellence drives us to continuously improve and innovate.
          </p>
        </section>

        <section className="space-y-6">
  <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 shadow-lg rounded-xl p-6 text-gray-500 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-indigo-200 hover:to-blue-100">
      <h3 className="text-xl font-bold mb-2">Integrity</h3>
      <p>
        We uphold the highest standards of honesty and transparency in all our interactions.
      </p>
    </div>
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 shadow-lg rounded-xl p-6 text-gray-500 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-indigo-200 hover:to-blue-100">
      <h3 className="text-xl font-bold mb-2">Innovation</h3>
      <p>
        We embrace new ideas and technologies to continually improve the job market experience.
      </p>
    </div>
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 shadow-lg rounded-xl p-6 text-gray-500 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-indigo-200 hover:to-blue-100">
      <h3 className="text-xl font-bold mb-2">Commitment</h3>
      <p>
        We are dedicated to helping our clients and users achieve their career goals with unwavering support.
      </p>
    </div>
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 shadow-lg rounded-xl p-6 text-gray-500 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-indigo-200 hover:to-blue-100">
      <h3 className="text-xl font-bold mb-2">Community</h3>
      <p>
        We foster a supportive community that encourages professional growth and collaboration.
      </p>
    </div>
  </div>
</section>

        {/* Why Choose Us */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose ByteLevels?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            ByteLevels stands out for its unique blend of advanced technology and personalized service. Our platform is designed to meet the evolving needs of job seekers and employers alike, offering tools that enhance the recruitment process and provide valuable insights. Choose ByteLevels for a dedicated partner in your professional journey.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
            <li>Advanced technology solutions for job search and recruitment</li>
            <li>Personalized approach tailored to individual needs</li>
            <li>Dedicated support team committed to your success</li>
            <li>Innovative tools and insights for better decision-making</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
