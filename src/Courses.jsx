import React from "react";
import Navbar from "./components/navbar";
import './Courses.css'
import Course from "./assets/Course.jpg";
const courses = [
  {
    title: "Introduction to Programming",
    description:
      "Learn the basics of programming using Python. Covers fundamental concepts like variables, loops, and functions.",
    features: ["Python Basics", "Logic Building", "Hands-on Projects"],
    image:Course
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Understand how data structures work and apply algorithms to solve complex problems efficiently.",
    features: ["Linked Lists", "Sorting Algorithms", "Graph Theory"],
    image:Course
  },
  {
    title: "Web Development",
    description:
      "Build modern web applications using HTML, CSS, and JavaScript. Explore frameworks like React and Node.js.",
    features: ["Front-end & Back-end", "API Development", "Full-Stack Applications"],
    image:Course
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Dive into AI and ML concepts, including neural networks, deep learning, and data science applications.",
    features: ["TensorFlow & PyTorch", "Supervised & Unsupervised Learning", "Real-world AI Projects"],
    image:Course
  }
];

const CoursesPage = () => {
  return (
    <>
    <div className="containerr">
      <h1 className="text-4xl font-bold text-center mb-10 border-b pb-2 border-yellow-500">
        Computer Science Courses
      </h1>
      <div className="grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img
              src={course.image}
              alt={course.title}
              className="course-card-image"
            />
            <h2 className="course-card-title">{course.title}</h2>
            <p className="course-card-description">{course.description}</p>
            <ul className="course-card-features">
              {course.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CoursesPage;