'user strict';

import { images } from './images.js';

const gallery = document.querySelector('#gallery');
const markup = createGallery(images);
gallery.insertAdjacentHTML('beforeend', markup);

function createGallery(imagesList) {
  return imagesList.map(image => createGalleryItem(image)).join('');
}

function createGalleryItem({ url, alt }) {
  const item = `
  <li>
  <img class="gallery__item"
    src="${url}" 
    alt="${alt}">
  </li>`;
  return item;
}
