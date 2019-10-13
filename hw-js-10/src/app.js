import posts from './assets/menu.json';
import dishItemTemplate from './templates/dish-item.hbs';

const refs = {
  listDishItem: document.querySelector('.menu'),
};

function buildDishItem(posts) {
  const markup = posts.map(post => dishItemTemplate(post)).join('');
  refs.listDishItem.insertAdjacentHTML('beforeend', markup);
}
buildDishItem(posts);
