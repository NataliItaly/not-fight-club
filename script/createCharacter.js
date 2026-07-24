import { character } from './state';

export function createCharacter() {
  const form = document.querySelector('.create__form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('#character').value;
    if (name) {
      character.name = name;
      console.log(character);
    }
  });
}
