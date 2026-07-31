import { header } from './header.js';
import locationsPopup from './locationsPopup.js';
import { tab, character } from './state.js';
import popup from './popup.js';
import chooseCharacter from './chooseCharacter.js';
import createCharacter from './createCharacter.js';
import openHomeScreen from './utils/openHomeScreen.js';
import openSettingsScreen from './openSettingsScreen.js';
import fightScreen from './fightScreen.js';
import openPopup from './utils/openPopup.js';

const initGameBtn = document.getElementById('init-game');
initGameBtn.addEventListener('click', function () {
  fightScreen();
});

const startBtn = document.getElementById('create-character');
startBtn.addEventListener('click', function () {
  openPopup();
});

const fightScreenEl = document.getElementById('fight-screen');

if (character.isGameStarted) {
  initGameBtn.classList.remove('main__btn_hidden');
  startBtn.classList.add('main__btn_hidden');
} else {
  startBtn.classList.remove('main__btn_hidden');
  initGameBtn.classList.add('main__btn_hidden');
}

header();
popup(tab);
chooseCharacter();
createCharacter();
locationsPopup();

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
    character.isGameStarted = true;

    const popup = document.getElementById('popup');
    popup.classList.remove('popup_open');

    startBtn.classList.add('main__btn_hidden');
    initGameBtn.classList.add('main__btn_hidden');

    fightScreen();
  }

  if (e.target.closest('#return-to-game')) {
    document.getElementById('profile').classList.remove('profile_open');
    fightScreenEl.classList.add('fight_active');
  }
});
