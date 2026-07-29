export default function openPopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('popup_open');

  const tabs = document.querySelectorAll('.popup__tab');
  tabs[0].classList.add('popup__tab_active');

  const characterInput = document.getElementById('character-input');
  characterInput.value = '';
}
