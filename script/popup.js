import { character, saveGame } from './state.js';

export default function popup(tab) {
  const popup = document.getElementById('popup');

  popup.addEventListener('click', function (e) {
    const characterInput = document.getElementById('character-input');
    if (character.name) characterInput.value = character.name;

    const locationsList = document.getElementById('locations-list');
    const listItems = locationsList.querySelectorAll('.list__item');
    if (character.location) {
      listItems.forEach((item) => {
        item.classList.add('list__item_fade');
        if (item.id === character.location)
          item.classList.remove('list__item_fade');
      });
    } else {
      listItems.forEach((item) => item.classList.remove('list__item_fade'));
    }

    const tabs = popup.querySelectorAll('.popup__tab');
    if (e.target.classList.contains('btn_next')) {
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
      if (
        document
          .getElementById('fight-screen')
          .classList.contains('fight_active')
      ) {
        document
          .getElementById('create-character')
          .classList.add('main__btn_hidden');

        document.getElementById('init-game').classList.add('main__btn_hidden');
      }

      tabs.forEach((t) => t.classList.remove('popup__tab_active'));
      popup.classList.remove('popup_open');
      tab.index = 0;
    }
  });
}

/*  if (character.id && character.name && character.location) {
        document
          .getElementById('create-character')
          .classList.add('main__btn_hidden');

        document
          .getElementById('init-game')
          .classList.remove('main__btn_hidden');
      } */
