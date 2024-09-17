import React from 'react';
import Button from '../components/Buttons';  // Import the Button component

const RenewSubscriptionPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex flex-col items-center p-6">
      <header className="bg-transparent text-gray-800 w-full py-4 mb-6 flex items-center justify-center px-4 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold">Renew Subscription</h1>
      </header>

      <main className="flex-grow w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        {/* Current Subscription Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Current Subscription</h2>
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-lg font-medium">Basic Plan</p>
            <p className="text-gray-600">Expires on: October 10, 2024</p>
            <p className="text-gray-600">Next payment: $10</p>
          </div>
        </section>

        {/* Renewal Options */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Renewal Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm hover:bg-blue-100 transition">
              <h3 className="text-lg font-semibold mb-2">Monthly Plan</h3>
              <p className="text-gray-700 mb-2">Renew monthly at $10 per month.</p>
              <Button
                variant="primary"
                className="w-full"
              >
                Renew Monthly
              </Button>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm hover:bg-blue-100 transition">
              <h3 className="text-lg font-semibold mb-2">Yearly Plan</h3>
              <p className="text-gray-700 mb-2">Renew annually at $100 per year (save $20).</p>
              <Button
                variant="primary"
                className="w-full"
              >
                Renew Yearly
              </Button>
            </div>
          </div>
        </section>

        {/* Payment Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-lg font-medium">Payment Method</p>
            <Button
              variant="primary"
              className="w-50%"
            >
              Add Payment Method
            </Button>
            <div className="mt-4">
              <label htmlFor="promo-code" className="block text-lg font-medium mb-2">Promo Code</label>
              <input id="promo-code" type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter promo code" />
            </div>
          </div>
        </section>

        {/* Support and Help */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-700 mb-4">If you have any questions or need assistance, please contact our support team.</p>
          <Button
            variant="primary"
            className="w-50%"
          >
            Contact Support
          </Button>
        </section>
      </main>
    </div>
  );
};

export default RenewSubscriptionPage;
