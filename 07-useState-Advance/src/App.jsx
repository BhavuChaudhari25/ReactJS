import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [num, updateNume] = useState({ user: 'Jay', age: 20 });
  const [updated, setUpdated] = useState(false);

  const btnClicked = () => {
    updateNume(prev => ({ ...prev, user: 'Bhavya', age: 27 }));
    setUpdated(true);
  }

  return (
    <div className="root">
      <div className="card">
        <div className="card-tag">User Profile</div>

        <div className="profile-avatar">
          {num.user.charAt(0)}
        </div>

        <div className="profile-info">
          <div className="info-row">
            <span className="info-label">Name</span>
            <span className={`info-value ${updated ? 'flash' : ''}`}>{num.user}</span>
          </div>
          <div className="divider" />
          <div className="info-row">
            <span className="info-label">Age</span>
            <span className={`info-value ${updated ? 'flash' : ''}`}>{num.age}</span>
          </div>
        </div>

        <button
          className={`update-btn ${updated ? 'done' : ''}`}
          onClick={btnClicked}
          disabled={updated}
        >
          {updated ? '✓ Updated' : 'Update Profile'}
        </button>
      </div>
    </div>
  )
}

export default App