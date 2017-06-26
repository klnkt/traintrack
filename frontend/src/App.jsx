import { Link, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import history from './history';

import List from './list/List';
import reducersConfig from './ReducersConfig';
import RTraining from './trainings/training/RTraining';
import RExercise from './exercises/exercise/RExercise';
import RTrainingsList from './trainings/trainings-list/RTrainingsList';
import RExercisesList from './exercises/exercises-list/RExercisesList';
import RAddExercisesList from './exercises/add-exercises/RAddExercisesList';

import logo from './logo.svg';
import './App.scss';

function App() {
  const store = createStore(
    reducersConfig,
    {
      exercises: [{
        id: 1,
        title: 'foo',
        sets: [10, 10],
      },
      {
        id: 2,
        title: 'bar',
        sets: [10, 10],
      },
      {
        id: 3,
        title: 'baz',
        sets: [10, 10],
      },
      {
        id: 4,
        title: 'qqq',
        sets: [10, 10],
      }],
      trainings: [
        {
          id: 1,
          title: 'first training',
          exerciseIds: [1, 2],
        },
        {
          id: 2,
          title: 'second training',
          exerciseIds: [3, 4],
        },
      ],
    },
    applyMiddleware(routerMiddleware(history)),
  );
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
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
          <Route path="/exercises" exact component={RExercisesList} />
          <Route path="/trainings" exact component={RTrainingsList} />
          <Route path="/trainings/:id/exercises" exact component={RAddExercisesList} />
          <Route path="/exercises/:id" exact component={RExercise} />
          <Route path="/trainings/:id" exact component={RTraining} />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}


export default App;
