import './Offer.css';
import { useState } from 'react';
import { FaUser, FaBrain, FaTags, FaMapMarkerAlt } from 'react-icons/fa';

const Offer = () => {
  const [formData, setFormData] = useState({
    name: '',
    skill: '',
    description: '',
    tags: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🚀 Thank you, ${formData.name || 'Friend'}! Your skill "${formData.skill}" has been submitted.`);
  };

  return (
    <div className="container offer-page px-3 py-5">
      <div className="row g-4 align-items-start">
        {/* Form Card */}
        <div className="offer-page d-flex justify-content-center align-items-center min-vh-100 px-3">
  <div className="offer-card p-4 rounded shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
    <h3 className="mb-4 text-primary fw-bold text-center">✨ Create Your Skill Card</h3>
    <form onSubmit={handleSubmit} className="offer-form">

              {/* Name */}
              <div className="form-group mb-3">
                <label htmlFor="name" className="offer-label"><FaUser className="me-2" /> Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control offer-input"
                  placeholder="e.g. Anika Rao"
                  required
                />
              </div>

              {/* Skill */}
              <div className="form-group mb-3">
                <label htmlFor="skill" className="offer-label"><FaBrain className="me-2" /> Skill</label>
                <input
                  type="text"
                  name="skill"
                  id="skill"
                  value={formData.skill}
                  onChange={handleChange}
                  className="form-control offer-input"
                  placeholder="e.g. React, JavaScript"
                  required
                />
              </div>

              {/* Description */}
              <div className="form-group mb-3">
                <label htmlFor="description" className="offer-label">📝 Description</label>
                <textarea
                  name="description"
                  id="description"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-control offer-input"
                  placeholder="Tell us how you teach, your experience, or style"
                  required
                />
              </div>

              {/* Tags */}
              <div className="form-group mb-3">
                <label htmlFor="tags" className="offer-label"><FaTags className="me-2" /> Tags</label>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="form-control offer-input"
                  placeholder="e.g. Beginner, Live sessions, UI/UX"
                />
              </div>

              {/* Location */}
              <div className="form-group mb-4">
                <label htmlFor="location" className="offer-label"><FaMapMarkerAlt className="me-2" /> Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-control offer-input"
                  placeholder="e.g. Remote / Delhi"
                />
              </div>

              {/* Submit */}
              <button className="btn btn-primary w-100 rounded-pill fw-bold py-2" type="submit">
                🚀 Publish My Skill
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
