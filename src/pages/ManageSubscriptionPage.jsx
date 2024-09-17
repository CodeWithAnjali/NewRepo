import React from 'react';
import { PencilIcon, CreditCardIcon, CheckCircleIcon } from '@heroicons/react/outline';
import Button from '../components/Buttons';  // Import the Button component

const ManageSubscriptionPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen flex flex-col items-center p-6">
      <header className="bg-transparent text-blue-900 w-full py-4 mb-6 flex items-center justify-center px-4 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold">Manage Subscription</h1>
      </header>

      <main className="flex-grow w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Current Plan</h2>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="text-lg font-medium flex items-center">
              <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
              Basic Plan
            </div>
            <div className="text-gray-600">$10 / month</div>
            <Button
              variant="secondary"
              className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition"
              icon={<PencilIcon className="w-5 h-5" />}
            >
              Edit
            </Button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Upgrade Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm hover:bg-blue-100 transition transform hover:scale-105">
              <h3 className="text-lg font-semibold mb-2">Premium Plan</h3>
              <p className="text-gray-700 mb-2">Access to all features</p>
              <div className="text-gray-600">$25 / month</div>
              <Button
                variant="primary"
                className="mt-4"
              >
                Upgrade
              </Button>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm hover:bg-blue-100 transition transform hover:scale-105">
              <h3 className="text-lg font-semibold mb-2">Enterprise Plan</h3>
              <p className="text-gray-700 mb-2">For large teams</p>
              <div className="text-gray-600">$50 / month</div>
              <Button
                variant="primary"
                className="mt-4"
              >
                Upgrade
              </Button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Manage Payment Methods</h2>
          <Button
            variant="primary"
            className="flex items-center"
            icon={<CreditCardIcon className="w-5 h-5 inline-block mr-2" />}
          >
            Add Payment Method
          </Button>
        </section>
      </main>
    </div>
  );
};

export default ManageSubscriptionPage;
