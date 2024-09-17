import React, { useState } from 'react';
import { MdHome, MdWork, MdFileCopy, MdEvent, MdArticle, MdSubscriptions, MdManageAccounts, MdRefresh } from 'react-icons/md'; // Updated with MdRefresh as a substitute for MdRenew
import { FaSearch, FaBell } from 'react-icons/fa'; // Include FaSearch and FaBell
import { Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo (1).png';

const Header = () => {
  const [isJobDropdownOpen, setJobDropdownOpen] = useState(null);
  const [isSubscriptionDropdownOpen, setSubscriptionDropdownOpen] = useState(null);

  // Toggle the dropdown for Job menu
  const handleJobDropdownOpen = (event) => {
    setJobDropdownOpen(event.currentTarget);
  };

  const handleJobDropdownClose = () => {
    setJobDropdownOpen(null);
  };

  // Toggle the dropdown for Subscription menu
  const handleSubscriptionDropdownOpen = (event) => {
    setSubscriptionDropdownOpen(event.currentTarget);
  };

  const handleSubscriptionDropdownClose = () => {
    setSubscriptionDropdownOpen(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-200 to-blue-900 shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 text-white">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-16 opacity-80" />
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-6">

       
          <a href="/jobseeker" className="flex items-center hover:text-blue-800 transition-colors">
            <MdHome className="mr-2 text-2xl text-blue-200 hover:text-black transition-colors transform hover:scale-110" /> Home
          </a>

          {/* Job Dropdown */}
          <div className="relative">
            <button
              onClick={handleJobDropdownOpen}
              className="flex items-center hover:text-blue-800 transition-colors"
            >
              <MdWork className="mr-2 text-2xl text-blue-200 hover:text-black transition-colors transform hover:scale-110" /> Jobs
            </button>

            <Menu
              anchorEl={isJobDropdownOpen}
              open={Boolean(isJobDropdownOpen)}
              onClose={handleJobDropdownClose}
              PaperProps={{
                sx: {
                  maxWidth: 200,
                },
              }}
            >
              <MenuItem component={Link} to="/search-jobs" onClick={handleJobDropdownClose}>
                Search Jobs
              </MenuItem>
              
            </Menu>
          </div>

          {/* Subscription Dropdown */}
          <div className="relative">
            <button
              onClick={handleSubscriptionDropdownOpen}
              className="flex items-center hover:text-blue-800 transition-colors"
            >
              <MdSubscriptions className="mr-2 text-2xl text-blue-200 hover:text-black transition-colors transform hover:scale-110" /> Subscription
            </button>

            <Menu
              anchorEl={isSubscriptionDropdownOpen}
              open={Boolean(isSubscriptionDropdownOpen)}
              onClose={handleSubscriptionDropdownClose}
              PaperProps={{
                sx: {
                  maxWidth: 200,
                },
              }}
            >
              <MenuItem component={Link} to="/subscription/plans" onClick={handleSubscriptionDropdownClose}>
                <MdSubscriptions className="mr-2 text-lg text-gray-600" /> Plans
              </MenuItem>
              <MenuItem component={Link} to="/subscription/manage" onClick={handleSubscriptionDropdownClose}>
                <MdManageAccounts className="mr-2 text-lg text-gray-600" /> Manage Subscription
              </MenuItem>
              <MenuItem component={Link} to="/subscription/renew" onClick={handleSubscriptionDropdownClose}>
                <MdRefresh className="mr-2 text-lg text-gray-600" /> Renew Subscription
              </MenuItem>
              <MenuItem component={Link} to="/subscription/usage" onClick={handleSubscriptionDropdownClose}>
                <MdRefresh className="mr-2 text-lg text-gray-600" /> Invoice
              </MenuItem>
            </Menu>
          </div>

          <a href="/resume-builder" className="flex items-center hover:text-blue-800 transition-colors">
            <MdFileCopy className="mr-2 text-2xl text-blue-200 hover:text-black transition-colors transform hover:scale-110" /> Resume Builder
          </a>
         
          <a href="/articles" className="flex items-center hover:text-blue-800 transition-colors">
            <MdArticle className="mr-2 text-2xl text-blue-200 hover:text-black transition-colors transform hover:scale-110" /> Articles
          </a>
        </div>

        {/* Search Box */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-300"
          />
          <FaSearch className="absolute top-2 right-3 w-5 h-5 text-gray-200" />
        </div>

        {/* Notifications */}
        <div className="relative flex items-center">
          <FaBell className="w-6 h-6 text-gray-200 hover:text-black cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
