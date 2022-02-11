import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Home } from './Home';
function App() {
  let [state, setstate] = useState()
  return (
    <div className="App">
  <header className="App-header">
    <h2>ista small </h2>
    <h2>ista small </h2>
   <Home/>
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
