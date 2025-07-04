import './SkillBoard.css';
import { FaUserCircle } from 'react-icons/fa';

const skills = [
  {
    id: 1,
    name: 'Anika Rao',
    skill: 'Web Development',
    description: 'Can teach HTML, CSS, JavaScript and React basics.',
    tags: ['HTML', 'CSS', 'React'],
  },
  {
    id: 2,
    name: 'Ravi Teja',
    skill: 'Guitar Basics',
    description: 'Strumming patterns, beginner chords, and practice routines.',
    tags: ['Acoustic', 'Chords'],
  },
  {
    id: 3,
    name: 'Fatima Khan',
    skill: 'Spoken French',
    description: 'Help with pronunciation, greetings, and basic conversation.',
    tags: ['French', 'Speaking'],
  },
  {
    id: 4,
    name: 'Mohan Das',
    skill: 'Photography',
    description: 'Teach composition, lighting and camera settings.',
    tags: ['DSLR', 'Composition'],
  },
];

const SkillBoard = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 text-primary">Explore Shared Skills</h2>

      <div className="row g-4">
        {skills.map(({ id, name, skill, description, tags }) => (
          <div key={id} className="col-12 col-md-6 col-lg-4">
            <div className="card skill-card border-0 shadow h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <FaUserCircle size={32} className="text-secondary me-2" />
                  <div>
                    <h6 className="mb-0 text-dark fw-bold">{name}</h6>
                    <small className="text-muted">Sharing: {skill}</small>
                  </div>
                </div>

                <p className="card-text mt-3 text-muted">{description}</p>

                <div className="mb-3">
                  {tags.map((tag, index) => (
                    <span key={index} className="badge skill-tag">{tag}</span>
                  ))}
                </div>

                <button className="btn btn-primary connect-btn w-100">Connect</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBoard;
