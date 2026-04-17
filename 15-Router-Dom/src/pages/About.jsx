import React from 'react'

const skills = [
  'React', 'JavaScript', 'TypeScript', 'HTML & CSS',
  'Node.js', 'REST APIs', 'Git', 'Figma', 'Tailwind CSS', 'Vite'
]

const About = () => {
  return (
    <div className="page">
      <div className="about-header">
        <div>
          <h1>About me</h1>
          <p>
            I'm a passionate frontend developer based in India, focused on building
            modern web applications. I love clean code, thoughtful design, and
            learning new things every day.
          </p>
          <p style={{ marginTop: '1rem' }}>
            When I'm not coding, you'll find me exploring new tech, contributing to
            open source, or sharing what I've learned with others.
          </p>
        </div>
        <div className="about-avatar">B</div>
      </div>

      <div className="skills-section">
        <h2>Skills & tools</h2>
        <div className="skills-list">
          {skills.map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About