export const actions = {
  ADD_TRAINING: 'ADD_TRAINING',
  UPDATE_TRAINING_EXERCISES: 'UPDATE_TRAINING_EXERCISES',
};

export const updateTraningExercises = (id, exerciseIds) => ({
  type: actions.UPDATE_TRAINING_EXERCISES,
  exerciseIds,
  id,
});

export const addTraining = () => ({
  type: actions.ADD_TRAINING,
});
