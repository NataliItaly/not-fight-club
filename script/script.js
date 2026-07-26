import locationsPopup from './locationsPopup.js';
import { tab } from './state.js';
import popup from './popup.js';
import chooseCharacter from './chooseCharacter.js';
import resetCharacter from './utils/resetCharacter.js';
import createCharacter from './createCharacter.js';
import characterView from './characterView.js';

popup(tab);

const startBtn = document.getElementById('create-character');
if (startBtn) {
  startBtn.addEventListener('click', function () {
    const popup = document.getElementById('popup');
    popup.classList.add('popup_open');

    const tabs = document.querySelectorAll('.popup__tab');
    tabs[0].classList.add('popup__tab_active');

    const characterInput = document.getElementById('character-input');
    characterInput.value = '';

    resetCharacter();
  });
}

chooseCharacter();
createCharacter();
locationsPopup();
