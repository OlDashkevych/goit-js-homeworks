'use strict';

const inputRange = document.querySelector('#font-size-slider');
const spanContent = document.querySelector('#text');
const coefficient = 0.5;

const changeFontSize = ({ currentTarget }) => {
  const rangeValue = Number(currentTarget.value);
  spanContent.style.fontSize = rangeValue * coefficient + 'px';
};

inputRange.addEventListener('input', changeFontSize);
