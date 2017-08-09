export const actions = {
  ADD_EXERCISE_TYPE: 'ADD_EXERCISE_TYPE',
  UPDATE_EXERCISE_TYPE: 'UPDATE_EXERCISE_TYPE',
  ADD_PROPERTY: 'ADD_PROPERTY',
  CHANGE_EDITED_EXERCISE_TYPE: 'CHANGE_EDITED_EXERCISE_TYPE',
  SET_EDITED_EXERCISE_TYPE: 'SET_EDITED_EXERCISE_TYPE',
};

export const addExerciseType = () => ({
  type: actions.ADD_EXERCISE_TYPE,
});

export const updateExerciseType = () => ({
  type: actions.UPDATE_EXERCISE_TYPE,
});

export const setEditedExerciseType = (exerciseId = null) => ({
  type: actions.SET_EDITED_EXERCISE_TYPE,
  exerciseId,
});

export const changeEditedExerciseType = changes => ({
  type: actions.CHANGE_EDITED_EXERCISE_TYPE,
  changes,
});

export const addProperty = propertyName => ({
  type: actions.ADD_PROPERTY,
  propertyName,
});
