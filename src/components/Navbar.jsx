import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpeg';
// OPTIONAL: import a profile icon image
// import profileIcon from '../assets/profile-icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container-fluid px-3">

        {/* Left: Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 text-white fw-bold me-auto me-lg-0">
          <img src={logo} alt="logo" className="brand-logo" />
          SkillSwap
        </Link>

        {/* Toggle button (mobile) */}
        <button className="navbar-toggler bg-light" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon" />
        </button>

        {/* Center: Page Links */}
        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav gap-lg-4 text-center my-2 my-lg-0">
            <li className="nav-item">
              <Link className="nav-link nav-link-style" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-style" to="/offer">Offer a Skill</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-style" to="/seek">Seek a Skill</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-style" to="/my-journey">My Journey</Link>
            </li>
          </ul>
        </div>

        {/* Right: Profile + Logout */}
        <div className={`d-flex align-items-center gap-3 ${isOpen ? 'w-100 justify-content-center mt-2' : ''}`}>
          {/* Profile Icon Link */}
          <Link to="/profile" className="nav-link nav-link-style profile-icon-link text-white">
            {/* Replace 👤 with <img src={profileIcon} alt="Profile" className="profile-icon" /> if you have an icon */}
            👤
          </Link>

          {/* Logout Button */}
          <button className="btn btn-outline-light logout-btn">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
