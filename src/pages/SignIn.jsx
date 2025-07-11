import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/AuthForm.css';

const SignIn = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Sign In to SkillSwap</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
        <p>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
