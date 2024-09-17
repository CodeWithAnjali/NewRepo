import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo_fb.jpg';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner'; 
import Button from '../components/Buttons'; // Import the reusable Button component

const Login = () => {
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleAdminClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/admin');
      setLoading(false);
    }, 1000); 
  };

  const handleJobseekerClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/jobseeker');
      setLoading(false);
    }, 1000); 
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-200 h-screen flex items-center justify-center overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-20">
          <TailSpin color="#00BFFF" height={80} width={80} />
        </div>
      )}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl flex overflow-hidden relative z-10">
        {/* Left Section with Image */}
        <div className="w-1/2 h-full relative hidden md:block">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
            alt="Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        {/* Right Section with Logo and Buttons */}
        <div className="w-full md:w-1/2 p-10 flex flex-col items-center justify-center bg-white relative">
          <div className="relative mb-6 w-40 h-40 flex items-center justify-center">
            {/* Animated Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border-4 border-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full animate-ping"></div>
            </div>
            <img
              src={logo}
              alt="Company Logo"
              className="relative w-32 h-32 object-cover transition-transform transform hover:scale-110 shadow-lg rounded-full animate-bounce"
            />
            {/* Background Highlight */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 rounded-full opacity-20"></div>
          </div>
          <h1 className="text-3xl font-bold mb-6 text-gray-800 animate-pulse">Welcome Back!</h1>
          <div className="flex flex-col items-center space-y-4">
            {/* Buttons Section */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 mb-6">
              {/* Use Button component with appropriate props */}
              <Button
                onClick={handleAdminClick}
                variant="primary"
                className="px-6 py-3"
              >
                Admin
              </Button>
              <Button
                onClick={handleJobseekerClick}
                variant="primary"
                className="px-6 py-3"
              >
                Jobseeker
              </Button>
            </div>

            {/* Horizontal Line with "or" Text */}
            <div className="relative w-full mb-6 flex items-center">
              <hr className="border-gray-300 flex-grow" />
              <span className="mx-4 text-gray-500">or</span>
              <hr className="border-gray-300 flex-grow" />
            </div>
            
            {/* Sign In with Google and LinkedIn Buttons */}
            <Button variant="danger" className="px-6 py-3 flex items-center justify-center mb-2">
              <FaGoogle className="mr-2" /> Sign in with Google
            </Button>
            <Button variant="primary" className="px-6 py-3 flex items-center justify-center">
              <FaLinkedin className="mr-2" /> Sign in with LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
