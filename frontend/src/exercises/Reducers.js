import { actions } from './Actions';

const updateById = (collection, item) =>
  collection.map((it) => {
    if (it.id === item.id) {
      return { ...it, ...item };
    }
    return it;
  });

const exercises = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_EXERCISE:
      return [...state, action.exercise ||
        { id: state.length + 1, title: 'new exercise' }];
    case actions.UPDATE_EXERCISE:
      return updateById(state, action.exercise);
    default:
      return state;
  }
};

export default exercises;
