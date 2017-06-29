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
import RAddExercise from './exercises/add-exercise/RAddExercise';
import Mock from './DataMock';

import './App.scss';

function App() {
  const store = createStore(
    reducersConfig,
    Mock,
    applyMiddleware(routerMiddleware(history)),
  );
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <nav>
            <div className="nav-wrapper">
              <ul id="nav-mobile" className="left">
                <li>
                  <Link to="/">Index</Link>
                </li>
                <li>
                  <Link to="/trainings">trainings</Link>
                </li>
                <li>
                  <Link to="/exercises">exercises</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <Route path="/list" component={List} />
            <Route path="/exercises" exact component={RExercisesList} />
            <Route path="/trainings" exact component={RTrainingsList} />
            <Route path="/exercises/:id" exact component={RExercise} />
            <Route path="/trainings/:id" exact component={RTraining} />
            <Route path="/trainings/:id/addexercise" component={RAddExercise} />
          </div>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}


export default App;
