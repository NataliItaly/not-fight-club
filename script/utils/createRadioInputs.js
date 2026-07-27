import { constants } from '../state.js';

export default function createRadioInputs(type) {
  constants.body.forEach((bodyPart) => {
    const parent = document.getElementById(type);
    parent.insertAdjacentHTML(
      'beforeend',
      `
        <label for="${type}-${bodyPart}" class="fight__label">
          ${bodyPart}
          <input type=${type === 'defence' ? 'checkbox' : 'radio'} name="${type}" value="${bodyPart}" class="${type === 'defence' ? 'fight__checkbox' : 'fight__radio'}" id="${type}-${bodyPart}" />
        </label>
      `,
    );
  });
}
