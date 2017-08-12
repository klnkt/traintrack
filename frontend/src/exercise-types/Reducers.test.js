import reducer from './Reducers';
import { actions } from './Actions';

const emptyExercise = {
  id: null,
  properties: [],
  title: '',
};

it('gets initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    list: [],
    edited: emptyExercise,
  });
});

it('should handle ADD_EXERCISE_TYPE', () => {
  const newExercise = {
    id: null,
    title: 'foo',
    properties: [],
  };
  expect(reducer({
    list: [],
    edited: newExercise,
  }, {
    type: actions.ADD_EXERCISE_TYPE,
  })).toEqual({
    list: [{ ...newExercise, id: 1 }],
    edited: newExercise,
  });
});

it('should handle UPDATE_EXERCISE_TYPE', () => {
  const newExercise = {
    id: 5,
    title: 'foo',
    properties: ['bar', 'baz'],
  };
  expect(reducer({
    list: [{ id: 5 }, { id: 6 }, { id: 8 }],
    edited: newExercise,
  }, {
    type: actions.UPDATE_EXERCISE_TYPE,
  })).toEqual({
    list: [newExercise, { id: 6 }, { id: 8 }],
    edited: newExercise,
  });
});

it('should handle CHANGE_EDITED_EXERCISE_TYPE', () => {
  const newExercise = {
    id: null,
    title: 'foo',
    description: 'baaar',
    properties: ['bar', 'baz'],
  };
  expect(reducer({
    list: [],
    edited: newExercise,
  }, {
    type: actions.CHANGE_EDITED_EXERCISE_TYPE,
    changes: {
      title: 'bar',
      properties: ['fag, bag'],
    },
  })).toEqual({
    list: [],
    edited: {
      id: null,
      title: 'bar',
      description: 'baaar',
      properties: ['fag, bag'],
    },
  });
});

describe('should handle SET_EDITED_EXERCISE_TYPE', () => {
  it('should handle setting empty exercise', () => {
    expect(reducer({
      list: [],
      edited: {},
    }, {
      type: actions.SET_EDITED_EXERCISE_TYPE,
      exerciseId: -1,
    })).toEqual({
      list: [],
      edited: { ...emptyExercise, isNew: true },
    });
  });
  it('should handle setting existing exercise', () => {
    expect(reducer({
      list: [{ id: 1, title: 'foo' }, { id: 2 }],
      edited: {},
    }, {
      type: actions.SET_EDITED_EXERCISE_TYPE,
      exerciseId: 1,
    })).toEqual({
      list: [{ id: 1, title: 'foo', isNew: false }, { id: 2 }],
      edited: { id: 1, title: 'foo', isNew: false },
    });
  });
});
