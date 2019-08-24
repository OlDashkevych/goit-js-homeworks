'use strict';

const country = prompt('Вкжіть свою країну!').toLowerCase();
let price;
let message;

switch (country) {
  case 'китай':
    price = 100;
    message =
      'Доставка в ' + country + ' буде коштувати ' + price + ' кредитів';
    break;

  case 'чилі':
    price = 250;
    message =
      'Доставка в ' + country + ' буде коштувати ' + price + ' кредитів';
    break;

  case 'австралія':
    price = 170;
    message =
      'Доставка в ' + country + ' буде коштувати ' + price + ' кредитів';
    break;

  case 'індія':
    price = 80;
    message =
      'Доставка в ' + country + ' буде коштувати ' + price + ' кредитів';
    break;

  case 'ямайка':
    price = 120;
    message =
      'Доставка в ' + country + ' буде коштувати ' + price + ' кредитів';
    break;

  default:
    message = 'У вашій країні доставка недоступна!';
}
alert(message);
