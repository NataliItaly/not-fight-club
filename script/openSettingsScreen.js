export default function openSettingsScreen() {
  const popup = document.getElementById('popup');
  popup.classList.add('popup_open');

  const tabs = document.querySelectorAll('.popup__tab');
  tabs[0].classList.add('popup__tab_active');

  const characterInput = document.getElementById('character-input');
  characterInput.value = '';

  document.getElementById('fight-screen').classList.remove('fight_active');
  document.getElementById('profile').classList.remove('profile_open');
  document.body.classList.remove('body_fight');
  document.getElementById('video-bg').classList.remove('video_hidden');
}
