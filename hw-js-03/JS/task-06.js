'use strict';

const calculateTotalPrice = (arr, productName) => {
  for (const arrElement of arr) {
    let total = 0;
    if (arrElement.name === productName) {
      return (total = arrElement.price * arrElement.quantity);
    }
  }
};

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
