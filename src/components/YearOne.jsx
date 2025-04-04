import { ClipboardList } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../LandingUserInfo.css';
import './PageStyles.css';

export default function YearOne() {
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
        <ClipboardList size={30} />
        <h1>First Year Courses</h1>
      </div>
      
      <div className="sub-options-grid">
        {/* First Semester */}
        <Link to="/year-one/first-semester" className="sub-option-link">
          <div className="sub-option-card">
            <div className="sub-option-title">
              <h3>First Semester</h3>
            </div>
          </div>
        </Link>

        {/* Second Semester */}
        <Link to="/year-one/second-semester" className="sub-option-link">
          <div className="sub-option-card">
            <div className="sub-option-title">
              <h3>Second Semester</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="back-link">
        <a href="/enrollment-requirement">← Back to Enrollment by Requirement</a>
      </div>
    </div>
  );
} 