import { header } from './header.js';
import locationsPopup from './locationsPopup.js';
import { tab } from './state.js';
import popup from './popup.js';
import chooseCharacter from './chooseCharacter.js';
import createCharacter from './createCharacter.js';
import openHomeScreen from './utils/openHomeScreen.js';
import openSettingsScreen from './openSettingsScreen.js';
import fightScreen from './fightScreen.js';
import openPopup from './utils/openPopup.js';

/* alert(
  'Уважаемый проверяющий, пожалуйста, проверьте мою работу в среду. Заранее большое спасибо',
); */

header();
popup(tab);

const startBtn = document.getElementById('create-character');
if (startBtn) {
  startBtn.addEventListener('click', function () {
    openPopup();
  });
}

chooseCharacter();
createCharacter();
locationsPopup();

//profileLink();

document.body.addEventListener('click', function (e) {
  if (
    e.target.closest('#home-link') ||
    e.target.closest('#return-to-main') ||
    e.target.closest('#profile-btn')
  ) {
    openHomeScreen();
  }

  if (e.target.closest('#edit-profile')) {
    openSettingsScreen();
  }

  if (e.target.closest('#start-game-btn')) {
    console.log('start game');
    const popup = document.getElementById('popup');
    popup.classList.remove('popup_open');

    const startBtn = document.getElementById('create-character');
    startBtn.classList.add('main__btn_hidden');

    fightScreen();
  }
});
