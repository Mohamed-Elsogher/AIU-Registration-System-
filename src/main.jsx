import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Landingpage from "./landingpage";
import Courses from "./Courses";
import Navbar from "./components/navbar";
import FacultyInfo from "./faculty";
import ResearchInfo from "./ResearchInfo";
import ContactUs from "./Contact";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<FacultyInfo />} />
        <Route path="/research" element={<ResearchInfo />} />
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </Router>
  </StrictMode>
);
