//AdminDashboard.jsx
import React from 'react';
import { Button, Box, Grid, Paper, Typography, IconButton, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const data = [
  { name: 'Jan', Jobs: 5, Applications: 50 },
  { name: 'Feb', Jobs: 10, Applications: 80 },
  { name: 'Mar', Jobs: 15, Applications: 120 },
  { name: 'Apr', Jobs: 12, Applications: 90 },
];

const AdminDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddJobPostingClick = () => {
    navigate('/admin'); // Redirect to AdminPage
  };

  return (
    <div className="p-10 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">

      {/* Admin Dashboard Header */}
      <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"  // Align items vertically centered
          mb={2}
          sx={{ marginBottom: '20px', paddingTop: '20px' }}
        >
          {/* Back Icon
          <IconButton onClick={() => navigate(-1)} sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton> */}
          </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="bold">
          Admin Dashboard
        </Typography>
        {/* Notifications Icon */}
        <IconButton color="primary">
          <NotificationsIcon />
        </IconButton>
      </Box>
      
      {/* Job Postings Section */}
      <section className="mb-6">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" fontWeight="bold">
            Job Postings
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<AddIcon />} 
            onClick={handleAddJobPostingClick} // Add onClick handler
          >
            Add Job Posting
          </Button>
        </Box>
        <Grid container spacing={3} mt={3}>
          {/* Sample job postings */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper className="p-4">
              <Typography variant="h6" fontWeight="bold">Software Engineer</Typography>
              <Typography variant="body1">Posted: 15th July 2024</Typography>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <IconButton color="primary"><EditIcon /></IconButton>
                <IconButton color="secondary"><DeleteIcon /></IconButton>
              </Box>
            </Paper>
          </Grid>
          {/* Repeat similar job cards for other jobs */}
        </Grid>
      </section>

      <Divider />

      {/* Applications Section */}
      <section className="mb-6 mt-6">
        <Typography variant="h5" fontWeight="bold">
          Applications
        </Typography>
        <Grid container spacing={3} mt={3}>
          {/* Display Applications */}
          <Grid item xs={12} md={6}>
            <Paper className="p-4">
              <Typography variant="h6" fontWeight="bold">John Doe</Typography>
              <Typography variant="body1">Position: Software Engineer</Typography>
              <Typography variant="body2">Status: Under Review</Typography>
              <Button size="small" color="primary">View Details</Button>
            </Paper>
          </Grid>
          {/* Repeat similar cards for other applications */}
        </Grid>
      </section>

      <Divider />

      {/* Analytics/Reports Section with Chart */}
      <section className="mb-6 mt-6">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Analytics/Reports
        </Typography>
        <Paper className="p-4">
          <Typography variant="subtitle1" mb={2}>Job Posting and Application Trends</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Jobs" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Applications" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </section>

      <Divider />

      {/* Settings Section */}
      <section className="mb-6 mt-6">
        <Typography variant="h5" fontWeight="bold">
          Settings
        </Typography>
        <Button variant="outlined" color="primary" size="large">
          Manage Settings
        </Button>
      </section>
    </div>
  );
};

export default AdminDashboard;
