'user strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const createItems = array => {
  array.map(ingredient => {
    const ingredientsList = document.querySelector('#ingredients');
    const item = document.createElement('li');
    item.textContent = ingredient;
    ingredientsList.append(item);
  });
};

createItems(ingredients);
