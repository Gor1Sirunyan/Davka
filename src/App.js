import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  let [state, setstate] = useState()
  return (
    <div className="App">
  <header className="App-header">
    <h2>ista small </h2>
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
  </header>
    App is working
    </div >
  );
}

export default App;
