import React, { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from '../components/ResumePDF';
import { EmailInput, TextInput, TextAreaInput, FileInput, DynamicList } from '../components/inputfileds/FormFields';
import Button from '../components/Buttons';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    address: '',
    photo: null,
    summary: '',
    education: [],
    experience: [],
    skills: [],
    template: 'template1',
  });

  const handleInputChange = (field, value, section, index) => {
    if (section) {
      const updatedSection = resumeData[section].map((item, idx) =>
        idx === index ? { ...item, [field]: value } : item
      );
      setResumeData({ ...resumeData, [section]: updatedSection });
    } else {
      setResumeData({ ...resumeData, [field]: value });
    }
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { degree: '', institution: '', year: '' }],
    });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, { role: '', company: '', year: '', details: '' }],
    });
  };

  const addSkill = (skill) => {
    if (skill && !resumeData.skills.includes(skill)) {
      setResumeData({
        ...resumeData,
        skills: [...resumeData.skills, skill],
      });
    }
  };

  const removeSkill = (index) => {
    const newSkills = [...resumeData.skills];
    newSkills.splice(index, 1);
    setResumeData({ ...resumeData, skills: newSkills });
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setResumeData({ ...resumeData, photo: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-8">Build Your Resume</h2>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white p-8 rounded-lg shadow-xl">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 pr-4">
          {/* Input Fields */}
          <div className="space-y-6">
            {['name', 'title', 'email', 'phone', 'address'].map((field) => (
              <TextInput
                key={field}
                id={field}
                name={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                value={resumeData[field]}
                type={field === 'email' ? 'email' : 'text'}
                placeholder={`Enter your ${field}`}
                onChange={(e) => handleInputChange(field, e.target.value)}
              />
            ))}

            <FileInput
              id="photo"
              label="Upload Photo"
              onChange={handlePhotoUpload}
            />

            <TextAreaInput
              id="summary"
              name="summary"
              label="Summary"
              value={resumeData.summary}
              placeholder="Write a brief summary about yourself"
              rows={4}
              onChange={(e) => handleInputChange('summary', e.target.value)}
            />
          </div>

          {/* Dynamic Lists */}
          <DynamicList
            items={resumeData.education}
            fields={[{ field: 'degree', label: 'Degree' }, { field: 'institution', label: 'Institution' }, { field: 'year', label: 'Year' }]}
            onFieldChange={(field, value, index) => handleInputChange(field, value, 'education', index)}
            addItem={addEducation}
          />

          <DynamicList
            items={resumeData.experience}
            fields={[{ field: 'role', label: 'Role' }, { field: 'company', label: 'Company' }, { field: 'year', label: 'Year' }, { field: 'details', label: 'Details' }]}
            onFieldChange={(field, value, index) => handleInputChange(field, value, 'experience', index)}
            addItem={addExperience}
          />

          <div className="space-y-4">
            <TextInput
              id="skill"
              name="skill"
              label="Skill"
              value=""
              placeholder="Add a skill"
              onChange={(e) => addSkill(e.target.value)}
            />
            <div className="space-y-2">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span>{skill}</span>
                  <button
                    className="bg-red-500 text-white p-2 rounded-lg"
                    onClick={() => removeSkill(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Preview) */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6 pl-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-blue-900">Resume Preview</h3>
            <PDFDownloadLink
              document={<ResumePDF data={resumeData} />}
              fileName="resume.pdf"
            >
              {({ loading }) => (
                <Button>
                  {loading ? 'Generating PDF...' : 'Download PDF'}
                </Button>
              )}
            </PDFDownloadLink>
          </div>
          <PDFViewer width="100%" height="600">
            <ResumePDF data={resumeData} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;

