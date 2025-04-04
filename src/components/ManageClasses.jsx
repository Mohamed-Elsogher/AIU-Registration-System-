import { BookOpen, Calendar, ClipboardList, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../LandingUserInfo.css';
import './PageStyles.css';

export default function ManageClasses() {
  const [user, setUser] = useState({ name: "", id: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    if (!userData.name) {
      navigate('/login');
      return;
    }
    setUser(userData);
  }, [navigate]);

  if (!user.name) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="manage-classes-container">
      <div className="user-info-container">
        <div className="user-info-content">
          <p className="user-name">Welcome, {user.name}</p>
          <p className="user-id">ID: {user.id}</p>
        </div>
      </div>
      
      <div className="page-header">
        <BookOpen size={30} />
        <h1>Manage my Classes</h1>
      </div>
      
      <div className="sub-options-grid">
        <Link to="/view-classes" className="sub-option-link">
          <div className="sub-option-card">
            <div className="sub-option-icon">
              <BookOpen size={40} />
            </div>
            <div className="sub-option-title">
              <h3>View my Classes</h3>
            </div>
            <p className="sub-option-description">Check your current class schedule and details.</p>
          </div>
        </Link>

        <Link to="/enrollment-appointment" className="sub-option-link">
          <div className="sub-option-card">
            <div className="sub-option-icon">
              <Calendar size={40} />
            </div>
            <div className="sub-option-title">
              <h3>Enrollment Appointment</h3>
            </div>
            <p className="sub-option-description">Schedule your time for class enrollment.</p>
          </div>
        </Link>

        <Link to="/enrollment-requirement" className="sub-option-link">
          <div className="sub-option-card">
            <div className="sub-option-icon">
              <ClipboardList size={40} />
            </div>
            <div className="sub-option-title">
              <h3>Enrollment by Requirement</h3>
            </div>
            <p className="sub-option-description">Enroll in classes based on your academic needs.</p>
          </div>
        </Link>

        <Link to="/drop-classes" className="sub-option-link">
          <div className="sub-option-card">
            <div className="sub-option-icon">
              <Trash2 size={40} />
            </div>
            <div className="sub-option-title">
              <h3>Drop Classes</h3>
            </div>
            <p className="sub-option-description">Remove classes from your schedule if needed.</p>
          </div>
        </Link>
      </div>

      <div className="back-link">
        <Link to="/dashboard">← Back to Dashboard</Link>
      </div>
    </div>
  );
}