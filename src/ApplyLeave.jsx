
import React, { useState } from "react";
import "./ApplyLeave.css";

const ApplyLeave = ({ email }) => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    email: "",
    section: "",
    branch: "",
    year: "",
    fromDate: "",
    toDate: "",
    reason: ""
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
    setStatus(null);
  };

  return (
    <div className="page">
      <div className="header">
        <div className="person-icon">👤</div>
        <span>{email}</span>
        <div className="dropdown">
          <p><strong>Name:</strong> {email}</p>
          <button onClick={() => window.location.href = "/"}>Logout</button>
        </div>
      </div>

      <div className="container">
        <h1>Apply for Leave</h1>

        <form onSubmit={handleSubmit}>
          <label>Student Name:</label>
          <input type="text" name="name" required onChange={handleChange} />

          <label>Student ID:</label>
          <input type="text" name="id" required onChange={handleChange} />

          <label>Email:</label>
          <input type="email" name="email" required onChange={handleChange} />

          <label>Section:</label>
          <input type="text" name="section" required onChange={handleChange} />

          <label>Branch:</label>
          <input type="text" name="branch" required onChange={handleChange} />

          <label>Year:</label>
          <input type="text" name="year" required onChange={handleChange} />

          <label>From Date:</label>
          <input type="date" name="fromDate" required onChange={handleChange} />

          <label>To Date:</label>
          <input type="date" name="toDate" required onChange={handleChange} />

          <label>Reason for Leave:</label>
          <textarea name="reason" required onChange={handleChange}></textarea>

          <button type="submit">Submit Leave Request</button>
        </form>

        {status === null && <p className="pending">Your leave request is pending...</p>}
        {status === true && <p className="approved">Your leave request has been approved!</p>}
        {status === false && <p className="rejected">Your leave request has been rejected.</p>}
      </div>
    </div>
  );
};

export default ApplyLeave;
