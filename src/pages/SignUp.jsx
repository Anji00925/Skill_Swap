import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/AuthForm.css';
import Sill from '../assets/Sill.jpg';

const SignUp = () => {
  return (
    <div className="container-fluid signup-wrapper">
      <div className="row vh-100">
        {/* Left side - Sign Up Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center left-panel">
          <form className="auth-form shadow-lg p-4 rounded">
            <h2 className="text-center mb-4">Sign Up for SkillSwap</h2>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Username" required />
            </div>

            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" required />
            </div>

            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" required />
            </div>

            <button type="submit" className="btn btn-success w-100">Sign Up</button>

            <p className="text-center mt-3">
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </form>
        </div>

        {/* Right side - Multicolor Image / Gradient */}
        <div className="col-md-6 right-panel d-none d-md-flex flex-column align-items-center justify-content-center">
  <img
    src={Sill}
    alt="SkillSwap Illustration"
    className="animated-image"
  />
  <div className="image-overlay-text">
    <h1>SkillSwap</h1>
    <p>Learn. Teach. Grow Together.</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default SignUp;
