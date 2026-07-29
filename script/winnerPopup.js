import openHomeScreen from './utils/openHomeScreen.js';

export default function winnerPopup(result, opponentResult) {
  const winnerEl = document.getElementById('winner-popup');
  winnerEl.classList.add('winner_open');

  const winnerContent = document.getElementById('winner-content');
  winnerContent.classList.add(
    `${result === 0 && opponentResult === 0 ? 'winner__content_draw' : result > 0 ? 'winner__content_win' : 'winner__content_lost'}`,
  );

  const winnerTitle = document.getElementById('winner-title');
  winnerTitle.textContent =
    result === 0 && opponentResult === 0
      ? 'Draw'
      : result > 0
        ? 'You are the Lord of Universe'
        : 'You are lost';

  const closeBtn = document.getElementById('winner-close-btn');
  closeBtn.addEventListener('click', function () {
    winnerEl.classList.remove('winner_open');
  });

  const backBtn = document.getElementById('back-to-main');
  backBtn.addEventListener('click', function () {
    winnerEl.classList.remove('winner_open');
    document.getElementById('fight-screen').classList.remove('fight_active');
    openHomeScreen();
  });
}
