const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', function () {
  const createPopup = document.getElementById('create-popup');
  console.log(createPopup);
  createPopup.classList.add('create_open');
});

const closePopupBtn = document.getElementById('create-close-btn');
closePopupBtn.addEventListener('click', function () {
  const createPopup = document.getElementById('create-popup');
  createPopup.classList.remove('create_open');
});

const createCheracterBtn = document.getElementById('create-character');
createCheracterBtn.addEventListener('click', function () {
  const createPopup = document.getElementById('create-popup');
  createPopup.classList.remove('create_open');
});
