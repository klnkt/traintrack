import reducer from './Reducers';
import { actions } from './Actions';

it('gets initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    list: [],
    edited: {},
  });
});

describe('ADD_EXERCISE', () => {
  it('should handle ADD_EXERCISE when no exercises exist', () => {
    const newExercise = {
      title: 'foo',
    };
    expect(reducer({
      list: [],
      edited: newExercise,
    }, {
      type: actions.ADD_EXERCISE,
    })).toEqual({
      list: [{ ...newExercise, id: 1 }],
      edited: newExercise,
    });
  });

  it('should handle ADD_EXERCISE when exercises exist', () => {
    const newExercise = {
      title: 'foo',
    };
    expect(reducer({
      list: [{ id: 6 }, { id: 8 }],
      edited: newExercise,
    }, {
      type: actions.ADD_EXERCISE,
    })).toEqual({
      list: [{ id: 6 }, { id: 8 }, { ...newExercise, id: 9 }],
      edited: newExercise,
    });
  });
});

describe('SET_EDITED_EXERCISE', () => {
  it('should handle SET_EDITED_EXERCISE when it\'s first of type', () => {
    const exerciseType = {
      id: 5,
      title: 'foo',
      properties: [{ title: '1' }, { title: '2' }],
    };
    const date = new Date();
    date.setHours(0, 0, 0, 0);

    expect(reducer({
      list: [],
      edited: {},
    }, {
      type: actions.SET_EDITED_EXERCISE,
      exerciseType,
    })).toEqual({
      list: [],
      edited: {
        typeId: exerciseType.id,
        title: exerciseType.title,
        date,
        properties: [{
          title: '1',
          value: 0,
        }, {
          title: '2',
          value: 0,
        }],
      },
    });
  });

  it('should handle SET_EDITED_EXERCISE when exercises with given type exist', () => {
    const exerciseType = {
      id: 5,
      title: 'foo',
      properties: [{ title: '1' }, { title: '2' }],
    };
    const list = [{
      typeId: exerciseType.id,
      properties: [{
        title: '1',
        value: 10,
      }, {
        title: '2',
        value: 15,
      }],
    }];
    const date = new Date();
    date.setHours(0, 0, 0, 0);

    expect(reducer({
      list,
      edited: {},
    }, {
      type: actions.SET_EDITED_EXERCISE,
      exerciseType,
    })).toEqual({
      list,
      edited: {
        typeId: exerciseType.id,
        title: exerciseType.title,
        date,
        properties: [{
          title: '1',
          value: 10,
        }, {
          title: '2',
          value: 15,
        }],
      },
    });
  });
});

it('should handle UPDATE_EDITED_EXERCISE_PROPERTY', () => {
  const newExercise = {
    id: null,
    title: 'foo',
    properties: [{
      id: 1,
      title: '1',
      value: 0,
    }, {
      id: 2,
      title: '2',
      value: 0,
    }],
  };
  expect(reducer({
    list: [],
    edited: newExercise,
  }, {
    type: actions.UPDATE_EDITED_EXERCISE_PROPERTY,
    propertyValue: 10,
    propertyId: 2,
  })).toEqual({
    list: [],
    edited: {
      ...newExercise,
      properties: [{
        id: 1,
        title: '1',
        value: 0,
      }, {
        id: 2,
        title: '2',
        value: 10,
      }],
    },
  });
});
