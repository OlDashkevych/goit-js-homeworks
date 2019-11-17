import fetchCountries from './fetchCountries.js';
import { clearOffersList } from './openModalOffers';
const proposalList = document.querySelector('.offers-modal-list');
proposalList.addEventListener('click', handleChooseProposalByClicking);
document.addEventListener('keydown', handleChooseProposalByClickingArrow);

function handleChooseProposalByClicking({ target }) {
  fetchCountries(target.textContent);
  clearOffersList();
}
let ind = -1;
function transiteNameRequest(countryName) {
  fetchCountries(countryName);
}
function handleChooseProposalByClickingArrow(e) {
  const lengthList = proposalList.childElementCount;
  proposalList.childNodes.forEach(li => li.classList.remove('selected'));
  if (e.code === 'ArrowDown' && lengthList > 0) {
    ind++;
    if (ind >= lengthList) {
      ind = 0;
      proposalList.childNodes[ind].classList.add('selected');
      transiteNameRequest(proposalList.childNodes[ind].textContent);
    }
    proposalList.childNodes[ind].classList.add('selected');
    transiteNameRequest(proposalList.childNodes[ind].textContent);
  } else if (e.code === 'ArrowUp' && proposalList.childElementCount > 0) {
    ind--;
    if (ind < 0) {
      ind = lengthList - 1;
      proposalList.childNodes[ind].classList.add('selected');
      transiteNameRequest(proposalList.childNodes[ind].textContent);
    }
    proposalList.childNodes[ind].classList.add('selected');
    transiteNameRequest(proposalList.childNodes[ind].textContent);
  }
}
