import { actions } from './Actions';

const updateById = (collection, item) =>
  collection.map((it) => {
    if (it.id === item.id) {
      return { ...it, ...item };
    }
    return it;
  });

const trainings = (state = [], action) => {
  switch (action.type) {
    case actions.UPDATE_TRAINING_EXERCISES:
      return updateById(state, {
        id: action.id,
        exerciseIds: action.exerciseIds,
      });
    case actions.ADD_TRAINING:
      return [...state, { id: state.length + 1, title: 'new training', exerciseIds: [] }];
    default:
      return state;
  }
};

export default trainings;
