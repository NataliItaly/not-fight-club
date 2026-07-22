import locationsPopup from './locationsPopup.js';
import { tab } from './state.js';
import popup from './popup.js';
import chooseCharacter from './choseCharacter.js';

popup(tab);

const startBtn = document.getElementById('start-btn');
if (startBtn) {
  startBtn.addEventListener('click', function () {
    const popup = document.getElementById('popup');
    console.log(popup);
    popup.classList.add('popup_open');

    const tabs = document.querySelectorAll('.popup__tab');
    tabs[0].classList.add('popup__tab_active');
  });
}

chooseCharacter();

const createCharacterBtn = document.getElementById('create-character');
createCharacterBtn.addEventListener('click', function () {
  const createPopup = document.getElementById('create-popup');
  createPopup.classList.remove('create_open');
});

locationsPopup();

// https://www.swapi.tech/api/
