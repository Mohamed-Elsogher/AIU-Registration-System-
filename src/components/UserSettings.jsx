import React, { useState } from 'react';
import './UserSettings.css';
import { Link } from 'react-router-dom';

const UserSettings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [itSupportMessage, setItSupportMessage] = useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log('Password change requested:', { currentPassword, newPassword, confirmPassword });
  };

  const handleContactIT = (e) => {
    e.preventDefault();
    console.log('IT Support message:', itSupportMessage);
  };

  return (
    <div className="user-settings">
      <div className="settings-header">
        <h1>AIU.</h1>
        <p>Alamein International University</p>
        <p>User Settings</p>
      </div>
      <div className="settings-content">
        <div className="change-password">
          <h2>Change Password</h2>
          <form onSubmit={handleChangePassword}>
            <input 
              type="password" 
              placeholder="Current Password" 
              value={currentPassword} 
              onChange={(e) => setCurrentPassword(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="New Password" 
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Confirm New Password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
            <button type="submit">Change Password</button>
          </form>
        </div>
        <div className="contact-it">
          <h2>Contact IT Support</h2>
          <form onSubmit={handleContactIT}>
            <textarea 
              placeholder="Enter your message for IT Support" 
              value={itSupportMessage} 
              onChange={(e) => setItSupportMessage(e.target.value)} 
              required 
            />
            <button type="submit">Send to IT Support</button>
          </form>
        </div>
      </div>
      <div className="back-link">
        <Link to="/dashboard">← Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default UserSettings;