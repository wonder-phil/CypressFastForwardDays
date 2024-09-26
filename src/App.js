import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import CurrentDate from './components/CurrentDate';


function App() {
  const [count, setCount] = useState(0);
  const [date,setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleClick = () => {
    setCount(count + 1);
    setDate(new Date().toISOString().split('T')[0]);
  };

  useEffect(() => {
	
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Count: {count} on {date}</p>
        <button id="refreshButton" onClick={handleClick}>Increment</button>	
        <CurrentDate />
      </header>
    </div>
  );
}

export default App;
