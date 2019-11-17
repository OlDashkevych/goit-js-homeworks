"use strict";

import galleryItems from "./gallery-items.js";

function createHtmlGaleryItem(galleryItemObject) {
  const { preview, original, description } = galleryItemObject;
  return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="./img/no-preview.jpg" data-lazy="${preview}" data-source="${original}" width="340" alt="${description}" />
      <span class="gallery__icon"><i class="material-icons">zoom_out_map</i></span>
    </a>
  </li>
`;
}

function createHtmlGalery(arrayGaleryObject) {
  return arrayGaleryObject
    .map(galleryItem => createHtmlGaleryItem(galleryItem))
    .join("");
}

function addToElemenAfterbegin(stringHTML, selector) {
  const queryElement = selector;
  const string = stringHTML;
  queryElement.insertAdjacentHTML("afterbegin", string);
}

// ========== Galery LiteBox ==========
const refs = {
  gallery: document.querySelector(".gallery"),
  imgLghtbox: document.querySelector(".lightbox__image"),
  liteboxOver: document.querySelector(".lightbox__content"),
  divLightbox: document.querySelector("div.lightbox"),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
  galleryWrapper: document.querySelector(".gallery-wrapper")
};

addToElemenAfterbegin(createHtmlGalery(galleryItems), refs.gallery);

// Открытие
function openModal() {
  refs.divLightbox.classList.add("is-open");
}
// Закрытие
function closeModal() {
  refs.divLightbox.classList.remove("is-open");
  refs.imgLghtbox.setAttribute("alt", " ");
  refs.imgLghtbox.setAttribute("src", " ");
}
// Колбек для keydown
function handlKeyPress(event) {
  if (state.isActiveLightbox) {
    state.isActiveLightbox = false;
    closeModal();
  }
}

function closeModalOverlay(e) {
  if (e.target !== e.currentTarget) return;
  closeModal();
}

// обработка процесса открытие окна lightbox
function lightboxOpenModal(elementForLightbox) {
  const source = elementForLightbox.dataset.source;
  const alt = elementForLightbox.getAttribute("alt");
  refs.imgLghtbox.setAttribute("alt", alt);
  refs.imgLghtbox.setAttribute("src", source);
  openModal();
}

// обработчик клика на превю изображение
const handleClickImg = event => {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "IMG") return;
  lightboxOpenModal(target);
};

// ========== Lazy Load – отложенная загрузка изображений ==========
const lazyLoad = target => {
  const options = {
    threshold: 0.5
  };
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-lazy");
        img.setAttribute("src", src);
        img.classList.add("fade");
        observer.disconnect();
      }
    });
  }, options);
  io.observe(target);
};

const images = document.querySelectorAll(".gallery__image");
images.forEach(img => {
  lazyLoad(img);
});

const state = {
  isActiveLightbox: false
};

function changeGalleryState(event) {
  const { target } = event;
  event.preventDefault();
  if (target.classList.contains("gallery__image")) {
    state.isActiveLightbox = true;
    lightboxOpenModal(target);
  } else if (target.classList.contains("lightbox__image")) {
    return console.log(this);
  } else {
    state.isActiveLightbox = true;
    closeModal();
  }
}

refs.galleryWrapper.addEventListener("click", changeGalleryState);
window.addEventListener("keydown", handlKeyPress);
