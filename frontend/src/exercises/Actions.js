export const actions = {
  ADD_EXERCISE: 'ADD_EXERCISE',
  SET_EDITED_EXERCISE: 'SET_EDITED_EXERCISE',
  UPDATE_EDITED_EXERCISE_PROPERTY: 'UPDATE_EDITED_EXERCISE_PROPERTY',
};

export const addExercise = exercise => ({
  type: actions.ADD_EXERCISE,
  exercise,
});

export const setEditedExerciseType = exerciseType => ({
  type: actions.SET_EDITED_EXERCISE,
  exerciseType,
});

export const updatePropertyValue = (id, value) => ({
  type: actions.UPDATE_EDITED_EXERCISE_PROPERTY,
  propertyId: id,
  propertyValue: value,
});
