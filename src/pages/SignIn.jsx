// src/pages/Signin.jsx
import { useState } from 'react';
import '../styles/auth.css';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Signing in with:', email, password);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-right">
        <div>
          <h1>Welcome Back!</h1>
          <p>Ready to swap skills again?</p>
        </div>
      </div>
      <div className="auth-left">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2 className="mb-4">Sign In to SkillSwap</h2>
          <input
            type="email"
            className="form-control auth-input"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control auth-input"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" className="pill-btn w-100">Sign In</button>
        </form>
      </div>
    </div>
  );
}
