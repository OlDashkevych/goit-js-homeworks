'use strict';

const country = prompt('Вкажіть свою країну!');
const defInfo = 'Доставка у вашій країні недоступна!';
let message;
let price;

if (country !== null) {
  switch (country.toLowerCase()) {
    case 'китай':
      price = 100;
      break;

    case 'чилі':
      price = 250;
      break;

    case 'австралія':
      price = 170;
      break;

    case 'індія':
      price = 80;
      break;

    case 'ямайка':
      price = 120;
      break;

    default:
      message = defInfo;
  }
} else {
  message = 'Відмінено користувачем!';
}

if (message === undefined) {
  message = `Доставка в ${country[0].toUpperCase()}${country
    .slice(1)
    .toLowerCase()} буде коштувати ${price} кредитів`;
}
alert(message);
