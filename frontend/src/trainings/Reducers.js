import { actions } from './Actions';

const updateById = (collection, item, transform) =>
  collection.map((it) => {
    if (it.id === item.id) {
      if (transform instanceof Function) {
        return transform(it, item);
      }
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
    case actions.UPDATE_TRAINING:
      return updateById(state, action.training);
    case actions.ADD_TRAINING_EXERCISE:
      return updateById(state, {
        id: action.id,
        exercise: action.exercise,
      },
        (item, data) => ({
          ...item, exercises: [...item.exercises, { id: data.exercise.id, sets: [] }],
        }),
      );
    case actions.ADD_TRAINING:
      return [...state, { id: state.length + 1, title: 'new training', exercises: [] }];
    default:
      return state;
  }
};

export default trainings;
