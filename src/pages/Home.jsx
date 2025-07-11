import './Home.css';
import { Link } from 'react-router-dom';
import { FaRocket, FaCompass } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  // const totalConnects = 12;
  return (
    <div className="container my-5 px-3 home-page">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Welcome to SkillSwap</h1>
        <p className="lead text-muted">Learn. Teach. Connect — all for free!</p>
      </div>
      <button
        className="total-connects-btn"
        onClick={() => navigate('/connections')}
      >
        <FaHeart color="#dc3545" />
        Connections
        {/* Total Connects: <strong>{totalConnects}</strong> */}
      </button>

      {/* CTA Buttons */}
      <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-5">
        <Link
          to="/offer"
          className="btn btn-primary px-4 py-2 rounded-pill fw-medium d-flex align-items-center justify-content-center gap-2"
        >
          <FaRocket />
          Get Started
        </Link>

        <Link
          to="/skillboard"
          className="btn btn-outline-dark px-4 py-2 rounded-pill fw-medium d-flex align-items-center justify-content-center gap-2"
        >
          <FaCompass />
          Explore Skills
        </Link>
      </div>

      {/* Feature Cards */}
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100 feature-card">
            <div className="card-body">
              <h5 className="card-title text-info">Teach What You Know</h5>
              <p className="card-text text-secondary">
                Share your knowledge in coding, design, language, or any skill you have.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100 feature-card">
            <div className="card-body">
              <h5 className="card-title text-success">Learn What You Love</h5>
              <p className="card-text text-secondary">
                Find and connect with people who can help you grow through their skills.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 mx-md-auto">
          <div className="card border-0 shadow-sm h-100 feature-card">
            <div className="card-body">
              <h5 className="card-title text-warning">Make Real Connections</h5>
              <p className="card-text text-secondary">
                Meet learners like you and build strong learning partnerships across campuses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
