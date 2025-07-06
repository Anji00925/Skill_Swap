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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Skill Offered:', formData);
    alert(`🔥 Awesome, ${formData.name}! You've shared "${formData.skill}"`);
  };

  return (
    <div className="container offer-page px-3 py-5">
      <div className="offer-panel shadow p-4 p-md-5 rounded">
        <h2 className="mb-4 text-center fw-bold text-primary">
          🧠 Share Your Skill with the World
        </h2>

        <form onSubmit={handleSubmit} className="offer-convo-form">

          {/* Name Input */}
          <div className="offer-block mb-4">
            <label className="offer-label">
              <FaUser className="me-2" />Who are you?
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control offer-input"
              placeholder="I'm Anika Rao"
              required
            />
          </div>

          {/* Skill Input */}
          <div className="offer-block mb-4">
            <label className="offer-label">
              <FaBrain className="me-2" />What can you teach?
            </label>
            <input
              type="text"
              name="skill"
              value={formData.skill}
              onChange={handleChange}
              className="form-control offer-input"
              placeholder="I can help you with JavaScript"
              required
            />
          </div>

          {/* Description */}
          <div className="offer-block mb-4">
            <label className="offer-label">
              ✏️ Tell us a bit more…
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="form-control offer-input"
              placeholder="I'll guide you through real-world projects and debugging tips!"
              required
            />
          </div>

          {/* Tags */}
          <div className="offer-block mb-4">
            <label className="offer-label">
              <FaTags className="me-2" />Add some buzzwords
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="form-control offer-input"
              placeholder="e.g. React, Beginner-friendly, Live demos"
            />
          </div>

          {/* Location */}
          <div className="offer-block mb-4">
            <label className="offer-label">
              <FaMapMarkerAlt className="me-2" />Where are you based? (Optional)
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="form-control offer-input"
              placeholder="Hyderabad, Remote, or Both!"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit" className="btn btn-success px-5 py-2 rounded-pill fw-bold">
              🚀 Publish My Skill
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Offer;
