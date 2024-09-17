import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const baseStyle = 'py-2 px-4 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary: 'bg-blue-400 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-black',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    info: 'bg-blue-300 hover:bg-blue-400 text-white',
    modal: 'bg-white text-black border border-gray-300 hover:bg-gray-100',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Define PropTypes
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success', 'info', 'modal']),
};

// Define default props
Button.defaultProps = {
  onClick: () => {},
  className: '',
  variant: 'primary',
};

export default Button;
