import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; 
import AdminPage from './components/AdminPage';
import JobseekerPage from './components/JobseekerPage'; 
import Layout from './components/Layout'; 
import Events from './pages/Events';
import Articles from './pages/Articles';
import ResumeBuilder from './pages/ResumeBuilder';
import PlanPage from './pages/PlansPage'; // Import PlanPage
import ManageSubscriptionPage from './pages/ManageSubscriptionPage'; // Correct import
import RenewSubscriptionPage from './pages/RenewSubscriptionPage';
import UsagePage from './pages/UsagePage';
import SearchJobsPage from './pages/SearchJobsPage';
import AdminDashboard from './components/AdminDashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Contact from './pages/Contact';
import About from  './pages/AboutUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Login /></Layout>} />
        <Route path="/admin" element={<Layout><AdminPage /></Layout>} />
        <Route path="/jobseeker" element={<Layout><JobseekerPage /></Layout>} />
        <Route path="/resume-builder" element={<Layout><ResumeBuilder /></Layout>} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/articles" element={<Layout><Articles /></Layout>} />
        <Route path="/subscription/plans" element={<Layout><PlanPage /></Layout>} /> {/* Add this route */}
        <Route path="/subscription/manage" element={<Layout><ManageSubscriptionPage /></Layout>} />
        <Route path="/subscription/renew" element={<Layout><RenewSubscriptionPage /></Layout>} />
        <Route path="/subscription/usage" element={<Layout><UsagePage /></Layout>} />
        <Route path="/search-jobs" element={<Layout><SearchJobsPage /></Layout>} />
        <Route path="/admin-dashboard" element={<Layout><AdminDashboard /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/Terms-Conditions" element={<Layout><TermsConditions /></Layout>} />
        <Route path="/contact" element={<Layout><Contact/></Layout>} />
        <Route path="/about" element={<Layout><About/></Layout>} />


      </Routes>
    </Router>
  );
};

export default App;
