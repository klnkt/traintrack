class TrainingsStore {
  constructor() {
    this.items = [
      {
        id: 1,
        title: 'first training',
      },
      {
        id: 2,
        title: 'second training',
      },
    ];
    this.count = 0;
  }
  addItem(item) {
    const newItem = { ...item, id: this.count + 1 };
    this.items.push(newItem);
  }
  updateItem(item) {
    this.items = this.items.map((it) => {
      if (it.id === item.id) {
        return { ...it, ...item };
      }
      return it;
    });
  }
  getById(id) {
    const training = this.items.filter(item => (item.id === id));
    return training.length ? training[0] : null;
  }
  getAll() {
    return [...this.items];
  }
}

export default new TrainingsStore();
