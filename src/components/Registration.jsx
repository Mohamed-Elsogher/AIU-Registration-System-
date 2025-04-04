import { Book } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LandingUserInfo.css';
import './PageStyles.css';

export default function Registration() {
  const [user, setUser] = useState({name: "", id: ""});
  const [selectedCourse, setSelectedCourse] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    if (!userData.name) {
      navigate('/login');
      return;
    }
    setUser(userData);
  }, [navigate]);

  const courses = [
    { id: 'CS101', name: 'Introduction to Computer Science', credits: 3, description: 'Fundamental concepts of programming and computer science.' },
    { id: 'MATH101', name: 'Calculus I', credits: 4, description: 'Limits, derivatives, integrals and their applications.' },
    { id: 'ENG101', name: 'English', credits: 3, description: 'Developing writing skills for academic and professional contexts.' },
    { id: 'PHY101', name: 'Physics I', credits: 4, description: 'Classical mechanics and thermodynamics with lab component.' },
    { id: 'CHEM101', name: 'Chemistry I', credits: 4, description: 'General chemistry principles and laboratory experiments.' },
    { id: 'MAT102', name: 'Linear Algebra', credits: 4, description: 'Introduction to Algebra concepts and principles.' },
  ];

  const handleCourseRegistration = () => {
    if (!selectedCourse) {
      setRegistrationStatus('Please select a course');
      return;
    }
    setRegistrationStatus(`Successfully registered for ${selectedCourse}`);
    setTimeout(() => setRegistrationStatus(''), 3000);
  };

  if (!user.name) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="page-container">
      <div className="user-info-container">
        <div className="user-info-content">
          <p className="user-name">{user.name}</p>
          <p className="user-id">ID: {user.id}</p>
        </div>
      </div>
      
      <div className="page-header">
        <Book size={30} />
        <h1>Course Registration</h1>
      </div>
      
      <div className="page-content registration-page">
        <div className="registration-instructions">
          <h2>Registration Instructions</h2>
          <ol>
            <li>Browse the available courses below</li>
            <li>Select a course you wish to register for</li>
            <li>Click the "Register for Course" button</li>
            <li>Your registration will be confirmed immediately</li>
          </ol>
          <p className="note">Note: Please consult with your academic advisor before registering for courses.</p>
        </div>

        <div className="course-registration-form">
          <h2>Available Courses</h2>
          <div className="course-select">
            <label htmlFor="course-dropdown">Select a Course:</label>
            <select 
              id="course-dropdown"
              value={selectedCourse} 
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="course-dropdown"
            >
              <option value="">-- Select a course --</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>
                  {course.id} - {course.name} ({course.credits} credits)
                </option>
              ))}
            </select>
          </div>

          {selectedCourse && (
            <div className="selected-course-info">
              <h3>Course Details</h3>
              <div className="course-details">
                <p><strong>Course ID:</strong> {courses.find(c => c.id === selectedCourse)?.id}</p>
                <p><strong>Name:</strong> {courses.find(c => c.id === selectedCourse)?.name}</p>
                <p><strong>Credits:</strong> {courses.find(c => c.id === selectedCourse)?.credits}</p>
                <p><strong>Description:</strong> {courses.find(c => c.id === selectedCourse)?.description}</p>
              </div>
            </div>
          )}

          <button 
            onClick={handleCourseRegistration}
            className="action-button"
            disabled={!selectedCourse}
          >
            Register for Course
          </button>

          {registrationStatus && (
            <p className={`registration-status ${registrationStatus.includes('Successfully') ? 'success' : 'error'}`}>
              {registrationStatus}
            </p>
          )}
        </div>
      </div>

      <div className="back-link">
        <a href="/dashboard">← Back to Dashboard</a>
      </div>
    </div>
  );
} 