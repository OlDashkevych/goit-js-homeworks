import PNotify from 'pnotify/dist/es/PNotify.js';
import createMarkup from './createMarkup';
import { openModalOffers } from './openModalOffers';

export default function fetchCountries(searchQuery) {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  fetch(url, options)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.length === 1) {
        createMarkup(data);
      } else if (data.length > 4) {
        PNotify.error({
          text: 'Too many matches found. Please enter a more specific queary!',
          stack: {
            dir1: 'up',
            dir2: 'left',
            firstpos1: 90,
            firstpos2: 90,
          },
        });
      } else {
        openModalOffers(data);
      }
    })
    .catch(error => console.log(error));
}
