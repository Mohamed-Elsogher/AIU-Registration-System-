import { ClipboardList } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../LandingUserInfo.css';
import './PageStyles.css';

export default function EnrollmentRequirement() {
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
        <h1>Enrollment by Requirement</h1>
      </div>
      
      <div className="sub-options-grid">
        {/* First Year */}
        <Link to="/year-one" className="sub-option-link">
          <div className="sub-option-card">
            <div className="sub-option-title">
              <h3>First Year</h3>
            </div>
          </div>
        </Link>

        {/* Second Year */}
        <Link to="/year-two" className="sub-option-link">
          <div className="sub-option-card">
            <div className="sub-option-title">
              <h3>Second Year</h3>
            </div>
          </div>
        </Link>

        {/* Third Year */}
        <Link to="/year-three" className="sub-option-link">
          <div className="sub-option-card">
            <div className="sub-option-title">
              <h3>Third Year</h3>
            </div>
          </div>
        </Link>

        {/* Fourth Year */}
        <Link to="/year-four" className="sub-option-link">
          <div className="sub-option-card">
            <div className="sub-option-title">
              <h3>Fourth Year</h3>
            </div>
          </div>
        </Link>
      </div>
      {/* Requirmnet will be added */}
      <div className="back-link">
        <a href="/manage-classes">← Back to Manage Classes</a>
      </div>
    </div>
  );
} 