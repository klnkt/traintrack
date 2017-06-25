import { Link, Route, Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import history from './history';

import List from './list/List';
import traintrackApp from './ReducersConfig';
import Training from './trainings/Training';
import Exercise from './exercises/Exercise';
import TrainingsList from './trainings/TrainingsList';
import ExercisesList from './exercises/ExercisesList';
import AddExercisesList from './exercises/AddExercisesList';

import logo from './logo.svg';
import './App.css';

function App() {
  let store = createStore(traintrackApp);
  return (
    <Router history={history}>
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
            <Link to="/trainings">trainings</Link>
          </p>
          <p>
            <Link to="/exercises">exercises</Link>
          </p>
        </nav>
        <Route path="/list" component={List} />
        <Route path="/exercises" exact component={ExercisesList} />
        <Route path="/trainings" exact component={TrainingsList} />
        <Route path="/trainings/:id/exercises" exact component={AddExercisesList} />
        <Route path="/exercises/:id" exact component={Exercise} />
        <Route path="/trainings/:id" exact component={Training} />
      </div>
    </Router>
  );
}


export default App;
