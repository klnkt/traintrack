import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import exercises from './exercises/Reducers';
import trainings from './trainings/Reducers';

const reducersConfig = combineReducers({
  exercises,
  trainings,
  route: routerReducer,
});

export default reducersConfig;
