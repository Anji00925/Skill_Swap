// src/pages/Signup.jsx
import { useState } from 'react';
import '../styles/auth.css';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Signing up with:', form);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-right">
        <div>
          <h1>Join SkillSwap!</h1>
          <p>Offer and learn amazing skills from others.</p>
        </div>
      </div>
      <div className="auth-left">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2 className="mb-4">Create an Account</h2>
          <input
            type="text"
            className="form-control auth-input"
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
          />
          <input
            type="email"
            className="form-control auth-input"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control auth-input"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <button type="submit" className="pill-btn w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
