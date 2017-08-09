import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import exerciseTypes from './exercise-types/Reducers';
import exercises from './exercises/Reducers';

const reducersConfig = combineReducers({
  exerciseTypes,
  exercises,
  route: routerReducer,
});

export default reducersConfig;
