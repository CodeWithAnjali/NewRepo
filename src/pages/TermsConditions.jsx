import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faShieldAlt, faLock, faGavel, faTimesCircle, faFileAlt, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Terms = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-12 space-y-12 text-gray-900">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-10">
          Terms and Conditions
        </h1>

        {/* Introduction Section */}
        <section>
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faFileAlt} className="text-indigo-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-indigo-600">Introduction</h2>
          </div>
          <p className="text-base leading-relaxed text-gray-700">
            Welcome to our job portal. By accessing or using our site, you agree to comply with and be bound by the following terms and conditions.
          </p>
        </section>

        {/* User Responsibilities */}
        <section>
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faUser} className="text-indigo-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-indigo-600">User Responsibilities</h2>
          </div>
          <p className="text-base leading-relaxed text-gray-700">
            You must be at least 18 years old to use this site. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mt-2">
            Prohibited activities include posting false or misleading job listings, harassment, or any unlawful activities.
          </p>
        </section>

        {/* Job Listings */}
        <section>
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faBriefcase} className="text-indigo-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-indigo-600">Job Listings</h2>
          </div>
          <p className="text-base leading-relaxed text-gray-700">
            All job listings must be accurate and comply with applicable laws. We reserve the right to remove or edit job listings as necessary.
          </p>
        </section>

        {/* User Content */}
        <section>
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faShieldAlt} className="text-indigo-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-indigo-600">User Content</h2>
          </div>
          <p className="text-base leading-relaxed text-gray-700">
            You retain ownership of any content you post. By posting content, you grant us a license to use, display, and distribute it.
          </p>
        </section>

        {/* Site Usage */}
        <section>
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faLock} className="text-indigo-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-indigo-600">Site Usage</h2>
          </div>
          <p className="text-base leading-relaxed text-gray-700">
            We provide access to our site as-is and may modify or discontinue any part of the site without notice.
          </p>
        </section>

        {/* Privacy and Data Protection */}
        <section>
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faExclamationCircle} className="text-indigo-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-indigo-600">Privacy and Data Protection</h2>
          </div>
          <p className="text-base leading-relaxed text-gray-700">
            We collect and use personal data as described in our Privacy Policy. We may share data with third parties as necessary.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faTimesCircle} className="text-indigo-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-indigo-600">Limitation of Liability</h2>
          </div>
          <p className="text-base leading-relaxed text-gray-700">
            We are not liable for any damages arising from the use of our site or the content provided. This includes errors or omissions in job listings.
          </p>
        </section>

        {/* Termination */}
        <section>
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faGavel} className="text-indigo-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-indigo-600">Termination</h2>
          </div>
          <p className="text-base leading-relaxed text-gray-700">
            We reserve the right to terminate your account or access to the site for any reason. You may terminate your account at any time.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faGavel} className="text-indigo-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-indigo-600">Governing Law</h2>
          </div>
          <p className="text-base leading-relaxed text-gray-700">
            These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved in the courts of [Your Jurisdiction].
          </p>
        </section>

        {/* Changes to Terms */}
        <section>
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faFileAlt} className="text-indigo-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold text-indigo-600">Changes to Terms</h2>
          </div>
          <p className="text-base leading-relaxed text-gray-700">
            We may update these terms from time to time. Any changes will be posted on this page, and your continued use of the site constitutes acceptance of the updated terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;

