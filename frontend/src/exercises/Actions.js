export const actions = {
  ADD_EXERCISE: 'ADD_EXERCISE',
  UPDATE_EXERCISE: 'UPDATE_EXERCISE',
  ADD_PROPERTY: 'ADD_PROPERTY',
  CHANGE: 'CHANGE',
  SET_EDITED_EXERCISE: 'SET_EDITED_EXERCISE',
};

export const addExercise = () => ({
  type: actions.ADD_EXERCISE,
});

export const updateExercise = () => ({
  type: actions.UPDATE_EXERCISE,
});

export const setEditedExercise = (exerciseId = null) => ({
  type: actions.SET_EDITED_EXERCISE,
  exerciseId,
});

export const changeEditedExercise = changes => ({
  type: actions.CHANGE,
  changes,
});
