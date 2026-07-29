import { character, constants } from './state.js';
import getRandomNumber from './utils/getRandomNumber.js';

export default function chooseCharacter() {
  const list = document.getElementById('choose-character-list');

  Array.from({ length: constants.charactersNumber }, (_, i) => i + 1).forEach(
    (_, i) => {
      const li = `
        <li class="list__item list__item_vertical choose-character__item" id=${i + 1}>
          <img class="list__img" src="./assets/aliens/${i + 1}.png" alt="Alien character" />
        </li>
      `;
      list.insertAdjacentHTML('beforeend', li);
    },
  );

  list.addEventListener('click', function (e) {
    if (e.target.closest('.list__item')) {
      const listItems = list.querySelectorAll('.list__item');
      listItems.forEach((item) => item.classList.remove('list__item_active'));
      e.target.closest('.list__item').classList.add('list__item_active');
      character.id = e.target.closest('.list__item').id;
      if (character.id) {
        document.getElementById('choose-character-btn').disabled = false;
      }
    }
  });

  const randomBtn = document.getElementById('get-random-character');
  randomBtn.addEventListener('click', function () {
    const randomNum = getRandomNumber(constants.charactersNumber);
    character.id = randomNum + 1;
  });
}
