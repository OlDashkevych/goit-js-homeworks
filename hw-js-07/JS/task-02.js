'user strict';
const ul = document.querySelector('#ingredients');
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const createItems = array => {
  const items = array.map(e => {
    const li = document.createElement('li');
    li.textContent = e;
    return li;
  });
  ul.append(...items);
};
createItems(ingredients);

// const createItems = array => {
//   array.map(ingredient => {
//     const ingredientsList = document.querySelector('#ingredients');
//     const item = document.createElement('li');
//     item.textContent = ingredient;
//     ingredientsList.append(item);
//   });
// };

//createItems(ingredients);
