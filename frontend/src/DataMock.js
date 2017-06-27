export default {
  exercises: [{
    id: 1,
    title: 'foo',
  },
  {
    id: 2,
    title: 'bar',
  },
  {
    id: 3,
    title: 'baz',
  },
  {
    id: 4,
    title: 'qqq',
  }],
  trainings: [
    {
      id: 1,
      title: 'first training',
      exercises: [{
        id: 1,
        sets: [10, 10],
      }, {
        id: 2,
        sets: [10, 10],
      }],
    },
    {
      id: 2,
      title: 'second training',
      exercises: [{
        id: 3,
        sets: [10, 10],
      }, {
        id: 4,
        sets: [10, 10],
      }],
    },
  ],
};
