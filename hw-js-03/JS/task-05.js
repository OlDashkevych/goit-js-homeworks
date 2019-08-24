'use strict';

const getAllPropValues = (arr, prop) => {
  const arrProperties = [];
  for (const arrElement of arr) {
    for (const key in arrElement) {
      if (key === prop) {
        arrProperties.push(arrElement[key]);
      }
    }
  }
  return arrProperties;
};

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
