// src/components/AuthForm.jsx
import { useState } from 'react';

export default function AuthForm({ type }) {
  const isSignIn = type === 'signin';
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`${isSignIn ? 'Signing in' : 'Signing up'} with`, formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4 text-primary">{isSignIn ? 'Welcome Back!' : 'Create Account'}</h2>
      {!isSignIn && (
        <input
          type="text"
          name="name"
          className="form-control mb-3 auth-input"
          placeholder="Full Name"
          onChange={handleChange}
        />
      )}
      <input
        type="email"
        name="email"
        className="form-control mb-3 auth-input"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        className="form-control mb-4 auth-input"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit" className="pill-btn">
        {isSignIn ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
}
