import React from 'react'
import './App.css'

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault();
  }

  return (
    <div className="root">
      <div className="form-card">
        <div className="form-header">
          <div className="form-icon">✦</div>
          <h2 className="form-title">Who are you?</h2>
          <p className="form-subtitle">Enter your name to get started</p>
        </div>
        <form className="form" onSubmit={ (e) => {
          submitHandler(e);
        }}>
          <div className="input-wrap">
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
              autoComplete="off"
            />
            <span className="input-line" />
          </div>
          <button type="submit" className="submit-btn">
            <span className="btn-text">Submit</span>
            <span className="btn-arrow">→</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default App