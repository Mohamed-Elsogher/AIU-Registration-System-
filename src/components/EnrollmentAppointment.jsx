import React, { useState } from 'react';
import './EnrollmentAppointment.css';
import './PageStyles.css';

const EnrollmentAppointment = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    advisor: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the data to your backend
    console.log('Appointment scheduled:', formData);
    alert('Appointment scheduled successfully!');
    setFormData({
      date: '',
      time: '',
      advisor: '',
      notes: ''
    });
  };

  const enrollmentAvailable = false;

  return (
    <div className="student-portal-container">
      <div className="student-portal-content">
        <div className="page-header">
          <h1>Enrollment Appointment</h1>
        </div>

        {enrollmentAvailable ? (
          <div className="portal-card appointment-form-container">
            <form className="appointment-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="date" style={{ textAlign: 'left' }}>Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="time" style={{ textAlign: 'left' }}>Preferred Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="advisor" style={{ textAlign: 'left' }}>Advisor</label>
                <select
                  id="advisor"
                  name="advisor"
                  value={formData.advisor}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an advisor</option>
                  <option value="advisor1">Academic Advisor 1</option>
                  <option value="advisor2">Academic Advisor 2</option>
                  <option value="advisor3">Academic Advisor 3</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="notes" style={{ textAlign: 'left' }}>Additional Notes</label>
                <input
                  type="text"
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any specific topics you'd like to discuss"
                />
              </div>
              
              <button type="submit" className="portal-button submit-button">
                Schedule Appointment
              </button>
            </form>
          </div>
        ) : (
          <div className="portal-card appointment-form-container">
            <div className="access-denied-message">
              <h2>Access Denied</h2>
              <p>You do not have access to enrollment at this time.</p>
              <p>Please check back later or contact your academic advisor for more information.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnrollmentAppointment; 