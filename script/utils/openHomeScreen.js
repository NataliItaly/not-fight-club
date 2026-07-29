import closeScreens from './closeScreens.js';

export default function openHomeScreen() {
  closeScreens();

  document
    .getElementById('create-character')
    .classList.remove('main__btn_hidden');

  document.getElementById('profile').classList.remove('profile_open');
}
