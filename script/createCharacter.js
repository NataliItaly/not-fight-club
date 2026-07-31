import { character } from './state.js';
import escapeHtml from './utils/escapeHtml.js';

export default function createCharacter() {
  const characterInput = document.getElementById('character-input');

  characterInput.addEventListener('input', function (e) {
    const name = escapeHtml(characterInput.value).trim();
    if (name) {
      character.name = name;
      document.getElementById('choose-name-btn').disabled = false;
    }
  });
}
