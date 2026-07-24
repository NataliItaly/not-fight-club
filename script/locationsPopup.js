import { locations } from './data/location.js';
import { character, constants } from './state.js';
import getRandomNumber from './utils/getRandomNumber.js';

export default function locationsPopup() {
  const list = document.getElementById('locations-list');
  locations.forEach((loc) => {
    const li = `
      <li class="list__item locations__item" id=${loc.id}>
        <img class="list__img locations__img" src="./assets/locations/${loc.id}.webp" alt="" />
      </li>
    `;
    list.insertAdjacentHTML('beforeend', li);
  });
  //console.log(list);

  list.addEventListener('click', function (e) {
    if (e.target.closest('.list__item')) {
      character.location = e.target.closest('.list__item').id;
      const listItems = list.querySelectorAll('.list__item');

      listItems.forEach((item) => item.classList.add('list__item_fade'));
      e.target.closest('.list__item').classList.remove('list__item_fade');
    }
    if (e.target.closest('#get-random-location')) {
      const randomNum = getRandomNumber(constants.locationsNumber);
      character.location = locations[randomNum];
    }
  });

  const locationsEl = document.getElementById('locations-popup');
  locationsEl.addEventListener('click', function (e) {
    if (e.target.closest('#submit-game')) {
      console.log(character);
    }
  });
}
