//AminPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  CircularProgress,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 

const categories = [
  "Accounting", "Administrative", "Advertising", "Architecture", "Arts",
  "Business Development", "Customer Service", "Education", "Engineering",
  "Finance", "Healthcare", "Hospitality", "Human Resources", "Information Technology",
  "Legal", "Management", "Marketing", "Media", "Non-Profit", "Operations",
  "Project Management", "Real Estate", "Retail", "Sales", "Science",
  "Social Media", "Telecommunications", "Transportation", "Utilities", "Writing"
];

const jobTypes = [
  "Full-time", "Part-time", "Hybrid"
];

const PostJob = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [category, setCategory] = useState('');
  const [jobType, setJobType] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [confirmResetOpen, setConfirmResetOpen] = useState(false);
  const [previewData, setPreviewData] = useState(null);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const isAdmin = true;
    if (!isAdmin) {
      navigate('/');
    }
  }, [navigate]);

  const validateForm = () => {
    let tempErrors = {};
    if (!jobTitle) tempErrors.jobTitle = 'Job title is required';
    if (!companyName) tempErrors.companyName = 'Company name is required';
    if (!jobDescription) tempErrors.jobDescription = 'Job description is required';
    if (!location) tempErrors.location = 'Location is required';
    if (!salary) tempErrors.salary = 'Salary is required';
    if (!category) tempErrors.category = 'Category is required';
    if (!jobType) tempErrors.jobType = 'Job type is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e, setter) => {
    setter(e.target.value);
    validateForm();
  };

  const sendNotificationToCandidates = () => {
    setTimeout(() => {
      setNotificationStatus('Notification sent to candidates successfully!');
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('Job posted successfully!');
      sendNotificationToCandidates();
      setJobTitle('');
      setCompanyName('');
      setJobDescription('');
      setLocation('');
      setSalary('');
      setCategory('');
      setJobType('');
      setTags('');
      setImage(null);
      setErrors({});
      setPreviewOpen(false);
    }, 2000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleReset = () => {
    setConfirmResetOpen(true);
  };

  const confirmReset = () => {
    setJobTitle('');
    setCompanyName('');
    setJobDescription('');
    setLocation('');
    setSalary('');
    setCategory('');
    setJobType('');
    setTags('');
    setImage(null);
    setErrors({});
    setConfirmResetOpen(false);
  };

  const handlePreview = () => {
    setPreviewData({
      title: jobTitle,
      companyName: companyName,
      description: jobDescription,
      location: location,
      salary: salary,
      category: category,
      jobType: jobType,
      tags: tags,
      image: image ? URL.createObjectURL(image) : ''
    });
    setPreviewOpen(true);
  };

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/keyboard-coffee-smartphone-notebook-color-background-top-view_1286-776.jpg')` }}>
      <Container maxWidth="md" className="pt-8 px-4">


{/* Back Icon and Admin Dashboard Button in the Same Line */}
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

          {/* Go to Admin Dashboard Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/admin-dashboard')}
            sx={{ fontWeight: 'bold' }}
          >
            Go to Admin Dashboard
          </Button>
        </Box>

        
        <Paper elevation={3} className="p-8 mx-auto max-w-4xl">
          <Typography variant="h4" gutterBottom align="center">
            Post a Job
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Left Column */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Job Title"
                  value={jobTitle}
                  onChange={(e) => handleChange(e, setJobTitle)}
                  error={!!errors.jobTitle}
                  helperText={errors.jobTitle}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Company Name"
                  value={companyName}
                  onChange={(e) => handleChange(e, setCompanyName)}
                  error={!!errors.companyName}
                  helperText={errors.companyName}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Location"
                  value={location}
                  onChange={(e) => handleChange(e, setLocation)}
                  error={!!errors.location}
                  helperText={errors.location}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Category"
                  select
                  value={category}
                  onChange={(e) => handleChange(e, setCategory)}
                  error={!!errors.category}
                  helperText={errors.category}
                  sx={{ mb: 2 }}
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </TextField>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => fileInputRef.current.click()}
                  sx={{ mb: 2, mr: 1, display: 'inline-block' }}
                >
                  Upload Image
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleReset}
                  sx={{ mb: 2, display: 'inline-block' }}
                >
                  Reset
                </Button>
                <input
                  accept="image/*"
                  type="file"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={handleImageChange}
                />
                {image && <Typography variant="body2" color="textSecondary">{image.name}</Typography>}
              </Grid>
              {/* Right Column */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Job Description"
                  multiline
                  rows={4}
                  value={jobDescription}
                  onChange={(e) => handleChange(e, setJobDescription)}
                  error={!!errors.jobDescription}
                  helperText={errors.jobDescription}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Salary"
                  value={salary}
                  onChange={(e) => handleChange(e, setSalary)}
                  error={!!errors.salary}
                  helperText={errors.salary}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Tags"
                  placeholder="e.g. Remote, Internship"
                  value={tags}
                  onChange={(e) => handleChange(e, setTags)}
                  error={!!errors.tags}
                  helperText={errors.tags}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Job Type"
                  select
                  value={jobType}
                  onChange={(e) => handleChange(e, setJobType)}
                  error={!!errors.jobType}
                  helperText={errors.jobType}
                  sx={{ mb: 2 }}
                >
                  {jobTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="space-between" mt={4}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Submit'}
              </Button>
              <Button variant="outlined" color="secondary" onClick={handlePreview}>
                Preview
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>

    {/* Preview Dialog */}
<Dialog open={previewOpen} onClose={() => setPreviewOpen(false)} maxWidth="md" fullWidth>
  <DialogTitle>
    Preview Job
    <IconButton onClick={() => setPreviewOpen(false)} style={{ float: 'right' }}>
      <CloseIcon />
    </IconButton>
  </DialogTitle>
  <DialogContent>
    {previewData && (
      <Box
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          margin: '10px 0'
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {previewData.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {previewData.companyName} - {previewData.location}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {previewData.jobType} | {previewData.category}
            </Typography>
          </Box>
          {previewData.image && (
            <Box
              component="img"
              src={previewData.image}
              alt="Company Logo"
              sx={{ width: '80px', height: '80px', borderRadius: '8px' }}
            />
          )}
        </Box>

        <Typography variant="body2" color="textSecondary" gutterBottom>
          Salary: {previewData.salary}
        </Typography>

        <Typography variant="body2" color="textSecondary" gutterBottom>
          Tags: {previewData.tags}
        </Typography>

        <Box mt={2}>
          <Typography variant="body1" gutterBottom>
            {previewData.description}
          </Typography>
        </Box>
      </Box>
    )}
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setPreviewOpen(false)} color="primary">
      Close
    </Button>
  </DialogActions>
</Dialog>


      {/* Confirm Reset Dialog */}
      <Dialog open={confirmResetOpen} onClose={() => setConfirmResetOpen(false)}>
        <DialogTitle>Confirm Reset</DialogTitle>
        <DialogContent>Are you sure you want to reset all fields?</DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmResetOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmReset} color="secondary">
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PostJob;
