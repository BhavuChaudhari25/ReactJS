import React from 'react'
import './App.css'
import Button from './components/button/Button'
import Header from './components/header/Header'

const App = () => {
  return (
    <div>
      <Header />
      <div className="app-container">
        <div className="hero-section">
          <h1>Welcome to React</h1>
          <p>Build beautiful and interactive user interfaces with React, styled with CSS modules and modern design patterns.</p>
        </div>
        <div className="button-group">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
          <Button variant="outline">Documentation</Button>
        </div>
      </div>
    </div>
  )
}

export default App
