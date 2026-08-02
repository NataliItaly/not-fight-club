import { constants, character } from '../state.js';

export default function createRadioInputs(type) {
  const parent = document.getElementById(type);
  parent.innerHTML = '';

  constants.body.forEach((bodyPart) => {
    const isChecked =
      (type === 'defence' && character.defenceZones.includes(bodyPart)) ||
      (type === 'attack' && character.attackZones.includes(bodyPart));

    parent.insertAdjacentHTML(
      'beforeend',
      `
        <label for="${type}-${bodyPart}" class="fight__label">
          ${bodyPart}
          <input type=${type === 'defence' ? 'checkbox' : 'radio'} name="${type}" value="${bodyPart}" class="${type === 'defence' ? 'fight__checkbox' : 'fight__radio'}" id="${type}-${bodyPart}" ${isChecked ? 'checked' : ''} />
        </label>
      `,
    );
  });
}
