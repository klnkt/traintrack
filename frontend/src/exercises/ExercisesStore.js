class ExercisesStore {
  constructor() {
    this.items = [
      {
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
      },
    ];
  }
//   addItem(item) {
//     const newItem = { ...item };
//     this.items.push(newItem);
//   }
//   updateItem(item) {
//     this.items = this.items.map((it) => {
//       if (it.id === item.id) {
//         return { ...it, ...item };
//       }
//       return it;
//     });
//   }
  getById(id) {
    const found = this.items.filter(item => (item.id === id));
    return found.length ? found[0] : null;
  }
  getAll() {
    return [...this.items];
  }
}

export default new ExercisesStore();
