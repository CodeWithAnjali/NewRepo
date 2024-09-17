import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Define the styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftColumn: {
    width: '65%',
  },
  rightColumn: {
    width: '30%',
    paddingLeft: 20,
    borderLeft: '2px solid #cccccc',
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
    paddingBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    border: '1px solid #cccccc',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  sectionContent: {
    fontSize: 12,
    color: '#333',
    marginBottom: 5,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    alignSelf: 'center',
    border: '2px solid #333',
  },
  experienceDetails: {
    marginBottom: 10,
  },
});

// Create the PDF document
const ResumePDF = ({ resumeData = {} }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          {resumeData.photo ? (
            <Image src={resumeData.photo} style={styles.photo} />
          ) : (
            <Text>No photo available</Text>
          )}
          <Text style={styles.title}>{resumeData.name || 'Your Name'}</Text>
          <Text style={styles.subtitle}>
            {resumeData.title || 'Your Title'}
          </Text>
          <Text style={styles.subtitle}>
            {resumeData.email ? `${resumeData.email} | ` : ''}{resumeData.phone || ''}
          </Text>
          <Text style={styles.subtitle}>{resumeData.address || 'Your Address'}</Text>
        </View>

        {/* Summary Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.sectionContent}>
            {resumeData.summary || 'No summary provided.'}
          </Text>
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {resumeData.education && resumeData.education.length > 0 ? (
            resumeData.education.map((edu, index) => (
              <View key={index}>
                <Text style={styles.sectionContent}>{edu.degree || 'Degree Not Provided'}</Text>
                <Text style={styles.sectionContent}>
                  {edu.institution || 'Institution Not Provided'} - {edu.year || 'Year Not Provided'}
                </Text>
              </View>
            ))
          ) : (
            <Text style={styles.sectionContent}>No education details provided.</Text>
          )}
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {resumeData.experience && resumeData.experience.length > 0 ? (
            resumeData.experience.map((exp, index) => (
              <View key={index} style={styles.experienceDetails}>
                <Text style={styles.sectionContent}>{exp.role || 'Role Not Provided'}</Text>
                <Text style={styles.sectionContent}>
                  {exp.company || 'Company Not Provided'} - {exp.year || 'Year Not Provided'}
                </Text>
                <Text style={styles.sectionContent}>{exp.details || 'No details provided.'}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.sectionContent}>No experience details provided.</Text>
          )}
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {Array.isArray(resumeData.skills) && resumeData.skills.length > 0 ? (
            resumeData.skills.map((skill, index) => (
              <Text key={index} style={styles.sectionContent}>
                • {skill}
              </Text>
            ))
          ) : (
            <Text style={styles.sectionContent}>No skills provided.</Text>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
