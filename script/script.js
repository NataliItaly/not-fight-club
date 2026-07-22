import locationsPopup from './locationsPopup.js';

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', function () {
  const popup = document.getElementById('popup');
  console.log(popup);
  popup.classList.add('popup_open');
});

const closePopupBtn = document.getElementById('popup-close-btn');
closePopupBtn.addEventListener('click', function () {
  const popup = document.getElementById('popup');
  popup.classList.remove('create_open');
});

const createCheracterBtn = document.getElementById('create-character');
createCheracterBtn.addEventListener('click', function () {
  const createPopup = document.getElementById('create-popup');
  createPopup.classList.remove('create_open');
});

locationsPopup();

// https://www.swapi.tech/api/
