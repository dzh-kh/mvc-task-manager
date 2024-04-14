class Store {
  constructor() {
    this.store = localStorage;
  }
  getData(key) {
    const data = this.store.getItem(key);
    return JSON.parse(data);
  }
  deleteData(key) {
    this.store.getItem(key);
  }
  setData(key, value) {
    this.store.setItem(key, JSON.stringify(value));
  }
}

export default new Store();
