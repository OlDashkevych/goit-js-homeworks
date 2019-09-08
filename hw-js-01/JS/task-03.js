'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const enterPassword = prompt('Enter your password!');

if (enterPassword === null) {
  message = 'Canceled by user!';
}
if (enterPassword === ADMIN_PASSWORD) {
  message = 'Welcome!';
} else {
  message = 'Access denied, invalid password!';
}

alert(message);
