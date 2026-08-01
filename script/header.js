import openHomeScreen from './utils/openHomeScreen.js';
import closeScreens from './utils/closeScreens.js';
import { character } from './state.js';
import openPopup from './utils/openPopup.js';

export function header() {
  const header = document.getElementById('header');
  header.addEventListener('click', function (e) {
    if (e.target.closest('#home-link')) {
      openHomeScreen();
    }

    if (e.target.closest('#profile-link')) {
      const profileEl = document.getElementById('profile');
      profileEl.classList.add('profile_open');
      profileEl.innerHTML = '';
      document.body.classList.add('body_fight');
      document.getElementById('video-bg').classList.add('video_hidden');

      if (character.id) {
        console.log(
          'profile html',
          document.getElementById('profile').innerHTML,
        );

        const returnToGameBtn = character.isGameStarted
          ? `<button class="btn profile__game-btn" id="return-to-game">
              Return to Game
            </button>`
          : '';
        profileEl.innerHTML = `
            <h2 class="profile__title" id="profile-title">${character.name}</h2>
            <div class="profile__result">
              <p>Wins: <span class="profile__wins">${character.wins}</span></p>
              <p>Lost: <span class="profile__lost">${character.lost}</span></p>
              <p>Draw: <span class="profile__draw">${character.draw}</span></p>
            </div>
            <div class="profile__img-wrapper" id="profile-img-wrapper">
              <video class="profile__video" id="profile-video" autoplay muted loop playsinline>
                <source src="./assets/profile-video.mp4" type="video/mp4" />
              </video>
              <img class="profile__location" src="./assets/locations/${character.location}.webp" alt="${character.location}" />
              <img class="profile__avatar" src="./assets/aliens/${character.id}.png" alt="${character.name}'s profile" />
            </div>
            <div class="profile__btn-wrapper">
              <button class="btn" id="edit-profile">Edit</button>
              <button class="btn btn_variant" id="return-to-main">Home</button>
              ${returnToGameBtn}
            </div>
          `;
      } else {
        profileEl.innerHTML = `
            <h2 class="profile__title">You didn't create a character yet</h2>
            <p class="profile__text">Return to Home page to create character</p>
            <button class="btn profile__btn" id="profile-btn">Home</button>
          `;
      }

      closeScreens();

      document
        .getElementById('create-character')
        .classList.add('main__btn_hidden');
    }

    if (e.target.closest('#settings-link')) {
      openPopup();
    }
  });
}
