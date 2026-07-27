import { character, opponent } from './state.js';
import createFighter from './utils/createFighter.js';
import createOpponent from './utils/createOpponent.js';
import createRadioInputs from './utils/createRadioInputs.js';
import updateInputs from './utils/updateInputs.js';
import { gameState } from './state.js';

export default function fightScreen() {
  const hero = createFighter(character);
  createOpponent();
  const enemy = createFighter(opponent);

  document.body.classList.add('body_fight');
  document.getElementById('video-bg').classList.add('video_hidden');

  const fightScreenEl = document.getElementById('fight-screen');
  fightScreenEl.classList.add('fight-screen_active');
  fightScreenEl.insertAdjacentHTML('afterbegin', hero);
  fightScreenEl.insertAdjacentHTML('beforeend', enemy);

  createRadioInputs('defence');
  createRadioInputs('attack');

  const checkboxeElems = document.querySelectorAll('.fight__checkbox');
  checkboxeElems.forEach((cb) => {
    cb.addEventListener('change', updateInputs);
  });

  const radioInputs = document.querySelectorAll('.fight__radio');
  radioInputs.forEach((rd) => {
    rd.addEventListener('change', updateInputs);
  });
}
