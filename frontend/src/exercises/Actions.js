export const actions = {
  ADD_EXERCISE: 'ADD_EXERCISE',
  UPDATE_EXERCISE: 'UPDATE_EXERCISE',
};

export const addExercise = exercise => ({
  type: actions.ADD_EXERCISE,
  exercise,
});

export const updateExercise = exercise => ({
  type: actions.UPDATE_EXERCISE,
  exercise,
});
