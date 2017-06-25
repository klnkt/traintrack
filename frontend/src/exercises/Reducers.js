import { actions } from './Actions';

const exercises = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_EXERCISE:
      return [...state, action.exercise || { id: state.length + 1, title: 'new exercise' }];
    default:
      return state;
  }
};

export default exercises;
