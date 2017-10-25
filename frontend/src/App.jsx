import { Link, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import store from './store';
import RExercisesList from './exercises/list/RExercisesList';
import RExercisesByDateList from './exercises/list-by-date/RExercisesByDateList';
import RExerciseTypesList from './exercise-types/list/RExerciseTypesList';
import RExerciseSelectType from './exercise-types/list/RExerciseSelectType';
import RAddExerciseType from './exercise-types/exercise/RAddExerciseType';
import RAddExercise from './exercises/add/RAddExercise';
import AddExerciseType from './new-exercise/AddExerciseType';
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
                  <Link to="/types">types</Link>
                </li>
                <li>
                  <Link to="/exercises">exercises</Link>
                </li>
                <li>
                  <Link to="/dates">dates</Link>
                </li>
                <li>
                  <Link to="/add-new">add new</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <Route path="/types" exact component={RExerciseTypesList} />
            <Route path="/types/:id" exact component={RAddExerciseType} />
            <Route path="/select/type" exact component={RExerciseSelectType} />
            <Route path="/exercises" exact component={RExercisesList} />
            <Route path="/add/exercise" exact component={RAddExercise} />
            <Route path="/dates" exact component={RExercisesByDateList} />
            <Route path="/dates" exact component={RExercisesByDateList} />
            <Route path="/add-new" exact component={AddExerciseType} />
          </div>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}


export default App;
