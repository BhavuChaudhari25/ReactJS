import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);

  function increaseNum() { setNum(num + 1); }
  function decreaseNum() { setNum(num - 1); }

  const isPositive = num > 0;
  const isNegative = num < 0;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .counter-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a0a0a;
          font-family: 'DM Mono', monospace;
          overflow: hidden;
          position: relative;
        }

        .counter-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 60% 50% at 20% 50%, rgba(255,80,30,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 50% 60% at 80% 50%, rgba(30,100,255,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .counter-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          padding: 64px 80px 56px;
          min-width: 380px;
        }

        .counter-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        }

        .counter-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 24px;
          user-select: none;
        }

        .counter-display {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(100px, 18vw, 160px);
          line-height: 0.85;
          letter-spacing: -0.02em;
          color: #fff;
          transition: color 0.3s ease, transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);
          user-select: none;
          will-change: transform;
          min-width: 220px;
          text-align: center;
        }

        .counter-display.positive { color: #ff6b35; }
        .counter-display.negative { color: #4d9fff; }

        .counter-display.bump {
          animation: bump 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes bump {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        .counter-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 36px 0 40px;
        }

        .counter-controls {
          display: flex;
          gap: 16px;
        }

        .btn {
          position: relative;
          width: 72px;
          height: 72px;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.7);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .btn::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .btn-inc::before { background: rgba(255,107,53,0.15); }
        .btn-dec::before { background: rgba(77,159,255,0.15); }

        .btn:hover::before { opacity: 1; }
        .btn:hover { border-color: rgba(255,255,255,0.25); color: #fff; transform: translateY(-2px); }
        .btn:active { transform: translateY(0) scale(0.96); }

        .btn-inc:hover { border-color: rgba(255,107,53,0.5); color: #ff6b35; }
        .btn-dec:hover { border-color: rgba(77,159,255,0.5); color: #4d9fff; }

        .btn-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-top: 12px;
          user-select: none;
        }

        .btn-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
      `}</style>

      <div className="counter-root">
        <div className="counter-card">
          <span className="counter-label">Counter</span>
          <div className={`counter-display ${isPositive ? 'positive' : ''} ${isNegative ? 'negative' : ''}`}>
            {num}
          </div>
          <div className="counter-divider" />
          <div className="counter-controls">
            <div className="btn-wrap">
              <button className="btn btn-dec" onClick={decreaseNum}>−</button>
              <span className="btn-label">Dec</span>
            </div>
            <div className="btn-wrap">
              <button className="btn btn-inc" onClick={increaseNum}>+</button>
              <span className="btn-label">Inc</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App