import React, { useState } from 'react';
import './EnrollmentByRequirement.css'; 

const EnrollmentByRequirement = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = {
    "First Year": {
      "First Semester": ["Math 1","Structure Programming"],
      "Second Semester": ["Math 2", "OOP"],
    },
    "Second Year": {
      "First Semester": ["Linear Algebra", "AI"],
      "Second Semester": ["Differential Equation", "Computer Architecture", "Web", "Software Engineering", "Database"],
    },
    "Third Year": {
      "First Semester": ["System Design", "Algorithm"],
      "Second Semester": ["Cloud", "Parallel Programming"],
    },
    "Fourth Year": {
      "First Semester": ["Big Data", "Graduation Project"],
      "Second Semester": ["Theory of Computing", "Graduation Project 2"],
    },
    Requirement: ["Artistic", "English", "German"],
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleEnroll = () => {
    alert(`You have enrolled in ${selectedCourse}`);
    setSelectedCourse(null);
  };

  return (
    <div className="enrollment-container">
      <h1>Enrollment by Requirement</h1>
      {Object.keys(courses).map((year) => (
        <div key={year} className="year-section">
          <h2>{year}</h2>
          {Object.keys(courses[year]).map((semester) => (
            <div key={semester} className="semester-section">
              <h3>{semester}</h3>
              <ul>
                {courses[year][semester].map((course) => (
                  <li key={course} onClick={() => handleCourseClick(course)}>
                    {course} {selectedCourse === course && <span>(200 slots available)</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
      {selectedCourse && (
        <div className="enroll-section">
          <p>You selected: {selectedCourse}</p>
          <button onClick={handleEnroll}>Enroll</button>
        </div>
      )}
    </div>
  );
};

export default EnrollmentByRequirement;