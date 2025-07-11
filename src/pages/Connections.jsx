// src/pages/Connections.jsx
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUser } from 'react-icons/fa';

const dummyConnections = [
  { name: 'John Doe', skill: 'Guitar', status: 'Connected' },
  { name: 'Jane Smith', skill: 'React', status: 'Pending' },
  { name: 'Alice Ray', skill: 'UX Design', status: 'Connected' },
];

export default function Connections() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <button className="btn btn-outline-primary mb-3" onClick={() => navigate('/')}>
        <FaArrowLeft className="me-2" /> Back to Dashboard
      </button>
      <h2 className="mb-4">Your Connections</h2>
      <div className="row">
        {dummyConnections.map((conn, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow rounded-4 p-3 border-0">
              <div className="d-flex align-items-center mb-2">
                <FaUser size={28} className="me-3 text-primary" />
                <div>
                  <h5 className="mb-0">{conn.name}</h5>
                  <small className="text-muted">{conn.skill}</small>
                </div>
              </div>
              <span
                className={`badge rounded-pill px-3 py-2 ${
                  conn.status === 'Connected' ? 'bg-success' : 'bg-warning text-dark'
                }`}
              >
                {conn.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
