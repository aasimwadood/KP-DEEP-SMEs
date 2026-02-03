import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to KP-DEEP</h1>
        <p>Khyber Pakhtunkhwa Digital Enterprise Enablement Program</p>
        <p>Transforming SMEs through digital innovation</p>
      </div>
      <div className="nav-cards">
        <div className="nav-card">
          <h3>Project Team</h3>
          <p>Meet the dedicated team behind KP-DEEP.</p>
          <Link to="/project-team" className="nav-link">Learn More</Link>
        </div>
        <div className="nav-card">
          <h3>Implementation</h3>
          <p>Discover our implementation strategies and progress.</p>
          <Link to="/implementation" className="nav-link">Explore</Link>
        </div>
        <div className="nav-card">
          <h3>Presentation</h3>
          <p>View our presentation slides and materials.</p>
          <Link to="http://localhost:3001" className="nav-link">View Presentation</Link>
        </div>
        <div className="nav-card">
          <h3>Demo</h3>
          <p>Experience our interactive demos.</p>
          <Link to="http://localhost:3002" className="nav-link">Try Demo</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;