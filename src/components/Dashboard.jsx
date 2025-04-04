import { Award, Book, CreditCard, Settings } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../LandingUserInfo.css';
import './Dashboard.css';

export default function Dashboard() {
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
    { id: 'CS101', name: 'Introduction to Computer Science', credits: 3 },
    { id: 'MATH101', name: 'Calculus I', credits: 4 },
    { id: 'ENG101', name: 'English Composition', credits: 3 },
    { id: 'PHY101', name: 'Physics I', credits: 4 },
    { id: 'CHEM101', name: 'Chemistry I', credits: 4 }
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
    <div className="dashboard-main">
      <div className="user-info-container">
        <div className="user-info-content">
          <p className="user-name">{user.name}</p>
          <p className="user-id">ID: {user.id}</p>
        </div>
      </div>
      
      <div className="dashboard-grid">
        {/* Academic Records */}
        <Link to="/academic" className="dashboard-card-link">
          <div className="dashboard-card">
            <div className="card-title">
              <Award size={40} />
              <h2>Academic Records</h2>
            </div>
          </div>
        </Link>

        {/* Manage el classes */}
        <Link to="/manage-classes" className="dashboard-card-link">
          <div className="dashboard-card">
            <div className="card-title">
              <Book size={40} />
              <h2>Manage my Classes</h2>
            </div>
          </div>
        </Link>

        {/* manage Payments */}
        <Link to="/payments" className="dashboard-card-link">
          <div className="dashboard-card">
            <div className="card-title">
              <CreditCard size={40} />
              <h2>University Payments</h2>
            </div>
          </div>
        </Link>

        {/* User Settings  */}
        <Link to="/settings" className="dashboard-card-link">
          <div className="dashboard-card">
            <div className="card-title">
              <Settings size={40} />
              <h2>User Settings</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
} 