import { BookOpen, Calendar, ClipboardList, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../LandingUserInfo.css';
import './PageStyles.css';

export default function ManageClasses() {
  const [user, setUser] = useState({name: "", id: ""});
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
    <div className="page-container">
      <div className="user-info-container">
        <div className="user-info-content">
          <p className="user-name">{user.name}</p>
          <p className="user-id">ID: {user.id}</p>
        </div>
      </div>
      
      <div className="page-header">
        <BookOpen size={30} />
        <h1>Manage my Classes</h1>
      </div>
      
      <div className="sub-options-grid">
        {/* View Classes */}
        <Link to="/view-classes" className="sub-option-link">
          <div className="sub-option-card">
            <div className="sub-option-title">
              <BookOpen size={30} />
              <h3>View my Classes</h3>
            </div>
          </div>
        </Link>

        {/* Enrollment Appointment */}
        <Link to="/enrollment-appointment" className="sub-option-link">
          <div className="sub-option-card">
            <div className="sub-option-title">
              <Calendar size={30} />
              <h3>Enrollment Appointment</h3>
            </div>
          </div>
        </Link>

        {/* Enrollment by Requirement */}
        <Link to="/enrollment-requirement" className="sub-option-link">
          <div className="sub-option-card">
            <div className="sub-option-title">
              <ClipboardList size={30} />
              <h3>Enrollment by Requirement</h3>
            </div>
          </div>
        </Link>

        {/* Drop Classes */}
        <Link to="/drop-classes" className="sub-option-link">
          <div className="sub-option-card">
            <div className="sub-option-title">
              <Trash2 size={30} />
              <h3>Drop Classes</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="back-link">
        <a href="/dashboard">← Back to Dashboard</a>
      </div>
    </div>
  );
} 