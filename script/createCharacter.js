import { character } from './state.js';

export default function createCharacter() {
  const characterInput = document.getElementById('character-input');

  characterInput.addEventListener('input', function (e) {
    const name = characterInput.value;
    if (name) {
      character.name = name;
      document.getElementById('choose-name-btn').disabled = false;
    }
  });
}
