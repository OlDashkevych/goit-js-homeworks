'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16 && login !== null) {
    return true;
  }
  return false;
};

const isLoginUnique = function(allLogins, login) {
  for (const currentLogin of allLogins) {
    if (currentLogin === login) {
      return false;
    }
  }
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) === false) {
    console.log('Login must contain 4 to 16 characters!');
  } else if (isLoginUnique(allLogins, login) === false) {
    console.log('This login is already in use!');
  } else {
    allLogins.push(login);
    console.log('Login successfully added!');
  }
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
