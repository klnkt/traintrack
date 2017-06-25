export const actions = {
  ADD_EXERCISE: 'ADD_EXERCISE',
};

export const addExercise = exercise => ({
  type: actions.ADD_EXERCISE,
  exercise,
});
