import { header } from './header.js';
import locationsPopup from './locationsPopup.js';
import { tab, character, opponent, loadGame, saveGame } from './state.js';
import popup from './popup.js';
import chooseCharacter from './chooseCharacter.js';
import createCharacter from './createCharacter.js';
import openHomeScreen from './utils/openHomeScreen.js';
import fightScreen from './fightScreen.js';
import openPopup from './utils/openPopup.js';
import createHits from './utils/createHits.js';

loadGame();

const initGameBtn = document.getElementById('init-game');
const startBtn = document.getElementById('create-character');

if (character.id && character.name && character.location) {
  initGameBtn.classList.remove('main__btn_hidden');
  startBtn.classList.add('main__btn_hidden');
}

initGameBtn.addEventListener('click', function () {
  character.isGameStarted = true;
  saveGame();

  fightScreen();
  initGameBtn.classList.add('main__btn_hidden');
});

startBtn.addEventListener('click', function () {
  openPopup();
});

const fightScreenEl = document.getElementById('fight-screen');
if (fightScreenEl.classList.contains('fight_active')) {
  document.body.classList.add('body_fight');
  document.getElementById('video-bg').classList.add('video_hidden');
}

if (character.isGameStarted) {
  initGameBtn.classList.remove('main__btn_hidden');
  startBtn.classList.add('main__btn_hidden');
}

const fightBtn = document.getElementById('fight');
fightBtn.addEventListener('click', function () {
  console.log('fight button');
  if (character.points > 0 && opponent.points > 0) {
    createHits();
  }
});

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
    openPopup();
  }

  if (e.target.closest('#start-game-btn')) {
    character.isGameStarted = true;

    const popup = document.getElementById('popup');
    popup.classList.remove('popup_open');

    const profile = document.getElementById('profile');
    profile.classList.remove('profile_open');

    startBtn.classList.add('main__btn_hidden');
    initGameBtn.classList.add('main__btn_hidden');

    fightScreen();
  }

  if (e.target.closest('#return-to-game')) {
    document.getElementById('profile').classList.remove('profile_open');
    fightScreenEl.classList.add('fight_active');

    startBtn.classList.add('main__btn_hidden');
    initGameBtn.classList.add('main__btn_hidden');
  }
});
