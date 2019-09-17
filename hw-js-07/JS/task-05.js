'user strict';

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const defaultName = output.textContent;

function handleInputText({ currentTarget }) {
  if (currentTarget.value === '') {
    return (output.textContent = defaultName);
  }
  output.textContent = currentTarget.value;
}

input.addEventListener('change', handleInputText);
