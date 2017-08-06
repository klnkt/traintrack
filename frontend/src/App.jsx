import { Link, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import store from './store';
import List from './list/List';
import RExercisesList from './exercises/exercises-list/RExercisesList';
import RAddExercise from './exercises/add-exercise/RAddExercise';
import './App.scss';

function App() {
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
                  <Link to="/exercises">exercises</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <Route path="/list" component={List} />
            <Route path="/exercises" exact component={RExercisesList} />
            <Route path="/exercises/:id" exact component={RAddExercise} />
          </div>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}


export default App;
