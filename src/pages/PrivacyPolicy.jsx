import React from 'react';
import { FaShieldAlt, FaUserShield, FaRegHandshake, FaRegGem, FaLock, FaEdit } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex items-center justify-center py-12">
      <div className="relative bg-white p-8 shadow-lg rounded-lg max-w-4xl mx-auto my-20 text-gray-900">
        {/* Floating Background Elements
        <div className="absolute top-0 left-0 w-60 h-60 bg-gradient-to-br from-blue-300 to-indigo-500  opacity-20 filter blur-lg"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-br from-indigo-300 to-blue-500  opacity-20 filter blur-lg"></div> */}

        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
          Privacy Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center space-x-2">
            <FaShieldAlt className="text-xl" />
            <span>Introduction</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            Welcome to our job portal. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center space-x-2">
            <FaUserShield className="text-xl" />
            <span>Information We Collect</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-700">We collect the following types of information:</p>
          <ul className="list-disc pl-5 space-y-4 text-base text-gray-700">
            <li><strong>Personal Information:</strong> Your name, email address, phone number, and resume data when creating an account or applying for jobs.</li>
            <li><strong>Usage Data:</strong> Your IP address, browser type, pages visited, and time spent on each page.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to track user activity and preferences, which you can manage through your browser settings.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center space-x-2">
            <FaRegHandshake className="text-xl" />
            <span>How We Use Your Information</span>
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-base text-gray-700">
            <li><strong>To Provide Services:</strong> Processing job applications, managing your account, and providing customer support.</li>
            <li><strong>To Improve Our Website:</strong> Analyzing usage data to enhance the functionality and user experience.</li>
            <li><strong>To Communicate with You:</strong> Sending updates, promotions, and relevant job-related information.</li>
            <li><strong>For Legal Compliance:</strong> Ensuring legal compliance, resolving disputes, and enforcing our terms.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center space-x-2">
            <FaRegGem className="text-xl" />
            <span>How We Share Your Information</span>
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-base text-gray-700">
            <li><strong>Employers:</strong> Sharing information to facilitate job applications and recruitment.</li>
            <li><strong>Service Providers:</strong> Third-party vendors assisting us with services like analytics and email marketing.</li>
            <li><strong>Legal Authorities:</strong> Sharing data when legally required or to protect our rights and safety.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center space-x-2">
            <FaLock className="text-xl" />
            <span>Your Rights and Choices</span>
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-base text-gray-700">
            <li><strong>Access and Correction:</strong> Request access to your data and corrections where necessary.</li>
            <li><strong>Opt-Out:</strong> Opt out of marketing communications by following unsubscribe instructions in our emails or contacting us.</li>
            <li><strong>Data Deletion:</strong> Request deletion of your personal data, subject to legal requirements.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center space-x-2">
            <FaEdit className="text-xl" />
            <span>Data Security</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            We implement reasonable measures to protect your data from unauthorized access, though no method is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center space-x-2">
            <FaEdit className="text-xl" />
            <span>Changes to This Privacy Policy</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            We may update this policy periodically, and any changes will be posted here. Continued use of our site implies acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center space-x-2">
            <FaEdit className="text-xl" />
            <span>Contact Us</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="text-base text-gray-700"><strong>Email:</strong> <a href="mailto:support@jobportal.com" className="text-blue-500 hover:underline">support@jobportal.com</a></p>
          <p className="text-base text-gray-700"><strong>Address:</strong> 123 City, TX 12345</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
