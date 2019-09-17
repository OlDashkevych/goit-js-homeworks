'use strict';

const input = document.querySelector('#controls > input');

const boxesContainer = document.querySelector('#boxes');

const buttonCreate = document.querySelector(
  '#controls > button[data-action="render"]',
);
const buttonDestroy = document.querySelector(
  '#controls > button[data-action="destroy"]',
);
const box = `<div></div>`;

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
};

const createBoxes = () => {
  const numberBoxes = input.value;

  let boxSizeCounter = 0;

  for (let i = 0; i < numberBoxes; i += 1) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    boxesContainer.insertAdjacentHTML('afterBegin', box);
    const div = document.querySelector('#boxes div');
    div.style.width = 30 + boxSizeCounter + 'px';
    div.style.height = 30 + boxSizeCounter + 'px';
    boxSizeCounter += 10;
    div.style.backgroundColor = `rgb(${red},${green},${blue})`;
  }
};

buttonCreate.addEventListener('click', createBoxes);

buttonDestroy.addEventListener('click', destroyBoxes);
