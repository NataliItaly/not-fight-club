import { locations } from './data/location.js';
import { character } from './state.js';
import fightScreen from './fightScreen.js';

export default function characterView() {
  const characterViewer = document.getElementById('character-view');

  if (character.id && character.name && character.location) {
    const locationDescription = locations.find(
      (loc) => loc.id === character.location,
    );

    const characterEl = `
    <h3 class="character-view__name">${character.name}</h3>
    <div class="character-view__bg">
      <video class="character-view__video" id="character-view-video" autoplay muted loop playsinline>
        <source src="./assets/smoke-bg.mp4" type="video/mp4" />
      </video>
      <img class="character-view__img" src="./assets/aliens/${character.id}.png" alt="Your character" />
      <div class="character-view__img-wrapper">
      <img src="./assets/locations/${character.location}.webp" class="character-view__planet-img" alt="${character.location}" />
      </div>
    </div>
    <p class="character-view__planet">${locationDescription.description}</p>
    `;
    characterViewer.insertAdjacentHTML('afterbegin', characterEl);
  }

  const startGameBtn = document.getElementById('start-game-btn');
  startGameBtn.addEventListener('click', function () {
    const popup = document.getElementById('popup');
    popup.classList.remove('popup_open');

    const startBtn = document.getElementById('create-character');
    startBtn.classList.add('main__btn_hidden');

    fightScreen();
  });
}
