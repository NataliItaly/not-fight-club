import playSound from './utils/playSound.js';

export default function winnerPopup(result, opponentResult) {
  const winnerEl = document.getElementById('winner-popup');
  winnerEl.classList.add('winner_open');
  const winnerContent = document.getElementById('winner-content');
  const winnerTitle = document.getElementById('winner-title');

  if (result <= 0 && opponentResult <= 0) {
    winnerContent.classList.add('winner__content_draw');
    playSound('draw');
    winnerTitle.textContent = 'Draw';
  } else if (result > 0 && opponentResult <= 0) {
    winnerContent.classList.add('winner__content_win');
    playSound('win');
    winnerTitle.textContent = 'You are the Lord of Universe';
  } else if (result <= 0 && opponentResult > 0) {
    winnerContent.classList.add('winner__content_lost');
    playSound('lost');
    winnerTitle.textContent = 'You are lost';
  }
}
