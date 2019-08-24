'use strict';
const findLongestWord = function(string) {
  string = string.split(' ');
  let theLongestWord = string[0];
  for (let i = 1; i < string.length; i += 1) {
    if (theLongestWord.length < string[i].length) {
      theLongestWord = string[i];
    }
  }
  return theLongestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
