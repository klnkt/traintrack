export const addExercise = (trainingId, exerciseId) => {
  return {
    type: 'ADD_EXERCISE_TO_TRAINING',
    exerciseId,
    trainingId,
  };
};

export const removeExercise = (trainingId, exerciseId) => {
  return {
    type: 'REMOVE_EXERCISE_FROM_TRAINING',
    exerciseId,
    trainingId,
  };
};

