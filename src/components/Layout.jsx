import React from 'react';
import Header from './Header'; // Ensure the path is correct
import BackButton from './BackButton'; // Import the BackButton component
import Footer from './Footer'; // Import the Footer component
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Fixed Header at the top */}

      {/* Add BackButton with fixed positioning */}
      <div className="fixed top-4 left-4 z-50">
        <BackButton />
      </div>

      {/* Main content area, grows to take available space */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer directly below the main content */}
      <Footer />
    </div>
  );
};

export default Layout;
