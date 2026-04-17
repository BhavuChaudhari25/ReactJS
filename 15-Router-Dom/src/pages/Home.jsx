import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-badge">Open to work</div>

        <h1>
          Building things<br />
          for the <em>web</em>
        </h1>

        <p className="hero-sub">
          I'm Bhavesh — a developer who crafts clean, fast, and thoughtful
          digital experiences. Turning ideas into code that actually works.
        </p>

        <div className="cta-row">
          <Link to="/about" className="btn-primary">View my work →</Link>
          <Link to="/contact" className="btn-outline">Get in touch</Link>
        </div>
      </section>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-num">12+</div>
          <div className="stat-label">Projects shipped</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">3 yrs</div>
          <div className="stat-label">Experience</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">100%</div>
          <div className="stat-label">Client satisfaction</div>
        </div>
      </div>

      <div className="section-label">What I do</div>
      <div className="cards-grid">
        <div className="card">
          <div className="card-icon" style={{ background: 'var(--purple-50)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <h3>Frontend dev</h3>
          <p>React, routing, and component-based UIs that feel snappy and polished.</p>
        </div>

        <div className="card">
          <div className="card-icon" style={{ background: 'var(--teal-50)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <h3>Responsive design</h3>
          <p>Layouts that adapt across every device — mobile, tablet, and desktop.</p>
        </div>

        <div className="card">
          <div className="card-icon" style={{ background: 'var(--amber-50)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#854F0B" strokeWidth="2" strokeLinecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3>Component systems</h3>
          <p>Reusable, maintainable components built with scale in mind from day one.</p>
        </div>
      </div>
    </div>
  )
}

export default Home