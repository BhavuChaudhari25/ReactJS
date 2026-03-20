import React, { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [num, setNum] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const numRef = useRef(null);
  const num2Ref = useRef(null);

  useEffect(() => {
    console.log('Use effect is running..');
  }, [num]);

  const triggerPulse = (ref) => {
    if (!ref.current) return;
    ref.current.classList.remove('pulse');
    void ref.current.offsetWidth; // reflow
    ref.current.classList.add('pulse');
  };

  return (
    <div className="app">
      <p className="app-label">Interaction Monitor</p>

      <div className="card">
        <div className="stats">
          <div className="stat">
            <span className="stat-label">Hover Enter</span>
            <span className="stat-value cyan" ref={numRef}>{num}</span>
          </div>

          <div className="stat-divider" />

          <div className="stat">
            <span className="stat-label">Hover Leave</span>
            <span className="stat-value pink" ref={num2Ref}>{num2}</span>
          </div>
        </div>

        <button
          className="btn"
          onMouseEnter={() => {
            setNum(n => n + 1);
            triggerPulse(numRef);
          }}
          onMouseLeave={() => {
            setNum2(n => n + 10);
            triggerPulse(num2Ref);
          }}
        >
          Interact
        </button>

        <p className="hint">
          <span>Hover</span> to enter · <span>Leave</span> to score
        </p>
      </div>
    </div>
  );
};

export default App;