import fetchCountries from './js/fetchCountries.js';
import { clearOffersList } from './js/openModalOffers';
const debounce = require('lodash.debounce');
const searchingInput = document.querySelector('#main-input');
searchingInput.addEventListener('input', debounce(transiteRequest, 500));

function transiteRequest({ target }) {
  fetchCountries(target.value);
  clearOffersList();
}
