import { actions } from './Actions';

const updateById = (collection, item) =>
  collection.map((it) => {
    if (it.id === item.id) {
      return { ...it, ...item };
    }
    return it;
  });

const emptyExerciseType = {
  id: null,
  properties: [],
  title: '',
};

const exerciseTypes = (state = { list: [], edited: emptyExerciseType }, action) => {
  switch (action.type) {
    case actions.ADD_EXERCISE_TYPE:
      return {
        ...state,
        list: [...state.list, {
          ...state.edited,
          id: state.list.length + 1,
        }],
      };
    case actions.UPDATE_EXERCISE_TYPE:
      return {
        ...state,
        list: updateById(state.list, state.edited),
      };
    case actions.CHANGE_EDITED_EXERCISE_TYPE:
      return {
        ...state,
        edited: { ...state.edited, ...action.changes },
      };
    case actions.SET_EDITED_EXERCISE_TYPE: {
      const found = state.list
        .filter(item =>
        item.id === action.exerciseId,
      );
      const exercise = found.length ?
        found[0] : emptyExerciseType;
      exercise.isNew = (found.length === 0);
      return {
        ...state,
        edited: { ...exercise },
      };
    }
    case actions.ADD_PROPERTY: {
      const properties = state.edited.properties;
      const newId = properties.length === 0 ? 1 :
        properties[properties.length - 1].id + 1;
      return {
        ...state,
        edited: {
          ...state.edited,
          properties: [...properties, { id: newId, title: action.propertyName }],
        },
      };
    }
    default:
      return state;
  }
};

export default exerciseTypes;

