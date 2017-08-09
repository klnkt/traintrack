export const actions = {
  ADD_EXERCISE: 'ADD_EXERCISE',
  SET_EDITED_EXERCISE_TYPE: 'SET_EDITED_EXERCISE_TYPE',
};

export const addExercise = exercise => ({
  type: actions.ADD_EXERCISE,
  exercise,
});

export const setEditedExerciseType = exerciseType => ({
  type: actions.SET_EDITED_EXERCISE_TYPE,
  exerciseType,
});
