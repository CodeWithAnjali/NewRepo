// components/BackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <IconButton
      onClick={() => navigate(-1)}
      color="blue" // Ensure the button's color is transparent
      aria-label="go back"
      style={{
        position: 'fixed',
        top: '109px', // Set a small value here, e.g., 10px or adjust as needed
        left: '16px', // Adjust as needed
        zIndex: 1000, // Ensure it's above other content
        backgroundColor: 'transparent', // Transparent background
        borderRadius: '50%', // Rounded button
        boxShadow: 'none', // No shadow for a cleaner look
      }}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;

