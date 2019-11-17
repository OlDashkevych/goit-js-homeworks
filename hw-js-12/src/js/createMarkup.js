import countryInfoTemplates from '../templates/country-info.hbs';
const infoContainer = document.querySelector('.info-container');
export default function createMarkup([country]) {
  const markup = countryInfoTemplates(country);
  clearInfoContainer();
  infoContainer.insertAdjacentHTML('beforeend', markup);
}
function clearInfoContainer() {
  infoContainer.innerHTML = '';
}
