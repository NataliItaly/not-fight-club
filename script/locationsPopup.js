import { locations } from './data/location.js';

export default function locationsPopup() {
  const list = document.getElementById('locations-list');
  locations.forEach((loc) => {
    const li = `
      <li class="list__item locations__item" id=${loc.id}>
        <img class="list__img" src="./assets/locations/${loc.id}.webp" alt="" />
      </li>
    `;
    list.insertAdjacentHTML('beforeend', li);
  });
  console.log(list);

  list.addEventListener('click', function (e) {
    if (e.target.closest('.list__item')) {
      console.log(e.target.closest('.list__item').id);
    }
  });
}
