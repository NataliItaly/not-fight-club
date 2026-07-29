import { character } from './state.js';
import resetCharacter from './utils/resetCharacter.js';

export default function popup(tab) {
  const popup = document.getElementById('popup');

  popup.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn_next')) {
      const tabs = popup.querySelectorAll('.popup__tab');
      tabs.forEach((t) => t.classList.remove('popup__tab_active'));

      if (tab.index <= 3) {
        tab.index += 1;
        const currentTab = tabs[tab.index];
        currentTab.classList.add('popup__tab_active');
      } else {
        tab.index = 0;
        popup.classList.remove('popup_open');
      }
    }

    if (e.target.closest('#close-popup')) {
      const tabs = popup.querySelectorAll('.popup__tab');
      tabs.forEach((t) => t.classList.remove('popup__tab_active'));
      popup.classList.remove('popup_open');
      tab.index = 0;
      //resetCharacter();

      document
        .getElementById('create-character')
        .classList.remove('main__btn_hidden');
    }
  });
}
