'use strict';

class Storage {
  constructor(storage) {
    this.storage = storage;
  }
  getItems() {
    return this.storage;
  }
  addItem(item) {
    this.storage.push(item);
  }
  removeItem(item) {
    for (let i = 0; i < this.storage.length; i += 1) {
      if (this.storage[i] === item) {
        this.storage.splice(i, 1);
      }
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
