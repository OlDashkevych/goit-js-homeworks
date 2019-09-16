'user strict';

const validLengthString = Number(
  document.querySelector('#validation-input').getAttribute('data-length'),
);

const input = document.querySelector('#validation-input');

const validationInput = ({ currentTarget }) => {
  const lengthString = currentTarget.value.length;

  input.classList.add('invalid');
  input.classList.remove('valid');

  if (lengthString === validLengthString) {
    input.classList.replace('invalid', 'valid');
  }
};

input.addEventListener('input', validationInput);
