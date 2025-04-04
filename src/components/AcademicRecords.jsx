import React from 'react';
import './AcademicRecords.css';
import './PageStyles.css';

const AcademicRecords = () => {
  const academicRecords = [
    {
      id: 1,
      courseCode: 'CS101',
      courseName: 'Introduction to Programming',
      credits: 3,
      grade: 'A',
      semester: 'Fall 2023'
    },
    {
      id: 2,
      courseCode: 'MATH201',
      courseName: 'Calculus I',
      credits: 3,
      grade: 'B+',
      semester: 'Fall 2023'
    },
    {
      id: 3,
      courseCode: 'ENG101',
      courseName: 'English Composition',
      credits: 3,
      grade: 'A-',
      semester: 'Fall 2023'
    }
  ];

  return (
    <div className="student-portal-container">
      <div className="student-portal-content">
        <div className="page-header">
          <h1>Academic Records</h1>
        </div>

        <div className="portal-card records-table-container">
          <table className="records-table">
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Course Code</th>
                <th style={{ textAlign: 'left' }}>Course Name</th>
                <th style={{ textAlign: 'left' }}>Credits</th>
                <th style={{ textAlign: 'left' }}>Grade</th>
                <th style={{ textAlign: 'left' }}>Semester</th>
              </tr>
            </thead>
            <tbody>
              {academicRecords.map((record) => (
                <tr key={record.id}>
                  <td style={{ textAlign: 'left' }}>{record.courseCode}</td>
                  <td style={{ textAlign: 'left' }}>{record.courseName}</td>
                  <td style={{ textAlign: 'left' }}>{record.credits}</td>
                  <td style={{ textAlign: 'left' }}>{record.grade}</td>
                  <td style={{ textAlign: 'left' }}>{record.semester}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AcademicRecords; 