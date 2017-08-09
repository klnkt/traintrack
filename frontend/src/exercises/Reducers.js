import { actions } from './Actions';

const exercises = (state = { list: [], edited: {} }, action) => {
  switch (action.type) {
    case actions.ADD_EXERCISE:
      return {
        ...state,
        list: [...state.list, action.exercise],
      };
    case actions.SET_EDITED_EXERCISE_TYPE:
      return {
        ...state,
        edited: {
          ...state.edited, type: action.exerciseType,
        },
      };
    default:
      return state;
  }
};

export default exercises;

