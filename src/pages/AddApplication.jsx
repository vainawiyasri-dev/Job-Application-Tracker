import React, { useState } from "react";
import { useAppData } from "../contexts/AppDataContext";

export default function AddApplication() {
  const { addApplication } = useAppData();
  const [formData, setFormData] = useState({
    company: "", title: "", type: "", status: "", location: "", date: "", notes: ""
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!formData.company) newErrors.company = "Company Name required";
    if (!formData.title) newErrors.title = "Job Title required";
    if (!formData.type) newErrors.type = "Job Type required";
    if (!formData.status) newErrors.status = "Status required";
    if (!formData.location) newErrors.location = "Location required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }
    addApplication({ ...formData, id: Date.now() });
    setSuccess("Application added successfully!");
    setFormData({ company: "", title: "", type: "", status: "", location: "", date: "", notes: "" });
    setErrors({});
  };

  return (
    <div>
      <h2>Add Job Application</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company Name</label>
          <input name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" />
          {errors.company && <p className="error">{errors.company}</p>}
        </div>

        <div>
          <label>Job Title</label>
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div>
          <label>Job Type</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="">Select type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>
          {errors.type && <p className="error">{errors.type}</p>}
        </div>

        <div>
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="">Select status</option>
            <option value="Applied">Applied</option>
            <option value="Interview Scheduled">Interview Scheduled</option>
            <option value="Selected">Selected</option>
            <option value="Rejected">Rejected</option>
          </select>
          {errors.status && <p className="error">{errors.status}</p>}
        </div>

        <div>
          <label>Location</label>
          <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
          {errors.location && <p className="error">{errors.location}</p>}
        </div>

        <div>
          <label>Applied Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>

        <div>
          <label>Notes</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Optional notes" />
        </div>

        <button type="submit">Add Application</button>
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}
