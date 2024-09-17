import React from 'react';
import logo from '../assets/logo_fb.jpg';
import { FaDownload, FaQuestionCircle, FaPhone } from 'react-icons/fa'; // Importing icons
import Button from '../components/Buttons'; // Import the Button component

const InvoicePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex flex-col items-center p-6">
      <header className="bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-lg rounded-lg w-full max-w-4xl p-6 mb-6 flex items-center justify-between">
        <img src={logo} alt="Company Logo" className="h-12" />
        <h1 className="text-3xl font-bold">Invoice</h1>
      </header>

      <main className="flex-grow w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {/* Billing Information */}
        <section className="mb-6 bg-blue-50 rounded-lg p-4 shadow-md">
          <div className="flex items-center mb-4">
            <FaPhone className="text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Billing Information</h2>
          </div>
          <p><strong>Billing Address:</strong> 1234 Main St, City, Country</p>
          <p><strong>Contact Email:</strong> support@example.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        </section>

        {/* Subscription Details */}
        <section className="mb-6 bg-blue-50 rounded-lg p-4 shadow-md">
          <div className="flex items-center mb-4">
            <FaQuestionCircle className="text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Subscription Details</h2>
          </div>
          <p><strong>Subscription Plan:</strong> Premium Plan</p>
          <p><strong>Billing Period:</strong> Monthly</p>
          <p><strong>Start Date:</strong> August 1, 2024</p>
          <p><strong>Renewal Date:</strong> September 1, 2024</p>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-6 bg-blue-50 rounded-lg p-4 shadow-md">
          <div className="flex items-center mb-4">
            <FaDownload className="text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Cost Breakdown</h2>
          </div>
          <table className="w-full bg-gray-50 rounded-lg">
            <thead>
              <tr className="text-left border-b border-gray-300">
                <th className="py-2 px-4">Description</th>
                <th className="py-2 px-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">Monthly Subscription Fee</td>
                <td className="py-2 px-4">$10.00</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Tax</td>
                <td className="py-2 px-4">$0.80</td>
              </tr>
              <tr className="font-semibold border-t border-gray-300">
                <td className="py-2 px-4">Total Amount Due</td>
                <td className="py-2 px-4">$10.80</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Payment Information */}
        <section className="mb-6 bg-blue-50 rounded-lg p-4 shadow-md">
          <div className="flex items-center mb-4">
            <FaPhone className="text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Payment Information</h2>
          </div>
          <p><strong>Payment Method:</strong> Credit Card</p>
          <p>Instructions: Please make payment using the credit card details provided.</p>
          <p className="font-medium mt-4">Payment Status: <span className="text-green-600">Completed</span></p>
        </section>

        {/* Discounts and Credits */}
        <section className="mb-6 bg-blue-50 rounded-lg p-4 shadow-md">
          <div className="flex items-center mb-4">
            <FaQuestionCircle className="text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Discounts and Credits</h2>
          </div>
          <p><strong>Promo Code:</strong> SAVE10 (Applied)</p>
          <p><strong>Credit:</strong> None</p>
        </section>

        {/* Terms and Conditions */}
        <section className="mb-6 bg-blue-50 rounded-lg p-4 shadow-md">
          <div className="flex items-center mb-4">
            <FaDownload className="text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Terms and Conditions</h2>
          </div>
          <p>Payment Terms: Please make payment within 15 days of the invoice date. Late payments may incur a fee.</p>
          <p>Refund Policy: Refunds are available within 30 days of purchase.</p>
        </section>

        {/* Support and Contact Information */}
        <section className="mb-6 bg-blue-50 rounded-lg p-4 shadow-md">
          <div className="flex items-center mb-4">
            <FaPhone className="text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Need Help?</h2>
          </div>
          <p>If you have any questions or need assistance, please contact our support team.</p>
          <Button
            variant="primary"
            className="w-50% mt-4"
          >
            Contact Support
          </Button>
          <div className="mt-4">
            <p className="text-blue-600 hover:underline"><a href="/faqs">Frequently Asked Questions</a></p>
          </div>
        </section>

        {/* Attachments */}
        <section className="mb-6 bg-blue-50 rounded-lg p-4 shadow-md">
          <div className="flex items-center mb-4">
            <FaDownload className="text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Attachments</h2>
          </div>
          <a href="/path/to/invoice.pdf" className="text-blue-600 hover:underline">Download PDF Invoice</a>
        </section>
      </main>
    </div>
  );
};

export default InvoicePage;
