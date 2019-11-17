import offersListTemplates from '../templates/offers-list.hbs';
const offersList = document.querySelector('.offers-modal-list');
function openModalOffers(data) {
  const offersMarkup = data
    .map(country => offersListTemplates(country))
    .join('');
  clearOffersList();
  offersList.insertAdjacentHTML('beforeend', offersMarkup);
}
function clearOffersList() {
  offersList.innerHTML = '';
}
export { openModalOffers, clearOffersList };
