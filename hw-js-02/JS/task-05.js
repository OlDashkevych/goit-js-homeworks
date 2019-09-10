'use strict';

const checkForSpam = s =>
  s.toLowerCase().includes('spam') || s.toLowerCase().includes('sale');

// function checkSpam(...spamWords) {
//   return function checkInclude(s) {
//     const arg = [...spamWords];
//     for (let i = 0; i < arg.length; i += 1) {
//       if (s.toLowerCase().includes(arg[i])) return true;
//     }
//     return false;
//   };
// }

// const checkForSpam = checkSpam('spam', 'sale');

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
