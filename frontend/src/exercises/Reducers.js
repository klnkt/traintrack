import { actions } from './Actions';

const updateById = (collection, item) =>
  collection.map((it) => {
    if (it.id === item.id) {
      return { ...it, ...item };
    }
    return it;
  });

const exercises = (state = { list: [], edited: {} }, action) => {
  switch (action.type) {
    case actions.ADD_EXERCISE: {
      const newId = state.list.length > 0 ? state.list[state.list.length - 1].id + 1 : 1;
      return {
        ...state,
        list: [...state.list, { ...state.edited, id: newId }],
      };
    }
    case actions.SET_EDITED_EXERCISE: {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date = date.toISOString().split('T')[0];
      return {
        ...state,
        edited: {
          ...state.edited,
          typeId: action.exerciseType.id,
          title: action.exerciseType.title,
          date,
          properties: action.exerciseType.properties.map(item =>
            ({ ...item, value: 0 }),
          ),
        },
      };
    }
    case actions.UPDATE_EDITED_EXERCISE_PROPERTY:
      return {
        ...state,
        edited: {
          ...state.edited,
          properties: updateById(state.edited.properties, {
            id: action.propertyId,
            value: action.propertyValue,
          }),
        },
      };
    default:
      return state;
  }
};

export default exercises;

