"use client";
import { useState } from "react";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    telephone: "",
    email: "",
    location: "",
    position: "",
    resume: null,
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("telephone", formData.telephone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("position", formData.position);
    formDataToSend.append("message", formData.message);

    if (formData.resume) {
      formDataToSend.append("resume", formData.resume);
    }

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await res.json();
    console.log(data);

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission

    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your application! We will contact you soon.",
    });

    // Reset form after successful submission
    setFormData({
      fullName: "",
      telephone: "",
      email: "",
      location: "",
      position: "",
      resume: null,
      message: "",
    });
  };

  const positions = [
    "Healthcare Aide",
    "Registered Nurse",
    "Licensed Practical Nurse",
    "Care Coordinator",
    "Administrative Support",
    "Other",
  ];

  return (
    <div className="career-form-container">
      {formStatus.submitted ? (
        <div className="form-success">
          <h3>Application Submitted!</h3>
          <p>{formStatus.message}</p>
          <button
            className="btn"
            onClick={() =>
              setFormStatus({ submitted: false, error: false, message: "" })
            }
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form className="career-form" onSubmit={handleSubmit}>
          {formStatus.error && (
            <div className="form-error">
              <p>{formStatus.message}</p>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="fullName">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">
              Telephone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, Province"
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">
              Position Applying For <span className="required">*</span>
            </label>
            {/* <select id="position" name="position" value={formData.position} onChange={handleChange} required>
              <option value="">Select a position</option>
              {positions.map((pos, index) => (
                <option key={index} value={pos}>
                  {pos}
                </option>
              ))}
            </select> */}

            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              placeholder="Enter position"
            />
          </div>

          <div className="form-group">
            <label htmlFor="resume">Upload Resume (PDF, DOC, DOCX)</label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Information</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your experience and why you want to join our team"
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Submit Application
            </button>
          </div>

          <p className="form-note">
            <span className="required">*</span> Required fields
          </p>
        </form>
      )}
    </div>
  );
}

