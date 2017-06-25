import ExercisesStore from '../exercises/ExercisesStore';

class TrainingsStore {
  constructor() {
    this.items = [
      {
        id: 1,
        title: 'first training',
        exerciseIds: [1, 2],
      },
      {
        id: 2,
        title: 'second training',
        exerciseIds: [3, 4],
      },
    ];
  }
  add(item) {
    const newItem = { ...item, id: this.count + 1 };
    this.items.push(newItem);
  }
  update(item) {
    this.items = this.items.map((it) => {
      if (it.id === item.id) {
        return { ...it, ...item };
      }
      return it;
    });
  }
  getById(id) {
    let found = this.items.filter(item => (item.id === id));
    if (!found.length) {
      return null;
    }
    found = found[0];
    found.exercises = found.exerciseIds.map(
      exerciseId => ExercisesStore.getById(exerciseId),
    );
    return found;
  }
  getAll() {
    return [...this.items];
  }
}

export default new TrainingsStore();
