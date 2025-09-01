import { useState } from 'react';
import './App.css';

export default function App() {
  // Counter state
  const [count, setCount] = useState(0);
  
  // Text input state
  const [text, setText] = useState('');

  // Counter functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const resetCounter = () => setCount(0);

  // Text functions
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const clearText = () => setText('');

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="main-title">
          Counter & Live Text Preview By Safe Node 👨‍💻⚡
        </h1>
        
        {/* Counter Section */}
        <div className="card">
          <h2 className="card-title">
            Counter App
          </h2>
          
          <div className="counter-section">
            <div className="counter-display">
              {count}
            </div>
            
            <div className="counter-buttons">
              <button
                onClick={decrement}
                className="btn btn-decrease"
              >
                - Decrease
              </button>
              
              <button
                onClick={increment}
                className="btn btn-increase"
              >
                + Increase
              </button>
            </div>
            
            <button
              onClick={resetCounter}
              className="btn btn-reset"
            >
              Reset Counter
            </button>
          </div>
        </div>

        {/* Live Text Preview Section */}
        <div className="card">
          <h2 className="card-title">
            Live Text Preview
          </h2>
          
          <div className="text-section">
            <div className="input-group">
              <label className="input-label">
                Type something:
              </label>
              <input
                type="text"
                value={text}
                onChange={handleTextChange}
                placeholder="Start typing..."
                className="text-input"
              />
            </div>
            
            <div className="text-controls">
              <span className="char-count">
                Character count: {text.length}
              </span>
              <button
                onClick={clearText}
                className="btn btn-clear"
              >
                Clear Text
              </button>
            </div>
            
            <div className={`preview-container ${text ? 'has-content' : ''}`}>
              <h3 className="preview-title">
                Live Preview:
              </h3>
              <div className="preview-text">
                {text || (
                  <span className="preview-placeholder">
                    Your text will appear here as you type...
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* App Statistics */}
        <div className="stats-section">
          <h3 className="stats-title">
            App Statistics
          </h3>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">{count}</span>
              <div className="stat-label">Current Count</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">{text.length}</span>
              <div className="stat-label">Text Length</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}