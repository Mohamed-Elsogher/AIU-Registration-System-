import React from "react";

const coursesData = {
  "First Year": {
    "First Semester": ["Math 1", "Structure Programming"],
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
};

const SemesterCourses = ({ year, semester }) => {
  const courses = coursesData[year]?.[semester] || [];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{year} - {semester}</h1>
      </div>
      <div className="page-content">
        {courses.length === 0 ? (
          <p>No courses available for this semester.</p>
        ) : (
          <ul>
            {courses.map((course, index) => (
              <li key={index}>{course} (3 Credit Hours)</li>
            ))}
          </ul>
        )}
      </div>
      <div className="back-link">
        <a href={`/year-${year.split(" ")[0].toLowerCase()}`}>← Back to {year}</a>
      </div>
    </div>
  );
};

export default SemesterCourses;
