import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectTeam from './pages/ProjectTeam';
import Implementation from './pages/Implementation';
import './App.css'

function App() {
  const location = useLocation();

  const Navigation = () => (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="logo">
          <div className="logo-icon">KP</div>
          <span>KP-DEEP</span>
        </div>
        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/project-team"
            className={`nav-link ${location.pathname === '/project-team' ? 'active' : ''}`}
          >
            Team
          </Link>
          <Link
            to="/implementation"
            className={`nav-link ${location.pathname === '/implementation' ? 'active' : ''}`}
          >
            Implementation
          </Link>
          <Link
            to="http://localhost:3001"
            className={`nav-link ${location.pathname === '/presentation' ? 'active' : ''}`}
          >
            Presentation
          </Link>
          <Link
            to="http://localhost:3002"
            className={`nav-link ${location.pathname === '/demo' ? 'active' : ''}`}
          >
            Demo
          </Link>
        </div>
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>KP-DEEP</h4>
          <p>Khyber Pakhtunkhwa Digital Enterprise Enablement Program</p>
          <p>Transforming SMEs through digital innovation</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Government Girls Postgraduate College Kohat</p>
          <p>Email: info@kpdeep.kp.gov.pk</p>
        </div>
        <div className="footer-section">
          <h4>Partners</h4>
          <p>KPITB</p>
          <p>Bank of Khyber</p>
          <p>SMEDA</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 KP-DEEP Program. All rights reserved. Government of Khyber Pakhtunkhwa</p>
      </div>
    </footer>
  );

  return (
    <div className="app">
      <Navigation />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-team" element={<ProjectTeam />} />
          <Route path="/implementation" element={<Implementation />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
