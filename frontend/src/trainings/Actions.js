export const actions = {
  ADD_TRAINING: 'ADD_TRAINING',
  UPDATE_TRAINING_EXERCISES: 'UPDATE_TRAINING_EXERCISES',
  ADD_TRAINING_EXERCISE: 'ADD_TRAINING_EXERCISE',
  UPDATE_TRAINING: 'UPDATE_TRAINING',
};

export const updateTraningExercises = (id, exercises) => ({
  type: actions.UPDATE_TRAINING_EXERCISES,
  exercises,
  id,
});

export const addTraining = () => ({
  type: actions.ADD_TRAINING,
});

export const addTrainingExercise = (id, exercise) => ({
  type: actions.ADD_TRAINING_EXERCISE,
  id,
  exercise,
});

export const updateTraining = training => ({
  type: actions.UPDATE_TRAINING,
  training,
});
