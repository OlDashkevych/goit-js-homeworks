'use strict';

import images from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lighrboxImage = lightbox.querySelector('.lightbox___image');
const closeModalBtn = lightbox.querySelector(
  '.lightbox__button[data-action="close-lightbox"]',
);
const lightboxBackdrop = lightbox.querySelector('.lightbox__content');
function createGalleryItem({ preview, original, description }) {
  const galleryItem = `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
    >
    <img
      class="gallery__image"
      src="./img/no-preview.jpg"
      data-lazy="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    
    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
  </li>`;
  return galleryItem;
}

function createGallery(imagesList) {
  return imagesList.map(image => createGalleryItem(image)).join('');
}
const markup = createGallery(images);

gallery.insertAdjacentHTML('beforeend', markup);

function handleOpenModal(e) {
  e.preventDefault();
  const image = e.target;
  if (image === e.currentTarget) {
    return;
  }
  lightbox.classList.add('is-open');
  const sourceWay = image.getAttribute('data-source');
  const deccription = image.getAttribute('alt');
  lighrboxImage.setAttribute('src', sourceWay);
  lighrboxImage.setAttribute('alt', deccription);
  window.addEventListener('keydown', handleKeyPress);
  window.addEventListener('keydown', nextModal);
}
function handleCloseModal() {
  lightbox.classList.remove('is-open');
  window.removeEventListener('keydown', handleKeyPress);
  lighrboxImage.setAttribute('src', ' ');
  lighrboxImage.setAttribute('alt', ' ');
}
function nextModal(e) {
  if (e.code === 'ArrowLeft') {
  } else if (e.code === 'ArrowRight') {
    images.Array.prototype.indexOf(() => {});
    // images.map(image => {
    //   if(image.original = e.target.href){
    //     const nextImageLink =
    //   }
    // });
    lighrboxImage.setAttribute('src', nextImageLink);
  }
}

function handleClickOverlay({ target, currentTarget }) {
  if (target !== currentTarget) {
    return;
  }
  handleCloseModal();
}
function handleKeyPress({ code }) {
  if (code !== 'Escape') {
    return;
  }
  handleCloseModal();
}

gallery.addEventListener('click', handleOpenModal);
closeModalBtn.addEventListener('click', handleCloseModal);
lightboxBackdrop.addEventListener('click', handleClickOverlay);

const lazyLoad = target => {
  const options = {
    //rootMargin: '50px 0px',
    treshold: 0.01,
  };
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.lazy;
        img.setAttribute('src', src);
        observer.disconnect();
      }
    });
  }, options);
  io.observe(target);
};
const imagesInGallery = document.querySelectorAll('.gallery img');
imagesInGallery.forEach(image => {
  lazyLoad(image);
});
