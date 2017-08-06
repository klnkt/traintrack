import { actions } from './Actions';

const updateById = (collection, item) =>
  collection.map((it) => {
    if (it.id === item.id) {
      return { ...it, ...item };
    }
    return it;
  });

const emptyExercise = {
  id: null,
  properties: [],
  title: '',
};

const exercises = (state = { list: [], edited: emptyExercise }, action) => {
  switch (action.type) {
    case actions.ADD_EXERCISE:
      return {
        ...state,
        list: [...state.list, {
          ...state.edited,
          id: state.list.length + 1,
        }],
      };
    case actions.UPDATE_EXERCISE:
      return {
        ...state,
        list: updateById(state.list, state.edited),
      };
    case actions.CHANGE:
      return {
        ...state,
        edited: { ...state.edited, ...action.changes },
      };
    case actions.SET_EDITED_EXERCISE: {
      const found = state.list
        .filter(item =>
        item.id === action.exerciseId,
      );
      const exercise = found.length ?
        found[0] : emptyExercise;
      exercise.isNew = (found.length === 0);
      return {
        ...state,
        edited: { ...exercise },
      };
    }
    default:
      return state;
  }
};

export default exercises;
