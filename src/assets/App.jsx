// src/App.jsx
import React from 'react';

import logo from './assets/p1.png';
import connectImg from './assets/connectpeople.jpeg';
import togetherImg from './assets/together.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><i className="fa fa-home"></i> Home</li>
          <li><i className="fa fa-book"></i> Catalog</li>
          <li><i className="fa fa-globe"></i> About</li>
          <li><i className="fa fa-phone"></i> +91 123456789</li>
          <li><i className="fas fa-handshake"></i> Support</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-text">
          <h1>"We provide opportunities for your better future"</h1>
          <p>
            Struggling with a new job, project, or technology? We’re here to help. At [Your Website Name], we provide
            real-time job support, technical assistance, and on-demand project guidance to professionals across industries.
          </p>
          <div className="buttons">
            <button>Explore</button>
            <button>Get Started</button>
          </div>
        </div>
        <div>
          <img src={connectImg} alt="connectivity" className="hero-image" />
        </div>
      </main>

      {/* Mission Section */}
      <section className="mission">
        <img src={togetherImg} alt="work together" className="mission-image" />
        <div className="mission-content">
          <h1>Our <span>Mission</span></h1>
          <ul>
            <li><strong>Empower Professionals:</strong> Provide timely and expert assistance.</li>
            <li><strong>Facilitate Career Growth:</strong> Support career advancement.</li>
            <li><strong>Deliver Real-Time Solutions:</strong> Ensure uninterrupted productivity.</li>
            <li><strong>Bridge Knowledge Gaps:</strong> Simplify complex technologies.</li>
            <li><strong>Build a Supportive Community:</strong> Foster professional collaboration.</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h1>Job Support <span>Services</span></h1>
        <div className="service-list">
          <div><i className="fas fa-chalkboard-teacher"></i><h3>Skill Enhancement</h3><p>Hands-on training to make you job-ready.</p></div>
          <div><i className="fas fa-briefcase"></i><h3>Job Matching</h3><p>Roles that match your skills and interests.</p></div>
          <div><i className="fas fa-user-check"></i><h3>Standout Profiles</h3><p>Resumes that impress employers.</p></div>
          <div><i className="fas fa-shield-alt"></i><h3>Trusted Employers</h3><p>Only verified and reliable companies.</p></div>
          <div><i className="fas fa-chart-line"></i><h3>Career Growth</h3><p>Guidance to grow in your career path.</p></div>
        </div>
      </section>

      {/* Footer with Social Icons */}
      <footer className="footer">
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
      </footer>
    </>
  );
}

export default App;
