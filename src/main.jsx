import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EnrollmentRequirement from "./components/EnrollmentRequirement";
import ManageClasses from "./components/ManageClasses";
import Navbar from "./components/navbar";
import Registration from "./components/Registration";
import YearFour from "./components/YearFour";
import YearOne from "./components/YearOne";
import YearThree from "./components/YearThree";
import YearTwo from "./components/YearTwo";
import ContactUs from "./Contact";
import Courses from "./Courses";
import FacultyInfo from "./faculty";
import "./index.css";
import Landingpage from "./Landingpage";
import Login from "./Login";
import Register from "./Register";
import ResearchInfo from "./ResearchInfo";
import UserSettings from "./components/UserSettings";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<FacultyInfo />} />
        <Route path="/settings" element={<UserSettings/>}/>

        <Route path="/research" element={<ResearchInfo />} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/academic" element={<div className="page-container"><div className="page-header"><h1>Academic Records</h1></div><div className="page-content"><p>Academic Records content will be added here</p></div><div className="back-link"><a href="/dashboard">← Back to Dashboard</a></div></div>} />
        <Route path="/payments" element={<div className="page-container"><div className="page-header"><h1>University Payments</h1></div><div className="page-content"><p>Payments content will be added here</p></div><div className="back-link"><a href="/dashboard">← Back to Dashboard</a></div></div>} />
        
        {/* Manage Classes Routes */}
        <Route path="/manage-classes" element={<ManageClasses />} />
        <Route path="/view-classes" element={<div className="page-container"><div className="page-header"><h1>View my Classes</h1></div><div className="page-content"><p>View Classes content will be added here</p></div><div className="back-link"><a href="/manage-classes">← Back to Manage Classes</a></div></div>} />
        <Route path="/enrollment-appointment" element={<div className="page-container"><div className="page-header"><h1>Enrollment Appointment</h1></div><div className="page-content"><p>Enrollment Appointment content will be added here</p></div><div className="back-link"><a href="/manage-classes">← Back to Manage Classes</a></div></div>} />
        <Route path="/enrollment-requirement" element={<EnrollmentRequirement />} />
        <Route path="/drop-classes" element={<div className="page-container"><div className="page-header"><h1>Drop Classes</h1></div><div className="page-content"><p>Drop Classes content will be added here</p></div><div className="back-link"><a href="/manage-classes">← Back to Manage Classes</a></div></div>} />
        
        {/* Year Routes */}
        <Route path="/year-one" element={<YearOne />} />
        <Route path="/year-two" element={<YearTwo />} />
        <Route path="/year-three" element={<YearThree />} />
        <Route path="/year-four" element={<YearFour />} />
        
        {/* Semester Routes */}
        <Route path="/year-one/first-semester" element={<div className="page-container"><div className="page-header"><h1>First Year - First Semester</h1></div><div className="page-content"><p>First semester courses will be added here</p></div><div className="back-link"><a href="/year-one">← Back to First Year</a></div></div>} />
        <Route path="/year-one/second-semester" element={<div className="page-container"><div className="page-header"><h1>First Year - Second Semester</h1></div><div className="page-content"><p>Second semester courses will be added here</p></div><div className="back-link"><a href="/year-one">← Back to First Year</a></div></div>} />
        
        <Route path="/year-two/first-semester" element={<div className="page-container"><div className="page-header"><h1>Second Year - First Semester</h1></div><div className="page-content"><p>First semester courses will be added here</p></div><div className="back-link"><a href="/year-two">← Back to Second Year</a></div></div>} />
        <Route path="/year-two/second-semester" element={<div className="page-container"><div className="page-header"><h1>Second Year - Second Semester</h1></div><div className="page-content"><p>Second semester courses will be added here</p></div><div className="back-link"><a href="/year-two">← Back to Second Year</a></div></div>} />
        
        <Route path="/year-three/first-semester" element={<div className="page-container"><div className="page-header"><h1>Third Year - First Semester</h1></div><div className="page-content"><p>First semester courses will be added here</p></div><div className="back-link"><a href="/year-three">← Back to Third Year</a></div></div>} />
        <Route path="/year-three/second-semester" element={<div className="page-container"><div className="page-header"><h1>Third Year - Second Semester</h1></div><div className="page-content"><p>Second semester courses will be added here</p></div><div className="back-link"><a href="/year-three">← Back to Third Year</a></div></div>} />
        <Route path="/year-four/first-semester" element={<div className="page-container"><div className="page-header"><h1>Fourth Year - First Semester</h1></div><div className="page-content"><p>First semester courses will be added here</p></div><div className="back-link"><a href="/year-four">← Back to Fourth Year</a></div></div>} />
        <Route path="/year-four/second-semester" element={<div className="page-container"><div className="page-header"><h1>Fourth Year - Second Semester</h1></div><div className="page-content"><p>Second semester courses will be added here</p></div><div className="back-link"><a href="/year-four">← Back to Fourth Year</a></div></div>} />
      </Routes>
    </Router>
  </StrictMode>
);
