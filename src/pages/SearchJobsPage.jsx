//SearchJobsPage.jsx
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Button from '../components/Buttons';


const SearchJobsPage = () => {
  const jobsData = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Google',
      location: 'Remote',
      salary: '$120k/year',
      avgSalary: '$110k - $130k/year',
      companyRating: 4.8,
      reviews: 120
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'Microsoft',
      location: 'On-Site',
      salary: '$80k/year',
      avgSalary: '$70k - $90k/year',
      companyRating: 4.5,
      reviews: 85
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Facebook',
      location: 'Remote',
      salary: '$100k/year',
      avgSalary: '$90k - $110k/year',
      companyRating: 4.7,
      reviews: 98
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'Amazon',
      location: 'On-Site',
      salary: '$140k/year',
      avgSalary: '$130k - $150k/year',
      companyRating: 4.6,
      reviews: 105
    },
    {
      id: 5,
      title: 'Full Stack Developer',
      company: 'Netflix',
      location: 'Remote',
      salary: '$110k/year',
      avgSalary: '$100k - $120k/year',
      companyRating: 4.7,
      reviews: 95
    },
    {
      id: 6,
      title: 'Product Manager',
      company: 'Airbnb',
      location: 'On-Site',
      salary: '$130k/year',
      avgSalary: '$120k - $140k/year',
      companyRating: 4.6,
      reviews: 88
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [jobAlertsEmail, setJobAlertsEmail] = useState('');
  const [jobAlertsSubscribed, setJobAlertsSubscribed] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);
  const [isSavedJobsModalOpen, setIsSavedJobsModalOpen] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);
  const [savedJob, setSavedJob] = useState(null);
  const jobsPerPage = 5;

  const filteredJobs = jobsData.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleJobAlertSubscription = () => {
    if (jobAlertsEmail) {
      setJobAlertsSubscribed(true);
    }
  };

  const handleSaveJob = (job) => {
    if (!savedJobs.find(savedJob => savedJob.id === job.id)) {
      setSavedJobs(prevSavedJobs => [...prevSavedJobs, job]);
      setSavedJob(job);
      setShowSaveToast(true);
      setTimeout(() => setShowSaveToast(false), 3000);
    }
  };

  const toggleSavedJobsModal = () => {
    setIsSavedJobsModalOpen(prevState => !prevState);
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Find Your Dream Job</h1>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search jobs, companies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64 md:w-96 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        />
        <Button className="rounded-r-lg" variant="info">
          🔍
        </Button>
      </div>

      {/* Filters */}
      <div className="flex justify-center space-x-4 mb-8">
        {/* Filters can stay as they are */}
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400">
          <option>Location</option>
          <option>Remote</option>
          <option>On-Site</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400">
          <option>Job Type</option>
          <option>Full-Time</option>
          <option>Part-Time</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400">
          <option>Salary Range</option>
          <option>$40k - $60k</option>
          <option>$60k - $80k</option>
        </select>
      </div>

      {/* View Saved Jobs Button */}
      <div className="fixed bottom-4 right-4">
        <Button onClick={toggleSavedJobsModal} variant="primary">
          View Saved Jobs
        </Button>
      </div>

      {/* Job cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentJobs.length > 0 ? (
          currentJobs.map((job) => (
            <div key={job.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600">{job.company} - {job.location}</p>
              <p className="text-gray-600">{job.salary}</p>
              <p className="text-gray-600 mt-2">Average Salary: {job.avgSalary}</p>
              <p className="text-gray-600 mt-2">Rating: {job.companyRating}⭐ ({job.reviews} reviews)</p>

              <div className="flex space-x-2 mt-4">
                <Button variant="info">Apply Now</Button>
                <Button
                  onClick={() => handleSaveJob(job)}
                  variant={savedJob?.id === job.id ? 'success' : 'secondary'}
                >
                  {savedJob?.id === job.id ? 'Saved' : 'Save Job'}
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">No jobs found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mb-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            variant={index + 1 === currentPage ? 'primary' : 'secondary'}
            className="px-4 py-2"
          >
            {index + 1}
          </Button>
        ))}
      </div>

      {/* Saved Jobs Modal */}
      {isSavedJobsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
            <h2 className="text-2xl font-semibold mb-4">Saved Jobs</h2>
            <Button
              onClick={toggleSavedJobsModal}
              variant="modal"
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </Button>
            <ul>
              {savedJobs.length > 0 ? (
                savedJobs.map((job) => (
                  <li key={job.id} className="mb-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-gray-600">{job.company} - {job.location}</p>
                        <p className="text-gray-600">{job.salary}</p>
                      </div>
                      <Button
                        onClick={() => handleSaveJob(job)}
                        variant="danger"
                      >
                        Remove
                      </Button>
                    </div>
                  </li>
                ))
              ) : (
                <p>No saved jobs yet.</p>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showSaveToast && savedJob && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
          <p>Job "{savedJob.title}" saved successfully!</p>
        </div>
      )}
    </div>
  );
};

export default SearchJobsPage;