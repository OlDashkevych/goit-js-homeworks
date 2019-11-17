'user strict';

// let currentValue = 0;

// const value = document.querySelector('#value');

// const handleDecrement = () => {
//   currentValue -= 1;
//   value.textContent = currentValue;
// };

// const handleIncrement = () => {
//   currentValue += 1;
//   value.textContent = currentValue;
// };

// document
//   .querySelector('button[data-action="decrement"]')
//   .addEventListener('click', handleDecrement);

// document
//   .querySelector('button[data-action="increment"]')
//   .addEventListener('click', handleIncrement);

const counter = document.querySelector('#counter');
const value = document.querySelector('#value');

const repaint = (elem, num) => {
  elem.textContent = num;
};

const actions = {
  state: {
    value: 0,
  },
  decrement() {
    this.state.value -= 1;
  },
  increment() {
    this.state.value += 1;
  },
};

const changeValue = ({ target }) => {
  console.log(target.dataset.action);
  actions[target.dataset.action]();
  repaint(value, actions.state.value);
};

counter.addEventListener('click', changeValue);
