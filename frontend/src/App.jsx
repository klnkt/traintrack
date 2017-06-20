import { Link, Route } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import List from './list/List';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <nav>
        <p>
          <Link to="/">Index</Link>
        </p>
        <p>
          <Link to="/list">List</Link>
        </p>
      </nav>
      <Route path="/list" component={List} />
    </div>
  );
}


export default App;
