import React from 'react';
import './PageStyles.css';
import './ViewMyClasses.css';

const ViewMyClasses = () => {
  const enrolledCourses = [
    {
      id: 1,
      courseCode: 'CS101',
      courseName: 'Structured Programming',
      credits: 3,
      status: 'Enrolled'
    },
    {
      id: 2,
      courseCode: 'MATH201',
      courseName: 'Calculus I',
      credits: 3,
      status: 'Enrolled'
    },
    {
      id: 3,
      courseCode: 'ENG101',
      courseName: 'English 2',
      credits: 3,
      status: 'Enrolled'
    }
  ];

  return (
    <div className="student-portal-container">
      <div className="student-portal-content">
        <div className="page-header">
          <h1>My Classes</h1>
        </div>

        <div className="classes-grid">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="portal-card class-card">
              <div className="class-header">
                <h3>{course.courseCode}</h3>
                <span className="status-badge">{course.status}</span>
              </div>
              <div className="class-content">
                <h4 style={{ textAlign: 'left' }}>{course.courseName}</h4>
                <div className="class-details">
                  <p><strong>Credits:</strong> {course.credits}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewMyClasses; 