import closeScreens from './closeScreens.js';
import { character } from '../state.js';

export default function openHomeScreen() {
  closeScreens();

  document.body.classList.remove('body_fight');
  document.getElementById('video-bg').classList.remove('video_hidden');

  if (
    character.isGameStarted ||
    (character.id && character.name && character.location)
  ) {
    document.getElementById('init-game').classList.remove('main__btn_hidden');

    document
      .getElementById('create-character')
      .classList.add('main__btn_hidden');
  } else {
    document
      .getElementById('create-character')
      .classList.remove('main__btn_hidden');

    document.getElementById('init-game').classList.add('main__btn_hidden');
  }

  document.getElementById('profile').classList.remove('profile_open');
}
