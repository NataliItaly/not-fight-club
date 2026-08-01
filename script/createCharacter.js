import { character, saveGame } from './state.js';
import escapeHtml from './utils/escapeHtml.js';

export default function createCharacter() {
  const chooseNameBtn = document.getElementById('choose-name-btn');
  chooseNameBtn.disabled = !character.name;

  const characterInput = document.getElementById('character-input');
  console.log(character);
  if (character.name) characterInput.value = character.name;

  characterInput.addEventListener('input', function (e) {
    const name = escapeHtml(characterInput.value).trim();
    if (name) {
      character.name = name;
      document.getElementById('choose-name-btn').disabled = false;

      saveGame();
    }
  });
}
