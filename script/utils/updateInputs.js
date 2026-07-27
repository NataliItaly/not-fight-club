import { character, opponent, constants } from '../state.js';
import getRandomNumber from './getRandomNumber.js';

export default function updateInputs() {
  const checkboxeElems = document.querySelectorAll('.fight__checkbox');

  const checked = [...checkboxeElems].filter((cb) => cb.checked);

  checkboxeElems.forEach((cb) => {
    cb.disabled = checked.length >= 2 && !cb.checked;
  });

  const selected = document.querySelector('input[name="attack"]:checked');

  const fightBtn = document.getElementById('fight');
  if (selected && checked.length === 2) {
    character.attackZones = [selected.value];
    character.defenceZones = [...checked.map((el) => el.value)];

    opponent.attackZones = [
      constants.body[getRandomNumber(constants.body.length - 1)],
    ];

    const defenceZones = [];
    while (defenceZones.length < 2) {
      const n = getRandomNumber(constants.body.length - 1);
      if (!defenceZones.includes(n)) {
        defenceZones.push(n);
      }
    }
    opponent.defenceZones = defenceZones.map((el) => constants.body[el]);
    console.log(character, opponent);
    fightBtn.disabled = false;
  } else {
    fightBtn.disabled = true;
  }
}
