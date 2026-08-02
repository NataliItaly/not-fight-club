import { character, opponent } from './state.js';
import createFighter from './utils/createFighter.js';
import createOpponent from './utils/createOpponent.js';
import createRadioInputs from './utils/createRadioInputs.js';
import updateInputs from './utils/updateInputs.js';
import createHits from './utils/createHits.js';
import createSpheres from './utils/createSpheres.js';

export default function fightScreen() {
  if (!opponent.name && !opponent.id) {
    createOpponent();
  }

  const fighterElems = document.querySelectorAll('.fight__fighter');
  fighterElems.forEach((el) => (el.innerHTML = ''));

  fighterElems[0].innerHTML = createFighter(character);
  createSpheres(character);
  fighterElems[1].innerHTML = createFighter(opponent);
  createSpheres(opponent);

  document.body.classList.add('body_fight');
  document.getElementById('video-bg').classList.add('video_hidden');

  const fightScreenEl = document.getElementById('fight-screen');
  fightScreenEl.classList.add('fight_active');

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

  const fightBtn = document.getElementById('fight');
  fightBtn.disabled =
    character.defenceZones.length < 2 && character.attackZones.length < 1;
  fightBtn.addEventListener('click', function () {
    if (character.points > 0 && opponent.points > 0) {
      createHits();
    }
  });

  const fightOutputEl = document.getElementById('fight-output');
  fightOutputEl.innerHTML = '';
  console.log('output', character.gameOutput);
  character.gameOutput.forEach((out) => (fightOutputEl.innerHTML += out));
}
