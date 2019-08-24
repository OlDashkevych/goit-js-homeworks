'use strict';

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Enter the number:');
  if (input !== null && true !== Number.isNaN(Number(input))) {
    numbers.push(input);
  } else if (input !== null) {
    alert('You have not entered a number, try again!');
  }
}
for (const number of numbers) {
  total += Number(number);
}
console.log('The sum is equal ' + total);
