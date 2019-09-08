'use strict';

let input;
let total = 0;

while (input !== null) {
  input = prompt('Enter the number:');
  total += Number(input);
}
const message = `The total of the numbers is equal ${total}`;
alert(message);
