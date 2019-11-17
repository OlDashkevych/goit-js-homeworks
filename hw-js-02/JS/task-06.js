'use strict';

const YOU_NUMBER = 'Enter the number:';
const NOT_NUMBER = 'You have not entered a number, try again!';
let userInput;
let total = 0;
const userNumber = Number.parseFloat(userInput);
const numbers = [];

while (userInput !== null) {
  userInput = prompt(YOU_NUMBER, 0);
  let userNumber = +userInput;
  if (isNaN(userNumber) && userInput !== null) {
    alert(NOT_NUMBER);
    continue;
  } else {
    numbers.push(userNumber);
  }
}
for (const number of numbers) {
  total += number;
}
const message = `The sum is equal ${total}`;
console.log(message);

// const YOU_NUMBER = 'Enter the number:';
// const NOT_NUMBER = 'You have not entered a number, try again!';
// let userInput;
// let total = 0;
// const userNumber = Number.parseFloat(userInput);

// while (userInput !== null) {
//   userInput = prompt(YOU_NUMBER, 0);
//   let userNumber = +userInput;
//   if (isNaN(userNumber) && userInput !== null) {
//     alert(NOT_NUMBER);
//     continue;
//   } else {
//     total += userNumber;
//   }
// }
// const message = `The sum is equal ${total}`;
// console.log(message);
