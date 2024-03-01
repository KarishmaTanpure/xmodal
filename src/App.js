import React, { useState } from 'react';
import './index.css'; 

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.email ||
      !formData.phone ||
      !formData.dob
    ) {
      alert('Please fill out all fields.');
    } else if (!formData.email.includes('@')) {
      alert('Invalid email. Please check your email address.');
    } else if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
    } else if (new Date(formData.dob) > new Date()) {
      alert('Invalid date of birth. Please enter a past date.');
    } else {
      
      alert('Form submitted successfully.');
      setIsOpen(false);

    }
  };

  
  return (
    <div className="center-container">
      <div className="modal-container">
        <h2>User Details Modal</h2>
        <button className="open-form-button" onClick={() => setIsOpen(true)}>
          Open Form
        </button>
        {isOpen && (
          <div className="modal-overlay modal">
            <div className="modal-content">
              <h3>Fill Details</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth:</label>
                  <input
                    type="date"
                    id="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default XModal;
