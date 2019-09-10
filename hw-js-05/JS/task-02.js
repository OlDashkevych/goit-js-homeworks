'use strict';

class User {
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    const message = `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
    console.log(message);
  }
}

const mango = new User('Mango', 2, 20);
mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User('Poly', 3, 17);
poly.getInfo(); // User Poly is 3 years old and has 17 followers
