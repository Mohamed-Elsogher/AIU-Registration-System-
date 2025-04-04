import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SemesterCourses.css";

const coursesData = {
  "First Year": {
    "First Semester": ["Math 1", "Structure Programming"],
    "Second Semester": ["Math 2", "OOP"],
  },
  "Second Year": {
    "First Semester": ["Linear Algebra", "AI"],
    "Second Semester": [ "Web", "Software Engineering"],
  },
  "Third Year": {
    "First Semester": ["System Design", "Algorithm"],
    "Second Semester": ["Cloud", "Parallel Programming"],
  },
  "Fourth Year": {
    "First Semester": ["Big Data", "Graduation Project"],
    "Second Semester": ["Theory of Computing", "Graduation Project 2"],
  },
};

const SemesterCourses = ({ year, semester }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate(); 

  const courses = coursesData[year]?.[semester] || [];

  const handleEnroll = (course) => {
    if (!enrolledCourses.includes(course)) {
      const confirmEnroll = window.confirm(`Are you sure you want to enroll in ${course}?`);
      if (confirmEnroll) {
        setEnrolledCourses((prevCourses) => [...prevCourses, course]);
        alert(`You have successfully enrolled in ${course}`);
      }
    } else {
      alert(`You are already enrolled in ${course}`);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{year} - {semester}</h1>
      </div>
      <div className="page-content">
        {courses.length === 0 ? (
          <p>No courses available for this semester.</p>
        ) : (
          <ul className="courses-list">
            {courses.map((course, index) => (
              <li key={index} className="course-item">
                <div className="course-card">
                  <h3>{course}</h3>
                  <p>3 Credit Hours</p>
                  <p>200 Slots Available</p>
                  <button type="button" className="enroll-button" onClick={() => handleEnroll(course)}>Enroll</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="back-link">
        <button onClick={() => navigate("/Dashboard")} className="back-button styled-back-button">← Back</button>
      </div>
    </div>
  );
};

export default SemesterCourses;
