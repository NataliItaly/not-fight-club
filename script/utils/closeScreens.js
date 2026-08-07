export default function closeScreens() {
  document.getElementById('popup').classList.remove('popup_open');

  const tabs = document.querySelectorAll('.popup__tab');
  tabs.forEach((tab) => tab.classList.remove('popup__tab_active'));

  document.getElementById('fight-screen').classList.remove('fight_active');
}
