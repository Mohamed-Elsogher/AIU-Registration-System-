import React, { useState } from 'react';
import './DropClasses.css';
import './PageStyles.css';

const DropClasses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([
    { id: 1, courseCode: 'CS101', courseName: 'structure programming' },
    { id: 2, courseCode: 'MATH201', courseName: 'Math I' },
    { id: 3, courseCode: 'ENG101', courseName: 'English' },
  ]);

  const handleDropCourse = (courseId) => {
    setEnrolledCourses(enrolledCourses.filter(course => course.id !== courseId));
  };

  return (
    <div className="student-portal-container">
      <div className="student-portal-content">
        <div className="page-header">
          <h1>Drop Classes</h1>
        </div>
        
        <div className="courses-list-container">
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <div key={course.id} className="portal-card course-card">
                <div className="course-info">
                  <h3>{course.courseCode} - {course.courseName}</h3>
                </div>
                <button 
                  className="portal-button drop-button"
                  onClick={() => handleDropCourse(course.id)}
                >
                  Drop Course
                </button>
              </div>
            ))
          ) : (
            <div className="portal-card course-card">
              <div className="course-info">
                <h3>No courses available to drop</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropClasses; 