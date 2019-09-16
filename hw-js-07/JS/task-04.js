'user strict';

let currentValue = 0;

const handleDecrement = () => {
  currentValue -= 1;
  value.textContent = currentValue;
};
const handleIncrement = () => {
  currentValue += 1;
  value.textContent = currentValue;
};

document
  .querySelector('button[data-action="decrement"]')
  .addEventListener('click', handleDecrement);

document
  .querySelector('button[data-action="increment"]')
  .addEventListener('click', handleIncrement);
