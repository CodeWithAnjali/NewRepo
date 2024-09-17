//plansPage.jsx
import React, { useState } from 'react';
import { FaRupeeSign, FaDollarSign } from 'react-icons/fa';

// Data for Rupee and Dollar based countries
const countries = [
  { name: 'India', currency: 'INR', monthly: 39, yearly: 999 },
  { name: 'Pakistan', currency: 'PKR', monthly: 39, yearly: 999 },
  { name: 'Nepal', currency: 'NPR', monthly: 39, yearly: 999 },
  { name: 'Sri Lanka', currency: 'LKR', monthly: 39, yearly: 999 },
  { name: 'Indonesia', currency: 'IDR', monthly: 39, yearly: 999 },
  { name: 'Mauritius', currency: 'MUR', monthly: 39, yearly: 999 },
  { name: 'Seychelles', currency: 'SCR', monthly: 39, yearly: 999 },
  { name: 'United States', currency: 'USD', monthly: 6.99, yearly: 99.99 },
  { name: 'Canada', currency: 'CAD', monthly: 6.99, yearly: 99.99 },
  { name: 'Australia', currency: 'AUD', monthly: 6.99, yearly: 99.99 },
  { name: 'New Zealand', currency: 'NZD', monthly: 6.99, yearly: 99.99 },
  { name: 'Singapore', currency: 'SGD', monthly: 6.99, yearly: 99.99 },
  { name: 'Hong Kong', currency: 'HKD', monthly: 6.99, yearly: 99.99 },
  { name: 'Fiji', currency: 'FJD', monthly: 6.99, yearly: 99.99 },
  { name: 'Jamaica', currency: 'JMD', monthly: 6.99, yearly: 99.99 },
  { name: 'Belize', currency: 'BZD', monthly: 6.99, yearly: 99.99 },
  { name: 'Bahamas', currency: 'BSD', monthly: 6.99, yearly: 99.99 },
  { name: 'Brunei', currency: 'BND', monthly: 6.99, yearly: 99.99 },
  { name: 'Zimbabwe', currency: 'USD', monthly: 6.99, yearly: 99.99 },
];

const PlanPage = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryChange = (e) => {
    const country = countries.find((c) => c.name === e.target.value);
    setSelectedCountry(country);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center p-12 transition-colors duration-500 ${
        selectedCountry.currency.includes('R') ? 'bg-green-100' : 'bg-blue-100'
      }`}
    >
      {/* Progress Bar */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-green-500 h-2 mb-6"></div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-indigo-900">Choose Your Plan</h1>

      {/* Country Selector */}
      <div className="mb-8">
        <label className="text-lg font-medium mr-4">Select Country:</label>
        <select
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          onChange={handleCountryChange}
          value={selectedCountry.name}
        >
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-4xl gap-8">
        {/* Rupees Card */}
        {selectedCountry.currency.includes('R') && (
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-300 text-center transition-transform transform hover:scale-105">
            <h2 className="font-bold text-2xl mb-4 text-green-600">
              {selectedCountry.name} Plan
            </h2>
            <div className="flex justify-center mb-4">
              <FaRupeeSign className="text-4xl text-green-600 animate-bounce" />
            </div>
            <p className="text-xl mb-2 font-semibold">Monthly: ₹{selectedCountry.monthly}</p>
            <p className="text-xl font-semibold">Yearly: ₹{selectedCountry.yearly}</p>
          </div>
        )}

        {/* Dollar Card */}
        {selectedCountry.currency.includes('D') && (
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-300 text-center transition-transform transform hover:scale-105">
            <h2 className="font-bold text-2xl mb-4 text-blue-600">
              {selectedCountry.name} Plan
            </h2>
            <div className="flex justify-center mb-4">
              <FaDollarSign className="text-4xl text-blue-600 animate-spin" />
            </div>
            <p className="text-xl mb-2 font-semibold">Monthly: ${selectedCountry.monthly}</p>
            <p className="text-xl font-semibold">Yearly: ${selectedCountry.yearly}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanPage;





