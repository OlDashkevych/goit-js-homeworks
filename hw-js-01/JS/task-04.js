'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const numberOfDroids = prompt('Скільки дроїдів бажаєте придбати?');

if(numberOfDroids === null) {
  console.log('Відмінено користувачем!');
}
else{
  const totalPrice = numberOfDroids*pricePerDroid;
  if(totalPrice > credits){
    console.log('Недостатньо коштів!');
  }
  else{
    console.log(`Ви придбали ${numberOfDroids} дроїдів, на рахунку залишилось ${credits-totalPrice} кредитів!`);
  }
}