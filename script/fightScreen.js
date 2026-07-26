import { character, opponent } from './state.js';
import createFighter from './utils/createFighter.js';

export default function fightScreen() {
  const hero = createFighter(character);
  const enemy = createFighter(opponent);

  const fightScreenEl = document.getElementById('fight-screen');
  fightScreenEl.classList.add('fight-screen_active');
  fightScreenEl.insertAdjacentHTML('afterbegin', hero);
  fightScreenEl.insertAdjacentHTML('beforeend', enemy);
}
