import { character, opponent } from './state.js';
import createFighter from './utils/createFighter.js';
import createOpponent from './utils/createOpponent.js';

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
}
