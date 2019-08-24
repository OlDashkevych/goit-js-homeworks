'use strict';

let input;
let total = 0;

while ((input = prompt('Enter the number:')) !== null) {
  total += Number(input);
}

alert(`The total of the numbers is equal ${total}`);
