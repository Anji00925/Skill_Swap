import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/AuthForm.css';

const SignUp = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Sign Up for SkillSwap</h2>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
