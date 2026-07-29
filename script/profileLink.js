import { character } from './state.js';
import closeScreens from './utils/closeScreens.js';

export default function profileLink() {
  document.getElementById('header').addEventListener('click', function (e) {
    if (e.target.closest('#profile-link')) {
      const profileEl = document.getElementById('profile');
      profileEl.innerHTML = '';
      profileEl.classList.add('profile_open');

      if (character.id) {
        profileEl.insertAdjacentHTML(
          'afterbegin',
          `
            <h2 class="profile__title" id="profile-title">${character.name}</h2>
            <div class="profile__img-wrapper" id="profile-img-wrapper">
              <img class="profile__location" src="./assets/locations/${character.location}.webp" alt="${character.location}" />
              <img class="profile__avatar" src="./assets/aliens/${character.id}.png" alt="${character.name}'s profile" />
            </div>
            <div class="profile__btn-wrapper">
              <button class="btn" id="edit-profile">Edit</button>
              <button class="btn btn_secondary" id="return-to-main">Home</button>
            </div>
          `,
        );
      } else {
        profileEl.insertAdjacentHTML(
          'afterbegin',
          `
            <h2 class="profile__title">You didn't create a character yet</h2>
            <p>Return to Home page to create character</p>
            <button class="btn profile__btn" id="profile-btn">Home</button>
          `,
        );
      }

      closeScreens();

      document
        .getElementById('create-character')
        .classList.add('main__btn_hidden');
    }
  });
}
