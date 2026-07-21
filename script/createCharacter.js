import { state } from './state';

export function createCharacter() {
  const form = document.querySelector('.create__form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const character = form.querySelector('#character');
    if (character) {
      state.character = character.value;
      console.log(state);
    }
  });
}
